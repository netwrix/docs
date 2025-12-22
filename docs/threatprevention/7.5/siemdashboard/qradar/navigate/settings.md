---
title: "Settings"
description: "Settings"
sidebar_position: 110
---

# Settings

You must save the QRadar SEC token to the Settings interface of the Active Directory App for QRadar.

Click the gear icon next to the Search box to open the Settings interface.

![Settings interface](/images/threatprevention/7.5/siemdashboard/qradar/settings.webp)

The More information link opens the IBM Knowledge Center with information on generating the QRadar
SEC token. Once the token is generated, copy and paste it here and click Save.

**Honey Accounts**

An additional feature is to add Honey Accounts to be monitored.

- Use the Add New Account button to enter a honey account [domain\username] in the pop-up window.
  There is no limit on the number of honey accounts to be monitored.
- The Remove Selected button will remove the selected account from the Honey Accounts monitored
  list.
- After making changes to the list, click **Save**.

Authentication activity by a honey account will generate an INTERCEPT: Honey Accounts Offense. See
the [INTERCEPT Offenses in QRadar](/docs/threatprevention/7.5/siemdashboard/qradar/offenses.md) topic for additional information.
