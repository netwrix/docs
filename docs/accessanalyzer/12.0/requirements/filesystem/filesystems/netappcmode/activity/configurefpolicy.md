---
title: "Configure FPolicy"
description: "Configure FPolicy"
sidebar_position: 30
---

# Configure FPolicy

Activity Monitor relies on the NetApp FPolicy framework for monitoring of file access events on
Storage Virtual Machines (SVM). FPolicy needs to be configured for each SVM.

There are two ways to configure FPolicy:

- Activity Monitor agent can facilitate the
  [Automatic Configuration of FPolicy](#automatic-configuration-of-fpolicy) for the monitored SVM
  using the ONTAP API. This mode is simple, but doesn't allow you to exclude certain volumes or
  shares of the SVM from being monitored. It also requires additional permissions to create and
  modify FPolicy.
- Another option is to [Manually Configure FPolicy](#manually-configure-fpolicy) for each SVM. This
  mode allows you to fine tune FPolicy by excluding certain volumes or shares from being monitored.
  It also reduces product permissions.

Regardless of the FPolicy configuration approach, perform extra steps if you need to secure FPolicy
communication with TLS.

## TLS Authentication Options

There are two TLS FPolicy Authentication options that can be used:

- TLS, server authentication – Server only authentication

    - Generate a Server Certificate for the Agent server and copy it to a PEM file. Save the Server
      Certificate PEM file locally on the Activity Monitor Console server.
    - For manual FPolicy configuration, install the Server Certificate on the SVM and then set
      server-authentication.
    - For automatic FPolicy configuration, the Activity Monitor manages installation of the Server
      Certificate.

- TLS, mutual authentication – Mutual authentication

    - Generate a Server Certificate for the Agent server and copy it to a PEM file. Save the Server
      Certificate PEM file locally on the Activity Monitor Console server.
    - Copy the SVM's Client Certificate to a PEM file and save it locally on the Activity Monitor
      Console server.
    - For manual FPolicy configuration, install the Server Certificate on the SVM and then set
      mutual-authentication.
    - For automatic FPolicy configuration, set mutual-authentication before the configuration
      process. The Activity Monitor manages installation of both certificates.

### Generate Server Certificate

Generate a Server Certificate for the Agent server and copy it to a PEM file. Both TLS
authentication options require this certificate.

The PEM file must contain both Public Key and Private Key parts. A certificate may be self-signed or
issued by a certification authority. The following steps generate a self-signed certificate using
the OpenSSL toolkit.

Use the following command on the agent server to create the Server Certificate and copy it to a .pem
file:

```
openssl.exe req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -nodes -subj "/CN=[ACTIVITY_AGENT_SERVER_NAME]" 
copy cert.pem+key.pem [CERTIFICATE_FILE_NAME.pem]
del cert.pem key.pem .rnd
```

Example:

```
openssl.exe req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -nodes -subj "/CN=testagentserver" 
copy cert.pem+key.pem agentkey.pem
del cert.pem key.pem .rnd
```

In this example ` agentkey.pem` would be used as the Server Certificate. Save the Server Certificate
locally on the Activity Monitor Console server.

### Create PEM File for Client Certificate

A certificate (Client Certificate) for the SVM needs to be copied to a PEM file. This is required
for the TLS, mutual authentication option. Follow the steps to create the PEM file for the Client
Certificate.

**Step 1 –** On the SVM , use the following command to show the security certificate details:

```
security certificate show -vserver [SVM_NAME] -type server instance
```

Example:

```
security certificate show -vserver testserver -type server instance
```

**Step 2 –** Copy the security certificate details into a text file and copy the public key to a PEM
file. The following variables from security details will be needed to set mutual-authentication
during Part 6 of manual configuration and prior to automatic configuration:

- SVM
- Common Name
- Certificate Serial
- Public Key Certificate

**Step 3 –** Copy the value of Public Key Certificate field to a PEM file. The value spans multiple
lines, starts with "`----BEGIN CERTIFICATE-----`" and ends with "`-----END CERTIFICATE-----`".

The Client Certificate PEM file is ready.

## Persistent Store

For ONTAP 9.15.1 and later, enabling the Persistent Store feature is recommended regardless of the
chosen FPolicy configuration approach. The Persistent Store provides resilience and predictable
latency in scenarios such as network delays or bursts of activity events. The feature uses a
dedicated volume for each SVM as a staging buffer before events are sent to the agent.

Persistent Store requires the following parameters:

- Volume name – If the volume doesn't exist, it will be created automatically (recommended).
- Initial volume size – Specifies the starting size of the volume.
- Autosize mode – Options include Off, Grow, or Grow/Shrink.

The size depends on the time duration for which you want to persist the events and the rate of
events. For example, if you want 30 minutes of events to persist in an SVM with a capacity of 5000
events per second and the average event record size of 0.6 KB, the required volume size is
`5000 * 30 * 60 * 0.6 KB = 5400000 KB ≈ 5 GB`.

:::note
To find the approximate event rate, use the FPolicy counter `requests_dispatched_rate`.
:::


:::note
For the Persistent Store to automatically create a volume, the SVM must have at least one
local tier (aggregate) assigned.
:::


To check that the SVM has assigned local tiers, use the following command:

**vserver show -vserver [SVM_NAME] -fields aggr-list**

The command shows local tiers. If no tiers are assigned, "-" is displayed.

To assign local tiers to the SVM use the following command:

**vserver add-aggregates -vserver [SVM_NAME] -aggregates [AGGREGATE_LIST]**

Example:

**vserver add-aggregates -vserver testserver -aggregates aggr1,aggr2**

:::note
This command is available to cluster administrators at the admin privilege level.
:::


Allow the FPolicy subsystem to create the volume automatically. It manages the volume, maintains
the directory structure, and protects it from accidental deletion by marking it as not mountable.

If you choose to create the volume manually, ensure the following:

- The volume isn't mounted and has no junction point.
- The snapshot policy for the volume is set to none.

For additional and up-to-date recommendations on volumes for the Persistent Store, refer to the
NetApp documentation.

## Manually Configure FPolicy

This section describes how to manually configure FPolicy. Use manual configuration when you need to
scope the policy to monitor specific volumes or shares. It is necessary to
create several FPolicy components and then enable the FPolicy. See the sections corresponding to
each part of this list:

- Part 1: Install Server Certificate on the SVM (only if using TLS authentication)

    - This is only needed if using either of the TLS, … authentication options.

- Part 2: Create External Engine

    - The External Engine defines how FPolicy makes and manages connections to external FPolicy
      servers like Activity Monitor Agent.

- Part 3: Create FPolicy Events

    - An FPolicy event defines which protocols to monitor and which file access events to monitor.

- Part 4: Create Persistent Store (only if Persistent Store is used. RECOMMENDED)

    - A Persistent Store is used as a temporary on-disk storage before the events are sent to
      Activity Monitor Agent.

- Part 5: Create FPolicy Policy

    - The FPolicy policy associates the other three FPolicy components and allows for the
      designation of a privileged FPolicy user
    - If running the Access Auditing (FSAA), Activity Auditing (FSAC), and/or Sensitive Data
      Discovery Auditing scans, then this is the user account credential to be added to the Access
      Analyzer Connection Profile.

- Part 6: Create FPolicy Scope

    - The FPolicy scope creates the filters necessary to perform scans on specific shares or
      volumes.

- Part 7: Set TLS Authentication (optional)

    - This is only needed if using either of the TLS authentication options.

- Part 8: Enable the FPolicy

    - Once the FPolicy is enabled, the Activity Monitor Agent can be configured to monitor the SVM.

- Part 9: Connect FPolicy Server / Agent to Cluster Node (optional)

    - This is only needed if there is an issue with connection to the Cluster node or for
      troubleshooting a disconnection issue.

### Part 1: Install Server Certificate on the SVM

If using the TLS authentication options, install the Server Certificate on the SVM.

Use the following command to install the Server Certificate:

```
security certificate install type client-ca -vserver [SVM_NAME]
```

Example:

```
security certificate install type client-ca -vserver testserver
```

The command will ask you to provide a public certificate. Copy the public key from the Server
Certificate PEM file, i.e. the block starting with "`-----BEGIN CERTIFICATE-----`" and ending with
"`-----END CERTIFICATE-----`". Paste the block to the terminal window.

#### Validate Part 1: Server Certificate Install

Run the following command to validate the Server Certificate is installed:

```
security certificate show -vserver [SVM_NAME] -commonname [ACTIVITY_AGENT_SERVER_NAME] -type client-ca instance
```

Example:

```
security certificate show -vserver testserver -commonname testagentserver -type client-ca instance
```

### Part 2: Create External Engine

The External Engine defines how FPolicy makes and manages connections to external FPolicy servers.

IMPORTANT:

- The `-primary-servers` must be the server or servers hosting the Activity Monitor Agent.
- If intending to use the Activity Monitor with Access Analyzer, then the primary server must also
  be the proxy server from which the Access Analyzer Access Auditing (FSAC) scans are running, e.g.
  the Access Analyzer Console server for local mode or the proxy server if running in any of the
  proxy mode options.
- The following values are required:

    - `engine-name StealthAUDITEngine`, the names of the external engine object can be customized
      (see below).
    - `port 9999`, Port number can be customized, but it is recommended to use 9999.
    - `extern-engine-type asynchronous`
    - `ssl-option no-auth`
    - `send-buffer-size 6291456`, for ONTAP 9.10+ use `send-buffer-size 8388608`

:::warning
All parameters are case sensitive.
:::


Use the following command to create the external engine:

```
set -privilege advanced
vserver fpolicy policy external-engine create -vserver [SVM_NAME] -engine-name StealthAUDITEngine -primary-servers [IP_ADDRESS,…] -port 9999 -extern-engine-type asynchronous -ssl-option no-auth -send-buffer-size 6291456
```

Example:

```
set -privilege advanced
vserver fpolicy policy external-engine create -vserver testserver -engine-name StealthAUDITEngine -primary-servers 192.168.30.15 -port 9999 -extern-engine-type asynchronous -ssl-option no-auth -send-buffer-size 6291456
```

#### Validate Part 2: External Engine Creation

Run the following command to validate the creation of the external engine:

```
fpolicy policy external-engine show -vserver [SVM_NAME] -engine-name StealthAUDITEngine -instance
```

Verify that the output is displayed as follows:

```
Ontap915::> fpolicy policy external-engine show -vserver svm0 -engine-name StealthAUDITEngine -instance
  (vserver fpolicy policy external-engine show)
                                Vserver: svm0
                                 Engine: StealthAUDITEngine
                Primary FPolicy Servers: 192.168.11.35
         Port Number of FPolicy Service: 9999
              Secondary FPolicy Servers: -
                   External Engine Type: asynchronous
  SSL Option for External Communication: no-auth
             FQDN or Custom Common Name: -
           Serial Number of Certificate: -
                  Certificate Authority: -
          Is Resiliency Feature Enabled: false
Maximum Notification Retention Duration: 3m
     Directory for Notification Storage: -
                 External Engine Format: xml
```

For more information about creating an external engine, see the
[vserver fpolicy policy external-engine create](https://docs.netapp.com/us-en/ontap-cli-9141/vserver-fpolicy-policy-external-engine-create.html)
article.

### Part 3: Create FPolicy Event

An event defines which protocol to monitor and which file access events to monitor.

IMPORTANT:

- The SVM used must be the SVM hosting the CIFS or NFS shares to be monitored.
- Access Analyzer and the Activity Monitor are capable of monitoring both NFS and CIFS. However, it
  is necessary to create separate events for each protocol.
- The following values are required:

    - `event-name`

        - For CIFS shares – ` StealthAUDITScreeningCifs` for successful events;
          `StealthAUDITScreeningFailedCifs` for failed events.
        - For NFS shares – `StealthAUDITScreeningNfsV3, StealthAUDITScreeningNfsV4` for successful
          events; `StealthAUDITScreeningFailedNfsV3, StealthAUDITScreeningFailedNfsV4` for failed
          events.  
          The names of the event objects can be customized (see
          [Customization of FPolicy Object Names](#customization-of-fpolicy-object-names)).

    - `volume-operation true`
    - `protocol` – one of the following `cifs`, `nfsv3`, `nfsv4`
    - `monitor-fileop-failure` – `true `or `false`, indicates whether failed file operations are
      reported.

- Limiting monitored file operations reduces the performance impact on the NetApp device. The
  following file operations are available, with filter options:

    - `create` – File create operations
    - `create_dir` – Directory create operations
    - `close` – File close operations

        - Enable this operation for NFSv4 to capture all read operations

    - `delete` – File delete operations
    - `delete_dir` – Directory delete operations
    - `link` – Link operations
    - `open` – File open operations for CIFS protocol

        - `open-with-delete-intent` – Limits notification to only when an attempt is made to open a
          file with the intent to delete it, according to the `FILE_DELETE_ON_CLOSE` flag
          specification

            :::note
            File open operations are only supported with the `open-with-delete-intent`
            filter applied.
            :::


    - `read` – File read operations

        - `first-read` – Limits notification to only first read operations for CIFS protocol. For
          ONTAP 9.2+, this filter can be used for both CIFS and NFS protocols.

    - `rename`– File rename operations
    - `rename_dir`– Directory rename operations
    - `setattr` – Set attribute operations and permission changes. The following filters are
      available for ONTAP 9.0+ to limit events to permission changes only:

        - CIFS:

            - `setattr-with-owner-change`
            - `setattr-with-group-change`
            - `setattr-with-sacl-change`
            - `setattr-with-dacl-change`

        - NFSv3:

            - `setattr-with-owner-change`
            - `setattr-with-group-change`
            - `setattr-with-mode-change`

        - NFSv4:

            - `setattr-with-owner-change`
            - `setattr-with-group-change`
            - `setattr-with-mode-change`
            - `setattr-with-sacl-change`
            - `setattr-with-dacl-change`

    - `symlink` – Symbolic link operations
    - `write` – File write operations

        - `first-write` – Limits notification to only first write operations for CIFS protocol. For
          ONTAP 9.2+, this filter can be used for both CIFS and NFS protocols.

- For failed/denied events, the list of supported file operations is limited to the following
  values:

    - CIFS: `open`
    - NFSv3:
      `create, create_dir, read, write, delete, delete_dir, rename, rename_dir, setattr, link`
    - NFSv4:
      `open, create, create_dir, read, write, delete, delete_dir, rename, rename_dir, setattr, link`

:::warning
All parameters are case sensitive.
:::


Use the following command to create the FPolicy event for CIFS protocols:

```
vserver fpolicy policy event create -vserver [SVM_NAME] -event-name StealthAUDITScreeningCifs -volume-operation true -protocol cifs -file-operations [COMMA_SEPARATED_FILE_OPERATIONS] -filters [COMMA_SEPARATED_FILTERS]
```

Example:

```
vserver fpolicy policy event create -vserver testserver -event-name StealthAUDITScreeningCifs -volume-operation true -protocol cifs -file-operations create,create_dir,delete,delete_dir,open,read,write,rename,rename_dir,setattr -filters first-read,first-write,open-with-delete-intent,setattr-with-owner-change,setattr-with-group-change,setattr-with-sacl-change,setattr-with-dacl-change
```

Use the following command to create the FPolicy event for NFSv3 protocols:

```
vserver fpolicy policy event create -vserver [SVM_NAME] -event-name StealthAUDITScreeningNfsV3 -volume-operation true -protocol nfsv3 -file-operations [COMMA_SEPARATED_FILE_OPERATIONS] -filters [COMMA_SEPARATED_FILTERS]
```

Example:

```
vserver fpolicy policy event create -vserver testserver -event-name StealthAUDITScreeningNfsV3 -volume-operation true -protocol nfsv3 -file-operations create,create_dir,delete,delete_dir,read,write,rename,rename_dir,setattr,link,symlink -filters first-read,first-write,setattr-with-owner-change,setattr-with-group-change,setattr-with-mode-change
```

Use the following command to create the FPolicy event for NFSv4 protocols:

```
vserver fpolicy policy event create -vserver [SVM_NAME] -event-name StealthAUDITScreeningNfsV4 -volume-operation true -protocol nfsv4 -file-operations [COMMA_SEPARATED_FILE_OPERATIONS] -filters [COMMA_SEPARATED_FILTERS]
```

Example:

```
vserver fpolicy policy event create -vserver testserver -event-name StealthAUDITScreeningNfsV4 -volume-operation true -protocol nfsv4 -file-operations create,create_dir,delete,delete_dir,read,write,rename,rename_dir,setattr,link,symlink,close -filters setattr-with-group-change,setattr-with-mode-change,setattr-with-sacl-change,setattr-with-dacl-change
```

#### Validate Part 3: FPolicy Event Creation

Run the following command to validate the creation of the FPolicy event:

```
fpolicy policy event show -vserver [SVM_NAME] -event-name [StealthAUDITScreeningCifs or StealthAUDITScreeningNfsV3 or StealthAUDITScreeningNfsV4 or ...] -instance
```

Example:

```
fpolicy policy event show -vserver [SVM_NAME] -event-name StealthAUDITScreeningCifs -instance
```

Verify that the output is displayed as follows:

```
Ontap915::> fpolicy policy event show -vserver svm0 -event-name StealthAUDITScreeningCifs
  (vserver fpolicy policy event show)
                                 Vserver: svm0
                                   Event: StealthAUDITScreeningCifs
                                Protocol: cifs
                         File Operations: create, create_dir, delete,
                                          delete_dir, open, read, write,
                                          rename, rename_dir, setattr
                                 Filters: first-read, first-write,
                                          open-with-delete-intent,
                                          setattr-with-owner-change,
                                          setattr-with-group-change,
                                          setattr-with-sacl-change,
                                          setattr-with-dacl-change,
                                          setattr-with-mode-change
     Send Volume Operation Notifications: true
Send Failed File Operation Notifications: false
```

For more information about creating an event, see the
[vserver fpolicy policy event create](https://docs.netapp.com/us-en/ontap-cli-9141/vserver-fpolicy-policy-event-create.html)
article.

### Part 4: Create Persistent Store

The Persistent Store provides a temporary on-disk storage for activity events before they are sent
to Activity Monitor Agent. The Persistent Store is optional but recommended for ONTAP 9.15.1 and
later versions.

IMPORTANT:

- Persistent Store is supported for ONTAP 9.15.1 and later versions.
- The SVM used must be the one hosting the CIFS or NFS shares to be monitored.
- There is no need to use an existing volume. A new volume will be created automatically and managed
  by the FPolicy subsystem.
- The volume size depends on the duration for which the events persist and the event rate. For
  example, if you want 30 minutes of events to persist in an SVM with a capacity of 5000
  events/second and the average event record size of 0.6 KB, the required volume size is
  `5000 * 30 * 60 * 0.6 KB = 5400000 KB ≈ 5 GB`.
- For the Persistent Store to create a volume automatically, at least one local tier (aggregate)
  must be assigned to the SVM. Use `vserver add-aggregates` to assign local tiers.

    The following values are required:

    - `vserver` – The name of the SVM where you want to create the Persistent Store.
    - `persistent-store` – The name of the Persistent Store object.

        - The default name is `StealthAUDITPersistentStore`.  
          The names of the event objects can be customized (see
          [Customization of FPolicy Object Names](#customization-of-fpolicy-object-names)).

    - `volume` – The name of the volume used for event storage.

        - If the volume doesn't exist, it will be automatically created on an assigned local tier.
          This is recommended.

    - `size` – The initial size of the volume. The format is `<integer>[KB|MB|GB]`.

    The following values are optional:

    - `autosize-mode` – Specifies the auto size behavior for the volume. Options include `off`
      (default), `grow`, or `grow_shrink`.

:::warning
All parameters are case sensitive.
:::


Use the following command to create the Persistent Store:

vserver fpolicy persistent-store create -vserver [SVM_NAME] -persistent-store [STORE_NAME] -volume
[VOLUME_NAME] -size [SIZE] -autosize-mode [AUTOSIZE]

Example:

vserver fpolicy persistent-store create -vserver testserver -persistent-store
StealthAUDITPersistentStore -volume testserver_ps_vol -size 5GB -autosize-mode grow_shrink

#### Validate Part 4: Create Persistent Store

Run the following command to validate the creation of the Persistent Store:

vserver fpolicy persistent-store show -vserver [SVM_NAME] -persistent-store
StealthAUDITPersistentStore -instance

Ensure that the output is displayed as follows:

cluster1::> vserver fpolicy persistent-store show -vserver testserver -persistent-store
StealthAUDITPersistentStore -instance  
 Vserver: testserver  
 Persistent Store Name: StealthAUDITPersistentStore  
 Volume name of the Persistent store: testserver_ps_vol  
 Size of the Persistent Store: 5GB  
 Autosize Mode for the Volume: grow_shrink

For more information about creating a Persistent Store, see the
[vserver fpolicy persistent store create](https://docs.netapp.com/us-en/ontap-cli/vserver-fpolicy-persistent-store-create.html)
article.

### Part 5: Create FPolicy Policy

The FPolicy policy associates the other three FPolicy components and allows for the designation of a
privileged FPolicy user, or the provisioned FPolicy account. If running the Access Auditing (FSAA),
Activity Auditing (FSAC), and/or Sensitive Data Discovery Auditing scans in Access Analyzer, then
this is also the user account credential to be added to the Access Analyzer Connection Profile.

IMPORTANT:

- To monitor both CIFS and NFS protocols, two FPolicy Event were created. Multiple events can be
  included in the FPolicy policy.
- The SVM used must be the SVM hosting the CIFS or NFS shares to be monitored.
- The External Engine, FPolicy Event, Persistent Store used in this command must be configuration
  objects created in the preceding steps.

    The following values are required:

    - `vserver` – The name of SVM.
    - `policy-name StealthAUDIT` – The name of the policy object can be customized (see
      [Customization of FPolicy Object Names](#customization-of-fpolicy-object-names)).
    - `engine` – The name of the External Engine created in
      [Part 2: Create External Engine](#part-2-create-external-engine).
    - `events` – A list of FPolicy Event objects created in
      [Part 3: Create FPolicy Event](#part-3-create-fpolicy-event).
    - `persistent-store` – The name of the Persistent Store created in
      [Part 4: Create Persistent Store](#part-4-create-persistent-store). Required only if the
      Persistent Store is used.

    The following values are required for Access Analyzer integration:

    - `privileged-user-name` – Must be a provisioned FPolicy account.
    - `allow-privileged-access` – Set to yes.

:::warning
All parameters are case sensitive.
:::


Use the following command to create the FPolicy policy to monitor both CIFS and NFS protocols:

```
vserver fpolicy policy create -vserver [SVM_NAME] -policy-name StealthAUDIT -events StealthAUDITScreeningCifs,StealthAUDITScreeningNfsV3,StealthAUDITScreeningNfsV4 -engine StealthAUDITEngine -persistent-store StealthAUDITPersistentStore -is-mandatory false -allow-privileged-access yes -privileged-user-name [DOMAIN\DOMAINUSER]
```

Example:

```
vserver fpolicy policy create -vserver testserver -policy-name StealthAUDIT -events StealthAUDITScreeningCifs,StealthAUDITScreeningNfsV3,StealthAUDITScreeningNfsV4 -engine StealthAUDITEngine -persistent-store StealthAUDITPersistentStore -is-mandatory false -allow-privileged-access yes -privileged-user-name example\user1
```

Use the following command to create the FPolicy policy to monitor only CIFS protocols:

```
vserver fpolicy policy create -vserver [SVM_NAME] -policy-name StealthAUDIT -events StealthAUDITScreeningCifs -engine StealthAUDITEngine -persistent-store StealthAUDITPersistentStore -is-mandatory false -allow-privileged-access yes -privileged-user-name [DOMAIN\DOMAINUSER]
```

Example:

```
vserver fpolicy policy create -vserver testserver -policy-name StealthAUDIT -events StealthAUDITScreeningCifs -engine StealthAUDITEngine -persistent-store StealthAUDITPersistentStore -is-mandatory false -allow-privileged-access yes -privileged-user-name example\user1
```

Use the following command to create the FPolicy policy to monitor only NFS protocols:

```
vserver fpolicy policy create -vserver [SVM_NAME] -policy-name StealthAUDIT -events StealthAUDITScreeningNfsV3,StealthAUDITScreeningNfsV4 -engine StealthAUDITEngine -persistent-store StealthAUDITPersistentStore -is-mandatory false -allow-privileged-access yes -privileged-user-name [DOMAIN\DOMAINUSER]
```

Example:

```
vserver fpolicy policy create -vserver testserver -policy-name StealthAUDIT -events StealthAUDITScreeningNfsV3,StealthAUDITScreeningNfsV4 -engine StealthAUDITEngine -persistent-store StealthAUDITPersistentStore -is-mandatory false -allow-privileged-access yes -privileged-user-name example\user1
```

#### Validate Part 5: FPolicy Policy Creation

Run the following command to validate the creation of the FPolicy policy:

```
fpolicy policy show -vserver [SVM_NAME] -policy-name StealthAUDIT -instance
```

```
Ontap915::> fpolicy policy show -instance
  (vserver fpolicy policy show)
                        Vserver: svm0
                         Policy: StealthAUDIT
              Events to Monitor: StealthAUDITScreeningCifs,
                                 StealthAUDITScreeningFailedCifs,
                                 StealthAUDITScreeningNfsV3,
                                 StealthAUDITScreeningFailedNfsV3,
                                 StealthAUDITScreeningNfsV4,
                                 StealthAUDITScreeningFailedNfsV4
                 FPolicy Engine: StealthAUDITEngine
Is Mandatory Screening Required: false
        Allow Privileged Access: no
User Name for Privileged Access: -
    Is Passthrough Read Enabled: false
          Persistent Store Name: -
```

For more information about creating a policy, see the
[vserver fpolicy policy create](https://docs.netapp.com/us-en/ontap-cli/vserver-fpolicy-policy-create.html)
article.

### Part 6: Create FPolicy Scope

The FPolicy scope creates the filters necessary to perform scans on specific shares or volumes. To
monitor all volumes or all shares, replace the volume/share name variable [SVM_NAME] in the command
with an asterisk (\*).

IMPORTANT:

- The SVM used must be the SVM hosting the CIFS or NFS shares to be monitored.
- It isn't necessary to specify both volumes and shares. One or the other is sufficient.
- If you want to monitor everything, set the "`volumes-to-include`" value to "`*`".

Use the following command to create the FPolicy scope by specifying volumes:

```
vserver fpolicy policy scope create -vserver [SVM_NAME] -policy-name StealthAUDIT -volumes-to-include [VOLUME_NAME],[VOLUME_NAME]
```

Example:

```
vserver fpolicy policy scope create -vserver testserver -policy-name StealthAUDIT -volumes-to-include samplevolume1,samplevolume2
```

Use the following command to create the FPolicy scope by specifying shares:

```
vserver fpolicy policy scope create -vserver [SVM_NAME] -policy-name StealthAUDIT -shares-to-include [SHARE_NAME],[SHARE_NAME]
```

Example:

```
vserver fpolicy policy scope create -vserver testserver -policy-name StealthAUDIT -shares-to-include sampleshare1,sampleshare2
```

#### Validate Part 6: FPolicy Scope Creation

Run the following command to validate the FPolicy scope creation:

```
fpolicy policy scope show -instance
```

```
Ontap915::> fpolicy policy scope show -instance
  (vserver fpolicy policy scope show)
                   Vserver: svm0
                    Policy: StealthAUDIT
         Shares to Include: *
         Shares to Exclude: -
        Volumes to Include: *
        Volumes to Exclude: -
Export Policies to Include: *
Export Policies to Exclude: -
File Extensions to Include: -
File Extensions to Exclude: -
```

For more information about creating scope, see the
[vserver fpolicy policy scope create](https://docs.netapp.com/us-en/ontap-cli-9141/vserver-fpolicy-policy-scope-create.html)
article.

### Part 7: Set TLS Authentication

If using the TLS authentication options, set the appropriate authentication type.

#### Set Server-Authentication

Use the following command to set server-authentication:

```
vserver fpolicy policy externalengine modify -vserver [SVM_NAME] -engine-name StealthAUDITEngine -ssl-option server-auth
```

Example:

```
vserver fpolicy policy externalengine modify -vserver testserver -engine-name StealthAUDITEngine -ssl-option server-auth
```

#### Set Mutual-Authentication

Use the following command to set mutual-authentication:

```
vserver fpolicy policy external-engine modify ‑vserver [SVM_NAME] -engine-name StealthAUDITEngine -ssl-option mutual-auth -certificate-common-name [COMMON_NAME] -certificate-serial [CERTIFICATE_SERIAL] -certificate-ca [CERTIFICATE_AUTHORITY]
```

Example:

```
vserver fpolicy policy external-engine modify -vserver testserver -engine-name StealthAUDITEngine -ssl-option mutual-auth -certificate-common-name testserver -certificate-serial 461AC46521B31321330EBBE4321AC51D -certificate-ca "VeriSign Universal Root Certification Authority"
```

#### Validate Mutual-Authentication Is Set

Run the following command to confirm mutual-authentication is set:

```
vserver fpolicy policy external-engine show -fields ssl-option
```

### Part 8: Enable the FPolicy

Enable the FPolicy before configuring the Activity Monitor Agent to monitor the SVM.

IMPORTANT:

- The SVM used must be the SVM hosting the CIFS or NFS shares to be monitored.

Use the following command to enable the FPolicy:

```
vserver fpolicy enable -vserver [SVM_NAME] -policy-name StealthAUDIT -sequence-number [INTEGER]
```

Example:

```
vserver fpolicy enable -vserver testserver -policy-name StealthAUDIT -sequence-number 10
```

#### Validate Part 8: FPolicy Enabled

Run the following command to validate the FPolicy scope creation:

```
vserver fpolicy show
```

```
Ontap915::> fpolicy show
    show                             show-enabled
    show-engine                      show-passthrough-read-connection
Ontap915::> fpolicy show
  (vserver fpolicy show)
                                      Sequence
Vserver       Policy Name               Number  Status   Engine
------------- ----------------------- --------  -------- ---------
svm0          StealthAUDIT                  10  on       StealthAU
                                                         DITEngine
```

For more information about enabling a policy, see the
[vserver fpolicy enable](https://docs.netapp.com/us-en/ontap-cli-9121//vserver-fpolicy-enable.html)
article.

### Part 9: Connect FPolicy Server / Agent to Cluster Node

Manually connecting the FPolicy server (or Agent server) to the Cluster Node is only needed if there
is an issue with connection to the Cluster Node or for troubleshooting a disconnection issue.

Use the following command to connect the `StealthAUDITEngine` that belongs to the `StealthAUDIT`
policy to all Cluster Nodes:

```
policy engine-connect -vserver [SVM_NAME] -policy-name StealthAUDIT -node *
```

Example:

```
policy engine-connect -vserver testserver -policy-name StealthAUDIT -node *
```

#### Validate Part 9: Connection to Cluster Node

Run the following command to validate connection to the Cluster Node:

```
fpolicy show-engine -vserver [SVM_NAME] -policy-name StealthAUDIT -node *
```

```
Ontap915::> fpolicy show-engine -vserver svm0 -policy-name StealthAUDIT -node *
  (vserver fpolicy show-engine)
                                   FPolicy           Server         Server
Vserver Policy Name   Node         Server            Status         Type
------- ------------- ------------ ----------------- -------------- -----------
svm0    StealthAUDIT  Ontap915-01  192.168.11.35     disconnected   primary
```

## Automatic Configuration of FPolicy

The Activity Monitor can automatically configure FPolicy on the targeted SVM. The FPolicy created
will monitor file system activity from all volumes and shares of the SVM. This feature can be
enabled using the **Configure FPolicy. Create or modify FPolicy objects if needed** checkbox on the
FPolicy page in the monitored host's properties in the Activity Monitor.

Starting ONTAP 9.15.1 and later versions, it is recommended to enable the Persistent Store feature
that stores events on disk before they are sent to the Activity Monitor Agent. This reduces
client-side latency and increases resilience during network delays or bursts of activity. To enable
the Persistent Store, specify a volume name and size on the Persistent Store tab of the FPolicy page
in the monitored host properties. The volume will be automatically created if it doesn't already
exist. See the [Persistent Store](#persistent-store) topic for additional information on the
recommended volume size.

If using the TLS, mutual authentication option, create the PEM file for the Client Certificate,
which you need during the monitored host configuration in the Activity Monitor. You must also set
mutual authentication on the SVM.

### Set TLS Mutual-Authentication

If using the TLS, mutual authentication options, set authentication as follows.

Use the following command to set mutual-authentication:

```
vserver fpolicy policy external-engine modify -vserver [SVM_NAME] -engine-name StealthAUDITEngine -ssl-option mutual-auth -certificate-common-name [COMMON_NAME] -certificate-serial [CERTIFICATE_SERIAL] -certificate-ca [CERTIFICATE_AUTHORITY]
```

Example:

```
vserver fpolicy policy external-engine modify -vserver testserver -engine-name StealthAUDITEngine -ssl-option mutual-auth -certificate-common-name testserver -certificate-serial 461AC46521B31321330EBBE4321AC51D -certificate-ca "VeriSign Universal Root Certification Authority"
```

#### Validate: Mutual-Authentication

Run the following command to confirm mutual-authentication is set:

```
vserver fpolicy policy external-engine show -fields ssl-option
```

## Customization of FPolicy Object Names

Activity Monitor uses the following FPolicy object names by default:

- Policy name – `StealthAUDIT`
- External Engine name – `StealthAUDITEngine`
- CIFS Event name – `StealthAUDITScreeningCifs`
- NFS v3 Event name – `StealthAUDITScreeningNfsV3`
- NFS v4 Event name – `StealthAUDITScreeningNfsV4`
- Failed CIFS Event name – `StealthAUDITScreeningFailedCifs`
- Failed NFS v3 Event name – `StealthAUDITScreeningFailedNfsV3`
- Failed NFS v4 Event name – `StealthAUDITScreeningFailedNfsV4`
- Persistent Store name – `StealthAUDITPersistentStore`

These names can be customized in the monitored host's settings in the Activity Monitor. It can be
useful in two scenarios:

- You want the names to match the company policies;
- You want to configure FPolicy manually using your custom names, but also want to leverage the
  "Enable and Connect FPolicy" feature of the Activity Monitor, so that the product ensures that
  FPolicy stays enabled and connected at all times.
