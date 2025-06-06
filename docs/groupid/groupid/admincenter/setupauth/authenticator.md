# Set up Authentication via Authenticator

Users must install an authenticator app, such as Google Authenticator or Microsoft Authenticator, on their phones and use it to enroll and authenticate their identity store accounts in Directory Manager.

What do you want to do?

- [Enable the Authenticator Authentication Type for an Identity Store](#Enable-the-Authenticator-Authentication-Type-for-an-Identity-Store)
- [Enforce Authentication by Authenticator for a Role in an Identity Store](#Enforce-Authentication-by-Authenticator-for-a-Role-in-an-Identity-Store)

## Enable the Authenticator Authentication Type for an Identity Store

The Authenticator authentication type must be enabled for an identity store before it can be used for second factor authentication and multifactor authentication.

To enable it, see the [Enable Authentication Types](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/authtypes.md) topic.

## Enforce Authentication by Authenticator for a Role in an Identity Store

To enforce an authentication type, see the [Enforce Authentication Types for Multifactor Authentication](/docs/product_docs/groupid/groupid/admincenter/securityrole/policy/authentication.md#Enforce-Authentication-Types-for-Multifactor-Authentication) topic.

Role members must use an enforced authentication type for multifactor authentication. When an authentication type is enabled but not enforced, role members can choose to use it for enrollment and authentication.

__See Also__

- [Authentication Policy](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/authpolicy.md)
