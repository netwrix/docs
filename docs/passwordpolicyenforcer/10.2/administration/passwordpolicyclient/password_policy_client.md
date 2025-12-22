---
title: "Password Policy Client"
description: "Password Policy Client"
sidebar_position: 110
---

# Password Policy Client

The Password Policy Client helps users to choose a compliant password. You do not have to install
the Password Policy Client to use Password Policy Enforcer, but the
[Similarity Rule](/docs/passwordpolicyenforcer/10.2/administration/rules/similarity_rule.md)
is only enforced if the Password Policy Client is installed.

The Password Policy Client helps users to choose a compliant password by explaining the password
policy to them, and by telling them why their password was rejected. If the Password Policy Client
is not installed, then users will see the default Windows error message when their password is
rejected.

![the_password_policy_client](/images/passwordpolicyenforcer/10.2/administration/the_password_policy_client.webp)

![the_password_policy_client_1](/images/passwordpolicyenforcer/10.2/administration/the_password_policy_client_1.webp)

The Password Policy Client displays the password policy during a password change so that users can
see the policy while they choose their password. The Password Policy Client also displays a detailed
rejection message to explain why a password was rejected. Both these messages are customizable.

:::note
The Password Policy Client does not modify any Windows system files. It also does not send
passwords or password hashes over the network.

:::
