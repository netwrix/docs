---
title: "Resource Based Policy Match"
description: "Resource Based Policy Match"
sidebar_position: 50
---

# Resource Based Policy Match

Resource Based Policy Match will take a matching process and then use Netwrix Privilege Secure to
perform a whole activity set, like creating a new Domain Admin account.

In this example we will launch MMC Active Directory Users and Computers as `EastSalesUser1`, but
Netwrix Privilege Secure will broker the connection and actually launch the process as a domain
admin.

Resource Based Policy Matches tie back to a specific Netwrix Privilege Secure Activity Name.

![resource_based_policy_match](/images/endpointpolicymanager/integration/privilegesecure/resourcebased/resource_based_policy_match.webp)

Here on the Netwrix Privilege Secure server, locate the Policy and verify that the name is an exact
match.

![resource_based_policy_match_1](/images/endpointpolicymanager/integration/privilegesecure/resourcebased/resource_based_policy_match_1.webp)

Then, to match a specific process configure the Endpoint Policy Manager Least Privilege Manager
policy as a Combo rule:

- Path condition: %SYSTEMROOT%\System32\mmc.exe
- Command-line condition: Strict Equality for dsa.msc

![resource_based_policy_match_2](/images/endpointpolicymanager/integration/privilegesecure/resourcebased/resource_based_policy_match_2.webp)

Now whenever mmc.exe dsa.msc is run from the command line, Endpoint Policy Manager Least Privilege
Manager will send the connection back to Netwrix Privilege Secure for processing.

You’ll run the command as `EastSalesUser1`, and give your Active Directory credentials, Two-Factor
(brokered by Netwrix Privilege Secure), and wait for the Activity Session to be created.

![resource_based_policy_match_3](/images/endpointpolicymanager/integration/privilegesecure/resourcebased/resource_based_policy_match_3.webp)

The result is that a new Domain Admin account is created for this one session and deleted after use.

![resource_based_policy_match_4](/images/endpointpolicymanager/integration/privilegesecure/resourcebased/resource_based_policy_match_4.webp)



