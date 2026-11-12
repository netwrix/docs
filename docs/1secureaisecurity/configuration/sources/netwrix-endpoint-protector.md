---
title: "Netwrix Endpoint Protector"
description: "Connect a Netwrix Endpoint Protector server to AI Security with a REST API client to see which AI tools people sent data to, and from which devices."
sidebar_position: 48
---

# Netwrix Endpoint Protector

Connect Netwrix Endpoint Protector so AI Security can read the content aware protection log for the AI tools people sent data to, and the computers and users the server knows, which are the devices and people the scan names that use from. Netwrix Support issues a REST API client for your server, and you enter it in AI Security.

Each AI tool is one Shadow AI row, and each log row about it is one activity record. Endpoint Protector sees the AI tools people use and the data they send to them, and never an agent.

## Before you start

* You need an Endpoint Protector server, with Endpoint Protector client 2511 or later on the computers. The Beta covers a server hosted by Netwrix. A server reachable only inside your network can't be connected yet.
* For the AI tool use to show, the server needs all of the following:
  * A Content Aware Protection license, with the module on.
  * Deep Packet Inspection on.
  * At least one Content Aware Protection policy, set to Report only or Block and Report, whose exit points include the web browsers and the AI/LLMs application group.
* The REST API is a controlled Preview. It is off until Netwrix Support turns it on for your server. Console administrator accounts, the read-only administrator role included, don't work with it.

## Connect Netwrix Endpoint Protector

### Get the API client from Netwrix Support

1. Open a case with Netwrix Support asking for REST API Preview access for your Endpoint Protector server.
2. In the case, give the following details:
   * The server's version.
   * The consuming system (Netwrix 1Secure AI Security).
   * The endpoint groups needed (computers, logs, and users).
   * The expected volume and how often AI Security reads it.
   * That the API must allow the 1Secure AI Security addresses.
   * Whether the use is a test, a pilot, or production.
3. Ask whether Support can issue a client limited to reading. Where it can't, the client holds a secret that can also make changes.
4. Wait for Netwrix Support to turn on the API and issue a client ID and a client secret. Keep the secret in a password manager.

:::warning
The API has no read-only role and no scopes, so the client secret can also create, change, and delete users, computers, devices, and groups on the server. Keep it in a password manager.
:::

### Add the source in AI Security

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "Netwrix Endpoint Protector".
3. In the Netwrix Endpoint Protector row, click **Connect**. The **Connect Netwrix Endpoint Protector** dialog opens.
4. In **Server address**, enter the server's address, such as `https://example.hosted.endpointprotector.com`, without `/api`.
5. In **Client ID**, paste the client ID.
6. In **Client secret**, paste the client secret.
7. Click **Connect**. The dialog saves the source, shows "Saved. Testing the connection.", and then shows the test's answer.
8. Click **Done**.

The test reads one computer. It doesn't read the log, so a client that may read the computers and not the logs passes the test, and its first scan lists the log as skipped.

Select the Netwrix Endpoint Protector row to see the source.

| Line | What it shows |
|------|---------------|
| Credential | "Readable". |
| Last test | "Succeeded". |
| Last scanned | "Never", then a result. "Succeeded", with the log listed as skipped and the sentence asking Netwrix Support to let the client read the logs, where the server refused the log read. Or "Partly scanned" when a listing was cut short. |

After the scan, **Shadow AI** shows one row per AI tool people sent data to, with its machines and people, when it was first and last seen, and whether data was sent, blocked, or justified. A server with no AI rows in its log shows none.

## What this connector reads

With the REST API client:

* Every computer with the Endpoint Protector client: its name, domain, operating system and its version, client version, and when the server last saw it.
* Every user the server knows: user name, domain, email, security identifier (SID), and when the server last saw it.
* The content aware protection log, oldest first. The first scan reads the last 30 days, or the Activity window the organization chose under **Settings**. After that, each scan starts where the last scan stopped and goes back no more than 14 days, or the Activity window if that's longer. If a scan reaches its limit, it stops at the newest row it read, and the next scan continues from there. From each row, AI Security keeps the row's ID and time, the computer, the user, the file name and hash, the event, the destination, the policy and item type by name, and whether the person gave a justification.
* A computer's or user's last seen time, kept as the server writes it. It carries no time zone, so AI Security adds none. A log row's time is exact.

