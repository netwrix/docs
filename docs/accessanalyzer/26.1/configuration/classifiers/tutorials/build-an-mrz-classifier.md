---
title: Build an MRZ classifier
description: Build a custom classifier that finds passport machine-readable zones with two patterns, a checksum on a named group, and a Close together rule.
sidebar_position: 4
---

In this tutorial, you build a classifier that finds the machine-readable zone (MRZ) of a passport. The MRZ is the block of two lines at the bottom of the photo page, made of capital letters, digits, and the filler `<`. The classifier reports **Medium** when a file has an MRZ line 2 with a correct document number check digit, and **High** when line 1 also sits next to it. It uses two patterns, two detectors, and a checksum. You test the classifier on four samples before you save it.

Passport copies often sit in human resources and onboarding folders as scans or photos. Access Analyzer reads the text in documents, scanned passports, and ID images, so the classifier finds an MRZ in either form.

## How the classifier works

A passport MRZ has two lines of 44 characters. The International Civil Aviation Organization (ICAO) defines the layout in Doc 9303, Part 4. The following sample is the ICAO specimen for Utopia (`UTO`), a fictional state:

```text
P<UTOERIKSSON<<ANNA<MARIA<<<<<<<<<<<<<<<<<<<
L898902C36UTO7408122F1204159ZE184226B<<<<<10
```

Line 1 holds the document code `P`, a type character, the issuing state, and the holder's name. Line 2 holds the document number, the nationality, the dates, and the check digits that verify them. The filler `<` pads each field to its full length.

The last character of line 2 is a composite check digit. It covers fields that aren't next to each other, and a checksum checks one unbroken run of characters, so a checksum can't check it. The classifier checks the document number and the check digit after it, the first 10 characters of line 2. It counts a line 2 as an MRZ only when that check digit is correct. It uses four parts:

| Part | Name | What it does |
|---|---|---|
| Pattern | `MRZ line 2` | Finds a 44-character line 2 and captures its document number and check digit, the first 10 characters, in a named group. |
| Pattern | `MRZ line 1` | Finds a 44-character line 1 that starts with `P`. |
| Checksum | `MRZ check digit` | Keeps a line 2 only when the check digit after its document number is correct. |
| Classifier | `Passport MRZ` | Reads both patterns with two detectors and sets the severity. |

The classifier reports **Medium** when the line 2 detector finds a line with a correct check digit. It reports **High** when a line 1 also sits close to that line 2.

This classifier has no list of label words, unlike the one in [Build a VIN classifier](build-a-vin-classifier.md). A VIN is 17 letters and digits, a shape that many other values share, so the VIN classifier requires a label such as VIN nearby. An MRZ line has a shape that almost no other text has: 44 capital letters, digits, and fillers, with digits at fixed positions. A passport also prints no label beside its MRZ. The shape and the check digit carry the evidence instead.

## Before you start

- Sign in to Access Analyzer with the Admin role.
- Build the `MRZ check digit` checksum in [Build an MRZ checksum](build-an-mrz-checksum.md). Confirm that it appears on the **Checksums** tab.

You don't need a source or a scan, because the **Test** panel runs the classifier on text you paste. For every setting in the builder, see [Build a classifier](../build-a-classifier.md).

## Create the MRZ line 2 pattern

The line 2 pattern matches the 44 characters of line 2. It wraps the document number and its check digit in a named capture group, so the checksum reads only those 10 characters.

1. Go to **Classification > Classifiers** and select the **Patterns** tab.
2. Click **Create pattern**.
3. In **Name**, enter `MRZ line 2`.
4. In **Description**, enter `Line 2 of a passport machine-readable zone. The docnum group holds the document number and its check digit.`
5. Leave **Regex** selected.
6. In **Regex pattern**, enter the following expression:

   ```text
   \b(?P<docnum>[A-Z0-9<]{9}\d)[A-Z<]{3}\d{7}[MFX<]\d{7}[A-Z0-9<]{14}[\d<]\d\b
   ```

7. Click **Create pattern**.

A message confirms the save: **Pattern "MRZ line 2" created**.

The expression matches line 2 one field at a time:

