const questions = [
  {
    "q": "Your company is hosting an annual conference expecting 500 attendees. You need to track registration, attendance, and send a post-event survey. Which program type should you use?",
    "options": [
      "Email Program",
      "Event Program",
      "Default Program",
      "Engagement Program"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "Event Program is the correct choice for conferences. It tracks event-specific statuses like registration and attendance, has a specific date/time, and supports ROI tracking. It's designed exactly for this scenario - a time-based event with multiple status milestones."
  },
  {
    "q": "A marketer sets up an A/B test in an Email Program to test subject lines. When configuring the test, how many subject line variations can they create?",
    "options": [
      "Up to 2 variations",
      "Up to 3 variations",
      "Up to 5 variations",
      "Unlimited"
    ],
    "correct": [
      0
    ],
    "multiple": false,
    "explanation": "Marketo Email Program A/B testing only supports 2 variations at a time (Version A vs Version B). If you need to test more than 2 subject lines, you would need to run sequential A/B tests."
  },
  {
    "q": "Your company offers a 30-day free trial. The product team wants trial users to receive onboarding emails on Day 1, Day 3, Day 7, Day 14, Day 21, and Day 28 after signing up. The timing must be relative to each user's trial start date. Which program type is best suited for this requirement?",
    "options": [
      "6 separate Email Programs",
      "Default Program with smart campaigns and wait steps",
      "Engagement Program",
      "Event Program with reminders"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "Default Program with a triggered Smart Campaign and wait steps is ideal for drip sequences with irregular intervals relative to a specific date. When a user starts their trial, a trigger fires and the flow uses wait steps (Wait 2 days, Send Email, Wait 4 days, Send Email, etc.) to control exact timing. Engagement Programs use fixed calendar-based cadences (e.g., every Tuesday), not relative timing—making them unsuitable for user-specific sequences without complex workarounds."
  },
  {
    "q": "You're setting up an Email Program to send a product launch announcement tomorrow at 9 AM to 25,000 recipients worldwide. You want everyone to receive it at 9 AM in their local time zone. You enable Recipient Time Zone. What is the minimum time in advance that you must schedule and approve the program?",
    "options": [
      "12 hours (Head Start requirement)",
      "24 hours",
      "25 hours (Recipient Time Zone requirement)",
      "No minimum—Marketo adjusts automatically"
    ],
    "correct": [
      2
    ],
    "multiple": false,
    "explanation": "Recipient Time Zone requires the program to be scheduled at least 25 hours in advance (24 hours + buffer time). This is because Marketo starts processing at midnight in the earliest time zone (UTC +14:00) to ensure everyone receives the email at the correct local time. If scheduled within 25 hours, recipients in time zones where 9 AM has already passed will either receive it the next day or at your subscription's default time, depending on your settings."
  },
  {
    "q": "A Webinar channel has the following statuses and points: Invited (10pts), Registered (25pts), Attended (50pts - Success), No Show (0pts). A person registers for the webinar but doesn't attend. What is their program status score?",
    "options": [
      "0",
      "10",
      "25",
      "50"
    ],
    "correct": [
      2
    ],
    "multiple": false,
    "explanation": "In Marketo, a person has only ONE program status at a time—statuses do not accumulate. Since the person registered but didn't attend, their current status is 'Registered' which has 25 points. The 'Success' flag on 'Attended' indicates the goal status for ROI tracking, but points are based solely on current status."
  },
  {
    "q": "You have 3 tags: Region (AMER/EMEA/APAC), Product (A/B/C), Owner (Person1/Person2/Person3). One program can have how many tag values total?",
    "options": [
      "1 total",
      "3 total (one per tag type)",
      "Unlimited",
      "Maximum 5"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "Each program can have only ONE value per tag type. With 3 tags (Region, Product, Owner), a program can have 3 tag values total—one for each tag. For example: Region=AMER, Product=A, Owner=Person1. You cannot assign multiple values to the same tag (e.g., both AMER and EMEA for Region). This creates a clean multi-dimensional categorization system for reporting."
  },
  {
    "q": "You hosted an event that cost $15,000 total (venue, catering, materials) and generated 50 new leads. What is the Cost per New Name?",
    "options": [
      "$150",
      "$300",
      "$750",
      "Cannot calculate without success data"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "Cost per New Name = Total Cost ÷ New Names. $15,000 ÷ 50 = $300 per new lead. This metric is crucial for evaluating marketing ROI and comparing the efficiency of different programs in acquiring new prospects for your pipeline."
  },
  {
    "q": "A folder has token {{my.productName}} set to 'Widget Pro'. A program inside that folder has the same token {{my.productName}} set to 'Widget Elite'. What value will an email in that program display?",
    "options": [
      "Widget Pro (folder level)",
      "Widget Elite (program level)",
      "Both values",
      "Error - duplicate tokens"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "Program-level tokens override folder-level tokens. Since the program sets {{my.productName}} to 'Widget Elite', that value is used in all assets within that program, regardless of what the folder-level token says. This allows you to set defaults at folder level and override per program."
  },
  {
    "q": "An email has subject line: {{lead.First Name}}, don't miss {{my.offerName}}! The token {{my.offerName}} is set to 50% Off. A recipient has an empty First Name field. What subject line do they see?",
    "options": [
      ", don't miss 50% Off!",
      "{{lead.First Name}}, don't miss 50% Off!",
      "Friend, don't miss 50% Off! (if default is set)",
      "Email fails to send"
    ],
    "correct": [
      0
    ],
    "multiple": false,
    "explanation": "When a lead token field is empty and no default value is specified, the token outputs nothing—it simply disappears. The recipient would see ', don't miss 50% Off!' with an awkward leading comma. Always use {{lead.First Name:default=Friend}} to prevent empty fields from creating formatting issues."
  },
  {
    "q": "A person has already hit the communication limit of 3 marketing emails this week (Tuesday-Thursday). On Friday, a marketer sends them an operational email. What is the outcome?",
    "options": [
      "Blocked by limits",
      "Sends (operational bypass limits)",
      "Queues for next week",
      "Requires override"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "Communication limits reset on a weekly basis (Sunday to Saturday). If the person already received 3 marketing emails this week (Tuesday-Thursday), any additional marketing emails are blocked until next Sunday. Operational emails are NOT affected by communication limits."
  },
  {
    "q": "You have an Engagement Program with a weekly cadence set to send every Wednesday at 10 AM. A new lead is added to the program on Monday. When will they receive their first email from the stream?",
    "options": [
      "Immediately (Monday)",
      "Next cast (Wednesday 10 AM)",
      "Following week Wednesday",
      "Depends on settings"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "With weekly cadence on Wednesdays at 10 AM, the first cast happens on the next Wednesday after the person is added. Since they were added on Monday, they receive their first content the following Wednesday at 10 AM. The cadence schedule determines when content is delivered."
  },
  {
    "q": "An Engagement Program stream contains 5 emails. A person has already received emails 1 through 4. Email 5 is currently in draft status (unapproved). When the next cast occurs, what happens?",
    "options": [
      "Email 5 draft version",
      "Nothing (exhausted - can't send draft)",
      "Email 1 again (restarts)",
      "Error notification"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "When the next email in the stream is unapproved (draft), Marketo skips it and waits. The person does not receive email 5 until it's approved. They remain in their current position in the stream - no content is skipped permanently, just delayed until approval."
  },
  {
    "q": "You cloned a program 3 times for different regions (AMER, EMEA, APAC). Each regional program needs a unique {{my.phone}} token value. What is the best approach?",
    "options": [
      "Edit token in each program individually",
      "Create 3 different folders with folder-level tokens",
      "Can't have same token name with different values",
      "Use lead tokens instead"
    ],
    "correct": [
      0
    ],
    "multiple": false,
    "explanation": "Each cloned program gets its own copy of My Tokens. You update {{my.phone}} independently in each regional program. This is the main advantage of program-level tokens - each program instance can have unique values while sharing the same token name structure."
  },
  {
    "q": "You're setting up an A/B test in an Email Program. You configure the test to send to 15% of your audience and want to send the winner to the remaining 85%. What is the minimum time gap required between sending the test and sending the winner?",
    "options": [
      "No minimum required",
      "At least 1 hour",
      "At least 4 hours",
      "At least 24 hours"
    ],
    "correct": [
      2
    ],
    "multiple": false,
    "explanation": "Marketo requires a minimum 4-hour gap between sending the A/B test and sending the winner email. This gives enough time for recipients to open and engage with the test emails so Marketo can determine a statistically meaningful winner. You can set a longer duration if needed, but 4 hours is the minimum."
  },
  {
    "q": "Sales provides an Excel file with 200 hot leads that need to be imported and emailed immediately. What is the fastest approach?",
    "options": [
      "Import to a Static List using 'Skip new people and updates' mode",
      "Import directly to a Program via Members > Import Members",
      "Create leads manually one by one",
      "Send the file to IT for database upload"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "For immediate action on hot leads, importing directly to a Program via Members > Import Members is the fastest approach. This creates the records, makes them program members with a status, and allows you to trigger a Smart Campaign to send emails immediately after import completes."
  },
  {
    "q": "A third-party data vendor has provided an Excel file with enriched information (job titles and company size) for 5,000 leads that already exist in your Marketo database. You want to update these existing records with the new data, but you do NOT want to create any new records if the vendor included emails not in your database. Which import option should you select?",
    "options": [
      "New People and Updates",
      "New People Only",
      "Update People Only",
      "List Member Only"
    ],
    "correct": [
      2
    ],
    "multiple": false,
    "explanation": "'Update People Only' is the correct choice for data enrichment scenarios. This import mode updates field values on existing records matched by email address, but does NOT create new records for any emails not found in your database. This protects your database from unwanted new entries while enriching your existing leads with the vendor's data."
  },
  {
    "q": "A Smart List has filters: Lead Score > 50 AND (State = 'CA' OR State = 'NY' OR State = 'TX'). Your database has 1,000 people with Score > 50: 300 in CA, 200 in NY, 100 in TX, and 400 in other states. How many people match the Smart List?",
    "options": [
      "1,000",
      "600 (CA + NY + TX)",
      "600 (those with Score > 50 AND in CA/NY/TX)",
      "300"
    ],
    "correct": [
      2
    ],
    "multiple": false,
    "explanation": "The Smart List uses AND/OR logic: Lead Score > 50 AND (State = CA OR NY OR TX). Both conditions must be true. From the 1,000 people with Score > 50, only those in CA (300), NY (200), or TX (100) qualify—totaling 600 people. The 400 in other states are excluded because they don't meet the state condition."
  },
  {
    "q": "You have a Segmentation called 'Lead Score Tier' with segments: Hot (>75), Warm (>50), Cold (0-50), and Default. A person has a lead score of 60. Which segment are they assigned to?",
    "options": [
      "Hot",
      "Warm",
      "Cold",
      "Default"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "Segmentations evaluate top to bottom. With score 60: Hot requires >75 (no match), Warm requires >50 (MATCH). Person is assigned to Warm segment. They never reach Cold or Default because Warm matched first. This is why segment order is critical."
  },
  {
    "q": "A person in your database has the following field values: Unsubscribed=False, Marketing Suspended=True, Blocklisted=False. What type of emails can they receive?",
    "options": [
      "All emails",
      "No emails",
      "Marketing emails only",
      "Operational emails only"
    ],
    "correct": [
      3
    ],
    "multiple": false,
    "explanation": "With Marketing Suspended=True, the person can ONLY receive Operational emails. Marketing emails are blocked, but operational emails (order confirmations, password resets) still go through. Blocklisted=False means they aren't fully blocked, just marketing-suspended."
  },
  {
    "q": "Your company has a B2B-only policy and wants to prevent form submissions from personal email domains like @gmail.com, @yahoo.com, and @hotmail.com. This rule must apply to all forms across the entire Marketo instance. Where should you configure this?",
    "options": [
      "Each form individually",
      "Each smart campaign",
      "Global Form Validation Rules (Admin)",
      "Email settings"
    ],
    "correct": [
      2
    ],
    "multiple": false,
    "explanation": "Global Form Validation Rules in Admin is the correct location for instance-wide form restrictions. You can block specific email domains (like gmail.com, yahoo.com) so that submissions with these domains are rejected across ALL forms automatically. This eliminates the need to configure each form individually and ensures consistent enforcement of your B2B policy."
  },
  {
    "q": "Your Smart List is taking 10 minutes to process and return results. What are the best ways to speed it up?",
    "options": [
      "Use \"Member of List\" filter (indexed)",
      "Reduce \"contains\" text searches",
      "Add more filters",
      "Run at night"
    ],
    "correct": [
      0,
      1
    ],
    "multiple": true,
    "explanation": "To speed up Smart List processing: (1) Reduce filter complexity - simpler filters process faster, and (2) Use more specific filters to narrow the result set earlier. Overly complex nested logic or very broad filters can slow down processing significantly."
  },
  {
    "q": "A Segmentation has 10 segments defined. A person in your database doesn't match any of the segment criteria. What happens to them?",
    "options": [
      "Error",
      "Random assignment",
      "Goes to Default segment",
      "Not assigned to any segment"
    ],
    "correct": [
      2
    ],
    "multiple": false,
    "explanation": "When a person doesn't match any segment in a Segmentation, they fall into the Default segment. Every Segmentation should have a Default segment as a catch-all. If there's no Default segment, the person sees no dynamic content variation (which could result in blank content)."
  },
  {
    "q": "While building a Smart List to target leads in the United States, you discover that the Country field contains inconsistent values: 'USA', 'United States', 'US', and 'U.S.A'. This is causing segmentation issues. What is the best solution to fix this?",
    "options": [
      "Leave as-is (diversity is acceptable)",
      "Use a Smart Campaign to normalize all values to 'United States'",
      "Create 4 different country segments",
      "Block future form submissions until fixed"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "Data normalization using a Smart Campaign with Change Data Value is the best approach. Create a triggered campaign that fires when Country is updated, using choices to convert all variations ('USA', 'US', 'U.S.A') to a single standard value ('United States'). Run it as a batch first to clean historical data, then keep it active as a trigger to normalize future entries. This ensures consistent segmentation, reporting, and targeting."
  },
  {
    "q": "You import a list of 1,000 email addresses using 'Skip new people and updates' mode. 800 already exist in Marketo, 200 are new. What happens?",
    "options": [
      "All 1,000 are added to the database",
      "800 are added to the list, 200 are skipped (not created)",
      "200 new records are created, 800 are updated",
      "Import fails due to duplicates"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "'Skip new people and updates' mode only adds existing people to the static list - it does not create new records, update fields, or log activities. The 800 existing people are added to the list, but the 200 new email addresses are skipped entirely since they don't exist in the database."
  },
  {
    "q": "Static List created Jan 1 with 500 people. Today (Feb 1), 100 more people meet same criteria. How many people does the Static List have?",
    "options": [
      "500 (doesn't auto-update)",
      "600 (auto-updates)",
      "100 (replaces old)",
      "0 (expired)"
    ],
    "correct": [
      0
    ],
    "multiple": false,
    "explanation": "Static Lists are fixed snapshots - they don't automatically update. The list still has exactly 500 people from January 1st. The 100 new people who now meet the criteria are NOT automatically added. You would need to re-run the Smart List and manually add them."
  },
  {
    "q": "You need to find all people who opened any email in the past 30 days. Which filter should you use?",
    "options": [
      "Opened Email, in past 30 days",
      "Clicked Link in Email, in past 30 days",
      "Was Sent Email, in past 30 days",
      "Email Performance > 0"
    ],
    "correct": [
      0
    ],
    "multiple": false,
    "explanation": "Use filter 'Opened Email' with date range 'in the last 30 days'. This finds anyone who opened any email within the past 30 days. The 'any' qualifier means it matches regardless of which specific email was opened - any email open counts."
  },
  {
    "q": "You approved a Segmentation on Monday. On Tuesday, you need to add a new segment. What is the process?",
    "options": [
      "Add directly (always editable)",
      "Unapprove → Add segment → Re-approve",
      "Clone segmentation",
      "Contact support"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "To add a new segment to an approved Segmentation: create a draft of the Segmentation, add the new segment, then approve. The current approved version remains active until you approve the updated draft. This prevents disruption to active Dynamic Content."
  },
  {
    "q": "Your Marketo database contains 100,000 people, including some who are unsubscribed, marketing suspended, or blocklisted. When you open the System Smart List called 'All People', how many records will it display?",
    "options": [
      "100,000",
      "Only marketable people",
      "Only known people",
      "Recently active only"
    ],
    "correct": [
      0
    ],
    "multiple": false,
    "explanation": "The 'All People' System Smart List displays every person in your database—all 100,000 records—regardless of their email status, subscription preferences, or activity level. This includes unsubscribed, blocklisted, marketing suspended, and inactive people. It provides a complete, unfiltered view of your entire database, which is useful for understanding total database size and performing bulk operations."
  },
  {
    "q": "An approved email is currently being used by an active trigger campaign. You create a draft of the email and make some edits. What happens to the active campaign?",
    "options": [
      "Uses new draft",
      "Breaks (email in draft)",
      "Continues using last approved version",
      "Requires re-approval"
    ],
    "correct": [
      2
    ],
    "multiple": false,
    "explanation": "The campaign continues using the currently approved email version. Creating a draft does NOT affect active campaigns - they keep using the approved version. Your edits only go live when you explicitly approve the new draft. Active campaigns are never disrupted by drafts."
  },
  {
    "q": "Form on Marketo LP, known visitor. Fields: Email, FirstName, LastName, Company. Visitor already has First/Last/Company. What does Pre-Fill show?",
    "options": [
      "All 4 fields filled",
      "Only Email (hidden fields don't pre-fill)",
      "None (security)",
      "Email, First, Last, Company (all visible fields)"
    ],
    "correct": [
      3
    ],
    "multiple": false,
    "explanation": "Form Pre-Fill fills in known fields automatically. Since the visitor already has Email, FirstName, LastName, and Company on file, ALL four fields are pre-filled. The visitor sees a form with those fields already populated - they can edit or just submit."
  },
  {
    "q": "Progressive Profiling: Always show Email. Pool has 10 fields, set to show 2 progressive. What does a first-time visitor see?",
    "options": [
      "Email only",
      "Email + 2 progressive (total 3)",
      "2 progressive only",
      "All 10 fields"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "Progressive Profiling shows 'always visible' fields (Email) plus up to N blank fields from the progressive pool. A first-time visitor sees Email plus the first 2 fields from the pool (total 3 fields). On subsequent visits, filled fields are hidden and replaced with the next unfilled fields from the pool—this is how progressive profiling gradually collects more data over multiple visits."
  },
  {
    "q": "A form has a Visibility Rule: Show the 'US State' field only IF Country = 'United States'. A visitor selects 'Canada' as their country. What happens to the State field?",
    "options": [
      "Stays visible",
      "Hides immediately (dynamic)",
      "Shows but optional",
      "Grays out"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "Visibility Rules work in real-time. When the person selects 'Canada', the rule 'Show US State IF Country = United States' evaluates to false. The US State field is hidden immediately. If they change country back to US, the field reappears dynamically."
  },
  {
    "q": "You have a global snippet called \"Email Footer\" that is used in 100 approved emails across your instance. You need to update the footer with new legal text, so you edit the snippet, which creates a draft version. While the snippet is in draft status, what do the 100 emails display?",
    "options": [
      "The new draft content is visible immediately in all emails",
      "The original approved snippet content until you approve the draft",
      "An error message because the snippet is being edited",
      "Blank footer section until the draft is approved"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "Editing an approved snippet creates a draft, but the original approved version remains active. All 100 emails continue displaying the approved content until you explicitly approve the new draft. This safeguards live assets—you can work on changes without affecting production emails. Once you approve the snippet draft, all 100 emails instantly update to the new version."
  },
  {
    "q": "You're sending an email with Dynamic Content based on a Region segmentation. Your audience of 10,000 people is distributed across three segments: AMER (6,000), EMEA (3,000), and APAC (1,000). You've configured content for all three segments but left the Default segment content empty. What happens when you send the email?",
    "options": [
      "Email fails",
      "Error for people without specific segment",
      "No people should hit Default if all in segments (but best practice is always configure Default)",
      "Random content shown"
    ],
    "correct": [
      2
    ],
    "multiple": false,
    "explanation": "Since all 10,000 recipients belong to one of the three configured segments (AMER, EMEA, or APAC), no one falls into the Default segment. Each person sees their segment-specific content: 6,000 see AMER content, 3,000 see EMEA content, 1,000 see APAC content. However, best practice is to always configure Default content as a safety net for edge cases or future audience changes."
  },
  {
    "q": "Your \"Region\" segmentation has three segments in this order: (1) AMER — Country is US, Canada, or Mexico; (2) LATAM — Country is not empty; (3) Default. A lead from Brazil enters your database. Which segment are they assigned to?",
    "options": [
      "AMER",
      "Default",
      "No segment assigned",
      "LATAM"
    ],
    "correct": [
      3
    ],
    "multiple": false,
    "explanation": "Segments are evaluated top to bottom. The Brazil lead doesn't match AMER, but does match LATAM (Country is not empty), so they're assigned there. Marketo stops evaluating once a match is found—segment order matters."
  },
  {
    "q": "You need to send a password reset email to all users, including those who have unsubscribed from marketing communications. You mark the email as Operational = Yes. Will an unsubscribed person receive this email?",
    "options": [
      "No—operational emails still respect unsubscribe status",
      "Yes—operational emails bypass unsubscribe status",
      "Only if they manually re-subscribe first",
      "Only with admin approval"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "Operational emails bypass unsubscribe status and are delivered regardless of marketing preferences. When you mark an email as Operational = Yes, it will be sent to unsubscribed people because these emails contain essential, non-marketing information (password resets, order confirmations, legal notices). Use this setting responsibly—it should only be used for transactional or legally required communications, not to circumvent unsubscribe requests."
  },
  {
    "q": "A marketer creates an email using Marketo's Email Editor 2.0 and enters '{{lead.First Name}}, check out our sale!' in the Preheader field. When the email is sent, recipients see the raw text '{{lead.First Name}}' in their inbox preview instead of their actual name. What is the cause?",
    "options": [
      "Lead tokens do not work in the Email Editor's preheader field",
      "The First Name field is empty for all recipients",
      "The email was not approved before sending",
      "The token syntax is incorrect"
    ],
    "correct": [
      0
    ],
    "multiple": false,
    "explanation": "Lead tokens ({{lead.Field}}) do not work in the preheader field when using Marketo's Email Editor 2.0. The token appears as raw text instead of resolving. To use lead tokens in preheaders, you must add them directly in the HTML of your email template. My Tokens ({{my.TokenName}}) do work in the preheader field, but lead/person tokens do not."
  },
  {
    "q": "Snippet vs Token for event details (date, time, location, agenda with formatting). Which should you use?",
    "options": [
      "Use Token (simpler)",
      "Use Snippet (supports rich formatting)",
      "Either works the same",
      "Use both combined"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "Snippets are better than tokens for event details with formatting. Snippets support full HTML formatting (tables, colors, layouts), while My Tokens are plain text or simple HTML. For complex formatted content like event agendas, Snippets provide the flexibility needed."
  },
  {
    "q": "Landing page approved and live. Form on page is draft. What happens when a visitor tries to submit?",
    "options": [
      "Works fine",
      "Error (form must be approved)",
      "Submission queues until form approved",
      "Page shows as draft"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "If the form on the landing page is in Draft status, visitors cannot submit it. Even though the landing page is approved, a draft form is not functional. The form must be approved before it can accept submissions. This is a common gotcha in Marketo."
  },
  {
    "q": "Engagement Program stream has: Email A, Email B, Default Program C, Email D. Why does order matter?",
    "options": [
      "Doesn't matter (random)",
      "Sends top-to-bottom, skips what person already received",
      "All send simultaneously",
      "Order only matters for programs"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "Content order in Engagement streams matters - it determines the sequence each person receives. Email A first, then B, then Program C, then D. Each person progresses through in this exact order based on the cadence. Reordering changes the nurture sequence for everyone."
  },
  {
    "q": "Person in Engagement: Stream 1 (Awareness). Clicked 5 links. Smart Campaign: If clicks >=3, change to Stream 2 (Consideration). What happens on next cast?",
    "options": [
      "Receives from Stream 1 (hasn't transitioned yet)",
      "Receives from Stream 2 (already transitioned)",
      "Receives from both",
      "Skips (in transition)"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "The person's high engagement (5 clicks) triggers the Smart Campaign, which moves them to Stream 2 (Consideration). This demonstrates how Smart Campaigns can dynamically reroute people between Engagement streams based on their behavior - a key feature for progressive nurturing."
  },
  {
    "q": "An Engagement Program has a weekly cadence set to send every Wednesday at 2 PM. A new lead is added to the stream on Friday. When will this lead receive their first email?",
    "options": [
      "Immediately upon being added",
      "The following Wednesday at 2 PM",
      "Two Wednesdays later (skips the first cast)",
      "Only after manual qualification"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "Engagement Programs deliver content based on a fixed cadence schedule. Since the lead was added on Friday, they will receive their first email on the next scheduled cast—Wednesday at 2 PM. The program doesn't send immediately when someone is added; it waits for the next cast time. There's no waiting period or manual step required."
  },
  {
    "q": "You create an email with dynamic content based on an \"Industry\" segmentation. A lead in your database has an empty Industry field. When this lead receives the email, what content do they see?",
    "options": [
      "Blank section where the dynamic content should appear",
      "Default segment content",
      "A randomly selected segment variation",
      "The email is blocked from sending to this lead"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "When a lead doesn't match any defined segment criteria (in this case, because their Industry field is empty), Marketo displays the Default segment content. Every Segmentation includes a Default segment that acts as a catch-all for unmatched leads. Best practice: always design meaningful Default content rather than leaving it generic, since it often reaches a significant portion of your audience."
  },
  {
    "q": "You embed a Marketo form on your company website (www.yourcompany.com), which is not hosted by Marketo. A known lead visits the page. Does form pre-fill work?",
    "options": [
      "Yes, pre-fill works on any website",
      "No, pre-fill only works on Marketo landing pages by default",
      "Yes, but only if the site uses HTTPS",
      "Yes, but fields appear masked for privacy"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "Form pre-fill is disabled on external (non-Marketo) domains by default for security reasons. Even if the visitor is known, fields won't auto-populate. To enable pre-fill on external sites, an admin must add the domain to the allowlist in Admin > Landing Pages."
  },
  {
    "q": "You have CAPTCHA enabled on a Marketo form using reCAPTCHA v3. A bot submits the form and receives a low score (0.2). What happens?",
    "options": [
      "Submission is blocked automatically",
      "Submission is accepted, score is recorded in activity log",
      "Form shows a puzzle challenge",
      "Submission requires manual approval"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "Marketo's reCAPTCHA v3 integration is passive - it does not block submissions automatically. The form submission is accepted and the CAPTCHA score is recorded in the 'Filled Out Form' activity. You must then use Smart Campaigns to take action on suspicious submissions (quarantine, delete, or exclude from nurturing) based on the CAPTCHA Normalized Score."
  },
  {
    "q": "You're reviewing an email in Marketo and notice its status shows 'Approved with Draft'. A colleague asks what this means for the email currently being sent by active campaigns. What do you explain?",
    "options": [
      "The approved version is live; the draft contains pending changes not yet live",
      "Both the approved and draft versions are being sent simultaneously",
      "The draft will automatically replace the approved version soon",
      "The asset is broken and requires manual intervention to merge versions"
    ],
    "correct": [
      0
    ],
    "multiple": false,
    "explanation": "'Approved with Draft' means two versions exist: the approved version that is currently live and being used by active campaigns, and a draft version with pending edits. Active campaigns continue using the approved version uninterrupted. The draft changes only go live when explicitly approved, allowing you to prepare updates without affecting current sends."
  },
  {
    "q": "You're sending an operational email with subject line: 'Your Order #{{lead.Order Number}} Has Shipped'. For a recipient whose Order Number field is empty (no default value set), what subject line will they see?",
    "options": [
      "Your Order # Has Shipped",
      "Your Order #{{lead.Order Number}} Has Shipped",
      "Email fails to send",
      "Your Order Has Shipped"
    ],
    "correct": [
      0
    ],
    "multiple": false,
    "explanation": "When a lead token field is empty and no default value is specified, the token outputs nothing—it simply disappears, leaving the surrounding text intact. The recipient sees 'Your Order # Has Shipped' with an awkward '#' followed by nothing. For operational emails with dynamic order data, always validate that required fields are populated before sending, or use {{lead.Order Number:default=N/A}} to handle missing values gracefully."
  },
  {
    "q": "Yesterday you sent an email to 5,000 recipients. The email contains a snippet. Today, you edit the snippet and approve the changes. What happens to the emails that were already delivered yesterday?",
    "options": [
      "The content updates automatically in recipients' inboxes",
      "Nothing—delivered emails retain the original snippet content",
      "Updates only for recipients who haven't opened the email yet",
      "The emails bounce back and must be re-sent"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "Emails that have already been sent are static—they captured the snippet content at the moment of delivery. Editing and approving a snippet only affects future sends. The 5,000 recipients will continue to see the original content in their inboxes. This is important to understand for compliance and reporting: historical sends are immutable."
  },
  {
    "q": "You have a global form embedded on 10 different landing pages. You edit the form to add a new required field for \"Phone Number\" and approve the changes. What is the impact on the landing pages?",
    "options": [
      "All 10 landing pages immediately display the new required field",
      "Each landing page must be re-approved individually to show the change",
      "Only new landing pages using the form will include the field",
      "The form stops working until all landing pages are updated"
    ],
    "correct": [
      0
    ],
    "multiple": false,
    "explanation": "Global forms propagate changes instantly to all assets where they're embedded. Once you approve the form edit, all 10 landing pages will immediately require the Phone Number field—no additional approvals needed. This is powerful for efficiency but requires caution: always test form changes in a sandbox first, as a mistake affects every page using that form."
  },
  {
    "q": "You have an active trigger campaign with the trigger \"Fills Out Form X\". A person submits Form X at 2:00 PM. When does the campaign flow begin executing for this person?",
    "options": [
      "Immediately in real-time",
      "At the next scheduled batch run",
      "Within one hour of the form submission",
      "The following day at midnight"
    ],
    "correct": [
      0
    ],
    "multiple": false,
    "explanation": "Trigger campaigns execute in real-time the moment the trigger condition is met. When the person submits Form X at 2:00 PM, the flow starts within seconds. This immediate execution is the key difference between Trigger and Batch campaigns—Triggers respond to individual actions instantly, while Batch campaigns run on a schedule."
  },
  {
    "q": "You schedule a batch campaign to run Friday at 3 PM. The Smart List filter is \"Job Title contains VP\". On Thursday, 500 people match this criteria. Friday morning, your sales team imports 200 new VP-level contacts. When the campaign runs at 3 PM Friday, how many people are processed?",
    "options": [
      "500—the audience was locked when the campaign was scheduled",
      "700—everyone who qualifies at the moment the campaign runs",
      "200—only newly imported contacts are processed",
      "0—imports don't qualify for scheduled campaigns"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "Batch campaigns evaluate their Smart List at runtime—the exact moment the campaign executes. When the campaign runs Friday at 3 PM, Marketo checks who currently matches \"Job Title contains VP\" and finds 700 people (the original 500 plus the 200 imported that morning). The audience is never locked in advance; it's always fresh at execution time."
  },
  {
    "q": "Your lead nurture flow is: Send Welcome Email → Wait 7 days → Send Case Study → Remove from Flow (if Lead Status = \"Qualified\") → Wait 5 days → Send Demo Request. A lead receives the Case Study email. Three days later, Sales qualifies the lead and changes their status to \"Qualified\". What happens next?",
    "options": [
      "The lead is removed and never receives the Demo Request email",
      "The lead continues and receives the Demo Request after 5 days",
      "The lead receives the Demo Request immediately",
      "The flow restarts from the beginning"
    ],
    "correct": [
      0
    ],
    "multiple": false,
    "explanation": "The \"Remove from Flow\" step evaluates its condition at the exact moment the lead reaches it—not before, not continuously. Since Sales changed the Lead Status to \"Qualified\" before the lead hit the Remove step, the condition is true and the lead exits the flow. They never receive the Demo Request email. This pattern is common for stopping nurture sequences when sales engagement begins."
  },
  {
    "q": "You have a \"Send Welcome Kit\" campaign (Campaign B) with the qualification rule set to \"Only Once\". This campaign is called via Request Campaign from both your webinar registration flow and your content download flow. A lead downloads a whitepaper and runs through Campaign B. Two weeks later, the same lead registers for a webinar, which triggers the Request Campaign step again. What happens?",
    "options": [
      "Campaign B runs again because it was requested from a different source",
      "Campaign B is blocked—the lead already ran through it once",
      "Campaign B runs but skips the email steps",
      "The system prompts for manual approval before running"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "Qualification rules are enforced regardless of how a person enters a campaign. Since Campaign B is set to \"Only Once\" and the lead already ran through it via the content download flow, the webinar registration's Request Campaign step will not trigger Campaign B again. The qualification rule protects against duplicate sends. If you need the campaign to run multiple times, change the rule to \"Every Time\" or use separate campaigns."
  },
  {
    "q": "A flow step has: Send Email with Choice - If State = 'CA', send 'California Promo'. Default: send 'General Promo'. A person with State = 'TX' runs through the flow. What email do they receive?",
    "options": [
      "California Promo (first choice)",
      "No email (doesn't match CA)",
      "General Promo (default)",
      "Error - must match a choice"
    ],
    "correct": [
      2
    ],
    "multiple": false,
    "explanation": "Choice Steps allow conditional logic in flows. The Choice checks if State = CA first. Since the person is in TX (doesn't match), the Default action is used - they receive the 'General Promo' email. The Default is the fallback when no Choice conditions are met."
  },
  {
    "q": "A flow step uses 'Wait until {{lead.Renewal Date}}'. The person's Renewal Date is March 1, but today is March 5. What happens when the flow reaches this step?",
    "options": [
      "Waits until next year March 1",
      "Continues immediately (date passed)",
      "Errors out",
      "Pauses indefinitely"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "When the wait-until date (March 1) has already passed (today is March 5), the flow continues immediately. Marketo recognizes the date is in the past and doesn't wait. The person moves to the next flow step right away."
  },
  {
    "q": "A trigger campaign is active with 50 people currently in a 'Wait 14 days' step. The marketer deactivates the campaign. What happens to those 50 people?",
    "options": [
      "They are removed from the flow immediately",
      "They continue through the flow and complete all remaining steps",
      "They remain frozen until the campaign is reactivated",
      "They skip the wait and execute the next step immediately"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "Deactivating a trigger campaign only stops NEW people from entering the flow. People already in wait steps or any other flow step will continue to move through the flow until done. The 50 people will complete their 14-day wait and execute all remaining steps normally."
  },
  {
    "q": "A Smart Campaign has qualification rules set to 'Once every 30 days'. A person qualifies for the campaign on Jan 1, Jan 15, and Feb 1. How many times do they run through the campaign?",
    "options": [
      "Once (Jan 1 only)",
      "Twice (Jan 1, Feb 1)",
      "Three times (all)",
      "Once (most recent)"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "With 'Once every 30 days': Jan 1 (runs), Jan 15 is within 30 days (skipped), Feb 1 is 31 days after Jan 1 (runs). The qualification rule creates a cooldown period that resets each time the campaign successfully processes the person."
  },
  {
    "q": "Batch campaign with Smart List: 5,000 people. Schedule: Recurring, every Monday at 9 AM. First Monday processes 5,000. Second Monday, same 5,000 still qualify. What processes?",
    "options": [
      "Skips all 5,000 (already ran)",
      "Processes all 5,000 again (depends on qualification rule)",
      "Only new people",
      "Error (duplicates)"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "Recurring batch campaigns re-evaluate their Smart List each time they run. Every Monday at 9 AM, it checks who currently qualifies. New people who meet criteria since last run are included; people who no longer qualify are excluded. The list is dynamic per run."
  },
  {
    "q": "You create a Smart Campaign with a 'Change Data Value' flow step to set Status = 'MQL'. You add a Choice to the flow step: 'If Lead Source is Webinar, set Status to MQL-Webinar'. A person with Lead Source = 'Webinar' runs through this campaign. What is their resulting Status value?",
    "options": [
      "Status = \"MQL\"",
      "Status = \"MQL-Webinar\"",
      "Both values (error)",
      "No change (conflicting choices)"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "Choice steps in Change Data Value allow conditional logic. Choices are evaluated first—if a Choice condition matches, it overrides the default action. Since this person's Lead Source is 'Webinar', the Choice matches and their Status is set to 'MQL-Webinar'. The default 'MQL' value is only used when no Choice conditions are met."
  },
  {
    "q": "You open a Smart Campaign and navigate to the Schedule tab. Instead of seeing scheduling options, you see the message \"Campaign is Requested\". What does this indicate about the campaign?",
    "options": [
      "The campaign is a batch campaign waiting to be manually run",
      "The campaign uses \"Campaign is Requested\" as its trigger and runs when called by another campaign",
      "The campaign is a trigger campaign with a misconfigured Smart List",
      "The campaign has been deactivated and needs reactivation"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "\"Campaign is Requested\" on the Schedule tab means this campaign has the trigger \"Campaign is Requested\" in its Smart List. It's designed to be executed by other campaigns via the Request Campaign flow step—it won't run on its own schedule or from direct triggers. This is a common pattern for reusable campaign logic, like a centralized \"Update Lead Score\" campaign that multiple campaigns can call."
  },
  {
    "q": "An email has the following metrics: Sent=10,000, Delivered=9,800, Bounced=200, Opened=2,940, Clicked=588. What is the Click-to-Open Rate?",
    "options": [
      "5.88% (588÷10,000)",
      "6% (588÷9,800)",
      "20% (588÷2,940)",
      "294% (2,940÷1,000)"
    ],
    "correct": [
      2
    ],
    "multiple": false,
    "explanation": "Click-to-Open Rate = Clicks ÷ Opens × 100%. Clicks (588) ÷ Opens (2,940) = 20%. This metric isolates content engagement from deliverability - it shows how compelling the email content was among people who actually opened it."
  },
  {
    "q": "A Program Performance report shows: Total Members=500, New Names=200, Success=150, Total Cost=$10,000. What is the Cost per New Name?",
    "options": [
      "$20",
      "$50",
      "$66.67",
      "$100"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "Cost per New Name = Total Cost ÷ New Names = $10,000 ÷ 200 = $50. This metric shows how much it costs to acquire each new person in your database through this program. Note: Cost per Success would be $10,000 ÷ 150 = $66.67, which is a different metric."
  },
  {
    "q": "You apply the following filters to a Program Performance report: Channel = 'Webinar' and Period Cost = 'Q1 2025'. What does the report display?",
    "options": [
      "All webinar programs",
      "Only webinar programs with period costs in Q1 2025",
      "All programs in Q1",
      "Cannot filter by both"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "Filtering by Channel = Webinar and Period Cost = Q1 2025 shows performance data only for webinar programs during Q1 2025. This combination gives you focused insights into webinar ROI for that specific time period."
  },
  {
    "q": "You're reviewing a Campaign Activity Report for a recurring batch campaign. The report shows: Batch Run Count = 5, Total People Processed = 2,500, and People in Wait Step = 300. Your manager asks for the average number of people processed per batch run. What do you report?",
    "options": [
      "500 (2,500 ÷ 5)",
      "440 (includes wait)",
      "300 (wait only)",
      "Cannot calculate"
    ],
    "correct": [
      0
    ],
    "multiple": false,
    "explanation": "Average people per run = Total People Processed ÷ Batch Run Count = 2,500 ÷ 5 = 500. In the Campaign Activity Report, 'Total People Processed' counts everyone who has entered the campaign flow, including those currently in Wait Steps. The 'People in Wait Step' metric (300) is a subset showing how many are paused mid-flow—it's not added separately. This report is useful for monitoring batch campaign volume and identifying campaigns with unusually high wait step backlogs."
  },
  {
    "q": "You configure a Web Page Activity Report and set it to 'Anonymous' mode. What type of visitors does the report display?",
    "options": [
      "All visitors",
      "Unknown visitors only (not yet identified)",
      "Known visitors",
      "Both known and unknown"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "Anonymous Web Page Activity Report shows visitor behavior without identifying specific people. You can see page views, time on page, and browsing patterns, but cannot attribute them to specific leads. Useful for understanding general website traffic patterns."
  },
  {
    "q": "In an Engagement Stream Performance report, Email X has an Engagement Score of 75 and Email Y has a score of 92. What is the recommended action?",
    "options": [
      "Remove Email X (low score)",
      "Email Y performing better, optimize Email X or reorder",
      "Both good (>50)",
      "Scores meaningless"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "Email Y (Score 92) should be prioritized over Email X (Score 75). Higher engagement scores indicate content that resonates better with the audience. Consider reordering the stream to lead with higher-scoring content, or analyze what makes Email Y more effective."
  },
  {
    "q": "Smart List Subscription: Smart List has 50 people Friday morning. Subscription sends Friday 5 PM. By 5 PM, 10 more qualify. What does the email include?",
    "options": [
      "50 people (morning snapshot)",
      "60 people (5 PM snapshot)",
      "10 people (delta)",
      "Depends on settings"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "Smart List Subscription evaluates the Smart List at the time of sending. By 5 PM Friday, 60 people now qualify (original 50 + 10 new). The subscription sends with all 60 people who match the criteria at send time - it's not a snapshot from earlier in the day."
  },
  {
    "q": "A Report Subscription is configured with Format=PDF. The recipient wants to analyze the data in Excel. What is the solution?",
    "options": [
      "Can convert PDF to Excel",
      "Change subscription format to Excel",
      "Re-run report manually",
      "PDF cannot export to Excel"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "To analyze data in Excel, change the Report Subscription format from PDF to CSV or Excel. CSV and Excel formats allow direct data manipulation in spreadsheet tools. PDF is better for sharing formatted reports but not for data analysis."
  },
  {
    "q": "You run a People Performance Report grouped by \"Acquisition Program\". One of your leads was originally acquired through \"Webinar April 2024\" (their first program membership). Later, this same lead joined \"Email Campaign May 2024\" and \"Trade Show June 2024\". Under which program does this lead appear in the report?",
    "options": [
      "All three programs—the report shows every program membership",
      "Trade Show June 2024—the report uses the most recent program",
      "Email Campaign May 2024—the report uses the largest program",
      "Webinar April 2024 only—Acquisition Program never changes"
    ],
    "correct": [
      3
    ],
    "multiple": false,
    "explanation": "Acquisition Program is a permanent field that captures the first program a person became a member of—it represents how they originally entered your database. Once set, it never changes regardless of how many programs the person joins afterward. When grouping by Acquisition Program, each person appears only under their original program. This is valuable for measuring which channels are most effective at generating new leads."
  },
  {
    "q": "A Landing Page Performance report shows: Visits=1,000, Form Fills=150, New Names=100. What is the Conversion Rate?",
    "options": [
      "10% (100÷1,000)",
      "15% (150÷1,000)",
      "66.67% (100÷150)",
      "Cannot calculate"
    ],
    "correct": [
      1
    ],
    "multiple": false,
    "explanation": "Landing Page Conversion Rate = Form Fills ÷ Visits × 100% = 150 ÷ 1,000 = 15%. Note: Conversion Rate uses Form Fills (not New Names) as the numerator. New Names (100) is a separate metric showing how many of those form fills were new to the database."
  }
];