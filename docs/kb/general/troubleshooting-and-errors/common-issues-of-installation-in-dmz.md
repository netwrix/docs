---
description: >-
  Lists common issues and solutions when installing Password Manager web-sites
  in a DMZ, including portal load errors, Server.CreateObject errors, and
  authentication failures. Includes references to related KB articles for each
  scenario.
keywords:
  - DMZ
  - Password Manager
  - portals
  - Self Service
  - Admin
  - Helpdesk
  - Server.CreateObject
  - 401 Unauthorized
  - troubleshooting
  - KB
products:
  - general
sidebar_label: Common issues of installation in DMZ
tags:
  - troubleshooting-and-errors
title: "Common issues of installation in DMZ"
knowledge_article_id: kA00g000000H9dgCAC
---

# Common issues of installation in DMZ

Installation of Password Manager Web-sites in DMZ can cause several issues. **NOTE.** To troubleshoot a DMZ installation all 3 portals must be tested as there are several scenarios.

### Issue 1: Portals never load — just stay blank in loading state

[![User-added image](./../0-images/ka04u00000116cw_0EM700000005OPr.png)](https://netwrix.secure.force.com/kb/servlet/rtaImage?eid=ka40g000000Xe0L&feoid=00N700000032Pj2&refid=0EM700000005OPr)

**Explanation:** Refer to the [KB1315](https://kb.netwrix.com/1315)  
---------------

### Issue 2: Self Service portal does not load at all, Admin and Helpdesk portals return a Server.CreateObject Failed error

[![User-added image](./../0-images/ka04u00000116cw_0EM700000005OPh.png)](https://netwrix.secure.force.com/kb/servlet/rtaImage?eid=ka40g000000Xe0L&feoid=00N700000032Pj2&refid=0EM700000005OPh) [![User-added image](./../0-images/ka04u00000116cw_0EM700000005OPm.png)](https://netwrix.secure.force.com/kb/servlet/rtaImage?eid=ka40g000000Xe0L&feoid=00N700000032Pj2&refid=0EM700000005OPm)

**Explanation:** Refer to the [KB1314](https://kb.netwrix.com/1314).  
---------------

### Issue 3: Self Service portal does not load at all, Admin and Helpdesk portals return a Server.CreateObject Access error

[![User-added image](./../0-images/ka04u00000116cw_0EM700000005OPh.png)](https://netwrix.secure.force.com/kb/servlet/rtaImage?eid=ka40g000000Xe0L&feoid=00N700000032Pj2&refid=0EM700000005OPh) [![User-added image](./../0-images/ka04u00000116cw_0EM700000005Wbv.png)](https://netwrix.secure.force.com/kb/servlet/rtaImage?eid=ka40g000000Xe0L&feoid=00N700000032Pj2&refid=0EM700000005Wbv)

**Explanation:** Refer to the [KB1308](https://kb.netwrix.com/1308).  
---------------

### Issue 4: Self-Service portal works fine, while Admin and Helpdesk return the Server.CreateObject Access error

[![User-added image](./../0-images/ka04u00000116cw_0EM700000005Wc0.png)](https://netwrix.secure.force.com/kb/servlet/rtaImage?eid=ka40g000000Xe0L&feoid=00N700000032Pj2&refid=0EM700000005Wc0) [![User-added image](./../0-images/ka04u00000116cw_0EM700000005Wbv.png)](https://netwrix.secure.force.com/kb/servlet/rtaImage?eid=ka40g000000Xe0L&feoid=00N700000032Pj2&refid=0EM700000005Wbv)

**Explanation:** Specific for non-domain front-end server. Refer to the [KB1310](https://kb.netwrix.com/1310).  
---------------

### Issue 5: Admin and Helpdesk portals work, but Self-service returns an error or does not load at all

[![User-added image](./../0-images/ka04u00000116cw_0EM700000005OPh.png)](https://netwrix.secure.force.com/kb/servlet/rtaImage?eid=ka40g000000Xe0L&feoid=00N700000032Pj2&refid=0EM700000005OPh)

**Explanation:** Refer to the [KB1303](https://kb.netwrix.com/1303).  
---------------

### Issue 6: Self-Service portal works fine but you get a 401 - Unauthorized error on Admin and Helpdesk portals

[![User-added image](./../0-images/ka04u00000116cw_0EM700000005OQL.png)](https://netwrix.secure.force.com/kb/servlet/rtaImage?eid=ka40g000000Xe0L&feoid=00N700000032Pj2&refid=0EM700000005OQL)

**Explanation:** You need to use accounts that the front-end is aware of and which have appropriate rights on the front-end server. Refer to the [KB1368](https://kb.netwrix.com/1368) in case of a non-domain front-end.
