---
description: 'Shows how to change Event Service listening ports for Netwrix Threat Prevention using pgAdmin by editing the defend_config table and restarting the service.'
keywords:
- Event Service
- listening port
- pgAdmin
- defend_config
- Netwrix Threat Prevention
- Threat Manager
- port configuration
- FS port
- AD port
products:
- threat-manager
title: 'How to Customize Event Service Listening Port(s)'
knowledge_article_id: kA04u00000110h7CAA
---

# How to Customize Event Service Listening Port(s)

## Symptoms
You need to customize Threat Manager listening ports for the Event Service due to customer or environmental requirements.

## Cause
Customer or environmental requirements dictate that the default Netwrix Threat Prevention Event Service listening port(s) must be changed.

## Resolution
Alter the default Netwrix Threat Prevention Event Service listening port(s) via PGAdmin:

1. Install the latest PGAdmin Console: https://www.pgadmin.org/download/
2. Connect to the Netwrix Threat Prevention database. You will have to create a “Master” password for PGAdmin as well as enter the Netwrix Threat Prevention database password: `DEFEND124!!`
3. Select **Tables** > **defend_config table**
4. Right click and select **View/Edit Data** > **First 100 Rows**
5. Change the Value for the port in question on line 2 (`10000` is the Default FS Port and `10001` is the Default AD Port):

```json
[{"id":1,"port":10000,"enabled":true, ...}{"id":2,"port":10001,"enabled":true, ...}{...}]
```

For example, change the FS port to `514` and click **OK**:  
![port512.png](./images/ka0Qk000000DkZh_0EM4u000008LC2a.png)

6. In the window below click the **Save Data Changes** icon.
7. Restart the Netwrix Threat Prevention Event Service.