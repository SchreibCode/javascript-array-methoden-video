const menu = [
    { name: "Hamburger Royal TS", calories: 515 },
    { name: "Milkshake Schokogeschmack", calories: 440 },
    { name: "Big Tasty Bacon", calories: 905 },
    { name: "Hamburger", calories: 255 },
    { name: "Fruchttüte", calories: 45 },
    { name: "6 Chicken McNuggets", calories: 250 },
    { name: "Big Mac", calories: 495 },
    { name: "Pommes Frites groß", calories: 470 },
];

// Array.find returned ein Element des Array
const bigMac = menu.find((item) => item.name === "Big Mac");

// Array.filter returned ein gefiltertes Array
const lightMenu = menu.filter((item) => item.calories < 300);

// Array.map returned ein verändertes Array in der selben Länge
const menuItemNames = menu.map((item) => item.name);

/*
 * Array.forEach returned gar nichts, also undefined
 * Wird häufig als schnellere Alternative zur for-Schleife benutzt
 * wenn man für jedes item etwas ausführen möchte
 */
menu.forEach((item) => console.log(item));

/*
 * Array.reduce reduziert ein Array auf einen einzigen Wert
 * Der Wert muss nichts mit dem Array zutun haben.
 */
const caloriesSum = menu.reduce((prevValue, item) => {
    return item.calories;
}, 0);
