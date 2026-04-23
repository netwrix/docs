---
title: "Logs REST API Installation"
description: "Full installation and configuration reference for the EPP Logs REST API on nginx"
sidebar_position: 30
---

# Logs REST API Installation

This page covers the installation and configuration of the EPP Logs REST API on an Endpoint Protector server running nginx.

## Prerequisites

- Endpoint Protector server with nginx and PHP-FPM running
- PHP 5.6+ with the following extensions: `mysqli`, `json`, `session`
- Propel ORM configured and operational (part of the standard EPP installation)
- MySQL database with the EPP schema loaded
- SSH/root access to the EPP server

## File deployment

The API files are located under `sieratool/webservice/api/`. On a standard EPP server, the application root is `/var/www/EPPServer/`.

**Step 1 –** Ensure the following directory structure exists on the server:

```
/var/www/EPPServer/sieratool/webservice/api/
├── .htaccess
├── index.php
├── lib/
│   ├── ApiAuth.php
│   ├── ApiResponse.php
│   ├── ApiRouter.php
│   └── BaseController.php
└── controllers/
    ├── AdOperationController.php
    ├── AlertController.php
    ├── AuthLogController.php
    ├── ContentFilteringController.php
    ├── DataRestController.php
    ├── DeviceControlController.php
    ├── DiscoveryController.php
    ├── EasyLockController.php
    ├── EventLogController.php
    ├── ExportLogController.php
    ├── MobileManagementController.php
    ├── ScimLogController.php
    ├── SiemLogController.php
    ├── SystemAlertController.php
    └── TransferLimitController.php
```

**Step 2 –** Set file ownership and permissions:

```bash
chown -R www-data:www-data /var/www/EPPServer/sieratool/webservice/api/
chmod -R 750 /var/www/EPPServer/sieratool/webservice/api/
```

## Nginx configuration

EPP uses nginx as its web server with FastCGI (PHP-FPM) for PHP processing. The main nginx site configuration is at:

```
/etc/nginx/sites-enabled/epp.nginx.conf
```

The configuration template is maintained at:

```
/var/www/EPPServer/appliance/resources/templates/nginx/sites-enabled/epp.nginx.conf.template
```

### Add the API location block

Add the following location block to the nginx server configuration. Place it **before** the generic PHP location block (`location ~ "^(.+\.php)($|/)"`) and after the existing `/ws` blocks.

**Step 1 –** Open the nginx config:

```bash
vi /etc/nginx/sites-enabled/epp.nginx.conf
```

**Step 2 –** Add the following block after the SCIM API block (`location ^~ /scim/`) and before the Kerberos comment block:

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

### Complete configuration context

The following shows where the API block fits relative to existing blocks:

```nginx
# Existing webservice blocks
location /ws {
    if ($ssl_client_verify != SUCCESS) { return 401; }
    alias /var/www/EPPServer/sieratool/webservice;
}

location ~ ^/ws/(.+\.php)$ {
    if ($ssl_client_verify != SUCCESS) { return 401; }
    alias /var/www/EPPServer/sieratool/webservice/$1;
    include fastcgi_epp_params;
}

# SCIM API (existing)
location ^~ /scim/ {
    include fastcgi_epp_params;
    fastcgi_param SCRIPT_FILENAME /var/www/EPPServer/sieratool/scim/public/index.php;
}

# EPP Logs REST API — ADD HERE
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

# Generic PHP handler — MUST come after the API block
location ~ "^(.+\.php)($|/)" {
    fastcgi_split_path_info ^(.+\.php)(.*)$;
    include fastcgi_epp_params;
}
```

### Update the nginx template (for persistence)

The nginx config is regenerated from templates during certain EPP operations. To ensure the API configuration persists, also add the same location block to the template files:

```bash
vi /var/www/EPPServer/appliance/resources/templates/nginx/sites-enabled/epp.nginx.conf.template
vi /var/www/EPPServer/appliance/resources/templates/nginx/sites-enabled/epp.nginx.conf.crc.template
```

### Test and reload nginx

```bash
nginx -t
/etc/init.d/nginx reload
```

Expected output from `nginx -t`:

```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

## Database setup

**Step 1 –** Create the `api_key` table:

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

:::note
The database name may vary. Check it in `/var/www/EPPServer/sieratool/config/databases.yml`.
:::

## Authentication setup

**Step 1 –** Generate a random API key:

```bash
API_KEY=$(openssl rand -hex 32)
echo "Generated API key: ${API_KEY}"
```

**Step 2 –** Find the user ID for the admin user:

```bash
mysql -u root -p$(cat /var/www/EPPServer/.epp_db_pass) epp -e \
  "SELECT id, username FROM sf_guard_user WHERE is_active = 1;"
```

**Step 3 –** Insert the API key (replace `USER_ID` with the actual user ID):

```bash
mysql -u root -p$(cat /var/www/EPPServer/.epp_db_pass) epp -e \
  "INSERT INTO api_key (user_id, api_key, name, is_active, created_at)
   VALUES (USER_ID, '${API_KEY}', 'REST API Key', 1, NOW());"
