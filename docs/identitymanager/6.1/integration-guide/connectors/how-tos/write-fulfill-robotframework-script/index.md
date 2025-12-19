---
title: "Write a Robot Framework Script"
description: "Write a Robot Framework Script"
sidebar_position: 100
---

# Write a Robot Framework Script

This guide shows how to write a Robot Framework script that will be used by
[Fulfill-RobotFramework](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/robotframework/index.md).

## Structure of a Robot Framework Script

### Build the skeleton

A Robot Framework script is divided into four main parts:

1. **Settings**: contains the instructions to import library or external resource files.
2. **Variables**: contains the global variables shared by all the functions in the script.
3. **Keywords**: contains all the functions defined by the user.
4. **Test Cases**: contains the functions which will be run when the script is launched.

#### Example

```

*** Settings ***
Library  Telnet

*** Variables ***
${IPADDRESS}  192.168.1.22

*** Keywords ***
Open Telnet Connection
    Open Connection  ${IPADDRESS}  prompt=$

*** Test Cases ***
Run Provisioning
    Open Telnet Connection

```

Let's analyze the four parts of this example:

- **Settings**: we import here the Telnet library to use the functions defined in it.
- **Variables**: we define the variable `IPADDRESS` to use it later.
- **Keywords**: we define a custom function called `Open Telnet Connection`. It will use a function
  defined in the Telnet library (called `Open Connection`) and the variable `IPADDRESS` which has
  been defined before in the `Variables` section.
- **Test Cases**: we define here the main function which we choose to call `Run Provisioning` (it
  can be named anything), and which will be run when launching the script. It will use the function
  `Open Telnet Connection`.

Robot Framework needs two spaces between two different instructions to parse them correctly.  
For example, `Open Connection` consists of only one instruction. Only one space is thus needed
between the two words. But, `Open Connection ${IPADDRESS}` consists of two instructions, the
function and the parameter. Two spaces are then required to separate `Connection` from
`${IPADDRESS}`.  
To read your script more easily, you could also use the pipe character (`|`) between instructions,
like this: `Open Connection | ${IPADDRESS}`.

