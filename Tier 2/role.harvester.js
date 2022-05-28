var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        var config = require('config');
        if(creep.store[RESOURCE_ENERGY] == 0 && creep.memory.building == true) {
            creep.memory.building = false;
        }
        if(creep.store[RESOURCE_ENERGY] == 0 && creep.memory.transferring == true) {
            creep.memory.transferring = false;
        }
	    if(creep.store.getFreeCapacity() > 0 && creep.memory.building == false && creep.memory.transferring == false) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[config.harvesters_collect_from]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[config.harvesters_collect_from], {visualizePathStyle: {stroke: '#ffaa00'}});
                creep.say('Harvesting')
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
                creep.memory.building = false;
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.memory.transferring = true;
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
                    // Switch to upgrader if no possible drop off
	                var build_targets = creep.room.find(FIND_CONSTRUCTION_SITES);
                        if(build_targets.length && (!targets[0])) {
                            creep.memory.building = true;
                            creep.say('🚧 build');
                             if(creep.build(build_targets[0]) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(build_targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                                
                }
            }
                    if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE && (!targets[0]) && (!build_targets[0])){
                    creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
                    creep.say('⚡ upgrade');
                    }
                }            
            }
        }


       module.exports = roleHarvester;