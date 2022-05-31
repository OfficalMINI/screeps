var roleCollector = {

    /** @param {Creep} creep **/
    run: function(creep) {
    var map_sources = creep.room.find(FIND_SOURCES);

    var config = require('config');
    var collectors_s1 = _.filter(Game.creeps, (creep) => creep.memory.source == map_sources[0]);
    var collectors_s2 = _.filter(Game.creeps, (creep) => creep.memory.source == map_sources[1]);

        if(!creep.memory.mining) {
            creep.memory.mining = false
        }
        
        if(collectors_s1.length <= config.total_slots_source_1) {
        var resources_list = map_sources;
        for(var i=0;i<resources_list.length;i++) {
        var resource = resources_list[0];
        var temp_1 = creep.room.lookForAtArea(LOOK_TERRAIN,resource.pos.y,resource.pos.x,resource.pos.y,resource.pos.x,true);
            for (let i = 0; i < temp_1.length; i++) {
            if(temp_1[i].terrain == 'plain' || 'swamp')
        if(creep.harvest(resource) == OK) {
            creep.cancelOrder('move');
        var move_x = temp_1[i].x;
        var move_y = temp_1[i].y;

        var find_s1 = creep.room.lookForAtArea(LOOK_SOURCES,move_y-2,move_x-2,move_y+2,move_x+2,true);
        var chosen_source = find_s1[0].source;
            creep.memory.source = chosen_source;
            }
            if(creep.memory.mining == false) {
                creep.moveTo(temp_1[i].x,temp_1[i].y, {visualizePathStyle: {stroke: '#ffaa00'}})
            }


        }
        }
        if(collectors_s1.length >= config.total_slots_source_1 && collectors_s2.length <= total_slots_source_2) {
        var resources_list = map_sources;
        for(var i=0;i<resources_list.length;i++) {
        var resource = resources_list[1];
        var temp_2 = creep.room.lookForAtArea(LOOK_TERRAIN,resource.pos.y,resource.pos.x,resource.pos.y,resource.pos.x,true);
            for (let i = 0; i < temp_2.length; i++) {
            if(temp_2[i].terrain == 'plain' || 'swamp')
        if(creep.harvest(resource) == OK) {
            creep.cancelOrder('move');
        var move_x = temp_2[i].x;
        var move_y = temp_2[i].y;

        var find_s1 = creep.room.lookForAtArea(LOOK_SOURCES,move_y-2,move_x-2,move_y+2,move_x+2,true);
        var chosen_source = find_s1[0].source;
            creep.memory.source = chosen_source;
            }
        }
        if(creep.memory.mining == true)
        {creep.harvest(resource)}
    }//}

        //console.log(move_x + ' ' + move_y)
        //if(creep.moveTo(move_x,move_y, {visualizePathStyle: {stroke: '#ffaa00'}}) == OK && creep.memory.mining == false)
        }
}
}
}
       module.exports = roleCollector;