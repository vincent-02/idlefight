let xp = 0;
let max = 100;
let level = 1;
let power = level;
let gold = 0;
let steel_sword_purchased = false;

function fight() {
  xp += power;
  gold += level;
  document.getElementById('gold').innerText="$" + gold;
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
  if (steel_sword_purchase == false) {
    if (gold >= 50) {
      power += 5;
      gold -= 50;
      document.getElementById('gold').innerText="$" + gold;
      document.getElementById('purchasesteelsword').style.backgroundColor = "gray";
      document.getElementById('purchasesteelsword').style.cursor = "not-allowed";
      steel_sword_purchased = true;
    }
  }
}