---
title: "How are wildcards supported when used with IP addresses in the Java Rules Manager MMC console?"
description: "How are wildcards supported when used with IP addresses in the Java Rules Manager MMC console?"
sidebar_position: 20
---

# How are wildcards supported when used with IP addresses in the Java Rules Manager MMC console?

Supported syntaxes:

- 192.168.2.2
- 81.22.2.1
- 255.255.255.255
- 251.251.251.251
- 12.12.\*
- 12.\*

Unsupported syntax examples:

- 12.\*.\*
- 12.\*.\*.\*
- 12.12.\*.12
- 12.\*.12.\*
- 12.\*.12.12
- 12.\*.\*.12

Some more examples:

- \*.238.1.3 – Works
- \*.1.3 – Works
- \*.3 – works fine loaded java 7_80

Rules which will not work:

- 137.238.1.\* – will not work; Java isn't loaded
- 137.238.1.\*/is/javatest/ – will not work; Java isn't loaded