| Part | Characters | Matches |
|---|---|---|
| `\b` | Start | A word boundary at the start, so the pattern doesn't match inside a longer token. |
| `(?P<docnum>` | Group start | Opens a named capture group called `docnum`. |
| `[A-Z0-9<]{9}` | 1 to 9 | The document number: nine capital letters, digits, or fillers. |
| `\d` | 10 | The document number check digit. |
| `)` | Group end | Closes the group, so it holds characters 1 to 10. |
| `[A-Z<]{3}` | 11 to 13 | The nationality: three capital letters or fillers. |
| `\d{7}` | 14 to 20 | The date of birth (six digits) and its check digit. |
| `[MFX<]` | 21 | The sex: `M`, `F`, `X`, or a filler. |
| `\d{7}` | 22 to 28 | The expiry date (six digits) and its check digit. |
| `[A-Z0-9<]{14}` | 29 to 42 | The optional data: 14 capital letters, digits, or fillers. |
| `[\d<]` | 43 | The optional data check digit: a digit or a filler. |
| `\d` | 44 | The composite check digit. |
| `\b` | End | A word boundary at the end. |

The group is what lets the checksum work. When a match captures exactly one named group, a checksum checks only that group's text. Otherwise, it checks the whole match, which here is all 44 characters, and every line fails. The name `docnum` is yours to choose. For the expressions Access Analyzer accepts, see [Regular expression dialect](../patterns.md#regular-expression-dialect).

:::note
The pattern is case-sensitive, so it finds only MRZ lines written in capital letters.
:::

### Test the line 2 pattern

Before you build the classifier, check the pattern on the specimen.

1. On the **Patterns** tab, enter `MRZ line 2` in **Search patterns**.
2. Open the **Actions** menu for **MRZ line 2** and click **Test pattern**.
3. Replace the prefilled **Sample text** with both lines of the specimen:

   ```text
   P<UTOERIKSSON<<ANNA<MARIA<<<<<<<<<<<<<<<<<<<
   L898902C36UTO7408122F1204159ZE184226B<<<<<10
   ```

4. Leave **Line by line** selected, and click **Test**.

The dialog shades line 2 green and line 1 red, and it reports "1 of 2 lines matched". Line 1 isn't a match because this pattern finds only line 2. The dialog shows the whole expression, so you can compare it with the one in this tutorial. Click **Close** to leave the dialog.

![Test Pattern dialog with the MRZ line 2 expression, line 1 shaded red as no match, and line 2 shaded green as a match](/images/accessanalyzer/26.1/tutorials/mrz-classifier-test-pattern.webp)

## Create the MRZ line 1 pattern

The line 1 pattern matches the 44 characters of line 1. Line 1 has no check digit, so this pattern has no group.

1. On the **Patterns** tab, click **Create pattern**.
2. In **Name**, enter `MRZ line 1`.
3. In **Description**, enter `Line 1 of a passport machine-readable zone: the document code, issuing state, and name.`
4. Leave **Regex** selected.
5. In **Regex pattern**, enter the following expression:

   ```text
   \bP[A-Z<][A-Z<]{3}[A-Z<]{39}
   ```

6. Click **Create pattern**.

![Create pattern panel with the MRZ line 1 regular expression](/images/accessanalyzer/26.1/tutorials/mrz-classifier-create-line-1-pattern.webp)

A message confirms the save: **Pattern "MRZ line 1" created**.

The expression has these parts:

| Part | Characters | Matches |
|---|---|---|
| `\b` | Start | A word boundary at the start. |
| `P` | 1 | The document code for a passport. |
| `[A-Z<]` | 2 | The type character: a capital letter or a filler. It's often a filler. |
| `[A-Z<]{3}` | 3 to 5 | The issuing state: a three-character code, padded with fillers when it's shorter. |
| `[A-Z<]{39}` | 6 to 44 | The name: the surname, `<<`, the given names, and fillers. |

:::note
This expression has no word boundary at the end. A word boundary needs a word character on one side, and the filler `<` isn't one. A boundary at the end would reject every line 1 that ends with a filler, which is most of them.
:::

## Create the classifier

