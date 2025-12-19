---
title: "403 - Zero USNs by Domain"
description: "403 - Zero USNs by Domain"
sidebar_position: 40
---

# 403 - Zero USNs by Domain

403 - Zero USNs by Domain

# 403 - Zero USNs by Domain

Privilege Secure must point to a single Domain Controller (DC). This is because Privilege Secure
uses the USN values from Active Directory to determine when a group has been changed. These do no
propagate between DCs.

When a DC is unavailable a new one can easily be connected to using the Privilege Secure UI.
However, when this occurs, if the USN number is lower, Privilege Secure will not be aware of changes
to groups. This will impact access from changed groups.

![image.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/4405051526935_image_384x376.webp)

It is recommended to force a re-sync of Privilege Secure's LDAP information when a DC is changed.
This is suggested during the next available maintenance window at the end of the day.

The script detailed in this article can be used to zero the USN for an impacted domain.

### Script Flow

- Script generate a menu list of domains by NETBIOS
- User selects the number for the domain will zero the **highest_usn** and **previous_usn** db
  values
- For selected domain, script will:

- Display pre-zero USN counts
- Prompt for confirmation before zeroing
- Display post-zero USN counts

- Run script multiple times to zero USNs on multiple domains

### Notes

- MongoDB shell command to check USNs by netbios. Script runs this before and after zero for the
  domain zerored. Including here for manual runs:
  `db.discovery_config.find({type:"ldap_config"},{_id:0, domain_netbios:1,"sync.previous_usn":1,"sync.highest_usn":1})`

### Command to Create Script File, Open in VIM, and Make Executable

`sudo vim /secureone/setup/zero_domain_usns.sh && sudo chmod +x /secureone/setup/zero_domain_usns.sh`

### Script Contents

```
#!/bin/bash## Script to select a domain to zero highest_usn and previous_usn db valuesS1ENV=$(sudo docker node ls --format "{{.Hostname}}" | wc -l)MCtnr=$(sudo docker ps | grep mongo | cut -d' ' -f1)if [ $S1ENV == 5 ]; then    DBEnv="mongodb://mongo1,mongo2,mongo3,mongo4,mongo5/SecureONE?replicaSet=secureone"elif [ $S1ENV == 3 ]; then    DBEnv="mongodb://mongo1,mongo2,mongo3/SecureONE?replicaSet=secureone"elif [ $S1ENV == 1 ]; then    DBEnv="SecureONE"else    echo "Script does not support S1ENV nodes for domain_netbios lookup."fiDmenu=$(sudo docker exec -t $MCtnr mongo --quiet $DBEnv \  --eval 'DBQuery.shellBatchSize = 999999999;db.secureone_config.distinct("domain_netbios",{"type":"ldap_config"})' | \  grep -v $(date +'%Y-%m-%d') | tr -d [], | xargs)echo; echo "Detected domain_netbios entries:"PS3="Enter number for domain to zero USNs: "select Dselected in $Dmenudo  echo; echo "Current USN values for $Dselected"  ## display current highest_usn and previous_usn values for the domain  sudo docker exec -t $MCtnr mongo --quiet $DBEnv --eval \    'DBQuery.shellBatchSize = 999999999;    db.secureone_config.find({type:"ldap_config","domain_netbios":"'"${Dselected}"'"},      {_id:0, domain_netbios:1,"sync.previous_usn":1,"sync.highest_usn":1})' | \      grep -v $(date +'%Y-%m-%d') | tr -d {}\" | sed  's/sync ://g'  echo  #echo "Zero USNs for $Dselected, are you sure?"  read -n 1 -p "Zero USNs for $Dselected, are you sure?  [ Y ] to continue, any other key to abort." reply;  if [ "$reply" != "" ]; then echo; fi  if [ "$reply" = "${reply#[Yy]}" ]; then    echo; exit  fi  ## zeroing the highest_usn and previous_usn values for the domain  sudo docker exec -t $MCtnr mongo --quiet $DBEnv --eval \    'db.secureone_config.updateOne({type:"ldap_config","domain_netbios":"'"${Dselected}"'"},{$set:{"sync.highest_usn":NumberInt(0)}})' | \    grep -v $(date +'%Y-%m-%d')  sudo docker exec -t $MCtnr mongo --quiet $DBEnv --eval \    'db.secureone_config.updateOne({type:"ldap_config","domain_netbios":"'"${Dselected}"'"},{$set:{"sync.previous_usn":NumberInt(0)}})' | \    grep -v $(date +'%Y-%m-%d')  ## display current highest_usn and previous_usn values for the domain  echo  sudo docker exec -t $MCtnr mongo --quiet $DBEnv --eval \    'DBQuery.shellBatchSize = 999999999;    db.secureone_config.find({type:"ldap_config","domain_netbios":"'"${Dselected}"'"},      {_id:0, domain_netbios:1,"sync.previous_usn":1,"sync.highest_usn":1})' | \      grep -v $(date +'%Y-%m-%d') | tr -d {}\" | sed  's/sync ://g'  echo; echo "Completed zeroing USNs for $Dselected"  exitdoneunset S1ENVunset MCtnrunset Dmenuunset reply
```

### Command to Run Script

```
sudo /secureone/setup/zero_domain_usns.sh
```

The Customer Success Team can assist with setting this up prior to utilization.

Here is an example of a successful run against the CSTEST domain in one of the Customer Support
labs:

```
secureone@ip-10-100-11-40:~$ sudo /secureone/setup/zero_domain_usns.shDetected domain_netbios entries:1) CSTESTEnter number for domain to zero USNs: 1Current USN values for CSTESTdomain_netbios : CSTEST, highest_usn : 2405725, previous_usn : 2405725Zero USNs for CSTEST, are you sure?[ Y ] to continue, any other key to abort.y{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }domain_netbios : CSTEST, highest_usn : 0, previous_usn : 0Completed zeroing USNs for CSTESTsecureone@ip-10-100-11-40:~$
```
