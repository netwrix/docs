---
title: "Configure System Service Firewall Policies"
description: "Configure System Service Firewall Policies"
sidebar_position: 20
---

# Configure System Service Firewall Policies

Configure firewall to make file shares and Clustered Data ONTAP HTTP/HTTPS ports accessible from the
computer where Netwrix Auditor Server is installed. Your firewall configuration depends on network
settings and security policies in your organization. Below is an example of configuration:

**NOTE:** For NetApp ONTAP 9.10.1 and higher, the command context system services firewall policy is
deprecated and might be removed in a future ONTAP release. Review the NetApp
[ONTAP 9.10.1 commands](https://docs.netapp.com/us-en/ontap-cli-9101/) article for additional
information.

1. Navigate to your cluster command prompt through the SSH/Telnet connection.
2. Log in as a cluster administrator and review your current firewall configuration. For example:

    |                                           |              |         |
    | ----------------------------------------- | ------------ | ------- |
    | cluster1::> system services firewall show |              |         |
    | Node                                      | Enabled      | Logging |
    | ------------                              | ------------ | ------- |
    | cluster1-01                               | true         | false   |

3. Create firewall policy or edit existing policy to allow HTTP/HTTPS (note that modifying a policy
   you may overwrite some settings). For example:

    | To...                                             | Execute...                                                                                                                                                                                                                                                                                   |
    | ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | NetApp Clustered Data ONTAP 8.2                   |                                                                                                                                                                                                                                                                                              |
    | Create a policy                                   | `cluster1::> system services firewall policy create -policy netwrix_policy -service http -vserver svm1 -action allow -ip-list 192.168.1.0/24` `cluster1::> system services firewall policy create -policy netwrix_policy -service https -vserver svm1 -action allow -ip-list 192.168.1.0/24` |
    | Modify existing policy                            | `cluster1::> system services firewall policy modify -policy netwrix_policy -service http -vserver svm1 -action allow -ip-list 192.168.1.0/24` `cluster1::> system services firewall policy modify -policy netwrix_policy -service https -vserver svm1 -action allow -ip-list 192.168.1.0/24` |
    | NetApp Clustered Data ONTAP 8.3, ONTAP 9.0 - 9.10 |                                                                                                                                                                                                                                                                                              |
    | Create a policy                                   | `cluster1::> system services firewall policy create -policy netwrix_policy -service http -vserver svm1 -allow-list 192.168.1.0/24` `cluster1::> system services firewall policy create -policy netwrix_policy -service https -vserver svm1 -allow-list 192.168.1.0/24`                       |
    | Modify existing policy                            | `cluster1::> system services firewall policy modify -policy netwrix_policy -service http -vserver svm1 -allow-list 192.168.1.0/24` `cluster1::> system services firewall policy modify -policy netwrix_policy -service https -vserver svm1 -allow-list 192.168.1.0/24`                       |

    where `pol1` is your Firewall policy name and `192.168.1.0/24` is your subnet where Netwrix
    Auditor Server resides.

4. Apply the firewall policy to a LIF.

    `cluster1::>network interface modify -vserver svm -lif vs1-cifs-lif1 -firewall-policy netwrix_policy`

    To verify the policy was applied correctly, execute the following:

    `cluster1::>network interface show -fields firewall-policy`