### Which log rows are AI use

AI Security keeps a row where its destination is an AI tool:

* A browser or cloud row whose host, or the page it was sent from, is a domain of a known AI vendor.
* A row the server files under the destination type `AI / LLM's`.

Every other row is someone sending data somewhere that isn't AI, and AI Security doesn't read it further. A row of traffic the client let through without inspecting it, the event `DPI Bypassed Traffic`, says nothing of data sent. AI Security leaves it out whatever its host.

### What each AI tool becomes

Each tool becomes one Shadow AI row, with:

* The machines and the people it was used from, named from the computers and users AI Security read.
* When it was first and last seen in the log.
* The facts the rows show: sensitive data sent, blocked by data loss prevention (DLP), and justified by the user.
* How many rows ended blocked, reported, or justified, and the item types and policies matched.

The host names the vendor. A row under `AI / LLM's` names a product only where its destination states the product's name. AI Security never reads a file name as a product. Every `AI / LLM's` row that names no product goes on one row, "AI tool, not named by Endpoint Protector", marked as needing a look.

### What each log row becomes

Each log row becomes one activity record on its tool's row, with:

* The person who sent it, and the computer.
* Whether a file or text was sent, and the file name and hash where it was a file.
* The destination, and the item type and policy matched, by name.
* The outcome. A justification given is "justified". An event the server names as a block is "blocked". `Content Threat Detected`, the event a Report only policy logs, is "reported". Any other event states no outcome. AI Security keeps the event's own name as written.

### The log needs the server set up for it

The log holds rows only where the server has the Content Aware Protection license, Deep Packet Inspection on, and a policy that reports, as [Before you start](#before-you-start) lists. Without them, the log read answers with no AI rows, and the scan succeeds with none. AI Security can't tell that apart from no AI use.

### What the connector doesn't see

* **No agents.** Endpoint Protector sees AI tools and the people using them. It can't list Claude Code sessions, an agent's permissions, or what an agent connects to. Agents come from the runtime sources, such as Kubernetes, and from the platforms that host them.
* **Only AI use a policy matched.** Endpoint Protector writes a content aware protection log row only when a policy matched. Use of an AI tool that sent nothing a policy matches leaves no row, and a policy set to Block only blocks without writing one.
* **Not every AI tool by name.** Endpoint Protector logs desktop AI clients under the destination type `AI / LLM's` without the product's name, so they land on the row for an AI tool Endpoint Protector didn't name. A browser visit to an AI site names its host.
* **Not what was sent.** The record says a file or text went to the tool and which item type and policy matched. It never holds the matched value or the content.

### What the connector never touches

* AI Security never writes to the server. The API has no read-only role and no scopes, so the client Netwrix Support issues can also create, change, and delete users, computers, devices, and groups. AI Security never does any of that.
* AI Security doesn't keep a computer's IP and MAC addresses, serial number, owner, or logged-in user. It doesn't keep a user's first and last name, phone, employee ID, or team.
* From a content aware protection row, AI Security never keeps the matched value, such as a card number, or the item details. It also never keeps the words of a justification, only whether someone gave one.
* AI Security doesn't read Device Control, eDiscovery, EasyLock, System for Cross-domain Identity Management (SCIM), system, or administrator logs.

## Permissions

The API has no scopes. Netwrix Support sets what the client may read, by endpoint group.

| Endpoint group | What AI Security reads with it | Scan without it |
|----------------|--------------------------------|-----------------|
| Computers, required | The computers, and the test's first read. | Nothing is read, and the test fails with "The credential works, but access was denied. A permission is missing." |
| Content aware protection logs, required for AI tool use | The AI tools people sent data to, and the activity records. | AI Security reads the computers and users, and no Shadow AI row comes from this server. The scan lists the log as skipped and asks Netwrix Support to let the client read the logs. |
| Users, optional, for extra data on people | Each person's domain, email, and SID, joined to the user name a log row gives. | AI Security still reads the computers and the log. It names each person as the log names them, without email or SID, and the scan lists the users as skipped. |

