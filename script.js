let xp = 0;
let max = 100;
let level = 1;
let power = level;

function fight() {
  xp += power;
  document.getElementById('experience').value = xp;
  if (xp >= max) {
    xp -= max;
    max *= 2.25;
    max = Math.round(max);
    level += 1;
    power = level;
    document.getElementById('level').innerHTML = 'Level: ' + level;
    document.getElementById('experience').max = max;
    document.getElementById('experience').value = xp;
  }
}

function purchase(item) {
  this.item = item;
  if (item = "steel_sword".toLowerCase()) {
    power += 2;
  }
}