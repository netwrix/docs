---
description: 'Use CLI MongoDB queries to calculate the number of systems scanned in the last 90 days for Netwrix Privilege Secure Discovery (formerly SecureONE) versions older than 2.16.1. Run the appropriate command for your deployment (cluster or single-node) and sum the counts.'
keywords:
- license count
- CLI
- MongoDB
- docker
- SecureONE
- Netwrix Privilege Secure Discovery
- scanned systems
- replicaSet
- mongo
products:
- privilege-secure-discovery
sfdc_migration:
  article_id: ka04u00000116YBAAY
  article_owner: Anna Evdokimova-Glinskaia
  article_reviewer: null
  article_sme: null
  created_date: '2023-07-07'
  knowledge_article_id: kA04u00000110pBCAQ
  last_modified_date: '2023-07-07'
  original_categories:
  - privilege_secure_discovery
  visibility: public
sidebar_label: Generate License Counts with CLI Command
tags: []
title: "Generate License Counts with CLI Command"
knowledge_article_id: kA04u00000110pBCAQ
---

# Generate License Counts with CLI Command

Netwrix Privilege Secure Discovery (formerly SecureONE)

The purpose of this document is to outline the steps required to get an accurate license count for Netwrix Privilege Secure Discovery that is on a version older than 2.16.1.

> **NOTE:** Whether the licensing information is gathered from the script or the UI, the numbers should match as the UI is simply a reflection of the script.

## Licensing Overview

Netwrix Privilege Secure Discovery is licensed based on systems successfully scanned in the last 90 days. The database queries below can be run from the CLI to get the licensing counts. Add all applicable counts together to get the total licensing count.

## CLI Commands

Below is a CLI command to output a count of successfully scanned systems in last 90 days. Only run the command matching the deployment type. Each block of lines is all one command — copy all the lines and paste them in a node terminal (SSH) session.

### Cluster deployment command:

```bash
CtR=$(sudo docker ps | grep mongo | cut -d' ' -f1); \
    DBExQ="sudo docker exec -it $CtR mongo mongodb://mongo1,mongo2,mongo3/SecureONE?replicaSet=secureone --eval"; \
    clear;echo "Windows Server Count:"; \
    $DBExQ 'db.ldap_store.count({obj_type:"computer", "last_scanned":{$gte:new Date(ISODate().getTime()- 1000*86400*90)}, "operatingSystem":/SERVER/i, "os_type":"windows"})' | \
    grep -vi "NETWORK\|Implicit\|MongoDB"; \
    echo;echo "Windows Workstation Count:"; \
    $DBExQ 'db.ldap_store.count({obj_type:"computer", "last_scanned":{$gte:new Date(ISODate().getTime()- 1000*86400*90)}, "operatingSystem":{$not:/SERVER/i}, "os_type":"windows"})' | \
    grep -vi "NETWORK\|Implicit\|MongoDB"; \
    echo;echo "Linux Server Count:"; \
    $DBExQ 'db.ldap_store.count({obj_type:"computer", "last_scanned":{$gte:new Date(ISODate().getTime()- 1000*86400*90)}, "os_type":"linux"})' | \
    grep -vi "NETWORK\|Implicit\|MongoDB"; echo
```

### Single-node deployment command:

```bash
CtR=$(sudo docker ps | grep mongo | cut -d' ' -f1); \
        DBExQ="sudo docker exec -it $CtR mongo SecureONE --eval"; \
        clear;echo "Windows Server Count:"; \
        $DBExQ 'db.ldap_store.count({obj_type:"computer", "last_scanned":{$gte:new Date(ISODate().getTime()- 1000*86400*90)}, "operatingSystem":/SERVER/i, "os_type":"windows"})' | \
        grep -vi "NETWORK\|Implicit\|MongoDB"; \
        echo;echo "Windows Workstation Count:"; \
        $DBExQ 'db.ldap_store.count({obj_type:"computer", "last_scanned":{$gte:new Date(ISODate().getTime()- 1000*86400*90)}, "operatingSystem":{$not:/SERVER/i}, "os_type":"windows"})' | \
        grep -vi "NETWORK\|Implicit\|MongoDB"; \
        echo;echo "Linux Server Count:"; \
        $DBExQ 'db.ldap_store.count({obj_type:"computer", "last_scanned":{$gte:new Date(ISODate().getTime()- 1000*86400*90)}, "os_type":"linux"})' | \
        grep -vi "NETWORK\|Implicit\|MongoDB"; echo
```

### Example Output

Below is an example of the output for the above command:

```
Windows Server Count:
556
            
Windows Workstation Count:
3956
            
Linux Server Count:
156
```