---
title: "Site Account Management"
description: "Site Account Management APIs"
sidebar_position: 10
---

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

**Authentication required – Yes**

Authentication Type – Basic authentication. Any valid account such as a local account for this
machine or a domain account that can be verified on this machine should work.

**Example**

![GET api/account/users](/images/threatprevention/8.0/eperestsite/users.webp)

## POST api/account/create

This API creates a new internal account in the EpeUsers database.

**Authentication required – Yes**

Authentication Type – Basic authentication

**Required Input Parameters**

```
{
"username":"accountname",
"password":"password",
"confirmpassword":"password",
"firstname":"firstname",
"lastname":"lastname"
}
```

**Example**

![POST api/account/create](/images/threatprevention/8.0/eperestsite/create.webp)

## GET api/account/user/`<userId>`

This API returns information about an internal account stored in the EpeUsers database with the User
Id value as the input parameter.

**Authentication required – Yes**

Authentication Type – Basic authentication

**Example**

![GET api/account/user/userId](/images/threatprevention/8.0/eperestsite/userid.webp)

## GET api/account/user/`<userName>`

This API returns information about an internal account stored in the EpeUsers database with the User
Name value as the input parameter.

**Authentication required – Yes**

Authentication Type – Basic authentication

**Example**

![GET api/account/user/userName](/images/threatprevention/8.0/eperestsite/username.webp)

## DELETE api/account/delete?userName=`<username>`

This API deletes an internal account stored in the EpeUsers database with the User Name value as the
input parameter.

**Authentication required – Yes**

Authentication Type – Basic authentication

**Example**

![DELETE api/account/delete?userName=username](/images/threatprevention/8.0/eperestsite/delete.webp)

To verify the result of this operation, you can use “GET api/account/users” or check the contents of
the [EpeUsers].[dbo].[AspNetUsers] database table.
