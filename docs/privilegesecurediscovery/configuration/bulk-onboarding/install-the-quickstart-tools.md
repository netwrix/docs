---
title: "Install the Quickstart tools"
description: "Download the Quickstart tools, install Python 3.10 or later and the dependencies, and configure the tool to connect to Privilege Secure for Discovery."
sidebar_position: 20
---

:::warning[Needs dev input: remove before publishing]
TODO: Explain how an administrator finds the user ID to enter as userId. Evidence: none; the API key screen and reports.py (config block) both ask for it without describing where to find it.

TODO: Confirm that the tool runs on an Ubuntu node of the deployment, and that the OS keyring is available there. Evidence: none; reports.py uses the keyring package to store the API key.
:::

The Quickstart tool is a Python script that generates reports and pushes changes to Netwrix Privilege Secure for Discovery. This page covers installing the tool and connecting it to the product.

## Prerequisites

- Python 3.10 or later, with `pip`. The tool exits with an error on earlier versions.
- A computer that can reach the Privilege Secure for Discovery API.
- An administrator account in Privilege Secure for Discovery and an API key for it.

## Download the tools

1. Download the Quickstart tools archive from the Netwrix releases server. Replace `<major.minor>` and `<version>` with the release you run, for example `26.09` and `26.09.1`.

   ```text
   https://releases.netwrix.com/products/privilegesecure-discovery/<major.minor>/`privilegesecure-discovery-quickstart-tools-<version>.zip`
   ```

2. Extract the archive. It contains `reports.py`, `requirements.txt`, and a usage guide.

## Install Python

1. Download Python 3.10 or later from [python.org](https://www.python.org/downloads/).
2. Start the installer. On Windows, verify on the **Customize Python** page that **pip** will be installed on the local hard drive, and select the option to add Python to the `PATH` environment variable.

   ![The Customize Python page of the Python installer with pip selected](/images/privilegesecure/4.2/discovery/admin/configuration/360044200374_image.webp)

## Install the dependencies

1. Open a command prompt in the folder where you extracted the archive.
2. Install the required modules:

   ```bash
   pip install -r requirements.txt
   ```

If the command returns a `NewConnectionError` with an `[Errno 100XX]` code, a firewall or proxy is blocking `python.exe` from reaching the internet.

If your network uses a proxy that inspects TLS traffic and `pip` fails certificate verification, you can add trusted hosts. Use this option only in that case, because it turns off certificate verification for those hosts:

```bash
pip install --trusted-host pypi.org --trusted-host files.pythonhosted.org -r requirements.txt
```

## Create an API key

Create an API key in the UI. For the procedure, see [API key management](../../integrations/api/api-key-management.md). The first time you run the tool, it prompts for the API key. By default, the tool saves the key in the operating system keyring. To avoid saving it, run the tool with `--no-save-api`. To remove a saved key, run it with `--rm-api-key`.

:::warning
Store the API key securely. You can't view the key again after you close the dialog box. If you didn't save it, revoke the key in the UI and create a new one.
:::

## Configure the tool

Edit the `config` block near the top of `reports.py`:

```python
config = {
    'baseUrl': 'https://<server-fqdn>/api/v1',
    'userId': '<admin-user-id>',
    'provisionUser': '<account-name>'
}
```

| Field | Description |
| --- | --- |
| `baseUrl` | URL of the Privilege Secure for Discovery API. The default is `https://localhost/api/v1`, which works only when you run the tool on the same host. |
| `userId` | ID of the Privilege Secure for Discovery administrator user that the API key belongs to. |
| `provisionUser` | Optional. An account name to look for in the report. The **Computer Data** sheet gets a column with this name that shows `TRUE` for systems that have a matching administrator account. |

### Use a config.json file

You can move the configuration to a `config.json` file in the same folder as `reports.py`. When the file exists, the tool uses it instead of the `config` block. The file stays in place when you replace the tool files with a newer release.

```json
{
  "baseUrl": "https://<server-fqdn>/api/v1",
  "userId": "<admin-user-id>",
  "provisionUser": "<account-name>"
}
```

The `config.json` file requires double quotes around all keys and string values.

## Verify the installation

Run the tool with the help option:

```bash
python reports.py --help
```

The output lists the available arguments. To generate your first report and make changes, see [Report and update systems](./report-and-update-systems.md).