```

**Manage API keys**

```bash
# List all API keys
mysql -u root -p$(cat /var/www/EPPServer/.epp_db_pass) epp -e \
  "SELECT ak.id, gu.username, ak.name, ak.api_key, ak.is_active, ak.created_at
   FROM api_key ak JOIN sf_guard_user gu ON ak.user_id = gu.id;"

# Deactivate a key
mysql -u root -p$(cat /var/www/EPPServer/.epp_db_pass) epp -e \
  "UPDATE api_key SET is_active = 0 WHERE id = KEY_ID;"

# Delete a key
mysql -u root -p$(cat /var/www/EPPServer/.epp_db_pass) epp -e \
  "DELETE FROM api_key WHERE id = KEY_ID;"
```

## Verification

**Step 1 –** Test nginx is serving the API:

```bash
curl -s -k \
  -H "X-Api-Key: YOUR_API_KEY" \
  https://localhost/api/logs/endpoints | python -m json.tool
```

Expected response:

```json
{
    "success": true,
    "data": {
        "api_name": "EPP Logs REST API",
        "version": "1.0",
        "endpoints": [
            { "method": "GET", "path": "/api/logs/endpoints" },
            { "method": "GET", "path": "/api/logs/event-logs" }
        ]
    }
}
```

**Step 2 –** Test authentication failure (no key):

```bash
curl -s -k https://localhost/api/logs/endpoints | python -m json.tool
```

Expected response:

```json
{
    "success": false,
    "error": {
        "code": 401,
        "message": "Missing API key. Provide via X-Api-Key header or api_key query parameter."
    }
}
```

**Step 3 –** Test a data endpoint:

```bash
curl -s -k \
  -H "X-Api-Key: YOUR_API_KEY" \
  "https://localhost/api/logs/event-logs?per_page=5" | python -m json.tool
```

## Troubleshooting

**API returns 404**

The nginx location block is missing or in the wrong position.

1. Verify the block is present: `grep -n "api/logs" /etc/nginx/sites-enabled/epp.nginx.conf`
2. Ensure the block is placed before the generic PHP handler.
3. Test and reload: `nginx -t && /etc/init.d/nginx reload`

**API returns 502 Bad Gateway**

PHP-FPM is not running or not listening on the expected socket.

1. Check PHP-FPM status: `service php5.6-fpm status`
2. Verify FastCGI is listening: `netstat -tlnp | grep 9000`
3. Check PHP-FPM error log: `tail -50 /var/log/php-fpm.log`

**API returns 500 with database errors**

Propel or database connection issue.

1. Verify database credentials in `/var/www/EPPServer/sieratool/config/databases.yml`
2. Test connectivity: `mysql -u root -p$(cat /var/www/EPPServer/.epp_db_pass) epp -e "SELECT 1;"`
3. Check PHP error log: `tail -100 /var/log/nginx/error.log`

**API returns 401 for a valid API key**

The `api_key` table does not exist or the key is deactivated.

1. Verify the table exists: `mysql -u root -p$(cat /var/www/EPPServer/.epp_db_pass) epp -e "SHOW TABLES LIKE 'api_key';"`
2. If missing, create it using the SQL in the [Database setup](#database-setup) section.
3. Verify the key is active: check `is_active = 1` and the linked user is active in `sf_guard_user`.

**Changes lost after EPP update**

The nginx config was regenerated from templates without the API block.

1. Re-add the location block to `/etc/nginx/sites-enabled/epp.nginx.conf`.
2. Add the block to both template files (see [Update the nginx template](#update-the-nginx-template-for-persistence)).
3. Reload nginx: `/etc/init.d/nginx reload`

**Slow responses on large tables**

1. Use date filtering: `?start_date=2025-01-01&end_date=2025-01-31`
2. Reduce page size: `?per_page=20`
3. Use specific filters: `?machine_id=42&event_id=5`
4. Verify MySQL indexes: `SHOW INDEX FROM cf_log;`

**FastCGI buffer warnings in nginx error log**

Increase buffer sizes in the API location block:

```nginx
fastcgi_buffer_size 128k;
fastcgi_buffers 16 128k;
fastcgi_busy_buffers_size 256k;
```

## Security considerations

- **Remove any dev API keys** before deploying to production. Search for `TODO: REMOVE` in `lib/ApiAuth.php` to locate all lines that need to be removed.
- **HTTPS only** — The API is served over HTTPS via the existing EPP SSL configuration. Never expose it over plain HTTP.
- **API key rotation** — Regularly rotate API keys by creating new keys and deactivating old ones.
- **Network access** — Consider restricting API access by source IP using nginx `allow`/`deny` directives:

```nginx
location ^~ /api/logs/ {
    allow 10.0.0.0/8;
    allow 192.168.0.0/16;
    deny all;
    # ... rest of config
}
```

- **Logging** — To enable access logging for the API, add an `access_log` directive:

```nginx
location ^~ /api/logs/ {
    access_log /var/log/nginx/api_access.log;
    # ... rest of config
}
```

- **Read-only** — The API supports only GET requests. No data modification is possible through the API.
