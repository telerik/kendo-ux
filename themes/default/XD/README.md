# Kendo Default Theme
 
The folder contains design files for the current Kendo Default theme used by designers and front-enders.
 

## Naming convention of files
Each component should be positioned in a separate XD file within this folder. The name of the file should follow the rule:
 
```
kendo-default-componentname.xd
```
 
Example:
 
```
kendo-default-grid.xd
```


## Naming of primitives within the files
The naming of primitives within the XD files should follow the rule "from the general to the specific". In the context of each file the general object is the component itself. Thus the naming should start with the name of the component. With a dash we could add the specifics after that. The level of granularity is up to the designer and depends on the context of the component.

```
componentname-variation-interactivestate-element.xd
```


```
button-flat-focused-shade.xd
```