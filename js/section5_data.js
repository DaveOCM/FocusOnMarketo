const questions = [
            {
                q: "What is the formula for Open Rate?",
                options: [
                    "Opens ÷ Sent",
                    "Opens ÷ Delivered",
                    "Delivered ÷ Opens",
                    "Sent ÷ Opens"
                ],
                correct: [1],
                explanation: "Open Rate = (Opens ÷ Delivered) × 100%. Use DELIVERED not Sent, because Sent includes bounces which cannot open emails."
            },
            {
                q: "What is the formula for Click-to-Open Rate?",
                options: [
                    "Clicks ÷ Delivered",
                    "Clicks ÷ Opens",
                    "Opens ÷ Clicks",
                    "Clicks ÷ Sent"
                ],
                correct: [1],
                explanation: "Click-to-Open Rate = (Clicks ÷ Opens) × 100%. Measures content effectiveness: of people who opened, how many clicked?"
            },
            {
                q: "An email was sent to 1,000 people. 50 bounced, 950 were delivered, and 380 opened the email. What is the Open Rate?",
                options: [
                    "38%",
                    "40%",
                    "35%",
                    "50%"
                ],
                correct: [1],
                explanation: "Open Rate = (Opens ÷ Delivered) × 100% = (380 ÷ 950) × 100% = 40%. Always use Delivered (not Sent) as the denominator because bounced emails cannot be opened."
            },
            {
                q: "Which report supports filtering by Channels and Custom Tags?",
                options: [
                    "Email Performance",
                    "Program Performance",
                    "Campaign Activity",
                    "Landing Page Performance"
                ],
                correct: [1],
                explanation: "Program Performance Report supports Channel and Tag filtering. Email Performance, Campaign Activity, and Landing Page Performance do NOT support this."
            },
            {
                q: "What is the difference between Click Rate and Click-to-Open Rate?",
                options: [
                    "No difference",
                    "Click Rate = Clicks÷Delivered; Click-to-Open = Clicks÷Opens",
                    "Click Rate is more accurate",
                    "Click-to-Open is deprecated"
                ],
                correct: [1],
                explanation: "Click Rate measures overall effectiveness (Clicks÷Delivered). Click-to-Open measures content effectiveness among openers (Clicks÷Opens)."
            },
            {
                q: "In the Campaign Activity Report, you see 'People in Wait Step: 250'. What does this mean?",
                options: [
                    "250 stuck in error",
                    "250 currently paused in Wait steps",
                    "250 completed campaign",
                    "250 removed"
                ],
                correct: [1],
                explanation: "People in Wait Step shows how many people are currently paused in Wait steps within that campaign's flows."
            },
            {
                q: "What type of content does a Report Subscription send?",
                options: [
                    "List of people",
                    "Aggregated metrics and summary data",
                    "Only to admins",
                    "Real-time alerts"
                ],
                correct: [1],
                explanation: "Report Subscriptions send aggregated metrics and summary data (like Email Performance stats). Smart List Subscriptions send lists of actual people."
            },
            {
                q: "What type of content does a Smart List Subscription send?",
                options: [
                    "Summary metrics",
                    "List of people who qualify for the Smart List",
                    "Only open rates",
                    "Campaign statistics"
                ],
                correct: [1],
                explanation: "Smart List Subscriptions send a list of PEOPLE (with their field values) who currently qualify for the Smart List - similar to an Excel export."
            },
            {
                q: "What information does the Email Link Performance Report show?",
                options: [
                    "Which specific links got clicked most",
                    "Total email opens",
                    "Unsubscribe rates",
                    "Bounce statistics"
                ],
                correct: [0],
                explanation: "Email Link Performance shows each link URL, click counts, unique clickers, and percentage of total clicks. Use it to optimize link placement and CTAs."
            },
            {
                q: "What does 'New Names' mean in the Program Performance Report?",
                options: [
                    "Total program members",
                    "New people acquired by this program",
                    "People who changed names",
                    "Recent contacts"
                ],
                correct: [1],
                explanation: "New Names = people acquired by this specific program (first time in database via this program). It's used to measure the program's lead generation effectiveness."
            },
            {
                q: "What is the formula for Cost per Success in Marketo?",
                options: [
                    "Success ÷ Total Cost",
                    "Total Cost ÷ Success",
                    "Total Members ÷ Cost",
                    "Revenue ÷ Cost"
                ],
                correct: [1],
                explanation: "Cost per Success = Total Cost ÷ Number of Successes. A lower number is better - it shows you're efficiently converting program members to success status."
            },
            {
                q: "Why use Delivered instead of Sent for rate calculations?",
                options: [
                    "Delivered is more accurate",
                    "Sent includes bounces which can't open/click",
                    "Marketo requires it",
                    "Delivered counts only opens"
                ],
                correct: [1],
                explanation: "Sent = Delivered + Bounced. Bounced emails can't open or click, so they shouldn't be in denominator. Use Delivered for accurate rates."
            },
            {
                q: "What can Text Only emails track?",
                options: [
                    "Opens and clicks",
                    "Only clicks",
                    "Only opens",
                    "Neither opens nor clicks"
                ],
                correct: [1],
                explanation: "Text Only emails can track CLICKS (via link redirects) but NOT opens (no image pixel). HTML emails can track both."
            },
            {
                q: "A program has an ROI of 400% and a total cost of $10,000. What is the program's revenue?",
                options: [
                    "$40,000",
                    "$50,000",
                    "$4,000",
                    "$14,000"
                ],
                correct: [1],
                explanation: "ROI = [(Revenue - Cost) ÷ Cost] × 100%. If ROI = 400%, then (Revenue - $10,000) ÷ $10,000 = 4. So Revenue - $10,000 = $40,000, meaning Revenue = $50,000."
            },
            {
                q: "Email Performance Report can filter by:",
                options: [
                    "Specific email(s)",
                    "Channels",
                    "Custom Tags",
                    "All of above"
                ],
                correct: [0],
                explanation: "Email Performance filters by specific emails, date ranges, workspace. It does NOT support Channel/Tag filtering (only Program Performance does)."
            },
            {
                q: "What is the difference between Campaign Email Performance and Email Performance reports?",
                options: [
                    "No difference",
                    "Campaign Email Performance groups emails by smart campaign",
                    "Campaign Email Performance is more accurate",
                    "Campaign Email Performance includes bounces"
                ],
                correct: [1],
                explanation: "Email Performance shows stats for individual emails. Campaign Email Performance groups results by smart campaign, which is useful when a campaign sends multiple emails and you want to see combined performance."
            },
            {
                q: "What is the difference between a Hard Bounce and a Soft Bounce?",
                options: [
                    "No difference",
                    "Hard Bounce is a permanent failure; Soft Bounce is temporary",
                    "Hard Bounce means worse lead quality",
                    "Soft Bounce means the person unsubscribed"
                ],
                correct: [1],
                explanation: "Hard Bounce = permanent delivery failure (invalid email address, domain doesn't exist). Soft Bounce = temporary issue (inbox full, server temporarily down). Marketo automatically suspends email addresses after multiple soft bounces."
            },
            {
                q: "How is 'Success %' calculated in the Program Performance Report?",
                options: [
                    "Open rate",
                    "(Success ÷ Total Members) × 100%",
                    "(Success ÷ New Names) × 100%",
                    "Delivery rate"
                ],
                correct: [1],
                explanation: "Success % = (Number of Successes ÷ Total Members) × 100%. This shows what percentage of program members achieved the success status defined in the program's channel."
            },
            {
                q: "To monitor smart campaigns with people stuck in Wait steps, use:",
                options: [
                    "Email Performance",
                    "Program Performance",
                    "Campaign Activity",
                    "Landing Page Performance"
                ],
                correct: [2],
                explanation: "Campaign Activity Report shows 'People in Wait Step' metric. Use this to find campaigns with people stuck waiting."
            },
            {
                q: "An email campaign had 400 opens and 80 clicks. What is the Click-to-Open Rate?",
                options: [
                    "20%",
                    "10%",
                    "50%",
                    "8%"
                ],
                correct: [0],
                explanation: "Click-to-Open Rate = (Clicks ÷ Opens) × 100% = (80 ÷ 400) × 100% = 20%. This measures how effective the email content was at generating clicks among people who opened."
            },
        ];
