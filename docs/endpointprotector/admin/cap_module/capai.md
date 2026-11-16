---
title: "Content Aware Protection for AI interactions"
description: "Endpoint Protector DLP for AI: data loss prevention for AI chatbots and LLMs. Inspect prompts and attachments at the endpoint, and support AI governance with content-aware policies."
sidebar_position: 60
---

# Content Aware Protection for AI interactions

**Introduction**

As organizations increasingly integrate artificial intelligence tools into everyday business processes, sensitive data now flows through AI chat applications and Large Language Models (LLMs) as routinely as it does through email or cloud storage. Starting with EPP Client release 2511, Netwrix Endpoint Protector (EPP) extends its Data Loss Prevention (DLP) coverage to these AI interactions, giving administrators the same content-aware and context-aware visibility and control they already have over traditional data channels.

**Key Features**

This functionality gives administrators precise control over information exchanges with AI chat applications, web-based AI tools, and native AI desktop clients. Endpoint Protector DLP for AI:

-   Enforces policy on the endpoint itself, where the user types the prompt or attaches the file, so one policy covers web applications, browser extensions, native desktop clients, and embedded assistants such as Microsoft Copilot.
-   Lets administrators control which users and endpoints can interact with AI prompts.
-   Inspects both ways sensitive data can enter a prompt: plain text a user types directly into the prompt, and the content of any file the user attaches to it.
-   Applies the same content-aware and context-aware detection engine that already covers email, cloud storage, and removable media, so there's no separate AI-specific policy engine to learn or maintain.

**Benefits**

These controls extend an organization's existing DLP posture to AI interactions and give security teams a way to govern generative AI and shadow AI use at the endpoint. They reduce the risk of sensitive data leaving through AI chat platforms and help meet internal data security policies and external regulatory requirements such as GDPR, HIPAA, and PCI DSS.

## Supported AI applications and LLMs

Endpoint Protector extends data loss prevention for AI to the most widely used AI chat applications and large language models (LLMs) and supports AI governance and the secure, compliant use of AI across your organization:

-   **AI chat web applications** — ChatGPT, Microsoft Copilot, Google Gemini, DeepSeek, X AI Grok, Claude, Meta AI, Perplexity, Cursor, Comet, Atlassian Rovo, and TimelyGPT.
-   **Embedded Microsoft Copilot integrations** — Windows 11, New Outlook, New Teams, and Edge.
-   **Native desktop clients** — ChatGPT, Claude (including Claude Code and Claude Cowork), Comet, Cursor, and Copilot.
-   **AI-powered IDEs** — Cursor.

:::note
Claude app processes text extraction from attachments locally. This local processing isn't part of EPP inspection. EPP triggers detection only when Claude Code sends this data to Claude's servers.
:::

## Configure Netwrix EPP to Monitor AI Prompt Transactions

To monitor or control AI prompts with EPP, you need to meet the following prerequisites:

-   use latest EPP Server version
-   use latest EPP Client version
-   Content Aware Protection (CAP) license with the CAP module enabled
-   Deep Packet Inspection (DPI) module enabled

If you meet these requirements, most of the setup is already complete, because any existing web browser monitor/control policy automatically applies to user interactions with supported AI chat applications and enforces your policy definitions when violations occur.

## Use Case Example

### Example 1: Simple CAP Policy Triggering on Credit Card Detection

To configure a CAP policy for this purpose:

1.  Define the CAP "Policy Name," "Policy Action," and "Thresholds" according to your requirements.

![Define base CAP policy settings](capai_usecase01_01.webp)

2.  Define CAP application exit points by selecting the web browsers you want to monitor or control. Ensure you check the relevant browsers so the policy applies when users interact with AI chat applications through these browsers.

![Define CAP application exit points](capai_usecase01_02.webp)

    Explanation:
    - Check the desired web browsers in the **Web Browsers** group to cover visibility for AI/LLM prompts in web applications — for example, when a user accesses Copilot at `https://copilot.microsoft.com/` in a web browser.
    - Check both Outlook options in the **E-mail** group to cover the Copilot app extension in New Outlook.
    - Check **Microsoft Teams** in the **Cloud Services/File Sharing** group to cover Microsoft Teams Copilot extensions.
    - Check the desired native client apps in the **AI/LLMs** group to cover transactions in native AI client applications.
    

3.  Define CAP Policy Denylists for this use case by selecting the necessary credit card patterns. Ensure you check the appropriate patterns so the policy detects and blocks any attempts to submit credit card information through AI chat applications.

![Define CAP Policy Denylists](capai_usecase01_03.webp)

4.  Save the policy and assign it to your selected endpoints.
5.  Endpoint Protector enforces the policy on the devices where you want to monitor or control AI prompt transactions.

**Watch the following video to see this example:**

<video controls width="100%">
  <source src="/videos/endpointprotector/capaiusecase1.mp4" type="video/mp4" />
  Your browser doesn't support the video tag.
</video>

**Description of video**:
The test covers several AI platforms: Copilot, ChatGPT, Google Gemini, DeepSeek, and X Grok.

    -   **Responsiveness Check** – The test verified that each AI model was actively responding, ensuring the interaction was genuine rather than a simulated or dummy web transaction triggered by the URL.
    -   **Data Leakage Simulation** – The test submitted credit card (CC) patterns to each AI platform for validation. An AI engine generated the sample data. The CAP policy automatically blocks any transaction containing CC data.
    -   **Cross-Engine Validation** – The test repeated the same procedure across all mentioned AI engines to confirm consistent behavior and validate DLP enforcement.​
    -   **Conclusion** – The demonstration confirms that Netwrix Endpoint Protector DLP for AI detects and blocks sensitive data submitted to AI tools such as Copilot, ChatGPT, Google Gemini, DeepSeek, and X Grok, at the endpoint level.

