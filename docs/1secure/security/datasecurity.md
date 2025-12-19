---
title: "Data Security"
description: "Data Security"
sidebar_position: 40
---

# Data Security

## Data at rest

Data is persistently stored within the Azure SQL Database in the region you select when creating
your account. All data stored in the database is encrypted with an AES 256-bit encryption algorithm.

## Data in transit

Data will be transferred between the system components in a few different ways:

- Agent -> API
- API -> SQL Database
- SQL Database -> Application
- Application -> Browser (User)

Data is always encrypted in transit, and connections are made over HTTPS to prevent eavesdropping.

## Data Retention Period

Data retention is the practice of storing and managing your data and records for a designated period
of time. A data retention period refers to the amount of time that a company or an organization
holds onto your information. Netwrix 1Secure provides data retention for 1 rolling year by default.