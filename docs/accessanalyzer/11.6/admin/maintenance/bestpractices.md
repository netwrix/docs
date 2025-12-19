---
title: "Best Practices"
description: "Best Practices"
sidebar_position: 50
---

# Best Practices

With any new product, a few pointers can really get us started on the right foot. In the spirit of
making you successful, here are some tips that will help you become an effective user of the
Enterprise Auditor in no time. Enjoy!

## Do

The following is a list of best practices to use for Enterprise Auditor:

- Read all Job and Job Group descriptions and instructions prior to running any solution
- Scope all collection queries to target just the desired objects, locations, or hosts you want to
  collect information from
- Run new solutions against a single host or subset of data prior to running against all to ensure
  proper operation, configuration, and output of each job
- Leverage service accounts (if possible) containing the proper permissions to access the
  information you want to audit rather than personal user accounts (this will reduce “access denied”
  warnings due to insufficient privileges)
- Set a username and password for any scheduled task
- Ensure the account Enterprise Auditor is running as has proper SQL permissions (refer to the
  Enterprise Auditor System Requirements & Installation Notes document for details)
- Set a connection profile inside the Job “properties” menu for any job that runs using the Exchange
  Metrics data collector
- Check the “Messages” table within any Job’s “Results” node if reports do not generate or
  collection doesn’t appear to be working properly
- Configure history settings at the Job level (as opposed to at the Global or Job Group level) to
  avoid unnecessary storage consumption within SQL
- Contact Netwrix Support with ANY questions you have

## Do Not

The following is a list of practices to avoid for Enterprise Auditor.

- Do not change Job or Job Group names within the Job Tree
- Do not attempt to run an entire Solution Set without configuring your scoping options first
- Do not confuse WARNINGS for errors in data collection. Warnings are purely informational
- Do not change the name of your Enterprise Auditor database
- Do not edit a job’s configuration or open any query or analysis rule while that job is running
- Do not use the Fully Qualified Domain Name of a host when manually entering hosts to run queries
  against; instead, use the Common Name
- Do not enable “Debug” logging unless needed for additional troubleshooting
- Do not change the database Enterprise Auditor writes to at the global level; instead, change the
  database at the job level if desired

### Contact Support

When the checklist items do not resolve the issue, contact support with as much applicable
information as possible from the table below. It is possible that a hot fix may already exist for
the product.

**What is the version of the Access Analyzer application?**   
Within the Console, navigate to Help > About. The Version number is the build number
 
**What is the version of the Solution Set (if applicable)?**  
Within the File System go to %sainstalldir%DC > Find Data Collector DLL > Right-click and go to Properties > Details > File Version 

**What is the version of the Data Collector that has the issue**  
Within the File System go to %sainstalldir%DC > Find Data Collector DLL > Right-click and go to Properties > Details > File Version

**What is the version of Analysis Module that has the issue?**  
Within the File System go to %sainstalldir%PrivateAssemblies > Find Analysis Module DLL > Right-click and go to Properties > Details > File Version

**What is the version of Action Module that has the issue?**  
Within the File System go to %sainstalldir%Actions > Find Action Module DLL > Right-click and go to Properties > Details > File Version

**What is the Operating System and Version of the Access Analyzer Console server?**  
For example: Windows Server 2012 R2 Standard, Server 2016 R2 

**What is the Operating System and Version of the Target Host?**   
For example: Windows Server 2012 R2 Standard, Server 2016 R2 

**What is the Application Version (if applicable) i.e. Exchange, SharePoint, etc**  

**Did it ever work? Has anything changed?**  
For example” OS Updates, Console Updates, Permission Changes, etc.  

**Use the Export function within Access Analyzer to send the job or job group, which includes the Job log and SA_Debug log to the support engineer working the case**  
See the Export Job to Zip Archive Window section for additional instruction.

**Are there any errors in the Messages Table?**  
Jobs > [Solution] > [Job Group and/or Job] > Status > Messages table

**Are there any messages in the ConnectStatus Table?**  
Jobs > [Solution] > [Job Group and/or Job] > Status > ConnectStatus table 