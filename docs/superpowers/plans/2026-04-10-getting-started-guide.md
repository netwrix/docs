# Getting Started Guide — Implementation Plan

> **For agentic workers:** Use the `tech-writer` agent (subagent_type: `tech-writer`) to execute each task. The output is a single markdown file, not code — no TDD applies. Each task drafts one or more sections of the guide. Use the spec at `docs/superpowers/specs/2026-04-10-getting-started-guide-design.md` as the authoritative reference for content and tone.

**Goal:** Write `GETTING_STARTED.md` at the repo root — a comprehensive onboarding guide for new Netwrix documentation contributors with no prior Git, GitHub, or CLI experience.

**Approach:** Build the file incrementally, one logical group of sections at a time. Each task appends to the file. The final task does a full review pass and removes the two old draft guides.

**Tone:** Friendly, encouraging, conversational. Uses "you." Explains *why* before *how*. Concepts are concise — a few sentences, not essays. Windows and macOS only (no Linux).

**Key references:**
- Spec: `docs/superpowers/specs/2026-04-10-getting-started-guide-design.md`
- Existing CLI guide (for inspiration, not copying): `getting-started-guide-cli.md`
- Existing essentials guide (for inspiration, not copying): `getting-started-guide-essentials.md`
- Contributing guide: `CONTRIBUTING.md`
- Style guide: `netwrix_style_guide.md`
- Repo URL: `https://github.com/netwrix/docs.git`

---

### Task 1: Create the file with frontmatter, introduction, and docs-as-code section

**Files:**
- Create: `GETTING_STARTED.md` (repo root)

**Spec sections:** 1 (Welcome and Introduction), 2 (What Is Docs-as-Code?)

- [ ] **Step 1: Create `GETTING_STARTED.md` with a table of contents, welcome paragraph, and sections 1–2**

The file should start with:
- A title: `# Getting Started with Netwrix Documentation`
- A one-line summary: what this guide covers and who it's for
- A note linking to `CONTRIBUTING.md` for experienced users
- A table of contents linking to all 13 sections

