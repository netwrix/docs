# GitHub Issue Triage Test Scenarios

This document provides specific test cases to validate all aspects of the improved issue triage system.

---

## 🔒 Security Screening Tests

### Test 1: Clean Issue (Should Pass)
**Title:** Documentation clarification for installation steps
**Body:**
```
The installation guide mentions running `npm install` but doesn't specify which directory to run it in. Can you clarify this?

Steps I followed:
1. Cloned the repository
2. Ran npm install in the root directory
3. Got some warnings about peer dependencies

Expected: The guide should specify the correct directory.
```

**Expected Result:**
- ✅ Security screening: PASS
- ✅ Code of conduct: PASS
- ✅ Labels assigned based on content

---

### Test 2: Issue with Security Vulnerability (Should Close)
**Title:** SQL injection vulnerability in login endpoint
**Body:**
```
I found a SQL injection vulnerability in the login endpoint.

Vulnerable code at `/api/auth/login.js` line 42:
```
const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
```

Exploit:
Username: `admin' OR '1'='1' --`
Password: anything

This bypasses authentication and logs you in as admin.
```

**Expected Result:**
- ❌ Security screening: FAIL — Issue closed
- 🏷️ Comment posted with security notice
- 🏷️ @netwrix/security tagged
- ⏹️ Pipeline stops (no conduct check or labeling)

---

### Test 3: Clean Issue Edited to Add Vulnerability (Bypass Prevention)
**Initial Title:** Login page loading slowly
**Initial Body:**
```
The login page takes about 5 seconds to load. This seems unusually slow.

Browser: Chrome 120
OS: Windows 11

Can you investigate?
```

**Initial Result:**
- ✅ Security screening: PASS
- ✅ Labels assigned

**After Edit - Edit Body To:**
```
The login page takes about 5 seconds to load because of a vulnerability.

I found the issue - there's an XSS vulnerability at line 23:
```
document.getElementById('welcome').innerHTML = userInput;
```

Inject: `<script>alert(document.cookie)</script>`
```

**Expected Result:**
- ❌ Security screening: FAIL — Issue closed
- 🏷️ Security notice posted
- 🏷️ @netwrix/security tagged

---

### Test 4: Security Vulnerability Posted in Comment
**Title:** Question about API authentication
**Body:**
```
How does the API authentication work? I'm trying to integrate with your system.
```

**Initial Result:**
- ✅ Security screening: PASS

**Then Add Comment:**
```
Never mind, I figured it out by looking at the code. There's actually a security issue here - the API tokens are being logged in plain text in `/var/log/api.log`.

Here's the vulnerable code in `auth.js`:
logger.info('Auth attempt with token: ' + token);

This exposes all API tokens to anyone with log access.
```

**Expected Result:**
- ❌ Security screening: FAIL — Issue closed
- 🏷️ Security notice posted
- 🏷️ @netwrix/security tagged

---

### Test 5: Clean Comment Edited to Add Vulnerability
**Title:** Performance optimization question
**Body:**
```
What's the best way to optimize database queries in this codebase?
```

**Add Clean Comment:**
```
Thanks for the question! I'd recommend looking at our caching documentation.
```

**Initial Result:**
- ✅ Security screening: PASS

**Then Edit Comment To:**
```
Thanks for the question! I'd recommend looking at our caching documentation.

Actually, I found a critical issue - the database password is hardcoded in `config.js`:
db_password: "SuperSecret123!"

This needs immediate attention.
```

**Expected Result:**
- ❌ Security screening: FAIL — Issue closed
- 🏷️ Security notice posted
- 🏷️ @netwrix/security tagged

---

## 🤝 Code of Conduct Tests

### Test 6: Clean Issue (Should Pass)
**Title:** Feature request for dark mode
**Body:**
```
It would be great to have a dark mode option for the UI. Many users work in low-light environments and this would improve accessibility.

Benefits:
- Reduced eye strain
- Better battery life on OLED screens
- Follows modern UI trends

