---
title: "PingCastle Pro architecture"
description: "Understand how the components of PingCastle Pro work together."
sidebar_position: 20
---

# Architecture

PingCastle uses a distributed architecture.

PingCastle Basic acts as a standalone agent. The program assesses the Active Directory and produces a report in two forms: an XML file and an HTML file. These two files provide two representations of the same data. By default, PingCastle filters the XML file to remove potential private data such as account names from this collected data. To deactivate this filter, run the program with the `--level Full` flag.

You then push the data contained in the xml file into PingCastle Pro
directly via the API, or indirectly via an import such as
email. In this case, you can encrypt the data to ensure its
confidentiality.

![](/images/pingcastlepro/4.0/proinstall/image3.webp)

PingCastle Pro then provides services around the data and stores it in the database.
