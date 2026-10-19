---
title: "Use Case Stories"
description: "Use Case Stories"
sidebar_position: 40
---

# Use Case Stories

Here is a basic use case story to explain how Identity Manager manages IGA.

## Use Case

Mr. James was just hired to join the Contoso company as a mechanical engineer. He will need access to some of the company's most sensitive data, such as confidential blueprints, mechanical design software licenses, and source files.

### Identity management

The **central repository** already exists, containing all workers, all departments, etc.

Mr. James' manager uses one of Identity Manager's **workflows** to add Mr. James as a new employee, filling in his first name, last name, job title ("Mechanical Engineer"), his contract type ("permanent") and his start date.

The rest of Mr. James' personal information, such as his birth date, etc., can be filled later by someone from the HR department.

### Entitlement management

As Mr. James is not the first mechanical engineer in Contoso, Identity Manager already contains a **composite role** named "R&D Mechanical Engineer". This role is meant to give its owners access to the company's sensitive data useful for mechanical engineers. Assigning this role will trigger the assignment of several **single roles**, each one giving one access right.

Technically speaking, each access right is granted via a membership to a specific Active Directory group. Thus Identity Manager also contains a **navigation rule** that gives this group membership to any user owning this single role.

In our example, each access right corresponds to an AD group membership, but it could be any entitlement in any external system.

For Mr. James to get the access rights that he needs, there are several options:

- either Mr. James' manager manually assigns the "R&D Mechanical Engineer" role to him via a
**workflow** before his arrival, for example setting the start date to two weeks after Mr. James' first day as he will be in training before then;
- or there may be an **assignment rule** that automatically assigns the role to any user with the job
title "Mechanical Engineer", so Mr. James will get the role on his first day.

As the needed access rights involve the AD, Mr. James also needs to own an AD account which will be linked to its identity in Identity Manager via **correlation rules**.

Once the requests for the role and the account are approved, Identity Manager can **connect** to the Active Directory and create Mr. James' account and add it to the proper groups, via **provisioning rules**.

### Governance

Once the role model is well underway, Identity Manager can compare **existing** access rights to **expected** access rights. Thus, Identity Manager makes sure that Mr. James always has all the entitlements he needs in order to work, but not more to prevent security breaches.

## Next Steps

Let's learn about Identity Manager [Architecture](../../introduction-guide/architecture).

