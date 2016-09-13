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