## If the test fails

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "No credential is stored for this source." or "The credential is missing settings this platform needs." | The server address, the client ID, or the secret is missing. | Click **Edit**, and enter all three. |
| "The stored credential can't be used. Enter it again." | The stored credential can't be used. | Click **Edit**, and enter it again. |
| "The platform refused the credential. It is wrong, expired or revoked." | The server refused the client ID and secret, or refused the token it issued. The test says: "Check the server address, client ID and client secret in the source's settings." | Check the three values against the ones Netwrix Support issued. |
| "The credential works, but access was denied. A permission is missing." | The server accepted the token and refused the computer read. Under **Technical details**, the test says: "Ask Netwrix Support to turn on the REST API Preview for this server and allow the scanner's addresses." | Ask Netwrix Support to check that the Preview is on and that the 1Secure AI Security addresses are allowed. |
| "The platform didn't answer, or said it is down or busy." | The server didn't answer, or answered that the API isn't there. | Check that the address is the server's host without `/api`. |
| "A setting is invalid. Addresses must start with https:// on the platform's domain." | The address isn't https, or names a private or internal host. | Enter the server's public https address. |
| "The platform didn't answer in time." | The server didn't answer in time. | Click **Test again**. |
| "The platform slowed down the test. Wait a few minutes and test again." | The server slowed the test down. The test shows "Warning". This isn't a missing permission. | Wait a few minutes, and click **Test again**. |
| "A live connection test isn't available for this platform. All required settings are entered." | AI Security has no live test for this platform. | Run a scan to check the credential. |
| "The test failed on our side. Try again." | The test couldn't finish. | Test again. If it repeats, contact Netwrix Support. |

## If the source says what to grant

The scan reports these under the source's last scan. A scan that read to the end lists what it couldn't read as skipped, and its source reads "Succeeded". Only a read that stopped short, reads "Partly scanned".

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "Succeeded", with "The AI tools people sent data to, from this server's content aware protection log." skipped, and the line asking Netwrix Support to let the client read the logs | The server accepted the token and refused the content aware protection log read. AI Security read the computers and users, and no Shadow AI row or activity comes from this server until it can read the log. The scan says: "Ask Netwrix Support to let the API client read the logs on this server." | Ask Netwrix Support to add the logs to what the client may read. |
| "Not scanned: Anything from this Endpoint Protector server, because it did not accept the API client." | The server refused the client ID and secret when the scan asked for a token. Nothing is read. The "To fix:" line says: "Check the server address, client ID and client secret in the source's settings." | Check the three values against the ones Netwrix Support issued, then test again. |
| "Succeeded", with "The users on this Endpoint Protector server, so the people who used AI tools are named without their email address." skipped | The server refused the user read, or didn't answer it. AI Security still reads the computers and the log. The line says what to do: "Scan again, and ask Netwrix Support to let the API client read the users on this server if it happens again." | Scan again. If it repeats, ask Netwrix Support to add the users to what the client may read. |
| "Succeeded", with "Activity after [moment], which the next scans read." skipped | The log read stopped at the newest row it could read. The scan keeps the rows it read, and the next scan reads on from that moment. | Nothing to do. |
| "Partly scanned", and a "Not scanned:" line naming the listing | A computer or user listing, or the log read, stopped short. The scan keeps the rows it read. | Set **Run scans** to **Every day** under **Settings > Scan schedule**, so each scan reads a shorter span. |
| "Succeeded", with "Some computers, users or AI tool uses on this Endpoint Protector server, which the server listed incompletely." skipped | A computer, user, or log row came back without its ID, or a log row without its time, and AI Security left it out. The line says what to do: "Scan again, and if it happens again, send the support details to Netwrix Support." | Nothing to grant. Scan again, and tell Netwrix Support if it repeats. |

## Security notes

* AI Security stores the credential encrypted when you click **Connect** and never shows the secret again. A read of the source shows the server address and the client ID, never the secret.
* A test or a scan decrypts the credential for that run only.
* AI Security sends the secret only to the server's token endpoint, and the token only to the server's own host.
* The secret can also make changes on the server. AI Security only reads, and nothing it sends changes the server.
* To revoke, ask Netwrix Support to withdraw the client. **Disconnect** on the source removes it from AI Security.
