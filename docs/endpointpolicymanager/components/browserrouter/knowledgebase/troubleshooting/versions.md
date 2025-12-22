---
title: "When does Endpoint Policy Manager Browser Router write v1 or v2 Enterprise Mode site lists?"
description: "When does Endpoint Policy Manager Browser Router write v1 or v2 Enterprise Mode site lists?"
sidebar_position: 30
---

# When does Endpoint Policy Manager Browser Router write v1 or v2 Enterprise Mode site lists?

Versions less than the following will not accept any EMIE lists, and Endpoint Policy Manager Browser
Router will not try to write EMIE lists:

IE10: 10.\*  
IE11 + Win7: 11.0.9600.17041  
IE11 + Win8.1: 11.0.9600.17031

Versions greater than or equal to the following accept EMIE v1, and Endpoint Policy Manager Browser
Router will write v1 site lists:

IE11 + Win7: 11.0.9600.17041  
IE11 + Win8.1: 11.0.9600.17031  
IE11 + Win10 RTM: 11.0.10240.\*  
IE11 + Win10 Version 1511: 11.0.10586.\*

Versions greater than or equal to the following accept both EMIE v1 and v2, but Endpoint Policy
Manager Browser Router will write v2 site lists:

- IE11 + Win10 Version 1511: 11.0.10586.\*
- IE 11 + Win 7: Version 11.0.9600.18347 or later
- IE + Win 8.1: Version 11.0.9600.18123 or later


