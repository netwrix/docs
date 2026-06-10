---
title: "Using the AI Assistant"
description: "Learn how to ask questions, manage conversations, and navigate the AI Chat interface."
sidebar_position: 20
---

# Using the AI Assistant

This topic explains how to interact with the AI Chat assistant, manage your conversation history,
and use the available keyboard shortcuts and interface controls.

## Ask a Question

**Step 1 --** Open AI Chat by clicking **Ask AI** in the header bar or pressing **Ctrl+K** /
**Cmd+K**.

**Step 2 --** Enter your question in the text field at the bottom of the chat panel. The placeholder
text reads "Ask or describe what to do...". The text field automatically resizes as you type.

**Step 3 --** Click the **Send message** button or press **Enter** to submit your question.

{/* TODO: Screenshot of the composer area with a typed question */}

## Streaming Responses

After you send a question, the assistant streams its response token by token. While the assistant
generates the response:

- A progress indicator displays a status such as "Analyzing..." or "Checking {tool name}...".
- A **Stop generation** button appears in place of the send button. Click it to cancel the
  response.

When the response is complete, a summary line appears showing how many data sources the assistant
consulted, for example "Queried 3 data sources".

## Follow-Up Suggestions

After each response, the assistant displays 2-3 clickable suggestion chips with related follow-up
questions. Click a suggestion to send it as your next question.

## Manage Conversations

AI Chat automatically saves your conversations. You can return to previous conversations and
manage them from the conversations list.

### Open the Conversations List

Click the **Conversations** button (hamburger menu icon) in the chat panel header. The
**Conversations** sidebar opens, displaying your saved conversations.

If you have no saved conversations, the sidebar displays "No conversations yet".

### Start a New Conversation

Click the **New conversation** button at the top of the conversations sidebar, or in the chat
panel header. A new, empty chat opens.

### Switch Between Conversations

Click a conversation in the conversations list to open it. AI Chat saves your current conversation
automatically.

### Rename a Conversation

Click the **Rename** button (edit icon) next to a conversation in the list. The title becomes
editable. Enter a new name and press **Enter** to save.

:::note
AI Chat automatically generates a title of 3-7 words after your first exchange in a new
conversation. You can rename it at any time.
:::

### Delete a Conversation

Click the **Delete** button (trash icon) next to a conversation in the list. This permanently
deletes the conversation.

## Maximized Mode

To expand the chat panel to full screen, click the **Maximize** button in the chat panel header.
In maximized mode:

- The chat panel expands to fill the screen (98vw x 96vh).
- The conversations sidebar appears persistently on the left side.

Click the **Restore** button to return to the standard panel view.

## Resize the Chat Panel

You can drag the left edge of the chat panel to resize it. The panel width ranges from 320px to
1200px, with a default width of 480px.

:::tip
The drag handle tooltip reads "Drag to resize · Click to close". You can click the drag handle
to close the panel entirely.
:::

## Keyboard Shortcuts

| Shortcut | Action |
| --- | --- |
| **Ctrl+K** / **Cmd+K** | Toggle the chat panel open or closed |
| **Escape** | Close the chat panel, or restore from maximized mode |

## Response Formatting

The assistant renders responses in Markdown format. Code blocks include:

- A language label indicating the programming language.
- A **Copy** button to copy the code to your clipboard.

## Error Messages

If an error occurs, the assistant displays one of the following messages:

| Error | Message |
| --- | --- |
| Rate limit | "You've reached the usage limit. wait a moment before sending another message." |
| Timeout | "The request took too long. Check your connection and try again." |
| Generic error | "Something went wrong. try again." A **Try again** button appears. |
| Stopped | The "Response stopped" message appears with a dashed separator. |
