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
SEC token. After the token is generated, copy and paste it here, then click **Save**.

**Honey Accounts**

You can add Honey Accounts to the monitored list. Authentication activity by these accounts generates an INTERCEPT: Honey Accounts Offense.

- Click **Add New Account** to enter a Honey Account in the format `[domain\username]`. There's no limit to the number of Honey Accounts you can monitor.
- Click **Remove Selected** to remove a Honey Account from the list.
- Click **Save** to apply your changes.

For more information, see the [INTERCEPT Offenses in QRadar](/docs/threatprevention/7.5/siemdashboard/qradar/offenses.md) topic.
