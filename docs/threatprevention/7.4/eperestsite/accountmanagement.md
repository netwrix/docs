# Site Account Management APIs

You can use APIs to perform the following functions for user accounts that can access the EPE Rest
Service:

- Get all User Accounts
- Create an Account
- Get a User with a Specific User ID
- Get a User with a Specific User Name
- Delete an Account

## GET api/account/users

This API returns a list of internal accounts stored in the EpeUsers database.

Authentication required – Yes

Authentication Type – Basic authentication. Any valid account such as a local account for this
machine or a domain account that can be verified on this machine should work.

Example

![GET api/account/users](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/users.webp)

## POST api/account/create

This API creates a new internal account in the EpeUsers database.

Authentication required – Yes

Authentication Type – Basic authentication

Required Input Parameters

```
{
"username":"accountname",
"password":"password",
"confirmpassword":"password",
"firstname":"firstname",
"lastname":"lastname"
}
```

Example

![POST api/account/create](/img/product_docs/accessanalyzer/11.6/admin/report/create.webp)

## GET api/account/user/`<userId>`

This API returns information about an internal account stored in the EpeUsers database with the User
Id value as the input parameter.

Authentication required – Yes

Authentication Type – Basic authentication

Example

![GET api/account/user/`<userId>`](/img/versioned_docs/threatprevention_7.4/threatprevention/eperestsite/userid.webp)

## GET api/account/user/`<userName>`

This API returns information about an internal account stored in the EpeUsers database with the User
Name value as the input parameter.

Authentication required – Yes

Authentication Type – Basic authentication

Example

![GET api/account/user/`<userName>`](/img/versioned_docs/threatprevention_7.4/threatprevention/eperestsite/username.webp)

## DELETE api/account/delete?userName=`<username>`

This API deletes an internal account stored in the EpeUsers database with the User Name value as the
input parameter.

Authentication required – Yes

Authentication Type – Basic authentication

Example

![DELETE api/account/delete?userName=`<username>`](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/search/query/delete.webp)

To verify the result of this operation, you can use “GET api/account/users” or check the contents of
the [EpeUsers].[dbo].[AspNetUsers] database table.
