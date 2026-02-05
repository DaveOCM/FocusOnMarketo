const questions = [
            {
                q: "A marketing team wants to send a one-time promotional email with A/B testing on the subject line. Which program type should they use?",
                options: [
                    "Event Program",
                    "Email Program",
                    "Default Program",
                    "Engagement Program"
                ],
                correct: [1],
                explanation: "Email Programs are specifically designed for one-time email sends and are the ONLY program type that supports A/B testing. This makes them perfect for promotional emails where you want to test subject lines, whole emails, from addresses, or send times to optimize performance."
            },
            {
                q: "Which program type would you use for a webinar scheduled for March 15th at 2:00 PM EST?",
                options: [
                    "Email Program",
                    "Event Program",
                    "Default Program",
                    "Engagement Program"
                ],
                correct: [1],
                explanation: "Event Programs are designed for anything with attendees at a specific date and time (webinars, conferences, trade shows, in-person events). They provide special features like webinar platform integration (Zoom, ON24, GoToWebinar), event cap, waitlist functionality, and iPad check-in for in-person events."
            },
            {
                q: "A marketer wants to send a series of educational emails over 6 weeks to new trial users. Which program type is best?",
                options: [
                    "Email Program",
                    "Event Program",
                    "Engagement Program",
                    "Default Program with recurring batch campaign"
                ],
                correct: [2],
                explanation: "Engagement Programs are specifically designed for nurture campaigns that deliver a series of emails over time. They have built-in features like streams (content containers), casts (scheduled sends), cadence (person-level send control), and exhaustion tracking. While you could technically achieve this with a Default Program and smart campaigns, Engagement Programs are the purpose-built solution."
            },
            {
                q: "A marketer wants to use Recipient Time Zone for an Email Program to deliver at 9 AM local time for all recipients. What is the minimum time required to approve the program before the scheduled send?",
                options: [
                    "12 hours",
                    "24 hours",
                    "25 hours",
                    "48 hours"
                ],
                correct: [2],
                explanation: "Recipient Time Zone requires the program to be approved at least 25 hours before the scheduled send time. This allows Marketo to process and schedule emails for all time zones around the world. The 25-hour requirement accounts for the earliest time zones and processing time."
            },
            {
                q: "Which A/B test winner criteria requires the test to run for at least 24 hours?",
                options: [
                    "Open Rate",
                    "Click Rate",
                    "Engagement Score",
                    "Click-to-Open Rate"
                ],
                correct: [2],
                explanation: "Engagement Score uses Marketo's proprietary algorithm that analyzes multiple engagement signals over time. While it's technically possible to declare a winner sooner, Marketo recommends a minimum 24-hour test period to gather enough data for an accurate calculation. Open Rate, Click Rate, and Click-to-Open Rate can declare winners with less data."
            },
            {
                q: "What is the difference between Channels and Tags in Marketo?",
                options: [
                    "There is no difference - they're the same thing",
                    "Channels are required; Tags are optional",
                    "Channels categorize program types; Tags are custom attributes for additional categorization",
                    "Tags are only for reporting purposes"
                ],
                correct: [2],
                explanation: "Channels categorize program types (Webinar, Email, Event, etc.) and come with pre-defined progression statuses. Tags are custom attributes YOU create to add additional categorization (Region, Product Line, Target Audience, etc.). Both are used for reporting and program organization. A program MUST have a channel, but tags are optional."
            },
            {
                q: "Which reports support filtering by Channels and Tags?",
                options: [
                    "Email Performance Report",
                    "Program Performance Report",
                    "Landing Page Performance Report",
                    "People Performance Report"
                ],
                correct: [1],
                explanation: "Program Performance Report (and Program Analyzer if enabled) support filtering by Channels and Tags because they are PROGRAM-level reports. Asset-level reports like Email Performance, Landing Page Performance, and People Performance do NOT support channel/tag filtering. This distinction is frequently tested!"
            },
            {
                q: "Which of the following are considered direct Period Costs for a program?",
                options: [
                    "Pay-per-click advertising fees",
                    "Marketo subscription cost",
                    "Event venue rental",
                    "Full-time employee salaries"
                ],
                correct: [0, 2],
                multiple: true,
                explanation: "Period Costs should include DIRECT program costs only: PPC advertising, event venue rental, vendor fees, content production costs, etc. Do NOT include overhead costs like Marketo subscriptions, employee salaries, or office rent. This allows for accurate program-level ROI calculation."
            },
            {
                q: "Which of the following shows the correct syntax for a My Token?",
                options: [
                    "{my.eventDate}",
                    "[[my.eventDate]]",
                    "{{my.tokenName}}",
                    "${my.eventDate}"
                ],
                correct: [2],
                explanation: "My Tokens use double curly braces with 'my' prefix: {{my.tokenName}}. This is critical to remember! Single braces {}, double brackets [[]], and dollar signs ${} are all incorrect syntax."
            },
            {
                q: "You have a token {{my.region}} set to 'EMEA' at the folder level and 'AMER' at the program level. What value will an email in that program display?",
                options: [
                    "EMEA (folder level)",
                    "AMER (program level)",
                    "Both values",
                    "Error - duplicate tokens not allowed"
                ],
                correct: [1],
                explanation: "More specific tokens override less specific tokens. Program-level tokens override folder-level tokens. This inheritance hierarchy is important: Program > Folder > Workspace. You CAN have the same token name at multiple levels - the most specific one wins."
            },
            {
                q: "Which token would display '2025' automatically?",
                options: [
                    "{{lead.Year}}",
                    "{{system.dateYear}}",
                    "{{my.currentYear}}",
                    "{{company.Year}}"
                ],
                correct: [1],
                explanation: "{{system.dateYear}} is a system token that automatically displays the current year. It updates automatically each year without any manual changes needed. System tokens are pre-defined by Marketo and always available."
            },
            {
                q: "To avoid showing {{lead.First Name}} when the field is empty, which syntax should you use?",
                options: [
                    "{{lead.First Name=Dear Valued Customer}}",
                    "{{lead.First Name:default=Dear Valued Customer}}",
                    "{{lead.First Name||Dear Valued Customer}}",
                    "{{lead.First Name?Dear Valued Customer}}"
                ],
                correct: [1],
                explanation: "Default value syntax is :default=value. For example: {{lead.First Name:default=Friend}} or {{lead.Company:default=your company}}. This ensures that if the field is empty, your default text displays instead of a blank space or the token itself. ALWAYS use default values with lead tokens - this is a best practice!"
            },
            {
                q: "Which My Token type would you use to let recipients add an event to their calendar?",
                options: [
                    "Text",
                    "Date",
                    "Calendar File (ICS)",
                    "Rich Text"
                ],
                correct: [2],
                explanation: "Calendar File (ICS) token type generates a downloadable .ics file that recipients can use to add events directly to their calendar (Outlook, Google Calendar, Apple Calendar). This is commonly used in Event Programs for webinar invitations and conference registrations. Date tokens only display formatted dates but don't create calendar files."
            },            
            {
                q: "Which types of content can be added to an Engagement Program stream?",
                options: [
                    "Emails",
                    "Default Programs",
                    "Email Programs",
                    "Landing Pages",
                    "Event Programs"
                ],
                correct: [0, 1],
                multiple: true,
                explanation: "Engagement Program streams can ONLY contain: (1) Emails and (2) Default Programs (nested programs for complex logic like A/B testing or conditional sends). Email Programs, Event Programs, other Engagement Programs, Landing Pages, and Forms CANNOT be added to streams."
            },
            {
                q: "Communication limits are set to 1 email per day. A person receives Marketing Email A at 9 AM. At 11 AM, a Smart Campaign tries to send Marketing Email B. What happens to Email B?",
                options: [
                    "Blocked (limit reached)",
                    "Sent (different campaign)",
                    "Queued for tomorrow",
                    "Sent if lead score is high"
                ],
                correct: [0],
                explanation: "Communication limits are enforced. Once the daily limit is reached (1 email per day in this case), subsequent MARKETING emails are BLOCKED - not queued, not sent. However, OPERATIONAL emails would still be sent as they bypass communication limits. Marketo does not queue blocked emails."
            },
            {
                q: "In an Email Program A/B test, which of the following are valid winner criteria?",
                options: [
                    "Open Rate",
                    "Total Sent",
                    "Click Rate",
                    "Engagement Score",
                    "Bounce Rate",
                    "Click-to-Open Rate"
                ],
                correct: [0, 2, 3, 5],
                multiple: true,
                explanation: "Valid A/B test winner criteria are: Open Rate, Click Rate, Click-to-Open Rate, Engagement Score (Marketo's proprietary algorithm), and Custom Conversion (based on specific URL visits). Total Sent and Bounce Rate are NOT valid winner criteria because they don't measure engagement or conversion success."
            },
            {
                q: "What does it mean when a person is 'Exhausted' in an Engagement Program?",
                options: [
                    "They unsubscribed from the program",
                    "They received all content in their current stream",
                    "Their cadence is paused",
                    "They haven't engaged with any emails"
                ],
                correct: [1],
                explanation: "Exhausted status means a person has received all available content in their stream. This is different from: Unsubscribed (opted out of emails), Paused cadence (you manually stopped sends), or Low engagement (behavioral metric). Once exhausted, they won't receive content until you add new content or transition them to another stream."
            },
            {
                q: "You create custom tag 'Product Line' with values: Product A, Product B, Product C. Can you assign multiple product values to one program?",
                options: [
                    "Yes, unlimited values",
                    "Yes, maximum 3 values",
                    "No, only one value per tag type",
                    "Only if it's a Default Program"
                ],
                correct: [2],
                explanation: "One program can have only ONE value per tag type. For example, you can assign: Region=AMER AND Product=Product A, but you CANNOT assign Product=Product A AND Product=Product B to the same program. If you need to track multiple products in one program, create a combined tag value like 'Product A+B' or use a different approach."
            },
            {
                q: "At which level are Period Costs entered in Marketo?",
                options: [
                    "Campaign level",
                    "Program level",
                    "Channel level",
                    "Workspace level"
                ],
                correct: [1],
                explanation: "Period Costs are entered at the Program level in the Program's Setup tab. You can add multiple period costs for different time periods (e.g., January 2025: $5,000, February 2025: $3,000). This allows for time-based cost tracking and ROI calculation."
            },
            {
                q: "Which My Token type would you use to store formatted HTML content?",
                options: [
                    "Text",
                    "HTML",
                    "Rich Text",
                    "Script"
                ],
                correct: [2],
                explanation: "Rich Text token type allows you to store formatted HTML content with styling, images, links, etc. Text tokens only support plain text. There is no 'HTML' or 'Script' token type - the correct answer is Rich Text."
            },
            {
                q: "In which of the following places can My Tokens be used?",
                options: [
                    "Email subject lines",
                    "Smart List filters",
                    "Landing page content",
                    "Flow step values",
                    "Program names"
                ],
                correct: [0, 2, 3],
                multiple: true,
                explanation: "My Tokens can be used in: Email subject lines, email body, landing page content, snippets, some flow step values (like Change Data Value), and program names. CRITICAL: Tokens CANNOT be used in Smart List filters or triggers! This is a common mistake on the exam."
            },
            {
                q: "A program has {{my.eventDate}} = 'March 15, 2025'. You clone the program for a new event. What happens to the token?",
                options: [
                    "Automatically updates to new date",
                    "Copies the same value ('March 15, 2025')",
                    "Token is deleted in clone",
                    "System prompts for new value"
                ],
                correct: [1],
                explanation: "When cloning a program, My Tokens copy their exact values from the original program. The token will still show 'March 15, 2025' in the cloned program. You must MANUALLY update the token values in the cloned program to reflect the new event details. This is why it's important to review My Tokens after cloning!"
            },
            {
                q: "Communication limits are set to 2 emails per day. A person receives 2 marketing emails today. Can they receive an operational email today?",
                options: [
                    "No, limit reached",
                    "Yes, operational emails bypass communication limits",
                    "Only if both marketing emails were sent before noon",
                    "Requires admin override"
                ],
                correct: [1],
                explanation: "Operational emails bypass communication limits completely. They are designed for transactional messages that MUST be delivered (order confirmations, password resets, shipping notifications, etc.). Marketing emails respect communication limits, but operational emails do not."
            },
            {
                q: "What's the benefit of using local assets vs global assets?",
                options: [
                    "Local assets load faster",
                    "Local assets keep program assets together and isolated",
                    "Local assets have more features",
                    "Local assets are more secure"
                ],
                correct: [1],
                explanation: "Local assets keep all program components together in one place, making the program self-contained and isolated. This is useful for program-specific assets that won't be reused. Global assets (in Design Studio) are for reusable content used across multiple programs. Neither is 'better' - they serve different purposes."
            },
            {
                q: "An Engagement Program has 3 streams. A person can be in how many streams simultaneously?",
                options: [
                    "All 3 streams",
                    "Any 2 streams",
                    "Only 1 stream at a time",
                    "Depends on configuration"
                ],
                correct: [2],
                explanation: "A person can be in only ONE stream at a time within an Engagement Program. You can transition them between streams using Smart Campaigns and transition rules, but they cannot be in multiple streams simultaneously. This is a hard rule in Marketo Engagement Programs."
            }
        ];
