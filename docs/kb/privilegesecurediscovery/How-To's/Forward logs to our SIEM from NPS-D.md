
## Forward Logs to SIEM via Fluentd (Validation and Update Steps)

Below are the recommended steps to be completed during a scheduled downtime window or support call, in case the service restart causes any issues.

Please reference the [Forward Logs to Syslog Servers and SIEM Solutions | Netwrix Product Documentation](https://docs.netwrix.com/docs/privilegesecurediscovery/2_22/integrations/siem/forwardlogs)
 for the required configuration (stanza) details.

### Procedure

1. SSH into the server.

2. Back up the current configuration file:

```
sudo cp -v /secureone/conf/fluentd/fluent.conf /secureone/conf/fluentd/fluent.conf-$(date '+%Y-%m-%dT%H_%M_%S')
```

3. Check the current IP/hostname, port, and protocol:

```
sudo grep -C4 host /secureone/conf/fluentd/fluent.conf
```

Note: If the above command returns no results, review the full file to confirm the required entries exist:

```
sudo cat /secureone/conf/fluentd/fluent.conf
```

4. Update the IP/hostname, port(s), and protocol using a text editor (vi, vim, or nano). Example:

```
sudo vim /secureone/conf/fluentd/fluent.conf
```

5. Recheck that the file was updated and saved correctly by repeating step 3.

6. Restart the fluentd service:

```
s1 restart fluentd
```

7. Confirm logs are flowing correctly:

```
sudo docker service logs --tail 50 --follow s1_fluentd
```

8. Validate that the configuration loaded successfully:

```
sudo docker exec -it $(sudo docker ps | grep fluentd | cut -d' ' -f1) fluentd -c /fluentd/etc/fluent.conf --dry-run
```

### Validation Notes

* No red lines should appear in the output
* Green indicates successfully loaded
* Yellow indicates warnings
* Red indicates failure to load



The configuration file details referenced in this KBA [Forward Logs to Syslog Servers and SIEM Solutions | Netwrix Product Documentation](https://docs.netwrix.com/docs/privilegesecurediscovery/2_22/integrations/siem/forwardlogs) will require mainly host (FQDN or ID), port number, and protocol variables to be confirmed prior to the update. Once these three pieces of data are confirmed, the configuration can be updated and typically takes around 30 minutes in a scheduled window to complete.