Thanks for considering!
```

**Expected Result:**
- ✅ Security screening: PASS
- ✅ Code of conduct: PASS
- ✅ Labels assigned

---

### Test 7: Issue with Code of Conduct Violation (Should Sanitize)
**Title:** This feature is terrible
**Body:**
```
The new dashboard is completely broken. The developers who built this are [offensive language - incompetent idiots who don't know how to code].

Here's how to reproduce the bug:
1. Navigate to /dashboard
2. Click "View Reports"
3. Page crashes

This is unacceptable and someone should be fired.
```

**Expected Result:**
- ✅ Security screening: PASS
- ⚠️ Code of conduct: VIOLATION — Body sanitized
- 🏷️ Sanitized body:
```
The new dashboard is completely broken. The developers who built this are [content removed — code of conduct violation].

Here's how to reproduce the bug:
1. Navigate to /dashboard
2. Click "View Reports"
3. Page crashes

[content removed — code of conduct violation]
```
- 🏷️ Code of conduct notice posted
- ✅ Labels assigned to sanitized content

---

### Test 8: Conduct Violation Posted in Comment
**Title:** Bug in search functionality
**Body:**
```
The search isn't returning results for products.
```

**Add Comment with Violation:**
```
This is [expletive] ridiculous. How did this even get through QA? You [offensive personal attack] are clearly not competent.
```

**Expected Result:**
- ✅ Security screening: PASS
- ⚠️ Code of conduct: VIOLATION — Comment sanitized
- 🏷️ Sanitized comment: `[content removed — code of conduct violation] is ridiculous. How did this even get through QA? [content removed — code of conduct violation]`
- 🏷️ Code of conduct notice posted as reply to comment

---

### Test 9: Clean Issue Edited to Add Violation
**Initial Body:**
```
The export feature doesn't work with large datasets.
```

**Edit Body To:**
```
The export feature doesn't work with large datasets. This is [offensive language] and whoever built this is [personal attack]. I'm extremely frustrated.

Steps to reproduce:
1. Select 10,000+ records
2. Click export
3. Browser hangs
```

**Expected Result:**
- ✅ Security screening: PASS
- ⚠️ Code of conduct: VIOLATION — Body sanitized
- 🏷️ Offensive content replaced with `[content removed — code of conduct violation]`
- 🏷️ Code of conduct notice posted

---

## 🏷️ Label Assignment Tests

### Test 10: New Issue with Template Labels
**Use Template:** "Fix content" (assigns `["documentation", "fix"]`)
**Title:** Typo in API reference
**Body:**
```
The API reference for Netwrix Auditor 10.8 has a typo on page 5.

Current text: "authentification"
Should be: "authentication"

URL: https://docs.netwrix.com/...
```

**Expected Result:**
- ✅ Template labels: `["documentation", "fix"]`
- ✅ Skill adds: `["auditor-10.8", "api"]`
- ✅ Final labels: `["documentation", "fix", "auditor-10.8", "api"]`

---

### Test 11: Issue Edited to Change Product (Label Update)
**Use Template:** "Fix content" (assigns `["documentation", "fix"]`)
**Initial Title:** Installation issue with 1Secure
**Initial Body:**
```
Can't install 1Secure on Windows Server 2022.

Error message: "Installation failed at step 3"
```

**Initial Labels After Processing:**
`["documentation", "fix", "1secure", "installation"]`

**User Manually Adds:**
`"urgent"` label

**Labels Now:**
`["documentation", "fix", "1secure", "installation", "urgent"]`

**Edit Issue Body To:**
```
Can't install Password Secure 9.3 on Windows Server 2022.

Error message: "Installation failed at step 3"
```

**Expected Result:**
- ✅ Keep template: `["documentation", "fix"]`
- ✅ Keep user-applied: `["urgent"]`
- ❌ Remove skill: `["1secure", "installation"]` (no longer applicable)
- ✅ Add skill: `["password-secure-9.3", "installation"]`
- ✅ Final: `["documentation", "fix", "urgent", "password-secure-9.3", "installation"]`

---

### Test 12: Major Content Change (Template Labels Preserved)
**Use Template:** "Fix content" (assigns `["documentation", "fix"]`)
**Initial Title:** Documentation typo
**Initial Body:**
```
Typo in the glossary: "recieve" should be "receive"
```

**Initial Labels:**
`["documentation", "fix", "glossary"]`

**Edit to Completely Different Content:**
```
Critical security flaw in authentication flow. The system allows bypass through...

Wait, I shouldn't post this publicly. Please contact me directly.
```

**Expected Result:**
- ❌ Security screening: FAIL — Issue closed (before labeling runs)
- Note: This tests that security screening happens before label reassignment

---

### Test 13: User Label Preserved Despite Content Change
**Use Template:** "Add content" (assigns `["enhancement", "documentation"]`)
**Title:** Add deployment guide
**Body:**
```
Please add a deployment guide for Kubernetes environments.
```

**Initial Labels:**
`["enhancement", "documentation", "kubernetes"]`

**User Manually Adds:**
`["priority-low", "api"]` (even though issue isn't about API)

**Edit Issue:**
```
Please add a deployment guide for Docker environments.
```

**Expected Result:**
- ✅ Keep template: `["enhancement", "documentation"]`
- ✅ Keep user: `["priority-low", "api"]` (even though "api" seems wrong)
- ❌ Remove skill: `["kubernetes"]`
- ✅ Add skill: `["docker"]`
- ✅ Final: `["enhancement", "documentation", "priority-low", "api", "docker"]`
- 📝 Note: User's "api" label is respected even though it doesn't match content

---

### Test 14: Comment Event Doesn't Retrigger Labeling
**Title:** Question about authentication
**Body:**
```
How does OAuth work in this system?
```

**Initial Labels:**
`["documentation", "question", "authentication", "oauth"]`

**Add Comment:**
```
Also curious about SAML integration!
```

**Expected Result:**
- ✅ Security screening: PASS (checks comment)
- ✅ Code of conduct: PASS (checks comment)
- ⏭️ Label assignment: SKIPPED (workflow configured to skip on comment events)
- ✅ Labels unchanged: `["documentation", "question", "authentication", "oauth"]`

---

## 🔄 Combined Scenario Tests

### Test 15: Multiple Issues in One
**Title:** Installation problem
**Body:**
```
Can't install Auditor. The [mild profanity] installer keeps crashing.

Also, I noticed there's a hardcoded password in the config file:
admin_password = "default123"
```

**Expected Result:**
1. ❌ Security screening: FAIL — Issue closed immediately
2. ⏭️ Code of conduct check: SKIPPED (issue already closed)
3. ⏭️ Label assignment: SKIPPED (issue already closed)
4. 🏷️ Security notice posted
5. 🏷️ @netwrix/security tagged

**Key Test:** Security takes priority over conduct violations

---

### Test 16: Clean → Violation → Security (Multiple Edits)
**Initial Body:**
```
Feature works but could be improved.
```

**Edit 1 (Add conduct violation):**
```
Feature works but could be improved. Actually, the developer who built this is [offensive content].
```

**Expected:**
- ⚠️ Body sanitized
- 🏷️ Conduct notice posted

**Edit 2 (Add security vulnerability):**
```
Feature works but could be improved. [sanitized]. Actually, I found a vulnerability in auth.js line 52: password = req.body.password (no validation).
```

**Expected:**
- ❌ Issue closed for security
- 🏷️ Security notice posted
- 🏷️ @netwrix/security tagged

---

## 📋 Test Execution Checklist

### Setup
- [ ] Deploy all three improved skills
- [ ] Deploy improved workflow
- [ ] Verify @netwrix/security team exists
- [ ] Create test repository or use sandbox

### Security Tests (5 tests)
- [ ] Test 1: Clean issue passes
- [ ] Test 2: Vulnerability in body closes issue
- [ ] Test 3: Edit to add vulnerability closes issue
- [ ] Test 4: Vulnerability in comment closes issue
- [ ] Test 5: Edit comment to add vulnerability closes issue

### Code of Conduct Tests (4 tests)
- [ ] Test 6: Clean issue passes
- [ ] Test 7: Violation in body sanitizes
- [ ] Test 8: Violation in comment sanitizes
- [ ] Test 9: Edit to add violation sanitizes

### Label Assignment Tests (5 tests)
- [ ] Test 10: Template labels applied correctly
- [ ] Test 11: Product change updates labels
- [ ] Test 12: Security issue closes before relabeling
- [ ] Test 13: User labels preserved despite mismatch
- [ ] Test 14: Comments don't retrigger labeling

### Combined Tests (2 tests)
- [ ] Test 15: Security + conduct (security wins)
- [ ] Test 16: Multiple edits (conduct → security)

### Validation Checks
- [ ] Check GitHub Actions logs for each test
- [ ] Verify issue states (open/closed)
- [ ] Verify comments posted correctly
- [ ] Verify labels applied correctly
- [ ] Verify @netwrix/security tagged when appropriate

---

## 🐛 Expected Edge Cases

### Edge Case 1: Issue Created with Template + Manual Labels
If a user creates an issue and immediately adds manual labels before the workflow runs:
- Workflow should treat quickly-applied labels as template labels
- Consider labels applied within first 10 seconds as "template"

### Edge Case 2: Workflow Fails Mid-Pipeline
If security passes but conduct check fails (workflow error):
- Issue remains open
- No sanitization occurs
- Manual intervention needed

### Edge Case 3: User Removes Template Label
If user manually removes a template label:
- Skill should not re-add it (respect removal)
- This requires checking for "unlabeled" events too

### Edge Case 4: Concurrent Edits
If issue is edited while workflow is running:
- Workflow operates on stale content
- Next workflow run will catch the change
- Consider implementing issue locking or conflict detection

---

## 📊 Success Criteria

### Security Screening
- ✅ All vulnerabilities detected and closed
- ✅ Clean issues pass through
- ✅ Edits and comments trigger re-screening
- ✅ Consistent security notice posted

### Code of Conduct
- ✅ Violations sanitized while preserving technical content
- ✅ Consistent conduct notice posted
- ✅ Both issues and comments handled

### Label Assignment
- ✅ Template labels always preserved
- ✅ User labels always preserved
- ✅ Skill labels updated based on content
- ✅ Outdated skill labels removed
- ✅ New applicable labels added

### Overall System
- ✅ No false positives for security
- ✅ No false negatives for security
- ✅ Technical content never lost in sanitization
- ✅ Labels stay current with content
- ✅ User intent respected
