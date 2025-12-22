---
title: "Exceptions Node Reports"
description: "Exceptions Node Reports"
sidebar_position: 60
---

# Exceptions Node Reports

The following report is available at the **Exceptions** node:

- [Exceptions Report](/docs/accessinformationcenter/12.0/resourceaudit/activedirectory/exceptions/exceptions.md)

The Exceptions node displays when exceptions have been identified on the selected domain. When it is
present, it can be expanded to view the exception type level reports. The following nodes may show
under the Exceptions node for a domain when that exception type has been identified:

- Circular Nesting – Groups with circular references in their effective membership
- Deeply Nested – Groups with deep levels of membership nesting
- Empty Group – Groups with no membership
- Large Groups – Groups with a large amount of effective members
- Large Token – Users with a large amount of authorization groups in their token
- Single Member Group – Groups with a single direct member
- Stale Membership – Groups with a high percentage of effective members that are stale users
- Stale Users – Users who have not logged onto the domain for an extended period of time

The Exceptions report for each exception type level displays filtered exception information. See the
[Exceptions by Type Report](/docs/accessinformationcenter/12.0/resourceaudit/activedirectory/exceptions/exceptionsbytype.md) topic for additional information.
