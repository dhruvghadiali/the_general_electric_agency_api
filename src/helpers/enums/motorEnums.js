/**
 * Motor category enumeration
 * Defines commonly used motor categories
 */
const MOTOR_CATEGORY = Object.freeze({
  SINGLE_PHASE: "single Phase",
  THREE_PHASE: "three Phase",
  FLAMEPROOF: "flameproof",
  INDUCTION_MOTOR: "induction motor",
  BRAKE_MOTOR: "brake motor",
  INVERTER_DUTY: "inverter duty",
  CUSTOM: "custom",
});

const MOTOR_MANUFACTURER = Object.freeze({
  CG: "cg power and industrial solutions",
});

const MOTOR_POLE_COUNT = Object.freeze({
  TWO_POLE: 2,
  FOUR_POLE: 4,
  SIX_POLE: 6,
  EIGHT_POLE: 8,
});

const MOTOR_PHASE = Object.freeze({
  SINGLE_PHASE: "single phase",
  THREE_PHASE: "three phase",
});

const MOTOR_VOLTAGE_RATING = Object.freeze({
  V_230: "230v",
  V_415: "415v",
  V_110: "110v",
  V_440: "440v",
});

const MOTOR_MOUNTING_TYPE = Object.freeze({
  B3: "b3",
  B5: "b5",
  B35: "b35",
  B14: "b14",
  FOOT_MOUNTED: "foot mounted",
  FLANGE_MOUNTED: "flange mounted",
});

const MOTOR_EFFICIENCY_CLASS = Object.freeze({
  IE1: "ie1",
  IE2: "ie2",
  IE3: "ie3",
  IE4: "ie4",
  STANDARD: "standard",
});

const MOTOR_INSULATION_CLASS = Object.freeze({
  A: "a",
  B: "b",
  F: "f",
  H: "h",
});

const MOTOR_PROTECTION_RATING = Object.freeze({
  IP_44: "ip44",
  IP_55: "ip55",
  IP_56: "ip56",
  IP_65: "ip65",
});

const MOTOR_STARTING_METHOD = Object.freeze({
    DOL: "dol",
    STAR_DELTA: "star delta",
    VFD: "vfd",
    SOFT_STARTER: "soft starter",
});

const MOTOR_FREQUENCY = Object.freeze({
  FREQ_50HZ: 50,
  FREQ_60HZ: 60,
});

module.exports = {
  MOTOR_PHASE,
  MOTOR_CATEGORY,
  MOTOR_FREQUENCY,
  MOTOR_POLE_COUNT,
  MOTOR_MANUFACTURER,
  MOTOR_MOUNTING_TYPE,
  MOTOR_VOLTAGE_RATING,
  MOTOR_STARTING_METHOD,
  MOTOR_EFFICIENCY_CLASS,
  MOTOR_INSULATION_CLASS,
  MOTOR_PROTECTION_RATING,
};
