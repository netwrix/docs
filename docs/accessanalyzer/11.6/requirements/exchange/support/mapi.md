---
title: "MAPI-Based Data Collector Permissions"
description: "MAPI-Based Data Collector Permissions"
sidebar_position: 50
---

# MAPI-Based Data Collector Permissions

The Exchange2K, ExchangeMailbox, and ExchangePublicFolder data collectors have other permission
requirements.

These data collectors supports Exchange 2010 through Exchange 2013. Since this data collectors are
MAPI-based, they do not support Exchange Online, Exchange 2019, nor Exchange 2016.

All MAPI-based data collectors have the following prerequisites:

- Microsoft MAPI CDO installed on the StealthAUDIT Console
- StealthAUDIT MAPI CDO installed on the StealthAUDIT Console
- Settings > Exchange node configured in the StealthAUDIT Console

The Exchange2K Data Collector is used in the 3. Databases Job Group has the following permission
requirements:

- Public Folder Management

The ExchangePublicFolder Data Collector is used in the 5. Public Folders Job Group has the following
permission requirements:

- Organization Management

The ExchangeMailbox Data Collector is used in the 7. Sensitive Data Job Group has the following
permission requirements:

- Organization Management
- Discovery Management
