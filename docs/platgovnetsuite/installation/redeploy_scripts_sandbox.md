---
title: "Redeploy Scripts After Sandbox Refresh"
description: "Redeploy Scripts After Sandbox Refresh"
sidebar_position: 120
---

# Redeploy Scripts After Sandbox Refresh

NetSuite has removed the scheduled status on scripts after a sandbox is refreshed. This stops the
scripts required for environment compares, change requests built to push to production, and other
activities. This suitelet enables you to automatically reset all of your Platform Governance for
NetSuite scripts. If you have scheduled custom scripts in your sandbox, you must manually set the
status after a sandbox refresh.

1. Open your Sandbox.
2. Open **Customization** > **Scripting** > **Scripts**.
3. Set the Filter **Type** to **Suitelet** and the **Bundle ID** to **294336**.

    ![Find the Suitelet](/images/platgovnetsuite/release_notes/scripts.webp)

4. Click **View** by the **Strongpoint Reset Schedule Deployments** suitelet.
5. Open the **Deployments** tab.

    ![Open the Deployment tab](/images/platgovnetsuite/release_notes/script_deploy_tab.webp)

6. Click the Suitelet name: **Strongpoint Reset Schedule Deployments**.
7. Click on the Script **URL**.

    ![Click the Script URL](/images/platgovnetsuite/release_notes/script_deploy_url.webp)
