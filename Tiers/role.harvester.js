var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.store.getFreeCapacity() > 0) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_SPAWN ||
                                structure.structureType == STRUCTURE_TOWER) && 
                                structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
                    // Switch to upgrader if no possible drop off
	                var build_targets = creep.room.find(FIND_CONSTRUCTION_SITES);
                        if(targets.length && (!targets[0])) {
                             if(creep.build(build_targets[0]) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(build_targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
                    if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE && (!targets[0])) {
                    creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
                    creep.say('⚡ upgrade');
                }            
            }
        }
	}


module.exports = roleHarvester;