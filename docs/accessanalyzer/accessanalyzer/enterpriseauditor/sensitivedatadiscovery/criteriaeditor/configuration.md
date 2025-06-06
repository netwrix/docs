# Configuration Pane

Use the configuration pane to view sub-criteria information for System Criteria and to view, add, edit, and remove sub-criteria information for User Criteria.

![Configuration Pane](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/sensitivedatadiscovery/criteriaeditor/configurationpanesystemcriteria.png)

The information in the configuration pane changes based on the criteria currently selected in the navigation pane.

![Options at the top of the configuration pane](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/sensitivedatadiscovery/criteriaeditor/configurationpanetop.png)

The options at the top of the Configuration Pane are:

__NOTE:__ Configuration settings for System Criteria cannot be modified.

- Navigation Path – Displays information on the current location within the Sensitive Data Criteria Editor
- Name – Name of the criteria as it is shown in the navigation pane
- Test Criteria Button – Opens the Criteria Tester window to test current criteria configurations. See the [Criteria Tester Window](#Criteria-Tester-Window) topic for additional information.
- Confidence Level – Displays the current confidence level which indicates how accurate a match is for a criteria

  - The confidence level is reported on a scale from 0 - 100. The closer the number is to 100, the more accurate a match is for a criteria.
- Risk Score – Displays the general level of risk a criteria represents when found in a file that is not properly secured

  - The risk score can be set to __Low__, __Medium__, or __High__
  - Click the __Risk Score__ button to change the risk score for user-configured criteria
- Required matched criteria list – Lists the sub-criteria configured for the currently selected top-level criteria in the navigation pane. The columns in the table are:

  - Name – Name of the sub-criteria
  - Type – Type of sub-criteria: __Keywords__, __Regex__, or __Summary__
  - Content – Values associated with the sub-criteria
  - Minimum Matches – Minimum number of match hits required for a sub-criteria match hit
  - Match Type – Displays whether the sub-criteria __Must match__ or __Must not match__

![Options at the bottom of the configuration pane](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/sensitivedatadiscovery/criteriaeditor/configurationpanebottom.png)

The options at the bottom of the configuration pane are:

__NOTE:__ Configuration settings for System Criteria cannot be modified.

- Add – Add a sub-criteria to the required matched criteria list. The three types of sub-criteria that can be added are __Keyword__, __Pattern__, and __Summary__. See the following topics for additional information:

  - [Keyword Criteria](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/sensitivedatadiscovery/criteriaeditor/criteriatype/keyword.md)
  - [Regular Expression (Pattern) Criteria](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/sensitivedatadiscovery/criteriaeditor/criteriatype/regularexpression.md)
  - [Summary Criteria](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/sensitivedatadiscovery/criteriaeditor/criteriatype/summary.md)
- Remove – Remove sub-criteria from the Required matched sub-criteria list
- Edit – Edit the currently selected sub-criteria
- Must match at least this many criteria – Adjust the slider to configure how many sub-criteria must be matched for the sensitive data criteria to be reported

  - The minimum value is 1
  - The maximum value is the number of sensitive data sub-criteria that has been added to the required matched criteria list

  __CAUTION:__ The character distance feature does not account for summaries that are nested within other summaries.
- Matches should be within this proximity of characters – Match hits for this criteria should be within this many characters of one another in order for there to be a match. Adjust the slider to set the default character distance required for match hits.

  - The minimum value is 0
  - The maximum value is 200
  - Using this feature requires any combination of two or more Regular Expression (Pattern) and Keyword sub-criteria
- Include keywords as part of match hits – Select this option to enable the inclusion of keywords as part of match hits. This option determines whether a match found based on a Keyword Criteria is reported as a match hit. When this option is selected, any matches found for a word in the Keyword list is reported as match hit. If this option is not selected, then only matches found based on Pattern or child Summary Criteria are reported as a match hit.
- Metadata for this criteria – Click the green plus (__+__) button to add a new metadata type for the criteria. Delete a metadata type by clicking the __X__ button in the gray metadata tag.

  - For a list of available out-of-the-box metadata tags, see the [Default Metadata Tag Values](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/sensitivedatadiscovery/metadatatags.md) topic for additional information
- Cancel – Exit the Sensitive Data Criteria Editor without saving changes
- Save – Save changes made to the current criteria

## Criteria Tester Window

Use the Criteria Tester window to test current criteria configurations.

![Criteria Tester window](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/sensitivedatadiscovery/criteriaeditor/criteriatester.png)

The options in the Criteria Tester are:

- Use the following sample text – Enter sample text to test against current configured criteria in the __Use the following sample text__ textbox
- Use the following file – Click __Browse__ to import a file as sample text to test against currently configured criteria
- Test Data – Click __Test Data__ to test the sample text against currently configured criteria. Match hits show in the __Test Results__ section.
- Test Results – Displays match hits for the sample text typed into the text box. The two tabs under Test Results are:

  - Criteria – Displays the specific criteria for which the sample text is considered a match
  - Matched Data – Displays the sample text that was matched for the configured criteria
