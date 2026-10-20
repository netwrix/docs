---
title: "Carbon Black"
description: "Carbon Black"
sidebar_position: 10
---

# Carbon Black

Carbon Black

# Carbon Black

## Overview

The Carbon Black integration is available from Privilege Secure version 2.8 and later. This allows
machines to be protected and access elevated with out direct line of site. Privilege Secure
integrates to the Carbon Black end point and is able to perform these tasks without the need for the
end machine being on the domain.

Follow the steps to configure Carbon Black integration.

**Step 1 –** Login to Carbon Black Cloud.

**Step 2 –** Next the API access needs to be granted to Privilege Secure. This is done using the API
Access under Settings within Carbon Black Cloud and click the API Access details under settings.

![image.webp](/images/privilegesecure/4.2/discovery/integrations/edr/360061787514_image_105x410.webp)

Note the ORG KEY at the top left.

![Screen_Shot_2021-03-02_at_6.36.L07_PM.webp](/images/privilegesecure/4.2/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_6.36.07_pm_267x140.webp)

**Step 3 –** Create two API Keys: One is Live Response API and one is the Device API.

## Access Level Creation

Follow the steps for access level creation.

**Step 1 –** First, a specific access level for one of these keys must be created.

**Step 2 –** Click the **Access Levels** selection in the top left.

![Screen_Shot_2021-03-02_at_7.06.L12_PM.webp](/images/privilegesecure/4.2/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_7.06.12_pm_375x183.webp)

**Step 3 –** The Add Access Level button should be clicked to start the creation of the custom
access level.

![Screen_Shot_2021-03-02_at_7.06.L55_PM.webp](/images/privilegesecure/4.2/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_7.06.55_pm.webp)

**Step 4 –** Enter the details to identify the new Access Level.

![Screen_Shot_2021-03-02_at_7.04.L16_PM.webp](/images/privilegesecure/4.2/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_7.04.16_pm.webp)

**Step 5 –** The following access level items should be selected - CHECK THE POLICY IS NEEDED OR NOT
XXXX\*\*\*\*\*\*\*\*

![Screen_Shot_2022-02-11_at_11.04.L26_AM.webp](/images/privilegesecure/4.2/discovery/integrations/edr/360061787514_screen_shot_2022-02-11_at_11.04.26_am.webp)

**Step 6 –** Click the **Save** button to save the custom access level.

## API Keys Creation

Follow the steps to create API keys.

**Step 1 –** Click the Add API Key button in the top right corner.

![Screen_Shot_2021-03-02_at_6.42.L09_PM.webp](/images/privilegesecure/4.2/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_6.42.09_pm.webp)

**Step 2 –** Enter the details for the Live Response API.

![Screen_Shot_2021-03-02_at_6.48.L23_PM.webp](/images/privilegesecure/4.2/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_6.48.23_pm_417x412.webp)

**Step 3 –** Click **Save** and note the API ID and API Secret Key.

![Screen_Shot_2021-03-02_at_6.51.L34_PM.webp](/images/privilegesecure/4.2/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_6.51.34_pm_323x185.webp)

**Step 4 –** Create a second API Key using the custom access level previously created.

![Screen_Shot_2021-03-02_at_7.15.L12_PM.webp](/images/privilegesecure/4.2/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_7.15.12_pm_428x421.webp)

**Step 5 –** Click **Save** and again the API ID and Secret Key should be noted.

![Screen_Shot_2021-03-02_at_6.51.L34_PM.webp](/images/privilegesecure/4.2/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_6.51.34_pm_323x185.webp)

## Privilege Secure Configuration

Follow the steps for configuration.

**Step 1 –** To set up Privilege Secure to use the integration created with Carbon Black, the Server
Configuration page should be accessed within Privilege Secure.

![Screen_Shot_2021-03-02_at_7.20.L53_PM.webp](/images/privilegesecure/4.2/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_7.20.53_pm_486x402.webp)

**Step 2 –** Complete the Carbon Black EDR Integration panel with the details noted for the APIs
created in Carbon Black Cloud.

![Screen_Shot_2021-03-02_at_7.22.L31_PM.webp](/images/privilegesecure/4.2/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_7.22.31_pm.webp)

**Step 3 –** Test the connection and a successful response should be returned.

![Screen_Shot_2021-03-02_at_7.24.L15_PM.webp](/images/privilegesecure/4.2/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_7.24.15_pm.webp)
