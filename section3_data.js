const questions = [
            {
                q: "Where are Global assets created?",
                options: [
                    "Marketing Activities",
                    "Database",
                    "Design Studio",
                    "Analytics"
                ],
                correct: [2],
                explanation: "Global assets are created in Design Studio. This includes emails, landing pages, forms, snippets, and images that can be used across ALL programs. Local assets are created within specific programs in Marketing Activities."
            },
            {
                q: "You try to add a form to a landing page but get an error. What's the most likely reason?",
                options: [
                    "Form is too long",
                    "Form is in Draft status (not approved)",
                    "Landing page is approved",
                    "Form is global"
                ],
                correct: [1],
                explanation: "Draft assets cannot be used anywhere. Forms, emails, landing pages, and snippets must be Approved before they can be added to other assets or used in campaigns. This is a frequently tested concept!"
            },
            {
                q: "What happens when you edit an approved email?",
                options: [
                    "Changes go live immediately",
                    "A draft is created; original approved version stays live until you approve the draft",
                    "Email becomes unapproved automatically",
                    "Email is locked and cannot be edited"
                ],
                correct: [1],
                explanation: "Editing an approved asset creates a draft version. The original approved version remains live and in use. Changes only go live when you approve the draft. You can also discard the draft to keep the original approved version."
            },
            {
                q: "Form Pre-Fill works in which scenario?",
                options: [
                    "Form on Marketo landing page with known visitor",
                    "Form embedded on external website",
                    "Form in email",
                    "All scenarios"
                ],
                correct: [0],
                explanation: "Form Pre-Fill ONLY works on Marketo landing pages with known visitors (cookie-based). It does NOT work on external websites for security reasons - Marketo can't expose person data to third-party sites. This is heavily tested!"
            },
            {
                q: "Progressive Profiling is used to:",
                options: [
                    "Make forms load faster",
                    "Show different questions to returning visitors to gradually collect more data",
                    "Validate email addresses",
                    "Block spam bots"
                ],
                correct: [1],
                explanation: "Progressive Profiling shows different questions on each visit to gradually collect more information without overwhelming visitors with long forms. Example: Visit 1 asks Name/Email, Visit 2 asks Company/Title, Visit 3 asks Phone/Industry."
            },
            {
                q: "What feature allows you to show/hide form fields based on answers to previous questions?",
                options: [
                    "Progressive Profiling",
                    "Visibility Rules",
                    "Form Pre-Fill",
                    "Mask Input"
                ],
                correct: [1],
                explanation: "Visibility Rules dynamically show or hide fields based on previous answers. Example: If Country = 'United States', show State dropdown; otherwise hide it. This is different from Progressive Profiling which shows different questions on repeat visits."
            },
            {
                q: "Global Form Validation Rules are used to:",
                options: [
                    "Make fields required",
                    "Block specific email domains from all forms globally",
                    "Set up progressive profiling",
                    "Enable CAPTCHA"
                ],
                correct: [1],
                explanation: "Global Form Validation Rules are set at the Admin level to block specific email domains (like gmail.com, yahoo.com) from ALL forms in your instance. This is useful for B2B companies that only want corporate email addresses."
            },
            {
                q: "Key difference between Marketing and Operational emails:",
                options: [
                    "Marketing emails are cheaper to send",
                    "Operational emails bypass Unsubscribed and Marketing Suspended status",
                    "Marketing emails track better",
                    "Operational emails are faster"
                ],
                correct: [1],
                explanation: "Operational emails bypass Unsubscribed, Marketing Suspended, and Communication Limits. They're designed for transactional messages (order confirmations, password resets) that people need regardless of subscription status. Marketing emails respect all these settings."
            },
            {
                q: "Which is an appropriate use of Operational email?",
                options: [
                    "Monthly newsletter",
                    "Product promotion",
                    "Order confirmation and shipping notification",
                    "Webinar invitation"
                ],
                correct: [2],
                explanation: "Order confirmation is transactional - people need this information regardless of marketing preferences. Newsletter, promotions, and webinar invitations are marketing communications and should use Marketing email type."
            },
            {
                q: "Why can't opens be tracked for Text Only emails?",
                options: [
                    "Text emails don't have links",
                    "Opens are tracked via invisible image pixel; Text Only emails have no images",
                    "Text emails are too small",
                    "Disabled by law"
                ],
                correct: [1],
                explanation: "Email opens are tracked by an invisible 1x1 pixel image. When the email is opened, the image loads from Marketo's server (= open). Text Only emails have no images, so opens cannot be tracked. Clicks can still be tracked in Text Only emails."
            },
            {
                q: "What is a Preheader in an email?",
                options: [
                    "Email header with logo",
                    "Summary text that appears after subject line in inbox preview",
                    "First paragraph of email",
                    "From name and address"
                ],
                correct: [1],
                explanation: "Preheader (or preview text) is the summary text that appears after the subject line in the inbox preview. Optimal length is 40-100 characters. It's a chance to provide additional context beyond the subject line to increase open rates."
            },
            {
                q: "Primary benefit of Snippets:",
                options: [
                    "Faster email sends",
                    "Update once and changes appear everywhere the snippet is used",
                    "Better deliverability",
                    "Higher open rates"
                ],
                correct: [1],
                explanation: "Snippets are reusable content blocks. The key benefit: update the snippet once, approve it, and the changes automatically appear in ALL emails and landing pages that use that snippet. Perfect for footers, disclaimers, event details, etc."
            },
            {
                q: "A marketer edits a global snippet used in 50 emails. After approving the snippet:",
                options: [
                    "Nothing happens",
                    "All 50 emails show the updated content automatically",
                    "Only future email sends show the update",
                    "Must re-approve each of the 50 emails"
                ],
                correct: [1],
                explanation: "Once you approve the updated snippet, it automatically updates in ALL places where it's used - no need to re-approve the emails. This is the power of snippets! However, if the snippet has a draft, only approving the draft will make changes go live."
            },
            {
                q: "What must you create BEFORE using Dynamic Content?",
                options: [
                    "My Token",
                    "Smart List",
                    "Segmentation with approved segments",
                    "Static List"
                ],
                correct: [2],
                explanation: "Dynamic Content requires a Segmentation. You must: (1) Create Segmentation in Database, (2) Add segments with Smart List criteria, (3) Approve the Segmentation. Then you can use it for dynamic content in emails, landing pages, and snippets."
            },
            {
                q: "In a Segmentation for Dynamic Content, can a person be in multiple segments?",
                options: [
                    "Yes, they'll be in all segments they qualify for",
                    "No, they can only be in ONE segment (mutually exclusive)",
                    "Yes, maximum 3 segments",
                    "Depends on Segmentation settings"
                ],
                correct: [1],
                explanation: "Segmentations are mutually exclusive - a person can be in only ONE segment. Evaluation is top-to-bottom, first matching segment wins. This is why order matters! You should arrange segments from most specific to least specific, with Default last."
            },
            {
                q: "Which elements can have Dynamic Content?",
                options: [
                    "Text modules",
                    "Images",
                    "Snippets",
                    "Forms"
                ],
                correct: [0, 1, 2],
                multiple: true,
                explanation: "Text modules, images, and snippets can all be made dynamic using Segmentations. Forms CANNOT use Segmentation-based dynamic content - use Visibility Rules instead to show/hide form fields based on answers."
            },
            {
                q: "A person doesn't match any specific segment in a Segmentation. What content do they see?",
                options: [
                    "No content (blank)",
                    "Random segment content",
                    "Default segment content",
                    "First segment content"
                ],
                correct: [2],
                explanation: "Every Segmentation must have a Default segment that catches everyone who doesn't match the specific segment criteria. This ensures everyone sees some version of the content. The Default segment is required and cannot be deleted."
            },
            {
                q: "Can Marketo forms be made dynamic using Segmentations?",
                options: [
                    "Yes, just like emails and landing pages",
                    "No, forms cannot use Segmentation-based dynamic content - use Visibility Rules instead",
                    "Yes, but only global forms",
                    "Yes, but only local forms"
                ],
                correct: [1],
                explanation: "Forms CANNOT use Segmentation-based dynamic content. To show/hide form fields dynamically, use Visibility Rules (based on answers to previous questions on the same form). This is a common exam question!"
            },
            {
                q: "Critical QA step before sending an email with dynamic content:",
                options: [
                    "Send test to yourself",
                    "Preview by Segment for ALL segments to verify each variation",
                    "Check spelling",
                    "Verify unsubscribe link"
                ],
                correct: [1],
                explanation: "You MUST preview by Segment for EVERY segment to ensure all content variations are correct. It's easy to forget to set up content for a segment, or to have errors in one segment's version. This prevents embarrassing mistakes!"
            },
            {
                q: "What types of content can be added to an Engagement Program stream?",
                options: [
                    "Emails",
                    "Default Programs",
                    "Email Programs",
                    "Landing Pages"
                ],
                correct: [0, 1],
                multiple: true,
                explanation: "Engagement Program streams can contain: (1) Emails and (2) Default Programs (nested programs for complex logic). Email Programs, Event Programs, other Engagement Programs, Landing Pages, and Forms cannot be added to streams."
            },
            {
                q: "A marketer edits a global form used in 10 landing pages and adds a required field. Impact:",
                options: [
                    "All 10 landing pages now require that field immediately",
                    "Must update each landing page manually",
                    "Only new form submissions require the field",
                    "Form breaks on all pages"
                ],
                correct: [0],
                explanation: "Global form changes apply immediately to all landing pages using that form (once the form is approved). This is both powerful (easy to update) and dangerous (can break things if not tested). Always test global asset changes carefully!"
            },
            {
                q: "Marketo's CAPTCHA is:",
                options: [
                    "A visual puzzle users must solve",
                    "Score-based behavioral analysis to detect bots",
                    "Google reCAPTCHA v3",
                    "Required for all forms by default"
                ],
                correct: [1],
                explanation: "Marketo CAPTCHA uses score-based behavioral analysis (analyzing how the user interacts with the form) rather than visual puzzles. It runs in the background without user interaction. It's optional and configured at the form level."
            },
            {
                q: "Operational Email setting 'bypass unsubscribed' means:",
                options: [
                    "Won't send to unsubscribed people",
                    "Will send even if person is unsubscribed",
                    "Asks person to resubscribe first",
                    "Cannot override unsubscribed status"
                ],
                correct: [1],
                explanation: "Operational emails are designed to bypass subscription status for critical transactional messages. When 'Operational' is enabled, the email will send to people even if they're Unsubscribed or Marketing Suspended. Use responsibly - only for transactional content!"
            },
            {
                q: "Email preheader best practice length:",
                options: [
                    "10-20 characters",
                    "40-100 characters",
                    "150-200 characters",
                    "Unlimited - use full paragraph"
                ],
                correct: [1],
                explanation: "40-100 characters is optimal for preheader text. This length displays well in most email clients' inbox previews without getting cut off. Too short wastes opportunity; too long gets truncated."
            },
            {
                q: "Text Only emails are best for:",
                options: [
                    "All audiences always",
                    "Highly technical/developer audiences who prefer plain text",
                    "Mobile users exclusively",
                    "Clients that block HTML"
                ],
                correct: [1],
                explanation: "Text Only emails are typically used for technical audiences (developers, IT pros) who prefer plain text. Most audiences prefer HTML emails with formatting and images. Text Only can't track opens and has limited formatting."
            },
            {
                q: "CC Address field in email can use:",
                options: [
                    "Only static email addresses",
                    "Tokens like {{lead.Lead Owner Email Address}}",
                    "Only internal company addresses",
                    "Maximum 3 addresses only"
                ],
                correct: [1],
                explanation: "The CC field supports tokens, so you can dynamically CC the lead owner, account manager, or other person-specific recipients using tokens like {{lead.Lead Owner Email Address}} or {{lead.Account Owner Email Address}}."
            },
            {
                q: "A snippet is approved and used in 20 emails. You edit the snippet (creating a draft). Do the 20 emails change?",
                options: [
                    "Yes, immediately",
                    "No, not until you approve the snippet draft",
                    "Only for new email sends",
                    "Must re-approve each email"
                ],
                correct: [1],
                explanation: "Creating a draft of the snippet doesn't change the live approved version that's being used in the 20 emails. Only when you approve the draft do the changes go live in all places using the snippet. This allows safe editing without breaking live content."
            },
            {
                q: "Dynamic Content requires Segmentation because:",
                options: [
                    "It's faster than Smart Lists",
                    "Segmentations provide mutually exclusive groups needed for content variations",
                    "It's a Marketo requirement with no reason",
                    "Smart Lists don't work for this purpose"
                ],
                correct: [1],
                explanation: "Segmentations are designed specifically for dynamic content. They're mutually exclusive (person in one segment only), evaluate consistently (first match wins), and are optimized for this use case. Smart Lists can't provide this structured approach."
            },
            {
                q: "A person is in the AMER segment but the email shows Default segment content. Likely cause:",
                options: [
                    "Segmentation not approved",
                    "Email not approved",
                    "Dynamic content not configured properly for AMER segment",
                    "Person changed segments between send"
                ],
                correct: [2],
                explanation: "If someone in AMER segment sees Default content, it means the dynamic content module doesn't have AMER segment content set up. You must configure content for EACH segment you want to show custom content to. If a segment isn't configured, those people see the Default."
            },
            {
                q: "Landing page URL becomes active when:",
                options: [
                    "Page is created",
                    "Page is approved",
                    "Form is added to page",
                    "Page is published"
                ],
                correct: [1],
                explanation: "Landing page URL goes live when the page is Approved. Before approval, the URL returns a 404 error. After approval, the URL is live and accessible to anyone with the link. Unapproving takes the page offline again."
            },
            {
                q: "What is the key difference between Free-Form and Guided Landing Pages?",
                options: [
                    "Free-Form is faster to create",
                    "Free-Form has drag-and-drop flexibility; Guided uses template-controlled structure",
                    "Guided landing pages can't use forms",
                    "Free-Form landing pages don't support dynamic content"
                ],
                correct: [1],
                explanation: "Free-Form landing pages give you complete drag-and-drop flexibility to place elements anywhere. Guided landing pages use templates where developers define regions and structure, and marketers fill in content within those defined areas. Both support forms, dynamic content, and tokens."
            },
            {
                q: "Who typically creates the template for Guided Landing Pages?",
                options: [
                    "Marketing team using drag-and-drop",
                    "Developer creates template with defined regions; marketer fills content",
                    "Automatically generated by Marketo",
                    "Sales team"
                ],
                correct: [1],
                explanation: "Guided landing pages require a developer to create the template with defined regions and structure. Then marketers can fill in the content within those predefined areas. This ensures brand consistency and design standards while still allowing marketers to create pages independently."
            }
        ];
