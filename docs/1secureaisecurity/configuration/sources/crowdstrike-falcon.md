---
title: "CrowdStrike Falcon"
description: "Connect CrowdStrike Falcon to AI Security with an API client to find AI tools installed on Falcon hosts and the people who use them."
sidebar_position: 44
---

# CrowdStrike Falcon

Connect CrowdStrike Falcon so AI Security can read the hosts Falcon protects and the applications Falcon Discover finds installed on them. The connector finds where AI tools such as Claude Code, Codex, and Cursor are installed, on which hosts, and who last signed in there. It matches that to the people, identities, and agents AI Security already holds. You create a Falcon API client of your own in the Falcon console and enter it in 1Secure.

It gives the same evidence as [Microsoft Defender for Endpoint](/docs/1secureaisecurity/configuration/sources/microsoft-defender-for-endpoint.md), for estates that run Falcon instead. The agents themselves come from the runtime sources, such as Kubernetes, and from the platforms that host them.

## Before you start

* Have a Falcon administrator create the API client.
* Sign in to the Falcon console of your cloud.
* Know which cloud your tenant is in. The API base URL differs by cloud, such as `https://api.crowdstrike.com`, `https://api.us-2.crowdstrike.com`, or `https://api.eu-1.crowdstrike.com`.
* Have a password manager open. Falcon shows the secret once.

## Create the API client in CrowdStrike Falcon

