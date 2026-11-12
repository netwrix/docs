---
title: "AWS Bedrock"
description: "Connect an AWS account to AI Security with a read-only IAM access key to read Bedrock AgentCore runtimes, classic agents, and agent runs."
sidebar_position: 42
---

# AWS Bedrock

Connect AWS Bedrock so AI Security can read the AI agents of one Amazon Web Services (AWS) account. You create an access key for a read-only Identity and Access Management (IAM) identity in AWS and enter it in 1Secure.

AWS has put classic Bedrock Agents into maintenance mode and refuses new ones, so every new AWS agent is built on Amazon Bedrock AgentCore. This connector reads AgentCore first. It uses only the access key you enter and never falls back to any other AWS credential.

## Before you start

* Have an IAM administrator in the account create the user and its key.
* Sign in to the AWS Management Console and open **IAM**.
* Have a password manager open. AWS shows the secret access key once.

## Create the access key in AWS

1. In **IAM > Users**, click **Create user**.
2. Enter a name, for example "netwrix-1secure-ai-security", and give the user no console access.
3. Select **Attach policies directly**, and attach **AmazonBedrockReadOnly** and **IAMReadOnlyAccess**.
4. Create the user.
5. In **CloudTrail > Lake > Event data stores**, create a store, or pick one, that collects data events for the resource types `AWS::Bedrock::AgentAlias` and `AWS::BedrockAgentCore::Runtime`. {/* TODO: confirm the resource type names against the current AWS console. */}
6. Copy the store's Amazon Resource Name (ARN).
7. On the user, add an inline policy that allows these actions. **AmazonBedrockReadOnly** doesn't cover AgentCore.
   * `bedrock-agentcore:ListAgentRuntimes`, `bedrock-agentcore:GetAgentRuntime`, `bedrock-agentcore:ListGateways`, `bedrock-agentcore:ListGatewayTargets`, and `bedrock-agentcore:ListMemories` on all resources.
   * `cloudtrail:StartQuery` and `cloudtrail:GetQueryResults` on that store's ARN.
   * `cloudtrail:LookupEvents` on all resources.
8. Open the user's **Security credentials** tab, and click **Create access key**.
9. Choose the use case for an application running outside AWS.
10. Copy the "Access key ID" and the "Secret access key".
11. Copy the 12-digit account ID from the account menu at the top right.

:::warning
AWS charges for the data events that the event data store ingests and for the data each query scans. AI Security runs one query per scan.
:::

## Connect the source

:::info
The AWS Bedrock row shows "Coming soon" and has no **Connect** button. These steps apply when the button is available.
:::

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "AWS Bedrock".
3. In the AWS Bedrock row, click **Connect**. The **Connect AWS Bedrock** dialog opens.
4. In **Access key ID**, paste the access key ID.
5. In **Secret access key**, paste the secret access key.
6. For temporary credentials only, in **Session token**, paste the session token.
7. To ask fewer regions, in **Regions**, enter the region codes separated by commas, such as `us-east-1,eu-west-1`. Leave it empty to use the fifteen default regions.
8. In **AgentCore region codes**, enter the regions where AWS offers AgentCore, separated by commas, such as `us-east-1,us-west-2`. AWS lists them on its [Supported AWS Regions](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/agentcore-regions.html) page for AgentCore. This setting makes the agent count account-wide. If you leave it empty, the scan still reads, and the AgentCore count stays unverified.
9. In **Event data store ARN**, paste the event data store ARN, in the form `arn:aws:cloudtrail:<region>:<account>:eventdatastore/<id>`. The query goes to the region that the ARN names, whatever **Regions** says. Without it, agent runs are unmeasured.
10. Click **Connect**. The dialog shows "Saved. Testing the connection." and then the result of the test.
11. Click **Done**.

There is no account ID field. AI Security reads the account ID from the access key when the test passes, and it names this source.

Select the AWS Bedrock row to see the source.

| Line | What it shows |
|------|---------------|
| Credential | "Readable". |
| Last test | "Succeeded" after you give the AgentCore region list, and "Warning" until then. The credential works either way. |
| Last scanned | "Never", then "Succeeded", or "Partly scanned" when the page limit cut a listing. Until you give the AgentCore region list, the scan lists the AgentCore regions as skipped. Without an event data store, the scan lists the agent runs as skipped. |

Until you give the AgentCore region list, the test adds: "List the regions that offer AgentCore, or add more regions, in the source's settings." Each scan lists "Agents in any AgentCore region this scan didn't ask." among the skipped items. Until you fix this, don't read any agent count from this account as account-wide. An unconfirmed region list isn't a permissions problem.

