---
description: >-
  Resolves a MongoDB connection timeout for the Netwrix Change Tracker Hub by
  increasing the IIS pool size and MongoDB connection timeout in
  appsettings.Production.json.
keywords:
  - Netwrix Change Tracker
  - MongoDB
  - timeout
  - SocketException 10060
  - MongoConnectionException
  - iisreset
  - connectTimeoutMS
  - maxPoolSize
  - appsettings.Production.json
products:
  - changetracker
knowledge_article_id: kA0Qk0000000bHJKAY
sidebar_label: 'MongoDB Log Fix: Connection Timeout (SocketException 10060)'
tags: [kb, database-and-diagnostics]
title: 'MongoDB Log Fix: Connection Timeout (SocketException 10060)'
---

# MongoDB Log Fix: Connection Timeout (SocketException 10060)

## Symptom

The hub service log for Netwrix Change Tracker shows the following error:

```text
MongoDB.Driver.MongoConnectionException: An exception occurred while receiving a message from the server.

System.IO.IOException: Unable to read data from the transport connection:
A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.

System.Net.Sockets.SocketException (10060):
A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
```

## Cause

Under load, concurrent requests to the MongoDB instance can exceed the driver's connection pool size (`maxPoolSize`), causing new requests to queue for an available connection. If a request waits longer than the driver's connection timeout (`connectTimeoutMS`) for a connection to become available, it fails with this error.

## Resolution

Increase the IIS pool size and the MongoDB connection timeout to prevent requests from timing out:

1. Open an elevated **Command Prompt** and stop IIS:

   ```bat
   iisreset /stop
   ```

2. Navigate to `C:\inetpub\wwwroot\Change Tracker Generation 7 (NetCore) Hub\Configs\` and open `appsettings.Production.json`.

   > **IMPORTANT:** Back up the file before editing it.

3. Locate the `connectionString` line:

   ```text
   "connectionString": "mongodb://%IP_address%"
   ```

   Edit the line to add `maxPoolSize` and `connectTimeoutMS`:

   ```text
   "connectionString": "mongodb://%IP_address%/?maxPoolSize=500&connectTimeoutMS=120000"
   ```

4. Save the changes and start IIS:

   ```bat
   iisreset /start
   ```

After IIS restarts, the Hub can maintain more concurrent MongoDB connections and allows more time for each request to complete before timing out.
