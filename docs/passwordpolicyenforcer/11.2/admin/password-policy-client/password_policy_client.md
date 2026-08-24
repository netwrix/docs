---
title: "Password Policy Client"
description: "Password Policy Client"
sidebar_position: 50
---

# Password Policy Client

The Password Policy Client helps users to choose a compliant password. If Password Policy Enforcer
rejects a new password, the Password Policy Client provides detailed information.

The Password Policy Client is optional. If it isn't installed, Password Policy Enforcer can't enforce
the [Similarity Rule](/docs/passwordpolicyenforcer/11.2/admin/manage-policies/rules/similarity_rule.md). If Password Policy Enforcer rejects a password, users only see the default Windows error
message, not the detailed help they receive from the Password Policy Client.

![the_password_policy_client](/images/passwordpolicyenforcer/11.2/administration/the_password_policy_client.webp)

![the_password_policy_client_1](/images/passwordpolicyenforcer/11.2/administration/the_password_policy_client_1.webp)

The Password Policy Client displays the password policy during a password change so that users can
see the policy while they choose their password. The Password Policy Client also displays a detailed
rejection message to explain why Password Policy Enforcer rejected the password. Both these messages are customizable.

:::note
The Password Policy Client doesn't modify any Windows system files. It also doesn't send
passwords or password hashes over the network.

:::
