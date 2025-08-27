---
title: "Licenses"
description: "Licenses"
sidebar_position: 90
---

# Licenses

The Licenses tab allows you to review the status of your current licenses, update them and add new
licenses. To learn about Netwrix Auditor licenses, refer to the following Netwrix Knowledge Base
article: [Netwrix Auditor Licensing FAQs](https://www.netwrix.com/kb/2113).

Follow the steps to update or add a license.

**Step 1 –** Click **Update**.

**Step 2 –** In the dialog that opens, do one of the following:

- Select Load from file, click Browse and point to a license file received from your sales
  representative.
- Select Enter manually and type in your company name, license count and license codes.

## Notes for Managed Service Providers

Being a Managed Service Provider (MSP) you are supplied with a special MSP license that allows you
to deploy Netwrix Auditor on several servers with the same license key. In this case the license
count is based on total number of users across all managed client environments.

MSP billing is calculated based on the arithmetic average of the number of licenses used in that
month. This is determined by the following formula:

(LicensesUsedOnDay1 + LicensesUsedOnDay2 … LicensesUsedOnDay29 + LicensesUsedOnDay30) / 30

To ensure that licenses are calculated correctly (per heartbeat) by Netwrix, perform the following
steps.

**Step 1 –** Create organizational units within audited domains and add there service accounts you
want to exclude from license count.

**Step 2 –** On the computer where Auditor Server resides, navigate to _Netwrix Auditor installation
folder\Netwrix Auditor\Administrative Console_ and locate MSP.xml.

**Step 3 –** In MSP.xml, provide the following:

- CustomInstanceIdentificator – It is used to identify a server where Netwrix Auditor Server is
  installed. It can be any custom name, for example a server name, code name or any other name you
  use to distinguish one server from another (e.g., ABCServer).

    **NOTE:** Netwrix recommends you to assign a unique identifier for each client. This information
    is stored in the Netwrix Partner Portal and helps you identify each instance when you invoice
    customers for Netwrix services.

    Netwrix gathers the following information about MSP licenses: identifier, license key and
    license count.

- ServiceAccount Path – It is a path to OU that contains service accounts. You can add several OUs
  to MSP.xml, one per line.

For example:

![msp](/images/auditor/10.7/admin/settings/msp.webp)

**NOTE:** MSP.xml file must be formatted in accordance with XML standard. If company name (used as
identifier) or service account path includes & (ampersand), " (double quotes) or ' (single quotes),
< (less than), > (greater than) symbols, they must be replaced with corresponding HTML entities.

**_RECOMMENDED:_** Netwrix recommends avoiding special characters since some web browsers (e.g.,
Internet Explorer 8) have troubles processing them.

| Symbol                        | XML entity                                   |
| ----------------------------- | -------------------------------------------- |
| & e.g., Ally & Sons           | &amp; e.g., Ally &amp; Sons                  |
| " e.g., Domain1\Users\"Stars" | &quot; e.g., Domain1\Users\&quot;Stars&quot; |
| ' e.g., Domain1\Users\O'Hara  | &apos; e.g., Domain1\Users\O&apos;Hara       |
| < e.g., `Company<1`           | &lt; e.g., `Company&lt;1`                    |
| > e.g., `ID>500`              | &gt; e.g., `ID&gt;500`                       |

**Step 4 –** Navigate to _Netwrix Auditor installation folder\Netwrix Auditor\Administrative
Console_ and start **Netwrix.CallHome.MSPTool.exe**. The tool transfers information on service
accounts to Netwrix Auditor. Netwrix Auditor uses this information to exclude service accounts from
license count so that only heartbeat users will be calculated.

**NOTE:** You must run Netwrix.CallHome.MSPTool.exe every time you update MSP.xml.

The appearance of the license will be reflected in the MSP portal.
