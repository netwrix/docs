
## NPS-D Issue Investigation Guide

To help quickly identify and resolve issues, please provide the following information when reporting or escalating an NPS-D problem. This should be used as a guideline for ticket submission.

---

### 1. Problem Summary

Provide a clear and concise description of the issue:

- What is happening?
- What is the expected behavior vs. actual behavior?

---

### 2. Evidence

Include relevant screenshots of:

- Error messages  
- UI behavior  

If possible, include timestamps.

---

### 3. Timeline

- When was the issue first noticed?
- Is it:
  - Constant  
  - Intermittent  
  - Getting worse over time  

---

### 4. Recent Changes

Have there been any changes prior to the issue?

Examples:

- NPS-D upgrades or configuration changes  
- Network changes (firewall, proxy, Zscaler, etc.)  
- GPO updates  
- OS or patch updates on servers/endpoints  
- Changes to integrated services (AD, SIEM, EDR, etc.)  

---

### 5. Reproducibility

Can the issue be reproduced?

- Yes / No  

If yes, provide step-by-step reproduction:

**Example:**

- Navigate to *Grant Access*  
- Search for systems ending in “tgt”  
- Select system  
- UI displays error: *“Unable to retrieve web features…”* and hangs for 2+ minutes  

Tested across multiple browsers with the same result.
