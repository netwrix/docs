---
title: "Usercube-Configuration-Transform"
description: "Usercube-Configuration-Transform"
sidebar_position: 50
---

# Usercube-Configuration-Transform

This tool applies a series of transformations specified in a JSON file, on the content of a given directory.

## Example

The following example searches all occurrences of `Directory_User` in the files inside `C:/identitymanagerDemo/Conf` whose names:

- contain `guest` to replace all occurrences with `Directory_Guest`;
- contain `bot` to replace all occurrences with `Directory_Bot`.

The resulting files are saved in `C:/identitymanagerDemo/ConfTransformed`.

```json
**./Usercube-Configuration-Transform.exe --input "C:/identitymanagerDemo/Conf" --output "C:/identitymanagerDemo/ConfTransformed" --transformation-file "C:/identitymanagerDemo/*transformations.json*"**
```

***transformations.json***

```json
{
    "*guest*": {
        "Directory_User": "Directory_Guest"
    },
    "*bot*": {
        "Directory_User": "Directory_Bot"
    }
}
```

````
## Arguments

 | Argument Name | Details | 
 | --- | --- | 
 | --input   required | __Type__    String   __Description__ Path of the directory on which the transformations are to be applied. | 
 | --transformation-file   required | __Type__    String   __Description__ Path of the JSON file that contains the transformations to be applied.   The first half of the following JSON transformation file intends to search all files in the input directory whose names are ```filename``` (case-insensitively). In those files, any occurrence of ```ToBeReplaced``` (case-sensitively) is replaced with ```Replacement```.  ```{    "filename": {    "ToBeReplaced": "Replacement"    },    "partialfilename*": {    "ToBeReplaced2": "Replacement2"    }   }```  __Note:__ instead of a specific file name, Identity Manager can search for files whose names contain a specific string, using the character ```*```. | 
 | --- | --- | 
 | --- | --- | 
 | --output   required | __Type__    String   __Description__ Path of the folder where the result will be saved. | 
````
