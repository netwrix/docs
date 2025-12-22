---
title: "How can I make all files in a folder, or all files in all recursive folders Elevated, Blocked, or Allow & Log?"
description: "How can I make all files in a folder, or all files in all recursive folders Elevated, Blocked, or Allow & Log?"
sidebar_position: 10
---

# How can I make all files in a folder, or all files in all recursive folders Elevated, Blocked, or Allow & Log?

There are two methods to Elevate, Block or Allow&Log multiple files and folders.

**Method 1: Using FILE TYPE**.
For FILE target type, you have to specify a file path. For instance:

%programfiles%\Contoso\App.exe

%programfiles%\Contoso\\\*.exe

%programfiles%\\\*\DogFood.exe

**Method 2: Using FOLDER and/or Folder+ Recurse type**.

![478_1_2018-10-11_1352](/images/endpointpolicymanager/leastprivilege/elevate/478_1_2018-10-11_1352.webp)

you should specify a folder path, such as

%programfiles%\Contoso

%programfiles%\\\*

%programfiles%\\\*\DogFoodFolder

The difference between these two types is that

- The **Folder** path condition only applies to all files in the specified folder.
- The Folder (recursive) path condition applies to all Descendant files.


