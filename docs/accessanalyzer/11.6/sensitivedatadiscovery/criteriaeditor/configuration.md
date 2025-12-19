---
title: "Configuration Pane"
description: "Configuration Pane"
sidebar_position: 10
---

# Configuration Pane

Use the configuration pane to view sub-criteria information for System Criteria and to view, add,
edit, and remove sub-criteria information for User Criteria.

![Configuration Pane](/images/accessanalyzer/11.6/sensitivedatadiscovery/criteriaeditor/configurationpanesystemcriteria.webp)

The information in the configuration pane changes based on the criteria currently selected in the
navigation pane.

![Options at the top of the configuration pane](/images/accessanalyzer/11.6/sensitivedatadiscovery/criteriaeditor/configurationpanetop.webp)

The options at the top of the Configuration Pane are:

:::note
Configuration settings for System Criteria cannot be modified.
:::


- Navigation Path – Displays information on the current location within the Sensitive Data Criteria
  Editor
- Name – Name of the criteria as it is shown in the navigation pane
- Test Criteria Button – Opens the Criteria Tester window to test current criteria configurations.
  See the [Criteria Tester Window](#criteria-tester-window) topic for additional information.
- Confidence Level – Displays the current confidence level which indicates how accurate a match is
  for a criteria

    - The confidence level is reported on a scale from 0 - 100. The closer the number is to 100, the
      more accurate a match is for a criteria.

- Risk Score – Displays the general level of risk a criteria represents when found in a file that is
  not properly secured

    - The risk score can be set to **Low**, **Medium**, or **High**
    - Click the **Risk Score** button to change the risk score for user-configured criteria

- Required matched criteria list – Lists the sub-criteria configured for the currently selected
  top-level criteria in the navigation pane. The columns in the table are:

    - Name – Name of the sub-criteria
    - Type – Type of sub-criteria: **Keywords**, **Regex**, or **Summary**
    - Content – Values associated with the sub-criteria
    - Minimum Matches – Minimum number of match hits required for a sub-criteria match hit
    - Match Type – Displays whether the sub-criteria **Must match** or **Must not match**

![Options at the bottom of the configuration pane](/images/accessanalyzer/11.6/sensitivedatadiscovery/criteriaeditor/configurationpanebottom.webp)

The options at the bottom of the configuration pane are:

:::note
Configuration settings for System Criteria cannot be modified.
:::


- Add – Add a sub-criteria to the required matched criteria list. The three types of sub-criteria
  that can be added are **Keyword**, **Pattern**, and **Summary**. See the following topics for
  additional information:

    - [Keyword Criteria](/docs/accessanalyzer/11.6/sensitivedatadiscovery/criteriaeditor/keyword.md)
    - [Regular Expression (Pattern) Criteria](/docs/accessanalyzer/11.6/sensitivedatadiscovery/criteriaeditor/regularexpression.md)
    - [Summary Criteria](/docs/accessanalyzer/11.6/sensitivedatadiscovery/criteriaeditor/summary.md)

- Remove – Remove sub-criteria from the Required matched sub-criteria list
- Edit – Edit the currently selected sub-criteria
- Must match at least this many criteria – Adjust the slider to configure how many sub-criteria must
  be matched for the sensitive data criteria to be reported

    - The minimum value is 1
    - The maximum value is the number of sensitive data sub-criteria that has been added to the
      required matched criteria list

    :::warning
    The character distance feature does not account for summaries that are nested
    within other summaries.
    :::


- Matches should be within this proximity of characters – Match hits for this criteria should be
  within this many characters of one another in order for there to be a match. Adjust the slider to
  set the default character distance required for match hits.

    - The minimum value is 0
    - The maximum value is 200
    - Using this feature requires any combination of two or more Regular Expression (Pattern) and
      Keyword sub-criteria

- Include keywords as part of match hits – Select this option to enable the inclusion of keywords as
  part of match hits. This option determines whether a match found based on a Keyword Criteria is
  reported as a match hit. When this option is selected, any matches found for a word in the Keyword
  list is reported as match hit. If this option is not selected, then only matches found based on
  Pattern or child Summary Criteria are reported as a match hit.
- Metadata for this criteria – Click the green plus (**+**) button to add a new metadata type for
  the criteria. Delete a metadata type by clicking the **X** button in the gray metadata tag.

    - For a list of available out-of-the-box metadata tags, see the
      [Default Metadata Tag Values](/docs/accessanalyzer/11.6/sensitivedatadiscovery/metadatatags.md)
      topic for additional information

- Cancel – Exit the Sensitive Data Criteria Editor without saving changes
- Save – Save changes made to the current criteria

## Criteria Tester Window

Use the Criteria Tester window to test current criteria configurations.

![Criteria Tester window](/images/accessanalyzer/11.6/sensitivedatadiscovery/criteriaeditor/criteriatester.webp)

The options in the Criteria Tester are:

- Use the following sample text – Enter sample text to test against current configured criteria in
  the **Use the following sample text** textbox
- Use the following file – Click **Browse** to import a file as sample text to test against
  currently configured criteria
- Test Data – Click **Test Data** to test the sample text against currently configured criteria.
  Match hits show in the **Test Results** section.
- Test Results – Displays match hits for the sample text typed into the text box. The two tabs under
  Test Results are:

    - Criteria – Displays the specific criteria for which the sample text is considered a match
    - Matched Data – Displays the sample text that was matched for the configured criteria
