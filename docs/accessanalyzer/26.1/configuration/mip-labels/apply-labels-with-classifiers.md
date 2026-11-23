---
title: Apply labels with classifiers
description: Choose the MIP label each classifier severity applies, and control what happens to files that already have a label.
sidebar_position: 2
---

A classifier decides which MIP label a file gets. For each severity in a classifier, you can choose one label. When a Classification scan finds data at that severity, Access Analyzer applies the label to the file. This works for built-in classifiers and for your own.

## Before you begin

- Turn on MIP labeling, authenticate the Purview account, and sync the labels. See [Connect to Microsoft Purview](connect-to-microsoft-purview.md).
- You need the Admin role. Other roles don't see the label choices.
- To choose a label that encrypts, encryption must be ready. See [Labels that encrypt](labels-that-encrypt.md).

## Choose a label for a severity

The following steps make the built-in **Credit Cards** classifier apply a label named **Confidential** to files where it reports a **Medium** finding.

1. Go to **Classification > Classifiers**.
2. Click the classifier's name, such as **Credit Cards**. The classifier opens in the builder.
3. Under **Severities**, find a severity that has a rule, such as **Medium**.
4. In **MIP label**, select the label, such as **Confidential**. A label that encrypts reads **`<name>` (encrypts files)**.
5. Optionally, change the second list, which decides what happens when a file already has a more sensitive label. See [Files that already have a label](#files-that-already-have-a-label).
6. Click **Save changes**.

A message confirms the save. The next Classification scan that runs the classifier applies the label.

The **MIP label** list appears only on a severity that has a rule, and only in **Visual** mode. It offers **No label** and every synced label that scans can apply. To stop applying a label, select **No label** and save.

If a label you chose earlier is no longer usable, the list shows it as **`<name>` (no longer available)** or **A label that is no longer synced**. Scans skip that choice until you sync the label again or pick another one.

### Built-in classifiers

The rules of a built-in classifier are read-only, but its MIP labels aren't. When you open a built-in classifier, its banner reads "This classifier ships with the product, so its rules are read-only", and it adds "You can still choose the MIP label each severity applies." **Save changes** appears after you change a label.

A new version of Access Analyzer can update a built-in classifier's rules. The labels you chose for it stay as you set them.

If you make your own copy of a built-in classifier, choose the labels again on the copy. The copy runs in place of the built-in classifier, and it starts with no labels.

## How Access Analyzer chooses the label for a file

More than one classifier can report a finding on the same file. Access Analyzer applies one label per file:

- Each classifier contributes the label of the highest severity it found. If that severity has no label, the classifier contributes nothing, even when a lower severity has one.
- Among the labels the classifiers contribute, the one that Purview ranks as most sensitive wins.

For example, **Credit Cards** reports **Medium** on a file and applies **Confidential** for that severity. A second classifier reports **Critical** on the same file and applies **Highly Confidential**. Purview ranks **Highly Confidential** higher, so the file gets **Highly Confidential**.

## Files that already have a label

Access Analyzer compares the label it chose with the label that's already on the file:

| The file has | What Access Analyzer does |
|---|---|
| No label | Applies the label. |
| The same label | Leaves the file as it is. |
| A less sensitive label | Replaces it. |
| A more sensitive label | Keeps it, unless you choose to replace more sensitive labels. |
| A label that isn't among the synced labels | Keeps it, unless you choose to replace more sensitive labels. |
| A label that encrypts, when the chosen label doesn't | Keeps it. Access Analyzer never replaces a label that encrypts with one that doesn't. |

The second list beside **MIP label** sets the choice for one severity of one classifier:

| Option | What it does |
|---|---|
| **Use the global setting** | Follows **Replace a more sensitive label by default**. This is the default. |
| **Replace a more sensitive label** | Applies the chosen label even when the file has a more sensitive one. |
| **Keep a more sensitive label** | Leaves a more sensitive label in place. |

### Change the default for more sensitive labels

1. Go to **Settings > Classification**, and then click the **MIP labels** tab.
2. Under **Microsoft Information Protection**, turn **Replace a more sensitive label by default** on or off.

The switch is off by default, so a file keeps a label that Purview ranks as more sensitive. It saves as soon as you change it.

## Choose how labels are written to SharePoint

Access Analyzer can write a label to a SharePoint Online file in two ways.

1. Go to **Settings > Classification**, and then click the **MIP labels** tab.
2. Under **SharePoint labels**, select a method:

   | Method | What it does |
   |---|---|
   | **Upload a labeled copy** | Downloads the file, writes the label, and uploads the file as a new version. It makes no metered Microsoft call, and it labels Office files only. This is the default. |
   | **Microsoft Graph** | Asks SharePoint to apply the label. Microsoft bills each call, and PDFs are labeled too. When Microsoft Graph refuses a file, Access Analyzer uploads a labeled copy instead. |

3. Click **Save**.

:::note
With **Microsoft Graph**, a dry run still checks each file the way **Upload a labeled copy** does. A PDF with a label that encrypts shows as **Not an Office file** in the dry run.
:::

## Review what was labeled

Open the scan execution, and then click the **MIP labels** tab. It lists each file a label was chosen for, the label, and what happened. See [MIP labels tab](../../admin/scans/scan-executions.md#mip-labels-tab).
