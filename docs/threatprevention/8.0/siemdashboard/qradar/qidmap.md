---
title: "QIDmap Information for QRadar SIEM Integration"
description: "QIDmap Information for QRadar SIEM Integration"
sidebar_position: 30
---

# QIDmap Information for QRadar SIEM Integration

Vendors have the ability to create what is called a QIDmap. The purpose of the mapping file is to
create a listing of the events that the vendor can provide. It also creates a mapping that IBM
consumes, producing a DSM. Once the DSM is in place, QRadar can take Threat Prevention events and
categorize them.

The built-in low-level categories have two levels:

- IBM will look to see if it can match the EventID field AND the Event Category field. If a match is
  found, the data will be displayed using the Event Name Threat Prevention supplied in the QIDmap.
  The data will be linked to the defined Low Level Category.

- If no EventID field match is found, IBM will default back to just the Event Category field. The
  fallback ID of 19001 is IBM’s collection of general auditing information.

| EventID                                               | Event Category       | Low Level Category | Event Name                                                            |
| ----------------------------------------------------- | -------------------- | ------------------ | --------------------------------------------------------------------- |
| general auditing information                          | Object Added         | 19001              | Active Directory Object Created                                       |
| Active DirectorycomputerObject AddedFalseTrue         | Object Added         | 3041               | Active Directory Computer Creation Blocked by Threat Prevention       |
| Active DirectorycomputerObject AddedTrueFalse         | Object Added         | 3041               | Active Directory Computer Created                                     |
| Active DirectorygroupObject AddedFalseTrue            | Object Added         | 3038               | Active Directory Group Creation Blocked by Threat Prevention          |
| Active DirectorygroupObject AddedTrueFalse            | Object Added         | 3038               | Active Directory Group Created                                        |
| Active DirectoryuserObject AddedFalseTrue             | Object Added         | 3031               | Active Directory User Creation Blocked by Threat Prevention           |
| Active DirectoryuserObject AddedFalseTrue             | Object Added         | 3031               | Active Directory User Created                                         |
| general auditing information                          | Object Deleted       | 19001              | Active Directory Object Deleted                                       |
| Active DirectorycomputerObject DeletedFalseTrue       | Object Deleted       | 3043               | Active Directory Computer Deletion Blocked by Threat Prevention       |
| Active DirectorycomputerObject DeletedFalseTrue       | Object Deleted       | 3043               | Active Directory Computer Deleted                                     |
| Active DirectorygroupObject DeletedFalseTrue          | Object Deleted       | 3040               | Active Directory Group Deletion Blocked by Threat Prevention          |
| Active DirectorygroupObject DeletedFalseTrue          | Object Deleted       | 3040               | Active Directory Group Deleted                                        |
| Active DirectoryuserObject DeletedFalseTrue           | Object Deleted       | 3035               | Active Directory User Deletion Blocked by Threat Prevention           |
| Active DirectoryuserObject DeletedFalseTrue           | Object Deleted       | 3035               | Active Directory User Deleted                                         |
| general auditing information                          | Object Modified      | 19001              | Active Directory Object Modified                                      |
| Active DirectorycomputerObject ModifiedFalseTrue      | Object Modified      | 3042               | Active Directory Computer Modification Blocked by Threat Prevention   |
| Active DirectorycomputerObject ModifiedFalseTrue      | Object Modified      | 3042               | Active Directory Computer Modified                                    |
| Active DirectorygroupObject ModifiedFalseTrue         | Object Modified      | 3039               | Active Directory Group Modification Blocked by Threat Prevention      |
| Active DirectorygroupObject ModifiedFalseTrue         | Object Modified      | 3039               | Active Directory Group Modified                                       |
| Active DirectoryuserObject ModifiedFalseTrue          | Object Modified      | 3032               | Active Directory User Modification Blocked by Threat Prevention       |
| Active DirectoryuserObject ModifiedFalseTrue          | Object Modified      | 3032               | Active Directory User Modified                                        |
| general auditing information                          | Object Moved/Renamed | 19001              | Active Directory Object Moved or Renamed                              |
| Active DirectorycomputerObject Moved/RenamedFalseTrue | Object Moved/Renamed | 3042               | Active Directory Computer Move or Rename Blocked by Threat Prevention |
| Active DirectorycomputerObject Moved/RenamedFalseTrue | Object Moved/Renamed | 3042               | Active Directory Computer Moved or Renamed                            |
| Active DirectorygroupObject Moved/RenamedFalseTrue    | Object Moved/Renamed | 3039               | Active Directory Group Move or Rename Blocked by Threat Prevention    |
| Active DirectorygroupObject Moved/RenamedFalseTrue    | Object Moved/Renamed | 3039               | Active Directory Group Moved or Renamed                               |
| Active DirectoryuserObject Moved/RenamedFalseTrue     | Object Moved/Renamed | 3032               | Active Directory User Move or Rename Blocked by Threat Prevention     |
| Active DirectoryuserObject Moved/RenamedFalseTrue     | Object Moved/Renamed | 3032               | Active Directory User Moved or Renamed                                |
| GPO LockdownAddFalseTrue                              | Add                  | 3030               | GPO Setting Modification Blocked by Threat Prevention                 |
| GPO LockdownDeleteFalseTrue                           | Delete               | 3030               | GPO Setting Modification Blocked by Threat Prevention                 |
| SI Events LogGPO AddedTrueFalse                       | GPO Added            | 3030               | Active Directory Group Policy Object Setting Defined                  |
| SI Events LogGPO DeletedTrueFalse                     | GPO Deleted          | 3030               | Active Directory Group Policy Object Setting Undefined                |
| SI Events LogGPO ModifiedTrueFalse                    | GPO Modified         | 3030               | Active Directory Group Policy Object Modified                         |
| SI Events LogGPO RenamedTrueFalse                     | GPO Renamed          | 3030               | Active Directory Group Policy Object Modified                         |
| SI Events LogGPO UntranslatedTrueFalse                | GPO Untranslated     | 3030               | Active Directory Group Policy Object Modified                         |
| Windows File SystemAccess Rights ChangeTrueFalse      | Access Rights Change | 8014               | Windows File System Folder or File Access Rights Change               |
| Windows File SystemAttribute ChangeTrueFalse          | Attribute Change     | 8014               | Windows File System Folder or File Attribute Change                   |
| Windows File SystemAudit Config ChangeTrueFalse       | Audit Config Change  | 8014               | Windows File System Folder or File Config Change                      |
| Windows File SystemCreateTrueFalse                    | Create               | 8028               | Windows File System Folder or File Create                             |
| Windows File SystemDeleteTrueFalse                    | Delete               | 8033               | Windows File System Folder or File Delete                             |
| Windows File SystemOwnerTrueFalse                     | Owner                | 8014               | Windows File System Folder or File Owner Change                       |
| Windows File SystemReadTrueFalse                      | Read                 | 8014               | Windows File System Folder or File Read                               |
| Windows File SystemRenameTrueFalse                    | Rename               | 8014               | Windows File System Folder or File Rename                             |
| Windows File SystemUpdateTrueFalse                    | Update               | 8014               | Windows File System Folder or File Update                             |
| Workstation EventsLockTrueFalse                       | Lock                 | 3004               | Workstation Locked                                                    |
| Workstation EventsLog OffTrueFalse                    | Log Off              | 3004               | Workstation Log Off                                                   |
| Workstation EventsLog OnTrueFalse                     | Log On               | 3004               | Workstation Log On                                                    |
| Workstation EventsScreen Saver StartTrueFalse         | Screen Saver Start   | 3004               | Workstation Screen Saver Start                                        |
| Workstation EventsScreen Saver StopTrueFalse          | Screen Saver Stop    | 3004               | Workstation Screen Saver Stop                                         |
| Workstation EventsUnlockTrueFalse                     | Unlock               | 3004               | Workstation Unlocked                                                  |
