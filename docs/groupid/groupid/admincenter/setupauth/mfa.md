# Configure Multifactor Authentication

You can define a multifactor authentication (MFA) policy for an identity store. This policy enforces
users to enroll their identity store accounts in Directory Manager using one or more authentication
types. Supported authentication types are discussed in the
[Authentication Policies - A Comparison](../identitystore/configure/authpolicy.md) topic.

Once enrolled, users must authenticate their identity store accounts using the authentication types
they enrolled with, when they perform any of the following actions in the Directory Manager portal:

- Reset identity store account passwords
- Unlock their accounts

Helpdesk users with restricted access also use authentication type(s) to authenticate end-users
before resetting their password or unlocking their identity store account. See the
[Set Restricted Mode](../securityrole/policy/helpdesk.md#set-restricted-mode) topic.

NOTE: Multifactor authentication defined in Microsoft Entra Admin Center does not integrate with MFA
in Directory Manager. See the
[Multifactor Authentication Policy](../identitystore/advsentraid.md#multifactor-authentication-policy)
topic.

What do you want to do?

- Configure Multifactor Authentication

## Configure Multifactor Authentication

To configure multifactor authentication for a security role in an identity store, do the following:

1. Enable one or more authentication types for the identity store.  
   See the [Enable Authentication Types](../identitystore/configure/authtypes.md) topic for details.
2. Enforce role members to use specific authentication types for multifactor authentication.  
   See the
   [Enforce Authentication Types for Multifactor Authentication](../securityrole/policy/authentication.md#enforce-authentication-types-for-multifactor-authentication)
   topic for details.

See Also

- [Authentication Policy](../identitystore/configure/authpolicy.md)
- [Configure Second Factor Authentication](sfa.md)
