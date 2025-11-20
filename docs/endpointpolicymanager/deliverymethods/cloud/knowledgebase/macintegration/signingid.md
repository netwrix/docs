---
title: "How to get SigningID of the package?"
description: "How to get SigningID of the package?"
sidebar_position: 50
---

# How to get SigningID of the package?

**Step 1 –** Install the desired pkg on the machine.

**Step 2 –** Open a terminal window and run the command.

Run the Pkgutil utility with flags.

`--packages, --pkgs`

List all installed package IDs on the specified --volume.

or

`--pkgs-plist`

List all installed package IDs on the specified --volume in

Mac OS X plist(5) format.

Example output from `PkgUtil --pkgs`

```
Mac-mini ~ % pkgutil --pkgs
com.apple.files.data-template
  com.apple.pkg.XProtectPayloads_10_15.16U4207
  com.apple.pkg.XProtectPlistConfigData_10_15.16U4179
com.apple.pkg.XProtectPlistConfigData_10_15.16U4197
com.apple.pkg.MRTConfigData_10_15.16U4173
  com.apple.pkg.MRTConfigData_10_15.16U4196
  com.apple.pkg.AppExceptions_12_0.16U2242  
com.apple.pkg.MRTConfigData_10_15.16U4178
  com.apple.pkg.AppExceptions_12_0.16U2225  
com.apple.pkg.XProtectPlistConfigData_10_15.16U4206
  com.apple.pkg.XProtectPlistConfigData_10_15.16U4170
  com.apple.pkg.XProtectPlistConfigData_10_15.16U4174
  com.apple.pkg.XProtectPlistConfigData_10_15.16U4203
  com.apple.pkg.XProtectPayloads_10_15.16U4209
  com.microsoft.package.Microsoft_AU_Bootstrapper.app
  com.mackeeper.MacKeeper.pkg
  com.piriform.pkg.CCleaner
  com.microsoft.package.Microsoft_AutoUpdate.app
  com.endpointpolicymanager.endpointpolicymanagerCloudCertificate
  com.endpointpolicymanager.endpointpolicymanager
  com.microsoft.SkypeForBusiness
  com.endpointpolicymanager.endpointpolicymanagerInstaller

```


