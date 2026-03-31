---
title: "Discovery Service"
description: "Discovery Service"
sidebar_position: 100
---

# Discovery Service

## The problem

**Service accounts** are used on most networks. These accounts are used, for example, to carry out
certain services. It is not uncommon for **one and the same password** to be used here for multiple
accounts. Manually changing these passwords is extremely time consuming. Therefore, this process is
often ignored for reasons of convenience.

The result is that the same outdated passwords are often used for many **security-critical access
points**. This naturally represents a **severe security risk** and leaves the door wide open for any
attacker who gains access to just one of the passwords!

## The solution

Netwrix Password Secure offers the solution to this problem: The security of the network can be
significantly increased using a combination of **Discovery Service** and **Password Reset**. The
complete network can be scanned with the aid of **Discovery Service**. This process searches for
both local user accounts and also Active Directory users. In addition, Password Resets are also
established via which the passwords for the accounts discovered during the search can be reset.

## Functionality

The **Discovery Service** process can be split into three logical steps:

- A **Discovery Service Task** is added that searches for data on the network. This can be executed
  once or cyclically and runs in the background.
- After the task has been executed successfully, the data discovered during the search is displayed
  in the **Discovery Service module** (e.g. Windows users, services, etc.).
- **Passwords** or **Password Resets** can then be generated from the data discovered during the
  search.
