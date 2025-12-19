---
title: "Enforce Password Reset with Azure Password Writeback"
description: "Enforce Password Reset with Azure Password Writeback"
sidebar_position: 40
---

# Enforce Password Reset with Azure Password Writeback

You can use Password Policy Enforcer to enforce password policies for passwords reset from Microsoft
Entra ID and O365 by enabling password writeback in Microsoft Entra ID. See the
[How does self-service password reset writeback work in Microsoft Entra ID?](https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-sspr-writeback)
Microsoft knowledge base article for additional information on password writeback in Microsoft Entra
ID. Password writeback sends all new passwords from Microsoft Entra ID to an available, on-premises
domain controller to check with Password Policy Enforcer. This happens while the user is resetting
their password. See the
[Tutorial: Enable Microsoft Entra self-service password reset writeback to an on-premises environment](https://docs.microsoft.com/en-us/azure/active-directory/authentication/tutorial-enable-sspr-writeback)
and
[How it works: Microsoft Entra self-service password reset](https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-sspr-howitworks#how-it-works-microsoft-entra-self-service-password-reset) Microsoft
knowledge base articles for additional information on password writeback for Microsoft Entra ID.
