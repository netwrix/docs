---
title: "Backup, Restore, and XML Export and Import"
description: "Backup, Restore, and XML Export and Import"
sidebar_position: 50
---

# Backup, Restore, and XML Export and Import

In this section, we're going to learn about how to backup and restore with regards to Netwrix
Endpoint Policy Manager (formerly PolicyPak) Application Settings Manager and understand how
Endpoint Policy Manager Application Settings Manager performs Group Policy reporting.

Let's recall the three pieces that constitute Endpoint Policy Manager Application Settings Manager:

- The pXML file created using Endpoint Policy Manager DesignStudio. This is your source file that
  defines your AppSet.
- The Endpoint Policy Manager extension DLL. This is the output after you compile your pXML file,
  which enables you to see your AppSet inside the group policy object (GPO).
- The Endpoint Policy Manager Application Settings Manager data that is stored in the GPO. This
  defines the precise settings inside your GPO.

## Backup and Restore

:::note
Video: For an overview video of how to backup and restore, please see this
video:[Endpoint Policy Manager Application Settings Manager: Backup, Restore, Export, Import](/docs/endpointpolicymanager/gettingstarted/misc/videos/upgradingmaintenance/backup.md).
:::


The three pieces that constitute Endpoint Policy Manager Application Settings Manager should be
backed up in case of loss, failure, overwriting, or some other damage. Below, we describe some
suggested best practices for backing up your files.

The pXML files you create with the Endpoint Policy Manager DesignStudio should be placed in a secure
place and be available in case of loss or damage. These are only text (XML) files and can be easily
stored. Be sure to have backups of these files in case of an emergency. Treat them like any other
important document in your company.

The Endpoint Policy Manager extension DLLs are best placed in the Central Storage. These files are
then replicated to all domain controllers and are available for use when administrators roam from
machine to machine creating GPOs. However, these should also be backed up and stored in a secure
place where they can be available in case the Central Storage is damaged or someone deletes a
Endpoint Policy Manager extension DLL from it. These files are usually quite small and can be easily
stored.

The Endpoint Policy Manager Application Settings Manager data inside a GPO is backed up and restored
with normal GPMC backup procedures, as seen In the figure shown.

![backup_restore_and_xml_export](/images/endpointpolicymanager/troubleshooting/applicationsettings/backup/backup_restore_and_xml_export.webp)

The figure shown. Backing up data with normal GPMC backup procedures.

If a GPO is ever deleted, its data can be quickly restored using the GPMC's "Manage Backups" option,
also seen In the figure shown.

When restoring, the Endpoint Policy Manager Application Settings Manager data and all the modes
(Enforcement, Reversion, and Endpoint Policy Manager AppLock™) are restored.

## Settings for XML Export and Import

:::note
For an overview of exporting and importing settings, please see this video:
[Endpoint Policy Manager Application Settings Manager: Backup, Restore, Export, Import](/docs/endpointpolicymanager/gettingstarted/misc/videos/upgradingmaintenance/backup.md)
(at the 2 minute and 50 second mark).
:::


The exact settings you specified inside an AppSet within a GPO can be exported and imported. This
might be useful if you have to test out different scenarios (perhaps again and again) but don't want
to start fresh every time with the defaults you set within the AppSet. You might also want to
configure a group of settings within an AppSet and share those exact settings with another
administrator for later implementation.

The idea of exporting is simple: use your AppSet, set your settings, click on the Options button,
and then select "Export" to export the data, as seen In the figure shown.

![backup_restore_and_xml_export_1](/images/endpointpolicymanager/troubleshooting/applicationsettings/backup/backup_restore_and_xml_export_1.webp)

The figure shown. The exact settings you specified inside a Pak within a GPO can be exported and, later,
imported by selecting one of these options.

You will be prompted for a location to save your data. Be sure to give a name that makes sense for
your AppSet, configuration scenario, or test case. Note that the file is an XML file and can only be
used to import data into the same (or very similarly configured) AppSet. It cannot be loaded into
the Endpoint Policy Manager DesignStudio or used for any other purpose.

When you're ready, you can reverse the process by using the Endpoint Policy Manager | Import
function to import your previously exported settings. Note that an import will only change elements
that are defined within the XML you are importing. That is, the import process may overwrite some
existing values, and it may also leave existing values alone. Again, only values defined in the XML
are changed upon import.

:::note
Exporting settings in XML is different than XML data export, which is described in
Appendix A: Using Endpoint Policy Manager with MDM and UEM Tools. Use "Exporting Directives as XML
Data Files" to export settings to save or reload into Group Policy Objects. Use XML data export
(Appendix A) to deploy Endpoint Policy Manager settings without using Group Policy Objects, for
instance, with use of Microsoft Endpoint Configuration Manager, Endpoint Policy Manager MDM or
Endpoint Policy Manager Cloud.

:::



