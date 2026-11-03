---
sidebar_position: 3
sidebar_label: Updating PingCastle
description: Update PingCastle by running PingCastleAutoUpdater.exe, and review the command line options for preview releases, delayed updates, and forced downloads.
---
# Updating PingCastle

PingCastle includes `PingCastleAutoUpdater.exe`, which downloads the latest release from GitHub releases.

## Update PingCastle

To update PingCastle, double-click `PingCastleAutoUpdater.exe` in the PingCastle folder. The updater downloads the latest release from GitHub. You don't need to pass any options.

## Run the updater from the command line

Run the updater from a command prompt to change which release it downloads, or to script updates. Add the options after the executable name:

```
PingCastleAutoUpdater.exe --wait-for-days 30
```

This example downloads only releases that have been publicly available for at least 30 days.

### Command line options

| Option | Description |
|--------|-------------|
| `--api-url <url>` | Specify a PingCastle Enterprise instance URL to download updates directly from your Enterprise installation instead of GitHub |
| `--use-preview` | Download the latest beta release from GitHub (if available) |
| `--force-download` | Force download of the latest release even if it's not newer than the current version. Useful for testing |
| `--wait-for-days <number>` | Only download releases that have been publicly available for at least the specified number of days (e.g., `--wait-for-days 30`) |
