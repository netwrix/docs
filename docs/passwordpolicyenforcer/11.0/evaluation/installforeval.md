---
title: "Install Password Policy Enforcer for Evaluation"
description: "Install Password Policy Enforcer for Evaluation"
sidebar_position: 20
---

# Install Password Policy Enforcer for Evaluation

The evaluation installation uses the standard installation packages:

- Server Installation: install on each server and domain controller in the domain you are
  evaluating. You can install manually using the procedure in
  [Install Password Policy Enforcer on a Server](/docs/passwordpolicyenforcer/11.0/installation/installationserver.md) or automatically
  with [Install with Group Policy Management](/docs/passwordpolicyenforcer/11.0/installation/installationgpm.md) procedure. Installing
  Password Policy Enforcer does not extend the Active Directory schema. Be sure and install the
  **Configuration Console** feature on at least one server.
- Client Installation: install on each workstation you are evaluating. The Password Policy Client is
  an optional Password Policy Enforcer component to help users choose compliant passwords. Follow
  the [Install Password Policy Enforcer Client](/docs/passwordpolicyenforcer/11.0/installation/installationclient.md) procedure, or
  [Install with Group Policy Management](/docs/passwordpolicyenforcer/11.0/installation/installationgpm.md).

You may need to create a firewall port exception on the domain controllers if you are evaluating the
Password Policy Client on a domain with client computers. See the
[Password Policy Client](/docs/passwordpolicyenforcer/11.0/admin/password-policy-client/password_policy_client.md) topic for additional
information.
