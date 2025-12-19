---
title: "Go-Live Checklist"
description: "Go-Live Checklist"
sidebar_position: 60
---

# Go-Live Checklist

Go-Live Checklist

# Go-Live Checklist

A go-live checklist is specific to the specific company environment, but the details below is a
growing document of details that should be considered:

## Privilege Secure Access to Systems

- Does the Privilege Secure Protect Account have appropriate permission to administer all servers
  and workstations to be protected
    - Exclude domain controllers
- Has the GPO allowing remote enumeration of local Administrators pushed out to all systems
    - Exclude domain controllers
- Has connectivity been established and tested for a majority of the systems

## Single Sign-On and 2FA

- Has the standard Privilege Secure user experience been tested
- Have any alternate domains been tested
- Are 2FA hardware tokens in use and has that been considered and/or tested
- Has training documentation been updated to include SSO and/or 2FA details

## SIEM Ingegration

- Not necessarily required for go-live
- Has log forwarding to the SIEM been configured
- Has it been verified that the SIEM is receiving Privilege Secure logs
- Are the logs complete and not truncated
- Have queries been set for specific scenarios that are to be tracked

## Server Rollout

- Operation Critical Servers
    - Have all domain controllers exclusion been verified
    - Are there operation critical servers (e.g. Citrix) been identified
    - Has the plan been discussed to rollout these servers in a small group with team(s) focus
- Service Accounts
    - Have service accounts been identified
    - Quickstart can provide details for review
    - Get input from server, application, security, network and infrastructure owners/teams
    - Has a process been determined for what to do if service accounts have been missed
    - Have service accounts been made persistent
- Has the list of servers been broken down into suitable rollout groups
- Has a user group been added to Privilege Secure and populated
- Have the go-live date(s) been determined and scheduled
- Hypercare
    - Has a hypercare process been defined and the people assigned
    - Do the people involved in hypercare have contact details
    - Has the hypercare team been trained
- Server Team
    - Have the necessary server administrators been identified for communications
    - Have the server administrators been notified
    - Has the server build process been updated to include adding to protect mode
- Training
    - Has training materials distributed
        - Cheat sheet
        - Videos
        - Documents

## Workstation Rollout

- Has the list of workstation been broken down into suitable rollout groups
    - Geographical roll out is often easiest
    - Dev and Test servers being rolled out first
- Service Accounts
    - Have service accounts been identified
    - Quickstart can provide details for review
    - Get input from server, application, security, network and infrastructure owners/teams
    - Has a process been determined for what to do if service accounts have been missed
    - Have service accounts been made persistent
- Has a go-live date(s) been determined and scheduled
- Has an OAM policy been determined, key decisions:
    - Are the local built-in Administrator accounts being disabled
    - Is Privilege Secure to manage the local built-in Administrator accounts password
    - Name of alternate admin account, can randomize part or all of name
    - Do JITA users get access
- Has access over VPN been tested
- Has the service/help desk been informed
    - Do normal users know who to contact for support
- Has hypercare process been defined and the people assigned
- Has the workstation build process been updated to include adding to protect mode
- Have suitable support teams been notified and trained
- Training
    - Have support team(s) been trained to assist end users
    - Has training materials distributed
        - Cheat sheet
        - Videos
        - Documents