1. Select **Support and resources > Resources and tools > API clients and keys**.
2. Click **Add new API client**.
3. Enter a name, for example "1Secure AI Security".
4. Grant Read on **Hosts**, **Falcon Discover**, and **Zero Trust Assessment**, and Read and Write on **NGSIEM**.
5. Grant no other Write scope, unless you turn on the account read. The account read needs three real time response scopes, described in [Read which account each AI tool signed in with](#read-which-account-each-ai-tool-signed-in-with).
6. Click **Add**. The console shows the client ID, the secret, and the base URL.
7. Copy the base URL, the client ID, and the secret. The secret appears once.

## Connect the source

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "CrowdStrike Falcon".
3. In the CrowdStrike Falcon row, click **Connect**. The **Connect CrowdStrike Falcon** dialog opens.
4. In **API base URL**, enter the base URL the console showed.
5. In **Client ID**, paste the client ID.
6. In **Secret**, paste the secret.
7. Click **Connect**. The dialog shows "Saved. Testing the connection." and then the result of the test.
8. Click **Done**.
9. Run a scan.

The base URL must be a public https address under `crowdstrike.com` or `crowdstrike.mil`, for example `https://api.crowdstrike.com`. AI Security refuses a plain http address, a private or reserved address, a single-label name, and a name in an internal zone such as `.local` or `.internal`.

Select the CrowdStrike Falcon row to see the source.

| Line | What it shows |
|------|---------------|
| Last test | "Succeeded" when the API client can read the hosts and search the events, or a warning that names the NGSIEM scope when it can read the hosts and Falcon refuses the search. |
| Last scanned | "Succeeded", with anything the scan couldn't read listed as skipped. This includes a tenant without Falcon Discover or a client without the Zero Trust Assessment scope, where the line says what to license or grant. "Partly scanned" when a listing was cut at the page limit. |

After the scan:

* **Shadow AI** shows one row per AI product found installed or seen running, with its machines and people, and one per AI service reached with no known tool. The Overview counts them as AI products in use, apart from the agents. A tenant where no host carries one, or where the scan couldn't read Falcon Discover or Next-Gen SIEM, shows none.
* **Agents** shows only a tool that runs as an agentic runtime, as [Agent or AI product](#agent-or-ai-product) describes.

## What this connector reads

* The hosts Falcon holds: host name, operating system, product type, domain, sensor version, status, when each was last seen, and the account that last signed in to it, by name and security identifier (SID).
* The applications Falcon Discover lists, asked for by the names of a list of AI tools, such as Claude desktop, Claude Code, ChatGPT desktop, Codex, Cursor, GitHub Copilot, Ollama, and LM Studio. It is the same list that Defender for Endpoint is matched against, with the vendor names Falcon uses. AI Security doesn't read an application that isn't on the list.
* For each host a listed tool is on, its Zero Trust Assessment score, if the API client may read it.
* From Next-Gen SIEM, two searches:
  * The process starts of the listed tools' program files, such as claude.exe, codex, and Cursor.exe.
  * The Domain Name System (DNS) requests for a short list of AI API hosts, such as api.anthropic.com, api.openai.com, and generativelanguage.googleapis.com.

  Next-Gen SIEM keeps seven days of events unless the tenant bought longer. **Detection events window** under **Scan settings** on the source sets how far back the scan reads, from 1 to 90 days, for this source and Tanium. A shorter window reads fewer events.
* For each run and each request, the program's full path, its whole command line, and its SHA-256 hash. A command line can carry what someone entered on it, such as a token among the arguments. AI Security keeps it on the activity record, shortened if it is long, and never logs it.
* Tools that run as node or python, such as Gemini CLI and OpenClaw, and native Claude Code on Linux and macOS, are found by a piece of their command line or program folder.
* On Linux, the account by user name and user ID, because Linux states no SID. For a process that started inside a container, the container's name, image, labels, and the user its configuration runs as. That user is the person on the activity record. A container that started before the window has no description, so its record keeps the host's account and says so.

Falcon Discover lists what an installer registers with the operating system. A tool run as a single downloaded binary, installed as a global npm package, or run from a source checkout may have no entry. This source can therefore say a tool is installed and never that a tool is absent. If an earlier scan listed a tool on a host and a later scan no longer lists it there, **Seen on** in the **Shadow AI** drawer shows that host as "Removed" with the date of that scan. The installer's entry is gone, which isn't proof that the tool is.

Falcon states one account per host, the last one to sign in, rather than every account that uses it. A shared host names one person.

:::note
AI Security reads AI API use from DNS requests on Windows hosts. For a Linux host, it reads AI API use from process starts only.
:::

### On a large estate

The DNS search reads every process start on the tenant in the window, so it grows with the tenant's activity, not with how much AI is in use. On a very large estate a search may return only part of the events. The scan keeps what it read, lists the part it didn't read as skipped, and the next scan reads it again. A shorter **Detection events window** reads less and reduces the chance of that.

### What the scan produces

* One Shadow AI row per AI product for the tenant, never one per host and never an agent. Claude Code on a thousand hosts is one row that reads a thousand machines and the people who use them. The row states the hosts it is on, the people, when the product was first and last seen used, the endpoint products that saw it, and the AI API hosts its machines asked for.
  * The scan matches a person to the directory person whose SID is the one Falcon states.
  * If Falcon states no SID, the scan matches the person to the directory person whose on-premises account name, or whose user principal name before the at sign, is the account name Falcon states, on exactly one match.
  * The scan never matches a local account to a directory person by name. A local account is an account whose SID no directory person holds (other than a Microsoft Entra identifier), or whose domain is the host's own name, a dot, or `WORKGROUP`.
  * A person the scan doesn't match stays named by the account, or by the SID if Falcon states no name. That person waits in the **Shadow AI** queue with **Confirm** and **Dismiss**, beside the directory's applications.
  * If the product's vendor organization is connected (Anthropic, OpenAI, or GitHub), the scan places its members under it by membership, not by key, and a row whose people are all members leaves the queue.
* If Defender for Endpoint also reports the product, the two rows are one, kept on Defender's side and naming both products as what saw it. A decision recorded on the row in the **Shadow AI** queue stays with it.
  * On a host where Falcon saw a person start the product, the row's people there are the accounts that started it, in place of everyone Defender saw signed in to it.
  * If Falcon saw only machine accounts start it, such as SYSTEM or the host's own account, the starts name nobody there. The host keeps Defender's sign-ins as its people, and the scan still records the headless run on the row.
* Each person on the row says how the scan knows them. "Started" means an account Falcon or Defender saw start the product, or run the program that asked for its AI API, on a host. "Signed in" means the scan knows them only from a host's sign-ins, which says the person uses the host, not that they ran the product. A person who did both is "Started".
* If another source already holds the same tool for one of the same people, the scan folds the Falcon row into that agent. The agent keeps its own owners, grants, and reach, and gains the hosts and people as evidence.
* A host with no listed tool on it writes no row. The scan reads and counts it, and nothing more.
* One activity record per host, person, and tool that ran, and one per host and AI API host it asked for, each with how many times and the first and last time in the window. The scan keeps each on the row the tool already is: Falcon's own row for the tool, else Defender for Endpoint's, else, if neither found it installed, a row for the tool made from the process starts. The next scan updates the same record with its new count.
* AI API hosts that machines asked for, with no tool seen on them that calls them, become one Shadow AI row per AI service, such as "OpenAI API", with every machine that asked. The scan raises the finding "AI service reached from a machine with no known AI tool for it", medium, on the machines where no endpoint source found a tool that calls the service installed or seen starting.
  * The row's people are the accounts whose programs asked, such as a person running curl, matched to the directory as described earlier and each listed once. The row names the program and doesn't call it AI. A machine account isn't a person. If no request named the account, the row counts nobody rather than no one.
  * The issue names each machine once, by its host name without the domain a sensor adds, and says the other AI tools seen there, such as "Other AI tools seen on those machines: Claude Code, Cursor, none of which calls OpenAI."
  * If more machines asked for the service than the issue names, it says its machines are some of those, such as "5 of the 7 machines that asked for api.anthropic.com have no known AI tool for it", so it agrees with the count the Shadow AI row and the alert give.
  * The issue's fix never asks you to connect a service that is connected. If exactly one AI tool was seen on a machine that asked, the fix names it as the likely program, such as "OpenClaw on" the machine, and says to approve it on the **Shadow AI** page if it is approved.
  * If no program is named and the service's vendor is connected, the fix says there is nothing to connect and that the program isn't known. It adds that an endpoint sensor recording which process made each request would name it. It then says to remove the program, after you find it, if the organization doesn't approve it, and to block the service in the web filter if needed.
  * Defender for Endpoint and Tanium raise the same issue the same way.

### Agent or AI product

An endpoint row is an agent only if the tool runs as an agentic runtime. That means a container, a pod, or a sandbox, a headless or service account run, a Model Context Protocol (MCP) configuration naming tools, or a long-running process with no signed-in user.

Everything else a person runs interactively is an AI product. Examples are Claude Code, Codex, Cursor, Ollama, or a browser calling an AI API. Falcon itself sees one of the agent cases: a tool whose starts named only machine accounts, never a person, which stays an agent. The sources for containers, pods, sandboxes, and MCP read the other cases, and the fold described under [What the scan produces](#what-the-scan-produces) joins Falcon's evidence to them.

### How sure

Each AI product row says how sure the endpoint products are that it is AI, in three tiers:

* **Certain**: the scan saw a cataloged program installed or started.
* **AI service used**: a program asked for an AI API name, and every program that asked is named and is a known browser or a cataloged tool.
* **Needs a look**: a program nobody knows, or no named program, asked for an AI API name.

A "needs a look" row is in the **Shadow AI** queue with **Confirm** and **Dismiss** like any other, and a **Dismiss** teaches the tenant's catalog. The scan doesn't ask again about each program that asked. The exception is a shell, a script host, or a command line client such as powershell.exe or curl.exe, which runs whatever it is told and so is never taught. If the row names such a program, or no program, the scan doesn't ask again about its domains. The tenant's **Configuration** lists what a **Dismiss** taught, with an undo. Undoing the last thing a **Dismiss** taught also restores that dismissal, so the next scan puts the row back in the queue.

The DNS search names the program file that asked, such as chrome.exe or curl.exe, and the AI service row lists those programs. A request whose event names no program reads as "needs a look". The scan leaves out a request that the Defender for Endpoint or Falcon sensor made itself, such as MsSense.exe checking a name, because it isn't use of AI. The sensor isn't listed as a program, and a machine whose only requests came from it isn't on the row.

### What the connector never touches

* It changes nothing on the tenant, except that it creates search jobs. If you turn on the account read, it also keeps scripts in the custom script library and runs them in a real time response batch.
* It never contains a host and never reads a detection, an incident, or a policy. It never opens a real time response session unless you turn on the account read.
* It copies no file off any host, and reads no file on one unless you turn on the account read. In that case, the script reads each tool's sign-in record on the host and prints only a domain and an organization identifier.
* From process events, it asks only for the starts of the listed program files, folders, and command line pieces, and for the account of a process that asked for a listed API host. From DNS events, it asks only for the listed API hosts. From container events, it asks only for each container's name, image, labels, and configured user.
* It asks Falcon Discover only for applications named like a listed tool, and keeps nothing about an application that isn't one.

## Permissions

| Scope, as the Falcon console names it | What AI Security reads with it | Scan without it |
|---------------------------------------|--------------------------------|-----------------|
| Hosts: Read | The hosts. | AI Security reads nothing, and the test fails and names this scope. |
| Falcon Discover: Read | The applications on each host. | AI Security reads the hosts and finds no tool. The scan succeeds and the source says what to license and grant. |
| Zero Trust Assessment: Read | Each host's score. | AI Security reads each tool with its hosts and no scores. The scan succeeds and the source says what to grant. |
| NGSIEM (Read and Write) | The process and DNS events of AI tools. Write is what creating a search job takes, and AI Security writes nothing else. | AI Security reads the hosts and installed tools without the events. The scan succeeds and the source names the scope to grant. |

**Next-Gen SIEM comes with Falcon Insight.** The events are the sensor's own, kept by Next-Gen SIEM, so the searches work without Falcon Discover. A tenant without Next-Gen SIEM, or a client without the NGSIEM scope, is told so as a skipped item. The scan then reports the events as not read, never as none.

**Falcon Discover is licensed separately.** The applications inventory is part of Falcon Discover, sold with Falcon Exposure Management. A tenant without it answers the application read with "access denied, scope not permitted", even if you granted the API client the scope. The scan then reads the hosts alone, finds no tool, and says what to do. It is a skipped item, never a failure. The source's scan still succeeds.

## Read which account each AI tool signed in with

The CrowdStrike Falcon source has an option, **Collect the account each AI tool signed in with**, that is off until an administrator turns it on. With it on, each scan reads which account Claude Code and Codex signed in with on the hosts where it found either installed or started. The product row then says how many hosts signed in to your organization's own vendor organization, to another organization, with a personal account, or with nothing the read could tell.

**What the option reads and what it never reads.** On each host, a script reads, for every profile, the sign-in record of Claude Code (`.claude.json`) and of Codex (`.codex/auth.json`). It returns one line per tool and profile with two values: the email domain of the signed-in Claude Code or Codex account, the part after the at sign, and the organization ID of that account. It never returns the part before the at sign, the address, a name, a profile name, a path, a token, a key, or the file. The file never leaves the host. AI Security keeps no domain. Per host, it keeps the organization identifier and whether the domain was a consumer mail domain such as gmail.com. It counts them and drops both after it has made the counts.

:::warning
Running a script is a real time response administrator command, so the option needs Real time response (admin): Write. Falcon doesn't limit that scope to a host group, so the API client could run an administrator command on any host in the tenant.
:::

**The admin scope is tenant-wide.** The option limits itself instead. It targets only the hosts where it found Claude Code or Codex, never the whole estate, and runs only the account script. Revoke the scope when you turn the option off.

**How it reads.** AI Security adds two scripts to your custom script library itself, the first time a scan needs them, and updates them after: `netwrix-ai-account.ps1` for Windows and `netwrix-ai-account.sh` for Mac and Linux. There is nothing to download or upload. Only real time response administrators can run them. The scan opens one batch session over the hosts where it found a listed tool, and runs each script once over the hosts of its platform. It doesn't read an offline host, and nothing runs on one after the scan. It waits a short time for a host whose command hasn't finished before it stops waiting. Every session and command is in Falcon's real time response audit, under the API client's name. The scan doesn't read or count a host that was offline, refused, or didn't finish, and the source says how many.

**The outcomes.** Each host read is counted under each outcome its profiles showed:

| Outcome | When |
|---------|------|
| Signed in to your organization | The tool's organization ID is the Anthropic organization your Anthropic source connected. AI Security compares only Claude Code, because the OpenAI source reads a platform organization, which isn't the ChatGPT workspace Codex records. |
| Personal account | The domain is a consumer mail domain. |
| Another organization | The tool names an organization, and the one your vendor source connected isn't it. |
| Unknown | Anything else: no sign-in, an API key or cloud provider run, or no connected organization to compare with. |

**The statement you confirm.** Turning either switch on opens a statement of what the option reads and never reads or keeps. The statement also says that each read is a real time response script that Falcon records in its real time response audit, and that telling the people who use the hosts is your organization's responsibility. Nothing turns on until you confirm it. The source shows who confirmed it and when. Turning a switch off asks nothing. **Per device detail** is a second switch under the first. With it on, the row also lists each host read and its outcome, never a domain.

### Turn on the account read

1. In the Falcon console, select **Support and resources > Resources and tools > API clients and keys**, and add the three real time response scopes in the table that follows these steps to the API client.
2. In each platform's response policy, under **Host setup and management > Response policies**, turn on **Real time response** and **Custom scripts** for the host groups to read.
3. In AI Security, select the CrowdStrike Falcon row on **Sources**, and turn on **Collect the account each AI tool signed in with**.
4. Read the statement, and click **Confirm**.
5. To also list each host read and its outcome, turn on **Per device detail**.

| Scope, as the API client page names it | Why |
|----------------------------------------|-----|
| Real time response: Read | Reads the commands' results. |
| Real time response: Write | Opens the batch session. |
| Real time response (admin): Write | Keeps the scripts in the custom script library and runs them. It is tenant-wide, as described earlier. |

With the option on, the test also checks the scopes that the Falcon token states, and runs nothing on a host. It fails with "The credential works, but access was denied. A permission is missing.", naming each of the three scopes still missing and the response policy settings. AI Security can't read the response policy with these scopes, so a scan says when it didn't read a host.

## If the test fails

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "No credential is stored for this source." or "The credential is missing settings this platform needs." | The base URL, the client ID, or the secret isn't stored. | Click **Edit**, and enter all three. |
| "The stored credential can't be used. Enter it again." | AI Security can't use the stored credential. | Click **Edit**, and enter them again. |
| "The platform refused the credential. It is wrong, expired or revoked." | Falcon refused the client ID and secret. Under **Technical details**, the test says: "Check the client ID, client secret and base URL in the source's settings." | Check them, and check that the base URL is your cloud's, then click **Edit** to enter them again. |
| "The credential works, but access was denied. A permission is missing." | Falcon accepted the API client and refused the host read. Or, with the account read on, the token lacks Real time response: Read, Real time response: Write, or Real time response (admin): Write, and the message names which. | Grant it Hosts: Read, and the real time response scopes the account read needs. |
| "A setting is invalid. Addresses must start with https:// on the platform's domain." | The base URL isn't https, isn't on crowdstrike.com or crowdstrike.mil, or its name resolves to a private address. | Enter the API base URL of your cloud as the console shows it. |
| "The platform didn't answer, or said it is down or busy." | Falcon didn't answer at that base URL. | Check that the base URL is the API address of your cloud, then test again later. |
| "The platform slowed down the test. Wait a few minutes and test again." | Falcon rate limited the test, so **Last test** shows "Warning". This isn't a missing scope. | Wait a few minutes, then click **Test again**. |
| "A live connection test isn't available for this platform. All required settings are entered." | AI Security has no live test for this platform. | Run a scan to prove the credential. |
| "The test failed on our side. Try again." | The test couldn't finish. | Try again. If it keeps failing, contact Netwrix Support. |

If Falcon refuses the client ID and secret during a scan, the scan reads nothing and shows "Not scanned: Anything from this Falcon tenant, because Falcon refused the API client." and "To fix: Check the client ID, client secret and base URL in the source's settings."

## If the source says what to license or grant

A scan that reads to the end lists what it couldn't read as skipped items, and its source reads "Succeeded". A read that stopped short, such as a list cut at the page limit, reads "Partly scanned". Each skipped item is one line: what the scan didn't read, then what to do.

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "Succeeded", with "The applications installed on each Falcon host." among the skipped items | Falcon refused the applications read. The scan says: "Turn on Falcon Discover and grant the Falcon API client the Falcon Discover: Read scope." | License Falcon Discover, and grant the scope as step 4 of [Create the API client in CrowdStrike Falcon](#create-the-api-client-in-crowdstrike-falcon) describes. |
| "Succeeded", with "The applications installed on each Falcon host, because Falcon Discover did not answer." among the skipped items | Falcon Discover didn't answer, failed, or slowed the scan down. If Falcon slowed it down, the source reads "Partly scanned" instead. The scan removes nothing the last scan found. | Wait for the next scan, which reads it again. |
| "Succeeded", with a skipped item that names the Next-Gen SIEM scope | Falcon refused the event search. The scan says: "Grant the Falcon API client the Next-Gen SIEM: Read and Write scope, which Falcon Insight carries; Write only lets 1Secure start a search, and nothing in Falcon is changed. Until then the hosts and installed tools are read without the process and DNS events of AI tools". | Grant the scope as step 4 of [Create the API client in CrowdStrike Falcon](#create-the-api-client-in-crowdstrike-falcon) describes. |
| "Succeeded", with "The process and DNS events of AI tools on each Falcon host, because Falcon's search did not answer." among the skipped items | Next-Gen SIEM didn't answer the search, or didn't finish it. | Scan again. |
| "Succeeded", with "Some AI tool events in the time slice [slice], because Falcon's search reached the most one search returns." among the skipped items. If several slices reached the limit, the message says "Some AI tool events in the time slice, because Falcon's search reached the most one search returns." and the details name the slices. | A search still reached Next-Gen SIEM's limit in a short slice of the window. | Nothing to grant. The scan reads the rest of the window whole, and the next scan reads that slice again. |
| "Succeeded", with a skipped item that names the Zero Trust Assessment scope | Falcon refused the Zero Trust Assessment read. The scan says: "Grant the Falcon API client the Zero Trust Assessment: Read scope to show each host's score; until then each host is read without it". | Grant the scope as step 4 of [Create the API client in CrowdStrike Falcon](#create-the-api-client-in-crowdstrike-falcon) describes. |
| "Partly scanned", and "Not scanned: The rest of a long list, because the scanner reached the most it reads in one scan." | A listing stopped at the page limit, and the scan keeps the rows it read. | Set **Run scans** to **Every day** under **Settings > Scan schedule**, so each scan reads a shorter span. |
| "Succeeded", with a skipped item that names the real time response scopes | Falcon refused the script library or the batch. The scan says: "Grant the Falcon API client the Real time response: Read, Real time response: Write and Real time response (admin): Write scopes to read which account each AI tool signed in with; until then no account is read". | Grant the three scopes as [Turn on the account read](#turn-on-the-account-read) describes. |
| "Succeeded", with "The account each AI tool signed in with on some hosts, because Falcon slowed the scanner down." among the skipped items | Falcon throttled the account read, which stopped there, and the scan read the rest. | Nothing to grant. The next scan asks again. |
| "Succeeded", with "The account each AI tool signed in with on some hosts where Falcon found it." among the skipped items | The scan didn't read some hosts: they were offline, their response policy refused, they didn't finish in time, or they were past the most one run holds. The scan doesn't count them. | Turn on **Real time response** and **Custom scripts** in each platform's response policy for those hosts. The scan reads an offline host when a scan finds it online. |

## Security notes

* AI Security stores the three values encrypted when you click **Connect** and never shows them again.
* AI Security sends the secret only to the token endpoint of the cloud the base URL names, and the token only to that same host. The base URL must be a crowdstrike.com or crowdstrike.mil address over https.
* To revoke access, delete the API client, or reset its secret, under **API clients and keys**. To stop the account read alone, turn its switch off and remove the three real time response scopes.
