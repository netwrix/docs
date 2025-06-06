# Set up Authentication via YubiKey

YubiKey is a key-sized device that users can plug into the computer’s USB slot to verify their identity. They can use it to enroll and authenticate their identity store accounts in Directory Manager.

YubiKey can only be used on a physical machine. Virtual machines are not supported.

YubiKey supports the following browsers:

- Google Chrome version 38 or later
- Opera version 40 or later
- Firefox (requires the U2F Support Add-on extension)

What do you want to do?

- [Enable YubiKey Authentication for an Identity Store](#Enable-YubiKey-Authentication-for-an-Identity-Store)
- [Enforce YubiKey Authentication for a Security Role in an Identity Store](#Enforce-YubiKey-Authentication-for-a-Security-Role-in-an-Identity-Store)

## Enable YubiKey Authentication for an Identity Store

You must enable the YubiKey authentication type for an identity store for users to use it for second factor authentication and multifactor authentication.

To enable it, see the [Enable Authentication Types](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/authtypes.md) topic.

## Enforce YubiKey Authentication for a Security Role in an Identity Store

To enforce an authentication type, see the [Enforce Authentication Types for Multifactor Authentication](/docs/product_docs/groupid/groupid/admincenter/securityrole/policy/authentication.md#Enforce-Authentication-Types-for-Multifactor-Authentication) topic.

Role members must use an enforced authentication type for multifactor authentication. When an authentication type is enabled but not enforced, role members can choose to use it for enrollment and authentication.

See Also

- [Authentication Policy](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/authpolicy.md)
