---
title: "Transform Data in Synchronize Jobs"
description: "Use the Static, Resolve, Join, Left, Substring, and Script transformations to change source data before a Synchronize job saves it."
keywords:
  - Synchronize transformations
  - Join transformation
  - Substring transformation
  - Script transformation
  - static text
sidebar_position: 60
---

# Transform Data in Synchronize Jobs

When you create Synchronize jobs, you can apply transformation scripts to change source data before saving it to the destination.

You can use transformations to perform these actions and more:

- Combine the values of two source fields into one destination field.
- Extract a set of characters from field values.
- Assign a string constant to a field regardless of source restrictions.

Synchronize includes a set of commonly used transformations. You can also write your own transformation scripts using the Visual Basic .NET or Python editor.

Synchronize provides these transformations:

- Static
- Resolve
- Join
- Left
- Substring
- Script

## Static

During synchronization, the static transformation copies specified text to the destination field. It ignores the value in the source field mapped to it.

Enter the text in the **Static text** box. This text is copied for the field at the destination.

You can also specify Windows environment variables as static text. While transferring the data during a job run, the job obtains the current value of the variable and saves it to the destination field.

Examples:

- If static text is set to **%COMPUTERNAME%**, running the job saves the host computer's name in the target field.
- If static text is set to variables **%NOW%** and **%Computer%** as follows:

  Updated by Directory Manager %NOW% from %COMPUTERNAME%.

  Running the job returns the current date and the name of the host machine. The results look like this:

  Updated by Directory Manager 1/12/2003 10:04 AM from EX01-DTM

:::note
Environment variables might vary for different Windows releases and editions. Before using environment variables, determine that they are supported by the Windows installed on your host machine.
:::

To generate passwords based on complexity rules, see the [Auto-Generate Unique Passwords in Synchronize Jobs](/docs/directorymanager/11.1/portal/synchronize/transformation/autogenerateuniquepassword.md) topic. You can assign a single password to all synced objects or generate individual passwords for each object.

## Resolve

The Resolve transformation attempts to locate a recipient at the destination that matches the selected filter and returns the distinguished name. It is useful for setting the manager or owner fields.

Destination: The target location to which to copy data. Destinations must be Exchange 5.5, Active Directory, SQL Server, or Excel.

:::note
This transformation can adversely affect performance, as it adds an additional query to each record. It applies to Active Directory and Exchange only.
:::

## Join

The Join transformation combines values from two source fields into a single destination field.

For instance, you can use a Join transformation to create a Display Name field at the destination from the source's **FirstName** and **LastName** fields. The values for the two source fields are saved as a single value in the destination.

The Join transformation requires these three parameters:

| Parameter    | Description                                                                                                                             |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| First field  | Select the first source field.                                                                                                          |
| Separator    | Specify the character to use as separator between the values of the two fields. You can specify more than one character as separators. |
| Second field | Select the second source field.                                                                                                         |

## Left

Use the Left transformation to return a specific number of characters from the left side of a source value. You can use it to pull characters from a value to create an abbreviation or an alias.

For example, to set the first three characters of a user's logon name as their initials, apply the settings shown in the following figure.

The Left transformation requires these two parameters:

| Parameter            | Description                                                             |
| -------------------- | ----------------------------------------------------------------------- |
| Source field         | Select the source field from which to get the value.                    |
| Number of characters | Specify the number of characters to extract starting from the left.     |

## Substring

The Substring transformation returns a set of characters from the source value. The **Start at** and **Length** parameters determine which characters it extracts.

The Substring transformation is useful when the characters to extract are within a value that has a fixed number of characters or digits. It can become tricky to use if the number of characters or digits in values of the source field might vary.

The Substring transformation requires these parameters:

| Parameter    | Description                                                                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Source field | Select the source field from which to get the value.                                                                                              |
| Start at     | Specify the index number of the character to set as the starting point. The character at this position isn't included in the result itself. |
| Length       | The count of characters to extract from the starting point.                                                                       |

**Example:**

Telephone numbers are usually written with country and city codes. You might have a destination field where you only need the country code, excluding the city code and the number itself.

Consider the number +92-42-5787711, where:

| Country Code | City Code | Telephone |
| ------------ | --------- | --------- |
| 92           | 42        | 5787711   |

To extract the country code, set the parameters for this transformation. When it runs, it extracts 92 from the number and saves it to the destination field.

## Script

Unlike the preceding built-in transforms, the Script transformation is a template for writing custom scripts. To use the **Script** template:

1. Select a built-in transform that provides most of the functionality you need.
2. Select parameters, if any.
3. Switch the transform type to **Script** to view the resulting script.

You can then modify the script to add the functionality you need.
