---
title: "Migration guide"
description: "Migration guide"
sidebar_position: 10
---

## Breaking Changes - API Login

Overview: The login authentication process was enhanced to offer a more dynamic and secure
experience. This update introduces a new method of authentication, effective for servers from
version 8.12 onward.

**CAUTION:** Important Update: Starting from server version 9.0, the previous login method will no
longer be functional. Users must adopt the new authentication approach provided in the API to
continue accessing the services.

#### Why the change was done

Since version 8.12, the Password Secure server and clients are supporting authentication methods other than
passwords. Therefore, a two-step authentication was introduced in the server and the clients.
After entering the username, the server asks for the main factor for the authentication. With the
release of version 8.12, the server and client applications have expanded their support for
authentication methods beyond traditional passwords. Consequently, to enhance security, a two-step
authentication process has been introduced within both the server and client environments. This
process entails the user inputting their username, followed by a request to the server for the
primary authentication factor. Notably, this change wasn't initially implemented in the APIs.

To align the systems with enhanced security standards, the implementation of the new PBKDF2 hashing
iteration count was done. As part of this transition, the strategic decision
to discontinue the use of the old authentication endpoint was made. Subsequently, the new authentication
mechanism was integrated into the APIs to ensure a consistent and secure user experience.

Transition details:

- **Old Method Deprecation**: The previous login method is deprecated and no longer operational with
  servers of version 9.0.
- **New Authentication Requirement:** To access Password Secure services, users must switch to the updated
  authentication method in the APIs, compatible with servers from version 8.12 onward. Versions
  older than 8.12 are no longer operational with the API. If you're using such an old version,
  use the old API.

**CAUTION:** Action Required: Ensure that your server version is 8.12 or later to implement the new
authentication method and access the services. Update your integration with the API to
incorporate the revised login interface and maintain uninterrupted service access.

Below are code examples for the previous and updated authentication methods.

#### C#

Previous authentication method (deprecated)

```csharp
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

New authentication method (required for version 9.0 onwards)

```csharp
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

Previous authentication method (deprecated)

```javascript
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

New authentication method (required for version 9.0 onwards)

```javascript
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

After that, the implementation differs slightly between C# and JavaScript. For C#, the authentication flow
can be accessed via **psrApi.AuthenticationManagerV2.StartNewAuthentication("your-database",
"your-username");**. On the resulting instance, the asynchronous method **StartLogin()** needs to be
called and awaited. Using the JavaScript API, the **psrApi.authenticationManagerV2.startLogin('your-database', 'your-username)**
method can be called directly.

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

For any queries or assistance in transitioning to the new authentication method, refer to the
updated documentation or reach out to the support team.

Thank you for your cooperation in continuing improving security and usability within the API.
