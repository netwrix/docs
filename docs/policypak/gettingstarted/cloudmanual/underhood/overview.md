---
title: "Underneath the Hood and Troubleshooting"
description: "Underneath the Hood and Troubleshooting"
sidebar_position: 70
---

# Underneath the Hood and Troubleshooting

Recall that the job of Netwrix PolicyPak Cloud job is to do the
following:

- Provide your company with its own PolicyPak Cloud client MSI which is unique and
  secure to your company.
- License a machine for use with PolicyPak Cloud (for specific PolicyPak
  Cloud components).
- Deliver PolicyPak XML data files for PolicyPak settings or Microsoft
  Group Policy settings.

After that, the PolicyPak product client-side extension (CSE) (PolicyPak
Application Settings Manager CSE or PolicyPak Preferences CSE) takes over and performs
the work.

To get an overall feeling for what's happening within PolicyPak Cloud and its
interaction with the client machines, let's explore three areas:

- XML data storage (where XML directives are downloaded)
- Troubleshooting installation of the Cloud client and connection troubles
- Command line syntax for initiating commands from the client to the server

