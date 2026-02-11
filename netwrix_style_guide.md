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

| Rule | Description | Do  | Don't |
|------|-------------|-----|-------|
| **Active voice** | Always use active voice rather than passive voice. | The Data Collection Account retrieves the audit logs. | The audit logs are retrieved by the Data Collection Account. |
| **Present tense** | Use present tense instead of future or past tense. | The monitoring plan collects data from Active Directory. | The monitoring plan will collect data from Active Directory. |
| **Second person** | Address the reader directly using "you."This includes the imperative mood which implies "you". | Configure your monitoring plan to enable auditing.ORConfigure the monitoring plan to enable auditing. | Users should configure their monitoring plan to enable auditing.<br><br>One must configure the monitoring plan to enable auditing. |
| **Contractions** | Use common contractions to maintain a conversational tone. | Don't include credentials in your API request. | Do not include credentials in your API request.OR You should've included credentials in your API request. |
| **Anthropomorphism** | Avoid attributing human characteristics to software, systems, or products. | Netwrix Auditor displays the alert when suspicious activity occurs. | Netwrix Auditor sees suspicious activity and tells you about it.<br><br>The system wants to verify your credentials. |
| **First person plural** | Avoid using "we" to refer to Netwrix. | This feature allows you to monitor SharePoint activity. | We've designed this feature to monitor SharePoint activity. |
| **Placeholder text** | Use descriptive placeholders in angle brackets. | `Get-NWXReport -Name <report-name>` | `Get-NWXReport -Name [report-name]`<br><br>`Get-NWXReport -Name REPORT_NAME` |
| **Latin abbreviations** | Use English equivalents instead of Latin abbreviations, like "e.g.", "i.e.", and "etc". | For example, configure multiple data collectors.<br><br>Use the PowerShell cmdlet (such as Get-NWXUser).Read this guide to learn how to secure your data, passwords, identities, and more. | E.g., configure multiple data collectors.<br><br>Use the PowerShell cmdlet (i.e., Get-NWXUser).Read this guide to learn how to secure your data, passwords, identities, etc. |
| **Gendered pronouns** | Avoid gendered pronouns if possible. Just use the noun it refers to again if there's no way around it. | The user sends the user's token to the database. | The user sends his/her token to the database. |
| **Gender-neutral pronouns** | Don't use collective plural pronouns ("they", "them", "their", "theirs") to refer to singular nouns. This leads to potential ambiguity.  | The user contacts the administrator because the user knows the administrator wants to review access.Administrators want to to review their access. | The user contacts the administrator because they know they want to review access.An administrator wants to review their access. |
| **Jargon** | Define technical terms and acronyms on first use. Provide brief explanations if they're necessary. | Configure the Non-Owner Mailbox Access (NOMBA) monitoring plan.<br><br>Use a group Managed Service Account (gMSA) for authentication. | Configure NOMBA.<br><br>Use a gMSA for authentication. |
| **Sentence length** | Keep sentences concise. Aim for 25 words or fewer per sentence. | The monitoring plan collects data from Active Directory. It runs every hour. | The monitoring plan collects data from Active Directory and runs every hour and sends alerts to administrators and logs all events to the SQL Server database. |
| **Parallel structure** | Use parallel grammatical structure for items in a series. If the same subject performs multiple verbs, all verbs should be in the same form.  | The data collector retrieves logs, processes events, and generates reports. | The data collector retrieves logs, processes events, and report generating. |
| **Double negatives** | Avoid double negatives. Use positive statements. | The configuration is valid. | The configuration is not invalid. |
| **Subject-verb agreement** | Ensure subjects and verbs agree in number.  | The monitoring plan collects data.<br><br>The monitoring plans collect data. | The monitoring plan collect data.<br><br>The monitoring plans collects data. |
| **Imperatives in instructions** | Use imperative mood (commands) for instructions. | Click **Add** to create a monitoring plan. | You should click **Add** to create a monitoring plan.<br><br>The user can click **Add** to create a monitoring plan. |
| **Nominalizations** | Avoid turning verbs into nouns. Use strong verbs. | Configure the monitoring plan to collect data.<br><br>Install the application before you configure it. | Perform the configuration of the monitoring plan for data collection.<br><br>Installation of the application should occur before configuration. |
| **Conditional statements** | Use "if" clauses clearly. Place the condition before the action when possible. | If the authentication fails, check your credentials.<br><br>The monitoring plan runs only if you enable data collection. | Check your credentials if the authentication fails. (acceptable but less clear) |
| **Articles** | Use articles (a, an, the) appropriately. Don't omit them for brevity. | Configure the monitoring plan.<br><br>Create a new data collector.<br><br>Use an API token for authentication. | Configure monitoring plan.<br><br>Create new data collector.<br><br>Use API token for authentication. |
| **Redundancy** | Avoid redundant words and phrases. | Configure the settings.<br><br>Currently, the system is processing the request.The reason you need to monitor access is to ensure all access is secure. | Configure the settings configuration.<br><br>At this point in time, the system is currently in the process of processing the request.The **reason why** you need to monitor access is to ensure all access is secure.OR The **reason** you need to monitor access is **because** you need to ensure all access is secure. |
| **Dangling modifiers** | Ensure modifiers (descriptive phrases) clearly refer to the correct subject. It can lead to confusion. ("After swimming, Fred's fingers were wrinkled." It sounds like Fred's fingers were swimming.) | After configuring the monitoring plan, you can enable data collection.<br><br>To access the API, you must provide authentication credentials. | After configuring the monitoring plan, data collection can be enabled.<br><br>To access the API, authentication credentials must be provided. |
| **"Who" vs. "whom"** | Use "who" for subjects. Use "whom" for objects. | The administrator who configures the monitoring plan.<br><br>The administrator to whom you assign the role. | The administrator whom configures the monitoring plan.<br><br>The administrator who you assign the role to. |
| **Verb tense consistency** | Maintain consistent verb tense within sections. | The monitoring plan collects data, processes events, and generates reports. | The monitoring plan collects data, processed events, and will generate reports. |
| **One idea per sentence** | Express one main idea per sentence. | The monitoring plan collects data. It runs every hour. | The monitoring plan collects data from Active Directory and Exchange and SharePoint and also generates reports and sends alerts. |
| **Capitalization** | Capitalize proper nouns and product names. Use sentence case for common nouns. | Configure Netwrix Auditor to monitor Active Directory.<br><br>The data collector retrieves audit logs. | Configure netwrix auditor to monitor active directory.<br><br>The Data Collector retrieves Audit Logs. |
| **Idioms** | Don't use idioms ("from scratch", "across the board", "hit the nail on the head", and many more). Say what you mean more directly. Idioms can make documentation more confusing, especially for non-native English speakers. | It's difficult to ensure that all access is secure without using an access management tool. | It's **easier said than done** to ensure that all access is secure without using an access management tool. |
| **Run-on sentences** | Avoid run-on sentences. Use periods, semicolons, or coordinating conjunctions. | The monitoring plan collects data. It processes events and generates reports. | The monitoring plan collects data it processes events and generates reports. |
| **Misplaced modifiers** | Place modifiers (phrases that serve as adjectives) close to the words they modify. | The administrator **who configured the monitoring plan** reviewed the audit logs. | The administrator reviewed the audit logs **who configured the monitoring plan**. (It sounds like the logs configured the monitoring plan.) |
| **Ambiguous pronoun references** | Ensure pronouns have clear antecedents. | The monitoring plan and the data collector are configured. The monitoring plan runs every hour. | The monitoring plan and the data collector are configured. It runs every hour. (It's unclear whether "it" refers to the monitoring plan or the data collector.) |
| **Collective nouns** | Treat collective nouns (team, company, organization) as singular in American English. | The team configures the monitoring plan.<br><br>The data is processed hourly. | The team configure the monitoring plan.<br><br>The data are processed hourly. (American English) |
| **Ending sentences with prepositions** | Ending sentences with prepositions is acceptable and preferred. | Which monitoring plan is the data collector associated with?<br><br>This is the configuration you're working on. | With which monitoring plan is the data collector associated? This is the configuration on which you're working. |
| **Subjunctive mood** | Use subjunctive mood for hypothetical (clauses with "if" or "would", for example) or contrary-to-fact situations. Subject-verb agreement is different with the subjunctive mood: the hypothetical verb is plural, even for singular nouns. ("If the auditor were reviewing access, the auditor would detect the breaches.")  | If the monitoring plan were configured correctly, data collection would succeed.<br><br>The administrator recommends that the user configure the account. | If the monitoring plan was configured correctly, data collection would succeed.<br><br>The administrator recommends that the user configures the account. |
| **"Whether" vs. "if"** | Use "whether" for alternatives, "if" for conditional statements. | Check whether the monitoring plan is configured.<br><br>If the monitoring plan fails, check the logs. | Check if the monitoring plan is configured. (less formal) |
| **"While" vs. "although"** | Use "while" for time, "although" or "whereas" for contrast. | Although the monitoring plan is active, data collection has not started.<br><br>The data collector runs while the monitoring plan is active. | While the monitoring plan is active, data collection has not started. (ambiguous) |
| **"Since" vs. "because"** | Use "since" for time, "because" for causation. | The monitoring plan has been active since January.<br><br>The data collection failed because the credentials are invalid. | The data collection failed since the credentials are invalid. (ambiguous) |
| **"Each" and "every"** | Use singular verbs with "each" and "every." | Each monitoring plan has its own data collector.<br><br>Every administrator needs to configure their account. | Each monitoring plan have their own data collectors.<br><br>Every administrator need to configure their accounts. |
| **"Affect" vs. "effect"** | Use "affect" as a verb (to influence), "effect" as a noun (result). | The configuration affects data collection.<br><br>The effect of the configuration is improved performance. | The configuration effects data collection.<br><br>The affect of the configuration is improved performance. |
| **"Ensure" vs. "assure" vs. "insure"** | Use "ensure" (make certain), "assure" (convince), "insure" (protect financially). | Ensure the Data Collection Account is configured.<br><br>We assure you that your data is secure. | Assure the Data Collection Account is configured.<br><br>We ensure you that your data is secure. |
| **"Complement" vs. "compliment"** | Use "complement" (complete/enhance), not "compliment" (praise). | The analysis module complements the data collector. | The analysis module compliments the data collector. |
| **"Principal" vs. "principle"** | Use "principal" (main), "principle" (rule/belief). | The principal component is the data collector.<br><br>Follow the principle of least privilege. | The principle component is the data collector.<br><br>Follow the principal of least privilege. |
| **"Then" vs. "than"** | Use "then" for time/sequence, "than" for comparisons. | Configure the monitoring plan, then enable data collection.<br><br>The new version is faster than the previous version. | Configure the monitoring plan, than enable data collection.<br><br>The new version is faster then the previous version. |
| **"Their," "there," "they're"** | Use "their" (possessive), "there" (location/existence), "they're" (they are). | The administrators configure their monitoring plans.<br><br>There are three data collectors.<br><br>They're configured correctly. | The administrators configure they're monitoring plans.<br><br>Their are three data collectors.<br><br>There configured correctly. |
| **"Comprise" vs. "compose"** | Use "comprise" (consist of), not "comprised of." Use "compose" (make up). | The monitoring plan comprises three components.<br><br>Three components compose the monitoring plan. | The monitoring plan is comprised of three components.<br><br>Three components comprise the monitoring plan. |
| **"Imply" vs. "infer"** | Use "imply" for "suggest" and "infer" for "conclude". | The error message implies a configuration issue.<br><br>You can infer that the credentials are invalid. | The error message infers a configuration issue.<br><br>You can imply that the credentials are invalid. |
| **"None" as singular or plural** | Use "none" as singular when meaning "not one," plural when meaning "not any." | None of the monitoring plans is configured correctly. (not one)<br><br>None of the data collectors are active. (not any) | None of the monitoring plans are configured correctly. (when meaning "not one") |
| **"That" vs. "which"** | Use "that" for restrictive clauses (no comma). Use "which" for nonrestrictive clauses (with comma). | The monitoring plan that collects Active Directory data runs hourly.<br><br>The monitoring plan, which was created yesterday, runs hourly. | The monitoring plan which collects Active Directory data runs hourly.<br><br>The monitoring plan, that was created yesterday, runs hourly. |
| **"Its" vs. "it's"** | Use "its" for possessive. Use "it's" only for "it is" or "it has." | The monitoring plan completes its data collection.<br><br>It's important to configure the Data Collection Account. | The monitoring plan completes it's data collection.<br><br>Its important to configure the Data Collection Account. |
| **"Fewer" vs. "less"** | Use "fewer" for countable items. Use "less" for uncountable quantities. | The new version has fewer errors.<br><br>The new version uses less memory. | The new version has less errors.<br><br>The new version uses fewer memory. |
| **"Between" vs. "among"** | Use "between" for two items. Use "among" for three or more items. | Choose between Netwrix Auditor and Netwrix Privilege Secure.<br><br>Distribute the load among all three data collectors. | Choose among Netwrix Auditor and Netwrix Privilege Secure.<br>Distribute the load between all three data collectors. |

## Punctuation

| Rule | Description | Do  | Don't |
|------|-------------|-----|-------|
| **Oxford comma** | Use the Oxford comma in lists of three or more items. | Netwrix Auditor monitors Active Directory, file servers, and Exchange. | Netwrix Auditor monitors Active Directory, file servers and Exchange. |
| **Commas after introductory phrases** | Use commas after introductory phrases or clauses. | After you configure the monitoring plan, enable data collection.<br><br>To enable auditing, configure the Data Collection Account. | After you configure the monitoring plan enable data collection.<br><br>To enable auditing configure the Data Collection Account. |
| **Commas in compound sentences** | Use commas before coordinating conjunctions (FANBOYS - for, and, nor, but, or, yet, so) in compound sentences. | The data collector retrieves audit logs, and the analysis module processes them.<br><br>Configure the monitoring plan and enable data collection. (simple sentence) | The data collector retrieves audit logs and the analysis module processes them. |
| **Colons** | Use colons to introduce lists, examples, or explanations. | The monitoring plan requires three components: a data collector, an analysis module, and an action module. | The monitoring plan requires three components, a data collector, an analysis module, and an action module. |
| **Complete sentences before colons** | Use complete sentences before colons when you introduce a list. | Ensure that you do the following: * Authenticate to the system <br> * Send an initial request <br> * Validate the response | Ensure that you:* Authenticate to the system <br> * Send an initial request <br> * Validate the response |
| **Em dashes** | Use em dashes (—) without spaces for emphasis or interruption. | The API endpoint—available in version 12.0—supports OAuth 2.0. | The API endpoint - available in version 12.0 - supports OAuth 2.0. |
| **Hyphens** | Use hyphens for compound modifiers before nouns. | Configure the real-time monitoring plan.<br><br>The monitoring plan runs in real time. | Configure the real time monitoring plan.<br><br>The monitoring plan runs in real-time. |
| **Apostrophes** | Use apostrophes correctly for possessives and contractions. | The administrator's credentials<br><br>don't, can't, you're | The administrators credentials<br><br>dont, cant, your (when you mean "you are") |
| **Semicolons** | Use semicolons to connect closely related independent clauses. | The data collector retrieves audit logs; the analysis module processes them. | The data collector retrieves audit logs, the analysis module processes them. |
| **Slashes** | Avoid using slashes. Use "or" or rewrite the sentence.<br><br>**Exception:** Use slashes in established technical terms. | Configure the monitoring plan for SharePoint or SharePoint Online.<br><br>TCP/IP, client/server, read/write permissions | Configure the monitoring plan for SharePoint/SharePoint Online. |
| **Parentheses** | Use parentheses only for supplementary information that can be removed. | Configure the monitoring plan (see Configuration Guide for details). | Configure the monitoring plan (which is located in the Admin section). |
| **Quotation marks** | Use double quotation marks for quotes. Avoid using quotation marks for emphasis. | The error message displays "Invalid credentials."<br><br>Click the**Add** button to continue. | The error message displays 'Invalid credentials.'<br><br>Click the "Add" button to continue. |
| **Exclamation points** | Avoid exclamation points in technical documentation. | The installation completed successfully.<br><br>Warning: The configuration is invalid. | The installation completed successfully!<br><br>Warning! The configuration is invalid! |
| **Question marks** | Avoid using question marks. | **Heading:** Configuring monitoring plansThis presents an issue: ensuring all access is secure is difficult. | **Heading:** How do I configure monitoring plans?<br><br>This raises the question: how do you ensure all access is secure? |
| **Ampersands** | Don't use ampersands (&). Spell out "and" instead of using ampersands.<br><br>**Exception:** Use ampersands in established product names or code. | Configure Active Directory and Exchange monitoring.<br><br>Netwrix Auditor for Active Directory & Exchange (product name) | Configure Active Directory & Exchange monitoring. |
| **Periods in abbreviations** | Avoid periods in abbreviations and acronyms. | FSA, NOMBA, API, SQL, AD | F.S.A., N.O.M.B.A., A.P.I., S.Q.L., A.D. |
| **Ellipses** | Avoid ellipses in technical documentation. Use complete sentences. | The system is processing the request. Wait for the operation to complete. | The system is processing the request...<br><br>Wait for the operation to complete... |
| **Brackets** | Use square brackets for optional parameters or to clarify quoted text. | `Get-NWXReport [-Name <report-name>] [-StartDate <date>]`<br><br>The log states "The \[monitoring\] plan failed to start." | Use parentheses for optional parameters: `Get-NWXReport (-Name <report-name>)` |
| **Underscores** | Use underscores only in code, file paths, or technical identifiers. Avoid in regular text. | The `user_id`parameter identifies the user.<br><br>Edit the`config_file.xml` file. | The user_id parameter identifies the user. |
| **Apostrophes with plural possessives** | Use apostrophes after the "s" when you are using a plural possessive ("the users' identities"). | You can use the the three tools' distinct features. | You can use the three tool's distinct features. |

## Numbers and Dates

| Rule | Description | Do  | Don't |
|------|-------------|-----|-------|
| **Numbers** | Spell out zero through nine. Use numerals for 10 and above. | The monitoring plan has three data collectors.<br><br>The database contains 15 monitoring plans. | The monitoring plan has 3 data collectors.<br><br>The database contains fifteen monitoring plans. |
| **Numerals for units of measurement** | Use numerals with units of measurement. | 5 GB, 3 seconds | Five GB, three seconds |
| **Numbers at the start of a sentence** | Spell out numbers that begin a sentence or rewrite the sentence. | Twelve monitoring plans are configured.<br><br>You can configure up to 12 monitoring plans. | 12 monitoring plans are configured. |
| **Commas with numbers** | Use commas as thousands separators in numbers 1,000 and above. | The database contains 1,500 monitoring plans.<br><br>The system processes 10,000 events per second. | The database contains 1500 monitoring plans.<br><br>The system processes 10000 events per second. |
| **Dates** | Use the format Month Day, Year for dates.  | January 15, 2025 | 15 January 2025<br><br><br> |
| **Time** | Use the 12-hour clock with AM and PM. | The monitoring plan runs at 3:00 PM. | The monitoring plan runs at 15:00. |

## Formatting

| Rule | Description | Do  | Don't |
|------|-------------|-----|-------|
| **Headings** | Use sentence case for headings. Capitalize only the first word and proper nouns. | Configure the monitoring plan | Configure the Monitoring Plan<br><br>Configure The Monitoring Plan |
| **Headings with infinitives** | Start task-based headings with infinitives. | Install Netwrix Auditor<br><br>Configure monitoring plans | Installing Netwrix Auditor (in a heading for a section with multiple steps)<br><br>Configuring monitoring plans |
| **Headings with gerunds**  | Start headings with gerunds ("-ing" verbs) when the topics are concepts, overviews, or when they describe continuous actions. | Reviewing audit logs | Review audit logs (unless it's a task) |
| **Bold text** | Use bold for UI elements, buttons, and menu items. | Click **Add** to create a new monitoring plan. | Click "Add" to create a new monitoring plan.<br><br>Click Add to create a new monitoring plan. |
| **Italic text** | Avoid italics. | This process is known as agentless monitoring. | Click the *Add* button. |
| **Code formatting** | Use monospace formatting for code, commands, file paths, and technical values. | Run the `Get-NWXUser`cmdlet to retrieve user information.<br><br>Edit the`C:\Program Files\Netwrix\config.xml` file. | Run the Get-NWXUser cmdlet to retrieve user information.<br><br>Edit the C:\\Program Files\\Netwrix\\config.xml file. |
| **Code blocks** | Use fenced code blocks with language identifiers. | <code>`powershell<br>Get-NWXReport -Name "Active Directory Changes" -StartDate "2025-01-01"<br>`</code> | <code>`<br>Get-NWXReport -Name "Active Directory Changes" -StartDate "2025-01-01"<br>`</code> |
| **Lists** | Use parallel structure for list items. | • Configure the monitoring plan<br>• Enable data collection<br>• Review the audit logs | • Configure the monitoring plan<br>• Data collection should be enabled<br>• Reviewing the audit logs |
| **Numbered lists** | Use numbered lists for sequential steps. Use standard numbered list format (1., 2., 3.). Don't use "Step 1", "Step 2", or similar prefixes. | 1. Open Netwrix Auditor.<br>2. Navigate to **Monitoring Plans**.<br>3. Click **Add**. | • Open Netwrix Auditor.<br>• Navigate to **Monitoring Plans**.<br>• Click **Add**. |
| **Links** | Write descriptive link text. Avoid "click here" or "this link." | See the [Configuration Guide](config-guide.md) for details. | Click [here](config-guide.md) for details.<br><br>See [this link](config-guide.md) for details. |
| **Placeholder text** | Use descriptive placeholders in angle brackets. | `Get-NWXReport -Name <report-name>` | `Get-NWXReport -Name [report-name]`<br><br>`Get-NWXReport -Name REPORT_NAME` |

## Word Usage

| Rule | Description | Do  | Don't |
|------|-------------|-----|-------|
| **Product names** | Capitalize Netwrix product names correctly. | Netwrix Auditor, Netwrix Privilege Secure, Netwrix Password Secure | netwrix auditor, Netwrix auditor, NETWRIX AUDITOR |
| **Feature names** | Use sentence case for feature names unless they are proper nouns.<br><br>**Exception:** Use the correct case for established feature names. | monitoring plan, data collector, action module<br><br>Active Directory, SQL Server, SharePoint Online | Monitoring Plan, Data Collector, Action Module |
| **Acronyms** | Spell out acronyms on first use, then use the acronym. | Configure the File Server Auditing (FSA) monitoring plan. FSA collects data from file servers. | Configure the FSA monitoring plan. FSA collects data from file servers. |
| **"In order to"** | Use "to" instead of "in order to." | Configure the Data Collection Account to access audit logs. | Configure the Data Collection Account in order to access audit logs. |
| **"Please"** | Avoid "please" in instructions. Be direct. | Enter your credentials. | Please enter your credentials. |
| **Words that assume ease**   | Avoid minimizing words that assume task difficulty (simple, easy, just).  | Configure the monitoring plan. | Simply configure the monitoring plan.<br><br>Just configure the monitoring plan.<br><br>Easily configure the monitoring plan. |
| **"May" vs. "might" vs. "can"** | Use "might" for possibility and "can" for capability. Avoid "may".  | The monitoring plan might fail if credentials are incorrect.<br><br>You can configure multiple data collectors. | The monitoring plan may fail if credentials are incorrect.You may configure multiple data collectors. (implies permission) |
| **"Should" vs. "must"** | Use "must" for requirements and "should" for recommendations. | You must configure the Data Collection Account before enabling auditing.<br><br>You should review the audit logs regularly. | You should configure the Data Collection Account. (if it's required) |

## Organization

| Rule | Description | Do  | Don't |
|------|-------------|-----|-------|
| **Overview sections** | Place overview content before detailed instructions. | Place "Overview" before "Configuration." | Place "Configuration" before "Overview." |
| **Prerequisites** | List prerequisites before installation or configuration steps. | List system requirements before installation instructions. | Mention system requirements in the middle of installation instructions. |
| **Cross-references** | Place related links at the end of sections. | End the section with "For more information, see [Configuration Guide](config-guide.md)." | Start the section with "For more information, see [Configuration Guide](config-guide.md)." |
| **Filenames** | Use lowercase with hyphens for filenames. | `monitoring-plan-config.md`, `getting-started.md` | `MonitoringPlanConfig.md`, `Getting_Started.md`, `gettingstarted.md` |
| **Heading hierarchy** | Use heading levels consistently. Don't skip levels (H1 to H3 without H2). | H1 Product Name<br>H2 Overview<br>H3 Key Features | H1 Product Name<br>H3 Overview (skips H2) |
| **Section length** | Keep sections focused. Break long sections into subsections. | H2 Configuration<br>H3 Data collectors<br>H4 Analysis modules | ## Configuration<br>(5000 words of mixed content without subsections) |
| **Introduction sections** | Include a brief introduction at the start of each major section. Do not use an "Introduction" header. Just start the introduction at the beginning of the document. | H2 Configuration<br>Configure monitoring plans to collect audit data from your environment. | H2 Configuration<br>1. Open Netwrix Auditor.<br>2. Click **Add**. (no context)OR H2 ConfigurationH3 Introduction |
| **Example placement** | Place examples immediately after explaining concepts. | The monitoring plan collects data from Active Directory.<br><br>**Example:** Configure FSA to monitor file servers. | Explain multiple concepts, then group all examples at the end. |
| **Concepts before procedures** | Explain concepts before providing step-by-step instructions. | H2 About monitoring plans<br>Monitoring plans collect audit data.<br>H2 Configuring monitoring plans<br>1. Open Netwrix Auditor. | H2 Configuring monitoring plans<br>1. Open Netwrix Auditor.<br>H2 About monitoring plans (after the steps) |
| **Task grouping** | Group related tasks together in sections. | H2 Monitoring plan configuration<br>H3 Creating monitoring plans<br>H3 Editing monitoring plans<br>H3 Deleting monitoring plans | H2 Configuration<br>H3 Creating monitoring plans<br>H2 Administration<br>H3 Editing monitoring plans<br>H2 Maintenance<br>H3 Deleting monitoring plans |
| **Common before advanced** | Start with common tasks, then cover advanced topics. | H2 Basic Configuration<br>H2 Expert Topics | H2 Expert Topics<br>H2 Basic Configuration  |
| **Tutorial structure** | Structure tutorials as: Objective, Prerequisites, Steps, Verification, Summary, Next steps. | H2 Objective<br>H2 Prerequisites<br>H2 Steps<br>H2 Verify<br>H2 Summary | Mix objectives, prerequisites, and steps without clear structure. |
| **Folder structure** | Organize documentation in folders by product, then version, and then topic area. | docs/auditor/10.7/admin/… | docs/auditor/admin/10.7… |
| **Navigation order** | Order navigation items logically for users who are learning from the start. (Overview, Getting Started, Guides, Reference, Troubleshooting) | Sidebar:<br>1. Overview<br>2. Getting Started<br>3. Configuration<br>4. Reference | Sidebar:<br>1. Reference<br>2. Troubleshooting<br>3. Overview |

## API Documentation

| Rule | Description | Do  | Don't |
|------|-------------|-----|-------|
| **Endpoints** | Use code formatting for API endpoints. | Send a GET request to `/api/v1/users`. | Send a GET request to /api/v1/users. |
| **HTTP methods** | Use uppercase for HTTP methods. | Use the GET method to retrieve data. | Use the get method to retrieve data. |
| **Request and response examples** | Provide realistic examples with actual values. | <code>{<br>  "username": "jsmith",<br>  "email": "[jsmith@example.com](mailto:jsmith@example.com)",<br>  "role": "administrator"<br>}</code> | <code>{<br>  "username": "string",<br>  "email": "string",<br>  "role": "string"<br>}</code> |
| **Parameters** | Document all parameters with descriptions and data types. | `userId` (string, required): The unique identifier for the user. | `userId`: User ID. |
| **Status codes** | Document expected HTTP status codes. | Returns 200 OK on success or 404 Not Found if the user doesn't exist. | Returns a status code. |

## Error Messages

| Rule | Description | Do  | Don't |
|------|-------------|-----|-------|
| **Error message formatting** | Format error messages clearly with the error code and description. | Error 1001: Invalid credentials. Verify your username and password. | An error occurred. |
| **Error message tone** | Use a neutral, helpful tone in error messages. | The monitoring plan configuration is invalid. Check the data collector settings. | You entered an invalid configuration. |
| **Next steps** | Provide actionable next steps in error messages. | The API request failed. Verify your authentication token and try again. | The API request failed. |