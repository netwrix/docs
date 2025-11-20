---
title: "How to get SHA of the package"
description: "How to get SHA of the package"
sidebar_position: 40
---

# How to get SHA of the package

`shasum -a 256 /path/to/file`

Here are some examples:

```
Mac-mini ~ % shasum /Users/sashadaft/Downloads/SkypeForBusinessInstaller-16.29.0.72.pkg 
9f49be907f0ab240f7878a27309fc74c725fa445 
/Users/sashadaft/Downloads/SkypeForBusinessInstaller-16.29.0.72.pkg
```

```

Mac-mini ~ % shasum -a 256 /Users/sashadaft/Downloads/SkypeForBusinessInstaller-16.29.0.72.pkg  
02e50ee62e5bb940f71ae25a9c942db57013535db9ab18acd1be1383651ac951  
/Users/sashadaft/Downloads/SkypeForBusinessInstaller-16.29.0.72.pkg
```

```
Mac-mini ~ % shasum -a 512 /Users/sashadaft/Downloads/SkypeForBusinessInstaller-16.29.0.72.pkg  
819dadbaceae58fc24f48c6ddd187325619e82d4c8d7fb5744b4c966262f4d2fd0114541b6dbfdfad29431f1417c074d947285f4ab1bd2b002d57d1a0aa288fd  
/Users/sashadaft/Downloads/SkypeForBusinessInstaller-16.29.0.72.pkg
```


