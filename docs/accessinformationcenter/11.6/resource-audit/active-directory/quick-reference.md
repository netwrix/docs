# Active Directory Reports Quick Reference

The following Active Directory reports are available for selection within the Resources pane.

## Active Directory Node Reports

The following reports are available at the Active Directory node level:

| Report                                                                                                      | Description                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [Domain Summary Report](/docs/accessinformationcenter/11.6/resource-audit/active-directory/domain-audit.md) | Provides a top-level view of domains that have been scanned.                                                                          |
| [Exceptions Report](/docs/accessinformationcenter/11.6/resource-audit/active-directory/exceptions.md)       | Provides a list of exceptions that were found across the targeted Active Directory environment. This report includes a Details table. |

## Active Directory > Domain Level Reports

The following reports are available at the domain level:

| Report                                                                                                                   | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| Activity Report                                                                                                          | Displayed but not populated at the domain level.                                                              |
| [Exceptions Report](/docs/accessinformationcenter/11.6/resource-audit/active-directory/exceptions.md)                    | Provides a list of exceptions found on the selected domain. This report includes a Details table.             |
| [Membership Changes Report](/docs/accessinformationcenter/11.6/resource-audit/active-directory/domain-audit.md)          | Provides a list of groups that had membership changes on the selected domain during the specified date range. |
| [Principal Attribute Changes Report](/docs/accessinformationcenter/11.6/resource-audit/active-directory/domain-audit.md) | Provides change event information by trustee on the selected domain during the specified date range.          |

## Active Directory > Domain > Domain Object Level Report

The following reports are available at the domain object level:

| Report                                                                                                   | Description                                                                                                                           |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [Access Report](/docs/accessinformationcenter/11.6/resource-audit/active-directory/domain-audit.md)      | Provides information on the level of access trustees have at the domain object level. This report includes a Permission Source table. |
| [Permissions Report](/docs/accessinformationcenter/11.6/resource-audit/active-directory/domain-audit.md) | Provides the trustees that have rights on the selected Active Directory object.                                                       |

## Active Directory > Domain > Exceptions Node Report

The following report is available at the Exceptions node level:

| Report                                                                                                | Description                                                                                                           |
| ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| [Exceptions Report](/docs/accessinformationcenter/11.6/resource-audit/active-directory/exceptions.md) | Provides the trustees that have rights on the selected Active Directory object. This report includes a Details table. |

## Active Directory > Domain > Exceptions > Exception Type Level Report

The following report is available at the exception type level:

| Report                                                                                                        | Description                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Exceptions by Type Report](/docs/accessinformationcenter/11.6/resource-audit/active-directory/exceptions.md) | Provides details on the selected exception type. An exception is defined as a problem or risk to Active Directory security. Each of these reports includes a Member Of table. Certain exception types also include a Members table. |
