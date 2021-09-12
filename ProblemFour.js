class Factory {
    constructor() {
        this.createWeapon = function(type) {
            var weapon;

            if (type === "gun") {
                weapon = new Gun();
            } else if (type === "knife") {
                weapon = new Knife();
            } else if (type === "bow") {
                weapon = new Bow();
            }

            weapon.type = type;

            weapon.InflictDamage = function() {
                document.write(this.type + " " + this.action + " for " + this.damage + " damage!<br>");
            };

            return weapon;
        };
    }
}

class Gun {
    constructor() {
        this.damage = 30;
        this.action = "shoots";
    }
}

class Knife {
    constructor() {
        this.damage = 10;
        this.action = "stabs";
    }
}

class Bow {
    constructor() {
        this.damage = 20;
        this.action = "shoots";
    }
}

var weapons = [];
var factory = new Factory();

weapons.push(factory.createWeapon("gun"));
weapons.push(factory.createWeapon("knife"));
weapons.push(factory.createWeapon("bow"));

for (let i = 0; i < weapons.length; i++) {
    weapons[i].InflictDamage();

}