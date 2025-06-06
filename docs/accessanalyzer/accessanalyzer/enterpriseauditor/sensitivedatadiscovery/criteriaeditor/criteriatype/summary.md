# Summary Criteria

Summary criteria are designed as a way of combining Regular Expression (Pattern) criteria and Keyword criteria.

![Edit new Summary criteria](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/sensitivedatadiscovery/criteriaeditor/criteriatype/newsummarycriteria.png)

Click __Add__ and select __Summary__ to add a new Summary criteria to the Required matched criteria list. Select the new criteria and click __Edit__ to configure the new Summary criteria.

![Summary criteria configuration page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/sensitivedatadiscovery/criteriaeditor/criteriatype/summarycriteriaconfiguration.png)

The options on the Summary criteria configuration page are:

- Name – Name of the Summary sub-criteria
- Test Criteria – Opens the Criteria Tester window to test current Summary criteria configurations. See the [Criteria Tester Window](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/sensitivedatadiscovery/criteriaeditor/configuration.md#Criteria-Tester-Window) topic for additional information.
- Required matched criteria – Lists sub-criteria configured for currently selected criteria in the navigation pane. The columns in the table are:

  - Name – Name of the sub-criteria
  - Type – Type of sub-criteria (__Keyword__, __Regex__, or __Summary__)
  - Content – Values associated with sub-criteria
  - Minimum Matches – Minimum matches required for a match hit
  - Match Type – Displays whether the sub-criteria __Must match__ or __Must not match__
- Add – Add a sub-criteria to the required matched criteria list. The three types of sub-criteria that can be added are __Keyword__, __Pattern__, and __Summary__.
- Remove – Remove the selected sub-criteria from the Required matched criteria list
- Edit – Edit the currently selected sub-criteria
- Match Type – Choose whether match hits for the Summary criteria __Must match__ or __Must not match__
- Must match at least this many criteria – Adjust the slider to configure how many sub-criteria must be matched for the top-level criteria to be considered a match

  - The minimum value is 1
  - The maximum value is the number of sensitive data sub-criteria that has been added to the Required matched criteria list

__CAUTION:__ The character distance feature does not account for summaries that are nested within other summaries.

- Matches should be within this proximity of characters – Adjust the slider to set the default character distance required for match hits

  - The minimum value is 0
  - The maximum value is 200
  - Using this feature requires any combination of two or more Regular Expression (Pattern) and Keyword sub-criteria
- Include keywords as part of match hits – Select this checkbox to enable the inclusion of keywords as part of match hits
- Cancel – Exit the Sensitive Data Criteria Editor without saving changes
- Save – Save changes made to the currently selected criteria
