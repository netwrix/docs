---
title: "What happens if I try to use Endpoint Policy ManagerGroup Policy Compliance Reporter in unlicensed places? What happens if the Endpoint Policy Manager Group Policy Compliance Reporter license expires?"
description: "What happens if I try to use Endpoint Policy ManagerGroup Policy Compliance Reporter in unlicensed places? What happens if the Endpoint Policy Manager Group Policy Compliance Reporter license expires?"
sidebar_position: 90
---

# What happens if I try to use Endpoint Policy ManagerGroup Policy Compliance Reporter in unlicensed places? What happens if the Endpoint Policy Manager Group Policy Compliance Reporter license expires?

If you try to request reports from "unlicensed places" here is what happens:

If that unlicensed place IS licensed for Netwrix Endpoint Policy Manager (formerly PolicyPak)
On-Prem, you will get data back only for Endpoint Policy Manager Application Manager.

If that unlicensed place is NOT licensed for Endpoint Policy Manager On-Prem, you will get no data
back.

Anytime a computer's Active Directory account is moved to an un-licensed OU, or move the computer to
another domain (or the license simply expires), then Endpoint Policy Manager

Group Policy Compliance reporter will stop reporting on those target computers.

