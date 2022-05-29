/********************
CREEP CONFIGURATION
********************/
//Starter Unit Configuration
var default_creep_configuration = '';
//Phase 1 Harvester Configuration
var phase1_body_harvester = [WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE];
//Phase 1 Builder Configuration
var phase1_body_builder = [WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE];
//Phase 1 Upgrader Configuration
var phase1_body_upgrader = [WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE];

/********************
SPAWN CONFIGURATION
********************/
var total_harvesters = 4;
var total_builders = 2;
var total_upgraders = 2;

/********************
RESOURCE CONFIGURATION
********************/
var harvesters_collect_from = 0;
var builders_collect_from = 1;
var upgraders_collect_from = 1;









module.exports = { default_creep_configuration, phase1_body_harvester, phase1_body_upgrader, phase1_body_builder, total_harvesters, total_builders, total_upgraders, harvesters_collect_from, builders_collect_from, upgraders_collect_from};
