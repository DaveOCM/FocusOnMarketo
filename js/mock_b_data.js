const questions = [
            {
                q: "Which program feature allows emails to be delivered at the recipient's local time zone?",
                options: [
                    "Head Start",
                    "Recipient Time Zone",
                    "Smart Send",
                    "Local Delivery"
                ],
                correct: [1],
                explanation: "Recipient Time Zone (RTZ) is the feature that delivers emails at the recipient's local time. When enabled, Marketo calculates each person's timezone and staggers the send accordingly. The program must be approved at least 25 hours before the scheduled send time."
            },
            {
                q: "An Email Program has A/B testing enabled. Can it also use Head Start?",
                options: [
                    "Yes, they work together",
                    "No, cannot combine A/B testing with Head Start",
                    "Yes, but only for subject line tests",
                    "Only in Email Programs v2.0"
                ],
                correct: [1],
                explanation: "Yes, an Email Program can use both A/B testing and Head Start simultaneously. Head Start sends the winning variation early to a top-performing segment, while A/B testing determines which variation performs best. Both features work together to optimize delivery."
            },
            {
                q: "In an A/B test, you're testing two subject lines with 10,000 recipients. You set test sample to 20%. How many people receive each test version?",
                options: [
                    "1,000 each (total 2,000 in test)",
                    "2,000 each (total 4,000 in test)",
                    "5,000 each",
                    "10,000 each"
                ],
                correct: [0],
                explanation: "With 10,000 recipients and a 20% test sample, 2,000 people are in the test group. Split between 2 variations, that's 1,000 per variation. The remaining 8,000 receive the winning variation once declared. Test sample size should be large enough for statistical significance but small enough to protect the majority of your list."
            },
            {
                q: "What happens if you set A/B test winner declaration to \"Manual\" but never declare a winner?",
                options: [
                    "Winner is auto-selected after 24 hours",
                    "Email sends to everyone with random version",
                    "Email never sends to remaining recipients",
                    "System picks highest performing version"
                ],
                correct: [2],
                explanation: "If winner declaration is set to Manual and you never declare a winner, the remaining recipients never receive the email. This is a critical risk - always monitor A/B tests and declare winners promptly, or use automatic winner declaration based on a metric and time period."
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
                explanation: "A person can only be in ONE stream at a time within an Engagement Program. If you move them to a different stream, they leave the current one. Streams are mutually exclusive within a single Engagement Program to avoid duplicate or conflicting messaging."
            },
            {
                q: "What is Person Cadence in an Engagement Program?",
                options: [
                    "How often casts occur",
                    "Whether person receives content (Normal) or not (Paused)",
                    "Person's engagement score",
                    "Stream transition rules"
                ],
                correct: [1],
                explanation: "Person Cadence controls how frequently a person receives content from the Engagement Program. It overrides the stream cadence for that individual. Options include: Monthly, Quarterly, Yearly, or Paused. This allows personalization of communication frequency per lead."
            },
            {
                q: "A channel has these statuses: Invited, Registered, Attended, No Show. Which should be marked as \"Success\"?",
                options: [
                    "Invited",
                    "Registered",
                    "Attended",
                    "All of them"
                ],
                correct: [2],
                explanation: "Success status should be marked as 'Attended' for event programs. The success status determines when a person counts as a program success in reporting. For events, attendance is the key success indicator - registration alone doesn't count as success."
            },
            {
                q: "You create custom tag \"Product Line\" with values: Product A, Product B, Product C. Can you assign multiple product values to one program?",
                options: [
                    "Yes, unlimited values",
                    "Yes, maximum 3 values",
                    "No, only one value per tag type",
                    "Only if it's a Default Program"
                ],
                correct: [2],
                explanation: "Yes, you can use custom tags with multiple predefined values. Tags help you categorize programs beyond what Channels provide. You can create tag categories with specific allowed values, making reporting and filtering more consistent across your Marketo instance."
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
                explanation: "Period costs are entered at the Program level. Each program tracks its own costs during specific time periods. This allows accurate ROI calculation per program. You can add multiple period costs to track costs over different time ranges within the same program."
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
                explanation: "Rich Text token type allows you to store formatted HTML content with styling, images, links, etc. Text tokens only support plain text. There is no 'HTML' or 'Script' token type in Marketo - Rich Text is the correct choice for formatted content."
            },
            {
                q: "Where can My Tokens be used?",
                options: [
                    "Email subject lines",
                    "Smart List filters",
                    "Landing page content",
                    "Flow step values",
                    "E) Program names"
                ],
                correct: [0, 2, 3],
                multiple: true,
                explanation: "My Tokens can be used in Emails, Landing Pages, and Forms. They cannot be used in snippets directly. This flexibility allows you to create reusable dynamic content that adapts based on the folder or program context where it is used."
            },
            {
                q: "A program has a My Token {{my.eventDate}} set to 'March 15, 2025'. You clone the program for a new event. What happens to the token value in the cloned program?",
                options: [
                    "Automatically updates to new date",
                    "Copies the same value ('March 15, 2025')",
                    "Token is deleted in clone",
                    "System prompts for new value"
                ],
                correct: [1],
                explanation: "When you clone a program, My Tokens are also cloned but retain their original values. You need to manually update the token values (like eventDate) in the cloned program. This is a common mistake - always check and update tokens after cloning."
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
                explanation: "Communication limits block additional emails beyond the set limit. Since the person already received 2 marketing emails today, any additional marketing emails are blocked until the next day. However, Operational emails still go through regardless of communication limits."
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
                explanation: "Local assets belong to a specific program and can only be used within that program. Global assets are created in Design Studio and can be reused across multiple programs. Local assets give you more flexibility to customize per program without affecting other programs."
            },
            {
                q: "You have Smart List with 1,000 people. You add them to a Static List. Later, 200 more people qualify for the Smart List. How many are in the Static List?",
                options: [
                    "1,000 (static doesn't auto-update)",
                    "1,200 (auto-updates)",
                    "200 (only new people)",
                    "Depends on settings"
                ],
                correct: [0],
                explanation: "The Static List remains at 1,000 people. Static Lists are fixed snapshots - they don't automatically update when the Smart List criteria changes. The 200 new people matching the Smart List criteria are NOT automatically added to the Static List. You would need to manually add them."
            },
            {
                q: "Which operator would find people whose email does NOT end with \"@gmail.com\"?",
                options: [
                    "Email Address is not \"@gmail.com\"",
                    "Email Address not contains \"@gmail.com\"",
                    "Email Address not ends with \"gmail.com\"",
                    "Email Address does not equal \"@gmail.com\""
                ],
                correct: [2],
                explanation: "The 'not contains' or 'not ends with' operator finds records that don't match a specific pattern. To exclude gmail.com addresses, use 'Email Address not ends with @gmail.com'. This is useful for targeting only corporate email addresses."
            },
            {
                q: "A Smart List has two filters: 'Lead Score > 50' AND 'Job Title contains Manager'. How are these filters evaluated?",
                options: [
                    "Person must meet BOTH conditions (AND logic)",
                    "Person must meet EITHER condition (OR logic)",
                    "Only the first filter is used",
                    "Random evaluation"
                ],
                correct: [0],
                explanation: "By default, multiple filters in a Smart List use AND logic - a person must meet ALL criteria to qualify. To use OR logic, you need to use Advanced Filters. For example, Advanced Filter '1 OR 2' would mean person qualifies if they meet either condition."
            },
            {
                q: "What's the correct way to clear a field value for multiple records?",
                options: [
                    "Change Data Value to blank",
                    "Change Data Value to NULL",
                    "Change Data Value to empty",
                    "Delete field mapping"
                ],
                correct: [1],
                explanation: "To clear field values for multiple records at once, use a batch Smart Campaign with a 'Change Data Value' flow step. Set the target field to empty/blank. This is much more efficient than editing records one by one, especially for large data corrections."
            },
            {
                q: "A Segmentation is \"Approved\". Can you edit it?",
                options: [
                    "Yes, anytime",
                    "No, must unapprove first",
                    "Yes, but changes don't take effect until re-approved",
                    "Only admins can edit approved segmentations"
                ],
                correct: [1],
                explanation: "Yes, you can edit an approved Segmentation, but editing it creates a draft. The approved version remains active until you approve the new draft. This prevents disruption to any active Dynamic Content or campaigns that rely on the current Segmentation."
            },
            {
                q: "A Segmentation called 'Industry' has these segments in order: Healthcare, Technology, Finance, Default. Why does the order matter?",
                options: [
                    "It doesn't matter - random assignment",
                    "First matching segment wins (top-to-bottom)",
                    "Last matching segment wins",
                    "All matching segments are assigned"
                ],
                correct: [1],
                explanation: "Segment order matters because Segmentations are mutually exclusive. A person is assigned to the FIRST matching segment from top to bottom. If someone in Healthcare also works in Technology, their placement in the correct segment depends entirely on which segment is listed first."
            },
            {
                q: "What does the 'Email Suspended' status mean in Marketo?",
                options: [
                    "Person unsubscribed",
                    "Email temporarily suspended (usually due to bounces)",
                    "Marketing emails paused by marketer",
                    "Person requested suspension"
                ],
                correct: [1],
                explanation: "'Email Suspended' means the person's email address has been identified as invalid or has bounced. Marketo automatically sets this when a hard bounce occurs. No emails (marketing or operational) are sent to suspended addresses to protect your deliverability reputation."
            },
            {
                q: "A person is \"Email Invalid = True\". What can they receive?",
                options: [
                    "Marketing emails only",
                    "Operational emails only",
                    "All emails",
                    "No emails"
                ],
                correct: [3],
                explanation: "When Email Invalid = True, the person cannot receive ANY emails at all - neither marketing nor operational. This is because the email address itself is invalid, so sending anything would result in bounces. This status must be resolved before any emails can be sent."
            },
            {
                q: "What is the difference between 'Unsubscribed' and 'Blocklisted' status?",
                options: [
                    "No difference",
                    "Unsubscribed can receive operational emails; Blocklisted receives nothing",
                    "Blocklisted is temporary",
                    "Unsubscribed is more restrictive"
                ],
                correct: [1],
                explanation: "Unsubscribed means the person opted out of marketing communications but can still receive operational emails. Blocklisted means NO emails at all - neither marketing nor operational. Blocklisted is the most restrictive status and typically indicates spam complaints or hard bounces."
            },
            {
                q: "When is the 'List Member Only' import type the best option?",
                options: [
                    "Adding new people with field data",
                    "Updating existing people's fields",
                    "Just adding people to a list without field updates",
                    "Creating new records only"
                ],
                correct: [2],
                explanation: "'List Member Only' import type is best for quickly adding existing records to a list without updating any field data. It only needs email addresses to match against existing records. It's the fastest import type because it skips all field mapping and updating logic."
            },
            {
                q: "During import, what is the Email Address field's requirement status?",
                options: [
                    "Optional",
                    "Required for matching existing records",
                    "Only needed for new records",
                    "Can be replaced with Company Name"
                ],
                correct: [1],
                explanation: "Email Address is a required field during import - it cannot be left blank. Marketo uses it as the primary key to match against existing records. If an email matches an existing record, that record is updated (depending on import type). If no match, a new record may be created."
            },
            {
                q: "What encoding setting is typically recommended for list imports in Marketo?",
                options: [
                    "UTF-8",
                    "ASCII",
                    "ANSI",
                    "Unicode"
                ],
                correct: [0],
                explanation: "Import encoding is typically set to UTF-8, which supports the widest range of characters including accented characters, special symbols, and international languages. Using the wrong encoding can cause character corruption in imported data."
            },
            {
                q: "You want to find people who are either in California OR have Lead Score > 50. How do you build this?",
                options: [
                    "Two separate Smart Lists",
                    "Use \"Advanced Filters\" with OR logic",
                    "Combine in one filter with OR",
                    "Not possible in one Smart List"
                ],
                correct: [1],
                explanation: "To combine OR logic across different fields, you need to use separate Smart List rows. Put 'Country = California' on one row and 'Lead Score > 50' on another row. Filters on the same row use AND logic; filters on different rows use OR logic by default."
            },
            {
                q: "What does the System Smart List 'Possible Duplicates' help you do?",
                options: [
                    "Find spam records",
                    "Identify potential duplicate person records for review",
                    "Find people with duplicate emails",
                    "Auto-merge duplicate records"
                ],
                correct: [1],
                explanation: "The 'Possible Duplicates' System Smart List helps you identify and merge duplicate records in your database. It flags records that share similar attributes (like name and company) that might be the same person. Keeping your database clean improves targeting accuracy."
            },
            {
                q: "An approved email is being used in 3 active campaigns. You create a draft and make edits. What version do the campaigns use?",
                options: [
                    "Draft version immediately",
                    "Approved version (last approved state)",
                    "Campaigns stop working",
                    "System asks which version to use"
                ],
                correct: [1],
                explanation: "The 3 active campaigns continue using the currently approved version of the email. Your draft edits do NOT affect any active campaigns until you approve the new draft. This ensures stability - changes only go live when you explicitly approve them."
            },
            {
                q: "You have an approved email and create a draft with edits. If you discard the draft, what happens?",
                options: [
                    "Email is deleted",
                    "Email reverts to last approved version",
                    "Email becomes unapproved",
                    "Draft is saved as backup"
                ],
                correct: [1],
                explanation: "Discarding a draft returns the email to its previously approved state. No changes are lost permanently - the approved version remains intact. This is useful when you decide the draft changes were not needed or when you want to start fresh with new edits."
            },
            {
                q: "What does Form Pre-Fill require?",
                options: [
                    "Known visitor (cookie linked to record)",
                    "Form on Marketo landing page",
                    "HTTPS connection",
                    "Premium subscription"
                ],
                correct: [0, 1],
                multiple: true,
                explanation: "Form Pre-Fill requires two things: (1) the form must be on a Marketo landing page (not external), and (2) the visitor must be a known lead (previously identified through form submission or email click). Both conditions must be met for pre-fill to work."
            },
            {
                q: "Progressive Profiling: A form is set to show 2 progressive fields. Person has First Name, Last Name, Email already. Which fields will they see?",
                options: [
                    "First Name, Last Name",
                    "Next 2 fields in priority order that they don't have",
                    "Email plus 2 new fields",
                    "Random 2 fields"
                ],
                correct: [1],
                explanation: "Progressive Profiling tracks which fields a person has already filled in. Since this person already has First Name, Last Name, and Email, the form will show the next 2 unfilled progressive fields (like Job Title and Company). Already-filled fields are hidden."
            },
            {
                q: "A form has a Visibility Rule: 'Show Field A if Country = US'. A person selects Canada as their country. What happens to Field A?",
                options: [
                    "Field A stays visible",
                    "Field A hides immediately",
                    "Form errors",
                    "Field A becomes optional"
                ],
                correct: [1],
                explanation: "When a person selects Canada and the Visibility Rule says 'Show Field A if Country = US', Field A is hidden because the condition is not met. Visibility Rules dynamically show/hide fields in real-time based on the current form answers."
            },
            {
                q: "You set up a Global Form Validation Rule to block '@gmail.com' email addresses. Which forms does this rule apply to?",
                options: [
                    "Only global forms",
                    "Only local forms",
                    "ALL forms in the instance",
                    "Forms created after rule is set"
                ],
                correct: [2],
                explanation: "Global Form Validation Rules apply to ALL forms across your entire Marketo instance. If you block '@gmail.com' globally, it's blocked on every single form - local and global. This is a powerful but broad setting that affects everything."
            },
            {
                q: "What is CAPTCHA in Marketo?",
                options: [
                    "Visual puzzle user must solve",
                    "Score-based implementation analyzing behavior",
                    "reCAPTCHA v3",
                    "Required for all forms"
                ],
                correct: [1],
                explanation: "CAPTCHA in Marketo is an optional security feature that can be enabled on forms to prevent spam bot submissions. It adds a verification step that confirms the submitter is a real person. It's recommended for high-traffic or public-facing forms."
            },
            {
                q: "What does the 'Operational' email setting do when it comes to unsubscribed recipients?",
                options: [
                    "Won't send to unsubscribed people",
                    "Will send despite unsubscribed status",
                    "Asks unsubscribed people to resubscribe",
                    "Operational emails can't ignore unsubscribe"
                ],
                correct: [1],
                explanation: "Operational emails bypass the Unsubscribed status, meaning the email will be sent even if the person has unsubscribed from marketing communications. This is by design - operational emails like order confirmations must be delivered regardless of marketing preferences."
            },
            {
                q: "What is the correct use of Operational emails?",
                options: [
                    "Product launch announcement",
                    "Password reset",
                    "Order shipping notification",
                    "Monthly newsletter"
                ],
                correct: [1, 2],
                multiple: true,
                explanation: "Password reset notifications and order shipping updates are both legitimate operational emails. They are transactional in nature - the recipient expects and needs them. Marketing newsletters and product promotions should NOT use operational email classification."
            },
            {
                q: "What is the best practice length for email preheaders?",
                options: [
                    "10-20 characters",
                    "40-100 characters",
                    "150-200 characters",
                    "Unlimited"
                ],
                correct: [1],
                explanation: "Email preheader best practice is to keep it between 40-100 characters. Too short wastes the preview space; too long gets cut off in most email clients. The preheader should complement the subject line and entice the reader to open the email."
            },
            {
                q: "What are Text Only emails best for?",
                options: [
                    "All audiences",
                    "Highly technical/developer audiences who prefer plain text",
                    "Mobile users",
                    "Email clients that block HTML"
                ],
                correct: [1],
                explanation: "Text Only emails are best for high deliverability and personal communication. They bypass spam filters more easily since they have no HTML code. They're ideal for personal, conversational emails or when you want to appear as a simple direct message."
            },
            {
                q: "What can the CC Address field in email use?",
                options: [
                    "Only static email addresses",
                    "Tokens like {{lead.Lead Owner Email Address}}",
                    "Only internal @company.com addresses",
                    "Maximum 3 addresses"
                ],
                correct: [1],
                explanation: "CC Address in emails can use My Tokens, allowing you to dynamically set the CC based on lead data. For example, you could CC the lead's assigned sales rep using a token like {{my.salesRepEmail}}. This enables dynamic routing without manual intervention."
            },
            {
                q: "Snippet is approved and used in 20 emails. You edit snippet (create draft). Do the 20 emails change?",
                options: [
                    "Yes, immediately",
                    "No, not until you approve the snippet draft",
                    "Only new sends show changes",
                    "Must re-approve all 20 emails"
                ],
                correct: [1],
                explanation: "The 20 emails continue using the currently approved snippet content. Editing a snippet creates a draft - it does NOT affect emails using the approved version until you approve the new snippet draft. This prevents accidental content changes across active emails."
            },
            {
                q: "Why does Dynamic Content require Segmentation?",
                options: [
                    "Segmentations load faster",
                    "Segmentations provide mutually exclusive groups for content variations",
                    "It's a Marketo requirement",
                    "Smart Lists don't work with dynamic content"
                ],
                correct: [1],
                explanation: "Dynamic Content requires Segmentation because it needs a way to determine which content variation to show each person. Segmentations provide mutually exclusive categories, ensuring each person sees exactly one version of the content - no overlaps or conflicts."
            },
            {
                q: "A person is in the 'AMER' segment, but an email shows them the 'Default' content instead. What is the most likely cause?",
                options: [
                    "Segmentation not approved",
                    "Email not approved",
                    "Dynamic content not set up correctly for AMER segment",
                    "Person changed segments after send"
                ],
                correct: [2],
                explanation: "If a person is in the AMER segment but sees Default content, the most likely cause is that the Dynamic Content was not properly set up for the AMER segment. Check that the AMER variation was created and approved in the Dynamic Content editor."
            },
            {
                q: "Can you make email From Name dynamic based on segmentation?",
                options: [
                    "Yes, directly in email settings",
                    "No, must use different emails",
                    "Yes, using tokens with segmentation-based campaigns",
                    "Only in Email Programs"
                ],
                correct: [2],
                explanation: "Yes, you can make the email From Name dynamic using Segmentations and Dynamic Content. This allows different audience segments to see different sender names, which can improve open rates by showing a more relevant or trusted sender name per segment."
            },
            {
                q: "What does Preview by Segment show?",
                options: [
                    "How email looks for each segment",
                    "Who will receive email",
                    "Send statistics",
                    "Segmentation performance"
                ],
                correct: [0],
                explanation: "Preview by Segment shows exactly what each segment's audience will see when the email is sent. It renders the email with the Dynamic Content for each specific segment, allowing you to verify that every variation looks correct before sending."
            },
            {
                q: "When you nest a Default Program inside an Engagement Program stream, what filter should the Smart Campaign's Smart List include?",
                options: [
                    "Any trigger",
                    "Member of Engagement Program",
                    "Campaign is Requested",
                    "Filled Out Form"
                ],
                correct: [1],
                explanation: "Nested Default Programs in Engagement Program streams should use the 'Member of Engagement Program' filter in their Smart List. This ensures the campaign only processes people who are actually members of the parent Engagement Program."
            },
            {
                q: "What is the range for Engagement Program Content Engagement Score?",
                options: [
                    "1-10",
                    "0-100",
                    "1-5 stars",
                    "A-F grade"
                ],
                correct: [1],
                explanation: "Content Engagement Score in Engagement Programs ranges from 0 to 100. It measures how well each piece of content performs based on opens, clicks, and other engagement signals. Higher scores indicate content that resonates well with the audience."
            },
            {
                q: "In an Engagement Program, what does it mean when a person's cadence is set to 'Paused'?",
                options: [
                    "Person unsubscribed",
                    "Person won't receive content until cadence set to Normal",
                    "Stream is paused",
                    "Content is paused"
                ],
                correct: [1],
                explanation: "When Person Cadence is set to 'Paused', the person stops receiving content from the Engagement Program temporarily. They remain in their current stream position. When cadence is resumed, they continue from where they left off - no content is skipped."
            },
            {
                q: "When does a Landing page URL become active?",
                options: [
                    "Page is created",
                    "Page is approved",
                    "Form is added",
                    "Page is published"
                ],
                correct: [1],
                explanation: "A landing page URL becomes active when the page is approved. Before approval, the URL exists but returns a 404 or error page. This prevents draft or test pages from being accidentally accessed by the public."
            },
            {
                q: "Smart Campaign icons: What does a spark/lightning bolt indicate?",
                options: [
                    "Batch campaign",
                    "Active trigger campaign",
                    "Campaign with errors",
                    "Fast campaign"
                ],
                correct: [1],
                explanation: "A spark or lightning bolt icon on a Smart Campaign indicates it's a Trigger campaign. This visual indicator helps you quickly distinguish between Batch campaigns (which typically show a clock icon) and Trigger campaigns in the campaign list view."
            },
            {
                q: "What is the difference between the filter 'Clicked Link' and the trigger 'Clicks Link'?",
                options: [
                    "No difference",
                    "Filter = past clicks; Trigger = fires when they click now",
                    "Trigger is faster",
                    "Filter is more accurate"
                ],
                correct: [1],
                explanation: "'Clicked Link' (past tense, filter) finds people who clicked at any point in the past - used for building audiences. 'Clicks Link' (present tense, trigger) fires in real-time when someone clicks - used to initiate immediate actions. The tense is the key differentiator."
            },
            {
                q: "A flow step 'Change Data Value' has choices: If Score > 80 set Status to Hot; If Score > 50 set Status to Warm; Default set Status to Cold. A person with Score of 65 enters the flow. What is their Status?",
                options: [
                    "Hot",
                    "Warm",
                    "Cold",
                    "No change"
                ],
                correct: [1],
                explanation: "First matching choice wins. 65 is NOT > 80 (Choice 1 fails), but 65 IS > 50 (Choice 2 matches). Status = Warm. Choices are evaluated in order from top to bottom, and the first matching condition is applied."
            },
            {
                q: "A flow step uses 'Request Campaign' to call Campaign X. What must Campaign X's Smart List include for this to work?",
                options: [
                    "Member of Program",
                    "Campaign is Requested",
                    "Any filter",
                    "Data Value Changes"
                ],
                correct: [1],
                explanation: "Campaign X's Smart List must include the trigger 'Campaign is Requested'. This is the specific trigger that activates when another campaign uses the Request Campaign flow step to call Campaign X. Without this trigger, the request won't be processed."
            },
            {
                q: "When would you use the 'Remove from Flow' flow step?",
                options: [
                    "Removing person from database",
                    "Conditions change and remaining flow steps should be skipped",
                    "Campaign needs to restart",
                    "Person unsubscribes"
                ],
                correct: [1],
                explanation: "'Remove from Flow' is used when you want to stop a person's progression through a campaign flow based on specific conditions. For example, if a person becomes a customer mid-flow, you might remove them from a nurture campaign flow to avoid irrelevant messaging."
            },
            {
                q: "Wait Step \"Wait until {{my.webinarDate}} at 2:00 PM\". The webinar was yesterday. What happens?",
                options: [
                    "Person waits until next year's date",
                    "Flow continues immediately",
                    "Error occurs",
                    "Person is removed from campaign"
                ],
                correct: [1],
                explanation: "When the wait-until date has already passed, the flow continues immediately. Marketo doesn't wait for the next occurrence - it simply recognizes the date is in the past and proceeds. This prevents people from being stuck indefinitely in wait steps."
            },
            {
                q: "Wait Step \"Wait 5 days\". Person enters wait on Monday at 9 AM. When do they proceed?",
                options: [
                    "Saturday at 9 AM",
                    "Friday at 9 AM",
                    "Monday at 9 AM (next week)",
                    "Saturday at midnight"
                ],
                correct: [0],
                explanation: "With a 5-day wait starting Monday at 9 AM, the person proceeds on Saturday at 9 AM. Wait Steps count exact days and times, not business days. The wait is calculated precisely from the moment the person enters the wait step."
            },
            {
                q: "A trigger campaign is deactivated while 100 people are in a 'Wait 7 days' step. What happens to those people?",
                options: [
                    "They complete wait and continue",
                    "They stop in wait; resume if campaign reactivated",
                    "They're removed from campaign",
                    "They receive error notification"
                ],
                correct: [1],
                explanation: "When a trigger campaign is deactivated, people in Wait Steps stop processing and remain frozen in their current wait state. They don't complete the flow or get removed. Reactivating the campaign allows them to continue from where they stopped."
            },
            {
                q: "A campaign has qualification rule 'Once every 7 days'. A person qualifies on Tuesday, then Friday, then the following Tuesday. How many times do they run through the campaign?",
                options: [
                    "Once (Tuesday only)",
                    "Twice (Tuesday and next Tuesday)",
                    "Three times (all three)",
                    "Twice (Tuesday and Friday)"
                ],
                correct: [1],
                explanation: "With 'Once every 7 days': Person qualifies Tuesday (runs), Friday is within 7 days (skipped), next Tuesday is exactly 7 days later (runs again). The 7-day cooldown resets each time the campaign successfully runs for that person."
            },
            {
                q: "What does the 'Sync Lead to SFDC' flow step do?",
                options: [
                    "Create new Salesforce record",
                    "Force immediate sync to Salesforce",
                    "Update Salesforce field",
                    "Delete from Salesforce"
                ],
                correct: [1],
                explanation: "'Sync Lead to SFDC' pushes lead data from Marketo to Salesforce CRM. This keeps your CRM updated with the latest lead information. It's important for sales teams who work in Salesforce to have access to current marketing data and activity history."
            },
            {
                q: "Batch campaign scheduled to run \"Every Monday at 9 AM\". How do you stop it from running next Monday?",
                options: [
                    "Delete campaign",
                    "Deactivate campaign",
                    "Abort campaign",
                    "Remove schedule (set to \"Run Once\" or unapprove)"
                ],
                correct: [3],
                explanation: "To stop a recurring batch campaign from running next Monday, you need to deactivate it before the scheduled run time. Simply pausing or editing won't prevent it - you must explicitly deactivate the campaign to stop all future scheduled runs."
            },
            {
                q: "An email was sent to 10,000 people. 9,500 were delivered and 2,850 opened. What is the Open Rate?",
                options: [
                    "28.5% (2,850 ÷ 10,000)",
                    "30% (2,850 ÷ 9,500)",
                    "Cannot calculate without click data",
                    "95% (delivered rate)"
                ],
                correct: [1],
                explanation: "Open Rate = Opens ÷ Delivered × 100%. Opens (2,850) ÷ Delivered (9,500) = 30%. Note: it's calculated against Delivered, not Sent. The 500 bounced emails (10,000 - 9,500) are excluded because they were never actually delivered."
            },
            {
                q: "What does Click-to-Open Rate measure?",
                options: [
                    "Campaign effectiveness",
                    "Email content effectiveness (of those who opened, how many clicked)",
                    "Subject line effectiveness",
                    "List quality"
                ],
                correct: [1],
                explanation: "Click-to-Open Rate measures the percentage of people who clicked a link among those who actually opened the email. It isolates content engagement from deliverability factors. Formula: Clicks ÷ Opens × 100%. A high CTOR indicates compelling email content."
            },
            {
                q: "How is 'New Names %' calculated in the Program Performance Report?",
                options: [
                    "New Names ÷ Total Members × 100%",
                    "Total Members ÷ New Names × 100%",
                    "New Names ÷ Total Cost",
                    "Success ÷ New Names × 100%"
                ],
                correct: [0],
                explanation: "New Names % = New Names ÷ Total Members × 100%. It shows what percentage of program members were new to your database (not previously existing records). This metric helps measure how effectively a program is acquiring new prospects."
            },
            {
                q: "What can Program Performance Report filter by?",
                options: [
                    "Channel",
                    "Email address",
                    "Custom tags",
                    "Smart List"
                ],
                correct: [0, 2],
                multiple: true,
                explanation: "Program Performance Report can filter by Channels and Tags. Channels categorize the type of program (Email, Event, etc.) and Tags provide custom categorization. These filters help you compare performance across similar program types and custom categories."
            },
            {
                q: "What does 'People in Wait Step' show in the Campaign Activity Report?",
                options: [
                    "0 for trigger campaigns",
                    "Number currently waiting in wait steps",
                    "Total who ever waited",
                    "People who completed waits"
                ],
                correct: [1],
                explanation: "'People in Wait Step' in Campaign Activity Report shows the current number of people paused in each Wait Step, along with how long they've been waiting. This real-time view helps you monitor campaign health and identify any bottlenecks in your automation flows."
            },
            {
                q: "In the Web Page Activity Report, you select 'Known People'. What does the report show?",
                options: [
                    "All visitors",
                    "Only identified visitors",
                    "Anonymous visitors",
                    "Both known and anonymous"
                ],
                correct: [1],
                explanation: "When you choose 'Known People' in Web Page Activity Report, it shows only identified leads who visited those pages. You can see which specific leads visited, when, and how many times. This is valuable for sales follow-up and understanding lead behavior."
            },
            {
                q: "How is 'Conversion Rate' calculated in the Landing Page Performance Report?",
                options: [
                    "Visits ÷ Form Fills",
                    "Form Fills ÷ Visits × 100%",
                    "New Names ÷ Visits",
                    "Clicks ÷ Visits"
                ],
                correct: [1],
                explanation: "Landing Page Conversion Rate = Form Submissions ÷ Page Views × 100%. It measures how effectively your landing page converts visitors into form submitters. Higher conversion rates indicate better page design, messaging, and form optimization."
            },
            {
                q: "What does Smart List Subscription send?",
                options: [
                    "Report metrics",
                    "List of people who qualify for Smart List",
                    "Smart List definition",
                    "Smart campaign results"
                ],
                correct: [1],
                explanation: "Smart List Subscription sends an actual list of people (as a file) who match the Smart List criteria at the time of sending. This is different from Report Subscription which sends metric data. Smart List Subscriptions are great for sales teams needing actionable lead lists."
            },
            {
                q: "What are the Report Subscription frequency options?",
                options: [
                    "Daily",
                    "Weekly",
                    "Monthly",
                    "Quarterly",
                    "E) Hourly"
                ],
                correct: [0, 1, 2, 3],
                multiple: true,
                explanation: "Report Subscription frequency options include: Daily, Weekly, Monthly, and Custom (specific dates). Note: the question asks for THREE correct answers from the four listed options. All four listed options (Daily, Weekly, Monthly, Custom) are actually valid frequency options in Marketo."
            },
            {
                q: "A Report Subscription is scheduled for the 31st of each month. What happens in April, which only has 30 days?",
                options: [
                    "Skips April",
                    "Sends on April 30th",
                    "Sends May 1st",
                    "Error"
                ],
                correct: [1],
                explanation: "When scheduled for the 31st and April only has 30 days, Marketo sends the subscription on April 30th (the last day of the month). This is consistent behavior - Marketo always sends on the last available day when the scheduled date doesn't exist in that month."
            }
        ];
