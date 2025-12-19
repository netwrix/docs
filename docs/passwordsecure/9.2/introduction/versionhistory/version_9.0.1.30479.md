---
title: "Version 9.0.1.30479"
description: "Version 9.0.1.30479"
sidebar_position: 90
---

# Version 9.0.1.30479

## Fixed

#### Extended view

- After duplicating a password, the quality of the password is recalculated correctly.
- RDP connections now work again on Windows Server 2019.

#### Web Application

- The quick view can now be scrolled correctly even if another modal popup is open.

#### Browser Extension

- The search in the browser extension now works as expected again.

#### Server

- System tasks are no longer deactivated after each run if they were configured with the interval
  'Once' in the past.
- HSM accesses are limited to a minimum now.
- A self-defined password can be used for the WebViewer export again
