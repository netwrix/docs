---
title: "Exchange"
description: "Exchange"
sidebar_position: 40
---

# Exchange

The Exchange node is for configuring the settings needed to query Microsoft® Exchange Servers.
These settings are exclusive to the Access Analyzer for Exchange Solution.

![Exchange - Set up the connection](/images/accessanalyzer/12.0/admin/settings/exchange_1.webp)

The Exchange node is grayed-out by default. To enable these settings, install both Access Analyzer
MAPI CDO and Microsoft Exchange MAPI CDO on the Access Analyzer Console server. See the
[StealthAUDIT MAPI CDO Installation](/docs/accessanalyzer/12.0/install/mapicdo/installation.md)
topic for additional information.

After you meet the requirements, Access Analyzer enables the Exchange node for configuration.
Access Analyzer uses these settings to make MAPI connections to the Exchange Server for the
Mailbox, PublicFolder, Exchange2K, and ExchangePS Data Collectors. The ExchangePS Data Collector
also uses the Client Access Server field, or CAS, to make Remote PowerShell connections for
Exchange 2010 or newer. The data collectors apply these settings unless modified inside the job
query.

![Set up the connection](/images/accessanalyzer/12.0/admin/settings/exchange_3.webp)

The three options in the Exchange Connection Setting section at the top of the window are dependent
on which version of Exchange you audit.

- For Auditing Microsoft Exchange 2007 or Older Versions:
    - Select the radio button for System Attendant (2003 & 2007) – The System Attendant Account is
      built into Exchange 2007 and older versions and allows Access Analyzer to make the necessary
      MAPI connections.
- For Auditing Microsoft Exchange 2010 or Newer Versions:

    - Select either of the other two options:

        - Use the mailbox associated with the Windows account that Access Analyzer is run with –
          This option uses either the account logged into the Access Analyzer Console server or the
          account set to run the Access Analyzer application.
        - Exchange Mailbox (2010 and newer) – This option lets you specify an Exchange Mailbox
          Alias for MAPI connections.

            - Enter the Alias name in the textbox. The Alias needs to be an Exchange 2010 or newer
              mailbox, not a mail-enabled service account. However, this mailbox doesn't need
              rights on the Exchange Organization; it only needs to reside within it.

        - Enter the name of the physical CAS in the Client Access Server textbox. This server can be
          part of an array, but don't enter the name of a CAS Array. This should also be the
          Exchange CAS where you have enabled both Remote PowerShell and Windows Authentication on
          the PowerShell Virtual Directory.

:::info
After you properly configure the Exchange Connection Settings for the version of Exchange you
want to audit, test the settings.
:::


In the Test Exchange Connection Settings section:

- Enter a Mailbox Server with mailboxes you want to audit in the Exchange Server textbox.
- Click the Test Exchange settings link.

    ![Test Exchange Connection Setting](/images/accessanalyzer/12.0/admin/settings/exchange_4.webp)

If the Exchange Connection Settings are correct, an output field opens. At the bottom of the output
field, Access Analyzer states a mailbox count and displays a message that says, “You have
successfully connected to this Exchange Server.” Click OK.

![exchange_6](/images/accessanalyzer/12.0/admin/settings/exchange_6.webp)

The Cancel and Save buttons are in the lower-right corner of the Exchange view. These buttons become
enabled when you modify the Exchange global setting. Whenever you make changes at the
global level, click Save and then OK to confirm the changes. Otherwise, click Cancel if you didn't
intend to make changes.
