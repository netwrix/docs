---
title: "Security Concerns"
description: "Security Concerns"
sidebar_position: 20
---

# Security Concerns

Using Endpoint Policy Manager Remote Work Delivery Manager does come with one security concern that
you should be aware of when using GPOs. The contents and reports of GPOs are, by default, readable
to all authenticated users.

In Figure 49 and Figure 50, you can see a Group Policy HTML report of the source file path of an SMB
file and a web-based file.

![tips_security_and_troubleshooting](/images/endpointpolicymanager/troubleshooting/remoteworkdelivery/tips_security_and_troubleshooting.webp)

Figure 49. By default, Standard Users can see the source path you have specified.

![tips_security_and_troubleshooting_1](/images/endpointpolicymanager/troubleshooting/remoteworkdelivery/tips_security_and_troubleshooting_1.webp)

Figure 50. Standard Users can see your HTTP source URLs by default.

The SMB share is easy enough to lock down to a specific user or group. In other words, merely
knowing the location of the SMB file won't mean that any user can download the file just by knowing
its path. The web file location is a different story though. In order for web files to work, in
general, these files need to be "World Readable" (your files-based web service might call them
something different). And because every GPO (by default) is readable by "Authenticated Users,"
anyone could either look at the GPMC HTML report (if GPMC is downloaded), or, with a little
know-how, use their own user access to read the underlying XML within the GPO itself. In Figure 51,
we can see Standard User EastSalesUser1 reading the XML contents of a GPO within SYSVOL and seeing
the location of the web file.

![tips_security_and_troubleshooting_2](/images/endpointpolicymanager/troubleshooting/remoteworkdelivery/tips_security_and_troubleshooting_2.webp)

Figure 51. Standard Users can read the contents of the GPOs that apply to them.

If you want to make the GPO hardened, you can do the following:

**Step 1 –** Make the GPO readable and writable to Group Policy admins (domain admins or a group of
admins who create and edit GPOs).

**Step 2 –** Remove the Authenticated Users group from the GPO.

**Step 3 –** Add in Domain Computers (which must be capitalized this way) with read access (this is
required once you remove authenticated users).

**Step 4 –** Add in only the user or Active Directory group of users who should be allowed to see
the GPO's report and download the GPO and give them read rights and "Apply group policy" rights.

Figure 52 shows an example of a hardened GPO within the Delegation tab of the GPO where only
EastSalesUser1 would be able to determine the contents of the GPO (and hence, see the HTML report or
read the GPO data).

![tips_security_and_troubleshooting_3](/images/endpointpolicymanager/troubleshooting/remoteworkdelivery/tips_security_and_troubleshooting_3.webp)

Figure 52. Hardening a GPO.

Note that on the Scope tab (see Figure 53), you will only see the name of the group with read rights
and "Apply group policy" rights, which is in this case, EastSalesUsers.

![tips_security_and_troubleshooting_4](/images/endpointpolicymanager/troubleshooting/remoteworkdelivery/tips_security_and_troubleshooting_4.webp)

Figure 53. The Security Filtering section will only show you who has read rights and "Apply group
policy" rights.

When this is done, only users within EastSalesUsers Active Directory Group will be able to read the
user-side portion of the GPO. In Figure 54, WestSalesUser1 attempts to read the same GPO but,
because authenticated users are removed, and only EastSalesUser1 Active Directory Group has
permissions, the user cannot read the User side of the GPO's contents.

![tips_security_and_troubleshooting_5](/images/endpointpolicymanager/troubleshooting/remoteworkdelivery/tips_security_and_troubleshooting_5.webp)

Figure 54. The result of hardening a GPO.


