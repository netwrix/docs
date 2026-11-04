---
title: Build a Classifier
description: Create a custom classifier in the classifier builder, from detectors and filters to severity rules, and test it on sample text before you save.
sidebar_position: 1
---

The built-in classifiers cover regulated identifiers, financial data, and secrets, not identifiers that only your organization uses, such as employee numbers, customer account codes, or project codenames. A custom classifier finds one of those and decides how severe each finding is.

You build classifiers in the classifier builder. It opens when you click **New classifier** on the **Classifiers** tab, when you open a classifier, and when you copy a built-in classifier with **Edit (makes your copy)**. You need the Admin role.

## Parts of a Classifier

The builder lays a classifier out from top to bottom in the order the scan evaluates it:

![Classifier builder for a new classifier with Run if, Detectors, Severity variables, and Severities](/images/accessanalyzer/26.1/classifiers/builder-new.webp)

| Section | What it does |
|---|---|
| **Run if** | Optional conditions about the file, built from **File**, **CEL expression**, and **Group** conditions. When they're false, the classifier doesn't run on the file. |
| **Detectors** | What the classifier looks for. Each detector uses one pattern, or every pattern with a label, and filters that keep only the matches worth counting. |
| **Severity variables** | Optional conditions you name once and reuse in any severity rule. |
| **Severities** | Rules under **Critical**, **High**, **Medium**, and **Low**. The scan reports the highest severity whose rule matches; if no rule matches, the classifier reports nothing. |

The header holds the classifier name, **Details**, the **Visual** and **Code** views, and the save buttons. **Details** opens the classifier's **Description**, **Regulations**, and **Labels**. **Visual** is the form shown on this page; **Code** shows the same classifier as text that you can edit directly. Switching from **Code** back to **Visual** discards changes you made in **Code**, and the builder asks first.

## Create a Classifier

