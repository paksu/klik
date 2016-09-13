export const UPGRADES = {
  1: {
    id: 1,
    name: "Better computers",
    flavour: "Yay! New hardware",
    icon: "game-icon-green game-icon game-icon-abstract-007",
    cost: 1000,
    factor: 1,
    visibleAfter: 100,
    buildingId: 'JUNIOR_DEVELOPER',
  },
  2: {
    id: 2,
    name: "Infinite soda",
    flavour: "Soda + code = productivity++",
    icon: "game-icon-yellow game-icon game-icon-anchor",
    cost: 1000,
    factor: 1,
    visibleAfter: 50,
    buildingId: 'JUNIOR_DEVELOPER'
  },
  3: {
    id: 3,
    name: "LSD",
    flavour: "Dropping some acid really boosts creativity",
    icon: "game-icon-red game-icon game-icon-acid",
    cost: 10000,
    factor: 1,
    visibleAfter: 1000,
    buildingId: 'JUNIOR_DEVELOPER'
  },
  4: {
    id: 4,
    name: "Faster WiFi",
    flavour: "Yay! New hardware",
    icon: "game-icon-green game-icon game-icon-aerial-signal",
    cost: 100000,
    factor: 1,
    visibleAfter: 100,
    buildingId: 'JUNIOR_DEVELOPER',
  },
  5: {
    id: 5,
    name: "Free beer on fridays",
    flavour: "People really want to come to work on fridays",
    icon: "game-icon-yellow game-icon game-icon-beer-stein",
    cost: 10000,
    factor: 1,
    visibleAfter: 100,
    buildingId: 'JUNIOR_DEVELOPER'
  },
  6: {
    id: 6,
    name: "LSD",
    flavour: "Dropping some acid really boosts creativity",
    icon: "game-icon-red game-icon game-icon-acid",
    cost: 10000,
    factor: 1,
    visibleAfter: 1000,
    buildingId: 'JUNIOR_DEVELOPER'
  },
  7: {
    id: 7,
    name: "Free coffins",
    flavour: "You never now when you need one",
    icon: "game-icon-green game-icon game-icon-coffin",
    cost: 1000,
    factor: 1,
    visibleAfter: 100,
    buildingId: 'JUNIOR_DEVELOPER',
  },
  8: {
    id: 8,
    name: "Bathroom minigolf",
    flavour: "Amazing sport",
    icon: "game-icon-yellow game-icon game-icon-golf-flag",
    cost: 1000,
    factor: 1,
    visibleAfter: 50,
    buildingId: 'JUNIOR_DEVELOPER'
  },
  9: {
    id: 9,
    name: "Better headphones",
    flavour: "Music makes working more productive",
    icon: "game-icon-red game-icon game-icon-headphones",
    cost: 10000,
    factor: 1,
    visibleAfter: 1000,
    buildingId: 'JUNIOR_DEVELOPER'
  },
  10: {
    id: 10,
    name: "Better computers",
    flavour: "Yay! New hardware",
    icon: "game-icon-green game-icon game-icon-abstract-007",
    cost: 1000,
    factor: 1,
    visibleAfter: 100,
    buildingId: 'JUNIOR_DEVELOPER',
  },
  11: {
    id: 11,
    name: "Infinite soda",
    flavour: "Soda + code = productivity++",
    icon: "game-icon-yellow game-icon game-icon-anchor",
    cost: 1000,
    factor: 1,
    visibleAfter: 50,
    buildingId: 'JUNIOR_DEVELOPER'
  },
  12: {
    id: 12,
    name: "LSD",
    flavour: "Dropping some acid really boosts creativity",
    icon: "game-icon-red game-icon game-icon-acid",
    cost: 10000,
    factor: 1,
    visibleAfter: 1000,
    buildingId: 'JUNIOR_DEVELOPER'
  },
}

const building = {
  id: "BUILDING",
  name: "building",
  icon: "game-icon-red game-icon game-icon-meditation game-icon-8x",
  description: "just a building",
  count: 0,
  initialCost: 2,
  incomeFactor: 1,
  cost: 2,
  visibleAfter: 0,
}

export const BUILDINGS = {
  "SALES_GUY": {
    ...building,
    id: "SALES_GUY",
    name: "Sales guy",
    icon: "game-icon-green game-icon game-icon-meditation game-icon-4x",
    description: "These guys can start selling even without a complete product",
    income: 1,
  },
  "JUNIOR_DEVELOPER": {
    ...building,
    id: "JUNIOR_DEVELOPER",
    name: "Junior Developer",
    icon: "game-icon game-icon-cake-slice game-icon-4x",
    description: "Cheap labour that can hack stuff together",
    initialCost: 50,
    cost: 50,
    visibleAfter: 10,
    income: 2
  },
  "DESIGNER": {
    ...building,
    id: "DESIGNER",
    name: "Designer",
    icon: "game-icon-red game-icon game-icon-fountain-pen game-icon-4x",
    description: "Want to start making real money? You need kick ass design",
    initialCost: 500,
    cost: 500,
    visibleAfter: 100,
    income: 25
  },
  "SOFTWARE_ENGINEER": {
    ...building,
    id: "SOFTWARE_ENGINEER",
    name: "Software Engineer",
    icon: "game-icon-yellow game-icon game-icon-gear-hammer game-icon-4x",
    description: "Software engieneering is the establishment and use of sound engineering principles in order to economically obtain software that is reliable and works efficiently on real machines.",
    initialCost: 1500,
    cost: 1500,
    visibleAfter: 500,
    income: 65
  },
  "CONSULTANT": {
    ...building,
    id: "CONSULTANT",
    name: "Consultant",
    icon: "game-icon-purple game-icon game-icon-book-cover-2 game-icon-4x",
    description: "CGI & Tieto & Accenture = Holy trinity",
    initialCost: 10000,
    cost: 10000,
    visibleAfter: 1000,
    income: 200
  },
  "MIDDLE_MANAGER": {
    ...building,
    id: "MIDDLE_MANAGER",
    name: "Middle manager",
    icon: "game-icon-light-green game-icon game-icon-slavery-whip game-icon-4x",
    description: "Most important person in the company. Middle management is the intermediate management of a hierarchical organization that is subordinate to the executive management and responsible for at least two lower levels of junior staff",
    initialCost: 100000,
    cost: 100000,
    visibleAfter: 10000,
    income: 2000
  },
  "CEO": {
    ...building,
    id: "CEO",
    name: "CEO",
    icon: "game-icon-cyan game-icon game-icon-crowned-skull game-icon-4x",
    description: " the most senior corporate officer, executive, or administrator in charge of managing an organization",
    initialCost: 100000,
    cost: 100000,
    visibleAfter: 10000,
    income: 2000
  }
}
