---
title: "PPE Tool"
description: "PPE Tool"
sidebar_position: 130
---

# PPE Tool

The PPE Tool is designed to configure local and domain instances of Password Policy Enforcer and
produce reports pertaining to the configuration of Password Policy Enforcer. The PPE Tool is
designed to perform the following functions:

- Export the configuration from the existing instance of Password Policy Enforcer, regardless if the
  server is local or domain.
- Import existing PPE configurations on another PPE server instance.
- Generate user-friendly reports that contain configuration values and descriptions.
- Create HTML reports with configuration values and descriptions of the PPE server instance.

This topic will cover how to install the PPE Tool, customize and run reports, and configuration
options in the PPE Tool.

## Using the PPE Tool

The PPE Tool installs with the default installation of Password Policy Enforcer under the
`C:\Program Files (x86)\Password Policy Enforcer\ppetool` folder. Once installed, the PPE Tool
allows users to perform a number of operations related to Password Policy Enforcer functionality
which are described in the table below.

:::note
All PPE Tool operations can be executed from the Command Prompt, if run with administrator
rights.
:::


### PPE Tool Operations

:::info
PPE Tool operations should only be executed one at a time. For example, you
should not execute the /e (Export) and /i (Import) operations simultaneously; you should not run /e
(Export) and /r (Report) operations simultaneously.
:::


**Common PPE Tool Operations**

