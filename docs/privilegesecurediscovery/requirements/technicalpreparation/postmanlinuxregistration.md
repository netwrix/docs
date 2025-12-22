---
title: "Postman Linux Registration"
description: "Postman Linux Registration"
sidebar_position: 100
---

# Postman Linux Registration

Postman Linux Registration

# Postman Linux Registration

**CAUTION:** Always back up the /etc/sudoers file prior to scanning or enabling Scan Mode on any
system in NPS-D. Scanning, regardless of Protect Mode setting, a Liunx system will result in a
flattening of the /etc/sudoers file. This will pull in all permissions from other sources (e.g:
files locate in /etc/sudoers.d) into the /etc/sudoers file, and disable sudo permissions being
acquired from those sources.

Linux registration
prerequisites: [Linux Registrations Prerequisites](/docs/privilegesecurediscovery/requirements/technicalpreparation/linuxregistrationsprerequisites.md)

## Adding Linux Machines to Privilege Secure

Use Postman to craft the following GET:


```
https://<IP_add_of_SecureONE_box>/api/v1/ping
```

The response coming back should simply be “pong” if the API connection is intact. Modify the POST
string in the URL field to read the following:

![LRegister_device_URL.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/360022103414_register_device_url_632x71.webp)

Select the “Body” option beneath the URL field, and create the keys pictured below:

![LRegister_keyvalues.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/360022103414_register_keyvalues_680x330.webp)

- system – The name of the Linux system being registered to the Privilege Secure interface.
- username/password – The name/password of the service account currently on the Linux endpoint which
  will be used to create the Privilege Secure service account.  Administrative account being added.
- admin[0] – The DB identifier unique string for the account being added. For additional accounts
  being added, the [0] will need to be incremented upwards by 1 for each account: [1], [2], [3],
  etc. It is rare to have more than 2 persistent administrative accounts, but there is reason for
  more on occasion.
- scan – Set as ‘true’ by default.
- persistant – Set as an empty string using the double quotation marks by default.
- secure – Set to ‘true’ by default.
- nondomain – Set as ‘true’ by default.

Once all values are in place, click the blue “Send” button in the top right corner, and verify that
it updates successfully in Postman. This initial registration process may take up to 30 seconds per
machine.
**directory_bridging**:  Will default to "Privilege Secure".  Add to POST if using a Directory
Bridging solution other than Privilege Secure.  Valid entries are:  centrify, powerbroker, sssd

## Locating a Linux System in the UI

In the Privilege Secure browser, navigate to the "Grant Access" page and search for the system that
was just added to confirm that is has been registered with Privilege Secure successfully. The Domain
will be: `NONE\<system_name>`

Once it has been verified that this account was added successfully, the template that was created
above can be used as a baseline to create additional systems to add.

For batch enrolling many Linux systems into Privilege Secure at one time, use the “reports.py”
script provided by the Remediant team. Using a spreadsheet as an input, it is possible to enroll
many Linux devices at once in a scripted fashion.

**NOTE:** Linux passwords and usernames are case sensitive.
