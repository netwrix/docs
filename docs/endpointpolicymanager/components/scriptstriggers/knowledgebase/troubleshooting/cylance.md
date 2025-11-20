---
title: "What must I do in Cylance such that it will run Powershell scripts via Endpoint Policy Scripts Manager?"
description: "What must I do in Cylance such that it will run Powershell scripts via Endpoint Policy Scripts Manager?"
sidebar_position: 10
---

# What must I do in Cylance such that it will run Powershell scripts via Endpoint Policy Scripts Manager?

If you want to use Netwrix Endpoint Policy Manager (formerly PolicyPak) Scripts AND Cylance together
to run Powershell scripts.. then..

Log into the Cylance console. Select Protection from the menu, then click Script control.

Select one or more scripts from the list. Click SAFE. These scripts are added to the Global
Safelist, and Endpoint Policy Manager Scripts will run PowerShell scripts as expected.

:::note
This note came from Cylance and is not validated by Endpoint Policy Manager.

:::


