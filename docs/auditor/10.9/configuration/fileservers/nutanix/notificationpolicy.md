---
title: "Create a Notification Policy"
description: "Create a Notification Policy"
sidebar_position: 40
---

# Create a Notification Policy

To monitor operations with files and folders on Nutanix File Server, you should configure a
notification policy for the related events.

## Monitored Operations

The list of supported operations is provided in the table below. Your notification policy can
include any of them.

| To audit...                            | Operation name to specify at policy creation |
| -------------------------------------- | -------------------------------------------- |
| Successful _create_ operations         | FILE_CREATE DIRECTORY_CREATE                 |
| Successful _read_ operations           | FILE_READ                                    |
| Successful _modify_ operations         | FILE_WRITE RENAME SECURITY                   |
| Successful _delete_ operations         | FILE_DELETE DIRECTORY_DELETE                 |
| Failed _read/modify/delete_ attempts\* | FILE_OPEN                                    |

\* - Failed attempt to move/rename file are not audited.

## Configuration Procedure

Notification policy creation procedure involves API requests usage. It is assumed that you have a
good understanding of REST API concepts, as well as enough experience in working with JSON-formatted
requests in any API client. To get acquainted with Nutanix REST API Explorer client, refer to
[Nutanix documentation](https://portal.nutanix.com/#nutanix-documentation).

To create a notification policy for Nutanix File Server via API:

1. Open the **File Server REST API Explorer** client using the following URL:

    `https://<fileserver_ip>:9440/api/nutanix/v3/api_explorer/index.html#/`

    here `< fileserver_ip >` - IP address of the Nutanix File Server to be audited.

If you select to launch the RestAPI Explorer from the Prism menu, the **RestAPI Explorer for Prism**
client will be opened.

2. In the **username** and **password** fields, enter the credentials of the
   [Create User Account to Access Nutanix REST API](/docs/auditor/10.9/configuration/fileservers/nutanix/useraccount.md) you have created.
3. Click **Explore**.
4. In the **File Server REST API Explorer** REST API client, locate the POST request for
   `notification_policies` :

    `POST /notification_policies`

5. In the request body, enter the following JSON-formatted structure:

```
{

"spec": {

"name": "<NAME_OF_NOTIFICATION_POLICY>",

"resources": {

"all_mount_targets" : true,

"protocol_type_list" : ["SMB"],

"file_operation_list" : [<LIST_OF_FILE_OPERATIONS>],

"partner_server_reference_list" : [{

"kind" : "partner_server",

"uuid" : "<UUID_OF_PARTNER_SERVER>"

}]

},

"description": "<optional_string>"

},

"api_version": "3.0",

"metadata": {

"kind": "notification_policy"

}

}
```

here:

_"all_mount_targets" : true_ - instructs to notify on changes to all shares

_"protocol_type_list" : ["SMB"]_ - instructs to track SMB shares (the only currently supported)

_`<NAME_OF_NOTIFICATION_POLICY>`_ – enter the name of notification policy you want to create

_`<UUID_OF_PARTNER_SERVER>`_ - enter the `uuid` of [Configure Partner Server](/docs/auditor/10.9/configuration/fileservers/nutanix/partnerserver.md)

_`<LIST_OF_FILE_OPERATIONS>`_ - enter the list of operations to be audited.

6. Send the request, clicking **Try it out**.
7. Get the response - `Response Code` should be _200_. In the response body, locate the `uuid` of
   the created notification policy.
8. To check that a new policy was included in the list of existing policies, retrieve the list of
   policies, sending the POST request to the following endpoint:

    `POST /notification_policies/list`. The request body must be empty - for that, enter empty
    brackets as the **value** for _get_entities_request_ parameter : `{ }`

## Auditing Specific Folders

If you want to audit only the certain folders on Nutanix File Server (mount targets), then do the
following:

1. Retrieve the list of existing mount targets using the `mount_target POST /mount_targets/list`
   request with empty body, as described above.
2. In the response, locate the `uuids` of the target folders you want to audit.
3. In the notification policy creation request (described above) instead of
   `"all_mount_targets" : true` in the request body enter the following JSON-formatted structure:

```json
"mount_target_reference_list": [
{
"kind" : "mount_target",
"uuid" : "<UUID_OF_MOUNT_TARGET1>"
},
{
"kind" : "mount_target",
"uuid" : "<UUID_OF_MOUNT_TARGET2>"
},
]
```

here:

_`<UUID_OF_MOUNT_TARGET`>_ – enter the uuid of target you want to audit.

## Example

The JSON-formatted structure below is an example of the request body that can be used to create a
notification policy named _MOUNT_POINT_POLICY_ to audit the mount a share on Nutanix File Server
with the _uuid=378896fd-e829-4869-84a2-6c29268acfff_. The following operations will be audited:

- "FILE_READ",
- "FILE_CREATE",
- "FILE_DELETE",
- "DIRECTORY_CREATE",
- "DIRECTORY_DELETE",
- "FILE_WRITE",
- "RENAME",
- "SECURITY",
- "FILE_OPEN"

JSON structure is as follows:

```
{

"spec": {

"name": "MOUNT_POINT_POLICY ",

"resources": {

"mount_target_reference_list": [

{

"kind" : "mount_target",

"uuid" : "378896fd-e829-4869-84a2-6c29268acfff”

}

],

"protocol_type_list" : ["SMB"],

"file_operation_list" :[

"FILE_READ",

"FILE_CREATE",

"FILE_DELETE",

"DIRECTORY_CREATE",

"DIRECTORY_DELETE",

"FILE_WRITE",

"RENAME",

"SECURITY",

"FILE_OPEN"

],

"partner_server_reference_list" : [

{

"kind" : "partner_server",

"uuid" : " d0bfb952-924b-459e-bd32-44c8b5a62838"

}

]

},

"description": "<optional_string>"

},

"api_version": "3.0",

"metadata": {

"kind": "notification_policy"

}

}
```
