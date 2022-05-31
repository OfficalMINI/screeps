var spawning = require('spawning');


module.exports.loop = function () {
    spawning()
    var tower = Game.getObjectById('629458951549705f5fce9a29');
    if(tower) {
        const repair_targets = tower.room.find(FIND_STRUCTURES, {
                filter: object => object.hits < object.hitsMax});
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }
        if(repair_targets) {
            tower.repair(repair_targets);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }
    
}
