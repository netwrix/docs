---
title: "Logs REST API Setup"
description: "Enable the Logs REST API and create API keys on the Endpoint Protector server"
sidebar_position: 20
---

# Logs REST API Setup

## Overview

This page is for Endpoint Protector administrators who need to:

- Make the Logs REST API reachable at `https://<epp-server>/api/logs/`
- Create and manage API keys for external integrations

:::warning
This is an advanced procedure. It requires SSH/root access to the Endpoint Protector server and involves editing server configuration and running SQL commands.

If you are not comfortable with these steps, contact Netwrix Support for assistance.
:::

## Prerequisites

- Endpoint Protector server with nginx and PHP-FPM running
- SSH/root access
- A working database connection to the Endpoint Protector MySQL database

## Step 1 — Enable nginx routing for /api/logs/

**Step 1 –** SSH into the Endpoint Protector server.

**Step 2 –** Open the nginx config:

```bash
vi /etc/nginx/sites-enabled/epp.nginx.conf
```

**Step 3 –** Add the Logs REST API location block before the generic PHP handler and after existing web service blocks:

```nginx
# EPP Logs REST API
location ^~ /api/logs/ {
    alias /var/www/EPPServer/sieratool/webservice/api/;

    location ~ ^/api/logs/(.*)$ {
        include fastcgi_epp_params;
        fastcgi_param SCRIPT_FILENAME /var/www/EPPServer/sieratool/webservice/api/index.php;
        fastcgi_param SCRIPT_NAME /api/logs/index.php;
        fastcgi_param REQUEST_URI $request_uri;
        fastcgi_param PATH_INFO $uri;

        fastcgi_buffer_size 64k;
        fastcgi_buffers 8 64k;
        fastcgi_busy_buffers_size 128k;
    }
}
```

**Step 4 –** Validate and reload nginx:

```bash
nginx -t && /etc/init.d/nginx reload
```

:::note
Some Endpoint Protector operations regenerate the nginx configuration from templates. To persist this change across updates, also add the same block to the nginx template files. See the Logs REST API Installation document for details.
:::

## Step 2 — Create the api_key table (if missing)

The Logs REST API uses a database table to store API keys. Run:

```bash
mysql -u root -p$(cat /var/www/EPPServer/.epp_db_pass) epp < /dev/stdin <<'SQL'
CREATE TABLE IF NOT EXISTS `api_key` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `api_key` VARCHAR(128) NOT NULL,
    `name` VARCHAR(256),
    `is_active` INTEGER NOT NULL DEFAULT 1,
    `created_at` DATETIME,
    `last_used_at` DATETIME,
    PRIMARY KEY (`id`),
    UNIQUE KEY `api_key_unique` (`api_key`),
    INDEX `api_key_user_id` (`user_id`),
    CONSTRAINT `api_key_FK_1`
        FOREIGN KEY (`user_id`)
        REFERENCES `sf_guard_user` (`id`)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
SQL
```

:::info
If your database name is not `epp`, check it in: `/var/www/EPPServer/sieratool/config/databases.yml`
:::

## Step 3 — Create an API key for an existing admin user

**Step 1 –** Generate a random API key:

```bash
openssl rand -hex 32
```

**Step 2 –** List active users and identify the admin user ID:

```bash
mysql -u root -p$(cat /var/www/EPPServer/.epp_db_pass) epp -e \
  "SELECT id, username FROM sf_guard_user WHERE is_active = 1;"
```

**Step 3 –** Insert the API key (replace `USER_ID` and `API_KEY_VALUE`):

```bash
mysql -u root -p$(cat /var/www/EPPServer/.epp_db_pass) epp -e \
  "INSERT INTO api_key (user_id, api_key, name, is_active, created_at)
   VALUES (USER_ID, 'API_KEY_VALUE', 'Logs REST API Key', 1, NOW());"
```

## Step 4 — Test the API

```bash
curl -s \
  -H "X-Api-Key: YOUR_API_KEY" \
  "https://localhost/api/logs/endpoints"
```

## Step 5 — Key management operations

**List API keys**

```bash
mysql -u root -p$(cat /var/www/EPPServer/.epp_db_pass) epp -e \
  "SELECT ak.id, gu.username, ak.name, ak.api_key, ak.is_active, ak.created_at
   FROM api_key ak
   JOIN sf_guard_user gu ON ak.user_id = gu.id;"
```

**Deactivate an API key**

```bash
mysql -u root -p$(cat /var/www/EPPServer/.epp_db_pass) epp -e \
  "UPDATE api_key SET is_active = 0 WHERE id = KEY_ID;"
```

**Delete an API key**

```bash
mysql -u root -p$(cat /var/www/EPPServer/.epp_db_pass) epp -e \
  "DELETE FROM api_key WHERE id = KEY_ID;"
```

## Security recommendations

- Keep the API HTTPS-only.
- Rotate API keys regularly.
- Consider restricting access by IP at the nginx level using `allow` / `deny` directives.
- Consider enabling a dedicated nginx access log for `/api/logs/`.

:::warning
Never expose development-only authentication bypasses on production servers. If your build includes any hardcoded or bypass API keys for testing, remove them before production rollout.
:::

## Troubleshooting

**All endpoints return 404**

Verify the nginx location block exists and is placed before the generic PHP handler. Run `nginx -t` and reload nginx.

**502 Bad Gateway**

Verify PHP-FPM is running and reachable by nginx.

**401 Unauthorized (even with a valid key)**

Verify the `api_key` table exists. Verify the API key is active (`is_active = 1`) and the linked user is active.
