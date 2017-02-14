# OpenLayers 4 Lab
* [ol4-lab](https://github.com/ca0v/ol4-lab).

This is a very early attempt and creating a custom build.  It requires manually moving nested node_modules
to flatten them out as siblings to "ol".

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

The resulting output file `./built/index.js` is 29k lines of code.
Compare that to the 91k in ol-debug.js.

## Examples

* [v4.0.1](https://rawgit.com/ca0v/ol4-lab/v4.0.1/rawgit.html)
* [master](https://rawgit.com/ca0v/ol4-lab/master/rawgit.html)

## Build

* npm install
* tsc -w

## Consume

* `typings install ol4-lab=github:ca0v/ol4-lab/built/index.d.ts#v4.0.1 --global --save`
* `bower install ol4-lab=git://github.com/ca0v/ol4-lab.git#v4.0.1 --save`
