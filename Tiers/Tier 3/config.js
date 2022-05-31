/********************
GLOBAL SETTINGS
********************/
total_slots_source_1 = 4
total_slots_source_2 = 1
/********************
ROOM CONTROLLER 1
********************/
/********************
CREEP CONFIGURATION
********************/
//Starter Unit Configuration
var default_creep_configuration = [WORK,CARRY,MOVE];
var rc1_body_collectors = [MOVE,MOVE,WORK,WORK];
/********************
ROOM CONTROLLER 2
********************/
/********************
RC2 CREEP CONFIGURATION
********************/
//Room Controller 2 Harvester Configuration
var rc2_body_harvester = [WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE];
//Phase 1 Builder Configuration
var rc2_body_builder = [WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE];
//Phase 1 Upgrader Configuration
var rc2_body_upgrader = [WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE];
//Phase 1 Upgrader Configuration
var rc2_body_repairs = [WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE];
//Phase 1 Upgrader Configuration
var rc2_body_collectors = [MOVE,WORK,WORK,WORK,WORK,WORK];
/********************
RC2 SPAWN CONFIGURATION
********************/
var rc2_total_harvesters = 4;
var rc2_total_builders = 1;
var rc2_total_upgraders = 3;
var rc2_total_repairs = 2;
var rc2_total_collectors = total_slots_source_1 + total_slots_source_2;

/********************
RC2 RESOURCE CONFIGURATION
********************/
var rc2_harvesters_collect_from = 0;
var rc2_builders_collect_from = 0;
var rc2_upgraders_collect_from = 1;
var rc2_repairs_collect_from = 1;
var rc2_collector_collect_from = 1;
/********************
ROOM CONTROLLER 3
********************/
/********************
RC3 CREEP CONFIGURATION
********************/
//Room Controller 2 Harvester Configuration
var rc3_body_harvester = [MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY]; //800 Energy Cost
//Phase 1 Builder Configuration
var rc3_body_builder = [MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY]; //800 Energy Cost
//Phase 1 Upgrader Configuration
var rc3_body_upgrader = [MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY]; //800 Energy Cost
//Phase 1 Upgrader Configuration
var rc3_body_repairs = [MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY]; //800 Energy Cost
//Phase 1 Upgrader Configuration
var rc3_body_collectors = [MOVE,WORK,WORK,WORK,WORK,WORK]; //800 Cost
/******************** 
RC3 SPAWN CONFIGURATION
********************/
var rc3_total_harvesters = 4;
var rc3_total_builders = 1;
var rc3_total_upgraders = 3;
var rc3_total_repairs = 2;
var rc3_total_collectors = total_slots_source_1 + total_slots_source_2;

/********************
RC3 RESOURCE CONFIGURATION
********************/
var rc3_harvesters_collect_from = 0;
var rc3_builders_collect_from = 0;
var rc3_upgraders_collect_from = 1;
var rc3_repairs_collect_from = 1;








module.exports = { 
    default_creep_configuration,
    rc1_body_collectors,
    rc2_body_harvester, 
    rc2_body_upgrader, 
    rc2_body_builder, 
    rc2_total_harvesters, 
    rc2_total_builders, 
    rc2_total_upgraders, 
    rc2_harvesters_collect_from, 
    rc2_builders_collect_from, 
    rc2_upgraders_collect_from,
    rc2_body_repairs, 
    rc2_repairs_collect_from,
    rc2_total_repairs,
    rc3_body_harvester, 
    rc3_body_upgrader, 
    rc3_body_builder, 
    rc3_total_harvesters, 
    rc3_total_builders, 
    rc3_total_upgraders, 
    rc3_harvesters_collect_from, 
    rc3_builders_collect_from, 
    rc3_upgraders_collect_from,
    rc3_body_repairs, 
    rc3_repairs_collect_from,
    rc2_total_repairs,
    rc2_body_collectors,
    rc2_total_collectors,    
    rc3_total_repairs,
    rc3_body_collectors,
    rc3_total_collectors,
    total_slots_source_1,
    total_slots_source_2
};
