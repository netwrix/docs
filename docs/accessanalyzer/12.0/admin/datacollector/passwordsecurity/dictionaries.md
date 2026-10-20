---
title: "PasswordSecurity: Dictionaries"
description: "PasswordSecurity: Dictionaries"
sidebar_position: 30
---

# PasswordSecurity: Dictionaries

The Dictionaries page provides configuration settings for storing passwords that the scan uses as a
reference.

![Password Security Data Collection Wizard Dictionary options page](/images/accessanalyzer/12.0/admin/datacollector/passwordsecurity/dictionaries.webp)

The configurable dictionary options are:

- Use Stealthbits dictionary (> 100,000 passwords) – If enabled, compares passwords against
  a built-in dictionary comprised of commonly used password hashes
- Automatically update the Stealthbits dictionary – Checks for the latest version of the Netwrix
  weak password dictionary file when the job runs, and downloads the latest version from the
  [Netwrix website](https://www.netwrix.com/)

    - If the Access Analyzer server doesn't have an internet connection, you can download the weak
      password dictionary directly from the
      [My Products](https://www.netwrix.com/my_products.html) page of the Netwrix website. See the
      [Download the Netwrix Weak Password Dictionary](#download-the-netwrix-weak-password-dictionary)
      topic for additional information.

- Update Dictionary – Checks for the latest version of the dictionary file, and updates if necessary
- Add – Add a custom dictionary file in one of the following formats:

    - Plaintext – Line separated in a text file
    - NLTM Hashes – Provide hashes or sorted hashes. You can use the haveibeenpwned
      dictionary. See the
      [Download and Configure the Have I Been Pwnd (HIBP) Hash List](#download-and-configure-the-have-i-been-pwnd-hibp-hash-list)
      topic for additional information.

        :::info
        Use the sorted hash dictionary if adding an NLTM format
        :::


- Remove – Removes a custom dictionary file from the query scope

## Download the Netwrix Weak Password Dictionary

**Step 1 –** If the Access Analyzer server doesn't have an internet connection, download the weak
passwords dictionary directly from the
[My Products](https://www.netwrix.com/my_products.html) page of the Netwrix website.

**Step 2 –** After downloading the dictionary file manually do one the following:

- If an internet connection exists on the Access Analyzer server:

    - Place the `dictionary.dat` file in the following location:
      `%sainstalldir%\Jobs\SA_CommonData\PasswordSecurity\Dictionaries`
    - Rename the file to `sadictionary_hashed_sorted.dat`

- If no internet connection exists on the Access Analyzer server:

    - Copy the file to the Access Analyzer server and put it in a location of your choosing. The
      default location is `%sainstalldir%\Jobs\SA_CommonData\PasswordSecurity\Dictionaries`
    - Open the PasswordSecurity data collector configuration for the **AD_WeakPasswords** job
    - On the Dictionaries page, deselect the **Use STEALTHbits dictionary** checkbox
    - On the Dictionaries page, click **Add...** and select the previously downloaded
      `dictionary.dat` file

## Download and Configure the Have I Been Pwnd (HIBP) Hash List

If you don't have internet access on the Netwrix Access Analyzer (formerly Enterprise Auditor)
server, or you want to download the files from another location with internet access, use the Pwnd
Passwords Downloader.

The Pwnd Passwords Downloader is a Dotnet tool that downloads all Pwned Passwords hash ranges and
saves them offline for use without a dependency on the k-anonymity API. Use this tool to get the
latest breached hashes from the Have I Been Pwnd (HIBP) database.

:::note
The
[](https://github.com/HaveIBeenPwned/PwnedPasswordsDownloader)[Pwnd Passwords Downloader](https://github.com/HaveIBeenPwned/PwnedPasswordsDownloader)
is a third-party, open source tool that the HaveIBeenPwned team created and distributes under a
BSD 3-Clause License. You might experience issues during the hash download process, depending on your
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

The HIBP database takes up additional space on the machine where you copy it (approximately 13 GB,
but subject to change). The Have I Been Pwnd database (HIBP) hashes can take up to 30 GB. ensure
that you have enough free space on your disk in your Netwrix Access Analyzer (formerly Enterprise
Auditor) install directory (`%sainstalldir%`).

### Install the Pwnd Passwords Downloader

To install the Pwnd Passwords Downloader:

**Step 3 –** Open command prompt, and navigate to your .NET install folder (for example,
`C:\Program Files (x86)\dotnet`).

**Step 4 –** Run the following command:

```
dotnet tool install --global haveibeenpwned-downloader
```

![hibp_installation_0](/images/threatprevention/7.5/admin/configuration/hibp_installation_0.webp)

**Step 5 –** Close the command prompt.

### Update an Installed Pwnd Passwords Downloader

To update an installed Pwnd Passwords Downloader:

**Step 1 –** Open the command prompt.

**Step 2 –** Run the following command:

```
dotnet tool update --global haveibeenpwned-downloader
```

![hibp_installation_1](/images/threatprevention/7.5/admin/configuration/hibp_installation_1.webp)

### Download NTML Hashes with the Pwnd Passwords Downloader

To download NTLM hashes:

**Step 1 –** Navigate to the folder where you want to download the hashes.

**Step 2 –** Download all NTLM hashes to a single txt file, called for example
`pwnedpasswords_ntlm.txt`.

Run:

```
haveibeenpwned-downloader.exe -n pwnedpasswords_ntlm
```

![hibp_installation_3](/images/threatprevention/7.5/admin/configuration/hibp_installation_3.webp)

This screenshot shows the completed download.

**Step 3 –** To overwrite an existing hash list, run:

```
haveibeenpwned-downloader.exe -n pwnedpasswords_ntlm -o
```

For a complete list of available parameters, check the
[Pwnd Passwords Downloader GitHub page](https://github.com/HaveIBeenPwned/PwnedPasswordsDownloader).
