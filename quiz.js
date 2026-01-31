/**
 * quiz.js — Shared quiz engine
 * Expects: global `questions` array before this script.
 * Sections (<=35q): sticky progress bar (scroll=50%, quiz pass=100%), localStorage, postMessage
 * Mock exams (70q): none of the above
 */

function esc(str) {
    if (!str) return '';
    return String(str).replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

var isSection = (questions.length <= 35);

// ─── STORAGE KEY ─────────────────────────────────────────
function getSectionKey() {
    var match = document.title.match(/Section (\d)/);
    return match ? 'section' + match[1] : null;
}

var sectionKey = isSection ? getSectionKey() : null;

// ─── RENDER ──────────────────────────────────────────────
function renderQuiz() {
    var container = document.getElementById('quiz');
    var html = '';

    questions.forEach(function(q, idx) {
        var multiLabel = q.multiple ? ' <strong>(Choose ' + q.correct.length + ' answers)</strong>' : '';
        html += '<div class="question" id="q' + idx + '">'
            + '<div class="question-number">Question ' + (idx + 1) + ' of ' + questions.length + '</div>'
            + '<div class="question-text">' + esc(q.q) + multiLabel + '</div>'
            + '<ul class="options">';
        q.options.forEach(function(opt, optIdx) {
            var inputType = q.multiple ? 'checkbox' : 'radio';
            html += '<li class="option"><label><input type="' + inputType + '" name="q' + idx + '" value="' + optIdx + '"> ' + esc(opt) + '</label></li>';
        });
        html += '</ul>'
            + '<div class="explanation" id="exp' + idx + '"><strong>📚 Explanation:</strong> ' + (esc(q.explanation) || 'Coming soon...') + '</div>'
            + '</div>';
    });

    container.innerHTML = html;
}

// ─── STICKY PROGRESS BAR ─────────────────────────────────
// States: 0% (start) → 50% (scrolled to quiz) → 100% (quiz passed)
function setProgress(pct) {
    var fill = document.getElementById('progFill');
    var count = document.getElementById('progCount');
    if (!fill || !count) return;

    fill.style.width = pct + '%';
    fill.style.background = pct < 50 ? '#E34850' : pct < 100 ? '#F29423' : '#2D9D78';
    count.textContent = pct + '%';
}

// ─── SCROLL DETECTION ────────────────────────────────────
var scrollDetected = false;

function initScrollDetection() {
    if (!isSection || !sectionKey) return;

    // Restore from localStorage
    if (localStorage.getItem('marketo_' + sectionKey + '_scrolled') === 'true') {
        scrollDetected = true;
        setProgress(localStorage.getItem('marketo_' + sectionKey + '_quiz') === 'true' ? 100 : 50);
        return;
    }

    window.addEventListener('scroll', onScroll);
}

function onScroll() {
    if (scrollDetected) return;

    var quizSection = document.querySelector('.quiz-section');
    if (!quizSection) return;

    var rect = quizSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.85) {
        scrollDetected = true;
        window.removeEventListener('scroll', onScroll);

        localStorage.setItem('marketo_' + sectionKey + '_scrolled', 'true');
        setProgress(50);
        notifyParent();
    }
}

// ─── NOTIFY PARENT ───────────────────────────────────────
function notifyParent() {
    if (!isSection || !sectionKey || window.parent === window) return;

    window.parent.postMessage({
        type: 'sectionProgress',
        key: sectionKey,
        scrolled: scrollDetected,
        quizPassed: localStorage.getItem('marketo_' + sectionKey + '_quiz') === 'true'
    }, '*');
}

// ─── SUBMIT ──────────────────────────────────────────────
function submitQuiz() {
    var correct = 0;
    var total = questions.length;
    questions.forEach(function(q, idx) {
        var questionDiv = document.getElementById('q' + idx);
        var selected = Array.from(document.querySelectorAll('input[name="q' + idx + '"]:checked')).map(function(input) { return parseInt(input.value); });
        var isCorrect = JSON.stringify(selected.slice().sort()) === JSON.stringify(q.correct.slice().sort());

        if (isCorrect) {
            correct++;
            questionDiv.classList.add('correct');
            questionDiv.classList.remove('incorrect');
        } else {
            questionDiv.classList.add('incorrect');
            questionDiv.classList.remove('correct');
        }

        var options = questionDiv.querySelectorAll('.option');
        options.forEach(function(opt, optIdx) {
            if (q.correct.includes(optIdx)) opt.classList.add('correct-answer');
            if (selected.includes(optIdx) && !q.correct.includes(optIdx)) opt.classList.add('wrong-answer');
        });

        document.getElementById('exp' + idx).classList.add('show');
    });

    var percentage = Math.round((correct / total) * 100);
    var passed = percentage >= 70;
    var scoreDiv = document.getElementById('quizScore');
    scoreDiv.className = 'quiz-score show' + (passed ? '' : ' fail');
    scoreDiv.innerHTML = '<div style="font-size:2rem;margin-bottom:0.8rem">' + (passed ? '🎉' : '📚') + ' Score: ' + correct + '/' + total + ' (' + percentage + '%)</div>'
        + '<div style="font-size:1.2rem">' + (passed ? '✅ PASS! Great job! You are ready for the exam.' : '❌ Keep studying. You need 70% to pass.') + '</div>';
    document.getElementById('resetBtn').style.display = 'inline-block';
    scoreDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Update sticky progress + localStorage — sections only
    if (isSection && sectionKey) {
        if (passed) {
            localStorage.setItem('marketo_' + sectionKey + '_quiz', 'true');
            setProgress(100);
        }
        notifyParent();
    }
}

// ─── RESET ───────────────────────────────────────────────
function resetQuiz() {
    document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(function(input) { input.checked = false; });
    document.querySelectorAll('.question').forEach(function(q) { q.classList.remove('correct', 'incorrect'); });
    document.querySelectorAll('.option').forEach(function(opt) { opt.classList.remove('correct-answer', 'wrong-answer'); });
    document.querySelectorAll('.explanation').forEach(function(exp) { exp.classList.remove('show'); });
    document.getElementById('quizScore').classList.remove('show');
    document.getElementById('resetBtn').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── INIT ────────────────────────────────────────────────
renderQuiz();
if (isSection) {
    initScrollDetection();
    notifyParent();
}