Without an event data store, every scan lists "Which Bedrock agents were run, because no CloudTrail Lake event data store is set." among the skipped items. CloudTrail doesn't log agent runs by default, so runs are unmeasured. An agent with no runs in this scan isn't an agent that nobody ran.

The test asks every region, so with fifteen regions it can run past its time limit. If it answers "The platform didn't answer in time.", enter only the regions you use.

## What this connector reads

* AgentCore runtimes in each AgentCore region you list: the role each runs as, its network mode, its protocol, and the names of its environment variables. AWS states no model, guardrail, or knowledge base on a runtime, so those are unknown for runtimes. The exception is a model named by an environment variable whose name ends in `MODEL`, `MODEL_ID`, or `MODEL_ARN`.
* AgentCore gateways and the targets behind each one, which are the tools the gateway offers. AI Security shows a gateway as a tool server of the runtime whose environment names it, and reports it on its own when no runtime names it.
* AgentCore memories, matched to the runtime that manages them.
* Classic Bedrock agents: model, the role each runs as, its guardrail, memory, aliases, action groups, and a length, a digest, and the first sentence of its instructions.
* The knowledge bases and data sources that agents use, and where those read from: S3, SharePoint, Confluence, Salesforce, or the web.
* Whether each region logs model invocations.
* IAM users and roles, and which of them are allowed or denied to invoke models, from their own policies.
* When each role was last used.
* Who created each classic agent and AgentCore runtime, from the creation calls that the CloudTrail lookup still holds, which covers the last 90 days:
  * A call made in a session named by an email address, or by an IAM user named by one, names the person with that address in your directory.
  * Any other call that an IAM user made names that user, and any other call made in an assumed role session names the role it assumed.
  * A call that the account root made names no creator.
  * An older agent names no creator unless it carries a `CreatedBy` tag.
* One record per agent run from the CloudTrail Lake event data store you name, for the last 90 days on the first scan. If there are more runs than one scan reads, the scan lists "Activity after [moment], which the next scans read." among the skipped items, and the next scan reads on from there.

With no region named, AI Security asks these fifteen regions: `ap-northeast-1`, `ap-northeast-2`, `ap-south-1`, `ap-southeast-1`, `ap-southeast-2`, `ca-central-1`, `eu-central-1`, `eu-central-2`, `eu-west-1`, `eu-west-2`, `eu-west-3`, `sa-east-1`, `us-east-1`, `us-east-2`, and `us-west-2`. AI Security asks the opt-in region `us-gov-west-1` only when you name it, and it doesn't mark a commercial account incomplete for leaving it out.

### What the connector never touches

* It sends only read operations and refuses any other. Several reads are posts on the wire and change nothing.
* It keeps instructions as a length, a digest, and their first sentence, never the rest of the text. It keeps AgentCore environment variables as names and lengths, never values, except the value of a variable that names the runtime's model. It keeps a secret's address, never the secret.
* From CloudTrail, it keeps who, when, which agent, and which session. It doesn't read request or response content. It doesn't read a trail's S3 bucket.
* It doesn't compute effective permissions. It evaluates no service control policies, permission boundaries, or resource policies.

## Permissions

| AWS policy or action | What AI Security reads with it | Scan without it |
|----------------------|--------------------------------|-----------------|
| `bedrock-agentcore:ListAgentRuntimes`, `GetAgentRuntime`, `ListGateways`, `ListGatewayTargets`, and `ListMemories` | AgentCore runtimes, gateways, the tools behind each gateway, and memories. | The region's AgentCore agents are unknown, not absent. Without `ListGatewayTargets`, a gateway's tools are unknown. |
| `AmazonBedrockReadOnly` managed policy | Classic agents, knowledge bases, data sources, and logging settings. | The region's classic agents are unknown, and the test fails if no region answers. |
| `IAMReadOnlyAccess` managed policy, or `iam:GetAccountAuthorizationDetails` | Who may invoke models, and the IAM users and roles that a creator is named as. | AI Security still reads agents. Who may invoke is unknown, and it doesn't name a creator that is an IAM user or role. |
| `cloudtrail:StartQuery` and `cloudtrail:GetQueryResults` on the event data store | Agent runs: who ran which agent, when, in which session. | Runs are unmeasured, not absent, and the scan says so. |
| `cloudtrail:LookupEvents` | Who created each agent, and who changed each classic agent and what changed, over the last 90 days: its model, its draft, a published version, an associated knowledge base, and an added or changed action group. | The scan reports a refused lookup once per region. The agents there name no creator and no one who changed them. AI Security still reads the agents. |

