# Netwrix Style Guide and Documentation Standards

This document establishes the writing principles and standards for Netwrix technical documentation. The document has two parts: the first part focuses on the high-level standards and principles Netwrix documentation adheres to, and the second part is a style guide providing specific writing guidelines for contributors to follow.

This is a living document that will be updated as new standards emerge and feedback is incorporated.

# Netwrix documentation standards

Netwrix documentation must always be high quality, and high quality documentation features four key qualities: accuracy, clarity, professionalism, and consistency.

## Accuracy

It's essential that all Netwrix documentation is accurate. One of the primary purposes of documentation is to enable users to find the information they need without asking someone at Netwrix for help. This allows Netwrix support to help users with more complex issues that aren't covered in the documentation.

Inaccuracies in documentation can cause all sorts of frustration for users. More importantly, inaccuracies in documentation cause users to lose trust in the documentation and escalate all their issues to support instead. Even minor inaccuracies, like a missing step or an outdated requirement, can cause users to waste their time, get frustrated, and go directly to support. This causes a waste of time and resources for both Netwrix support and the users themselves.

One of the other primary purposes of technical documentation is to provide users with all the information they need to use Netwrix products successfully and safely. Major inaccuracies in documentation, can cause serious losses or damages for users. For example, if users end up exposing sensitive data as a result of correctly following the inaccurate documentation, such an exposure can cause a serious data breach and lead to not only loss of trust but lawsuits and financial damages. Netwrix is in the business of data security, and Netwrix has a responsibility to its users to provide documentation that not only teaches them how to use the products but also how to use the products without hurting themselves or others.

There are three key ways to ensure that the technical documentation Netwrix provides is accurate:

* **Verify all technical information:** Test all the technical information and procedures as you document them to ensure that they are all accurate, complete, and secure. You can do this yourself or enlist the help of a subject matter expert (SME) to do so. The completeness is an important point as well - if the documentation is missing key information a user needs to understand to use the product, the documentation is not really accurate.
* **Implement a technical review process:** It's best to implement a review process that requires a SME, like a relevant product manager (PM), manual tester, or engineer, to review the technical content in any new document.
* **Fix inaccuracies quickly:** It's best to have a system in place, like GitHub issues and/or JIRA for example, so that if any user, internal or external, encounters an inaccuracy, the user knows where to go to notify Netwrix. It should be clear for users where they need to go to tell Netwrix about the inaccuracies they find, and it should be a quick and easy process for them. Once these issues are raised, it's essential to validate the inaccuracy and fix it as quickly as possible, so that it's not out there much longer.

## Clarity

One of the most important qualities of excellent technical documentation is its clarity. A primary responsibility of technical documentation is to take complex information and make it easy to understand for its readers. If the documentation is riddled with technical jargon and unexplained terms, it's too difficult to read for most users. If the documentation is too difficult to read, it's effectively useless. This means that Netwrix documentation must be easy to understand to be useful.

There are five key ways to ensure that the technical documentation Netwrix provides is easy to understand:

* **Use simple, direct language:** A main goal of technical documentation is to take complex information and simplify it so that it's easier to understand. The more simple and direct the language in the documentation is, the easier it is to understand. Always use active voice ("The system sends a response", not "A response is sent") because it's more direct and easier to understand. Never use idioms ("this feature is a gamechanger") because non-native English speakers aren't always going to be familiar with them.
* **Write concisely:** Use short, simple sentences and eliminate unnecessary words. The fewer words the better, as long as you can successfully convey the meaning of the sentence. It's easy for readers to get lost in long, convoluted sentences.
* **Use examples:** Always provide examples when you can. High quality technical documentation features lots of examples that allow users to understand how the concepts you're explaining can be applied. If you're having trouble coming up with examples, reach out to a relevant SME for some help.
* **Define technical terms:** The technical documentation should have as little jargon and complexity as possible. This means that whenever you use a technical term or acronym, you should always define it on its first use, like subject matter experts (SMEs). Users shouldn't have to go elsewhere to look up the technical terms and acronyms you use, unless they want to learn more in depth.
* **Don't assume what your audience knows:** The users reading your documentation will have a wide range of technical experience. Always provide necessary context and background information that the less experienced users would benefit from. There's no harm in always erring on the side of overproviding context and information, as long as it doesn't bog the reader down. More advanced users will just skim and skip those details. More basic users will benefit from the information.

## Consistency

High quality technical documentation is standardized and consistent. Standardized terminology and conventions make documentation predictable and easier to navigate. This consistency refers to the terminology, language, and structure used throughout the documentation.

There are three key ways you can ensure that Netwrix documentation is consistent:

* **Use consistent terminology:**  When you use one term in one document and a different term in another document to refer to the same concept, you can confuse the reader and make the documentation more difficult to understand. Always use the same term when it's possible.
* **Use consistent structure:** Consistent structure improves the predictability for users, which makes it faster for them to scan and navigate documents. All documentation folders should be organized in the same way, with the same essential sections, such as an overview, a getting started guide, a list of requirements, and a troubleshooting section. All documents themselves should be organized in the same way. For example, a getting started guide should always proceed with the same steps, with an introduction that explains the feature and why it matters, a list of requirements, and then the necessary steps to follow to use the feature.
* **Use consistent formatting:** All similar objects within a document should have the same format, also to make the document more predictable for users. The same headings should be used for the same sections and subsections. All tables should look the same. All notes should have the same format. All code samples should be formatted the same way. All screenshots should be formatted the same way, and they should be the same size. Use the same capitalization for headers and product names throughout the documentation. Use the same number and measurement standards throughout the documentation.

## Professionalism

