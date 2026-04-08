---
title: "Requirements"
description: "Requirements"
sidebar_position: 20
---

# Requirements

This document describes the recommended configuration of the servers needed to install this product
in a production environment. Depending on the size of the organization, it is recommended to review
your environment and requirements with a support engineer prior to deployment to ensure all
exceptions are covered.

## Architecture Overview

The following servers are required for installation of the product:

- Netwrix Privilege Secure Application Server – This is where the Netwrix Privilege Secure (v25.12)
  application is installed.
- Netwrix Privilege Secure Client – Privilege Secure is a web service that can be accessed locally
  or remotely through a supported browser.
- Netwrix Privilege Secure Proxy Server – This is for the supported RDP / SSH Client.
- Target Environment – The target environment includes platforms with privileged access to be
  managed by the application.

See the following sections for additional information:

- [Application Server](/docs/privilegesecure/25.12/requirements/applicationserver.md)
- [Client](/docs/privilegesecure/25.12/requirements/client.md)
- [Remote Service Node](/docs/privilegesecure/25.12/requirements/proxyserver.md)
- [Target Environments](/docs/privilegesecure/25.12/requirements/target.md)