## If the test fails

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "No credential is stored for this source." or "The credential is missing settings this platform needs." | The access key ID or the secret isn't stored. | Click **Edit**, and enter both. |
| "The stored credential can't be used. Enter it again." | AI Security can't use the stored credential. | Click **Edit**, and enter both again. |
| "The platform refused the credential. It is wrong, expired or revoked." or "The credential works, but access was denied. A permission is missing.", with "Check that the access key ID and secret access key are correct and active." | The key is wrong, inactive, or expired, a session token is missing for temporary credentials, or the clock is off. This is never a missing permission. | Check that the key is active under **Security credentials**, and enter it again. |
| "The credential works, but access was denied. A permission is missing.", with "Attach the AmazonBedrockReadOnly policy to the scanner's IAM identity." | No region answered the Bedrock read. | Attach **AmazonBedrockReadOnly**, as step 3 of "Create the access key in AWS" describes. |
| "The credential works, but AWS Bedrock refused part of what the scan reads. Grant the permissions listed below, then test again." | The key works and the scan couldn't read something: either the AgentCore region list is missing, or a region or AgentCore refused a read. | Read the message. An AgentCore refusal asks for the `bedrock-agentcore` actions in step 7 of "Create the access key in AWS". Any other refusal asks for **AmazonBedrockReadOnly**. |
| "A setting is invalid. Addresses must start with https:// on the platform's domain." | A region in **Regions** isn't an AWS region code. | Use lowercase codes such as `eu-west-1`, separated by commas. |
| "The platform didn't answer, or said it is down or busy." | AWS didn't answer. | Check that AI Security can reach sts.amazonaws.com and the regional Bedrock hosts. |
| "The platform slowed down the test. Wait a few minutes and test again." | AWS rate limited the test, so **Last test** shows "Warning". This isn't a missing permission. | Wait a few minutes, then click **Test again**. |
| "The platform didn't answer in time." | Not every region answered in time. | Click **Test again**, or narrow **Regions**. |
| "A live connection test isn't available for this platform. All required settings are entered." | AI Security has no live test for this platform. | Run a scan to prove the key. |
| "The test failed on our side. Try again." | The test couldn't finish. | Try again. If it keeps failing, contact Netwrix support. |

### If the scan skips something or warns

A scan that reads to the end lists what it couldn't read as skipped items, and its source reads "Succeeded". A read that stopped short, such as a list cut at the page limit, reads "Partly scanned".

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "Succeeded", with "Which Bedrock agents were run, because no CloudTrail Lake event data store is set." among the skipped items | You named no event data store, so AI Security can't read any agent run. | Create the store and grant the two query actions, as steps 5 to 7 of "Create the access key in AWS" describe, and enter its ARN in **Event data store ARN**. |
| "Succeeded", with a skipped item that starts "Which Bedrock agents were run, because" and names the CloudTrail Lake query or AWS limiting it | You named the store and AWS refused the query, or the query failed, timed out, or was rate limited. Runs are unknown this scan, not absent. If AWS rate limited the query, the source reads "Partly scanned" instead. | For a refusal, grant `cloudtrail:StartQuery` and `cloudtrail:GetQueryResults` on the store, and check that the ARN names a store that exists and is enabled. For a throttle, scan again. |
| "Succeeded", with "Who created the Bedrock agents in [region]." among the skipped items | AWS refused the lookup in that region, so who created the agents there is unknown this scan. | Grant `cloudtrail:LookupEvents`, as step 7 of "Create the access key in AWS" describes, then scan again. |
| "Succeeded", with "Who changed the Bedrock agents in [region]: their model, versions, knowledge bases and action groups." among the skipped items | AWS refused the lookup in that region, so who changed the agents there is unknown this scan. | Grant `cloudtrail:LookupEvents`, as step 7 of "Create the access key in AWS" describes, then scan again. |
| "Succeeded", with "A Bedrock or AgentCore list in [region], because AWS answered in an unreadable shape." among the skipped items | A listing in one region answered in a form that AI Security can't read, so what it holds there is unknown this run, not empty. | Scan again. If it recurs, send the operation and region that the detail names to Netwrix support. |

## Security notes

* AI Security stores the key encrypted when you click **Connect** and never shows it again. The source shows only whether a credential is set and which settings are missing.
* Requests go only to hosts under amazonaws.com. AI Security refuses a region value that would send them elsewhere.
* Revoke access by deactivating the access key, deleting it, or detaching the policies. **Disconnect** on the source removes the key from 1Secure.
