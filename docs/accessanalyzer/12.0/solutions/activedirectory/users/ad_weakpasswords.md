---
title: "AD_WeakPasswords Job"
description: "AD_WeakPasswords Job"
sidebar_position: 120
---

# AD_WeakPasswords Job

The AD_WeakPasswords Job analyzes user account password hashes to determine how easily each could be
compromised or the likelihood their passwords are known through comparison with compromised password
dictionaries and other exceptions. Exceptions include:

- AES Key Missing – Account is set up using older functional AD levels, so has no AES key. These
  accounts use weaker encryption methods susceptible to brute force attacks.
- Clear Text Password – Account has passwords stored with reversible encryption. See the Microsoft
  [Store passwords using reversible encryption](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/hh994559(v=ws.11))
  article for additional information.
- Default Computer Password – Computer has default computer passwords set
- Delegable Admins – Administrator account is allowed to be delegated to a service
- DES Encryption Only – Account is using Kerberos DES encryption. DES encryption is considered weak
  as the 56-bit key is prone to brute force attacks. See the Microsoft
  [AD DS: User accounts and trusts in this domain should not be configured for DES only](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/ff646918(v=ws.10))
  article for additional information.
- Empty Password – Account has an empty password
- Kerberos Pre-authentication is not required – Account does not require Kerberos
  pre-authentication. Kerberos pre-authentication can mitigate against brute force attacks. See the
  Microsoft
  [Kerberos Pre-Authentication: Why It Should Not Be Disabled](https://learn.microsoft.com/en-us/archive/technet-wiki/23559.kerberos-pre-authentication-why-it-should-not-be-disabled)
  article for additional information.
- LM Hash – Account has stored LM hashes. The LM hash is a relatively weak hash that is prone to
  brute force attacks. See the Microsoft
  [How to prevent Windows from storing a LAN manager hash of your password in Active Directory and local SAM databases](https://learn.microsoft.com/en-US/troubleshoot/windows-server/windows-security/prevent-windows-store-lm-hash-password)
  article for additional information.
- Password Never Expires – Account has a password that never expires
- Password Not Required – Account does not require a password
- Weak Historical Password – Account has a historical password that was found in the dictionary
- Weak Password – Account has a password that was found in the dictionary
- Shares Common Password – Account shares a password with another account

## Queries for the AD_WeakPasswords Job

The AD_WeakPasswords Job uses the PasswordSecurity Data Collector.

![Query for the AD_WeakPasswords Job](/images/accessanalyzer/12.0/solutions/activedirectory/users/weakpasswordsquery.webp)

The query for this job are:

- Weak Passwords – Collects password hashes to identify weak passwords

    - See the
      [PasswordSecurity Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/passwordsecurity/overview.md)
      topic for additional information

### Configure the Weak Passwords Query

The PasswordSecurity Data Collector can be scoped if desired. Follow the steps to modify the query
configuration.

**Step 1 –** Navigate to the job’s Configure node and select Queries.

**Step 2 –** In the Query Selection view, select the **Weak Passwords** query and click**Query
Properties**. The Query Properties window opens.

**Step 3 –** Select the Data Source tab, and click **Configure**. The Password Security Data
Collector Wizard opens.

![Password Security Data Collection Wizard Scan options page](/images/accessanalyzer/12.0/solutions/activedirectory/users/optionsweakpassword.webp)

:::warning
Read the warning prior to enabling the cleartext password feature.
:::


**Step 4 –** On the Options page, configure the scan options by enabling communication with the
Active Directory via SSL or returning cleartext password entries.

![Password Security Data Collection Wizard Dictionary options page](/images/accessanalyzer/12.0/solutions/activedirectory/users/dictionariesweakpassword.webp)

**Step 5 –** On the Dictionaries page, configure the dictionary options by enabling the Netwrix weak
password dictionary or click **Add…** to upload a custom dictionary with NTLM hashes or plaintext
passwords to use during the scan.

- See the
  [PasswordSecurity: Dictionaries](/docs/accessanalyzer/12.0/admin/datacollector/passwordsecurity/dictionaries.md)
  topic for additional information

**Step 6 –** Navigate to the Summary page, click **Finish** to save any setting modifications or
click **Cancel** if no changes were made. Then click **OK** to close the Query Properties window.

The Weak Passwords query is now configured.

## Analysis Tasks for the AD_WeakPasswords Job

Navigate to the **Active Directory** > **2.Users** > **AD_WeakPasswords** > **Configure** node and
select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_WeakPasswords Job](/images/accessanalyzer/12.0/solutions/activedirectory/users/weakpasswordsanalysis.webp)

The default analysis tasks are:

- Count of Shared Passwords – Creates the SA_AD_WeakPasswords_Count table accessible under the job's
  Results node
- Join Active Directory Stats – Creates the SA_AD_WeakPasswords_Details table accessible under the
  job’s Results node
- Summarize Password Issues – Creates the SA_SA_AD_WeakPasswords_Summary table accessible under the
  job's Results node
- Add to AD Exceptions – Creates the SA_AD_UserDelegation_Details table accessible under the job’s
  Results node

In addition to the tables and views created by the analysis tasks, the AD_UserDelegation Job
produces the following pre-configured report:

| Report                | Description                                                                                                        | Default Tags | Report Elements                                                                                                                                                                                                               |
| --------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Weak Passwords Checks | This job identifies accounts in the organization with weak passwords that can be easily decrypted or brute forced. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays password weaknesses</li><li>Table – Provides details on password weaknesses</li><li>Table – Provides details on exceptions and user counts</li></ul> |
