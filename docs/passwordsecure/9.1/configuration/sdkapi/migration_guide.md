---
title: "migration_guide"
description: "migration_guide"
sidebar_position: 10
---

## Migration Guide: Breaking Changes - API Login

Overview: We've enhanced the login authentication process to offer a more dynamic and secure
experience. This update introduces a new method of authentication, effective for servers from
version 8.12 onward.

:::warning
Important Update: Starting from server version 9.0, the previous login method will no
longer be functional. Users must adopt the new authentication approach provided in our API to
continue accessing the services.
:::


#### Why was this change done?

Since version 8.12, our server and clients are supporting authentication methods other than
passwords. Therefore, we have introduced a two-step authentication in our server and our clients.
After entering the username, the server is asked for the main factor for the authentication.With the
release of version 8.12, our server and client applications have expanded their support for
authentication methods beyond traditional passwords. Consequently, to enhance security, a two-step
authentication process has been introduced within both our server and client environments. This
process entails the user inputting their username, followed by a request to the server for the
primary authentication factor. Notably, this change was not initially implemented in our APIs.

To align our systems with enhanced security standards, we have undertaken the implementation of the
new PBKDF2 hashing iteration count. As part of this transition, we have made the strategic decision
to discontinue the use of the old authentication endpoint. Subsequently, we have diligently
integrated the new authentication mechanism into our APIs to ensure a consistent and secure user
experience.

Transition details:

- **Old Method Deprecation**: The previous login method is deprecated and no longer operational with
  servers of version 9.0.
- **New Authentication Requirement:** To access our services, users must switch to the updated
  authentication method in our APIs, compatible with servers from version 8.12 onward. Versions
  older than 8.12 are no longer operational with the API. If you're using such an old version,
  please use the old API.

:::warning
Action Required: Ensure that your server version is 8.12 or later to implement the new
authentication method and seamlessly access our services. Update your integration with the API to
incorporate the revised login interface and maintain uninterrupted service access.
:::


Below are code examples for the previous and updated authentication methods.

#### C#

**Previous authentication method (deprecated)**

```
var database = "your-database";
var username = "your-username";
var password = "your-password";
var psrApi = new PsrApi("your-endpoint");
var mfaRequest = await psrApi.AuthenticationManager.Login(database, username, password);
while (mfaRequest != null) {
    // Gathering user input for authentication fields
    Console.Write(mfaRequest.DisplayName); 
    foreach (var field in mfaRequest.RequiredFields)
    {
        Console.Write(field.Type.ToString()); 
        var mfa = Console.ReadLine();
        field.Value = mfa;
    } 
    mfaRequest = await psrApi.AuthenticationManager.Login(database, username, password, mfaRequest.RequiredFields);
}
```

**New authentication method (required for version 9.0 onwards)**

```
var database = "your-database";
var username = "your-username";
var psrApi = new PsrApi("your-endpoint");
var authenticationFlow = psrApi.AuthenticationManagerV2.StartNewAuthentication(database, username);
await authenticationFlow.StartLogin();
while (!authenticationFlow.IsAuthenticated) {
    var requirement = authenticationFlow.GetNextRequirement();
    var selectedRequirement = requirement.PossibleRequirements.FirstOrDefault() as DynamicFillableAuthentication;
    foreach (var field in selectedRequirement.Fields) {
        // Gather user input for authentication fields from the console
        Console.Write(field.Key);
        field.Value = Console.ReadLine();
}
    await authenticationFlow.Authenticate(selectedRequirement);
}
```

#### JavaScript

**Previous authentication method (deprecated)**

```
const database = 'your-database'
const username = 'your-username'
const password = 'your-password'
let api = new PsrApi('your-endpoint')
let mfaRequest = await psrApi.authenticationManager.login(database, username, password)
while (mfaRequest) {
    for (const field of mfaRequest.requiredFields) {
        field.value = prompt(field.type)
    }
    mfaRequest = await psrApi.authenticationManager.login(database, username, password, mfaRequest.requiredFields);
}
```

**New authentication method (required for version 9.0 onwards)**

```
const database = 'your-database'
const username = 'your-username'
let api = new PsrApi('your-endpoint')
await psrApi.authenticationManagerV2.startLogin(database, username)
while (!psrApi.authenticationManagerV2.isAuthenticated) {
    let requirement = await psrApi.authenticationManagerV2.getNextRequirement()
    let selectedRequirement = requirement.PossibleRequirements[0]
    for (const field of selectedRequirement.Fields) {
        // Simulating console interaction to gather user input
        field.Value = prompt(field.Key)
    } 
    await psrApi.authenticationManagerV2.authenticate(selectedRequirement)
}
```

#### Implementation explanation

The API object is created as always: by passing the server address to the constructor.

After that, the implementation differs slightly between C# and JavaScript. For C#, we’re getting the
authentication flow via **psrApi.AuthenticationManagerV2.StartNewAuthentication("your-database",
"your-username");**. On the resulting instance, the asynchronous method **StartLogin()** needs to be
called and awaited. Using the JavaScript API, we can directly call and await the
**psrApi.authenticationManagerV2.startLogin('your-database', 'your-username)** method.

After this, you must call the **GetNextRequirement()** method. The result contains the requirements
the user has to fill in. It usually contains a “Fields“ list, where the “Value” needs to be set. The
filled requirements need to be sent to the server via
**psrApi.authenticationManagerV2.authenticate** method. Don’t forget to wait for the result (using
the **await** keyword).

Now, the authentication via API also provides the possibility to configure a second factor and
change the user password during login. In this case, the result of the **GetNextRequirement** call
has the property “IsConfiguration” set to true. If the user can choose between multiple second
factors, they are all part of the “PossibleRequirements” array. Select the one you want to use, fill
in the fields, and send the requirement via **authenticate** method.

As soon as the authentication is completed, the **psrApi.authenticationManagerV2.isAuthenticated**
property is set to true.

For any queries or assistance in transitioning to the new authentication method, please refer to our
updated documentation or reach out to our support team.

Thank you for your cooperation as we continue to improve security and usability within our API.
