---
title: "Start Parameter"
description: "Start Parameter"
sidebar_position: 10
---

# Start Parameter

## Start parameters for SSO applications⚓︎

Start parameters can be defined when creating or editing an SSO application. These parameters are
immediately transferred when starting the application. This is done, for example, to directly start
the program with various basic settings. The corresponding parameters should be requested from the
manufacturer of the software or taken from the documentation.

## Configuration of the parameters⚓︎

The parameters can be directly entered in the application in the corresponding field. Alternatively,
a configuration window is also available for this purpose.

![parameters applications](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/applications/learning_the_applications/start_parameter/start_parameter_1-en.webp)

The required elements can be moved here from the right side to the left side by drag & drop.

![edit parameters](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/applications/learning_the_applications/start_parameter/start_parameter_2-en.webp)

Different categories are available here:

In the **Parameter** category, only the parameter descriptions **Field name** or **Parameter** are
available. These then need to be manually supplemented. The parameters in the **Field name**
category can directly address the fields, meaning directly transfer the field names. Example In this
example, the following start parameter have been defined for the Salamander application:

- **L** (for folder path in the left column)
- **R** (for folder path in the right column)

For both parameters, the password fields with the names "Left Path" and "Right Path" are then
transferred in each case.

![enter parameter](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/applications/learning_the_applications/start_parameter/start_parameter_3-en.webp)

The application is then linked with the following password:

![linked password parameter](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/applications/learning_the_applications/start_parameter/start_parameter_4-en.webp)

When the Salamander application is started, the placeholder is replaced by the field names.
Therefore, instead of

**-L `{field:Left Path}` -R `{field:Right Path}`**

the following start parameters are transferred:

**-L "C:\Projekte\" -R "C:\Ablage\Projekte"**

## Placeholder for fields⚓︎

Fields can be added via certain placeholders based on their type or their name. The easiest way to
do this is using the configuration window described above.

| Field type              | Placeholder       |
| ----------------------- | ----------------- |
| Text                    | `{Text}`          |
| Password                | `{Password}`      |
| Date                    | `{Date}`          |
| Check                   | `{Check}`         |
| URL                     | `{Url}`           |
| Email                   | `{Email}`         |
| Phone                   | `{Phone}`         |
| ​List                   | `{List}`          |
| Header                  | `{Header}`        |
| Multiline text          | ​`{Memo}`         |
| Multiline password text | ​`{PasswordMemo}` |
| Integer                 | `{Int}`           |
| Floating-point number   | `{Decimal}`       |
| User name               | `{UserName}`      |
| ​IP address             | `{Ip}`            |
| Enter field name        | `{field:name}`    |
