# fs-stats-spys

Count filesystem entries by type while visiting them. The returned function records calls for directories, files, symbolic links, and all entries.

```bash
npm install fs-stats-spys
```

```js
var assert = require('assert');
var statsSpys = require('fs-stats-spys');

var spys = statsSpys();
function entry(type) {
  return {
    isSymbolicLink: function () { return type === 'link'; },
    isDirectory: function () { return type === 'dir'; },
    isFile: function () { return type === 'file'; }
  };
}

spys(entry('dir'));
spys(entry('file'));
spys(entry('link'));

assert.equal(spys.callCount, 3);
assert.equal(spys.dir.callCount, 1);
assert.equal(spys.file.callCount, 1);
assert.equal(spys.link.callCount, 1);
```

The same `spys` function accepts the `fs.Stats`, `fs.BigIntStats`, or `fs.Dirent` objects produced by filesystem APIs.
