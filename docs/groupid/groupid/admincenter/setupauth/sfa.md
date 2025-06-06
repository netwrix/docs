# Configure Second Factor Authentication

You can enable second factor authentication (SFA) for a user role in an identity store. This policy enforces role members to enroll their identity store accounts in Directory Manager using one or more authentication types. Supported authentication types are discussed in the [Authentication Policies - A Comparison](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/authpolicy.md#Authentication-Policies-A-Comparison) topic.

Once enrolled, role members must authenticate their accounts using an authentication type they enrolled with, while signing into Admin Center or theDirectory Manager portal. Users enrolled with multiple authentication types can use any one type to authenticate.

NOTE: Directory Manager SFA does not apply to Microsoft Entra ID MFA enabled users.

What do you want to do?

- [Configure Second Factor Authentication](#Configure-Second-Factor-Authentication)

## Configure Second Factor Authentication

To configure second factor authentication for a security role in an identity store, do the following:

Step 1 – Enable one or more authentication types for the identity store.

See the [Enable Authentication Types](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/authtypes.md) topic for details.

Step 2 – Enable second factor authentication for a security role in an identity store.

See the [Enable Second Factor Authentication](/docs/product_docs/groupid/groupid/admincenter/securityrole/policy/authentication.md#Enable-Second-Factor-Authentication) topic for details.

See Also

- [Authentication Policy](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/authpolicy.md)
- [Configure Multifactor Authentication](/docs/product_docs/groupid/groupid/admincenter/setupauth/mfa.md)
