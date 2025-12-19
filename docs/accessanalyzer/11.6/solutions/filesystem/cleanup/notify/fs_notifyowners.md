---
title: "FS_NotifyOwners Job"
description: "FS_NotifyOwners Job"
sidebar_position: 10
---

# FS_NotifyOwners Job

The FS_NotifyOwners job is comprised of the SendMail action module that uses the data collected by
the **FileSystem** > **Cleanup** > **1. Cleanup Assessment** > **FS_CleanupAssessment** job to
contact owners of shares containing data for which cleanup is pending.

## Action Tasks for the FS_NotifyOwners Job

Navigate to the **FileSystem** > **Cleanup** > **2. Notify** > **FS_NotifyOwners** > **Configure**
node and select **Actions** to view the action tasks.

:::warning
Do not enable the action unless it is required. Disable the action after execution to
prevent making unintended and potentially harmful changes to Active Directory.
:::


![Action Tasks for the FS_NotifyOwners Job](/images/accessanalyzer/11.6/solutions/filesystem/cleanup/notify/notifyownersaction.webp)

The following action task is deselected by default.

- Notify Owners – Notifies share owners using SendMail module

Prior to running the FS_NotifyOwners job, it is necessary to select the **Notify Owners** task and
configure the properties for the SendMail action module. See the
[Configure the FS_NotifyOwners Action](#configure-the-fs_notifyowners-action) topic for additional
information.

### Configure the FS_NotifyOwners Action

The recipients and the text of the email can be customized on the Properties page within the Send
Mail Action Module Wizard. The
[1. Cleanup Assessment > FS_CleanupAssessment Job](/docs/accessanalyzer/11.6/solutions/filesystem/cleanup/fs_cleanupassessment.md)
must be run before the Send Mail Action Module Wizard can be opened. Follow these steps to customize
the Notify Owners action task.

**Step 1 –** Navigate to the job’s **Configure** node and select **Actions**.

**Step 2 –** In the Action Selection view, select the desired action task and click **Action
Properties** to view the Action Properties page.

**Step 3 –** Click **Configure Action** to open the Send Mail Action Module Wizard.

:::tip
Remember, the FS_CleanupAssessment job must be run before the Send Mail Action Module Wizard can
be opened.
:::


![Send Mail Action Module Wizard Properties page](/images/accessanalyzer/11.6/solutions/filesystem/cleanup/notify/sendmailwizardproperties.webp)

**Step 4 –** On the Properties page, customize the following fields:

- Carbon copy (CC) – Add the recipient emails within this field

    :::note
    Email recipients may also be added within the Notification node under the Global
    Settings pane.
    :::


![Send Mail Action Module Wizard Message page](/images/accessanalyzer/11.6/solutions/filesystem/cleanup/notify/sendmailwizardmessage.webp)

**Step 5 –** On the Message page, customize the following fields:

- Subject – Enter text for the display line on delivered emails
- Text Entry Box – Enter text to display on the body of each email

**Step 6 –** Navigate to the Summary page, click **Finish** to save any setting modifications or
click **Cancel** if no changes were made. Then click **OK** to close the Send Mail Action Module
Wizard.

The action task has been customized. It can now be selected and run as part of the FS_NotifyOwners
job.
