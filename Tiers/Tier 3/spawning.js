var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepair = require('role.repair');
var roleCollector = require('role.collector');
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
        if(creep.memory.role == 'repairs') {
            roleRepair.run(creep);
        }
        if(creep.memory.role == 'collector') {
            roleCollector.run(creep);
        }
    }
    if(Game) {
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    var repairs = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairs');
    var collectors = _.filter(Game.creeps, (creep) => creep.memory.role == 'collector');
    var collectors_length = collectors.length;
    var harvesters_length = harvesters.length;
    var builders_length = builders.length;
    var upgraders_length = upgraders.length;
    var repairs_length = repairs.length;
    }
    var energyAvailable = Game.rooms['E21S57'].energyAvailable
      console.log('Total Energy:' + energyAvailable)


    //RC1 Default worker Spawning
    if(harvesters_length == 0 && energyAvailable <= 400 && collectors_length > 0) {
        var newName = 'Harvester: ' + Game.time;
        console.log('Spawning new Harvester: ' + newName);
        Game.spawns['Spawn1'].spawnCreep(config.default_creep_configuration, newName, 
            {memory: {role: 'harvester',
                      transferring: false}});
    }
    //RC1 Collector Spawning
    if(collectors_length == 0 && energyAvailable <= 550) {
        var newName = 'Collector: ' + Game.time;
        console.log('Spawning new collector ' + newName);
        Game.spawns['Spawn1'].spawnCreep(config.rc1_body_collectors, newName, 
            {memory: {role: 'collector'}});
    }
    //RC2 Harvester Spawning
        if(harvesters_length < config.rc2_total_harvesters && energyAvailable >= 400 && energyAvailable < 800 && collectors_length == config.rc2_total_collectors) {
        var newName = 'Harvester' + Game.time;
        console.log('Spawning new harvester: ' + newName);
        Game.spawns['Spawn1'].spawnCreep(config.rc2_body_harvester, newName, 
            {memory: {role: 'harvester',
                      transferring: false}});
    }
    //RC2 Builder Spawning
    if(builders_length < config.rc2_total_builders && energyAvailable >= 400 && harvesters_length == config.rc2_total_harvesters && energyAvailable < 800)  {
        var newName = 'Builder: ' + Game.time;
        console.log('Spawning new builder: ' + newName);
        Game.spawns['Spawn1'].spawnCreep(config.rc2_body_builder, newName, 
            {memory: {role: 'builder'}});
    }
    //RC2 Collector Spawning
    if(collectors_length < config.rc2_total_collectors && energyAvailable >= 550 && energyAvailable < 800)  {
        var newName = 'Collector: ' + Game.time;
        console.log('Spawning new collector: ' + newName);
        Game.spawns['Spawn1'].spawnCreep(config.rc2_body_collectors, newName, 
            {memory: {role: 'collector'}});
    }
    //RC2 upgraders Spawning
    if(upgraders_length < config.rc2_total_upgraders && energyAvailable >= 400 && harvesters_length == config.rc2_total_harvesters && energyAvailable < 800) {
        var newName = 'Upgrader: ' + Game.time;
        console.log('Spawning new upgrader: ' + newName);
        Game.spawns['Spawn1'].spawnCreep(config.rc2_body_upgrader, newName, 
            {memory: {role: 'upgrader'}});
    }
    //RC2 Repairs Spawning
    if(repairs_length < config.rc2_total_repairs && energyAvailable >= 400 && harvesters_length == config.rc2_total_harvesters && energyAvailable < 800) {
        var newName = 'Repairs: ' + Game.time;
        console.log('Spawning new repair: ' + newName);
        Game.spawns['Spawn1'].spawnCreep(config.rc2_body_repairs, newName, 
            {memory: {role: 'repairs'}});
            
    }
        
        
    //RC3 SPAWNING SECTION
    //RC# Harvester Spawning
    if(harvesters_length < config.r32_total_harvesters && energyAvailable >= 800 && collectors_length == config.rc3_total_collectors) {
        var newName = 'Harvester' + Game.time;
        console.log('Spawning new harvester: ' + newName);
        Game.spawns['Spawn1'].spawnCreep(config.rc3_body_harvester, newName, 
            {memory: {role: 'harvester',
                      transferring: false}});
    }
    //RC3 Builder Spawning
    if(builders_length < config.rc3_total_builders && energyAvailable >= 800 && harvesters_length == config.rc3_total_harvesters )  {
        var newName = 'Builder: ' + Game.time;
        console.log('Spawning new builder: ' + newName);
        Game.spawns['Spawn1'].spawnCreep(config.rc3_body_builder, newName, 
            {memory: {role: 'builder'}});
    }
    //RC3 upgraders Spawning
    if(upgraders_length < config.rc3_total_upgraders && energyAvailable >= 800 && harvesters_length == config.rc3_total_harvesters) {
        var newName = 'Upgrader: ' + Game.time;
        console.log('Spawning new upgrader: ' + newName);
        Game.spawns['Spawn1'].spawnCreep(config.rc3_body_upgrader, newName, 
            {memory: {role: 'upgrader'}});
    }
    //RC3 Repairs Spawning
    if(repairs_length < config.rc3_total_repairs && energyAvailable >= 800 && harvesters_length == config.rc3_total_harvesters) {
        var newName = 'Repairs: ' + Game.time;
        console.log('Spawning new repair: ' + newName);
        Game.spawns['Spawn1'].spawnCreep(config.rc3_body_repairs, newName, 
            {memory: {role: 'repairs'}});
            
    }
 //RC3 Collector Spawning
    if(collectors_length < config.rc3_total_collectors && energyAvailable >= 800)  {
        var newName = 'Collector: ' + Game.time;
        console.log('Spawning new collector: ' + newName);
        Game.spawns['Spawn1'].spawnCreep(config.rc3_body_collectors, newName, 
            {memory: {role: 'collector'}});
    }
    //Spawn Function
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
    //Current Workforce Logging
    console.log('Harvesters: ' + harvesters_length + '/' + config.rc3_total_harvesters);
    console.log('Builders: ' + builders_length + '/' + config.rc3_total_builders);
    console.log('Upgraders: ' + upgraders_length + '/' + config.rc3_total_upgraders);
    console.log('Repairs: ' + repairs_length + '/' + config.rc3_total_repairs);
    console.log('Collectors: ' + collectors_length + '/' + config.rc3_total_collectors);
}

module.exports = spawning;