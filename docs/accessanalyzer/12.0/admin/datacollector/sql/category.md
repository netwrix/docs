---
title: "SQL: Category"
description: "SQL: Category"
sidebar_position: 20
---

# SQL: Category

The Category page in the SQL Data Collector Wizard lists the available query categories, sub-divided
by auditing focus.

![SQL Data Collector Wizard Category Page](/images/accessanalyzer/12.0/admin/datacollector/sql/category.webp)

The query categories are:

- Permissions

    - Permissions Collection – Gather permissions on server and database objects

- Server Audits

    - Server Audits Events Collection – Gather events from SQL server audits

- Sensitive Data

    - Sensitive Data Collection – Scan databases for sensitive data

- Microsoft SQL Server

    - Discovery

        - Enumerate Network – Enumerate local network for browsable SQL server instances visible to
          the storage host

    - Custom SQL Query

        - Custom Query – Run a custom SQL query against a SQL database

    - Infrastructure

        - Server Properties – Information about the server
        - Configuration Properties – Information about server configuration
        - Version Information – Version information about Microsoft SQL server
        - File Groups – File group information
        - Files – File information
        - Database Information – Information about databases

    - Operations

        - Database Without Backups – List of all databases without backups
        - Latest Week Backups – List of latest week database backups

    - Utilities

        - Remove Storage Tables – Removes the tables created and used by the SQL server data
          collector

    - Legacy Queries

        - Server Principles – Data for every server level principal
        - Database Principles – Data for every database level principal
        - Server Permissions – Data about server permissions
        - Database Permissions – Data about database permissions
        - Server Roles – Data about server roles
        - Database Roles – Data about database roles
        - System Objects – Data about system objects
        - Object Collection – Collects SQL server objects

- Oracle

    - Custom Oracle Query

        - Custom Oracle Query – Run a custom SQL query against an Oracle container

    - Infrastructure

        - Version Information – Version information about the Oracle database
        - File Group Information – Information about file groups and tablespaces
        - Data File Information – Information about data files
        - Database Information – Information about database configurations
        - Initialization Parameter Information – Information about initialization parameters
        - System Parameter Information – Information about system parameters
        - Container Information – Information about the containers of the databases, both root and
          pluggable
        - Pluggable Databases History – View of the pluggable databases (PBD) history
        - Database Instance Information – Shows information about the current instance of the
          database
        - Free Space in Tablespaces – Describes the free extents in all tablespaces in the database

    - Operations

        - Latest Week Backup – Information about the latest week backup
        - Oldest and Newest Backup – Information about the oldest and the most recent backups
        - Database File Without Backup – Indicates file names of the files that are not present in
          the RMAN backup

    - Utilities

        - Remove Storage Tables – Removes the tables created and used by the Oracle Data Collector

- Azure SQL

    - Discovery

        - Enumerate Azure SQL Instances – Enumerate Azure SQL instances and Azure resources

    - Utilities

        - Remove Storage tables – Removes the tables created and used by Azure SQL Discovery

- MySQL

    - Custom MySQL Query

        - Custom Query – Run a custom SQL query against a SQL database

    - Utilities

        - Remove Storage Tables – Removes tables created for MySQL Data Collector

- PostgreSQL

    - Custom PostgreSQL Query

        - Custom Query – Run a custom SQL query against a SQL database

    - Utilities

        - Remove Storage Tables – Removes tables created for PostgreSQL Data Collector

- Db2LUW

    - Custom Db2LUW Query

        - Custom Query – Run a custom SQL query against a SQL database

    - Utilities

        - Remove Storage Tables – Removes tables created for Db2LUW Data Collector

    - Db2LUW Permissions Scan

        - Db2LUW Permissions Scan – Collect permissions from the targeted instances

- Utilities

    - Remove Storage Data – Removes stored data for specific instances on a specific host
