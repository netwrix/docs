---
title: "Configure Service Policy"
description: "Configure Service Policy"
sidebar_position: 30
---

# Configure Service Policy

**NOTE:** This paragraph only applies to NetApp ONTAP version 9.10.1 and higher.

By default, the 'default-data-files' policy is applied to the SVM CIFS/SMB interface and HTTP/HTTPS
options are not available. To make the ONTAPI available through HTTP/HTTPS ports on your SVM
interface for Netwrix Auditor Server, configure the 'interface service'-policy. Below is an example
of the configuration:

1. Navigate to your cluster command prompt through the SSH/Telnet connection.
2. Log in as a cluster administrator and review your current service-policy configuration. Run the
   following command:

    cluster1::> network interface show -vserver svm1 -fields service-policy

    Example output:

    vserver lif service-policy

    ***

    svm1 lif_svm1_126 default-data-files

    svm1 lif_svm1_349 default-data-files

    Where `svm1 `– is the name of your SVM,

    The `lif_svm1_126 and lif_svm1_349` parameter is the `svm1` logical interface.

    The `default-data-files` parameter is the service-policy applied to lif-s.

3. To display the services available through the '`default-data-files`' policy, run the following
   command:

    cluster1::> network interface service-policy show -vserver svm1 -policy default-data-files

    Example output:

    Vserver: svm1

    Policy Name: default-data-files

    Included Services: data-core, data-cifs, data-fpolicy-client, data-dns-server

    Service: Allowed Addresses: data-core: 0.0.0.0/0

    data-cifs: 0.0.0.0/0

    data-fpolicy-client: 0.0.0.0/0

    data-dns-server: 0.0.0.0/0

4. Set the advanced privilege level to be able to create and modify the service-policy. Run the
   following command:

    cluster1::> set -privilege advanced

    _Remember,_ The command prompt should be changed to “`cluster1::*>`”

5. Clone the existing '`default-data-files`' LIF policy to be able to use shares with a new
   service-policy. Run the following command:

    cluster1::\*> network interface service-policy clone -vserver svm1 -policy default-data-files
    -target-policy netwrix-policy -target-vserver svm1

    Where the '`netwrix-policy`' parameter is the name of new service-policy.

6. Modify the new service-policy by adding services to access over http\https protocols. Run the
   following command:

    cluster1::\*> network interface service-policy add-service -vserver svm1 -policy netwrix-policy
    -service management-http

    cluster1::\*> network interface service-policy add-service -vserver svm1 -policy netwrix-policy
    -service management-https

7. Return to the administrator privilege level. Run the following command:

    cluster1::\*> set -privilege admin

8. Apply a new service-policy to the SVM LIFs. Run the following command:

    cluster1::> network interface modify -vserver svm1 -lif lif_svm1_126 -service-policy
    netwrix-policy

    cluster1::> network interface modify -vserver svm1 -lif lif_svm1_349 -service-policy
    netwrix-policy

    **NOTE:** For better security, specify the allowed ip-addresses when adding the service.
    Double-check that your subnet is configured on the machine where Netwrix Auditor Server resides.
    Allowed-addresses are: 192.168.1.0/24.

9. Check the current interface service-policy using command from the step 2:

    cluster1::> network interface show -vserver svm1 -fields service-policy

    Example output:

    vserver lif service-policy

    ***

    svm1 lif_svm1_126 netwrix-policy

    svm1 lif_svm1_349 netwrix-policy
