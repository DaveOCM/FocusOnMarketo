/**
 * quiz.js — Shared quiz engine
 * Expects: global `questions` array before this script.
 * Sections (<=35q): gradual progress bar (scroll + quiz answers), localStorage, postMessage
 * Mock exams (70q): none of the above
 */

var isSection = (questions.length <= 35);

// ─── STORAGE KEY ─────────────────────────────────────────
function getSectionKey() {
    const match = document.title.match(/Section (\d)/);
    return match ? 'section' + match[1] : null;
}

const sectionKey = isSection ? getSectionKey() : null;

// ─── RENDER ──────────────────────────────────────────────
function renderQuiz() {
    const container = document.getElementById('quiz');
    let html = '';

    questions.forEach((q, idx) => {
        const multiLabel = q.multiple ? ` <strong>(Choose ${q.correct.length} answers)</strong>` : '';
        html += `<div class="question" id="q${idx}">
            <div class="question-number">Question ${idx + 1} of ${questions.length}</div>
            <div class="question-text">${q.q}${multiLabel}</div>
            <ul class="options">`;
        q.options.forEach((opt, optIdx) => {
            const inputType = q.multiple ? 'checkbox' : 'radio';
            html += `<li class="option"><label><input type="${inputType}" name="q${idx}" value="${optIdx}"> ${opt}</label></li>`;
        });
        html += `</ul>
            <div class="explanation" id="exp${idx}"><strong>📚 Explanation:</strong> ${q.explanation || 'Coming soon...'}</div>
        </div>`;
    });

    container.innerHTML = html;

    // Bind answer tracking — sections only
    if (isSection) {
        container.addEventListener('change', function(e) {
            if (e.target.tagName === 'INPUT') updateProgressFromAnswers();
        });
    }
}

// ─── GRADUAL PROGRESS BAR ────────────────────────────────
// Progress = 50% from scroll + 50% from quiz completion
var scrollProgress = 0;    // 0-50
var quizProgress = 0;       // 0-50
var quizCompleted = false;

function setProgress(pct) {
    const fill = document.getElementById('progFill');
    const count = document.getElementById('progCount');
    if (!fill || !count) return;

    fill.style.width = pct + '%';
    count.textContent = Math.round(pct) + '%';

    // Gradient color: red → orange → yellow → green
    // 0-25%: red to orange, 25-50%: orange to yellow, 50-75%: yellow to light green, 75-100%: light green to dark green
    let color1, color2;
    if (pct < 25) {
        // Red to Orange
        color1 = '#E34850';
        color2 = interpolateColor('#E34850', '#F29423', pct / 25);
    } else if (pct < 50) {
        // Orange to Yellow
        color1 = interpolateColor('#F29423', '#F9C74F', (pct - 25) / 25);
        color2 = interpolateColor('#F29423', '#F9C74F', (pct - 25) / 25);
    } else if (pct < 75) {
        // Yellow to Light Green
        color1 = interpolateColor('#F9C74F', '#90BE6D', (pct - 50) / 25);
        color2 = interpolateColor('#F9C74F', '#90BE6D', (pct - 50) / 25);
    } else {
        // Light Green to Dark Green
        color1 = interpolateColor('#90BE6D', '#2D9D78', (pct - 75) / 25);
        color2 = interpolateColor('#90BE6D', '#2D9D78', (pct - 75) / 25);
    }

    fill.style.background = `linear-gradient(90deg, ${color1}, ${color2})`;
}

// Interpolate between two hex colors
function interpolateColor(color1, color2, factor) {
    const c1 = hexToRgb(color1);
    const c2 = hexToRgb(color2);
    const r = Math.round(c1.r + (c2.r - c1.r) * factor);
    const g = Math.round(c1.g + (c2.g - c1.g) * factor);
    const b = Math.round(c1.b + (c2.b - c1.b) * factor);
    return `rgb(${r}, ${g}, ${b})`;
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
}

function updateTotalProgress() {
    const total = scrollProgress + quizProgress;
    setProgress(total);
}

// ─── SCROLL TRACKING ─────────────────────────────────────
var scrollInitialized = false;

function initScrollDetection() {
    if (!isSection || !sectionKey || scrollInitialized) return;
    scrollInitialized = true;

    // Check if quiz already completed (100%)
    if (localStorage.getItem('marketo_' + sectionKey + '_quiz') === 'true') {
        scrollProgress = 50;
        quizProgress = 50;
        quizCompleted = true;
        updateTotalProgress();
        return;
    }

    // Check if user has scrolled before
    if (localStorage.getItem('marketo_' + sectionKey + '_scrolled') === 'true') {
        scrollProgress = 50;
        updateTotalProgress();
    }

    // Start listening to scroll
    window.addEventListener('scroll', onScroll);
}

function onScroll() {
    if (scrollProgress >= 50) return; // Already at max scroll progress

    const quizSection = document.querySelector('.quiz-section');
    if (!quizSection) return;

    // Calculate scroll progress based on how close we are to the quiz section
    const rect = quizSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Quiz section position
    const quizTop = scrollTop + rect.top;
    
    // Calculate percentage scrolled toward quiz (0-50%)
    const maxScroll = quizTop - windowHeight * 0.2; // Start showing quiz when 20% into viewport
    const currentScroll = Math.max(0, scrollTop);
    const scrollPercent = Math.min(1, currentScroll / maxScroll);
    
    scrollProgress = scrollPercent * 50;
    updateTotalProgress();

    // Mark as scrolled when reached quiz
    if (scrollPercent >= 0.95 && !localStorage.getItem('marketo_' + sectionKey + '_scrolled')) {
        localStorage.setItem('marketo_' + sectionKey + '_scrolled', 'true');
        notifyParent();
    }
}

