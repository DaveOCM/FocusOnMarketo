const questions = [
            {
                q: "What is the key difference between a Static List and a Smart List?",
                options: [
                    "Static Lists are faster to process",
                    "Static Lists are fixed snapshots; Smart Lists are dynamic queries that update automatically",
                    "Smart Lists can't be used in Smart Campaigns",
                    "Static Lists are more accurate"
                ],
                correct: [1],
                explanation: "Static Lists are fixed collections of people that don't change unless you manually add/remove people. Smart Lists are dynamic queries that automatically update as people meet or stop meeting the defined criteria. Think of Static Lists as a saved spreadsheet and Smart Lists as a saved search query."
            },
            {
                q: "How do you remove a person from a Static List WITHOUT deleting them from the database?",
                options: [
                    "Delete the person",
                    "Use 'Remove from List' flow step",
                    "Mark them as Unsubscribed",
                    "Set Marketing Suspended to True"
                ],
                correct: [1],
                explanation: "Use the 'Remove from List' flow step in a Smart Campaign or Person Actions menu. NEVER use 'Delete' - that removes the person from your ENTIRE database, not just the list. This is a common mistake that's frequently tested on the exam."
            },
            {
                q: "You imported a list and accidentally mapped Job Title to the Company field. How do you clear the incorrect values?",
                options: [
                    "Delete affected people and re-import",
                    "Change Data Value to 'BLANK'",
                    "Change Data Value to 'NULL'",
                    "Cannot be fixed - data is permanent"
                ],
                correct: [2],
                explanation: "Use a Smart Campaign with 'Change Data Value' flow step and set the field to NULL (all capital letters). This clears the field value. 'BLANK' would literally put the text 'BLANK' in the field. NULL is the correct way to clear field values in Marketo."
            },
            {
                q: "Which Smart List operator would find people with job title 'Marketing Manager' or 'Sales Manager'?",
                options: [
                    "Job Title is 'Manager'",
                    "Job Title starts with 'Manager'",
                    "Job Title contains 'Manager'",
                    "Job Title not is 'Director'"
                ],
                correct: [2],
                explanation: "'Contains' finds any occurrence of the text anywhere in the field. Since both 'Marketing Manager' and 'Sales Manager' contain the word 'Manager', this operator will find both. 'Is' would require exact match, 'starts with' looks at the beginning only."
            },
            {
                q: "In a Segmentation, a person qualifies for multiple segments. Which segment will they be assigned to?",
                options: [
                    "All segments they qualify for",
                    "The first matching segment in order (top-to-bottom)",
                    "The last matching segment",
                    "Random selection among qualifying segments"
                ],
                correct: [1],
                explanation: "Segmentations evaluate top-to-bottom and assign the first matching segment. This is why order matters! You should arrange segments from most specific to least specific. Once a person matches a segment, evaluation stops - they cannot be in multiple segments (mutually exclusive)."
            },
            {
                q: "What is the maximum number of segments allowed in a single Segmentation?",
                options: [
                    "10",
                    "50",
                    "100",
                    "200"
                ],
                correct: [2],
                explanation: "Marketo allows a maximum of 100 segments per segmentation. However, most implementations use far fewer (typically 3-10 segments). Having too many segments can make management difficult and slow down processing."
            },
            {
                q: "Which System Smart List shows everyone in your database?",
                options: [
                    "All Leads",
                    "All Contacts",
                    "All People",
                    "Everyone"
                ],
                correct: [2],
                explanation: "'All People' is the System Smart List containing your entire database. Marketo uses 'People' rather than 'Leads' or 'Contacts' because a person record can represent either a lead or a contact (depending on CRM sync status)."
            },
            {
                q: "A person has 'Blocklisted = True'. What emails can they receive?",
                options: [
                    "Marketing emails only",
                    "Operational emails only",
                    "All emails",
                    "No emails at all"
                ],
                correct: [3],
                explanation: "Blocklisted is the MOST restrictive status. These people receive NO emails whatsoever - not marketing, not operational, nothing. This is different from Unsubscribed (can receive operational) or Marketing Suspended (can receive operational)."
            },
            {
                q: "A person is 'Marketing Suspended = True'. What can they receive?",
                options: [
                    "No emails",
                    "Operational emails only",
                    "Marketing emails only",
                    "All emails"
                ],
                correct: [1],
                explanation: "Marketing Suspended people can receive Operational emails only. This field is typically set by marketers (not the recipient) to temporarily pause marketing communications. It's different from Unsubscribed (recipient's choice) and Blocklisted (receives nothing)."
            },
            {
                q: "Which list import type would you use if you want to ONLY update existing records without creating new ones?",
                options: [
                    "New People and Updates",
                    "New People Only",
                    "Update People Only",
                    "List Member Only"
                ],
                correct: [2],
                explanation: "'Update People Only' updates existing records matched by email address and skips any new email addresses in the file. This is useful for data enrichment from vendors where you only want to update existing records with new information, not add new people."
            },
            {
                q: "Which import type is fastest when you just need to add people to a list?",
                options: [
                    "New People and Updates",
                    "New People Only",
                    "Update People Only",
                    "List Member Only"
                ],
                correct: [3],
                explanation: "'List Member Only' is the fastest import type because it only adds people to the list without updating any field values. Use this when you just need list membership (like event attendees from a registration platform) and don't need to update any data fields."
            },
            {
                q: "What field does Marketo use to match existing records during import?",
                options: [
                    "First Name",
                    "Last Name",
                    "Email Address",
                    "Company"
                ],
                correct: [2],
                explanation: "Email Address is the unique identifier Marketo uses to match existing records during import. When you import a file, Marketo looks up each email address - if it exists, that's an existing record (can be updated). If it doesn't exist, it's a new record (can be created)."
            },
            {
                q: "A Segmentation has these segments in order: 1) Enterprise (Company Size > 1000), 2) Mid-Market (Company Size > 100), 3) Default. A person from a company with 500 employees will be in which segment?",
                options: [
                    "Enterprise",
                    "Mid-Market",
                    "Default",
                    "None"
                ],
                correct: [1],
                explanation: "The person has 500 employees. First, check Enterprise (>1000): NO. Second, check Mid-Market (>100): YES - 500 is greater than 100. First match wins, so they're assigned to Mid-Market. Evaluation stops there - they won't be checked against Default."
            },
            {
                q: "Segmentations are primarily used for:",
                options: [
                    "Dynamic Content in emails and landing pages",
                    "Filtering Smart Campaign Smart Lists",
                    "Program Performance Report filtering",
                    "Creating Static Lists"
                ],
                correct: [0],
                explanation: "Segmentations are primarily used for Dynamic Content in emails, landing pages, and snippets. Each segment can see different personalized content based on their segment membership. Segmentations CANNOT be used in Smart Campaign Smart Lists (use filters instead) or Program Performance Report (use Channels/Tags for filtering)."
            },
            {
                q: "A Smart List has filters: Lead Score > 50 AND Job Title contains 'Director' AND Country is 'United States'. How are these evaluated?",
                options: [
                    "Must meet Filter 1 OR Filter 2 OR Filter 3",
                    "Must meet ALL three filters (AND logic)",
                    "Only Filter 1 is used",
                    "Random evaluation"
                ],
                correct: [1],
                explanation: "By default, multiple filters use AND logic - a person must meet ALL criteria to qualify. To use OR logic, you need to use Advanced Filters. For example, Advanced Filter '(1 OR 2) AND 3' would mean (Score > 50 OR Title contains Director) AND Country is US."
            },
            {
                q: "What's the difference between 'Marketing Suspended' and 'Unsubscribed'?",
                options: [
                    "No difference - they're the same",
                    "Marketing Suspended is set by marketers; Unsubscribed is set by recipients",
                    "Marketing Suspended is permanent",
                    "Unsubscribed only affects trigger campaigns"
                ],
                correct: [1],
                explanation: "Marketing Suspended is controlled by marketers and used for temporary pauses (like during mergers, vacations, etc.). Unsubscribed is controlled by the recipient when they opt out - only they can change it (legal requirement). Both prevent marketing emails but allow operational emails."
            },
            {
                q: "A Segmentation is 'Approved'. Can you edit it?",
                options: [
                    "Yes, anytime - changes apply immediately",
                    "No, must unapprove first, then edit, then re-approve",
                    "Yes, but changes don't take effect until re-approved",
                    "Only admins can edit approved segmentations"
                ],
                correct: [1],
                explanation: "To edit an approved Segmentation, you must: (1) Unapprove it, (2) Make your changes, (3) Re-approve it. While unapproved, any dynamic content using that segmentation will show the Default segment to everyone. This process ensures changes are intentional and controlled."
            },
            {
                q: "Segmentation 'Industry' has: Healthcare, Technology, Finance, Default. Order matters because:",
                options: [
                    "It doesn't matter - assignment is random",
                    "First matching segment wins (top-to-bottom evaluation)",
                    "Last matching segment wins",
                    "All matching segments are assigned"
                ],
                correct: [1],
                explanation: "Segmentations evaluate top-to-bottom and assign the FIRST matching segment. Once a match is found, evaluation stops. This is why you should order segments from most specific to least specific, with Default always last as the catch-all."
            },
            {
                q: "'Email Suspended' status means:",
                options: [
                    "Person unsubscribed",
                    "Email temporarily suspended, usually due to soft or hard bounces",
                    "Marketing emails paused by marketer",
                    "Person requested suspension"
                ],
                correct: [1],
                explanation: "Email Suspended is typically set automatically by Marketo after email bounces (soft or hard). It's a temporary status that may be cleared if the email becomes valid again. This is different from Email Invalid (permanent invalid address) or Marketing Suspended (marketer control)."
            },
            {
                q: "Difference between 'Unsubscribed' and 'Blocklisted':",
                options: [
                    "No difference - they're the same",
                    "Unsubscribed can receive operational emails; Blocklisted receives nothing",
                    "Blocklisted is temporary",
                    "Unsubscribed is more restrictive"
                ],
                correct: [1],
                explanation: "Unsubscribed people can still receive Operational emails (password resets, order confirmations, etc.). Blocklisted people receive NO emails at all - it's the most restrictive status. Blocklisted is typically used for complainers, legal issues, or people who should never receive any communication."
            },
            {
                q: "During import, Email Address field is:",
                options: [
                    "Optional",
                    "Required for matching existing records",
                    "Only needed for new records",
                    "Can be replaced with Company Name"
                ],
                correct: [1],
                explanation: "Email Address is required because it's the unique identifier Marketo uses to match existing records. Without it, Marketo can't determine if a record already exists (to update) or is new (to create). You cannot use another field like Company Name as the matching key."
            },
            {
                q: "You want to find people who are either in California OR have Lead Score > 50. How do you build this?",
                options: [
                    "Two separate Smart Lists",
                    "Use 'Advanced Filters' with OR logic: (1 OR 2)",
                    "Combine in one filter with OR",
                    "Not possible in one Smart List"
                ],
                correct: [1],
                explanation: "Use Advanced Filters at the bottom of the Smart List. Add both filters (1: State is CA, 2: Lead Score > 50), then in Advanced Filters type: (1 OR 2). This creates OR logic. Without Advanced Filters, all filters use AND logic by default."
            },
            {
                q: "System Smart List 'Possible Duplicates' helps you:",
                options: [
                    "Find spam records",
                    "Identify potential duplicate person records for manual review and merging",
                    "Find people with duplicate emails",
                    "Auto-merge duplicate records"
                ],
                correct: [1],
                explanation: "'Possible Duplicates' uses Marketo's algorithm to identify records that might be duplicates (similar names, companies, etc.). It DOES NOT auto-merge - you must manually review and merge them. This prevents accidental merging of records that look similar but are actually different people."
            }
        ];
