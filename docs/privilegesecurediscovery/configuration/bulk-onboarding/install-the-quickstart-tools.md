---
title: "Install the Quickstart tools"
description: "Download the Quickstart tools, install Python and the dependencies, create an API key, and configure the tool to connect to Privilege Secure for Discovery."
sidebar_position: 20
---

The Quickstart tool is a Python script, `reports.py`, that exports reports from Netwrix Privilege Secure for Discovery and pushes changes back. This page covers installing the tool and connecting it to the product.

## Prerequisites

- A Windows or Linux workstation with Python 3.10 or later and `pip`. The tool exits with an error on earlier versions.
- A desktop session on that workstation. The tool stores the API key in the operating system keyring, such as Windows Credential Manager. On a server without a keyring, for example a headless Ubuntu Server, the tool stops with a `NoKeyringError`.
- Network access from the workstation to the Privilege Secure for Discovery server over HTTPS.
- An administrator in Privilege Secure for Discovery, and an API key linked to that administrator.

## Download the tools

1. Download the Quickstart tools archive. Replace `<major.minor>` and `<version>` with the release that you run, for example `26.09` and `26.09.1`.

   ```text
   https://releases.netwrix.com/products/privilegesecure-discovery/<major.minor>/privilegesecure-discovery-quickstart-tools-<version>.zip
   ```

2. Extract the archive. The `quickstart` folder contains `reports.py`, `requirements.txt`, a `README.md` file, and an HTML usage guide.

## Install Python

1. Download Python 3.10 or later from [python.org](https://www.python.org/downloads/).
2. Run the installer. On Windows, select the option to add Python to the `PATH` environment variable, and ensure the installer includes `pip`.

## Install the dependencies

The tool needs the `keyring`, `XlsxWriter`, `requests`, and `pyexcel-xlsx` packages. The `requirements.txt` file lists them.

1. Open a command prompt in the `quickstart` folder.
2. On Linux, create and activate a virtual environment. Recent Ubuntu releases refuse to install packages into the system Python.

   ```bash
   python3 -m venv .venv
   source .venv/bin/activate
   ```

3. Install the packages:

   ```bash
   pip install -r requirements.txt
   ```

If the command returns a `NewConnectionError` with an `[Errno 100XX]` code, a firewall or proxy blocks Python from reaching the internet.

If your network uses a proxy that inspects TLS traffic and `pip` fails certificate verification, you can add trusted hosts. This option turns off certificate verification for those hosts, so use it only in that case:

```bash
pip install --trusted-host pypi.org --trusted-host files.pythonhosted.org -r requirements.txt
```

## Create an API key

1. Select **Configure** > **API Keys**, and then select **Create API Key**.
2. Enter an **App Name**.
3. Set **Permissions** to **All API's**. A key with the **Registration** permission can't run the tool. The tool fails with the response `Scope not allowed by token`.
4. In **Linked Users**, search for an administrator and select the user.
5. Select **Save**.
6. Copy the **API Key Secret** to a secret manager.

:::warning
You can't view the API key secret again after you close the dialog box. If you didn't save it, revoke the key and create a new one.
:::

The first time you run the tool, it prompts for the API key and saves it in the operating system keyring. Run the tool with `--no-save-api` to avoid saving the key. Run it with `--rm-api-key` to remove a saved key. For more information about keys, see [Create and manage API keys](../../integrations/api/api-key-management.md).

### Find the user ID

The tool needs the ID of the linked user. On the **Configure** > **API Keys** page, the **Linked Users** column shows the ID of each linked user. Hover over the ID to see the user name. Select the ID to copy it.

## Configure the tool

The tool reads its settings from a `config.json` file in the same folder as `reports.py`. Create the file with the following content:

```json
{
  "baseUrl": "https://<server-fqdn>/api/v1",
  "userId": "<admin-user-id>",
  "provisionUser": "<account-name>"
}
```

| Field | Description |
| --- | --- |
| `baseUrl` | URL of the Privilege Secure for Discovery API. |
| `userId` | ID of the administrator that the API key links to. |
| `provisionUser` | An account name to look for in the report. The **Computer Data** sheet gets a column with this name that shows `TRUE` for systems that have a matching administrator account. |

All three fields are required, and the file needs double quotes around every key and string value. The tool ignores the built-in defaults when `config.json` exists. The `config.json` file stays in place when you replace the tool files with a newer release.

If you don't create the file, the tool uses the `config` block near the top of `reports.py`. Its defaults are `https://localhost/api/v1`, which works only on the server itself, and a placeholder user ID. Edit the block if you prefer not to use a file.

## Verify the installation

Run the tool with the help option:

```bash
python reports.py --help
```

The output lists the available arguments. To export your first report and make changes, see [Report and update systems](./report-and-update-systems.md).
