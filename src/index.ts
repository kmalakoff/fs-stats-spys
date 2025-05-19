import type { Stats } from 'fs';

function createSpy() {
  function spy(_stats?: Stats) {
    spy.callCount++;
  }
  spy.callCount = 0;
  return spy;
}

export default function statsSpys() {
  function spys(stats: Stats) {
    if (stats.isSymbolicLink()) spys.link(stats);
    else if (stats.isDirectory()) spys.dir(stats);
    else if (stats.isFile()) spys.file(stats);
    spys.callCount++;
  }
  spys.dir = createSpy();
  spys.file = createSpy();
  spys.link = createSpy();
  spys.callCount = 0;
  return spys;
}
