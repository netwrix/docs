---
title: "Content Aware Protection for AI interactions"
description: "Content Aware Protection for AI interactions"
sidebar_position: 60
---

# Content Aware Protection for AI interactions

**Introduction**

As artificial intelligence tools become increasingly integrated into everyday business processes, Netwrix Endpoint Protector (EPP), a leader in Data Loss Prevention (DLP) technology, has addressed the need for enhanced visibility and control. With the introduction of EPP Client version 2511, users now have access to a feature that extends Data Loss Prevention to Large Language Models (LLMs).

**Key Features**

This new functionality enables businesses to maintain precise control over information exchanges with popular AI chat applications. By incorporating Data Loss Prevention for LLMs, EPP enhances security by:

-   Granting administrators the ability to manage who can interact with AI prompts through web applications.
-   Offering tools to oversee the management of sensitive content, whether it is typed directly or attached as a file.

**Benefits**

By implementing these controls, organizations can protect sensitive information during interactions with AI applications, thereby reducing the risk of data leaks and maintaining compliance with internal and external data security policies.

## AI Interaction Visibility and Control in Netwrix Endpoint Protector: Data Loss Prevention for LLMs

Endpoint Protector extends Data Loss Prevention to the most widely used AI technologies — including ChatGPT, Microsoft Copilot, Google Gemini, DeepSeek, X Grok, Claude, Meta AI, and Perplexity — ensuring secure and compliant use across your organization. Coverage includes the embedded Microsoft Copilot add-in in Windows 11, New Outlook, New Teams, and Edge. Endpoint Protector also provides visibility and control over ChatGPT and Copilot native clients.

## Configure Netwrix EPP to Monitor AI Prompt Transactions

To monitor or control AI prompts with EPP, you need to meet the following prerequisites:

-   use latest EPP Server version
-   use latest EPP Client version
-   CAP license with the Content Aware Protection (CAP) module enabled
-   DPI (Deep Packet Inspection) module enabled

If you meet all of the preceding requirements, most of the setup is already complete. This is because any existing web browser monitor/control policy will automatically apply to user interactions with supported AI chat applications, enforcing your policy definitions when violations occur.

## Use Case Example

### I. Simple CAP Policy Triggering on Credit Card Detection

To configure a CAP policy for this purpose:

1.  Define the CAP "Policy Name," "Policy Action," and "Thresholds" according to your requirements.

![Define base CAP policy settings](capai_usecase01_01.webp)

2.  Define CAP application exit points by selecting the web browsers you want to monitor or control. ensure the relevant browsers are checked so the policy applies when users interact with AI chat applications through these browsers.

![Define CAP application exit points](capai_usecase01_02.webp)

3.  Define CAP Policy Denylists for this use case by selecting the necessary credit card patterns. Ensure that the appropriate patterns are checked so that the policy will detect and block any attempts to submit credit card information through AI chat applications.

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

    -   **Responsiveness Check** – Verified that each AI model was actively responding, ensuring the interaction was genuine and not a simulated or dummy web transaction triggered by the URL.​
    -   **Data Leakage Simulation** – Credit card (CC) patterns were submitted to each AI platform to request validation. Sample data was generated using an AI engine. The CAP policy was configured to automatically block any transaction containing CC data.
    -   **Cross-Engine Validation** – Repeated the same procedure across all mentioned AI engines to confirm consistent behavior and validate DLP enforcement.​
    -   **Conclusion** – The demonstration confirms that **Netwrix EPP DLP integrates seamlessly with AI tools such as Copilot, ChatGPT, Google Gemini, DeepSeek, and X Grok** to **prevent data leakage, enforce compliance, and ensure secure information handling at the endpoint level**, while maintaining a positive user experience.

### II. Contextual CAP Policy Triggering on PII patterns in combination for Copilot web & apps

To configure a CAP policy for this purpose:

1.  Define the CAP "Policy Name," "Policy Action," and "Thresholds" according to your requirements.

![Define base CAP policy settings](capai_usecase01_01.webp)

2.  Define CAP application exit points by selecting the web browsers you want to monitor or control. ensure the relevant browsers are checked so the policy applies when users interact with AI chat applications through these browsers.

:::tip
For Copilot plugins in New Outlook, Teams, or Windows 11 25H2, also verify the in-app definitions for Outlook and Teams when configuring policies.
:::

![Define CAP application exit points](capai_usecase01_02.webp)

3.  Define Policy Denylists for this use case by selecting the necessary credit card patterns. Ensure that the appropriate patterns are checked so that the policy will detect and block any attempts to submit credit card information through AI chat applications.

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

The test begins with verifying **Copilot’s functionality** to ensure proper operation.

    • **Initial HR Scenario** – An HR use case is simulated, where employment contract templates without sensitive data are enhanced using Copilot to improve formatting and presentation quality.

    • **Data Leakage Prevention Test** – A realistic dataset containing sensitive HR information from a CRM system is introduced. When this data is processed through Copilot, the Netwrix DLP solution detects the presence of personal data and automatically blocks the transaction, preventing unauthorized disclosure.

    • **Microsoft Teams Scenario** – The same test is conducted using Copilot integrated with Microsoft Teams. The DLP system again identifies sensitive information and stops the operation, confirming consistent protection within collaboration environments.

    • **Outlook Scenario** – The procedure is repeated in Microsoft’s new Outlook with Copilot Agent. Despite the platform change, the DLP system maintains the same behavior, successfully blocking data transmission.

    • **Conclusion** – The demonstration confirms that **Netwrix EPP DLP** integrates seamlessly with AI tools such as Copilot to **prevent data leakage**, **enforce compliance**, and **ensure secure information handling** across Microsoft 365 applications.
