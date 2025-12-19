---
title: "Use Access Token to Get Data from the Access Analyzer Endpoint"
description: "Use Access Token to Get Data from the Access Analyzer Endpoint"
sidebar_position: 40
---

# Use Access Token to Get Data from the Access Analyzer Endpoint

Use the access token to call the API endpoints using PowerShell and retrieve data. The following
tables provide additional information on retrieving data.

## ROWS

This information shows how to call the REST API to retrieve data from a named table or
view definition.

**URL STRUCTURE**  
`/api/v1/data/<object-name>/rows`  
`/api/v1/data/<alias-name>/rows`  
                                                                                                                         
**DESCRIPTION**  
Allows the caller to retrieve data from a table or view. 
                                                                                                                                
**METHOD**  
GET, POST    

**PARAMETERS**
- **object-name** – Required value that specifies the unique object name. 
- **alias-name** – Required value that specifies the unique alias associated with the table, available as a more thoughtfully designed namespace. 
- **jobRuntimeKey**(Optional) – The execution to retrieve information for. If this is omitted the latest report is provided. 
- **filters** (Optional) – A filter to be applied prior to returning data, multiple filters are applied with `and` operators. If an array is specified for the value field for a filter, the filter returns any successful match from the array of values. String comparisons are case insensitive. A list of the available functions is below. Filter functions: 
  - equals
  - not_equals
  - greater (greater_equal)
  - less (less_equal)
  - contains
  - starts_with 
- **columns** (Optional) – A list of columns to be returned. When not specified all columns are returned. The columns specified by the **groupby** parameter should be omitted from this array. 
- **groupby** (Optional) – A list of columns to group each row by, resulting in a JSON object that contains those keys followed by an array of entries. 

Sample JSON request:
 ```json
 {       
    jobRuntimeKey: "2018-11-05T13:15:30",       
    columns: [ "url", "trusteeName", "rights" ],
    groupby: [ "hostName" ],       
    filters: [           
        {               
            column: "hostName",               
            function: "equals",               
            value: "ENGINEERING01",           
        },           
        {               
            column: "trusteeName",               
            function: "equals",               
            value: [ "Pete Smith", "Jake Roberts" ]          
         }       
    ]   
}
 ```

**RETURNS**       
A JSON array representation of the underlying table. 

Sample JSON response:

```json
[       
    {           
        hostName: "ENGINEERING01",           
        groupItems: [               
            {                   
                url: "https://site/list",                   
                trusteeName: "Pete Smith",                   
                rights: "Read"               
            }           
        ]       
    }   
]
```                                                                                                                                       

**ERRORS** 
- 400 One or more the parameters passed in are invalid. 
- 404 The object requested does not exist.


## PROC

This information shows how to call the REST API to execute a stored procedure.

**URL STRUCTURE**  
`/api/v1/data/<object-name>/proc`  
`/api/v1/data/<alias-name>/proc`

**DESCRIPTION**  
Allows the caller to execute stored procedure and retrieve data.  

**METHOD**   
POST   

**PARAMETERS**  
- **object-name** – Required value that specifies the unique object name. 
- **groupby**(Optional) – A list of columns to group each row by, resulting in a JSON object that contains those keys followed by an array of entries. The parameters passed in here are passed to the stored procedure untouched. Arrays are mapped to a user defined table type, currently only single value arrays are supported. 

Sample JSON request:

```json
 {       
    parameters: {           
        hostName: "SBNJENGINEERING01",           
        userName: "DOMAIN\\pete.smith",           
        files: [               
            { name: "puppets.xls" },               
            { name: "groups.pdf" }           
        ]       
    }       
    groupby: [ "HostName" ]   
}
 ```

**RETURNS**  
A JSON array representation of the underlying result data. 

Sample JSON request: 

```json
{       
    parameters: {           
        hostName: "SBNJENGINEERING01",           
        userName: "DOMAIN\\pete.smith",           
        files: [               
            { name: "puppets.xls" },               
            { name: "groups.pdf" }           
        ]       
    }       
    groupby: [ "HostName" ]   
}
```   

**ERRORS**        
- 400 One or more the parameters passed in are invalid. 
- 404 The object requested does not exist. 
