---
title: "How can I find the name of a GPO located within a PP Log file?"
description: "How can I find the name of a GPO located within a PP Log file?"
sidebar_position: 10
---

# How can I find the name of a GPO located within a PP Log file?

Use Powershell to reverse from a GPO GUID to a GPO name like this:

Import-Module GroupPolicy

Get-GPO -Guid 31a09564-cd4a-4520-98fa-446a2af23b4b -Domain sales.contoso.com


