---
title: Build a VIN classifier
description: Build a custom classifier that finds North American vehicle identification numbers by combining a pattern, a word list, and a checksum.
sidebar_position: 2
---

In this tutorial, you build a classifier that finds North American vehicle identification numbers (VINs). It reports **Medium** when a file has a VIN and **High** when a file has five or more different VINs. The detector combines a pattern, a word list, and a checksum. You test the classifier on four samples before you save it.

## How the classifier works

A VIN has 17 characters, and many other values have the same shape. The classifier counts a 17-character string as a VIN only when it passes the VIN check digit and sits next to a VIN label or under a VIN column header. It uses four parts:

| Part | Name | What it does |
|---|---|---|
| Pattern | `VIN` | Finds every string of 17 characters that a VIN can contain. |
| List | `VIN labels` | Holds the words that label a VIN, such as VIN and Vehicle ID. |
| Checksum | `VIN check digit` | Keeps a string only when its ninth character is the correct check digit. |
| Classifier | `North American VIN` | Applies the list and the checksum to the pattern's matches and sets the severity. |

The classifier reports **Medium** when the detector finds a VIN. It reports **High** when the detector finds five or more different VINs.

## Before you start

- Sign in to Access Analyzer with the Admin role.
- Build the `VIN check digit` checksum in [Build a VIN checksum](build-a-vin-checksum.md). Confirm that it appears on the **Checksums** tab.

You don't need a source or a scan, because the **Test** panel runs the classifier on text you paste. For every setting in the builder, see [Build a classifier](../build-a-classifier.md).

## Create the VIN pattern

The pattern finds every string that could be a VIN. It matches 17 digits and capital letters, and it leaves out the letters `I`, `O`, and `Q`, which a VIN never contains.

1. Go to **Classification > Classifiers** and select the **Patterns** tab.
2. Click **Create pattern**.
3. In **Name**, enter `VIN`.
4. In **Description**, enter `A 17-character North American vehicle identification number.`
5. Leave **Regex** selected.
6. In **Regex pattern**, enter the following expression:

   ```text
   \b[A-HJ-NPR-Z0-9]{17}\b
   ```

7. Click **Create pattern**.

![Create pattern panel with the VIN regular expression](/images/accessanalyzer/26.1/tutorials/vin-create-pattern.webp)

A message confirms the save: **Pattern "VIN" created**.

The expression has three parts:

| Part | Matches |
|---|---|
| `\b` | A word boundary at the start and at the end, so the pattern doesn't match inside a longer token. |
| `[A-HJ-NPR-Z0-9]` | One digit or capital letter other than `I`, `O`, or `Q`. |
| `{17}` | Exactly 17 of those characters. |