It's important to remember that the Netwrix product documentation represents the quality of the Netwrix organization itself. This means that although the documentation should be simple, direct, and easy to understand, it must always be professional, respectful, and appropriate. Netwrix documentation should always be written in a neutral, informative tone.

There are three key ways to ensure that Netwrix documentation is always professional:

* **Avoid casual language:** The documentation should be simple, conversational, and easy to understand, but this doesn't mean that it should be casual. Don't use humor, slang, or colloquialisms. Don't swear. Don't use emojis. The content should be dry but helpful and easy to read.
* **Avoid marketing language:** This documentation is intended to be informative. It's not meant to sell users the products. Don't include promotional claims. Don't use superlatives (best, fastest, most powerful). Don't use buzzwords that don't really mean anything. This type of language causes readers to lose trust in the integrity of the documentation.
* **Avoid first person:** This means both first person plural (I, me, my, mine) and first person plural (we, us, our, ours).

# Netwrix style guide

This style guide establishes the specific rules for grammar, punctuation, and style. Consult this guide when you're writing or editing Netwrix documentation to ensure that your content adheres to Netwrix standards.

## Grammar and Language

**Active voice**
Always use active voice rather than passive voice.
- Do: "The Data Collection Account retrieves the audit logs."
- Don't: "The audit logs are retrieved by the Data Collection Account."

**Present tense**
Use present tense instead of future or past tense.
- Do: "The monitoring plan collects data from Active Directory."
- Don't: "The monitoring plan will collect data from Active Directory."

**Second person**
Use second person ("you") or imperative mood for procedures and instructions. Third person ("users") is acceptable in overviews and conceptual descriptions.
- Do: "Click **Add** to create a monitoring plan."
- Do: "Configure your monitoring plan to enable auditing."
- Do: "Users depend on passwords to secure their accounts." (overview context)
- Don't: "The user clicks **Add** to create a monitoring plan."
- Don't: "One must configure the monitoring plan to enable auditing."

**Contractions**
Use common contractions to maintain a conversational tone.
- Do: "Don't include credentials in your API request."
- Don't: "Do not include credentials in your API request."
- Don't: "You should've included credentials in your API request."

**Anthropomorphism**
Avoid attributing human characteristics to software, systems, or products.
- Do: "Netwrix Auditor displays the alert when suspicious activity occurs."
- Don't: "Netwrix Auditor sees suspicious activity and tells you about it."
- Don't: "The system wants to verify your credentials."

**First person plural**
Avoid using "we" to refer to Netwrix.
- Do: "This feature allows you to monitor SharePoint activity."
- Don't: "We've designed this feature to monitor SharePoint activity."

**Placeholder text**
Use descriptive placeholders in angle brackets.
- Do: `` `Get-NWXReport -Name <report-name>` ``
- Don't: `` `Get-NWXReport -Name [report-name]` ``
- Don't: `` `Get-NWXReport -Name REPORT_NAME` ``

**Latin abbreviations**
Use English equivalents instead of Latin abbreviations, like "e.g.", "i.e.", and "etc".
- Do: "For example, configure multiple data collectors."
- Do: "Use the PowerShell cmdlet (such as Get-NWXUser)."
- Do: "Read this guide to learn how to secure your data, passwords, identities, and more."
- Don't: "E.g., configure multiple data collectors."
- Don't: "Use the PowerShell cmdlet (i.e., Get-NWXUser)."
- Don't: "Read this guide to learn how to secure your data, passwords, identities, etc."

**Gendered pronouns**
Avoid gendered pronouns if possible. Just use the noun it refers to again if there's no way around it.
- Do: "The user sends the user's token to the database."
- Don't: "The user sends his/her token to the database."

**Gender-neutral pronouns**
Don't use collective plural pronouns ("they", "them", "their", "theirs") to refer to singular nouns. This leads to potential ambiguity.
- Do: "The user contacts the administrator because the user knows the administrator wants to review access."
- Do: "Administrators want to review their access."
- Don't: "The user contacts the administrator because they know they want to review access."
- Don't: "An administrator wants to review their access."

**Jargon**
Define technical terms and acronyms on first use. Provide brief explanations if they're necessary.
- Do: "Configure the Non-Owner Mailbox Access (NOMBA) monitoring plan."
- Do: "Use a group Managed Service Account (gMSA) for authentication."
- Don't: "Configure the NOMBA monitoring plan."
- Don't: "Use a gMSA for authentication."

**Parallel structure**
Use parallel grammatical structure for items in a series. If the same subject performs multiple verbs, all verbs should be in the same form.
- Do: "The data collector retrieves logs, processes events, and generates reports."
- Don't: "The data collector retrieves logs, processes events, and report generating."

**Double negatives**
Avoid double negatives. Use positive statements.
- Do: "The configuration is valid."
- Don't: "The configuration is not invalid."

**Subject-verb agreement**
Ensure subjects and verbs agree in number.
- Do: "The monitoring plan collects data."
- Do: "The monitoring plans collect data."
- Don't: "The monitoring plan collect data."
- Don't: "The monitoring plans collects data."

**Imperatives in instructions**
Use imperative mood (commands) for instructions.
- Do: "Click **Add** to create a monitoring plan."
- Don't: "You should click **Add** to create a monitoring plan."
- Don't: "The user can click **Add** to create a monitoring plan."

**Nominalizations**
Avoid turning verbs into nouns. Use strong verbs.
- Do: "Configure the monitoring plan to collect data."
- Do: "Install the application before you configure it."
- Don't: "Perform the configuration of the monitoring plan for data collection."
- Don't: "Installation of the application should occur before configuration."

