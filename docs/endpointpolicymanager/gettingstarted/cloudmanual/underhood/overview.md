---
title: "Underneath the Hood and Troubleshooting"
description: "Underneath the Hood and Troubleshooting"
sidebar_position: 70
---

# Underneath the Hood and Troubleshooting

Recall that the job of Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud job is to do the
following:

- Provide your company with its own Endpoint Policy Manager Cloud client MSI which is unique and
  secure to your company.
- License a machine for use with Endpoint Policy Manager Cloud (for specific Endpoint Policy Manager
  Cloud components).
- Deliver Endpoint Policy Manager XML data files for Endpoint Policy Manager settings or Microsoft
  Group Policy settings.

After that, the Endpoint Policy Manager product client-side extension (CSE) (Endpoint Policy Manager
Application Settings Manager CSE or Endpoint Policy Manager Preferences CSE) takes over and performs
the work.

To get an overall feeling for what's happening within Endpoint Policy Manager Cloud and its
interaction with the client machines, let's explore three areas:

- XML data storage (where XML directives are downloaded)
- Troubleshooting installation of the Cloud client and connection troubles
- Command line syntax for initiating commands from the client to the server