The expression has no capture groups. When a match captures exactly one named group, the checksum checks only that group. Otherwise, it checks the whole match, which here is all 17 characters. For the expressions Access Analyzer accepts, see [Regular expression dialect](../patterns.md#regular-expression-dialect).

:::note
The pattern is case-sensitive, so it finds only VINs written in capital letters.
:::

## Create the VIN labels list

The list holds the words that label a VIN. The detector reads it to decide whether a match sits next to a label or under a column header.

1. Select the **Lists** tab.
2. Click **Add list**.
3. In **Name**, enter `VIN labels`.
4. In **Description**, enter `Words that label a vehicle identification number.`
5. In **Words**, enter one word or phrase per line:

   ```text
   VIN
   Vehicle identification number
   Vehicle ID
   ```

6. Leave **Match case** off, so `VIN`, `Vin`, and `vin` all count.
7. Click **Create list**.

![Create list panel with three VIN label words](/images/accessanalyzer/26.1/tutorials/vin-create-list.webp)

A message confirms the save: **List "VIN labels" created**.

## Create the classifier

The classifier builder lays the classifier out from top to bottom in the order a scan evaluates it. For what each section does, see [Parts of a classifier](../build-a-classifier.md#parts-of-a-classifier).

### Name the classifier

1. Select the **Classifiers** tab and click **New classifier**.
2. In the box that reads **Untitled classifier**, enter `North American VIN`.
3. Optionally, click **Details**, and in **Description** enter `Finds North American vehicle identification numbers.`

### Add the VIN detector

A detector finds values with a pattern and narrows them with filters.

1. Under **Detectors**, click **Add detector**, and then click **Patterns**.
2. In **Detector name**, enter `VIN`.
3. Leave **One pattern** selected, and in **Pick a pattern**, select **VIN**.

Pick the pattern first. The **passes a checksum** filter appears in the filter menu only after the detector has a pattern.

### Require a VIN label near each match

1. On the detector, click **Add filter** to open its filters.
2. In the filters, click **Add filter**, and then click **is within N characters of text**.
3. Change the distance to `100`.
4. Select **VIN labels** in place of **the values typed here**.
5. Keep **Whole words** selected, and select **Or in the column header**.

The filter keeps a match when a word from **VIN labels** appears within 100 characters of it. With **Whole words** selected, `vin` inside a word such as `moving` doesn't count as a label. **Or in the column header** also keeps a match when the header of its column holds a label word. In a comma-separated values (CSV) file or a spreadsheet, most rows sit far from the header, so the distance alone would drop them.

:::note
**Or in the column header** reads delimited text, such as CSV. The first non-empty line is the header. At least 3 of the first 20 non-empty lines must split into the same number of cells on one delimiter: tab, comma, semicolon, or pipe.
:::

### Require a correct check digit

1. Click **Add filter**, and then click **passes a checksum**.
2. In the checksum list, which reads **Pick a checksum…**, select **VIN check digit**.
3. Leave **Found when** set to **Any match passes the filters**.
4. Click **Done**.

The checksum list shows the built-in checksums first, each marked **(built-in)**. Checksums you built follow them, so **VIN check digit** is near the end.

![Checksum list with VIN check digit after the built-in checksums](/images/accessanalyzer/26.1/tutorials/vin-checksum-picker.webp)

The detector now summarizes its filters: **within 100 of a list's words or header** and **passes checksum VIN check digit**.

![VIN detector with a label filter and a VIN check digit filter](/images/accessanalyzer/26.1/tutorials/vin-detector-filters.webp)

### Add the severity rules

The classifier reports the highest severity whose rule holds. Both rules read the **VIN** detector.

1. Under **Medium**, click **Add rule**.
2. Click **Add condition**, and then click **Detector test**.
3. Confirm that the condition reads **VIN** and **found**.
4. Under **High**, click **Add rule**.
5. Click **Add condition**, and then click **Detector test**.
6. Change **found** to **number of different values**.
7. Leave **is at least** selected, and change the number to `5`.

The **High** rule counts different values, so repeats of one VIN count once. A file with the same VIN five times stays at **Medium**. A file with five different VINs meets both rules, and the classifier reports **High**.

![Severities section with a Medium rule and a High rule for the VIN detector](/images/accessanalyzer/26.1/tutorials/vin-severities.webp)

:::note
Every detector in a classifier that reads the **VIN** pattern must use the same checksum. Access Analyzer refuses to test or save a classifier whose detectors read one pattern with different checksums, or with a checksum on one detector and none on another.
:::

## Test the classifier

The **Test** panel runs the classifier you're editing on sample text with the same engine a scan uses. All the VINs in these samples are made up.

1. Click **Test** at the right edge of the builder. The **Try it on a sample** panel opens.
2. Leave the file path and the status flags empty.
3. Run each of the following samples: paste the text into the sample text box, replacing the previous text, and click **Run**.

### Test a VIN next to a label

```text
VIN: 1FAKE00060EXAMPLE
```

The panel reports **Reported as Medium**, and its **Found** line lists one match. The string matches the pattern, its check digit is correct, and the word VIN comes right before it.

### Test a file with five VINs

```csv
Asset,VIN,Type,Assigned department
A-1001,1FAKE00060EXAMPLE,Pickup truck,Facilities
A-1002,1FAKE00150EXAMPLE,Cargo van,Facilities
A-1003,1FAKE00240EXAMPLE,Sedan,Sales
A-1004,1TEST00030SAMPLE0,Cargo van,Field service
A-1005,1TEST00120SAMPLE0,Sedan,Sales
```

The panel reports **Reported as High**, and its **Found** line lists five matches. The five different VINs meet the **High** rule, and the **Medium** rule also holds, so the classifier reports the higher severity.

Only the first two VINs sit within 100 characters of the word VIN in the header. **Or in the column header** keeps the other three.

![Test panel reporting High for a file with five VINs](/images/accessanalyzer/26.1/tutorials/vin-test-high.webp)

### Test a VIN with a wrong check digit

```text
VIN: 1FAKE00070EXAMPLE
```

The panel reports **Not reported: nothing matched**, and it lists "VIN: 1 match failed the checksum". The string has a label, but its ninth character is 7, and the rule computes a check digit of 6.

![Test panel reporting that the VIN failed the checksum](/images/accessanalyzer/26.1/tutorials/vin-test-wrong-check-digit.webp)

### Test a VIN without a label

```text
Ref 1FAKE00060EXAMPLE
```

The panel reports **Not reported: no level's conditions held**. The check digit is correct, so the **Found** line still lists the VIN. No word from **VIN labels** is near it, so neither severity rule holds. The **Found** line lists matches before the label filter runs.

![Test panel showing Not reported for a VIN with no label near it](/images/accessanalyzer/26.1/tutorials/vin-test-no-label.webp)

To see which part of the classifier decided each result, click **Show decision tree**. See [Test a classifier](../build-a-classifier.md#test-a-classifier).

### See what the column header option does

This optional check shows why the five-VIN sample needs **Or in the column header**. The **Test** panel covers the buttons on the detector, so you close it before you change a filter.

1. Click **Test** to close the panel.
2. On the **VIN** detector, click **Edit filters**, and clear **Or in the column header**.
3. Click **Test** to open the panel, paste the five-VIN sample into the sample text box again, and click **Run**.
4. Confirm that the panel now reports **Reported as Medium**.
5. Click **Test** to close the panel, select **Or in the column header** again, and click **Done**.

Without the option, only the first two VINs sit close enough to the header to count, and the **High** rule needs five.

## Save the classifier

Click **Create classifier**.

A message confirms the save: **North American VIN saved — scans use it within a minute**. The classifier appears on the **Classifiers** tab with the type **Custom**, and its **Published** switch is on.

![Classifiers tab listing North American VIN with Published switched on](/images/accessanalyzer/26.1/tutorials/vin-classifier-saved.webp)

Access Analyzer publishes a new classifier when you save it, so you don't publish it separately. To stop scans from running it later, turn the **Published** switch off. See [Published and unpublished classifiers](../index.md#published-and-unpublished-classifiers).

The classifier now uses the `VIN check digit` checksum. On the **Checksums** tab, **Used by** shows **1** for that checksum, and you can't delete the checksum until you take it out of the classifier.

## Troubleshooting

| What you see | Cause | Fix |
|---|---|---|
| **passes a checksum** isn't in the filter menu | The detector has no pattern yet, or it already has a checksum filter. A detector takes one checksum. | Pick the **VIN** pattern first. To use a different checksum, change the existing checksum filter. |
| **VIN check digit** isn't in the checksum list | The checksum doesn't exist, or you saved it under another name. | Build it in [Build a VIN checksum](build-a-vin-checksum.md), or select the name you used. |
| The five-VIN sample reports **Medium**, not **High** | Fewer than five VINs count. **Or in the column header** is cleared, or the sample isn't read as a table. | Select **Or in the column header**. Check that the first line is the header and that at least 3 of the first 20 non-empty lines split into the same number of cells. |
| The **Test** panel reports "We couldn't run it" | The classifier is incomplete, such as a detector with no pattern or a rule with no condition. The panel lists each problem. | Fix each listed problem, and click **Run** again. |

## Next steps

- To run the classifier, select it on the **Classifiers** step of the **Create scan** wizard. See [How a scan picks its classifiers](../index.md#how-a-scan-picks-its-classifiers).
- To recognize more labels, add words to the **VIN labels** list. A change to a list applies from the next scan. See [Edit or delete a list](../lists.md#edit-or-delete-a-list).
- To learn what the other detectors, filters, and conditions do, see [Build a classifier](../build-a-classifier.md).