**Conditional statements**
Use "if" clauses clearly. Place the condition before the action when possible.
- Do: "If the authentication fails, check your credentials."
- Do: "The monitoring plan runs only if you enable data collection."
- Don't: "Check your credentials if the authentication fails." (acceptable but less clear)

**Articles**
Use articles (a, an, the) appropriately. Don't omit them for brevity.
- Do: "Configure the monitoring plan."
- Do: "Create a new data collector."
- Do: "Use an API token for authentication."
- Don't: "Configure monitoring plan."
- Don't: "Create new data collector."
- Don't: "Use API token for authentication."

**Redundancy**
Avoid redundant words and phrases.
- Do: "Configure the settings."
- Do: "The system is processing the request."
- Do: "The reason you need to monitor access is to ensure all access is secure."
- Don't: "Configure the settings configuration."
- Don't: "At this point in time, the system is currently in the process of processing the request."
- Don't: "The reason why you need to monitor access is to ensure all access is secure."
- Don't: "The reason you need to monitor access is because you need to ensure all access is secure."

**Dangling modifiers**
Ensure modifiers (descriptive phrases) clearly refer to the correct subject.
- Do: "After configuring the monitoring plan, you can enable data collection."
- Do: "To access the API, you must provide authentication credentials."
- Don't: "After configuring the monitoring plan, data collection can be enabled."
- Don't: "To access the API, authentication credentials must be provided."

**"Who" vs. "whom"**
Use "who" for subjects. Use "whom" for objects.
- Do: "The administrator who configures the monitoring plan."
- Do: "The administrator to whom you assign the role."
- Don't: "The administrator whom configures the monitoring plan."
- Don't: "The administrator who you assign the role to."

**Verb tense consistency**
Maintain consistent verb tense within sections.
- Do: "The monitoring plan collects data, processes events, and generates reports."
- Don't: "The monitoring plan collects data, processed events, and will generate reports."

**One idea per sentence**
Express one main idea per sentence.
- Do: "The monitoring plan collects data. It runs every hour."
- Don't: "The monitoring plan collects data from Active Directory and Exchange and SharePoint and also generates reports and sends alerts."

**Capitalization**
Capitalize proper nouns and product names. Use sentence case for common nouns.
- Do: "Configure Netwrix Auditor to monitor Active Directory."
- Do: "The data collector retrieves audit logs."
- Don't: "Configure netwrix auditor to monitor active directory."
- Don't: "The Data Collector retrieves Audit Logs."

**Idioms**
Don't use idioms ("from scratch", "across the board", "hit the nail on the head", and many more). Say what you mean more directly. Idioms can make documentation more confusing, especially for non-native English speakers.
- Do: "It's difficult to ensure that all access is secure without using an access management tool."
- Don't: "It's easier said than done to ensure that all access is secure without using an access management tool."

**Run-on sentences**
Avoid run-on sentences. Use periods, semicolons, or coordinating conjunctions.
- Do: "The monitoring plan collects data. It processes events and generates reports."
- Don't: "The monitoring plan collects data it processes events and generates reports."

**Sentence fragments**
Ensure every sentence has a subject and a verb and expresses a complete thought.
- Do: "Users depend on passwords to secure their accounts."
- Don't: "Now more than ever in their day-to-day business worldwide." (no subject or verb)

**Misplaced modifiers**
Place modifiers (phrases that serve as adjectives) close to the words they modify.
- Do: "The administrator who configured the monitoring plan reviewed the audit logs."
- Don't: "The administrator reviewed the audit logs who configured the monitoring plan." (sounds like the logs configured the monitoring plan)

**Ambiguous pronoun references**
Ensure pronouns have clear antecedents.
- Do: "The monitoring plan and the data collector are configured. The monitoring plan runs every hour."
- Don't: "The monitoring plan and the data collector are configured. It runs every hour." (unclear whether "it" refers to the monitoring plan or the data collector)

**Collective nouns**
Treat collective nouns (team, company, organization) as singular in American English.
- Do: "The team configures the monitoring plan."
- Do: "The data is processed hourly."
- Don't: "The team configure the monitoring plan."
- Don't: "The data are processed hourly." (American English)

**Ending sentences with prepositions**
Ending sentences with prepositions is acceptable and preferred.
- Do: "Which monitoring plan is the data collector associated with?"
- Do: "This is the configuration you're working on."
- Don't: "With which monitoring plan is the data collector associated?"
- Don't: "This is the configuration on which you're working."

**Subjunctive mood**
Use subjunctive mood for hypothetical or contrary-to-fact situations. Subject-verb agreement is different with the subjunctive mood: the hypothetical verb is plural, even for singular nouns.
- Do: "If the monitoring plan were configured correctly, data collection would succeed."
- Do: "The administrator recommends that the user configure the account."
- Don't: "If the monitoring plan was configured correctly, data collection would succeed."
- Don't: "The administrator recommends that the user configures the account."

**"Whether" vs. "if"**
Use "whether" for alternatives, "if" for conditional statements.
- Do: "Check whether the monitoring plan is configured."
- Do: "If the monitoring plan fails, check the logs."
- Don't: "Check if the monitoring plan is configured." (less formal)

**"While" vs. "although"**
Use "while" for time, "although" or "whereas" for contrast.
- Do: "Although the monitoring plan is active, data collection has not started."
- Do: "The data collector runs while the monitoring plan is active."
- Don't: "While the monitoring plan is active, data collection has not started." (ambiguous)

**"Since" vs. "because"**
Use "since" for time, "because" for causation.
- Do: "The monitoring plan has been active since January."
- Do: "The data collection failed because the credentials are invalid."
- Don't: "The data collection failed since the credentials are invalid." (ambiguous)

