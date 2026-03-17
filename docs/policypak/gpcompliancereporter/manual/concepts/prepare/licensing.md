---
title: "Licensing Information"
description: "Licensing Information"
sidebar_position: 20
---

# Licensing Information

Neither the PolicyPak GPCR server nor the client (admin console) require a license;
but the endpoint does.

:::note
Watch this video to see how to request a license:
[How to Request Licenses from PolicyPak by Creating a "License Request Key"](/docs/policypak/licensing/videolearningcenter/requestall/licenserequestkey.md).
:::


:::note
To install the license file received from PolicyPak, see the following
video:
[How to install UNIVERSAL licenses for NEW Customers (via GPO, SCCM or MDM)](/docs/policypak/licensing/videolearningcenter/installall/installuniversal.md).
:::


Note that since the PolicyPak client (admin console) does not need to be licensed, you
may run unlimited numbers of it in any organizational unit (OU). The PolicyPak client
does not have to receive license files in order to work properly.

## Licenses and Reporting

Table 1 provides more detail as to what is reported through PolicyPak GPCR.

Table 1: GPCR reporting.

| If the target (endpoint) computer has…          | PolicyPak GPCR will…                                                                                                                                                                                                             |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| No license                                      | Return nothing in the RSOP report                                                                                                                                                                                                              |
| The word "computer" in the name                 | Report everything: all PolicyPak settings, Microsoft Admin Templates settings, Microsoft Group Policy Preferences settings, and Microsoft Security settings A computer acts as if it had a PolicyPak GPCR license. |
| A PolicyPak GPCR endpoint license | Report everything: all PolicyPak settings, Microsoft Admin Templates settings, Microsoft Group Policy Preferences settings, and Microsoft Security settings The client machine will be fully licensed.                           |

In order to get Microsoft data (policies, security, and preferences), license all endpoints for
PolicyPak GPCR reporting. You may also license PolicyPak GPCR endpoints
if you are not licensed for other PolicyPak products. You are not required to purchase
other AppSets or policies if you only want to engage in Group Policy reporting via the PolicyPak GPCR. To get licensed, run the licensing tool (LT) to generate a license request key
(LRK), then send it to PolicyPak Sales.

## Supported Group Policy Settings for Reporting

Supported and unsupported Group Policy settings within a GPO or test are shown in Table 2.

Table 2: Group Policy supported and unsupported settings.