| Operation | Operation Name         | Operation Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /?        | help                   | <ul><li>Displays Help and exits the application. All other options are ignored.</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| /m        | minimal                | <ul><li>Configures the PPE Tool to operate in Minimal mode.</li><li>This operation strips away all extraneous information (e.g., policy messages, license information, etc.) while importing or exporting to the PPE Tool.</li><li>By default, the PPE Tool imports and exports all information available (e.g., policy messages, license information, etc.).</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| /d        | domain [in controller] | <ul><li>Configures the PPE Tool to operate in Domain mode.</li><li>The default controller is localhost.</li><li>This operation will make PPE Tool work with the LDAP Password Policy Enforcer instance. PPE Tool imports or exports configurations from the local registry.</li><li>To use this operation , you must run PPE Tool as a domain administrator user. However, this operation can be used on both the domain controller and on any member. If an invalid domain controller is provided as an argument, then the PPE Tool will fail at the import / export stage.</li><li>This operation is ignored when used to create reports from the file source (present with the /c (Config [in file name]) option). When the PPE Tool starts in a domain environment without the /d (Domain [in controller]) operation, a warning message will appear. However, this will not prevent the PPE Tool from operating on a local environment.</li></ul> |
| /c        | config [in file name]  | <ul><li>Uses a config file instead of Password Policy Enforcer export when exporting reports (in the case of /i (Import), /h (Human [out file name]), and /r (Report [out file name]).</li><li>The default file is `config.xml`.</li><li>This operation defines the input file for the i/ (Import) operation, and thus is necessary for importing files to the PPE Tool. An error message will appear if the /c (Config [in file name]) option is omitted.</li><li>By default, the /h (Human [out file name]) and /r (Report [out file name]) operations use the Password Policy Enforcer instance as the reporting source. The /c (Config [in file name]) operation should provide the source configuration file as an argument to create reports. If an invalid file name is provided as an argument in this operation, the PPE Tool will display the appropriate error message and will fail.</li></ul>                                            |


Operations PPE Tool options are as follows:

| Task | Task Name              | Task Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /e   | export [out file name] | <ul><li>Exports config data (default) from the Password Policy Enforcer instance to the file.</li><li>This operations is enabled by default.</li><li>This operation can not be used with /c (Config [in file name]) or i/ (Import) operations, but can be combined with /h (Human [out file name]).</li></ul>                                                                                                                                                                                                                                  |
| /i   | import                 | <ul><li>Imports the config file.</li><li>Imports existing configuration using the input configuration file defined by the /d (Domain [in controller]) . If the /c (Config [in file name]) operation is omitted, the PPE Tool will display an error message and exit the application.</li><li>When i/ (Import) is used with the /h (Human [out file name]) or /r (Report [out file name]) operations, the latter will be ignored.</li><li>/d (Domain [in controller]) and /m (Minimal) operations my affect the result of the import.</li></ul> |
| /h   | human [out file name]  | <ul><li>Converts the config file to a human-readable format and produces a human-readable report based on the current Password Policy Enforcer instance configuration or the configuration provided by the /d (Domain [in controller]).</li><li>If no custom file name is provided, the default file name will be `config_human_readable.xml`.</li></ul>                                                                                                                                                                                       |
| /r   | report [out file name] | <ul><li>Converts the config file to HTML and produces an HTML report file based on the current Password Policy Enforcer instance configuration or the configuration provided by the /d (Domain [in controller]).</li><li>Generates the HTML report into `C:\Program Files (x86)\Password Policy Enforcer\Report` alongside the .css file.</li><li>The default files name is `report.html`.</li></ul>                                                                                                                                           |


### PPE Usage Samples

This section covers some sample operations usable in either the PPE Tool or in the Command console
(with administrator rights). Each operation can be executed after the following commands have been
executed:

C:\Windows/system32>cd..

`C:\`[location of PPE Tool]`>`[operation]

Once this location has been accessed in the Command console, enter one of the following commands in
the [operation] variable above to execute a PPE Tool operation in the Command console.

| Action                                                                                       | Operation                                                                                           | Message                                                                                                                                                                                                                                                             |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Simple Config export operation                                                               | <ul><li>ppetool</li></ul>                                                                           | Warning: PPETool started in domain environment without /d option. Using local source. Hope you know what are you doing. Config successfully exported.                                                                                                               |
| Simple Config export in domain environment with DC %Full computer name of Domain Controller% | <ul><li>ppetool /d localhost</li><li>ppetool /d %Full computer name of Domain Controller%</li></ul> | Config successfully exported.                                                                                                                                                                                                                                       |
| Export local config into local.xml and create it from the HR.xml and report.html reports     | <ul><li>ppetool /e local.xml /h HR.xml /r Report.html</li></ul>                                     | Warning: PPETool started in domain environment without /d option. Using local source. Hope you know what are you doing. Config successfully exported. Human readable config representation successfully exported. HTML config representation exported successfully. |
| Import Config from config.xml                                                                | <ul><li>ppetool /c config.xml /i</li></ul>                                                          | Warning: PPETool started in domain environment without /d option. Using local source. Hope you know what are you doing. Config import successful.                                                                                                                   |


### Generating Reports with Custom Descriptions

The PPE Tool generates user-friendly reports by processing configuration tags (i.e., `<PPE>`). For
example, the PPE Tool will search for the file tagname.xml (or, ppe.xml in this case). This file has
root elements which name match each file name. Each root tag contains child tags (e.g., `<tag>`).
Each tag has the following attributes:

- name — Contains the original tag name from the input configuration file. If this attribute is
  missed, then the original tag and its value will be absent in the human-readable report.
- DisplayName — Contains the user-friendly description for the original tag. If this attribute is
  missed, then the original tag and its value will be presented in the report without a description.

The `<tag>` tag can also contain the child `<FLAGS>` tag. This tag can have an optional attribute
'mode' and this attribute can have the following values:

- value (default) — With the default value, the report will only contain tag descriptions for the
  child `<flag>` tag. The 'value' attribute matches the child `<flag>` tag with the value of the
  original tag.
- combined — With the combined value, the report will contain the child `<flag>` tags which contain
  values that are bitwise or are the result of the original values.

#### Example of 'value' mode

**Original configuration**

```xml
<MAILMODE>1</MAILMODE>
```

**Transform configuration**

```xml
<tag name="MAILMODE" DisplayName="Mail delivery method">
  <FLAGS mode="value">
    <flag DisplayName="Disable e-mail reminders" value="1"/>
    <flag DisplayName="Send e-mail to SMTP server" value="2"/>
    <flag DisplayName="Save e-mail to a pickup folder" value="3"/>
  </FLAGS>
</tag>
```

**Transformation result**

```xml
<MAILMODE DisplayName="Mail delivery method">
  <options>
    <option DisplayName="Disable e-mail reminders">True</option>
    <option DisplayName="Send e-mail to SMTP server">False</option>
    <option DisplayName="Save e-mail to a pickup folder">False</option>
  </options>
</MAILMODE>
```

#### Example of 'combined' mode

**Original configuration**

```xml
<FLAGS>25</FLAGS>
```

**Transformation configuration**

```xml
<tag name="FLAGS" DisplayName="Common settings">
  <FLAGS mode="combined" DisplayName="Common settings">
    <flag DisplayName="Netwrix Password Policy Enforcer enabled" value="0x00000001"/>
    <flag DisplayName="Enforce policy when password is reset" value="0x00000002" inverted="true"/>
    <flag DisplayName="Log event when password not checked by Netwrix Password Policy Enforcer" value="0x00000008"/>
    <flag DisplayName="Log event when password rejected by Netwrix Password Policy Enforcer" value="0x00000020"/>
    <flag DisplayName="Log event when password accepted by Netwrix Password Policy Enforcer" value="0x00000040"/>
    <flag DisplayName="Only accept encrypted client requests" value="0x00000010"/>
    <flag DisplayName="Netwrix Password Policy Enforcer uses V3 CST (Last used Netwrix Password Policy Enforcer v8)" value="0x00000004"/>
  </FLAGS>
</tag>
```

**Result human-readable report**

```xml
<FLAGS DisplayName="Common settings">
  <options>
    <option DisplayName="Netwrix Password Policy Enforcer enabled">False</option>
    <option DisplayName="Enforce policy when password is reset">True</option>
    <option DisplayName="Log event when password not checked by Netwrix Password Policy Enforcer">True</option>
    <option DisplayName="Log event when password rejected by Netwrix Password Policy Enforcer">False</option>
    <option DisplayName="Log event when password accepted by Netwrix Password Policy Enforcer">False</option>
    <option DisplayName="Only accept encrypted client requests">True</option>
    <option DisplayName="Netwrix Password Policy Enforcer uses V3 CST (Last used Netwrix Password Policy Enforcer v8)">False</option>
  </options>
</FLAGS>
```

### Customize HTML Report

The PPE Tool comes with a pre-defined template.css file in the configuration folder, found here:
`C:\Program Files (x86)\Password Policy Enforcer\config`. The template.css defines the visual design
(formatting, colors, fonts etc.) of HTML report. See the
[XSLT - Transformation](https://www.w3schools.com/xml/xsl_transformation.asp) article for additional
information of transforming .xml to .xhtml.