**"Each" and "every"**
Use singular verbs with "each" and "every."
- Do: "Each monitoring plan has its own data collector."
- Do: "Every administrator needs to configure their account."
- Don't: "Each monitoring plan have their own data collectors."
- Don't: "Every administrator need to configure their accounts."

**"Affect" vs. "effect"**
Use "affect" as a verb (to influence), "effect" as a noun (result).
- Do: "The configuration affects data collection."
- Do: "The effect of the configuration is improved performance."
- Don't: "The configuration effects data collection."
- Don't: "The affect of the configuration is improved performance."

**"Ensure" vs. "assure" vs. "insure"**
Use "ensure" (make certain), "assure" (convince), "insure" (protect financially).
- Do: "Ensure the Data Collection Account is configured."
- Do: "We assure you that your data is secure."
- Don't: "Assure the Data Collection Account is configured."
- Don't: "We ensure you that your data is secure."

**"Complement" vs. "compliment"**
Use "complement" (complete/enhance), not "compliment" (praise).
- Do: "The analysis module complements the data collector."
- Don't: "The analysis module compliments the data collector."

**"Principal" vs. "principle"**
Use "principal" (main), "principle" (rule/belief).
- Do: "The principal component is the data collector."
- Do: "Follow the principle of least privilege."
- Don't: "The principle component is the data collector."
- Don't: "Follow the principal of least privilege."

**"Then" vs. "than"**
Use "then" for time/sequence, "than" for comparisons.
- Do: "Configure the monitoring plan, then enable data collection."
- Do: "The new version is faster than the previous version."
- Don't: "Configure the monitoring plan, than enable data collection."
- Don't: "The new version is faster then the previous version."

**"Their," "there," "they're"**
Use "their" (possessive), "there" (location/existence), "they're" (they are).
- Do: "The administrators configure their monitoring plans."
- Do: "There are three data collectors."
- Do: "They're configured correctly."
- Don't: "The administrators configure they're monitoring plans."
- Don't: "Their are three data collectors."
- Don't: "There configured correctly."

**"Comprise" vs. "compose"**
Use "comprise" (consist of), not "comprised of." Use "compose" (make up).
- Do: "The monitoring plan comprises three components."
- Do: "Three components compose the monitoring plan."
- Don't: "The monitoring plan is comprised of three components."

**"Imply" vs. "infer"**
Use "imply" for "suggest" and "infer" for "conclude."
- Do: "The error message implies a configuration issue."
- Do: "You can infer that the credentials are invalid."
- Don't: "The error message infers a configuration issue."
- Don't: "You can imply that the credentials are invalid."

**"None" as singular or plural**
Use "none" as singular when meaning "not one," plural when meaning "not any."
- Do: "None of the monitoring plans is configured correctly." (not one)
- Do: "None of the data collectors are active." (not any)
- Don't: "None of the monitoring plans are configured correctly." (when meaning "not one")

**"That" vs. "which"**
Use "that" for restrictive clauses (no comma). Use "which" for nonrestrictive clauses (with comma).
- Do: "The monitoring plan that collects Active Directory data runs hourly."
- Do: "The monitoring plan, which was created yesterday, runs hourly."
- Don't: "The monitoring plan which collects Active Directory data runs hourly."
- Don't: "The monitoring plan, that was created yesterday, runs hourly."

**"Its" vs. "it's"**
Use "its" for possessive. Use "it's" only for "it is" or "it has."
- Do: "The monitoring plan completes its data collection."
- Do: "It's important to configure the Data Collection Account."
- Don't: "The monitoring plan completes it's data collection."
- Don't: "Its important to configure the Data Collection Account."

**"Fewer" vs. "less"**
Use "fewer" for countable items. Use "less" for uncountable quantities.
- Do: "The new version has fewer errors."
- Do: "The new version uses less memory."
- Don't: "The new version has less errors."
- Don't: "The new version uses fewer memory."

**"Between" vs. "among"**
Use "between" for two items. Use "among" for three or more items.
- Do: "Choose between Netwrix Auditor and Netwrix Privilege Secure."
- Do: "Distribute the load among all three data collectors."
- Don't: "Choose among Netwrix Auditor and Netwrix Privilege Secure."
- Don't: "Distribute the load between all three data collectors."

## Punctuation

**Oxford comma**
Use the Oxford comma in lists of three or more items.
- Do: "Netwrix Auditor monitors Active Directory, file servers, and Exchange."
- Don't: "Netwrix Auditor monitors Active Directory, file servers and Exchange."

**Commas after introductory phrases**
Use commas after introductory phrases or clauses.
- Do: "After you configure the monitoring plan, enable data collection."
- Do: "To enable auditing, configure the Data Collection Account."
- Don't: "After you configure the monitoring plan enable data collection."
- Don't: "To enable auditing configure the Data Collection Account."

**Commas in compound sentences**
Use commas before coordinating conjunctions (FANBOYS: for, and, nor, but, or, yet, so) in compound sentences.
- Do: "The data collector retrieves audit logs, and the analysis module processes them."
- Do: "Configure the monitoring plan and enable data collection." (simple sentence — no comma needed)
- Don't: "The data collector retrieves audit logs and the analysis module processes them."

**Colons**
Use colons to introduce lists, examples, or explanations.
- Do: "The monitoring plan requires three components: a data collector, an analysis module, and an action module."
- Don't: "The monitoring plan requires three components, a data collector, an analysis module, and an action module."

**Complete sentences before colons**
Use complete sentences before colons when you introduce a list.
- Do: "Ensure that you do the following: authenticate to the system, send an initial request, and validate the response."
- Don't: "Ensure that you: authenticate to the system, send an initial request, and validate the response."

