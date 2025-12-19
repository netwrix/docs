---
title: "PasswordSecurity: Dictionaries"
description: "PasswordSecurity: Dictionaries"
sidebar_position: 30
---

# PasswordSecurity: Dictionaries

The Dictionaries page provides configuration settings for storing passwords to be used as a
reference for the scan.

![Password Security Data Collection Wizard Dictionary options page](/images/accessanalyzer/11.6/admin/datacollector/passwordsecurity/dictionaries.webp)

The configurable dictionary options are:

- Use Stealthbits dictionary (> 100,000 passwords) – If enabled, compares passwords against
  out-of-the-box dictionary comprised of commonly used password hashes
- Automatically update the Stealthbits dictionary – Checks for the latest version of the Stealthbits
  dictionary file when the job is executed, and downloads the latest version from the
  [Netwrix website](https://www.netwrix.com/)

    - If the Enterprise Auditor server does not have an internet connection, the Stealthbits
      dictionary can be downloaded directly from the
      [My Products](https://www.netwrix.com/my_products.html) page of the Netwrix website.

- Update Dictionary – Checks for the latest version of the dictionary file, and updates if necessary
- Add – Add a custom dictionary file in one of the following formats:

    - Plaintext – Line separated in a text file
    - NLTM Hashes – Can be added with hashes or sorted hashes. The haveibeenpwned dictionary can be
      used. See the
      [Download and Configure the Have I Been Pwnd (HIBP) Hash List](#download-and-configure-the-have-i-been-pwnd-hibp-hash-list)
      topic for additional information.

        :::info
        Use the sorted hash dictionary if adding an NLTM format
        :::


- Remove – Removes a custom dictionary file from the query scope

## Download the Stealthbits dictionary

**Step 1 –** If the Enterprise Auditor server does not have an internet connection, the Stealthbits
dictionary can be downloaded directly from the
[My Products](https://www.netwrix.com/my_products.html) page of the Netwrix website.

**Step 2 –** After downloading the dictionary file manually do one the following:

- If an internet connection exists on the Enterprise Auditor server:

    - Place the `dictionary.dat` file in the following location:
      `%sainstalldir%\Jobs\SA_CommonData\PasswordSecurity\Dictionaries`
    - Rename the file to `sadictionary_hashed_sorted.dat`

- If no internet connection exists on the Enterprise Auditor server:

    - Copy the file to the Enterprise Auditor server and put it in a location of your choosing. The
      default location is `%sainstalldir%\Jobs\SA_CommonData\PasswordSecurity\Dictionaries`
    - Open the PasswordSecurity data collector configuration for the **AD_WeakPasswords** job
    - On the Dictionaries page, deselect the **Use STEALTHbits dictionary** checkbox
    - On the Dictionaries page, click **Add...** and select the previously downloaded
      `dictionary.dat` file

## Download and Configure the Have I Been Pwnd (HIBP) Hash List

If you don't have internet access on the Netwrix Enterprise Auditor server or want to download the
files from another location that has internet access, you can do so by using the Pwnd Passwords
Downloader.

The Pwnd Passwords Downloader is a Dotnet tool used to download all Pwned Passwords hash ranges and
save them offline so they can be used without a dependency on the k-anonymity API. Use this tool to
get the latest breached hashes from the Have I Been Pwnd (HIBP) database.

:::note
The
[](https://github.com/HaveIBeenPwned/PwnedPasswordsDownloader)[Pwnd Passwords Downloader](https://github.com/HaveIBeenPwned/PwnedPasswordsDownloader)
is a third party, open source tool, created by the HaveIBeenPwned team and distributed under a BSD
3-Clause License. You might experience issues during the hash download process, depending on your
threading settings or the load on the CloudFlare backend. The Pwnd Passwords Downloader tool will
automatically retry to continue downloading the hashes until it fully completes the download
process.
:::


### Prerequisites

The Pwnd Passwords Downloader has the following prerequisite:

- Install .NET 6 before installing the
  [Pwnd Passwords Downloader ](https://github.com/HaveIBeenPwned/PwnedPasswordsDownloader)tool. You
  can download .NET 6 from Microsoft:
  [https://dotnet.microsoft.com/en-us/download/dotnet/6.0](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)

The HIBP database takes up additional space on the machine where it is copied (approximately 13 GB,
but subject to change). The Have I Been Pwnd database (HIBP) hashes can take up to 30 GB. Make sure
that you have enough free space on your disk in your Netwrix Enterprise Auditor install directory
(`%sainstalldir%`).

### Install the Pwnd Passwords Downloader

Follow the steps to install the Pwnd Passwords Downloader.

**Step 3 –** Open command prompt, and navigate to your .NET install folder (for example,
`C:\Program Files (x86)\dotnet`).

**Step 4 –** Run the following command:

```
dotnet tool install --global haveibeenpwned-downloader
```

![hibp_installation_0](/images/accessanalyzer/11.6/admin/datacollector/passwordsecurity/hibp_installation_0.webp)

**Step 5 –** Close the command prompt.

### Update an Installed Pwnd Passwords Downloader

Follow the steps to update an installed Pwnd Passwords Downloader.

**Step 1 –** Open the command prompt.

**Step 2 –** Run the following command:

```
dotnet tool update --global haveibeenpwned-downloader
```

![hibp_installation_1](/images/accessanalyzer/11.6/admin/datacollector/passwordsecurity/hibp_installation_1.webp)

### Download NTML Hashes with the Pwnd Passwords Downloader

Follow the steps to download NTLM hashes.

**Step 1 –** Navigate to the folder where you want to download the hashes.

**Step 2 –** Download all NTLM hashes to a single txt file, called for example
`pwnedpasswords_ntlm.txt`.

Run:

```
haveibeenpwned-downloader.exe -n pwnedpasswords_ntlm
```

![hibp_installation_3](/images/accessanalyzer/11.6/admin/datacollector/passwordsecurity/hibp_installation_3.webp)

This screenshot shows the completed download.

**Step 3 –** To overwrite an existing hash list, run:

```
haveibeenpwned-downloader.exe -n pwnedpasswords_ntlm -o
```

For a complete list of available parameters, please check the
[Pwnd Passwords Downloader GitHub page](https://github.com/HaveIBeenPwned/PwnedPasswordsDownloader).
