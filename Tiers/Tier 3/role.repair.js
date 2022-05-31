var roleRepair = {
    /** @param {Creep} creep **/
    run: function(creep) {
	var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
    //repair
    const repair_targets = creep.room.find(FIND_STRUCTURES, {
    filter: object => object.hits < object.hitsMax});
        var config = require('config');
        if(creep.memory.repairing == false) {
            var sources = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
            if(creep.pickup(sources) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
	    if(creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.repairing = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.repiaring && creep.store.getFreeCapacity() == 0) {
                creep.memory.repairing = true;
	            creep.say('🚧 repair');
	    }
	if(creep.memory.repairing == true) {
    repair_targets.sort((a,b) => a.hits - b.hits);
    if(repair_targets.length > 0) {
        if(creep.repair(repair_targets[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(repair_targets[0]);
        }
        }
    }
	}
	
	
};

module.exports = roleRepair;