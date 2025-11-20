---
title: "Securing the Secret Key When Using the Group Policy Method"
description: "Securing the Secret Key When Using the Group Policy Method"
sidebar_position: 20
---

# Securing the Secret Key When Using the Group Policy Method

The secret key of Admin Approval is stored within the XML inside the GPO, as seen here.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/adminapproval/securing_the_secret_key_when.webp)

If you look closely, you will see it is not the same key that was used earlier. Indeed, it is
re-hashed or re-encrypted before it is placed within the XML within the GPO. Even so, it is best
practice to remove the ability for users to be able to read the encrypted key. As you can see, a
Standard User can, by default, read the GPO’s contents, because the default rights of a GPO are
**Authenticated Users::Read**.

If you wish to remove this access from users, follow these steps:

**Step 1 –** Create an Active Directory group containing the computers that need to read the key.

**Step 2 –** Make the GPO readable and writeable to Group Policy Admins (Domain Admins or a group of
admins who create and edit GPOs).

**Step 3 –** Remove the Authenticated Users group from the GPO.

**Step 4 –** Add in Domain Computers with Read access and Apply Group Policy access (required once
you remove Authenticated Users).

:::note
You will have to reboot the computer to pick up the new computer group membership.
:::


The **Scope** tab of the GPO, shown here, displays an example of a GPO where only Sales Desktops
would be able to determine the contents of the GPO (and therefore download the key as a Computer,
but never expose it to a User).

![A screenshot of a computer screen Description automatically generated](/images/endpointpolicymanager/leastprivilege/adminapproval/securing_the_secret_key_when_1.webp)

This immediately prevents Standard Users from reading the Computer side of the GPO, as shown in
here.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/adminapproval/securing_the_secret_key_when.webp)

Again, if you choose to place computers into an Active Directory security group, you will need to
reboot the computer so it will pick up the new computer group membership and then the GPO.

You can verify the computer got the GPO key by opening an Admin command prompt, running
`GPresult /R`, and verifying that the GPO was applied and that the computer is in the group, as
shown here.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/adminapproval/securing_the_secret_key_when_2.webp)