**Em dashes**
Use em dashes (—) without spaces for emphasis or interruption.
- Do: "The API endpoint—available in version 12.0—supports OAuth 2.0."
- Don't: "The API endpoint - available in version 12.0 - supports OAuth 2.0."

**Hyphens**
Use hyphens for compound modifiers before nouns.
- Do: "Configure the real-time monitoring plan."
- Do: "The monitoring plan runs in real time."
- Don't: "Configure the real time monitoring plan."
- Don't: "The monitoring plan runs in real-time."

**Apostrophes**
Use apostrophes correctly for possessives and contractions.
- Do: "The administrator's credentials"
- Do: "don't, can't, you're"
- Don't: "The administrators credentials"
- Don't: "dont, cant, your (when you mean 'you are')"

**Semicolons**
Use semicolons to connect closely related independent clauses.
- Do: "The data collector retrieves audit logs; the analysis module processes them."
- Don't: "The data collector retrieves audit logs, the analysis module processes them."

**Slashes**
Avoid using slashes. Use "or" or rewrite the sentence. **Exception:** Use slashes in established technical terms.
- Do: "Configure the monitoring plan for SharePoint or SharePoint Online."
- Do: "TCP/IP, client/server, read/write permissions"
- Don't: "Configure the monitoring plan for SharePoint/SharePoint Online."

**Parentheses**
Use parentheses only for supplementary information that can be removed.
- Do: "Configure the monitoring plan (see Configuration Guide for details)."
- Don't: "Configure the monitoring plan (which is located in the Admin section)."

**Quotation marks**
Use double quotation marks for quotes. Avoid using quotation marks for emphasis.
- Do: "The error message displays \"Invalid credentials.\""
- Do: "Click the **Add** button to continue."
- Don't: "The error message displays 'Invalid credentials.'"
- Don't: "Click the \"Add\" button to continue. (for emphasis)"

**Exclamation points**
Avoid exclamation points in technical documentation.
- Do: "The installation completed successfully."
- Do: "Warning: The configuration is invalid."
- Don't: "The installation completed successfully!"
- Don't: "Warning! The configuration is invalid!"

**Question marks**
Avoid using question marks.
- Do: "**Heading:** Configuring monitoring plans"
- Do: "This presents an issue: ensuring all access is secure is difficult."
- Don't: "**Heading:** How do I configure monitoring plans?"
- Don't: "This raises the question: how do you ensure all access is secure?"

**Ampersands**
Don't use ampersands (&). Spell out "and" instead. **Exception:** Use ampersands in established product names or code.
- Do: "Configure Active Directory and Exchange monitoring."
- Do: "Netwrix Auditor for Active Directory & Exchange (product name)"
- Don't: "Configure Active Directory & Exchange monitoring."

**Periods in abbreviations**
Avoid periods in abbreviations and acronyms.
- Do: "FSA, NOMBA, API, SQL, AD"
- Don't: "F.S.A., N.O.M.B.A., A.P.I., S.Q.L., A.D."

**Ellipses**
Avoid ellipses in technical documentation. Use complete sentences.
- Do: "The system is processing the request. Wait for the operation to complete."
- Don't: "The system is processing the request..."
- Don't: "Wait for the operation to complete..."

**Brackets**
Use square brackets for optional parameters or to clarify quoted text.
- Do: `` `Get-NWXReport [-Name <report-name>] [-StartDate <date>]` ``
- Do: "The log states \"The [monitoring] plan failed to start.\""
- Don't: "Use parentheses for optional parameters: `Get-NWXReport (-Name <report-name>)`"

**Underscores**
Use underscores only in code, file paths, or technical identifiers. Avoid in regular text.
- Do: "The `user_id` parameter identifies the user."
- Do: "Edit the `config_file.xml` file."
- Don't: "The user_id parameter identifies the user."

**Apostrophes with plural possessives**
Use apostrophes after the "s" for plural possessives.
- Do: "You can use the three tools' distinct features."
- Don't: "You can use the three tool's distinct features."

## Numbers and Dates

**Numbers**
Spell out zero through nine. Use numerals for 10 and above.
- Do: "The monitoring plan has three data collectors."
- Do: "The database contains 15 monitoring plans."
- Don't: "The monitoring plan has 3 data collectors."
- Don't: "The database contains fifteen monitoring plans."

**Numerals for units of measurement**
Use numerals with units of measurement.
- Do: "5 GB, 3 seconds"
- Don't: "Five GB, three seconds"

**Numbers at the start of a sentence**
Spell out numbers that begin a sentence or rewrite the sentence.
- Do: "Twelve monitoring plans are configured."
- Do: "You can configure up to 12 monitoring plans."
- Don't: "12 monitoring plans are configured."

**Commas with numbers**
Use commas as thousands separators in numbers 1,000 and above.
- Do: "The database contains 1,500 monitoring plans."
- Do: "The system processes 10,000 events per second."
- Don't: "The database contains 1500 monitoring plans."
- Don't: "The system processes 10000 events per second."

**Dates**
Use the format Month Day, Year for dates.
- Do: "January 15, 2025"
- Don't: "15 January 2025"

**Time**
Use the 12-hour clock with AM and PM.
- Do: "The monitoring plan runs at 3:00 PM."
- Don't: "The monitoring plan runs at 15:00."

## Formatting

**Headings**
Use sentence case for headings. Capitalize only the first word and proper nouns.
- Do: "Configure the monitoring plan"
- Don't: "Configure the Monitoring Plan"
- Don't: "Configure The Monitoring Plan"