The classifier builder lays the classifier out from top to bottom in the order a scan evaluates it. For what each section does, see [Parts of a classifier](../build-a-classifier.md#parts-of-a-classifier).

### Name the classifier

1. Select the **Classifiers** tab and click **New classifier**.
2. In the box that reads **Untitled classifier**, enter `Passport MRZ`.
3. Optionally, click **Details**, and in **Description** enter `Finds the machine-readable zone of a passport.`

### Add the line 2 detector

A detector finds values with a pattern and narrows them with filters. The line 2 detector reads the `MRZ line 2` pattern and keeps only the lines with a correct check digit.

1. Under **Detectors**, click **Add detector**, and then click **Patterns**.
2. In **Detector name**, enter `MRZ line 2`.
3. Leave **One pattern** selected, and in **Pick a pattern**, select **MRZ line 2**.
4. Click **Add filter** to open the filters.
5. In the filters, click **Add filter**, and then click **passes a checksum**.
6. In the checksum list, which reads **Pick a checksum…**, select **MRZ check digit**.
7. Leave **Found when** set to **Any match passes the filters**.
8. Click **Done**.

Pick the pattern first. The **passes a checksum** filter appears in the filter menu only after the detector has a pattern.

The checksum list shows the built-in checksums first, each marked **(built-in)**. Checksums you built follow them, so **MRZ check digit** is near the end. The detector now summarizes its filter: **passes checksum MRZ check digit**. Because the pattern has one named group, the checksum reads the 10 characters of the document number and its check digit, not the whole line.

### Add the line 1 detector

1. Click **Add detector**, and then click **Patterns**.
2. In **Detector name**, enter `MRZ line 1`.
3. Leave **One pattern** selected, and in **Pick a pattern**, select **MRZ line 1**.

Don't add a filter. Line 1 has no check digit, so this detector has no checksum.

![Detectors section with the MRZ line 2 detector using the MRZ check digit checksum and the MRZ line 1 detector with no filter](/images/accessanalyzer/26.1/tutorials/mrz-classifier-detectors.webp)

:::note
One detector has a checksum and the other has none. That's allowed because the detectors read different patterns. Every detector that reads the same pattern must use the same checksum.
:::

### Add the severity rules

The classifier reports the highest severity whose rule holds. The **Medium** rule reads the line 2 detector. The **High** rule reads both detectors.

1. Under **Medium**, click **Add rule**.
2. Click **Add condition**, and then click **Detector test**.
3. Confirm that the condition reads **MRZ line 2** and **found**.
4. Under **High**, click **Add rule**.
5. Click **Add condition**, and then click **Close together**.
6. Confirm that the condition reads **one match from each of** and lists **MRZ line 2** and **MRZ line 1**.
7. Change the number after **within** from `100` to `10`.

The **Close together** condition holds when each listed detector has a match and all the matches fall within the distance you set. The distance counts only the characters between the matches, from the end of one to the start of the next. The 44 characters of each line don't count.

Line 1 and line 2 are one line break apart, which is one or two characters. A distance of 10 leaves room for a blank line or a few spaces between them. When the two lines are in different parts of a file, they're too far apart, and the file stays at **Medium**.

Each rule counts only the matches that passed their detector's filters. A line 2 with a wrong check digit counts for neither rule, so a line 1 beside it doesn't raise the severity. A line 1 on its own reports nothing, because only the **High** rule reads it, and that rule also needs a line 2.

![Severities section with a Medium rule for the MRZ line 2 detector and a High rule that needs both MRZ lines within 10 characters of each other](/images/accessanalyzer/26.1/tutorials/mrz-classifier-severities.webp)

## Test the classifier

The **Test** panel runs the classifier you're editing on sample text with the same engine a scan uses. The names and numbers in these samples are fictional.

1. Click **Test** at the right edge of the builder. The **Try it on a sample** panel opens.
2. Leave the file path and the status flags empty.
3. Run each of the following samples: paste the text into the sample text box, replacing the previous text, and click **Run**.

### Test a full MRZ

```text
P<UTOERIKSSON<<ANNA<MARIA<<<<<<<<<<<<<<<<<<<
L898902C36UTO7408122F1204159ZE184226B<<<<<10
```

The panel reports **Reported as High**, and its **Found** line lists a match for each line. Line 2 passes the check digit, so the **Medium** rule holds. Line 1 sits one line break before it, so the **High** rule holds too, and the classifier reports the higher severity.

![Test panel reporting High for the full specimen MRZ](/images/accessanalyzer/26.1/tutorials/mrz-classifier-test-high.webp)

### Test line 2 alone

```text
L898902C36UTO7408122F1204159ZE184226B<<<<<10
```

The panel reports **Reported as Medium**. Line 2 passes the check digit, so the **Medium** rule holds. No line 1 is near it, so the **High** rule doesn't hold.

![Test panel reporting Medium for line 2 alone](/images/accessanalyzer/26.1/tutorials/mrz-classifier-test-medium.webp)

### Test a wrong document number check digit

```text
L898902C37UTO7408122F1204159ZE184226B<<<<<10
```

The panel reports **Not reported: nothing matched**, and it lists "MRZ line 2: 1 match failed the checksum". The line has the right shape, but its document number is `L898902C3`, the rule computes a check digit of 6, and the line has 7.

![Test panel reporting that line 2 failed the checksum](/images/accessanalyzer/26.1/tutorials/mrz-classifier-test-wrong-check-digit.webp)

### Test text with no MRZ

```text
New hire checklist
Passport copy received: yes
Passport number: L898902C3
```

The panel reports **Not reported: nothing matched**. The text mentions a passport copy and a passport number, but it has no 44-character line, so neither pattern matches.

To see which part of the classifier decided each result, click **Show decision tree**. See [Test a classifier](../build-a-classifier.md#test-a-classifier).

## Save the classifier

Click **Create classifier**.

A message confirms the save: **Passport MRZ saved — scans use it within a minute**. The classifier appears on the **Classifiers** tab with the type **Custom**, and its **Published** switch is on.

![Classifiers tab listing Passport MRZ with Published switched on](/images/accessanalyzer/26.1/tutorials/mrz-classifier-saved.webp)

Access Analyzer publishes a new classifier when you save it, so you don't publish it separately. To stop scans from running it later, turn the **Published** switch off. See [Published and unpublished classifiers](../index.md#published-and-unpublished-classifiers).

The classifier now uses the `MRZ check digit` checksum. On the **Checksums** tab, **Used by** shows **1** for that checksum, and you can't delete the checksum until you take it out of the classifier.

## Other MRZ layouts

This tutorial covers passports. ID cards and visas use other MRZ layouts: ID cards have three lines of 30 characters or two lines of 36, and visas have two lines of 44 or 36 characters. The check digit rule is the same in every layout, but the fields sit at other positions, so each layout needs its own patterns. To reuse the `MRZ check digit` checksum, put a named group around a field and the check digit that follows it, as the line 2 pattern does with the document number.

## Troubleshooting

| What you see | Cause | Fix |
|---|---|---|
| **passes a checksum** isn't in the filter menu | The detector has no pattern yet, or it already has a checksum filter. A detector takes one checksum. | Pick the **MRZ line 2** pattern first. To use a different checksum, change the existing checksum filter. |
| **MRZ check digit** isn't in the checksum list | The checksum doesn't exist, or you saved it under another name. | Build it in [Build an MRZ checksum](build-an-mrz-checksum.md), or select the name you used. |
| The panel lists "MRZ line 2: 1 match failed the checksum" for the full MRZ sample | The pattern has no named group, or has two or more, so the checksum reads all 44 characters. | Ensure that the **MRZ line 2** expression has exactly one named group, `(?P<docnum>…)`, around the first 10 characters. |
| The full MRZ sample reports **Medium**, not **High** | The line 1 detector found nothing, or the two lines are farther apart than the distance in the **Close together** condition. | Check the **Found** line. If it lists only one match, test the **MRZ line 1** pattern on the specimen. If it lists two, raise the distance or remove the text between the lines. |

## Next steps

- To run the classifier, select it on the **Classifiers** step of the **Create scan** wizard. See [How a scan picks its classifiers](../index.md#how-a-scan-picks-its-classifiers).
- To learn what the other detectors, filters, and conditions do, see [Build a classifier](../build-a-classifier.md).
