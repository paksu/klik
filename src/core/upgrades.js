export const UPGRADES = {
  /*
  * SALES_GUY
  */

  1: {
    id: 1,
    name: "Bathroom minigolf",
    effect: "Doubles profits from sales guy",
    flavour: "Amazing sport. Doubles profits from sales guy",
    icon: "game-icon-green game-icon game-icon-golf-flag",
    cost: 1000,
    factor: 1,
    visibleAfter: 100,
    buildingId: 'SALES_GUY'
  },
  2: {
    id: 2,
    name: "Sales bell",
    effect: "2x profit from Sales guy",
    flavour: "A good competition will increase sales",
    icon: "game-icon-yellow game-icon game-icon-ringing-bell",
    cost: 10000,
    factor: 1,
    visibleAfter: 1000,
    buildingId: 'SALES_GUY'
  },
  3: {
    id: 3,
    name: "Nokia 3210",
    effect: "Sales Guy profits increased 100%",
    flavour: "This gadget makes cold calling more efficient",
    icon: "game-icon-purple game-icon game-icon-phone",
    cost: 1e5,
    factor: 1,
    visibleAfter: 10000,
    buildingId: 'SALES_GUY',
  },
  4: {
    id: 4,
    name: "Company car",
    effect: "2x profit from Sales Guy",
    flavour: "You can sell more if you travel faster",
    icon: "game-icon-cyan game-icon game-icon-city-car",
    cost: 1e6,
    factor: 1,
    visibleAfter: 1e5,
    buildingId: 'SALES_GUY',
  },

  /*
  * JUNIOR_DEVELOPER
  */

  5: {
    id: 5,
    name: "Better computers",
    effect: "Junior developer profit x2",
    flavour: "Yay! New hardware",
    icon: "game-icon-yellow game-icon game-icon-abstract-007",
    cost: 15000,
    factor: 1,
    visibleAfter: 1000,
    buildingId: 'JUNIOR_DEVELOPER',
  },
  6: {
    id: 6,
    name: "Infinite soda",
    effect: "Jr dev profits increased 100%",
    flavour: "Soda + code = productivity++",
    icon: "game-icon-purple game-icon game-icon-anchor",
    cost: 150000,
    factor: 1,
    visibleAfter: 20000,
    buildingId: 'JUNIOR_DEVELOPER'
  },
  7: {
    id: 7,
    name: "LSD",
    effect: "100% profit increase for Jr dev",
    flavour: "Dropping some acid really boosts creativity",
    icon: "game-icon-green game-icon game-icon-acid",
    cost: 1.5e6,
    factor: 1,
    visibleAfter: 200000,
    buildingId: 'JUNIOR_DEVELOPER'
  },
  8: {
    id: 8,
    name: "Faster WiFi",
    effect: "Jr devs work faster. 2x profits",
    flavour: "Yay! Faster internet!",
    icon: "game-icon-red game-icon game-icon-aerial-signal",
    cost: 1e6,
    factor: 1,
    visibleAfter: 1e5,
    buildingId: 'JUNIOR_DEVELOPER',
  },
}