**Headings with infinitives**
Start task-based headings with infinitives.
- Do: "Install Netwrix Auditor"
- Do: "Configure monitoring plans"
- Don't: "Installing Netwrix Auditor" (in a heading for a section with multiple steps)
- Don't: "Configuring monitoring plans" (for a task section)

**Headings with gerunds**
Start headings with gerunds ("-ing" verbs) when the topics are concepts, overviews, or when they describe continuous actions.
- Do: "Reviewing audit logs" (concept or overview)
- Don't: "Review audit logs" (unless it's a task)

**Bold text**
Use bold for UI elements, buttons, and menu items.
- Do: "Click **Add** to create a new monitoring plan."
- Don't: "Click \"Add\" to create a new monitoring plan."
- Don't: "Click Add to create a new monitoring plan."

**Italic text**
Avoid italics.
- Do: "This process is known as agentless monitoring."
- Don't: "Click the *Add* button."

**Code formatting**
Use monospace formatting for code, commands, file paths, and technical values.
- Do: "Run the `Get-NWXUser` cmdlet to retrieve user information."
- Do: "Edit the `C:\Program Files\Netwrix\config.xml` file."
- Don't: "Run the Get-NWXUser cmdlet to retrieve user information."
- Don't: "Edit the C:\\Program Files\\Netwrix\\config.xml file."

**Code blocks**
Use fenced code blocks with language identifiers.
- Do:
  ```powershell
  Get-NWXReport -Name "Active Directory Changes" -StartDate "2025-01-01"
  ```
- Don't (no language identifier):
  ```
  Get-NWXReport -Name "Active Directory Changes" -StartDate "2025-01-01"
  ```

**Lists**
Use parallel structure for list items.
- Do:
  - Configure the monitoring plan
  - Enable data collection
  - Review the audit logs
- Don't:
  - Configure the monitoring plan
  - Data collection should be enabled
  - Reviewing the audit logs

**Numbered lists**
Use numbered lists for sequential steps. Use standard numbered list format (1., 2., 3.). Don't use "Step 1", "Step 2", or similar prefixes.
- Do:
  1. Open Netwrix Auditor.
  2. Navigate to **Monitoring Plans**.
  3. Click **Add**.
- Don't (bullets for sequential steps):
  - Open Netwrix Auditor.
  - Navigate to **Monitoring Plans**.
  - Click **Add**.

**Links**
Write descriptive link text that describes the destination or action. Avoid generic link text such as "click here", "this link", "learn more", "see more", or "read more."
- Do: "See the [Configuration Guide](config-guide.md) for details."
- Don't: "Click [here](config-guide.md) for details."
- Don't: "See [this link](config-guide.md) for details."
- Don't: "[Learn more](config-guide.md)"

**Placeholder text**
Use descriptive placeholders in angle brackets.
- Do: `` `Get-NWXReport -Name <report-name>` ``
- Don't: `` `Get-NWXReport -Name [report-name]` ``
- Don't: `` `Get-NWXReport -Name REPORT_NAME` ``

## Word Usage

**Product names**
Capitalize Netwrix product names correctly.
- Do: "Netwrix Auditor, Netwrix Privilege Secure, Netwrix Password Secure"
- Don't: "netwrix auditor, Netwrix auditor, NETWRIX AUDITOR"

**Feature names**
Use sentence case for feature names unless they are proper nouns. **Exception:** Use the correct case for established feature names.
- Do: "monitoring plan, data collector, action module"
- Do: "Active Directory, SQL Server, SharePoint Online"
- Don't: "Monitoring Plan, Data Collector, Action Module"

**Acronyms**
Spell out acronyms on first use, then use the acronym.
- Do: "Configure the File Server Auditing (FSA) monitoring plan. FSA collects data from file servers."
- Don't: "Configure the FSA monitoring plan. FSA collects data from file servers."

**"In order to"**
Use "to" instead of "in order to."
- Do: "Configure the Data Collection Account to access audit logs."
- Don't: "Configure the Data Collection Account in order to access audit logs."

**"Please"**
Avoid "please" in instructions. Be direct.
- Do: "Enter your credentials."
- Don't: "Please enter your credentials."

**Words that assume ease**
Avoid words that minimize task difficulty or assume the reader finds it obvious. These include: simply, easily, just, basically, obviously.
- Do: "Configure the monitoring plan."
- Don't: "Simply configure the monitoring plan."
- Don't: "Just configure the monitoring plan."
- Don't: "Easily configure the monitoring plan."
- Don't: "Obviously, you need to configure the monitoring plan first."

**Negative assumptions about users**
Do not state that users cannot do something without the product. Describe the challenge or the benefit of the product positively instead.
- Do: "In a large corporate environment, managing passwords without a professional tool is difficult."
- Do: "Netwrix Password Secure lets you manage passwords at scale."
- Don't: "In a large corporate environment, you wouldn't be able to manage passwords without a professional tool."
- Don't: "You couldn't adequately manage this task without Netwrix Password Secure."

**"May" vs. "might" vs. "can"**
Use "might" for possibility and "can" for capability. Avoid "may."
- Do: "The monitoring plan might fail if credentials are incorrect."
- Do: "You can configure multiple data collectors."
- Don't: "The monitoring plan may fail if credentials are incorrect."
- Don't: "You may configure multiple data collectors." (implies permission)

**"Should" vs. "must"**
Use "must" for requirements and "should" for recommendations.
- Do: "You must configure the Data Collection Account before enabling auditing."
- Do: "You should review the audit logs regularly."
- Don't: "You should configure the Data Collection Account." (if it's required)

