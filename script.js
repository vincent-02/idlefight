let xp = 0;
let max = 100;
let level = 1;
let power = level;
let gold = 0;
let steel_sword_purchased = false;

function fight() {
  xp += power;
  gold += level;
  document.getElementById('gold').innerHTML="$" + gold;
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

function purchasesteelsword() {
  if (steel_sword_purchased) {
    if (gold >= 50) {
      power += 5;
    }
  }
}