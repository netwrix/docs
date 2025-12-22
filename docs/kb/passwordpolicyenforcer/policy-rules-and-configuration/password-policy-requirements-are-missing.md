---
description: >-
  After upgrading, users may not see password policy requirements in Netwrix
  Password Policy Enforcer. This article lists possible causes and step-by-step
  resolutions to restore password policy visibility.
keywords:
  - Password Policy Enforcer
  - PPE
  - password requirements
  - firewall rules
  - Duo
  - GlobalProtect
  - GUID
  - protocol mismatch
  - GPO
products:
  - password-policy-enforcer
visibility: public
sidebar_label: Password Policy Requirements Are Missing
tags: []
title: "Password Policy Requirements Are Missing"
knowledge_article_id: kA04u00000111JuCAI
---

# Password Policy Requirements Are Missing

## Symptom

You do not see any password policy requirements after the recent upgrade to Netwrix Password Policy Enforcer (PPE).

## Causes

One or more of the following causes may affect your Netwrix Password Policy Enforcer installation. Refer to the list of possible causes:

1. The Netwrix Password Policy Enforcer upgrade is not completed.
2. The Netwrix Password Policy Enforcer integration with third-party credential providers is misconfigured (e.g., Duo Security, GlobalProtect, etc.).
3. Firewall rules for Netwrix Password Policy Enforcer are missing or misconfigured.
4. In Netwrix Password Policy Enforcer v10.2 and newer, there's a protocol mismatch in the Netwrix Password Policy Enforcer Client and Server.

## Resolutions

Refer to the relevant resolution for the cause in your environment:

1. Review the upgrade checklist for Netwrix Password Policy Enforcer—refer to the following article for additional information: Upgrade Checklist in Netwrix Password Policy Enforcer.

2. Configure your third-party credential provider to work with Netwrix Password Policy Enforcer if necessary. Refer to the following articles for additional information:

   - For additional information on Cisco DUO Authentication setup, refer to the following article: Set Up Netwrix Password Policy Enforcer to Work with Cisco DUO Authentication.
   - Learn more about setting up GlobalProtect to work with Netwrix Password Policy Enforcer in [Enable SSO Wrapping for Third-Party Credentials with the Windows Registry ⸱ GlobalProtect](https://docs.paloaltonetworks.com/globalprotect/9-1/globalprotect-admin/globalprotect-apps/deploy-app-settings-transparently/deploy-app-settings-to-windows-endpoints/enable-sso-wrapping-for-third-party-credentials-with-the-windows-registry).

   > **NOTE:** Refer to the Password Policy Enforcer Client GUID provided below:
   >
   > ```Registry
   > {F347212E-AF6B-4726-92B3-E4DF3388D58C}
   > ```

   > **IMPORTANT:** If the PPE-specific GUID does not work, you can try to use the GenericProvider GUID instead:
   >
   > ```Registry
   > {25CBB996-92ED-457e-B28C-4774084BD562}
   > ```

3. Configure the firewall rules for Netwrix Password Policy Enforcer clients in your environment. Refer to the following article to learn more about required firewall rules in Netwrix Password Policy Enforcer environments: Installing Password Policy Client − Creating Firewall Rules for the Password Policy Client v10.2.

4. Review the protocol used in your Netwrix Password Policy Enforcer environment. Verify the GPO settings have propagated to the Netwrix Password Policy Enforcer Client servers. Refer to the following article for additional information: Communication Protocols in Password Policy Enforcer.

## Related articles

- Upgrade Checklist in Netwrix Password Policy Enforcer
- Set Up Netwrix Password Policy Enforcer to Work with Cisco DUO Authentication
- [Enable SSO Wrapping for Third-Party Credentials with the Windows Registry ⸱ GlobalProtect](https://docs.paloaltonetworks.com/globalprotect/9-1/globalprotect-admin/globalprotect-apps/deploy-app-settings-transparently/deploy-app-settings-to-windows-endpoints/enable-sso-wrapping-for-third-party-credentials-with-the-windows-registry)
- Installing Password Policy Client − Creating Firewall Rules for the Password Policy Client v10.2
- Communication Protocols in Password Policy Enforcer