**Wordy phrases**
Replace verbose multi-word phrases with concise alternatives: "prior to" → "before", "subsequent to" → "after", "in the event that" → "if", "due to the fact that" → "because", "utilize" / "utilise" → "use".
- Do: "Before you configure the monitoring plan, verify requirements."
- Do: "After the installation completes, restart the service."
- Do: "If the authentication fails, check your credentials."
- Do: "The data collection failed because the credentials are invalid."
- Do: "Use the API to retrieve data."
- Don't: "Prior to configuring the monitoring plan, verify requirements."
- Don't: "Subsequent to the installation, restart the service."
- Don't: "In the event that authentication fails, check your credentials."
- Don't: "The data collection failed due to the fact that the credentials are invalid."
- Don't: "Utilize the API to retrieve data."

**"Provides the ability to" / "is able to"**
Use "lets you" or "can" instead of "provides the ability to", "is able to", or "are able to."
- Do: "This feature lets you monitor SharePoint activity."
- Do: "The data collector can retrieve audit logs from multiple sources."
- Don't: "This feature provides the ability to monitor SharePoint activity."
- Don't: "The data collector is able to retrieve audit logs from multiple sources."

**"Make sure"**
Use "ensure" instead of "make sure."
- Do: "Ensure the Data Collection Account is configured."
- Don't: "Make sure the Data Collection Account is configured."

**"Wish to"**
Use direct imperatives or "want to" instead of "wish to."
- Do: "If you want to allow anonymous access, enable the setting."
- Don't: "If you wish to allow anonymous access, enable the setting."

**Impersonal constructions**
Avoid impersonal "it is [adjective]" constructions such as "it is recommended", "it is necessary", "it is possible", "it is required", "it is advised", and "it is suggested." Rewrite with an active subject or a direct imperative.
- Do: "Netwrix recommends running the server as an IIS website."
- Do: "Restrict the maximum server memory value to prevent performance issues."
- Don't: "It is recommended to run the server as an IIS website."
- Don't: "It is necessary to restrict the maximum server memory value."

**"Note that" / "Please note"**
Use a proper admonition block (Note, Warning, Tip) for supplementary information. Do not use inline "note that" or "please note" in body text.
- Do: "**Note:** The redirect URI is case-sensitive."
- Don't: "Note that the redirect URI is case-sensitive."
- Don't: "Please note that the redirect URI is case-sensitive."

**"Aforementioned"**
Avoid "aforementioned." Refer to the subject directly or use "described above."
- Do: "Configure the settings described above."
- Don't: "Configure the aforementioned settings."

**"Follow the steps to"**
Do not use "follow the steps to" as a procedural introduction. Use a direct heading and numbered list instead.
- Do: Use a heading like "Configure the monitoring plan" followed by a numbered list.
- Don't: "Follow the steps to configure the monitoring plan."

**Boilerplate cross-references**
Write specific cross-reference text. State what the reader will find at the linked destination. Avoid "See the [X] topic for additional information."
- Do: "See [Monitoring Plan Configuration](config.md) to configure data collectors."
- Don't: "See the Monitoring Plan Configuration topic for additional information."

**"allows"**
Use "lets you" instead of "allows you to."
- Do: "This feature lets you monitor SharePoint activity."
- Don't: "This feature allows you to monitor SharePoint activity."

## UI Terminology

**"click" vs. "press"**
Use "click" for buttons, links, and on-screen UI elements. Use "press" for keyboard keys only. Never use "hit."
- Do: "Click **Add** to create a monitoring plan."
- Do: "Press Enter to confirm."
- Don't: "Press the **Add** button."
- Don't: "Hit **Add** to create a monitoring plan."
- Don't: "Click Enter."

**"enter" vs. "type"**
Use "enter" when instructing users to input text into a field.
- Do: "Enter your credentials in the **Username** field."
- Don't: "Type your credentials in the **Username** field."

**"select" vs. "choose"**
Use "select" for choosing items from a list, menu, checkbox, or radio button. Reserve "choose" for non-UI contexts.
- Do: "Select the monitoring plan from the drop-down."
- Do: "Select the **Enable auditing** checkbox."
- Don't: "Choose the monitoring plan from the drop-down."

**"drop-down"**
Use "drop-down" (hyphenated) as a noun or adjective.
- Do: "Select the option from the drop-down."
- Do: "Open the drop-down menu."
- Don't: "Select the option from the dropdown."
- Don't: "Open the drop down menu."

**"checkbox"**
Use "checkbox" (one word) as a noun.
- Do: "Select the **Enable auditing** checkbox."
- Don't: "Select the **Enable auditing** check box."

**"log in" / "login"**
Use "log in" (two words) as a verb. Use "login" (one word) as a noun or adjective.
- Do: "Log in to the console."
- Do: "Enter your login credentials on the login page."
- Don't: "Login to the console."
- Don't: "Enter your log in credentials."

## Organization

**Overview sections**
Place overview content before detailed instructions.
- Do: Place "Overview" before "Configuration."
- Don't: Place "Configuration" before "Overview."

**Prerequisites**
List prerequisites before installation or configuration steps.
- Do: List system requirements before installation instructions.
- Don't: Mention system requirements in the middle of installation instructions.

**Cross-references**
Place related links at the end of sections.
- Do: End the section with "For more information, see [Configuration Guide](config-guide.md)."
- Don't: Start the section with "For more information, see [Configuration Guide](config-guide.md)."

**Filenames**
Use lowercase with hyphens for filenames.
- Do: "`monitoring-plan-config.md`, `getting-started.md`"
- Don't: "`MonitoringPlanConfig.md`, `Getting_Started.md`, `gettingstarted.md`"

**Heading hierarchy**
Use heading levels consistently. Don't skip levels (H1 to H3 without H2).
- Do: H1 Product Name → H2 Overview → H3 Key Features
- Don't: H1 Product Name → H3 Overview (skips H2)

