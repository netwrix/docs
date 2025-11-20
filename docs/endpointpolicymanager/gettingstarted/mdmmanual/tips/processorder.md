---
title: "Understanding Processing Order of XML Data Files"
description: "Understanding Processing Order of XML Data Files"
sidebar_position: 50
---

# Understanding Processing Order of XML Data Files

Once a Endpoint Policy Manager license XML file or Endpoint Policy Manager XML data file is
delivered to a machine, it takes only seconds (up to 10 seconds) for the Endpoint Policy Manager
client-side extension (CSE) to process the files. You can add multiple XML data files in any
configuration. For instance, you might want to have the following scenario:

- WestSalesUser1 gets an XML data file stating that WinZip's password length must be 11.
- WestSalesUser2 gets an XML data file stating that WinZip's password length must be 12.
- WestSalesUser2 gets an XML data file dictating Acrobat Reader's JavaScript settings.
- WestSalesUsers Active Directory group gets an XML data file stating that Acrobat cannot be
  updated.
- Everyone on the computer gets the same Firefox settings.
- Everyone on the computer is locked out of the WinZip Cameras tab.

Files are processed in the following order:

**Step 1 –** All XML data files for groups are processed first. In the case where multiple XML data
files are specified for a particular group, they are processed in alphabetical order.

**Step 2 –** All XML data files specific to the user are processed next. In the case where multiple
XML data files are specified for a particular user, they are processed in alphabetical order.

**Step 3 –** All XML data files specific to the computer are processed last. In the case where
multiple XML data files are specified to a particular computer, they are processed in alphabetical
order.

If there is a conflict between settings within multiple XML data files, the last written XML data
file wins. Therefore, groups have the least precedence, and computer has the most precedence.

:::note
XML data files processed on a certain computer affect all users on that computer.
:::


Lastly, if there's a conflict between Endpoint Policy Manager XML data files and Endpoint Policy
Manager Active Directory Group Policy directives, the Active Directory Group Policy directives are
written last; therefore, they win.

:::note
Log files for the automatic application of XML data settings are found in
`%appdata%\local\PolicyPak` in a file called ppUser_onXMLdata.log.

:::