For more details, see
[Robot Framework Libraries](https://robotframework.org/#robot-framework-libraries).

### Define specific functions

To use a Robot Framework script for provisioning external systems with Usercube, the following
elements are required in the script:

- The import of a resource file written by Usercube called `UsercubeRobotFramework.resource`.
- The definition of three functions which will be called by Usercube to perform three required
  actions: `ExecuteAdd`, `ExecuteDelete` and `ExecuteModify`. These functions are where you will
  write the actions to perform on the external system.
- The use of one function to start the provisioning called `Launch Provisioning`.

Never modify the resource file `UsercubeRobotFramework.resource`.

#### Example

The resource file defined at the beginning of the script is located in Usercube's `Runtime` folder.
Therefore, you will have to change the path accordingly.

```

*** Settings ***
Resource  C:/identitymanagerContoso/Runtime/identitymanagerRobotFramework.resource

*** Keywords ***
ExecuteAdd
    [Arguments]  ${order}
    ...

ExecuteDelete
    [Arguments]  ${order}
    ...

ExecuteModify
    [Arguments]  ${order}
    ...

...

*** Test Cases ***
Run Provisioning
    ...
    Launch Provisioning
    ...

```

The parameter `${order}` is mandatory only for the three functions: `ExecuteAdd`, `ExecuteDelete`
and `ExecuteModify`. It is an object corresponding to the following sample provisioning order
(JSON):

```

{
    "AssignedResourceTypeId": "3930001",
    "ChangeType": "Added",
    "WorkflowInstanceId": "81",
    "Owner": {
        "Id": "21511",
        "InternalDisplayName": "007 - Bond James",
        "Identifier": "007",
        "EmployeeId": "007",
        "PhotoTag": -3065,
        "MainFirstName": "James",
        "MainLastName": "Bond",
        ...
    },
    "ResourceType": {
        "Id": "-41",
        "SourceEntityType": {
            "Id": "51",
            "Identifier": "Directory_User"
        },
        "TargetEntityType": {
            "Id": "70",
            "Identifier": "RobotFramework_User"
        },
        "Identifier": "RobotFramework_User_NominativeUser"
    },
    "Changes": {
        "identifier": "007",
        "firstName": "James",
        "lastName": "Bond"
    }
}
```

The elements of `${order}`can be accessed like this: `${order['Changes']['identifier']}`.

For more details about the handling of Robot Framework objects, see the
[Robot Framework User Guide](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html).

## Usercube Keywords

| Keyword                    | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | ------- |
| Catch Keyword              | **Arguments** `Keyword`: Keyword `*args` **Description** Launches `Keyword` with the given arguments `*args` if the keyword launched by `Try Keyword` failed. If `Try Keyword` was not called, this keyword will not do anything. `Catch Keyword` should always be called right after `Try Keyword`. **Example** Try to connect to `Usercube.com`. If the connection fails, restart the browser and try to connect to `Usercube.com`: `Connect to URL       Try Keyword  Go To  Usercube.com       Catch Keyword  Restart Browser At URL  Usercube.com`                                                                                                                                                                                                                                                               |
| Generate Password          | **Description** Generates a password based on the [password reset settings](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/passwordresetsettings/index.md) associated to the [resource type mapping](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/resourcetypemappings/index.md) being provisioned `Send Password Notification` should always be called after `Generate Password`, preferably right after the password is used. If `Send Password Notification` is not called before the provisioning of the resource is over, it will automatically be called. If multiple passwords should be generated, `Send Password Notification` should be called after each password generation. **Returns** `Password`: string |
| Get Secure Data            | **Arguments** `Attribute`: string `Erase Data`: boolean **Description** Retrieves the secured option `Attribute` from the connector configuration. If `Erase Data` is set to true, the secured option is deleted once it is read. **Example** Get Login option and erase it: ```Get Secure Data                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Login | True``` |
| Launch Provisioning        | **Description** Launches the provisioning defined by the provisioning orders. This keyword is required for any provisioning to happen.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Log Debug                  | **Arguments** `Message`: string **Description** Logs `Message` at the `Debug` log level. **Example** Log a keyword failure message: `Log Debug The keyword has failed`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Log Error                  | **Arguments** `Message`: string **Description** Logs `Message` at the `Error` log level. **Example** Log a keyword failure message: `Log Error The keyword has failed`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Send Password Notification | **Description** Sends a notification containing the last password generated. If `Generate Password` is called and `Send Password Notification` is not called before the provisioning of the resource is over, `Send Password Notification` will automatically be called.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Try Keyword                | **Arguments** `Keyword`: Keyword `*args` **Description** Launches `Keyword` with the given arguments `*args`, and ignores its errors. If `Keyword` fails, the keyword sent to `Catch Keyword` will run. `Try Keyword` should always be called right before `Catch Keyword`. **Example** Try to connect to `Usercube.com`. If the connection fails, restart the browser and try to connect to `Usercube.com`: `Connect to URL       Try Keyword  Go To  Usercube.com       Catch Keyword  Restart Browser At URL  Usercube.com`                                                                                                                                                                                                                                                                                        |

## Error handling

Consider a web application that contains user information. Suppose a user is missing from the web
application. When the script attempts to reach the user's information page, it will reach an error
page, and fail. The next user's provisioning starts, but the web browser is still on the error page,
so the script keeps failing.

In this example, if a user's provisioning fails, each subsequent provisioning will fail. This
failure issue can be solved with the error handling custom keywords.

Consider the following example using the Robot Framework Selenium library:

```

Open Usercube Website
    Open Browser
    Connect To Usercube
    [Teardown]  Close Browser

Restart Browser
    [Arguments]  ${url}
    Log Debug  An error has occured, restarting the browser
    Close Browser
    Open Browser  ${url}

Connect To Usercube
    Try Keyword  Go To  Usercube.com
    Catch Keyword  Restart Browser  Usercube.com
    Page Should Contain  Usercube

```

In this example, the keyword `Open Usercube Website` opens a browser, then calls
`Connect To Usercube`. To ensure that the browser is closed regardless of the script's success, the
`Close Browser` keyword is used in a teardown. A keyword in a teardown is always executed regardless
of what happens in the script or in the teardown.

The `Restart Browser` keyword logs a debug message before restarting the browser to help debug the
script. The `Connect To Usercube` tries to use the `Go To` keyword to connect to the `Usercube.com`
web page. As `Go To` is used with `Try Keyword`, if the execution fails, `Restart Browser` is called
by `Catch Keyword`. This means that if the browser fails to load `Usercube.com`, the browser
restarts. Last, `Connect To Usercube` verifies that the page contains the word `Usercube`.

### Error Handling for `ExecuteAdd`, `ExecuteDelete`, and `ExecuteModify`

The `ExecuteAdd`, `ExecuteDelete`, and `ExecuteModify` methods are harder to interact with. First,
it is not possible to get their execution status within the script. Second, if the execution failed,
it should be kept as a failure in order to log the failure.

To simplify error handling, consider the following structure:

```

Execute Add
    [Arguments]  ${order}
    Try Keyword  Add User  ${order}
    Catch Keyword  Restart Program And Fail  Add User failed.

Add User
    [Arguments]  ${order}
    Click New User
    Fill In Information  ${order}
    Click Add User

Restart Program And Fail
    [Arguments]  ${failmessage}
    Close Program
    Start Program
    Fail  ${failmessage}

```

In this example, `ExecuteAdd` does not call the custom keywords to add a new user directly, and only
calls `Add User` instead. This means that it is possible to call `Add User` from the `Try Keyword`
keyword. If `Add User` fails, then `Execute Add` fails. Therefore it is possible to catch a failure
with this structure.

Note that `Restart Program And Fail` fails. This failure is necessary as the provisioning order
would be counted as a success otherwise.

## Testing a RobotFramework script

In order to write a RobotFramework script, we need to test that it works. It is possible to test the
script by running a fulfillment job from the Usercube interface. While this kind of test proves that
everything works as expected, it can take a long time. There is a faster method to check that the
script runs.

Suppose the RobotFramework script's path is `RobotFramework/script.robot`.

We need the following elements :

- A provisioning order, in folder `RobotFrameworkScript/Order`. The provisioning order can be
  encrypted or unencrypted. The script will write the encrypted results to
  `RobotFrameworkScript/Order/results.csv`.
- The path to the `Runtime` folder. In our example, we will consider this path as
  `C:/identitymanagerDemo/Runtime`.

The `RobotFramework/script.robot` script may be run from the command prompt.

```
cd RobotFramework

robot --variable ORDERPATH:./Order --variable RUNTIMEPATH:C:/identitymanagerDemo/Runtime --variable RESULTPATH:./Order/results.csv ./script.robot
```

This command will generate an output file, a log file, and a report file in the `RobotFramework`
folder. This command will also write information to the command prompt.

For most testing cases, we only care about the command prompt information and the log file, written
at `RobotFramework/log.html`. The other outputs can be removed.

```
cd RobotFramework

robot --loglevel NONE --report NONE --variable ORDERPATH:./Order --variable RUNTIMEPATH:C:/identitymanagerDemo/Runtime --variable RESULTPATH:./Order/results.csv ./script.robot
```

### `Get Secure Data` and `Generate Password`

Most keywords are not different when a script is launched manually. The keywords `Get Secure Data`
and `Generate Password` are exceptions.

- `Get Secure Data`: This keyword expects the Robot Framework process to receive a json list of
  attributes in the stdin stream. This can be provided manually by writing the data in the command
  prompt. As an example, if the script requires a `Login` and `Password` attribute :
  `{"Login":"login","Password":"password"}`
- `Generate Password`: This keyword expects a file that contains the
  [password reset settings](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/passwordresetsettings/index.md)
  associated to the provisioned
  [resource type mapping](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/resourcetypemappings/index.md).
  The easiest way to enable the `Generate Password` keyword is as follow:
    - Launch the Robot Framework fulfillment through the Usercube web application with a blank
      script.
    - Copy the `PasswordResetSettings` folder generated in the most recent subfolder of
      `Work/FulfillRobotFramework`.
    - Paste the folder in the same folder as the provisioning order.

## Use Case: Write a Script to Fulfill a CSV File

The goal of the script is to append, for each provisioning order, a line in a CSV file located on an
external system which we will access through a Telnet connection.

Let's consider the following `ResourceType`:

```

...
<ResourceType Identifier="RobotFramework_User_NominativeUser" DisplayName_L1="Robot Framework User (nominative)" Policy="Default" TargetEntityType="RobotFramework_User" Category="RobotFramework" SourceEntityType="Directory_User" ApprovalWorkflowType="One">  <ScalarRule Property="identifier" Binding="EmployeeId"/>  <ScalarRule Property="firstName" Binding="FirstName"/>  <ScalarRule Property="lastName" Binding="LastName"/></ResourceType>...

```

The end of the CSV file must look like:

```

command;identifier;firstName;lastName
...
Insert;007;James;Bond
...

```

### Define settings

In every Robot Framework script, we need to import the resource file
`UsercubeRobotFramework.resource`. In this example, we also need to import the Telnet library to use
its functions.

```

*** Settings ***
Resource  C:/identitymanagerContoso/Runtime/identitymanagerRobotFramework.resource
Library  Telnet

```

### Define variables

To connect to the external system through Telnet, we need an IP address corresponding to the
external system. We will store the IP address in the global variable `${IPADDRESS}`. We also use the
global variable `${CSVFILEPATH}` to define the CSV file where the data will be written in the
external system.

```

*** Variables ***
${CSVFILEPATH}  /home/contoso/robotframework_users.csv
${IPADDRESS}  192.168.1.22

```

### Define custom keywords

We define all the custom functions which we will use to provision the external system:

- `Delete CSV File`: removes a possible pre-existing CSV file.
- `Write In CSV`: executes a command to write the line in the CSV file in the external system.
- `Write Data`: formats the line to write in the CSV and calls `Write In CSV` to write it.
- `Write Header`: defines the header to write in the CSV and calls `Write Data` to write it.
- `Open Telnet Connection`: opens the Telnet connection to the external system using the login and
  the password defined in the
  [**Options**](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/robotframework/index.md)
  attribute in `appsettings.agent.json`, as well as the IP address defined in the `Variables`
  section.

```

*** Keywords ***
Delete CSV File
    Execute Command  rm ${CSVFILEPATH}

Write In CSV
    [Arguments]  ${line}
    Execute Command  echo ${line} >> ${CSVFILEPATH}

Write Data
    [Arguments]  ${command}  ${identifier}  ${firstName}  ${lastName}
    Write In CSV  '"${command}","${identifier}","${firstName}","${lastName}"'

Write Header
    Write Data  Command  identifier  firstName  lastName

Open Telnet Connection
    Open Connection  ${IPADDRESS}  prompt=$
    Read Until  login
    ${LOGIN}=  Get Secure Data  Login  False
    Write  ${LOGIN}
    Read Until  Password
    ${PASSWORD}=  Get Secure Data  Password  True
    Write  ${PASSWORD}

```

The method `Get Secure Data` will retrieve the value of the attributes filled in
[Options](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/robotframework/index.md)
in `appsettings.agent.json`. This is the method strongly recommended by Usercube. However, you could
also enter the value directly into the script (example: `${LOGIN}= UserName`). This may be easier
for initial testing purposes.

### Define mandatory keywords

To be able to provision the external system, we need the three required functions: `ExecuteAdd`,
`ExecuteDelete` and `ExecuteModify`. These methods are called by the connector depending on the
action to perform on the external system.

```

*** Keywords ***
ExecuteAdd
    [Arguments]  ${order}
    Write Data  Insert  ${order['Changes']['identifier']}  ${order['Changes']['firstName']}  ${order['Changes']['lastName']}

ExecuteDelete
    [Arguments]  ${order}
    Write Data  Delete  ${order['Changes']['identifier']}  ${order['Changes']['firstName']}  ${order['Changes']['lastName']}

ExecuteModify
    [Arguments]  ${order}
    Write Data  Update  ${order['Changes']['identifier']}  ${order['Changes']['firstName']}  ${order['Changes']['lastName']}

```

Here, for each action, we use the function `Write Data` defined in the previous section to write the
changes to the CSV file with a corresponding word `Insert`, `Delete` or `Update`.

### Define test cases

The function launched by the Robot Framework script will be written in the section `Test Cases` and
will be called `Run Provisioning`.

```

*** Test Cases ***
Run Provisioning
    Open Telnet Connection
    Delete CSV File
    Write Header
    Launch Provisioning
    Close All Connections

```

In our test case, we will perform the following operations in `Run Provisioning`:

- Open the Telnet connection with the external system.
- Remove a possible pre-existing CSV file.
- Write the header to the new CSV file.
- Launch the Usercube provisioning. The method `Launch Provisioning` is mandatory when using the
  Robot Framework connector.
- Close the Telnet connection with the external system.

### Read the full script

The full script is as follows:

```

*** Settings ***
Resource  C:/identitymanagerContoso/Runtime/identitymanagerRobotFramework.resource
Library  Telnet

*** Variables ***
${CSVFILEPATH}  /home/contoso/robotframework_users.csv
${IPADDRESS}  192.168.1.22

*** Keywords ***
ExecuteAdd
    [Arguments]  ${order}
    Write Data  Insert  ${order['Changes']['identifier']}  ${order['Changes']['firstName']}  ${order['Changes']['lastName']}

ExecuteDelete
    [Arguments]  ${order}
    Write Data  Delete  ${order['Changes']['identifier']}  ${order['Changes']['firstName']}  ${order['Changes']['lastName']}

ExecuteModify
    [Arguments]  ${order}
    Write Data  Update  ${order['Changes']['identifier']}  ${order['Changes']['firstName']}  ${order['Changes']['lastName']}

Delete CSV File
    Execute Command  rm ${CSVFILEPATH}

Write In CSV
    [Arguments]  ${line}
    Execute Command  echo ${line} >> ${CSVFILEPATH}

Write Data
    [Arguments]  ${command}  ${identifier}  ${firstName}  ${lastName}
    Write In CSV  '"${command}","${identifier}","${firstName}","${lastName}"'

Write Header
    Write Data  Command  identifier  firstName  lastName

Open Telnet Connection
    Open Connection  ${IPADDRESS}  prompt=$
    Read Until  login
    ${LOGIN}=  Get Secure Data  Login  False
    Write  ${LOGIN}
    Read Until  Password
    ${PASSWORD}=  Get Secure Data  Password  True
    Write  ${PASSWORD}

*** Test Cases ***
Run Provisioning
    Open Telnet Connection
    Delete CSV File
    Write Header
    Launch Provisioning
    Close All Connections

```
