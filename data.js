export const Targets = Object.freeze({
	SINGLE: 0,
	ALL: 1,
});

export const TargetType = Object.freeze({
	COGS: 0,
	TOONS: 1,
});

/**
 * Helper function for creating gag objects.
 * 
 * @param {String} name The name of the gag.
 * @param {Targets} targets How many targets the gag hits.
 * @param {Array} texInfo The texture sheet, row index, and column index.
 * @param {TargetType} targetType Which team the gag targets.
 * @returns 
 */
const createGag = (name, targets, texInfo, targetType = TargetType.COGS) => ({
	name,
	targets,
	targetType,
	tex: {
		sheet: texInfo[0],
		row: texInfo[1],
		col: texInfo[2],
	}
});

export const Gags = {
	"toon-up": {
		name: "Toon-Up",
		primaryColor: "#CD95F6",
		secondaryColor: "#543B66",
		gags: [
			createGag("Feather",         Targets.SINGLE, [1, 0, 0], TargetType.TOONS),
			createGag("Megaphone",       Targets.ALL,    [1, 0, 1], TargetType.TOONS),
			createGag("Lipstick",        Targets.SINGLE, [1, 0, 2], TargetType.TOONS),
			createGag("Bamboo Cane",     Targets.ALL,    [1, 0, 3], TargetType.TOONS),
			createGag("Pixie Dust",      Targets.SINGLE, [1, 1, 0], TargetType.TOONS),
			createGag("Juggling Cubes",  Targets.ALL,    [1, 1, 1], TargetType.TOONS),
			createGag("Confetti Cannon", Targets.SINGLE, [1, 1, 2], TargetType.TOONS),
			createGag("High Dive",       Targets.ALL,    [1, 1, 3], TargetType.TOONS),
		],
	},
	"trap": {
		name: "Trap",
		primaryColor: "#F34E4D",
		secondaryColor: "#6D2626",
		gags: [
			createGag("Banana Peel",   Targets.SINGLE, [1, 2, 0]),
			createGag("Rake",          Targets.SINGLE, [1, 2, 1]),
			createGag("Springboard",   Targets.SINGLE, [1, 2, 2]),
			createGag("Marbles",       Targets.SINGLE, [1, 2, 3]),
			createGag("Quicksand",     Targets.SINGLE, [1, 3, 0]),
			createGag("Trapdoor",      Targets.SINGLE, [1, 3, 1]),
			createGag("Wrecking Ball", Targets.SINGLE, [1, 3, 2]),
			createGag("TNT",           Targets.SINGLE, [1, 3, 3]),
		],
	},
	"lure": {
		name: "Lure",
		primaryColor: "#4FB74D",
		secondaryColor: "#285428",
		gags: [
			createGag("$1 Bill",       Targets.SINGLE, [2, 0, 0]),
			createGag("Small Magnet",  Targets.ALL,    [2, 0, 1]),
			createGag("$5 Bill",       Targets.SINGLE, [2, 0, 2]),
			createGag("Big Magnet",    Targets.ALL,    [2, 0, 3]),
			createGag("$10 Bill",      Targets.SINGLE, [2, 1, 0]),
			createGag("Hypno-goggles", Targets.ALL,    [2, 1, 1]),
			createGag("$50 Bill",      Targets.SINGLE, [2, 1, 2]),
			createGag("Presentation",  Targets.ALL,    [2, 1, 3]),
		],
	},
	"throw": {
		name: "Throw",
		primaryColor: "#F48D3F",
		secondaryColor: "#72401D",
		gags: [
			createGag("Cupcake",             Targets.SINGLE, [2, 0, 0]),
			createGag("Fruit Pie Slice",     Targets.SINGLE, [2, 0, 1]),
			createGag("Cream Pie Slice",     Targets.SINGLE, [2, 0, 2]),
			createGag("Birthday Cake Slice", Targets.SINGLE, [2, 0, 3]),
			createGag("Whole Fruit Pie",     Targets.SINGLE, [2, 1, 0]),
			createGag("Whole Cream Pie",     Targets.SINGLE, [2, 1, 1]),
			createGag("Birthday Cake",       Targets.SINGLE, [2, 1, 2]),
			createGag("Wedding Cake",        Targets.SINGLE, [2, 1, 3]),
		],
	},
	"squirt": {
		name: "Squirt",
		primaryColor: "#ED44BA",
		secondaryColor: "#6E2758",
		gags: [
			createGag("Squirting Flower", Targets.SINGLE, [3, 0, 0]),
			createGag("Glass of Water",   Targets.SINGLE, [3, 0, 1]),
			createGag("Squirt Gun",       Targets.SINGLE, [3, 0, 2]),
			createGag("Water Balloon",    Targets.SINGLE, [3, 0, 3]),
			createGag("Seltzer Bottle",   Targets.SINGLE, [3, 1, 0]),
			createGag("Fire Hose",        Targets.SINGLE, [3, 1, 1]),
			createGag("Storm Cloud",      Targets.SINGLE, [3, 1, 2]),
			createGag("Geyser",           Targets.SINGLE, [3, 1, 3]),
		],
	},
	"zap": {
		name: "Zap",
		primaryColor: "#F2F97B",
		secondaryColor: "#666826",
		gags: [
			createGag("Joy Buzzer",   Targets.SINGLE, [3, 2, 0]),
			createGag("Lightbulb",    Targets.SINGLE, [3, 2, 1]),
			createGag("Broken Radio", Targets.SINGLE, [3, 2, 2]),
			createGag("Kart Battery", Targets.SINGLE, [3, 2, 3]),
			createGag("Broken TV",    Targets.SINGLE, [3, 3, 0]),
			createGag("Stage Light",  Targets.SINGLE, [3, 3, 1]),
			createGag("Tesla Coil",   Targets.SINGLE, [3, 3, 2]),
			createGag("Lightning",    Targets.SINGLE, [3, 3, 3]),
		],
	},
	"sound": {
		name: "Sound",
		primaryColor: "#5A6BEB",
		secondaryColor: "#262C61",
		gags: [
			createGag("Kazoo",          Targets.ALL, [2, 2, 0]),
			createGag("Bike Horn",      Targets.ALL, [2, 2, 1]),
			createGag("Whistle",        Targets.ALL, [2, 2, 2]),
			createGag("Bugle",          Targets.ALL, [2, 2, 3]),
			createGag("Aoogah",         Targets.ALL, [2, 3, 0]),
			createGag("Elephant Trunk", Targets.ALL, [2, 3, 1]),
			createGag("Foghorn",        Targets.ALL, [2, 3, 2]),
			createGag("Opera Singer",   Targets.ALL, [2, 3, 3]),
		],
	},
	"drop": {
		name: "Drop",
		primaryColor: "#51EBF2",
		secondaryColor: "#1B6167",
		gags: [
			createGag("Flower Pot",   Targets.SINGLE, [4, 2, 0]),
			createGag("Sandbag",      Targets.SINGLE, [4, 2, 1]),
			createGag("Bowling Ball", Targets.SINGLE, [4, 2, 2]),
			createGag("Anvil",        Targets.SINGLE, [4, 2, 3]),
			createGag("Big Weight",   Targets.SINGLE, [4, 3, 0]),
			createGag("Safe",         Targets.SINGLE, [4, 3, 1]),
			createGag("Boulder",      Targets.SINGLE, [4, 3, 2]),
			createGag("Grand Piano",  Targets.SINGLE, [4, 3, 3]),
		],
	},
};
