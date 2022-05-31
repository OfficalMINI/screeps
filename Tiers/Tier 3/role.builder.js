var roleBuilder = {
    /** @param {Creep} creep **/
    run: function(creep) {
	var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
        var config = require('config');
        if(creep.memory.building == false) {
            var sources = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
            if(creep.pickup(sources) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
	    if(creep.store[RESOURCE_ENERGY] == 0) {
	        creep.memory.building = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.building && creep.store.getFreeCapacity() == 0) {
	        creep.memory.building = true;
	        creep.say('🚧 build');
	    }
	    if(creep.memory.building == true && creep.store[RESOURCE_ENERGY] > 0) {
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
	    }
	}
	
	
};

module.exports = roleBuilder;