const questions = [
            {
                q: "What determines if a Smart Campaign is Batch or Trigger?",
                options: [
                    "How many people qualify",
                    "Filters only = Batch; At least one trigger = Trigger",
                    "Schedule settings",
                    "Program type"
                ],
                correct: [1],
                explanation: "The Smart List contents determine campaign type. Filters ONLY = Batch campaign. At least ONE trigger (can have filters too) = Trigger campaign. This is heavily tested!",
            },
            {
                q: "A Smart Campaign has a filter 'Lead Score > 50' and a trigger 'Fills Out Form'. What type of campaign is this?",
                options: [
                    "Batch",
                    "Trigger",
                    "Both",
                    "Neither"
                ],
                correct: [1],
                explanation: "At least one trigger makes it a Trigger campaign, even if it also has filters. The trigger fires in real-time when someone fills out the form, then filters are checked."
            },
            {
                q: "Which Smart List element finds people who clicked a link in the PAST?",
                options: [
                    "Clicks Link (trigger)",
                    "Clicked Link (filter)",
                    "Will Click Link",
                    "Link Click Activity"
                ],
                correct: [1],
                explanation: "Past tense 'Clicked' = Filter (finds people who already clicked). Present tense 'Clicks' = Trigger (fires when someone clicks now)."
            },
            { q: "Which flow step should you use to notify sales when a hot lead requests a demo?",
                options: [
                    "Send Email",
                    "Send Alert",
                    "Create Task",
                    "Change Owner"
                ],
                correct: [1],
                explanation: "Send Alert sends notification emails to internal stakeholders (sales reps, account managers). Send Email sends to the lead/contact themselves."
            },
            {
                q: "For the 'Request Campaign' flow step to work, what must the called campaign's Smart List contain?",
                options: [
                    "Filled Out Form",
                    "Campaign is Requested",
                    "Member of List",
                    "Any trigger"
                ],
                correct: [1],
                explanation: "Called campaign MUST have 'Campaign is Requested' trigger in Smart List. Without this, Request Campaign flow step won't work."
            },
            { q: "What does 'Remove from Flow' do?",
                options: [
                    "Deletes from database",
                    "Stops flow execution immediately for that person",
                    "Removes from list",
                    "Unsubscribes"
                ],
                correct: [1],
                explanation: "Remove from Flow stops flow immediately. All subsequent flow steps are skipped. Person stays in database but doesn't continue through the campaign." },
            { q: "What is the MAXIMUM wait time for a Wait Step?",
                options: [
                    "90 days",
                    "365 days",
                    "730 days (2 years)",
                    "Unlimited"
                ],
                correct: [2],
                explanation: "Maximum wait duration is 730 days (2 years). If you need longer, use multiple wait steps or different approach." },
            {
                q: "A Wait step is configured to 'Wait until {{lead.Trial End Date}}'. When the person enters the flow, their Trial End Date was yesterday. What happens?",
                options: [
                    "Wait fails",
                    "Waits until next year",
                    "Flow continues immediately",
                    "Person removed"
                ],
                correct: [2],
                explanation: "If the wait date has already passed, the flow continues immediately. Marketo doesn't get stuck waiting for a date in the past - it recognizes the date has passed and moves to the next step."
            },
            {
                q: "What happens to people in Wait Steps when you deactivate a trigger campaign?",
                options: [
                    "Complete flow normally",
                    "Removed from campaign",
                    "Stop processing and remain in wait",
                    "Error notification sent"
                ],
                correct: [2],
                explanation: "Deactivating stops processing. People stay in Wait steps. Reactivating resumes from where they paused."
            },
            {
                q: "A trigger campaign has qualification rule 'Once every 7 days'. A person triggers the campaign on Monday and triggers it again on Wednesday. What happens?",
                options: [
                    "Runs both times",
                    "Only runs Monday",
                    "Only runs Wednesday",
                    "Error"
                ],
                correct: [1],
                explanation: "The 7-day cooldown blocks Wednesday since it's too soon after Monday. The person must wait 7 full days from Monday before they can qualify again."
            },
            {
                q: "What is the default qualification rule for Smart Campaigns?",
                options: [
                    "Every time",
                    "Once per person",
                    "Once every 7 days",
                    "Once per month"
                ],
                correct: [1],
                explanation: "Default is 'Once per person' - person can run through the campaign one time ever. Prevents accidental duplicate processing."
            },
            {
                q: "A flow step has choices: If State is CA, send CA Email; If State is TX, send TX Email; Default sends General Email. A person in Florida triggers the campaign. Which email do they receive?",
                options: [
                    "CA Email",
                    "No email",
                    "General Email",
                    "Error"
                ],
                correct: [2],
                explanation: "Florida doesn't match Choice 1 (CA) or Choice 2 (TX), so the Default executes. Default catches everyone who doesn't match specific choices."
            },
            {
                q: "A flow has these steps: Send Email A → Wait 3 days → Send Email B → Remove from Flow if Opportunity Created → Wait 4 days → Send Email C. A person receives Email B and then an opportunity is created for them. What happens next?",
                options: [
                    "Receives Email C",
                    "Stops at Remove from Flow, no Email C",
                    "Receives Email C immediately",
                    "Pauses indefinitely"
                ],
                correct: [1],
                explanation: "Remove from Flow stops execution when the condition is met. Since the opportunity was created after Email B, the person is removed from the flow and Email C is never sent."
            },
            {
                q: "Campaign A uses 'Request Campaign' to call Campaign B. Campaign B has qualification rule 'Once per person'. A person already ran Campaign B before. What happens when Campaign A calls Campaign B for that person?",
                options: [
                    "Runs again (Request overrides)",
                    "Blocked (already ran once)",
                    "Requires admin override",
                    "Creates duplicate record"
                ],
                correct: [1],
                explanation: "Qualification rules still apply even when a campaign is called via Request Campaign. If the rule is 'once per person' and they already ran, the person is blocked from running again."
            },
            {
                q: "A person enters a Wait Step set to 'Wait 5 days' on Monday at 9:00 AM. When will they proceed to the next flow step?",
                options: [
                    "Saturday at 9:00 AM",
                    "Friday at 9:00 AM",
                    "Next Monday at 9:00 AM",
                    "Saturday at midnight"
                ],
                correct: [0],
                explanation: "Wait steps count calendar days and preserve the time of day. Monday + 5 calendar days = Saturday, and the person proceeds at the same time they entered (9:00 AM). Wait steps do not skip weekends or consider business hours."
            },
            {
                q: "A trigger campaign is active with 50 people in a 'Wait 14 days' step. You deactivate the campaign. 3 days later, you reactivate it. What happens to the people in the wait step?",
                options: [
                    "Start 14 days over",
                    "Continue from day 3 (11 days remaining)",
                    "Exit flow completely",
                    "Complete immediately"
                ],
                correct: [1],
                explanation: "Reactivating resumes the wait from where they paused. They've already waited 3 days, so 11 days remain. The timer doesn't reset."
            },
            {
                q: "A batch campaign runs daily with qualification rule 'Once per person'. On Day 1, it processes 10,000 people. How many of those same people will it process on Day 2?",
                options: [
                    "0 (they already ran once)",
                    "10,000 (recurring overrides qualification)",
                    "Only new people who qualify",
                    "Requires manual reset"
                ],
                correct: [0],
                explanation: "'Once per person' blocks all 10,000 on Day 2 since they already ran once. Only new people who never ran would process on Day 2."
            },
            {
                q: "A Change Data Value flow step has choices: If Score > 75 set Status to Hot; If Score > 50 set Status to Warm; Default sets Status to Cold. A person with Score of 60 enters the flow. What is their Status?",
                options: [
                    "Hot",
                    "Warm",
                    "Cold",
                    "No change"
                ],
                correct: [1],
                explanation: "First matching choice wins. 60 is NOT > 75 (Choice 1 fails), but 60 IS > 50 (Choice 2 matches). Status = Warm."
            },
            {
                q: "A Smart Campaign's Schedule tab shows 'Campaign is Requested' as the trigger. What does this indicate?",
                options: [
                    "Batch manually triggered",
                    "Called via Request Campaign flow step",
                    "Trigger with special setting",
                    "Configuration error"
                ],
                correct: [1],
                explanation: "'Campaign is Requested' in Smart List means this campaign is designed to be called by other campaigns via Request Campaign flow step."
            },
            {
                q: "A Batch campaign is scheduled to run at 10 AM. At 9 AM, 1,000 people qualify for the Smart List. By 10 AM, 100 more people now qualify (total 1,100). How many people will the campaign process?",
                options: [
                    "1,000 (snapshot from when campaign was scheduled)",
                    "1,100 (evaluates at runtime)",
                    "100 (only the new ones)",
                    "0 (must re-schedule to pick up new people)"
                ],
                correct: [1],
                explanation: "Batch campaigns evaluate the Smart List at runtime - the exact moment the campaign executes. At 10 AM, 1,100 people qualify, so all 1,100 are processed. Marketo does not take a 'snapshot' when you schedule; it always evaluates fresh when the campaign runs."
            },
];
