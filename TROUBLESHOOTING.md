# Troubleshooting

This guide covers common issues you can run into while following the [Getting Started guide](GETTING_STARTED.md). Find your problem below and follow the fix.

## Installation and setup issues

**`npm install` fails or hangs**

Check your Node.js version:

```bash
node --version
```

You need v22 or later. If the version is too old, download the latest LTS installer from [nodejs.org](https://nodejs.org) and reinstall. If the version is correct but `npm install` still fails, delete the cached files and try again:

```bash
rm -rf node_modules package-lock.json
npm install
```

On Windows (PowerShell), use `Remove-Item -Recurse node_modules, package-lock.json` instead of `rm -rf`.

---

**`git` command not found**

Git isn't installed, or your system can't find it.

- **Windows:** Download and install Git from [git-scm.com](https://git-scm.com).
- **macOS:** Run `xcode-select --install` in Terminal and follow the prompts.

After installing, close and reopen your terminal, then run `git --version` to confirm.

---

**`code .` doesn't open VS Code**

The `code` command isn't in your system PATH.

- **Windows:** Reinstall VS Code and check the "Add to PATH" option during setup. Alternatively, open VS Code manually and use **File** > **Open Folder** to navigate to the project.
- **macOS:** Open VS Code, press Cmd+Shift+P, type "shell command", and select **Install 'code' command in PATH**.

## Dev server issues

**Port 4500 already in use**

Another instance of the dev server is already running. Check your other terminal tabs and windows for a running `npm run start` process and stop it with Ctrl+C.

If you don't find one, a previous process probably didn't shut down cleanly. Close and reopen your terminal, then start the dev server again.

---

**Dev server shows stale or broken content**

The Docusaurus cache may be outdated. Stop the dev server (Ctrl+C), clear the cache, and restart:

```bash
npm run clear
npm run start
```

---

**Dev server is slow or unresponsive**

The first build takes a couple of minutes because the project has 27+ products. This is normal. Subsequent page loads are faster.

If you're working from a network drive, use the polling-based file watcher instead:

```bash
npm run start-chok
```

## Git issues

**`git push` asks for a username/password and fails**

GitHub doesn't accept passwords for command-line access. You need a Personal Access Token (PAT). See "Setting Up GitHub Authentication" in [GETTING_STARTED.md](GETTING_STARTED.md) for setup instructions.

---

**`git push` is rejected ("non-fast-forward")**

Someone else has pushed changes to the same branch since your last pull. Pull their changes first, then push again:

```bash
git pull
git push
```

If `git pull` reports a merge conflict, see [Merge conflicts](#merge-conflicts) below.

---

**"Your branch is behind 'origin/dev'"**

The `dev` branch has moved forward since you created your branch. This is normal and expected. To update your branch:

```bash
git checkout dev
git pull
git checkout <your-branch-name>
git merge dev
```

If you see conflicts, see [Merge conflicts](#merge-conflicts) below.

---

**Merge conflicts**

A merge conflict means two people changed the same lines in the same file, and Git can't automatically combine them. The conflicted file contains markers like this:

```
<<<<<<< HEAD
Your version of the text
=======
The other version of the text
>>>>>>> dev
```

To resolve the conflict:

1. Open the conflicted file in VS Code. VS Code highlights the conflict and offers buttons to accept either version.
2. Decide which version to keep, or combine both versions manually.
3. Remove the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).
4. Save the file.
5. Stage and commit the resolved file:

   ```bash
   git add <file>
   git commit -m "Resolve merge conflict in <file>"
   ```

If you're unsure how to resolve a conflict, ask someone on the docs team. This is completely normal — even experienced Git users run into merge conflicts.

---

**"Detached HEAD" warning**

You've checked out a specific commit instead of a branch. Switch back to a named branch:

```bash
git checkout dev
```

From there, create your working branch as described in the [workflow section](GETTING_STARTED.md#the-netwrix-workflow).

---

**Accidentally committed to `dev`**

Don't panic, and don't push. Run `git log --oneline` to confirm the commit is there, then ask the docs team for help undoing it. The important thing is to avoid pushing the changes — as long as you haven't pushed, the mistake stays on your computer and is easy to fix.

## Build issues

**Build fails with "broken links" error**

The site is strict about links — every markdown link must point to a real file, and every anchor must exist in the target page. Check the error message for the specific broken link, then fix the path or remove the link.

Common causes:

- Typo in the file path
- Someone renamed or moved the target file
- A heading anchor that doesn't match (anchors are auto-generated from heading text, so changing a heading changes its anchor)

---

**Build fails with "broken markdown links" error**

This is similar to the broken links error but specific to markdown-style links (`[text](path)`). Verify that the link path is relative and points to a file that exists. Double-check the file extension — links should point to `.md` files, not `.html`.

## Pull request issues

**Don't see the "Create pull request" prompt on GitHub**

The prompt banner only appears briefly after you push a branch. If you don't see it:

1. Go to the [Pull requests](https://github.com/netwrix/docs/pulls) tab.
2. Click **New pull request**.
3. Set the "base" branch to **dev**.
4. Select your branch from the "compare" dropdown.
5. Click **Create pull request**.

---

**Automated checks fail on your PR**

Click **Details** next to the failed check to see what went wrong.

- **Style check failures (Vale)** are auto-fixed — you don't need to fix those manually.
- **Build failures** usually mean a broken link. The error message tells you which link is broken and in which file.

If you can't figure out the failure, ask the docs team for help.

## Quick reference: common Git commands

| Command | What it does |
|---------|-------------|
| `git status` | See what files you've changed |
| `git checkout dev` | Switch to the dev branch |
| `git pull` | Get the latest changes from GitHub |
| `git checkout -b <branch-name>` | Create a new branch |
| `git add <file>` | Stage a specific file for commit |
| `git add .` | Stage all changed files |
| `git commit -m "message"` | Commit staged changes with a description |
| `git commit -am "message"` | Stage and commit tracked files in one step (doesn't add new files) |
| `git push -u origin <branch-name>` | Push your branch to GitHub |
| `git log --oneline` | See recent commit history |
| `git diff` | See what you've changed since your last commit |

## Still stuck?

Ask someone on the docs team. No question is too small — everyone has been new to this. You can also review [GETTING_STARTED.md](GETTING_STARTED.md) for the full setup walkthrough, or check [CONTRIBUTING.md](CONTRIBUTING.md) for the streamlined workflow reference.
