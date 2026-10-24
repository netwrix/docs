---
title: "Login account templates"
description: "Look up the variables and functions you can use in a login account template to control the account name that an activity session uses."
sidebar_position: 30
---

# Login account templates

A login account template sets the name of the account that an activity session uses. It is the **Login Account Template** field on the activity, not a separate page. See [Create an activity](create-activity.md).

The field applies to the Managed, Activity Token, and Vault login accounts. It also applies to the Requester login account when **Requester Login Format** is **Custom**.

A template can be:

- **A specific account name.** For example, `example\svc_account_name` always connects the activity as that service account.
- **A mask.** A mask uses variables to build a name for each user, such as `%domain%\%samaccountname%-a`.
- **A mask for a local account.** A mask such as `%domain%_%samaccountname%` with **Create Account** selected creates a local account on the resource. For the user `example\jsmith`, the account is `example_jsmith`.

When the template contains a domain name, which means it contains a backslash (`\`), the **Create Account** option doesn't create a local account.

{/* TODO verify: the 26.03 docs describe this as the Create Local Account option having no effect when the template contains a backslash. Confirm the behavior of Create Account in 26.07. */}

For an Activity Token activity, you can leave the template empty. See [Name length and Activity Token names](#name-length-and-activity-token-names).

:::note
To change the user name format that a Requester activity uses, set **Requester Login Format** to **Custom** and enter a template.
:::

:::warning
A **Custom** requester login format that uses a trim-based template can fail for Linux and AIX resources with the error "Unable to find custom format user" (PSAM-1325). No fix ships in 26.07.3. Use one of the standard requester login formats on those platforms.
:::

## Variables

Privilege Secure replaces each variable with a value for the user and the resource when the session starts.

| Variable | Value |
|---|---|
| `%samaccountname%` | The user name part of the requester's account, without the domain. |
| `%domain%` | The NetBIOS name of the requester's domain. |
| `%targetdomain%` | The NetBIOS name of the domain of the resource. |
| `%email%` | The requester's email address. |
| `%email-username%` | The part of the email address before the `@`. |
| `%email-domain%` | The part of the email address after the `@`. |
| `%upn-username%` | The part of the user principal name (UPN) before the `@`. |
| `%upn-domain%` | The part of the UPN after the `@`. |
| `%firstname%` | The requester's first name. |
| `%lastname%` | The requester's last name. |
| `%displayname%` | The requester's display name. |
| `%fullname%` | The requester's full name. |
| `%department%` | The requester's department. |
| `%sessionid%` | The session ID. |
| `%hostname%` | The NetBIOS name of the resource. |
| `%dnshostname%` | The DNS host name of the resource. |
| `%fqdn%` | The DNS host name of the resource. |

When the resource isn't joined to a domain, `%targetdomain%` isn't replaced.

{/* TODO verify: the value of %domain% when the requester is a local user. */}

### Examples

| Template | Requester | Login account |
|---|---|---|
| `%domain%\%samaccountname%-a` | `example\jsmith` | `example\jsmith-a` |
| `%upn-username%-a@%upn-domain%` | `jsmith@example.com` | `jsmith-a@example.com` |
| `%email-username%-a@%email-domain%` | `jsmith@example.com` | `jsmith-a@example.com` |
| `%targetdomain%\%samaccountname%` | `jsmith` on a resource in the `EXAMPLE` domain | `EXAMPLE\jsmith` |

{/* TODO verify: the 26.03 docs say users and groups and applications each have their own set of masks, and the values of the masks can be customized on the Properties tab of the user, group, or application details page. Confirm in 26.07 and add a link to the users and groups page. */}

## Functions

Functions change a string. Each function starts with `%` and the function name, and ends with `/` and the function name followed by `%`. You can pass a variable as the string. Separate arguments with commas.

### first

Returns the first characters of a string.

```text
%first(string,count)/first%
```

| Argument | Description |
|---|---|
| `string` | The text or variable to change. |
| `count` | The number of characters to return, counting from the start. A positive number. If it is larger than the string, the whole string returns. |

`%first(jsmith,3)/first%` returns `jsm`. `%first(%samaccountname%,3)/first%` returns `jsm` for the user `jsmith`.

### substr

Returns the part of a string that starts at an index, or the last characters of a string.

```text
%substr(string,index)/substr%
```

| Argument | Description |
|---|---|
| `string` | The text or variable to change. |
| `index` | A positive number removes that many characters from the start and returns the rest. A negative number returns that many characters from the end. The value can't be `0`. |

`%substr(jsmith,2)/substr%` returns `mith`. `%substr(jsmith,-2)/substr%` returns `th`. If a positive index is the same as or larger than the string length, the function returns an empty string. If a negative number is larger than the string, the function returns the whole string.

### replace

Replaces every occurrence of one string with another.

```text
%replace(string,old,new)/replace%
```

| Argument | Description |
|---|---|
| `string` | The text or variable to change. |
| `old` | The text to find. It can't contain a `%` character. |
| `new` | The text to put in its place. It can't contain a `%` character. |

`%replace(jsmith,smith,jones)/replace%` returns `jjones`.

### trim

Removes characters from the end of a string.

```text
%trim(string,count)/trim%
```

| Argument | Description |
|---|---|
| `string` | The text or variable to change. |
| `count` | The number of characters to remove from the end. Must be greater than `0`. If it is the same as or larger than the string length, the function returns an empty string. |

`%trim(jsmith-suffix,7)/trim%` returns `jsmith`. Use it to remove a known suffix from a variable such as `%samaccountname%`.

## Template rules

Privilege Secure rejects a template that breaks any of these rules:

- The template has an even number of `%` characters.
- Every function has a matching start and end.
- The template has no comma or `/` character outside a function. A function uses one comma, except `replace`, which uses two.

## Name length and Activity Token names

Privilege Secure applies these rules to the name that a template produces:

- **Managed and Custom Requester templates.** Privilege Secure truncates the user-name part of the result to 20 characters. Vault and Resource names aren't truncated.
- **Activity Token.** Privilege Secure keeps the first 15 characters of the result, or the activity token complexity **Length** minus 5 when a policy sets it. It then appends random characters to reach 20 characters, or the policy **Length**. See [Activity token complexity](../access-policies/activity-token-complexity.md).
- **Empty template.** Only Activity Token allows an empty template, which produces a fully random name. For the other login accounts, the activity fails with the message "No Login Account Template specified on Activity".
