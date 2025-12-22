---
title: "Run the HR Demo Application"
description: "Run the HR Demo Application"
sidebar_position: 50
---

# Run the HR Demo Application

This guide shows how to set up and run the HR demo application.

## HR Application Description

The HR application is a demo application that represents a web based external system. The HR
application contains an employee list.

![Users list](/images/identitymanager/saas/integration-guide/connectors/how-tos/demoapp-hr/demoapps_hr_userslist.webp)

Each employee also has their own page, with the possibility to edit their profile or delete them. It
is also possible to add a new employee.

![User details](/images/identitymanager/saas/integration-guide/connectors/how-tos/demoapp-hr/demoapps_hr_userdetails.webp)

The HR application uses csv files as data sources. When a user is added, deleted, or edited, the csv
file will be modified, and the changes will be saved.

## Running the HR Application

The HR Application is part of the Identity Manager SDK, and comes with prefilled sources. To run the
HR application:

- Download the Identity Manager SDK.
- Go to SDK/DemoApps/HR.
- Modify **appsettings.json** > **CSVPath** to "..\\Sources".
- Run **./HR.exe** in a command prompt.
- In a web browser, enter the URL **localhost:5000**.

The HR application is running, and the web browser is on the HR application employee list.

To set the HR application to another port, run `./HR.exe --urls http://localhost:{port number}`. To
access the application, enter the URL `localhost:{port number}` in a web browser.

Some ports are not recognized by web browsers, or may already be used. Choose a port wisely.
