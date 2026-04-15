---
title: "CrowdStrike"
description: "CrowdStrike"
sidebar_position: 20
---

# CrowdStrike

CrowdStrike

# CrowdStrike

## Overview

The CrowdStrike Manage Remote Systems integration is available from Privilege Secure version 2.11.
This allows machines to be protected and access elevated without direct line of site. Privilege
Secure integrates to the CrowdStrike end point and is able to perform these tasks without the need
for the end machine being on the domain.

**NOTE:** Remote Computer Management and Intelligent Session Capture are independent on each other.
Intelligent Session Capture should work regardless of Remote Computer Management. Enabling Remote
Computer Management will cause the "EDR Integration" drop down menu to appear on endpoints.

## CrowdStrike Configuration

Login to CrowdStrike ([https://falcon.crowdstrike.com](https://falcon.crowdstrike.com)).

## API Configuration

Next the API access needs to be configured for Privilege Secure access.

**Step 1 –** In the Support menu select the "API Clients and Keys" option:

![Screen_Shot_2021-07-19_at_2.39.L57_PM.webp](/images/privilegesecure/4.2/discovery/integrations/edr/4404584855447_screen_shot_2021-07-19_at_2.39.57_pm_135x268.webp)

**Step 2 –** Add an API Client

![Screen_Shot_2021-07-19_at_2.42.L41_PM.webp](/images/privilegesecure/4.2/discovery/integrations/edr/4404584855447_screen_shot_2021-07-19_at_2.42.41_pm.webp)

**Step 3 –** Enter a suitable Client Name and Description then add select the following check boxes:

- Hosts                                           Read
- Real time response (admin)      Write
- Real time response                    Read

Once added the details of the API will be provided (Client ID, Secret and Base URL). These should be
noted for entry into Privilege Secure.

## Privilege Secure Configuration

With 2.17 and later multiple configurations for EDR solutions can be created. This is under the
Server Configuration:

![Screen_Shot_2022-10-03_at_1.17.L39_PM.webp](/images/privilegesecure/4.2/discovery/integrations/edr/4404584855447_screen_shot_2022-10-03_at_1.17.39_pm.webp)

A new EDR configuration can then be created:

![Screen_Shot_2022-10-03_at_1.15.L31_PM.webp](/images/privilegesecure/4.2/discovery/integrations/edr/4404584855447_screen_shot_2022-10-03_at_1.15.31_pm.webp)

The configuration should be named. This name will be referred to from the machine configuration:

![Screen_Shot_2022-10-03_at_1.15.L45_PM.webp](/images/privilegesecure/4.2/discovery/integrations/edr/4404584855447_screen_shot_2022-10-03_at_1.15.45_pm.webp)

The configuration can be tested when the appropriate entries have been entered:

![Screen_Shot_2021-07-19_at_3.09.L13_PM.webp](/images/privilegesecure/4.2/discovery/integrations/edr/4404584855447_screen_shot_2021-07-19_at_3.09.13_pm.webp)

Individual machines can now be assigned to the appropriate EDR configuration, either via the UI or
via Quickstart: *The EDR integration drop down is tied to Remote Systems Management. Intelligent
Session Capture should work regardless if enabled.*

![Screen_Shot_2022-10-03_at_1.25.L07_PM.webp](/images/privilegesecure/4.2/discovery/integrations/edr/4404584855447_screen_shot_2022-10-03_at_1.25.07_pm.webp)

## Prior to 2.17

To set up Privilege Secure to use the integration created with CrowdStrike the Server Configuration
page should be accessed within Privilege Secure.

Complete the CrowdStrike EDR Integration panel with the details noted for the API created in
CrowdStrike Falcon

![Screen_Shot_2021-07-19_at_3.08.L26_PM.webp](/images/privilegesecure/4.2/discovery/integrations/edr/4404584855447_screen_shot_2021-07-19_at_3.08.26_pm.webp)

The connection can then be tested.

![Screen_Shot_2021-07-19_at_3.09.L13_PM.webp](/images/privilegesecure/4.2/discovery/integrations/edr/4404584855447_screen_shot_2021-07-19_at_3.09.13_pm.webp)