// ─── QUIZ ANSWER TRACKING ────────────────────────────────
function updateProgressFromAnswers() {
    if (quizCompleted) return; // Don't update if already completed

    let answered = 0;
    for (let i = 0; i < questions.length; i++) {
        if (document.querySelectorAll('input[name="q' + i + '"]:checked').length > 0) {
            answered++;
        }
    }

    // Quiz progress: 0-50% based on answered questions (not correctness)
    quizProgress = (answered / questions.length) * 50;
    updateTotalProgress();
}

// ─── NOTIFY PARENT ───────────────────────────────────────
function notifyParent() {
    if (!isSection || !sectionKey || window.parent === window) return;

    window.parent.postMessage({
        type: 'sectionProgress',
        key: sectionKey,
        scrolled: scrollProgress >= 50,
        quizPassed: quizCompleted
    }, '*');
}

// ─── SUBMIT ──────────────────────────────────────────────
function submitQuiz() {
    let correct = 0;
    const total = questions.length;
    questions.forEach((q, idx) => {
        const questionDiv = document.getElementById('q' + idx);
        const selected = Array.from(document.querySelectorAll('input[name="q' + idx + '"]:checked')).map(input => parseInt(input.value));
        const isCorrect = JSON.stringify(selected.slice().sort()) === JSON.stringify(q.correct.slice().sort());

        if (isCorrect) {
            correct++;
            questionDiv.classList.add('correct');
            questionDiv.classList.remove('incorrect');
        } else {
            questionDiv.classList.add('incorrect');
            questionDiv.classList.remove('correct');
        }

        const options = questionDiv.querySelectorAll('.option');
        options.forEach((opt, optIdx) => {
            if (q.correct.includes(optIdx)) opt.classList.add('correct-answer');
            if (selected.includes(optIdx) && !q.correct.includes(optIdx)) opt.classList.add('wrong-answer');
        });

        document.getElementById('exp' + idx).classList.add('show');
    });

    const percentage = Math.round((correct / total) * 100);
    const passed = percentage >= 70;
    const scoreDiv = document.getElementById('quizScore');
    scoreDiv.className = 'quiz-score show' + (passed ? '' : ' fail');
    scoreDiv.innerHTML = `<div style="font-size:2rem;margin-bottom:0.8rem">${passed ? '🎉' : '📚'} Score: ${correct}/${total} (${percentage}%)</div>
        <div style="font-size:1.2rem">${passed ? '✅ PASS! Great job! You are ready for the exam.' : '❌ Keep studying. You need 70% to pass.'}</div>`;
    document.getElementById('resetBtn').style.display = 'inline-block';
    scoreDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Update progress — sections only
    if (isSection && sectionKey) {
        if (passed) {
            quizCompleted = true;
            scrollProgress = 50;  // Ensure scroll is maxed
            quizProgress = 50;    // Ensure quiz is maxed
            updateTotalProgress(); // Should show 100%
            localStorage.setItem('marketo_' + sectionKey + '_quiz', 'true');
            localStorage.setItem('marketo_' + sectionKey + '_scrolled', 'true');
        }
        notifyParent();
    }
}

// ─── RESET ───────────────────────────────────────────────
function resetQuiz() {
    document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(input => { input.checked = false; });
    document.querySelectorAll('.question').forEach(q => { q.classList.remove('correct', 'incorrect'); });
    document.querySelectorAll('.option').forEach(opt => { opt.classList.remove('correct-answer', 'wrong-answer'); });
    document.querySelectorAll('.explanation').forEach(exp => { exp.classList.remove('show'); });
    document.getElementById('quizScore').classList.remove('show');
    document.getElementById('resetBtn').style.display = 'none';
    
    // Reset progress variables — sections only
    if (isSection) {
        quizProgress = 0;
        // Keep scrollProgress at 50 if they already scrolled (they can't "unread" content)
        // But if they want full reset, clear localStorage too
        updateTotalProgress();
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── RESET SECTION PROGRESS ──────────────────────────────
function resetSectionProgress() {
    if (!isSection || !sectionKey) {
        alert('Reset only available for study sections.');
        return;
    }
    
    if (!confirm('Are you sure you want to reset all progress for this section? This will clear your quiz results and scroll progress.')) {
        return;
    }
    
    // Clear localStorage
    localStorage.removeItem('marketo_' + sectionKey + '_scrolled');
    localStorage.removeItem('marketo_' + sectionKey + '_quiz');
    
    // Reset all progress variables
    scrollProgress = 0;
    quizProgress = 0;
    quizCompleted = false;
    
    // Reset quiz UI
    resetQuiz();
    
    // Update progress bar to 0%
    setProgress(0);
    
    // Notify parent (index.html) to update badges
    notifyParent();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    alert('✅ Section progress has been reset!');
}

// ─── INIT ────────────────────────────────────────────────
renderQuiz();
if (isSection) {
    initScrollDetection();
    notifyParent();
}
