---
title: "Login Account Templates"
description: "Login Account Templates"
sidebar_position: 10
---

# Login Account Templates

There are three options for Login Account Templates in an Activity:

- Use a specific account name — For example, to always connect the Activity as a service account
  might be “democorp\svc_account_name”
- Use a mask to select a user’s unique admin account using variable substitution.

    - For Users and Groups, acceptable substitute variables that map to the users AD attributes are:
      `%domain%`, `%targetdomain%`, `%samaccountname%`, `%email%`, `%department%`, `%sessionid%`,
      `%hostname%`, `%dnshostname%`, `%fqdn%`, `%upn-username%`, `%upn-domain%`, `%email-username%`,
      `%email-domain%`, `%firstname%`, `%lastname%`, `%displayname%`, `%fullname%`

        - Example 1: “`%domain%\%samaccountname%-a`”, a user with an Privilege Secure login name of
          “sblab\jsmith” would result in a login account of “sblab\jsmith-a”
        - Example 2: “`%upn-username%-a@%upn-domain%`”, a user with an Privilege Secure login name
          of “jsmith@sblab.com” would result in a login account of “jsmith-a@sblab.com”
        - Example 3: “`%email-username%-a@%email-domain%`”, a user with an Privilege Secure login
          name of “jsmith@netwrix.com” would result in a login account of “jsmith-a@netwrix.com”
        - When a domain name is detected in the template field, i.e. contains a “\” character, the
          Create Local Account option has no effect

    - For Applications, the following masks are available:

        - %samaccountname%, %department%, %email%, %userprincipalname%, %displayname%

- Use a mask to define an account that will be created locally on the target resource — For example,
  a mask of “`%domain%_%samaccountname%`” in conjunction with the Create Local Account option set to
  yes, will result in a local account being created using name substitution so the user
  “sblab\jsmith” will be connected to a local account named “sblab_jsmith”

:::note
The value of each mask can be customized on the
[Properties Tab](/docs/privilegesecure/4.2/admin/interface/usersgroups/usergroupapplication/properties.md) of the Application details page. See the
[User, Group, & Application Details Page](/docs/privilegesecure/4.2/admin/interface/usersgroups/usergroupapplication/usergroupapplication.md) topic for additional
information.
:::


## Functions for Login Account Templates

### first()

The `first()` function returns the specified number of characters starting from the beginning of the
string.

%first(string stringToManipulate, int numCharactersReturned)/first%

**Parameters**

stringToManipulate (string)

The string or Privilege Secure Login Account Template mask to be manipulated.

numCharactersReturned (int)

The number of characters, starting from the beginning of the string, to be returned based on
supplied `stringToManipulate` parameter.

**Notes**

`int numCharactersReturned` must be a positive number.

If `int numCharactersReturned` exceeds string `stringToManipulate` then the entire string will be
returned.

**Examples**

`%first(jsmith,3)/first%`

The above example will return: "jsm"

A common use case for this function is to manipulate Privilege Secure Login Account Template masks
such as `%samaccountname%`, to change how what the Login Account Template evaluates to when an
Privilege Secure user provisions an activity session.

For example:

`%first(%samaccountname%,3)/first%`

In the example above, if "`%samaccountname%`" normally evaluates to "jsmith" then the return value
of the `first()` function will be "jsm"

### substr()

The `substr()` function starts from the specified index in the supplied string and returns from that
index to the end of the supplied string. If a negative number is supplied for
`int startIndexOrNumCharactersReturned` then the return value is that many characters from the end
of the supplied string.

**Parameters**

stringToManipulate (string)

The string or Privilege Secure Login Account Template mask to be manipulated.

startIndexOrNumCharactersReturned (int)

If non-negative, the return value is this index to the end of the supplied string. If negative, the
return value is this many characters from the end of the supplied string.

**Notes**

If `int startIndexOrNumCharactersReturned` is an index greater than the largest index in the
supplied string, then an empty string is returned.

**Examples**

`%substr(jsmith,2)/substr%`

The above example will return "mith"

`%substr(jsmith,-2)/substr%`

The above example will return "th"

A common use case for this function is to manipulate Privilege Secure Login Account Template masks
such as "`%samaccountname%`" to change how what the Login Account Template evaluates to when an
Privilege Secure user provisions an activity session.

For example:

`%substr(%samaccountname%,2)/substr%`

In the example above, if "`%samaccountname%`" normally evaluates to "jsmith" then the return value
of the `substr()` function will be "mith"

### replace()

The `replace()` function accepts a string as input, and replaces all instances of an oldString with
a newString.

**Parameters**

`stringToManipulate (string)`

The string or Privilege Secure Login Account Template mask to be manipulated.

`oldString (string)`

The string to be replaced

`newString (string)`

The string that will replace the newString

**Examples**

`%replace(jsmith,smith,jones)/replace%`

The above example will return "jjones"

### trim()

The `trim()` function removes the specified number of characters from the end of a string.

**Parameters**

`stringToManipulate (string)`

The string or Privilege Secure Login Account Template mask to be manipulated.

`numberOfCharacters (int)`

A non-negative integer should be supplied. That many characters will be trimmed from the end of the
string.

**Notes**

If `int numberOfCharacters` is an index greater than the length of the supplied string, then an
empty string is returned.

**Examples**

`%trim(jsmith-suffix,7)/trim%`

The above example will return "jsmith"

A common use case for this function is to remove known suffixes from Privilege Secure Login Account
Template masks such as "`%samaccountname%`" to change what the Login Account Template evaluates to
when an Privilege Secure user provisions an activity session.