**Section length**
Keep sections focused. Break long sections into subsections.
- Do: H2 Configuration → H3 Data collectors → H4 Analysis modules
- Don't: ## Configuration (5,000 words of mixed content without subsections)

**Introduction sections**
Include a brief introduction at the start of each major section. Do not use an "Introduction" header. Just start the introduction at the beginning of the document.
- Do: H2 Configuration → "Configure monitoring plans to collect audit data from your environment."
- Don't: H2 Configuration → immediately start with step 1 (no context)
- Don't: H2 Configuration → H3 Introduction

**Example placement**
Place examples immediately after explaining concepts.
- Do: "The monitoring plan collects data from Active Directory. **Example:** Configure FSA to monitor file servers."
- Don't: Explain multiple concepts, then group all examples at the end.

**Concepts before procedures**
Explain concepts before providing step-by-step instructions.
- Do: H2 About monitoring plans → concept explanation → H2 Configuring monitoring plans → steps
- Don't: H2 Configuring monitoring plans → steps → H2 About monitoring plans (concept after the steps)

**Task grouping**
Group related tasks together in sections.
- Do: H2 Monitoring plan configuration → H3 Creating monitoring plans → H3 Editing monitoring plans → H3 Deleting monitoring plans
- Don't: H2 Configuration → H3 Creating → H2 Administration → H3 Editing → H2 Maintenance → H3 Deleting

**Common before advanced**
Start with common tasks, then cover advanced topics.
- Do: H2 Basic Configuration → H2 Expert Topics
- Don't: H2 Expert Topics → H2 Basic Configuration

**Tutorial structure**
Structure tutorials as: Objective, Prerequisites, Steps, Verification, Summary, Next steps.
- Do: H2 Objective → H2 Prerequisites → H2 Steps → H2 Verify → H2 Summary
- Don't: Mix objectives, prerequisites, and steps without clear structure.

**Folder structure**
Organize documentation in folders by product, then version, and then topic area.
- Do: `docs/auditor/10.7/admin/…`
- Don't: `docs/auditor/admin/10.7/…`

**Navigation order**
Order navigation items logically for users who are learning from the start (Overview, Getting Started, Guides, Reference, Troubleshooting).
- Do: 1. Overview → 2. Getting Started → 3. Configuration → 4. Reference
- Don't: 1. Reference → 2. Troubleshooting → 3. Overview

## API Documentation

**Endpoints**
Use code formatting for API endpoints.
- Do: "Send a GET request to `/api/v1/users`."
- Don't: "Send a GET request to /api/v1/users."

**HTTP methods**
Use uppercase for HTTP methods.
- Do: "Use the GET method to retrieve data."
- Don't: "Use the get method to retrieve data."

**Request and response examples**
Provide realistic examples with actual values.
- Do:
  ```json
  {
    "username": "jsmith",
    "email": "jsmith@example.com",
    "role": "administrator"
  }
  ```
- Don't:
  ```json
  {
    "username": "string",
    "email": "string",
    "role": "string"
  }
  ```

**Parameters**
Document all parameters with descriptions and data types.
- Do: "`userId` (string, required): The unique identifier for the user."
- Don't: "`userId`: User ID."

**Status codes**
Document expected HTTP status codes.
- Do: "Returns 200 OK on success or 404 Not Found if the user doesn't exist."
- Don't: "Returns a status code."

## Error Messages

**Error message formatting**
Format error messages clearly with the error code and description.
- Do: "Error 1001: Invalid credentials. Verify your username and password."
- Don't: "An error occurred."

**Error message tone**
Use a neutral, helpful tone in error messages.
- Do: "The monitoring plan configuration is invalid. Check the data collector settings."
- Don't: "You entered an invalid configuration."

**Next steps**
Provide actionable next steps in error messages.
- Do: "The API request failed. Verify your authentication token and try again."
- Don't: "The API request failed."

## Accessibility

**Alt text**
Provide descriptive alt text for every image.
- Do: `` `![Dashboard showing active sessions](/img/...)` ``
- Don't: `` `![image](/img/...)` `` or no alt text

**Directional language**
Don't use spatial references that break for non-linear readers.
- Do: "the following table", "the preceding section"
- Don't: "the table above", "the section below", "on the right"

## Inclusive terminology

**Bias-free technical terms**
Avoid terms with historical bias, especially in security contexts.
- Do: "allowlist, denylist, primary, replica"
- Don't: "whitelist, blacklist, master, slave"

**Ableist language**
Don't use ableist terms.
- Do: "confidence check", "quick check"
- Don't: "sanity check"

## Timeless writing

**Avoid time-relative qualifiers**
Omit phrases that become inaccurate when the product changes.
- Do: "Netwrix Auditor monitors Active Directory."
- Don't: "Currently, Netwrix Auditor monitors Active Directory."
- Don't: "As of this writing, Netwrix Auditor monitors Active Directory."

**Avoid pre-announcing**
Don't document features that don't exist yet.
- Do: (omit entirely)
- Don't: "In a future release, this feature will support..."

**Version references**
Use "later" and "earlier" for version comparisons.
- Do: "Requires version 12.0 or later."
- Don't: "Requires version 12.0 or higher/newer."

## Global audience

**Avoid untranslatable phrases**
Write for readers whose primary language isn't English.
- Do: "This is difficult to implement without a dedicated tool."
- Don't: "This is easier said than done without a dedicated tool."

**Avoid culture-specific references**
Avoid examples, humor, and references tied to specific cultures.
- Do: Use neutral, universal examples.
- Don't: Use regional slang, idioms, or cultural metaphors.
