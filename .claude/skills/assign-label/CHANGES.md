# Changes Made to assign-label Skill

This document summarizes the improvements made in `SKILL.md.improved`.

## Critical Fixes

### 1. Fixed Label Count Contradiction
**Before (line 37):**
```markdown
- You should only choose one label.
```

**After:**
```markdown
Assign 1-3 additional labels that categorize the issue beyond template-assigned labels.
```

**Why:** Removed contradiction with the multi-label example on line 45.

---

### 2. Fixed Template Label Conflict
**Before (line 38):**
```markdown
- If labels are already applied ($4), remove them and the only labels that should exist are the ones you choose.
```

**After:**
```markdown
1. **Preserve template labels**: Keep labels like "documentation", "fix", "enhancement", "site", "docusaurus" assigned by issue templates
```

**Why:** Your issue templates pre-assign labels. The old instruction would remove these carefully chosen labels. Now they're preserved and complemented.

---

## Security Improvements

### 3. Added Tool Restrictions
**Added to frontmatter:**
```yaml
allowed-tools: Bash(gh *)
```

**Why:** Follows principle of least privilege. The skill only needs to run `gh` commands—it doesn't need to read, edit, or write files. This prevents accidental file modifications during labeling operations.

---

## Improved Auto-Triggering

### 4. Enhanced Description
**Before:**
```yaml
description: "Analyze a GitHub issue's content and assign the most appropriate label(s) based on the issue's nature, using labels available in the repository."
```

**After:**
```yaml
description: "Assign GitHub issue labels based on content analysis. Use when: (1) A new issue is created and needs categorization, (2) An issue needs relabeling after content changes, (3) Analyzing issue content to determine appropriate labels. Preserves template-assigned labels and adds complementary labels based on technical domain, complexity, and affected components."
```

**Why:** The description now clearly states WHEN to use the skill, helping Claude trigger it automatically at the right times. It also sets expectations about label preservation.

---

## Content Improvements

### 5. Reduced Verbosity
**Before (lines 19-29):**
```markdown
### 1. Retrieve available labels

Fetch all labels defined in the repository:

```bash
gh label list --repo $0 --limit 100 --json name,description
```

### 2. Analyze the issue content

Examine the **title** (`$2`) and **body** (`$3`) to determine the nature of the issue.
```

**After:**
```markdown
## Analysis Guidelines

Fetch repository labels and analyze the issue to determine:
- **Technical domain**: Security, performance, UI/UX, API, database, documentation quality, etc.
- **Complexity indicators**: "needs-research", "good-first-issue", complexity level
- **Affected components**: Specific product areas, features, subsystems, or product versions
- **Priority signals**: "urgent", "high-priority" based on impact described in the issue
```

**Why:** Claude knows how to use `gh label list`. Instead of telling Claude HOW to do obvious things, the improved version focuses on WHAT to look for when analyzing—the actual decision-making criteria.

---

### 6. Better Structured Rules
**Before (lines 31-38):**
```markdown
### 3. Select labels

Match the issue analysis against available repository labels:

- **Only use labels that exist in the repository.** Do not create new labels.
- Prefer **specific labels** over generic ones when the issue clearly fits.
- You should only choose one label.
- If labels are already applied (`$4`), remove them and the only labels that should exist are the ones you choose.
```

**After:**
```markdown
## Label Selection Rules

1. **Preserve template labels**: Keep labels like "documentation", "fix", "enhancement", "site", "docusaurus" assigned by issue templates
2. **Add complementary labels**: Select 1-3 labels that add value beyond template categorization
3. **Use only existing labels**: Fetch labels with `gh label list` and only use labels that exist in the repository
4. **Be specific over generic**: Prefer specific labels (e.g., "security-vulnerability") over generic ones (e.g., "bug") when clearly applicable
5. **Be conservative**: If the issue content is ambiguous, err on the side of under-labeling rather than mislabeling
```

**Why:** Numbered rules are easier to follow. Each rule is now clear, non-contradictory, and includes examples where helpful.

---

### 7. Improved Report Format
**Before:**
```markdown
Issue #$1 labels:
```

**After:**
```markdown
Issue #{issue-number} labels:
```

**Why:** `{issue-number}` is clearer than `$1` in output formatting. It shows this is a placeholder to be filled in, not a literal variable reference.

---

### 8. Added Clearer Notes Section
**Before:**
```markdown
## Important Notes

- **Do not create labels**: Only use labels that already exist in the repository. If no suitable label exists, note this in your report and suggest label creation to maintainers.
- **Be conservative**: Only assign labels you are confident about. It's better to under-label than to mislabel.
- **Consider the full context**: The issue body may have been reformatted by the template validation step. Use the latest version of the body for your analysis.
```

**After:**
```markdown
## Notes

- It's acceptable to assign zero new labels if template labels are sufficient—report "none needed"
- If no suitable labels exist for an important categorization, note this in your report and suggest labels for maintainers to create
- Consider the full context: the issue body may have been modified by earlier pipeline steps (code of conduct checks)
- When uncertain about a label's applicability, leave it off—better to under-label than to mislabel
```

**Why:**
- Explicitly permits assigning zero new labels (important clarification)
- Removed redundant "Do not create labels" (already in rules)
- More concise phrasing
- Better context about pipeline modifications

---

## Summary Statistics

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Lines | 65 | 62 | -3 lines |
| Frontmatter fields | 3 | 4 | +1 (added `allowed-tools`) |
| Critical fixes | - | 2 | Label count + template preservation |
| Security improvements | - | 1 | Tool restrictions |

---

## How to Apply These Changes

1. **Review** `SKILL.md.improved` to ensure it matches your needs
2. **Test** the improved skill (optional):
   ```bash
   # Temporarily rename to activate
   cd .claude/skills/assign-label
   mv SKILL.md SKILL.md.backup
   mv SKILL.md.improved SKILL.md

   # Test with: /assign-label <args>

   # Revert if needed
   mv SKILL.md SKILL.md.improved
   mv SKILL.md.backup SKILL.md
   ```
3. **Replace** the original when satisfied:
   ```bash
   cd .claude/skills/assign-label
   mv SKILL.md.improved SKILL.md
   ```

---

## Related Changes Needed

After updating this skill, you should also update:

1. **`.github/workflows/claude-issue-labeler.yml`** — Add note in Step 3 about preserving template labels
2. **Issue templates** — Verify the labels being assigned are what you want as "template labels"
3. **`code-of-conduct-check` skill** — Apply similar improvements (reduce verbosity, add tool restrictions)
4. **`identify-security-vuln-discussion` skill** — Apply similar improvements

See `.claude/IMPROVEMENTS_DIFF.md` for details on all recommended changes across the system.
