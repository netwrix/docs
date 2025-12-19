---
title: "Revealing passwords"
description: "Revealing passwords"
sidebar_position: 20
---

# Revealing passwords

## What is involved in revealing passwords?

Not all information is encrypted by the MSSQL database in Netwrix Password Secure for performance
reasons. Only the password itself (=secret) is encrypted with the help of the used encryption
algorithms and is then saved in the MSSQL database. As access to the MSSQL server is otherwise
secured via access permissions, this process enables the **maximum possible working speed** with a
**unchanged high level of security** through the use of **sophisticated**, **cryptographic
methods**. Revealing passwords describes the mechanism by which a password is made visible to the
user in the client. This process for dealing with passwords very precisely reflects the importance
of data security in Netwrix Password Secure – and this process will thus be described in detail
below.

### Example case

The record "Blogger" has been saved in the database and is visible to the logged-in user. It can
thus be deduced that the user has at least a read right for the record. As can be gathered from the
authorization concept, the user thus also generally has a read right to the password itself. This
means the user can view the value of the password using the "reveal" function.

![Show password](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/passwords/revealing_passwords_1-en.webp)

## Revealing passwords – diagram

In this context, it is important to note that the word "reveal" does not really accurately describe
this process. It creates the **incorrect** impression that the client already has the password and
only needs to reveal it. However, the processes running in the background until the password are
revealed are much more complex and will thus be described below.

![revealing password diagram](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/passwords/revealing_passwords_2-en.webp)

### Saving the password on the server

Even though you would assume the opposite, at the start a masked password (\*) is neither available
on the client nor the server in plain text! The password is stored as part of the MSSQL database in
a hybrid encrypted state via the two methods **AES 256** and **RSA**. Accordingly, it is not
currently possible either on the server or the client to view the password. If you mark a record,
the password is not available at all on the client and is encrypted on the server before it is
revealed.

### The encrypted password is requested

Pressing the "reveal"- button triggers the process for requesting the password. A request is sent to
the server to apply for the encrypted password to be released. The server itself does not possess
the required key (private key) to decrypt the password. Therefore, it can only deliver the
**encrypted value**.

### Checking the permissions

Whether the request sent in step 2 is approved is defined in the authorization concept. Once the
request has been received, the server checks whether the user possess the required rights. It also
checks the possible existence of other security mechanisms such as a seal or password masking. If
the necessary requirements for releasing the password have been met, the server now sends the
**encrypted password**. In the same step, a **log file entry** is saved that documents the user’s
access to the password.

### Decrypting the password on the client

The user now has the encrypted password which has been delivered by the server. The user himself
possesses the **private key** required for decrypting the password and can now view the actual
password.
