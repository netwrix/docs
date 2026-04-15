---
title: "Why is Browser Router's \"Default Browser\" or File Associations Manager's configuration not working when I also have a Default Associations Configuration file?"
description: "Why is Browser Router's \"Default Browser\" or File Associations Manager's configuration not working when I also have a Default Associations Configuration file?"
sidebar_position: 40
---

# Why is Browser Router's "Default Browser" or File Associations Manager's configuration not working when I also have a Default Associations Configuration file?

If you're using Netwrix PolicyPak Browser Router -OR- you're
using PolicyPak File Associations Manager to make associations, you CANNOT also use
the Group Policy or MDM method for setting default associations files, like what's seen here.

![523_1_faq-03-img-01](/images/policypak/troubleshooting/fileassociations/523_1_faq-03-img-01.webp)

Underneath the hood, you are "fighting" with PolicyPak Browser Router and/or File
Associations manager, like this.

![523_2_faq-03-img-02](/images/policypak/troubleshooting/fileassociations/523_2_faq-03-img-02.webp)

For PolicyPak Browser Router, PolicyPak Browser Router must "become" the
default OS browser like what's seen here. If PolicyPak Browser Router is not set as
the Default Browser (automatically, using PolicyPak …) then you will get unusual
behavior.

![523_3_faq-03-img-03](/images/policypak/troubleshooting/fileassociations/523_3_faq-03-img-03.webp)

For PolicyPak File Associations Manager, you must remove any Group Policy File
Associations file for it to work reliably.
Summary: Use only PolicyPak … when using PolicyPak Browser Router and
also PolicyPak File Associations Manager and don't try to use a Group Policy or MDM
File Associations alongside it.