| Data type                                                               | User Policies                                                                                                                                                                          | Computer Policies                                                                                                                                                                        |
| ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PolicyPak settings (all)                                  | ![gpcr_concepts_and_quickstart_4_17x17](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_4_17x17.webp) | ![gpcr_concepts_and_quickstart_4_17x17](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_4_17x17.webp)   |
| Group Policy Admin Templates (all ADM(X) templates and settings)        | ![gpcr_concepts_and_quickstart_4_17x17](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_4_17x17.webp) | ![gpcr_concepts_and_quickstart_4_17x17](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_4_17x17.webp)   |
| Group Policy Security Settings                                          |                                                                                                                                                                                        |                                                                                                                                                                                          |
| Windows                                                                 | Security                                                                                                                                                                               |                                                                                                                                                                                          |                                                                                                                                                                                        |
| Account Policies                                                        | Password Policy                                                                                                                                                                        | n/a                                                                                                                                                                                      | ![gpcr_concepts_and_quickstart_4_17x17](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_4_17x17.webp) |
| Account Policies                                                        | Account Lockout Policy                                                                                                                                                                 | n/a                                                                                                                                                                                      | ![gpcr_concepts_and_quickstart_4_17x17](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_4_17x17.webp) |
| Account Policies                                                        | Kerberos Policy                                                                                                                                                                        | n/a                                                                                                                                                                                      | ![gpcr_concepts_and_quickstart_4_17x17](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_4_17x17.webp) |
| Local Policies                                                          | Audit Policy                                                                                                                                                                           | n/a                                                                                                                                                                                      | ![gpcr_concepts_and_quickstart_4_17x17](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_4_17x17.webp) |
| Local Policies                                                          | User Rights Assignment                                                                                                                                                                 | n/a                                                                                                                                                                                      | ![gpcr_concepts_and_quickstart_4_17x17](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_4_17x17.webp) |
| Local Policies                                                          | Security Options                                                                                                                                                                       | n/a                                                                                                                                                                                      | ![gpcr_concepts_and_quickstart_4_17x17](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_4_17x17.webp) |
| Event log                                                               | n/a                                                                                                                                                                                    | ![gpcr_concepts_and_quickstart_4_17x17](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_4_17x17.webp)   |
| Windows Settings                                                        |                                                                                                                                                                                        |                                                                                                                                                                                          |
| Name resolution policy                                                  | n/a                                                                                                                                                                                    | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp)   |
| Scripts                                                                 | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp) | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp)   |
| Policy-based QoS                                                        | n/a                                                                                                                                                                                    | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp)   |
| Public key policies                                                     | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp) | n/a                                                                                                                                                                                      |
| Software restriction policies                                           | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp) | n/a                                                                                                                                                                                      |
| Restricted groups                                                       | n/a                                                                                                                                                                                    | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp)   |
| System services                                                         | n/a                                                                                                                                                                                    | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp)   |
| Registry                                                                | n/a                                                                                                                                                                                    | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp)   |
| File                                                                    | n/a                                                                                                                                                                                    | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp)   |
| Wired network (IEEE 802.3) policies                                     | n/a                                                                                                                                                                                    | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp)   |
| Windows firewall with advanced security                                 | n/a                                                                                                                                                                                    | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp)   |
| Network list manager policies                                           | n/a                                                                                                                                                                                    | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp)   |
| Wireless network (IEEE 802.11) policies                                 | n/a                                                                                                                                                                                    | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp)   |
| Network access protection                                               | n/a                                                                                                                                                                                    | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp)   |
| Application control policies (Applocker)                                | n/a                                                                                                                                                                                    | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp)   |
| IP security policies on Active Directory                                | n/a                                                                                                                                                                                    | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp)   |
| Advanced audit policy configuration                                     | n/a                                                                                                                                                                                    | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp)   |
| Group Policy Preferences (all are supported except those listed below)  | ![gpcr_concepts_and_quickstart_4_17x17](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_4_17x17.webp) | ![gpcr_concepts_and_quickstart_4_17x17](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_4_17x17.webp)   |
| Group Policy Preference data sources                                    | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp) | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp)   |
| Scheduled tasks (immediate XP, scheduled XP)                            | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp) | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp)   |
| Power options and scheme (for Windows XP)                               | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp) | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp)   |
| ODBC data source                                                        | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp) | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp)   |
| Folder options                                                          | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp) | ![gpcr_concepts_and_quickstart_4_17x17](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_4_17x17.webp)\* |
| Start menu (for XP)                                                     | n/a                                                                                                                                                                                    | ![gpcr_concepts_and_quickstart_4_17x17](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_4_17x17.webp)   |
| Internet Explorer (5, 6, and 7)                                         | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp) | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp)   |
| Registry collection (special registry item type)                        | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp) | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp)   |
| Folder redirection                                                      | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp) | n/a                                                                                                                                                                                      |
| Internet Explorer maintenance                                           | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp) | n/a                                                                                                                                                                                      |
| Group Policy software install                                           | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp) | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp)   |
| Any third-party Group Policy Extension not from PolicyPak | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp) | ![gpcr_concepts_and_quickstart_5_15x15](/images/policypak/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_5_15x15.webp)   |

\*File type actions are not in the RSOP and thus show as "missing" in PPGPCR.

:::note
PolicyPak GPCR is licensed per computer; if a particular endpoint is not
licensed, it will not return data.
:::


:::note
It may look like there are more unsupported settings than supported settings. However, the
settings that are supported cover the top 90% of tasks that administrators typically do with Group
Policy and the unsupported settings cover the bottom 10%. We will be expanding coverage as needed in
the future.
:::


PolicyPak Sales can send you a working PolicyPak GPCR key. To install
the key, follow these instructions:
[How to install UNIVERSAL licenses for NEW Customers (via GPO, SCCM or MDM)](/docs/policypak/licensing/videolearningcenter/installall/installuniversal.md).