Then write:
- **Section 1 — Welcome and Introduction:** Brief welcome. Introduce the Netwrix docs site (27+ products, GitHub repo at https://github.com/netwrix/docs). Set expectations: by the end, they'll have tools installed, understand the workflow, and be ready to contribute.
- **Section 2 — What Is Docs-as-Code?:** Concise explanation. Plain text (Markdown) files in a repo, built into a website by Docusaurus. Four benefits: plain text, version history, review process, automation. Keep it to one short paragraph plus the bullet list.

- [ ] **Step 2: Review the draft**

Read back the file. Check tone (friendly, encouraging), length (concise — no essays), and accuracy. Fix any issues.

- [ ] **Step 3: Commit**

```bash
git add GETTING_STARTED.md
git commit -m "Add Getting Started Guide: introduction and docs-as-code sections"
```

---

### Task 2: Git/GitHub safety section and tool installation

**Files:**
- Modify: `GETTING_STARTED.md`

**Spec sections:** 3 (Git, GitHub, and Why You Can't Break Anything), 4 (Installing Your Tools)

- [ ] **Step 1: Write sections 3–4**

- **Section 3 — Git, GitHub, and Why You Can't Break Anything:** Brief definitions of Git and GitHub (1–2 sentences each). Then the safety reassurance — four numbered points: (1) branches isolate your work, (2) pull requests require review, (3) dev isn't the live site — daily automated sync checks the build first, (4) Git keeps full history, any change can be undone. End with an encouraging line: don't be afraid to experiment.

- **Section 4 — Installing Your Tools:** Three subsections (Git, Node.js, VS Code), each with Windows and macOS instructions side by side. Format as subheadings with platform-specific steps.

  - **Git:** Windows — download from https://git-scm.com, run installer with defaults. macOS — run `xcode-select --install` in Terminal. Verify both: `git --version`.
  - **Node.js (v22 or later):** Both platforms — download LTS from https://nodejs.org, run installer. Verify: `node --version` (should show v22.x or higher) and `npm --version`.
  - **VS Code:** Both platforms — download from https://code.visualstudio.com. Note: recommended but not required; any text editor works. Recommended because it has a built-in terminal and good markdown preview.

- [ ] **Step 2: Review the draft**

Read back sections 3–4. Verify: tone is reassuring (not lecturing), installation steps have verification commands, Windows/macOS instructions are both present. Fix any issues.

- [ ] **Step 3: Commit**

```bash
git add GETTING_STARTED.md
git commit -m "Add Getting Started Guide: safety section and tool installation"
```

---

### Task 3: Cloning the repo and starting the dev server

**Files:**
- Modify: `GETTING_STARTED.md`

**Spec section:** 5 (Cloning the Repo and Starting the Dev Server)

- [ ] **Step 1: Write section 5**

Start with a brief explanation of what a CLI is (1–2 sentences). Recommend PowerShell for Windows, Terminal for macOS. Explain how to open each one.

Then walk through seven numbered steps:

1. **Open your terminal** — Windows: search for "PowerShell" in the Start menu. macOS: open Terminal from Applications > Utilities (or Spotlight search).
2. **Navigate to where you want the project** — Explain `cd` (change directory). Example: `cd Documents` to go to your Documents folder. Note that this is where the project folder will be created.
3. **Clone the repository** — Run: `git clone https://github.com/netwrix/docs.git`. Explain: this downloads a copy of the entire documentation project to your computer.
4. **Navigate into the folder** — Run: `cd docs`.
5. **Install dependencies** — Run: `npm install`. Explain: this downloads the packages the site needs to build. It takes a few minutes the first time.
6. **Start the dev server** — Run: `npm run start`. Explain: this builds the site and runs it locally on your computer. Include a note that the first build takes a while and may use significant memory (handled automatically).
7. **Open the browser** — Go to `http://localhost:4500`. You should see the Netwrix documentation site running on your own computer.

- [ ] **Step 2: Review the draft**

Read back section 5. Verify: all commands are correct, the repo URL is `https://github.com/netwrix/docs.git`, port is 4500, explanations are beginner-friendly. Fix any issues.

- [ ] **Step 3: Commit**

```bash
git add GETTING_STARTED.md
git commit -m "Add Getting Started Guide: cloning repo and dev server setup"
```

---

### Task 4: The Netwrix workflow

**Files:**
- Modify: `GETTING_STARTED.md`

**Spec section:** 6 (The Netwrix Workflow)

- [ ] **Step 1: Write section 6**

Brief intro: every documentation change follows the same cycle. Then seven numbered steps:

1. **Pull the latest changes** — Run `git checkout dev` then `git pull`. Explain: you always want to start from the most up-to-date version of the documentation.
2. **Create a branch** — Run `git checkout -b your-branch-name`. Explain what this does. Give naming convention examples: `update/accessanalyzer-install-steps`, `fix/typo-auditor-config`. Use a descriptive name that says what you're changing.
3. **Edit your files** — Open the project in VS Code (or your editor). Navigate to the file you want to change and edit it. Files are in `docs/<product>/` or `docs/<product>/<version>/`.
4. **Test locally** — Check your changes at `http://localhost:4500`. The dev server auto-refreshes when you save a file. If the server isn't running, start it with `npm run start`.
5. **Stage and commit your changes** — Run `git add <filename>` (or `git add .` for all changes), then `git commit -m "Brief description of what you changed"`. Explain staging: you're telling Git which files to include in this snapshot. Explain committing: you're saving that snapshot with a message describing what you did.
6. **Push your branch** — Run `git push -u origin your-branch-name`. Explain: this uploads your branch to GitHub so others can see it.
7. **Create a pull request** — Go to https://github.com/netwrix/docs. GitHub will show a prompt to create a PR for your recently pushed branch. Click it. Set the target branch to `dev`. Write a short description of what you changed and why. Click "Create pull request."

End with a paragraph about what happens next: automated checks run (style checks, editorial review, build verification). A team member reviews your changes. Once approved and merged, your changes go live the next morning via the automated daily sync from `dev` to `main`.

- [ ] **Step 2: Review the draft**

Read back section 6. Verify: all Git commands are correct, the workflow matches `CONTRIBUTING.md`, target branch is `dev`, naming conventions make sense. Fix any issues.

- [ ] **Step 3: Commit**

```bash
git add GETTING_STARTED.md
git commit -m "Add Getting Started Guide: Netwrix workflow section"
```

---

### Task 5: Frontmatter, file structure, images, and KB articles

**Files:**
- Modify: `GETTING_STARTED.md`

**Spec sections:** 7 (Frontmatter, File Structure, and Images), 8 (Knowledge Base Articles)

- [ ] **Step 1: Write sections 7–8**

- **Section 7 — Frontmatter, File Structure, and Images:**

  **Frontmatter:** Every documentation page starts with a YAML block at the top of the file. Show the example:
  ```yaml
  ---
  title: "Page Title"
  description: "Brief description for search engines"
  sidebar_position: 1
  ---
  ```
  Explain briefly: `title` sets the page title and browser tab; `description` is used by search engines; `sidebar_position` controls where the page appears in the sidebar navigation.

  **File structure:** Two patterns exist:
  - Multi-version products: `docs/<product>/<version>/` (e.g., `docs/accessanalyzer/12.0/`)
  - Single-version (SaaS) products: `docs/<product>/` (e.g., `docs/1secure/`)

  Important note: edits to one version don't carry over to others. If a fix applies to multiple versions, you need to edit each one separately.

  **Images:** Stored in `static/images/<product>/` as `.webp` files, organized by version and section (e.g., `static/images/accessanalyzer/12.0/install/`). Reference them with absolute paths:
  ```markdown
  ![Description of the image](/images/accessanalyzer/12.0/install/setup-wizard.webp)
  ```

- **Section 8 — Knowledge Base Articles:** Keep this short. KB articles live in `docs/kb/<product>/` — edit them there and only there. A build script automatically copies KB content into versioned product folders. Never manually create or copy KB files into versioned directories — they'll be overwritten. KB images are stored in `0-images/` subdirectories alongside the markdown files.

- [ ] **Step 2: Review the draft**

Read back sections 7–8. Verify: frontmatter example is accurate, file structure examples match the real repo, image path format is correct (`/images/` not `/static/images/`), KB section is concise. Fix any issues.

- [ ] **Step 3: Commit**

```bash
git add GETTING_STARTED.md
git commit -m "Add Getting Started Guide: frontmatter, file structure, images, KB articles"
```

---

### Task 6: Practice exercise

**Files:**
- Modify: `GETTING_STARTED.md`

**Spec section:** 9 (Practice Exercise)

- [ ] **Step 1: Write section 9**

Frame it as: "Now that you know the tools and the workflow, try it yourself." Walk through the full cycle end to end with concrete commands:

1. Make sure you're on the `dev` branch with the latest changes:
   ```
   git checkout dev
   git pull
   ```
2. Create a practice branch:
   ```
   git checkout -b practice/your-name-first-edit
   ```
3. Pick any documentation page you're familiar with. Open it in VS Code and make a small improvement — fix a typo, clarify a sentence, or improve a description.
4. Save the file and check your change at `http://localhost:4500`.
5. Stage and commit:
   ```
   git add <the-file-you-edited>
   git commit -m "Improve wording in <page name>"
   ```
6. Push your branch:
   ```
   git push -u origin practice/your-name-first-edit
   ```
7. Go to https://github.com/netwrix/docs and create a pull request targeting `dev`.

End with encouragement: "This is just practice. Don't worry about making a perfect change — the goal is to run through the workflow so it feels familiar next time."

- [ ] **Step 2: Review the draft**

Read back section 9. Verify: all commands are correct and consistent with section 6. The tone is encouraging and low-stakes. Fix any issues.

- [ ] **Step 3: Commit**

```bash
git add GETTING_STARTED.md
git commit -m "Add Getting Started Guide: practice exercise"
```

---

### Task 7: Glossary, common commands, GitHub Issues, and getting help

**Files:**
- Modify: `GETTING_STARTED.md`

**Spec sections:** 10 (Key Concepts Glossary), 11 (Common Git Commands), 12 (Using GitHub Issues with Claude), 13 (Getting Help)

- [ ] **Step 1: Write sections 10–13**

- **Section 10 — Key Concepts:** A definition list with short, plain-language definitions. Terms to include (alphabetical):
  - Branch, Clone, Commit, Dev server, Frontmatter, localhost, Markdown, Merge, Node.js / npm, Pull, Pull Request (PR), Push, Repository (repo)

- **Section 11 — Common Git Commands:** A table with two columns: Command and What it does.

  | Command | What it does |
  |---------|-------------|
  | `git status` | See what files you've changed |
  | `git checkout dev` | Switch to the dev branch |
  | `git pull` | Get the latest changes from GitHub |
  | `git checkout -b branch-name` | Create a new branch |
  | `git add <file>` | Stage a specific file for commit |
  | `git add .` | Stage all changed files |
  | `git commit -m "message"` | Commit staged changes with a description |
  | `git commit -am "message"` | Stage and commit tracked files in one step (doesn't add new files) |
  | `git push -u origin branch-name` | Push your branch to GitHub |
  | `git log --oneline` | See recent commit history |
  | `git diff` | See what you've changed since your last commit |

- **Section 12 — Using GitHub Issues with Claude:** If you spot a documentation problem but don't want to fix it yourself, go to the repo's Issues tab and click "New issue." Select the **"Fix content"** template. Describe the issue and paste the URL of the page where you found it. The template automatically applies the right labels. Once submitted, Claude (an AI assistant) automatically picks up the issue, identifies the affected files, applies the fix, and opens a pull request.

- **Section 13 — Getting Help:** Point to resources:
  - `CONTRIBUTING.md` for the full workflow and writing standards reference
  - `netwrix_style_guide.md` for detailed writing standards
  - Note: automated checks catch most style issues, so don't worry about getting everything perfect on your first try

- [ ] **Step 2: Review the draft**

Read back sections 10–13. Verify: glossary definitions are accurate and consistent with how terms are used earlier in the guide. Command table matches the spec exactly (including `git commit -am`). GitHub Issues section describes the "Fix content" template correctly. Fix any issues.

- [ ] **Step 3: Commit**

```bash
git add GETTING_STARTED.md
git commit -m "Add Getting Started Guide: glossary, commands, GitHub Issues, getting help"
```

---

### Task 8: Full review and cleanup

**Files:**
- Modify: `GETTING_STARTED.md`
- Delete: `getting-started-guide-cli.md`
- Delete: `getting-started-guide-essentials.md`

- [ ] **Step 1: Full review of GETTING_STARTED.md**

Read the entire file end to end. Check for:
- **Tone consistency:** friendly and encouraging throughout, no sudden shifts to formal/terse
- **Accuracy:** all commands, URLs, paths, and port numbers are correct
- **Conciseness:** no section is bloated with unnecessary explanation; concepts are brief
- **Flow:** each section builds on the previous one logically
- **Table of contents:** all section links work and match the actual headings
- **Terminology:** terms used in the guide match the glossary definitions
- **Platform coverage:** Windows and macOS instructions are present wherever relevant (no Linux)

Fix any issues found.

- [ ] **Step 2: Delete the old draft guides**

```bash
rm getting-started-guide-cli.md getting-started-guide-essentials.md
```

These were untracked files that the new guide replaces. Since they're untracked, deleting them requires no Git operation — they'll simply disappear.

- [ ] **Step 3: Final commit**

```bash
git add GETTING_STARTED.md
git commit -m "Complete Getting Started Guide: full review pass, remove old drafts"
```
