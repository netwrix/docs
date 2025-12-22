---
title: "Password Policy Client"
description: "Password Policy Client"
sidebar_position: 50
---

# Password Policy Client

The Password Policy Client helps users to choose a compliant password. Detailed information is
provided if their new password is rejected.

The Password Policy Client is optional. If it is not installed, the
[Similarity Rule](/docs/passwordpolicyenforcer/11.0/admin/manage-policies/rules/similarity_rule.md) can not be enforced. Users only see the default Windows error
message if their password is rejected, not the detailed help they receive from the Password Policy
Client.

![the_password_policy_client](/images/passwordpolicyenforcer/11.0/administration/the_password_policy_client.webp)

![the_password_policy_client_1](/images/passwordpolicyenforcer/11.0/administration/the_password_policy_client_1.webp)

The Password Policy Client displays the password policy during a password change so that users can
see the policy while they choose their password. The Password Policy Client also displays a detailed
rejection message to explain why a password was rejected. Both these messages are customizable.

:::note
The Password Policy Client does not modify any Windows system files. It also does not send
passwords or password hashes over the network.

:::