### Example 2: Contextual CAP Policy Triggering on PII patterns in combination for Copilot web & apps

To configure a CAP policy for this purpose:

1.  Define the CAP "Policy Name," "Policy Action," and "Thresholds" according to your requirements.

![Define base CAP policy settings](capai_usecase01_01.webp)

2.  Define CAP application exit points by selecting the web browsers you want to monitor or control. Ensure you check the relevant browsers so the policy applies when users interact with AI chat applications through these browsers.

![Define CAP application exit points](capai_usecase01_02.webp)

    Explanation:
    - Check the desired web browsers in the **Web Browsers** group to cover visibility for AI/LLM prompts in web applications — for example, when a user accesses Copilot at `https://copilot.microsoft.com/` in a web browser.
    - Check both Outlook options in the **E-mail** group to cover the Copilot app extension in New Outlook.
    - Check **Microsoft Teams** in the **Cloud Services/File Sharing** group to cover Microsoft Teams Copilot extensions.
    - Check the desired native client apps in the **AI/LLMs** group to cover transactions in native AI client applications.

:::tip
For Copilot plugins in New Outlook, Teams, or Windows 11 25H2 and later, also verify the in-app definitions for Outlook and Teams when configuring policies.
:::



3.  Define Policy Denylists for this use case by selecting the necessary credit card patterns. Ensure you check the appropriate patterns so the policy detects and blocks any attempts to submit credit card information through AI chat applications.

![Define CAP Policy Denylists](capai_usecase02_01.webp)

:::tip
You can use contextual rules to create complex pattern definitions for more accurate and flexible policy enforcement.
:::
![Define CAP Policy contextual parameters](capai_usecase02_02.webp)

4.  Save the policy and assign it to your selected endpoints.
5.  Endpoint Protector enforces the policy on the devices where you want to monitor or control AI prompt transactions.

**Watch the following video to see this example:**

<video controls width="100%">
  <source src="/videos/endpointprotector/capaiusecase2.mp4" type="video/mp4" />
  Your browser doesn't support the video tag.
</video>

**Description of video:**

The test begins by verifying that **Copilot** works correctly.

    -   **Initial HR Scenario** – The test simulates an HR use case in which Copilot enhances employment contract templates without sensitive data to improve formatting and presentation quality.

    -   **Data Leakage Prevention Test** – The test introduces a realistic dataset containing sensitive HR information from a CRM system. When Copilot processes this data, Endpoint Protector detects personal data and automatically blocks the transaction.

    -   **Microsoft Teams Scenario** – The test runs the same scenario using Copilot integrated with Microsoft Teams. Endpoint Protector again identifies sensitive information and stops the operation.

    -   **Outlook Scenario** – The test repeats the procedure in Microsoft’s new Outlook with Copilot Agent. Despite the platform change, Endpoint Protector behaves the same way.

    -   **Conclusion** – The demonstration confirms that Netwrix Endpoint Protector DLP for AI detects and blocks sensitive data submitted to Copilot across Microsoft 365 applications.

### Example 3: CAP Policy Triggering on German PII in Claude Usage

This example blocks German personally identifiable information (PII) that a user sends to Claude, whether the user works in the Claude web application, in the Claude app, or in Claude Code.

To configure a CAP policy for this purpose:

1.  Define the CAP "Policy Name," "Policy Action," and "Thresholds" according to your requirements. For example, enter `Claude - German PII` as the name. To block German PII in Claude, select one of the blocking actions as the **Policy Action**:
    - **Block & Report**—blocks the transfer and reports it in the logs. This is the default.
    - **Block only**—blocks the transfer without reporting it.
    - **Block and Remediate**—blocks the transfer, but the user can continue after entering a justification.

    For the full description of the actions, see [Policy Information](/docs/endpointprotector/admin/cap_module/cappolicies.md#policy-information).

2.  Define the CAP application exit points to cover every way a user can reach Claude:
    - Check the web browsers you want in the **Web Browsers** group to cover Claude in a web browser, for example when a user accesses Claude at `https://claude.ai/`. Check every browser that your users use, because the policy applies only to the browsers you select.
    - Check **Claude App** and **Claude Code CLI** in the **AI/LLMs** group to cover the Claude native desktop application and Claude Code.

:::note
When a user attaches a file in the Claude app, the app extracts the text from the file on the computer. EPP doesn't inspect this local step. EPP detects the data only when it is sent to Claude's servers. See the note in [Supported AI applications and LLMs](#supported-ai-applications-and-llms).
:::

3.  In **Policy Denylists**, open the **Predefined Content** tab. In the country-specific PII categories, such as **Address**, **Driving License**, **ID**, **Passport**, **Phone Number**, **SSN**, and **Vat ID**, check **Germany**. The policy then detects German PII in prompts and in attached files.

:::tip
To reduce false positives, use contextual rules to combine several German PII patterns in one rule, as in Example 2.
:::

4.  Save the policy and assign it to your selected endpoints.
5.  Endpoint Protector enforces the policy on the devices where you want to monitor or control Claude usage.

**Expected result**

- A prompt or an attached file that contains German PII, sent to Claude from a selected browser, the Claude app, or Claude Code, is blocked. With **Block & Report** and **Block only**, nothing reaches Claude. With **Block and Remediate**, the user can send the data after entering a justification.
- The user sees a notification, because **Client Notifications** is on by default.
- With **Block & Report** and **Block and Remediate**, the event appears in the Content Aware Protection logs and reports, with the policy name, the matched item, and the severity of the policy. **Block only** doesn't report the event.
- A prompt without German PII goes through as usual.
- Claude in a browser that you didn't select isn't covered. Select every browser that your users use.
