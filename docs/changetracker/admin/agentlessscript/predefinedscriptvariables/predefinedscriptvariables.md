---
title: "Predefined Script Variables"
description: "Predefined Script Variables"
sidebar_position: 10
---

# Predefined Script Variables

## Predefined Script Variables

These are created by the script execution engine, and, in the case of all but $$RESULT$$, are
pre-populated with the values supplied in the Credentials Key. They can be used in the script where
required.

- $$USERNAME$$ - the user name used for initial ssh / telnet connection
- $$PASSWORD$$ - the password used for initial ssh / telnet connection
- $$USERNAME2$$ - the second level (admin / privilege) user name
- $$PASSWORD2$$ - the second level (admin / privilege) password
- $$RESULTS$$ - the variable whose contents are used as the ‘result text’ of the script.

:::note
Using multiple capturing commands with the same variable will result in the data being
appended to the existing value.
:::


### Script Commands

A script command consists of one or more parts separated by a comma. Generally the format order is
**CommandText,[VariableName],[Option],[Command]** where the portions in square brackets are optional
and depend on the command.

### Example

MorePrompt,-- More --

ExcludeMatchesWithComment,\*\*\* uptime line removed \*\*\*,uptime

Send,\x19

Send,$$PASSWORD$$\r\n

ExecuteAndCapture,$$RESULTS$$,ls -al
