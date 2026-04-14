# Practice Exercises

These exercises walk you through the documentation workflow step by step. Each one builds on the skills from the previous exercise. If you haven't set up your tools yet, start with [GETTING_STARTED.md](GETTING_STARTED.md).

## Exercise 1: Make your first edit

This exercise walks you through the full workflow end to end — from pulling the latest code to opening a pull request.

1. Make sure you're on `dev` with the latest changes:

   ```bash
   git checkout dev
   git pull
   ```

2. Create a practice branch:

   ```bash
   git checkout -b practice/<your-name>-first-edit
   ```

   Replace `<your-name>` with your actual name (for example, `practice/alex-first-edit`).

3. Pick any documentation page you're familiar with. Open it in VS Code and make a small improvement — fix a typo, clarify a sentence, or improve a description.

4. Save the file and check your change in the browser at `http://localhost:4500`. If the dev server isn't running, start it with `npm run start`.

5. Stage, commit, and push your change. You can do this from the command line or from VS Code — both methods do the same thing. Pick whichever you prefer.

   **Option A: Command line**

   Check which files you changed:

   ```bash
   git status
   ```

   Stage and commit:

   ```bash
   git add <the-file-you-edited>
   git commit -m "Improve wording in <page-name>"
   ```

   Replace `<the-file-you-edited>` with the actual file path and `<page-name>` with a short description of the page.

   Push your branch:

   ```bash
   git push -u origin practice/<your-name>-first-edit
   ```

   **Option B: VS Code**

   a. Click the **Source Control** icon in the left sidebar (it looks like a branch, and shows a badge with the number of changed files).

   b. You'll see your changed files listed under **Changes**. Hover over the file you edited and click the **+** icon to stage it. The file moves to a **Staged Changes** section.

   c. Type a commit message in the text box at the top — for example, "Improve wording in install guide."

   d. Click the **Commit** button (or press Ctrl+Enter / Cmd+Enter).

   e. Click the **Sync Changes** button that appears after the commit. VS Code pushes your branch to GitHub. If this is your first push for this branch, VS Code may ask you to confirm publishing the branch — click **OK**.

   If VS Code prompts you for GitHub credentials, enter your username and Personal Access Token (see [Setting up GitHub authentication](GETTING_STARTED.md#setting-up-github-authentication)).

6. Go to [github.com/netwrix/docs](https://github.com/netwrix/docs) and create a pull request targeting **dev**. If you don't see the prompt to create a PR, click the **Pull requests** tab, then **New pull request**, and select your branch.

This is practice — don't worry about making a perfect change. The goal is to run through the workflow so it feels familiar next time.

## Exercise 2: File a GitHub issue

Not every contribution requires editing files. If you spot a problem but don't want to fix it yourself, you can file an issue and let automation handle it.

1. Browse the live documentation site and find something that could be improved — a typo, an unclear sentence, outdated information, or a missing detail.

2. Go to the repo's [Issues](https://github.com/netwrix/docs/issues) tab.

3. Click **New issue**.

4. Select the **Fix content** template.

5. Describe the problem and paste the URL of the page where you found it.

6. Submit the issue.

The template automatically applies the right labels. After you submit the issue, Claude, an AI assistant integrated into the repository, picks it up, identifies the affected files, applies the fix, and opens a pull request. You can follow along on the issue page as the automation works.

## Exercise 3: Review a pull request

Reviewing other people's work is a valuable way to learn the codebase and contribute to the team. You don't need to be an expert — a new reader often catches things that the author overlooked.

1. Go to the repo's [Pull requests](https://github.com/netwrix/docs/pulls) tab.

2. Find an open pull request and click on it.

3. Click the **Files changed** tab to see the modifications.

4. Read through the changes. Look for things like:

   - Typos or grammar issues
   - Unclear instructions
   - Missing steps in a procedure
   - Broken formatting

5. If you spot something, click the **+** icon next to the line and leave a comment.

6. If everything looks good, click **Review changes**, select **Approve**, and submit.

Even reading through a PR without leaving comments helps you learn how the documentation is structured and what good changes look like.

## Exercise 4: Create a new page

Exercises 1–3 covered editing existing pages, filing issues, and reviewing pull requests. This exercise goes a step further — you'll create a brand-new documentation page from scratch, add frontmatter, and see it appear in the sidebar.

This is a throwaway practice page. You won't merge it — the goal is to understand how new pages work.

1. Create a practice branch:

   ```bash
   git checkout dev
   git pull
   git checkout -b practice/<your-name>-new-page
   ```

2. Pick any product folder in `docs/` and create a new markdown file inside it. For example, if you pick Access Analyzer 12.0:

   ```bash
   docs/accessanalyzer/12.0/practice-page.md
   ```

   You can create the file in VS Code — right-click the folder in the file explorer and select **New File**.

3. Before adding frontmatter, check where your page should go in the sidebar. Open a few existing `.md` files in the same folder and look at their `sidebar_position` values. If the highest position in the folder is `7`, use `8` to place your page at the end.

   Add frontmatter at the top of the file. Every documentation page needs this:

   ```yaml
   ---
   title: "Practice Page"
   description: "A throwaway page for learning the docs workflow"
   sidebar_position: 8
   ---
   ```

   The `sidebar_position` value controls where the page appears in the sidebar. Lower numbers appear first. The example above assumes the last page in the folder is at position `7` — adjust the number based on what you found.

4. Add some content below the frontmatter. Use this as a starting point, or write your own:

   ```markdown
   This is a practice page for learning how to create new documentation.

   ## Before you begin

   Make sure you have the following:

   - A GitHub account with access to the repository
   - Git installed on your computer
   - The dev server running locally

   ## Create a page

   1. Create a new `.md` file in the appropriate product folder.
   2. Add frontmatter with a title, description, and sidebar position.
   3. Write your content using Markdown.
   4. Preview the page in your browser.

   > **NOTE:** This is a practice page and won't be merged into the live site.
   ```

5. Save the file and check the dev server at `http://localhost:4500`. Navigate to the product you chose — your new page should appear in the sidebar. If the dev server isn't running, start it with `npm run start`.

6. Experiment with the page:

   - Change the `title` in the frontmatter and watch the sidebar update.
   - Change `sidebar_position` to a lower number, like `1` or `2`, and see the page move up in the sidebar. Then change it back.
   - Add an image reference, a code block, or a link to another page.

7. When you're done experimenting, delete the practice file and switch back to `dev`:

   ```bash
   git checkout dev
   ```

   Git discards the untracked file when you delete it manually, or you can leave it — it won't affect anything as long as you don't push it.

Don't push this branch or open a pull request. This exercise is purely local practice. If you want to practice the full push-and-PR workflow, go back to [Exercise 1](#exercise-1-make-your-first-edit) with a real improvement instead.

## What's next?

- [GETTING_STARTED.md](GETTING_STARTED.md) — Review the full setup and workflow guide
- [TROUBLESHOOTING.md](TROUBLESHOOTING.md) — Solutions to common setup and Git issues
- [CONTRIBUTING.md](CONTRIBUTING.md) — Detailed contribution guidelines and style rules
- [netwrix_style_guide.md](netwrix_style_guide.md) — Netwrix writing standards
