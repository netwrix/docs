---
title: "If multiple Endpoint Privilege Manager rules would apply, which rule takes precedence?"
description: "If multiple Endpoint Privilege Manager rules would apply, which rule takes precedence?"
sidebar_position: 50
---

# If multiple Endpoint Privilege Manager rules would apply, which rule takes precedence?

When a process is created, PPLPM evaluates the result in the following order:

1. Explicit rules on computer side
2. Explicit rules on user side
3. The rule inherited from the parent process
4. SecureRun on computer side
5. SecureRun on user side

Once a rule is found, we stop the search and do what the rule says.


