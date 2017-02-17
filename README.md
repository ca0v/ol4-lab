# OpenLayers 4 Lab
* [ol4-lab](https://github.com/ca0v/ol4-lab)

Attempts to create a custom build.

It required manually modifying rbush and quickselect.

For rbush:
```
import quickselect from 'quickselect';
export default rbush;
```

for quickselect:
```
export default partialSort;
```

Size Comparisions:
* Uncompressed output file [index.js](https://raw.githubusercontent.com/ca0v/ol4-lab/master/built/index.js) 
to [ol-debug.js](https://cdnjs.cloudflare.com/ajax/libs/ol3/4.0.1/ol-debug.js)
* Uglified output file [index-min.js](https://raw.githubusercontent.com/ca0v/ol4-lab/master/built/index-min.js) 
to more agressive closure [ol.js](https://cdnjs.cloudflare.com/ajax/libs/ol3/4.0.1/ol.js)

## Examples

* [v4.0.1](https://rawgit.com/ca0v/ol4-lab/v4.0.1/rawgit.html)
* [master](https://rawgit.com/ca0v/ol4-lab/master/rawgit.html)

## Build

* npm install
* tsc -w
