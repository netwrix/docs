---
title: "Define Parameters"
description: "Define Parameters"
sidebar_position: 10
---

# Define Parameters

Before running or scheduling the add-on, you must define connection details: Auditor Server host,
user credentials, etc. Most parameters are optional, the script uses the default values unless
parameters are explicitly defined. You can skip or define parameters depending on your execution
scenario and security policies. See the
[Choose Appropriate Execution Scenario](/docs/auditor/10.6/addon/siemcefexport/deployment.md#choose-appropriate-execution-scenario)
topic for additional information.

First, provide a path to your add-on followed by script parameters with their values. Each parameter
is preceded with a dash; a space separates a parameter name from its value. You can skip some
parameters—the script uses a default value unless a parameter is explicitly defined. If necessary,
modify the parameters as required.

| Parameter              | Default value            | Description                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NetwrixAuditorHost     | localhost:9699           | Assumes that the add-on runs on the computer hosting Auditor Server and uses default port **9699**. If you want to run the add-on on another machine, provide a name of the computer where Auditor Server resides (e.g., _172.28.6.15, EnterpriseNAServer, WKS.enterprise.local_). To specify a non-default port, provide a server name followed by the port number (e.g., _WKS.enterprise.local:9999_). |
| NetwrixAuditorUserName | Current user credentials | Unless specified, the add-on runs with the current user credentials. If you want the add-on to use another account to connect to Auditor Server, specify the account name in the _DOMAIN\username_ format. The account must be assigned the Global reviewer role in Auditor or be a member of the Netwrix Auditor **Client Users** group on the computer hosting Auditor Server.                         |
| NetwrixAuditorPassword | Current user credentials | Unless specified, the script runs with the current user credentials. Provide a different password if necessary.                                                                                                                                                                                                                                                                                          |
| OutputFolder           | —                        | Provide a path to the folder to store CEF log files. This is a mandatory parameter.                                                                                                                                                                                                                                                                                                                      |