The following steps build an **Employee ID** classifier that reports `EMP-` numbers next to a label such as "Employee ID". It uses the **Employee ID** pattern from [Create a pattern](patterns.md#create-a-pattern) and the **Employee ID labels** list from [Create a list](lists.md#create-a-list). Create those first.

1. Go to **Classification > Classifiers**.
2. Click **New classifier**.
3. Replace **Untitled classifier** with a name, such as `Employee ID`.
4. Click **Details** and fill in **Description**, **Regulations**, and **Labels** as needed.
5. Add a detector:
   1. Under **Detectors**, click **Add detector**, and then click **Patterns**.
   2. In **Detector name**, enter a name, such as `Employee badge number`.
   3. Leave **One pattern** selected, and in **Pick a pattern**, select **Employee ID**.
   4. Click **Add filter**, and then click **is within N characters of text**.
   5. Set the distance to `100`, select **Employee ID labels** in place of **the values typed here**, and select **Or in the column header**.
   6. Click **Done**.
6. Add a severity rule:
   1. Under **Medium**, click **Add rule**.
   2. Click **Add condition**, and then click **Detector test**.
   3. Select **Employee badge number** and **found**.
7. [Test the classifier](#test-a-classifier) on sample text.
8. Click **Create classifier**.

![Detector with the Employee ID pattern and a filter that requires a word from the Employee ID labels list within 100 characters](/images/accessanalyzer/26.1/classifiers/detector-filter-list.webp)

A message confirms the save: **`<name>` saved — scans use it within a minute**. The classifier appears on the **Classifiers** tab as a custom classifier.

If something is missing, the builder highlights it and reports **Fix the highlighted problems, then save again**, with messages such as **Pick a pattern**, **Add a condition**, or **Add a rule to at least one severity**.

| Field | Required | Details |
|---|---|---|
| Name | Yes | Up to 120 characters. |
| **Description** | No | Up to 2,000 characters. |
| **Regulations** | No | The regulations the classifier supports. They drive the **Regulation** filter on the **Classifiers** tab and in the scan wizard. |
| **Labels** | No | Key and value pairs. Scans set to **Classifiers matching labels** run the classifiers that carry their labels. |

## Detectors

A detector finds candidate values. Choose **One pattern** to use a single pattern, or **Patterns by label** to use every pattern with a **Label key** and **Label value**, and choose whether **any of them** or **all of them** must match. After you click **Done**, the detector shows a summary of its filters, such as **within 100 of a list's words or header**. Click **Edit filters** to change them.

Filters narrow the pattern's matches to the ones that count:

![Add filter menu listing the filters a detector can apply](/images/accessanalyzer/26.1/classifiers/detector-filters.webp)

| Filter | Keeps a match when |
|---|---|
| **length** | The match is within a length range. |
| **is in a list** | The match is one of the words in a list. |
| **contains / starts / ends / matches** | The match contains, starts with, ends with, or fully matches the text you give. |
| **is within N characters of a detector** | Another detector matches within the distance you set. |
| **is within N characters of text** | A word from a list, or text you type, appears within the distance you set, from 1 to 5,000 characters. **Whole words** is on by default. Select **Or in the column header** to also accept the word as the column header above the value in a spreadsheet or table. |
| **is not inside a match of a detector** | The match isn't part of a longer match from another detector. For example, a card number that is really part of a longer hyphenated digit chain. |
| **is a whole word** | The match isn't part of a longer word. Letters, digits, and underscores all count as part of a word. |
| **matches case exactly** | The letter case matches. Keyword lists only; matches from other patterns always pass. |
| **passes a checksum** | The match passes a check-digit rule from the [Checksums](checksums.md) tab. A keyword list never checks. A detector can use one checksum. |

**Found when** decides when the detector counts as found: **Any match passes the filters**, **Every match passes the filters**, or **Exactly one match passes the filters**. "Every" also holds when the pattern has no matches at all.

Click **Look only when…** on a detector to add a condition the detector needs before it looks.

## Severity Rules

Each rule under a severity starts with **ALL**, **ANY**, or **AT LEAST N** **of the following**, followed by conditions. Click **not** before a rule or condition to negate it. Click **Save as a variable** to turn a rule into a [severity variable](#severity-variables), and **Delete** to remove it. Groups nest up to three levels deep; past that, save the inner group as a variable.

| Condition | What it tests |
|---|---|
| **Detector test** | Whether a detector was found, how many matches it has, how many different values, or whether a value is valid. |
| **Near** | Matches within N characters of another detector. |
| **Close together** | Matches from several detectors within N characters of each other. |
| **Not inside** | Matches outside another detector's matches. |
| **Patterns across** | How many different patterns matched across detectors. |
| **Total matches** | The total match count across detectors. |
| **File** | The file name, folder path, readable content, length, or file status, such as **Access denied**, **Encrypted or password protected**, or **Text cut off**. |
| **Variable** | A severity variable. |
| **CEL expression** | A condition you write by hand in Common Expression Language (CEL). |
| **Group** | A nested **ALL**, **ANY**, or **AT LEAST N** group of conditions. |

The classifier reports the highest severity with a rule that holds. For example, the built-in **Credit Cards** classifier reports **Medium** when any card brand's detector finds a number that passes the Luhn check.

## Severity Variables

A severity variable is a named condition you define once under **Severity variables** and reuse in any severity rule with the **Variable** condition. Use one when several severities share a test, such as "a card number near a card label", so a change to the test applies everywhere it's used.

## Test a Classifier

The **Test** panel runs the classifier you're editing on sample text with the same engine a scan uses, before you save.

1. Click **Test** at the right edge of the builder.
2. Optionally, enter a file path, such as `/HR/onboarding/new-hires.txt`. Conditions that read the file name or folder path use it.
3. Optionally, pick status flags for the sample file.
4. Paste up to 64 KB of sample text into the text box.
5. Click **Run**.

![Test panel reporting the sample as Medium with two Employee ID matches](/images/accessanalyzer/26.1/classifiers/builder-test.webp)

The panel reports **Reported as `<severity>`** with the matches found, or **Not reported** with the reason: **Run if didn't hold**, **nothing matched**, **every match failed a check**, or **no level's conditions held**. Each detector also shows how many matches its pattern found before filters. Click **Show decision tree** to see how the classifier reached the result.

To test a saved classifier without opening the builder, click **Try it** in its **Actions** menu on the **Classifiers** tab.

![Decision tree for the sample, from the file through the detector to the Medium severity](/images/accessanalyzer/26.1/classifiers/decision-tree.webp)

The decision tree draws the file, each detector with its match count, and each severity that passed or failed. **Focus on result** hides the branches that didn't decide the result, and **Copy trace JSON** copies the full evaluation for troubleshooting.

## Edit a Classifier

1. On the **Classifiers** tab, click the classifier name.
2. Change the classifier in the builder.
3. Test it, and then click **Save changes**.

To change a built-in classifier, click **Edit (makes your copy)**. See [Built-in and custom classifiers](index.md#built-in-and-custom-classifiers).
