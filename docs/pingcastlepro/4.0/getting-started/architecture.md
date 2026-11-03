---
title: "PingCastle Pro architecture"
description: "Understand how the components of PingCastle Pro work together."
sidebar_position: 20
---

# Architecture

PingCastle Pro uses a distributed architecture.

`PingCastle.exe` is the standalone agent. It assesses Active Directory and produces a report in two forms: an XML file and an HTML file. These two files are two representations of the same data. By default, PingCastle filters the XML file to remove potentially private data, such as account names. To turn off this filter, run the program with the `--level Full` flag.

You then push the data in the XML file to PingCastle Pro directly through the application programming interface (API), or indirectly through an import, such as email. You can encrypt the data to protect its confidentiality.

![Architecture diagram: PingCastle Basic and Pro agents push reports, or send them by email, to PingCastle Pro. PingCastle Pro connects to hosting, a database, Azure, and Windows Active Directory.](/images/pingcastlepro/4.0/proinstall/image3.webp)

PingCastle Pro stores the data in the database.
