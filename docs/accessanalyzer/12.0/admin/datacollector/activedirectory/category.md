---
title: "ActiveDirectory: Category"
description: "ActiveDirectory: Category"
sidebar_position: 10
---

# ActiveDirectory: Category

The ActiveDirectory Data Collector Category page contains the following query categories,
sub-divided by auditing focus:

![Active Directory Data Collector Wizard Category page](/images/accessanalyzer/12.0/admin/datacollector/activedirectory/category.webp)

The categories are:

- Domains

    - Domains – Domains in an organization’s forest
    - Trusted Domains – List of domains and their trust relationships
    - FSMO Role Holders – FSMO Role Holders (Significant Domain Controllers)
    - Domain Object Counts – Number of users and servers with each Domain

- Directory Objects By Domain

    - Containers – Containers under given scope
    - Organizational Units – Organizational units under given scope
    - Computers – List of computer objects under scope
    - Shared Folders – Shared folders under the scope
    - Printers – Printer objects
    - Users – All user objects under the scope
    - Contacts – Contact objects
    - Groups – Domain/global/universal distribution groups

- Sites and Topology

    - Sites – List of AD sites
    - Servers – Servers list
    - Site Object Counts – Number of users and servers within each AD Site

- Inter-site transports

    - Transports – Inter-site transports in AD
    - SiteLinks – Connections between two sites
    - SiteLinkBridges – Object for tracking transitively connected site links

- DNS Services

    - Subnets – Known subnets list
    - DNS Zones – DNS zone objects list

- Directory Security

    - Extended Control Access Rights – Extended rights dump
    - Security Principals – Well-known security principals from external sources

- Directory Schema

    - Schema Attributes – Dumps all defined attributes in Active Directory
    - Schema Classes – Dumps all defined classes in Active Directory

- AD Replication

    - AD Replication Links – Active Directory replication links
