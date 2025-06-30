# NetApp Data ONTAP Cluster-Mode Activity Auditing Configuration

The Activity Monitor agent employed to monitor NetApp leverages NetApp ONTAP API, and the NetApp
FPolicy framework to monitor file system events. This includes both NetApp 7-Mode and Cluster-Mode
configurations. For more information about FPolicy read the
[What are the two parts of the FPolicy solution ](https://library.netapp.com/ecmdocs/ECMP1401220/html/GUID-54FE1A84-6CF0-447E-9AAE-F43B61CA2138.html)
article.

Activity Monitor requires two communication channels for ONTAP monitoring:

1. Activity Monitor Agent connects to ONTAP on port 80 or 443 for access to ONTAP API (ONTAPI/ZAPI
   or REST API).
2. Data LIFs of the SVM connect to Activity Monitor Agent on port 9999 for FPolicy notifications.

The ONTAP API access is mandatory; without the API access the agent will not be able to receive and
translate events from FPolicy. Both classic ONTAPI/ZAPI and the new REST API are supported. The
agent uses the API to retrieve information about the storage virtual machines (SVM): CIFS settings,
list of volumes, list of LIFs. Depending on the configuration, the agent can also retrieve the state
of FPolicy to ensure it is enabled; configure FPolicy and register or unregister itself.

The FPolicy framework enables the collection of audit events on the ONTAP side and their transfer to
the agent(s) via the designated Data LIFs. Each LIF establishes its own connection with one or
several agents and sends notifications as soon as the file transaction occurs. The FPolicy
connection is asynchronous and buffered; both ONTAP and Activity Monitor have techniques in place to
make sure that connections are alive and working. The connection can be secured using TLS with
server or mutual authentication.

FPolicy may have a significant impact on file system throughput, and it is always a best practice to
monitor performance when enabling FPolicy.

**_RECOMMENDED:_** Create a tailored FPolicy which only collects the desired activity from the
environment to limit the scope and impact.

For scale-out and fault tolerance purposes, the product supports a range of deployment options. A
single agent can receive events from multiple SVMs. Or events from a single SVM can be distributed
among multiple agents. Or a set of SVMs can distribute events among a set of agents. The choice
depends on the fault tolerance requirements and the expected event flow. As a rule of thumb, the
_average_ load on a single agent should not exceed 5000 events per second.

Configuration Checklist

Complete the following checklist prior to configuring the activity monitoring of NetApp Data ONTAP
Cluster-Mode devices. Instructions for each item of the checklist are detailed within the following
sections.

Checklist Item 1: Plan Deployment

- Gather the following information:

    - Names of the SVM(s) to be monitored

        - FPolicy is configured for each SVM separately
        - This should be the SVM(s) hosting the CIFS or NFS shares(s) to be monitored

    - Credentials to access ONTAP to provision a role and account.
    - Desired functionality level:

        - _Manual_. A user configures FPolicy manually and ensures it stays enabled.
        - _Enable and Connect FPolicy_. The product ensures that FPolicy stays enabled and connected
          all the time. RECOMMENDED.
        - _Configure FPolicy_. The product configures FPolicy automatically and ensures it stays
          enabled and connected all the time. RECOMMENDED.

    - Volumes or shares on each SVM to be monitored

        - Limiting the FPolicy to select volumes or shares is an effective way to limit the
          performance impact of FPolicy

    - Successful/failed file operations to be monitored

        - Limiting the FPolicy to specific file operations is an effective way to limit the
          performance impact of FPolicy

    - IP Address of the server(s) where the Activity Monitor Agent is deployed
    - API enabled in ONTAP: the classic ONTAPI/ZAPI or the new REST API

        - The product supports the REST API for ONTAP 9.13.1 and above.

    - Encryption and Authentication protocol for FPolicy connection

        - No Authentication (default)
        - TLS, server authentication (the SVM authenticates the agent)
        - TLS, mutual authentication (both the SVM and the agent authenticate each other)

Checklist Item 2:
[Provision ONTAP Account](/docs/accessanalyzer/11.6/config/netappcmode/provisionactivity.md)

- Permission names depend on the API used, ONTAPI/ZAPI or REST API.
- The case of domain and username created during the account provisioning process must match exactly
  to the credentials provided to the activity agent for authentication to work.
- The credential associated with the FPolicy used to monitor activity must be provisioned with
  access to (at minimum) the following CLI or API commands, according to the level of collection
  desired:

    - Manual, Collect Activity Events Only (Least Privilege)

        - ONTAPI/ZAPI

            - `version` – Readonly access
            - `volume` – Readonly access
            - `vserver` – Readonly access

        - REST API

            - `/api/cluster` – Readonly access
            - `/api/protocols/cifs/services` – Readonly access
            - `/api/storage/volumes` – Readonly access
            - `/api/svm/svms` – Readonly access

    - Employ the “Enable and connect FPolicy” Option (Less Privilege) – RECOMMENDED

        - ONTAPI/ZAPI

            - `version` – Readonly access
            - `volume` – Readonly access
            - `vserver` – Readonly access
            - `network interface` – Readonly access
            - `vserver fpolicy disable` – All access
            - `vserver fpolicy enable` – All access
            - `vserver fpolicy engine-connect` – All access

        - REST API

            - `/api/cluster` – Readonly access
            - `/api/protocols/cifs/services` – Readonly access
            - `/api/storage/volumes` – Readonly access
            - `/api/svm/svms` – Readonly access
            - `/api/network/ip/interfaces` – Readonly access
            - `/api/protocols/fpolicy` – All access

    - Employ the “Configure FPolicy” Option (Automatic Configuration of FPolicy) – RECOMMENDED

        - ONTAPI/ZAPI

            - `version` – Readonly access
            - `volume` – Readonly access
            - `vserver` – Readonly access
            - `network interface` – Readonly access
            - `vserver fpolicy` – All access
            - `security certificate install` – All access (only if FPolicy uses a TLS connection)

        - REST API

            - `/api/cluster` – Readonly access
            - `/api/protocols/cifs/services` – Readonly access
            - `/api/storage/volumes` – Readonly access
            - `/api/svm/svms` – Readonly access
            - `/api/network/ip/interfaces` – Readonly access
            - `/api/protocols/fpolicy` – All access
            - `/api/security/certificates` – All access (only if FPolicy uses a TLS connection)

    - Enterprise Auditor Integration requires the addition of the following CLI command:

        - `security login role show-ontapi` – Readonly access

Checklist Item 3:
[Configure Network](/docs/accessanalyzer/11.6/config/netappcmode/configurefirewall.md)

- Agent must be able to connect to ONTAP API via a management LIF on ports HTTP (80) or HTTPS (443)

    - NetApp firewall policy may need to be modified.
    - LIF's service policy may need to be modified to include `management-https` or
      `management-http` services.
    - Either of these ports is required. Activity Monitor requires ONTAP API access.

- ONTAP cluster nodes, which serve the SVM, must be able to connect to the agent on port 9999.

    - LIFs' service policy may need to be modified to include `data-fpolicy-client` service.
    - Each data serving node should have its own LIF with the `data-fpolicy-client` service.
    - The default port 9999 can be changed in the agent's settings.

Checklist Item 4:
[Configure FPolicy](/docs/accessanalyzer/11.6/config/netappcmode/configurefpolicy.md)

- Remember: all FPolicy objects and SVM names are case sensitive.
- FPolicy must be configured for each SVM to be monitored.
- If using TLS, … authentication options, generate needed certificates and PEM files
- Select method:

    - Configure FPolicy Manually – If you want to exclude certain volumes or shares; a tailored
      FPolicy decreases the impact on NetApp.

        - Required when the FPolicy account is provisioned for either Least Privileged or Less
          Privilege permission model
        - If using TLS, … authentication options, set authentication

    - Allow the Activity Monitor to create an FPolicy automatically

        - If using TLS, … authentication options, set authentication
        - This option is enabled using the **Configure FPolicy. Create or modify FPolicy objects if
          needed** checkbox for each monitored SVM.
        - It monitors file system activity on all volumes and shares of the SVM.
        - FPolicy configuration is automatically updated to reflect the Activity Monitor
          configuration.
        - Requires a Privileged Access credential be provided.

Checklist Item 5: Activity Monitor Configuration

- Deploy the Activity Monitor Agent to a Windows server.
- Configure the Agent to monitor the SVM.
