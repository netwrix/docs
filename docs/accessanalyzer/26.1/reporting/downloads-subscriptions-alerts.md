---
title: Downloads, Subscriptions, and Alerts
description: Save question results and dashboards as files, have a dashboard emailed on a schedule, and get an email alert when a question returns results.
sidebar_position: 4
---

Everyone who can use Reporting can download results and set up subscriptions and alerts. This works on the Netwrix dashboards as well as on your own questions and dashboards.

## Download Results

- **A question.** Click **Download results** next to the results, then select a format: CSV, Excel (XLSX), or JSON for the data, or PNG for a chart.
- **One card on a dashboard.** Point to the card, open its three-dot menu, and select **Download results**.
- **A whole dashboard.** Click **Download as PDF** at the top of the dashboard.

## Email a Dashboard on a Schedule

A subscription emails a dashboard's results on a schedule, such as every Monday morning. Recipients don't need an Access Analyzer account to receive it.

1. Open the dashboard.
2. Click the three-dot menu at the top right and select **Subscriptions**.
3. Click **Email it**.
4. In **To:**, add people by name, or enter email addresses.
5. Under **Sent**, choose how often and when.
6. To include the results as files, turn on **Attach results**.
7. Click **Done**.

To test the subscription, click **Send email now** before you click **Done**. Reporting sends email only to addresses in the domains your organization approved. If you add an address outside them, Reporting refuses the subscription and lists the addresses it doesn't allow.

Links in a subscription email open the dashboard inside Access Analyzer. To follow them, a recipient needs an Access Analyzer account with the Admin or Viewer role.

## Get an Alert When a Question Has Results

An alert checks a saved question on a schedule and emails you when its results meet the condition you set. For example, save a question on **File System Objects** that lists the folders where **Is World Readable** is true, and set an alert that emails the storage team whenever it returns rows.

1. Open the saved question.
2. Click the three-dot menu and select **Create an alert**.
3. Choose what triggers the alert.
4. Choose how often Reporting checks the question.
5. Add recipients.
6. Save the alert.

Alerts use the same approved domains as subscriptions.

## When Email Isn't Set Up

Netwrix support sets up email for Reporting, including the list of approved domains; there's no setting for it in Access Analyzer. Until it's set up, the dashboard menu shows **Can't send subscriptions** instead of **Subscriptions**, or the subscription panel shows **Set up email** instead of **Email it**. **Set up email** leads to an administration page that doesn't open in Reporting. To turn on email, or to add or remove an approved domain, ask an Admin to contact Netwrix support.
