var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var config = require('config')
//Memory Filter
//Spawning Function
var spawning = () => {



    //Check if harvesters less than x
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    if(harvesters.length < config.total_harvesters) {
        var newName = 'Harvester' + Game.time;
        console.log('Spawning new harvester: ' + newName);
        Game.spawns['Spawn1'].spawnCreep(config.phase1_body_harvester, newName, 
            {memory: {role: 'harvester'}});
    }
    if(builders.length < config.total_builders) {
        var newName = 'Builder: ' + Game.time;
        console.log('Spawning new builder: ' + newName);
        Game.spawns['Spawn1'].spawnCreep(config.phase1_body_builder, newName, 
            {memory: {role: 'builder'}});
    }
    if(upgraders.length < config.total_upgraders) {
        var newName = 'Upgrader: ' + Game.time;
        console.log('Spawning new upgrader: ' + newName);
        Game.spawns['Spawn1'].spawnCreep(config.phase1_body_upgrader, newName, 
            {memory: {role: 'upgrader'}});
    }
    if(Game.spawns['Spawn1'].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
        Game.spawns['Spawn1'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Spawn1'].pos.x + 1, 
            Game.spawns['Spawn1'].pos.y, 
            {align: 'left', opacity: 0.8});
    }
    
        for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
    console.log(upgraders)
    //Current Workforce Logging
    console.log('Harvesters: ' + harvesters.length + '/' + config.total_harvesters);
    console.log('Builders: ' + builders.length + '/' + config.total_builders);
    console.log('Upgraders: ' + upgraders.length + '/' + config.total_upgraders);
}

module.exports = spawning;