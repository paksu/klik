export const getNextCostN = (initialCost, currentCount, n=1) => {
  // Get cost of next n buildings
  const costN = initialCost * (Math.pow(1.15, currentCount + n) - Math.pow(1.15, currentCount)) / 0.15
  return Math.ceil(costN);
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
};

export const BUILDINGS = [{
    ...building,
    id: "SALES_GUY",
    name: "Sales guy",
    icon: "game-icon-green game-icon game-icon-meditation game-icon-2x",
    description: "These guys can start selling even without a complete product",
    income: 1,
    cost: 15,
    initialCost: 15
  }, {
    ...building,
    id: "JUNIOR_DEVELOPER",
    name: "Junior Developer",
    icon: "game-icon game-icon-cake-slice game-icon-2x",
    description: "Cheap labour that can hack stuff together",
    initialCost: 100,
    cost: 100,
    visibleAfter: 10,
    income: 5
  }, {
    ...building,
    id: "DESIGNER",
    name: "Designer",
    icon: "game-icon-red game-icon game-icon-fountain-pen game-icon-2x",
    description: "Want to start making real money? You need kick ass design",
    initialCost: 1000,
    cost: 1000,
    visibleAfter: 100,
    income: 75
  }, {
    ...building,
    id: "SOFTWARE_ENGINEER",
    name: "Software Engineer",
    icon: "game-icon-yellow game-icon game-icon-gear-hammer game-icon-2x",
    description: "Software engineering is the establishment and use of sound engineering principles in order to economically obtain software that is reliable and works efficiently on real machines.",
    initialCost: 12000,
    cost: 12000,
    visibleAfter: 1000,
    income: 450
  }, {
    ...building,
    id: "CONSULTANT",
    name: "Consultant",
    icon: "game-icon-purple game-icon game-icon-book-cover-2 game-icon-2x",
    description: "CGI & Tieto & Accenture = Holy trinity",
    initialCost: 130000,
    cost: 130000,
    visibleAfter: 10000,
    income: 2200
  }, {
    ...building,
    id: "MIDDLE_MANAGER",
    name: "Middle manager",
    icon: "game-icon-light-green game-icon game-icon-slavery-whip game-icon-2x",
    description: "Most important person in the company. Middle management is the intermediate management of a hierarchical organization that is subordinate to the executive management and responsible for at least two lower levels of junior staff",
    initialCost: 1.4e6,
    cost: 1.4e6,
    visibleAfter: 100000,
    income: 14000
  }, {
    ...building,
    id: "CEO",
    name: "CEO",
    icon: "game-icon-cyan game-icon game-icon-crowned-skull game-icon-2x",
    description: " the most senior corporate officer, executive, or administrator in charge of managing an organization",
    initialCost: 20e6,
    cost: 20e6,
    visibleAfter: 1e6,
    income: 1e5
  }
]
