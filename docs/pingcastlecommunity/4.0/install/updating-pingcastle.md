---
sidebar_position: 3
sidebar_label: Updating PingCastle
description: Update PingCastle with PingCastleAutoUpdater.exe and review its command line options.
---
# Updating PingCastle

PingCastle includes `PingCastleAutoUpdater.exe`, which automatically downloads the latest release from GitHub releases.

**Available Options**:

| Option | Description |
|--------|-------------|
| `--api-url <url>` | Specify a PingCastle Enterprise instance URL to download updates directly from your Enterprise installation instead of GitHub |
| `--use-preview` | Download the latest beta release from GitHub (if available) |
| `--force-download` | Force download of the latest release even if it's not newer than the current version. Useful for testing |
| `--wait-for-days <number>` | Only download releases that have been publicly available for at least the specified number of days (e.g., `--wait-for-days 30`) |
