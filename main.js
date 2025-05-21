// #region Utilities

/**
 * Checks whether or not the specified element is hidden or its parents are hidden.
 * 
 * @param {HTMLElement} element 
 */
function elementIsHidden(element) {
	while (element) {
		if (window.getComputedStyle(element).display == "none") {
			return true;
		}

		element = element.parentElement;
	}

	return false;
}

/**
 * Checks the provided element and its parent elements for the specified attribute name.
 * 
 * @param {HTMLElement} element 
 * @param {String} attr 
 * @returns Attribute value or null if not found
 */
function inheritedAttribute(element, attr) {
	let value = null;
	while (element && !(value = element.getAttribute(attr))) {
		element = element.parentElement;
	}
	return value;
}

function shuffle(list) {
	let i = list.length;

	while (i > 0) {
		let j = Math.floor(Math.random() * i);
		i--;
		[list[i], list[j]] = [list[j], list[i]];
	}

	return list;
}

function ordinalSuffix(num) {
	let a = num % 10;
	let b = num % 100;
	return num + ((a == 1 && b != 11) ? "st" : (a == 2 && b != 12) ? "nd" : (a == 3 && b != 13) ? "rd" : "th");
}

function getOrDefault(value, def) {
	return (typeof value === "undefined" || value === null) ? def : value;
}

// #endregion


// #region Globals

const gagData = {
	server: "Corporate Clash",
	texture: {
		iconWidth: 128,
		iconHeight: 128,
		sheetWidth: 1024,
		sheetHeight: 1024,
		sheet: "gags.png"
	},
	tracks: {
		"toon-up": {
			displayName: "Toon-Up",
			color: "#CD95F6",
			targetType: "TOONS",
			gags: [
				{ name: "Feather", targets: "SINGLE", x: 0, y: 0 },
				{ name: "Megaphone", targets: "ALL", x: 1, y: 0 },
				{ name: "Lipstick", targets: "SINGLE", x: 2, y: 0 },
				{ name: "Bamboo Cane", targets: "ALL", x: 3, y: 0 },
				{ name: "Pixie Dust", targets: "SINGLE", x: 4, y: 0 },
				{ name: "Juggling Cubes", targets: "ALL", x: 5, y: 0 },
				{ name: "Confetti Cannon", targets: "SINGLE", x: 6, y: 0 },
				{ name: "High Dive", targets: "ALL", x: 7, y: 0 }
			]
		},
		"trap": {
			displayName: "Trap",
			color: "#F34E4D",
			targetType: "COGS",
			gags: [
				{ name: "Banana Peel", targets: "SINGLE", x: 0, y: 1 },
				{ name: "Rake", targets: "SINGLE", x: 1, y: 1 },
				{ name: "Springboard", targets: "SINGLE", x: 2, y: 1 },
				{ name: "Marbles", targets: "SINGLE", x: 3, y: 1 },
				{ name: "Quicksand", targets: "SINGLE", x: 4, y: 1 },
				{ name: "Trapdoor", targets: "SINGLE", x: 5, y: 1 },
				{ name: "Wrecking Ball", targets: "SINGLE", x: 6, y: 1 },
				{ name: "TNT", targets: "SINGLE", x: 7, y: 1 }
			]
		},
		"lure": {
			displayName: "Lure",
			color: "#4FB74D",
			targetType: "COGS",
			gags: [
				{ name: "$1 Bill", targets: "SINGLE", x: 0, y: 2 },
				{ name: "Small Magnet", targets: "ALL", x: 1, y: 2 },
				{ name: "$5 Bill", targets: "SINGLE", x: 2, y: 2 },
				{ name: "Big Magnet", targets: "ALL", x: 3, y: 2 },
				{ name: "$10 Bill", targets: "SINGLE", x: 4, y: 2 },
				{ name: "Hypno-goggles", targets: "ALL", x: 5, y: 2 },
				{ name: "$50 Bill", targets: "SINGLE", x: 6, y: 2 },
				{ name: "Presentation", targets: "ALL", x: 7, y: 2 }
			]
		},
		"throw": {
			displayName: "Throw",
			color: "#F48D3F",
			targetType: "COGS",
			gags: [
				{ name: "Cupcake", targets: "SINGLE", x: 0, y: 3 },
				{ name: "Fruit Pie Slice", targets: "SINGLE", x: 1, y: 3 },
				{ name: "Cream Pie Slice", targets: "SINGLE", x: 2, y: 3 },
				{ name: "Birthday Cake Slice", targets: "SINGLE", x: 3, y: 3 },
				{ name: "Whole Fruit Pie", targets: "SINGLE", x: 4, y: 3 },
				{ name: "Whole Cream Pie", targets: "SINGLE", x: 5, y: 3 },
				{ name: "Birthday Cake", targets: "SINGLE", x: 6, y: 3 },
				{ name: "Wedding Cake", targets: "SINGLE", x: 7, y: 3 }
			]
		},
		"squirt": {
			displayName: "Squirt",
			color: "#ED44BA",
			targetType: "COGS",
			gags: [
				{ name: "Squirting Flower", targets: "SINGLE", x: 0, y: 4 },
				{ name: "Glass of Water", targets: "SINGLE", x: 1, y: 4 },
				{ name: "Squirt Gun", targets: "SINGLE", x: 2, y: 4 },
				{ name: "Water Balloon", targets: "SINGLE", x: 3, y: 4 },
				{ name: "Seltzer Bottle", targets: "SINGLE", x: 4, y: 4 },
				{ name: "Fire Hose", targets: "SINGLE", x: 5, y: 4 },
				{ name: "Storm Cloud", targets: "SINGLE", x: 6, y: 4 },
				{ name: "Geyser", targets: "SINGLE", x: 7, y: 4 }
			]
		},
		"zap": {
			displayName: "Zap",
			color: "#F2F97B",
			targetType: "COGS",
			gags: [
				{ name: "Joy Buzzer", targets: "SINGLE", x: 0, y: 5 },
				{ name: "Lightbulb", targets: "SINGLE", x: 1, y: 5 },
				{ name: "Broken Radio", targets: "SINGLE", x: 2, y: 5 },
				{ name: "Kart Battery", targets: "SINGLE", x: 3, y: 5 },
				{ name: "Broken TV", targets: "SINGLE", x: 4, y: 5 },
				{ name: "Stage Light", targets: "SINGLE", x: 5, y: 5 },
				{ name: "Tesla Coil", targets: "SINGLE", x: 6, y: 5 },
				{ name: "Lightning", targets: "SINGLE", x: 7, y: 5 }
			]
		},
		"sound": {
			displayName: "Sound",
			color: "#5A6BEB",
			targetType: "COGS",
			gags: [
				{ name: "Kazoo", targets: "ALL", x: 0, y: 6 },
				{ name: "Bike Horn", targets: "ALL", x: 1, y: 6 },
				{ name: "Whistle", targets: "ALL", x: 2, y: 6 },
				{ name: "Bugle", targets: "ALL", x: 3, y: 6 },
				{ name: "Aoogah", targets: "ALL", x: 4, y: 6 },
				{ name: "Elephant Trunk", targets: "ALL", x: 5, y: 6 },
				{ name: "Foghorn", targets: "ALL", x: 6, y: 6 },
				{ name: "Opera Singer", targets: "ALL", x: 7, y: 6 }
			]
		},
		"drop": {
			displayName: "Drop",
			color: "#51EBF2",
			targetType: "COGS",
			gags: [
				{ name: "Flower Pot", targets: "SINGLE", x: 0, y: 7 },
				{ name: "Sandbag", targets: "SINGLE", x: 1, y: 7 },
				{ name: "Bowling Ball", targets: "SINGLE", x: 2, y: 7 },
				{ name: "Anvil", targets: "SINGLE", x: 3, y: 7 },
				{ name: "Big Weight", targets: "SINGLE", x: 4, y: 7 },
				{ name: "Safe", targets: "SINGLE", x: 5, y: 7 },
				{ name: "Boulder", targets: "SINGLE", x: 6, y: 7 },
				{ name: "Grand Piano", targets: "SINGLE", x: 7, y: 7 }
			]
		}
	}
}

const toonSvgPath = "M7.31 12.44c12.19-2.94 24.75 3.81 32.81 6 7.14-2.96 22.58-2.14 27.63-.13 7.56-2.06 20.75-8.31 32.63-6.37 3.48 4.45-2.5 18.94-5.13 24.06 2.81 3.81 3.69 5.63 4.66 8 1.8 4.43 2.54 9.23 2.34 14C101.28 81.88 79.8 97.73 57 98h-7C28.49 97.74 5.08 81.07 5.08 58c0-4.64 1.48-10.77 3.36-15 .98-2.2 2.5-4.38 4.31-7.56-2.5-6.75-8.81-14.69-5.44-23z";
const cogSvgPath = "M15.5 19.12 38 6.25 44 22l14.62-.62 6.63-17.76 27 14-10.37 14L87.75 39l16.63-4 .5 30.88-15.38.74-3.88 11.88 8.76 12.88L72 105l-6.25-16.5-14.13.5-7.24 17.88-26-13.5L27.5 79.5l-5.38-8.38-16.39 4.43-1.28-31.28 15.91-.82s3.39-10.57 3.26-10.57c-.12 0-8.12-13.76-8.12-13.76z";

const numRolls = 10;
const rollSpeedMs = 140;

const maxAudioVolume = 0.30;
const soundTick = new Howl({ src: "assets/MG_sfx_travel_game_red_arrow.mp3" });
const soundFanfare = new Howl({ src: "assets/SZ_MM_fanfare.mp3" });

// Defined in CSS
const modalOpenAnimationTime = 200;
const modalCloseAnimationTime = 200;
const tooltipArrowSize = 6;
const tooltipTransitionTime = 150;

// #endregion


// #region Initialize page

if (document.readyState === "loading") {
	// DOM still loading
	document.addEventListener("DOMContentLoaded", DOMContentLoaded);
} else {
	// DOM already loaded, immediately call event listener
	DOMContentLoaded();
}

function DOMContentLoaded() {
	document.querySelectorAll(".checkbox").forEach(e => e.addEventListener("click", (event) => {
		// Specifically when using VoiceOver on iOS, the event target is the SVG-use element instead of the checkbox itself, so set the target to the checkbox element.
		// (This does not occur if the inner element is something other than an SVG element, such as an IMG element)
		const target = event.target.closest(".checkbox");
		target.ariaChecked = (target.ariaChecked === "true") ? "false" : "true";
	}));

	initConfig();
	initAboutModal();
	initGagRoller();
	initTooltips();
	initAudio();

	rollSingleGag({ doConfetti: false, shouldScrollView: false });
}

function initAboutModal() {
	document.getElementById("about-button-open").addEventListener("click", openAboutModal);
	document.getElementById("about-button-close").addEventListener("click", closeAboutModal);

	document.getElementById("about-modal").addEventListener("click", (event) => {
		// Clicking outside modal content
		if (event.target == document.getElementById("about-modal"))
			closeAboutModal();
	});
	document.querySelector("body").addEventListener("keydown", (event) => {
		if (event.key === "Escape")
			closeAboutModal();
	});
}

function initGagRoller() {
	// Track colors
	const root = document.querySelector(":root");
	for (const [track, trackData] of Object.entries(gagData.tracks)) {
		root.style.setProperty(`--track-${track}`, trackData.color);
	}

	// Target buttons
	document.getElementById("button-add-cog").addEventListener("click", () => { createTarget("cog"); recalculateTooltipPositions(); });
	document.getElementById("button-remove-cog").addEventListener("click", () => { removeTarget("cog"); recalculateTooltipPositions(); });
	document.getElementById("button-add-toon").addEventListener("click", () => { createTarget("toon"); recalculateTooltipPositions(); });
	document.getElementById("button-remove-toon").addEventListener("click", () => { removeTarget("toon"); recalculateTooltipPositions(); });

	// Initialize targets
	for (let i = 0; i < 4; i++) {
		createTarget("toon");
		createTarget("cog");
	}

	// Gag panel buttons
	document.getElementById("gag-panel").addEventListener("click", gagPanelEventListener);
	document.querySelectorAll(".roll-button").forEach(b => b.addEventListener("click", rollButton));
}

function initTooltips() {
	// Tooltip event listeners
	document.querySelector("body").addEventListener("mouseover", tooltipStartHover);
	document.querySelector("body").addEventListener("mouseout", tooltipStopHover);
	document.querySelector("body").addEventListener("focusin", tooltipStartHover);
	document.querySelector("body").addEventListener("focusout", tooltipStopHover);

	// Recalculate tooltip positions when the window resizes
	window.visualViewport.addEventListener("resize", recalculateTooltipPositions);
}

function initConfig() {
	const volume = document.getElementById("volume-slider");
	const selfTarget = document.getElementById("allow-self-target");
	const rollAnim = document.getElementById("do-roll-animation");
	const confetti = document.getElementById("do-confetti");
	const movingBg = document.getElementById("do-moving-bg");

	// Set input element states
	volume.value = getOrDefault(localStorage.getItem("volume-slider"), 0.5);
	selfTarget.checked = getOrDefault(localStorage.getItem("allow-self-target"), "false") === "true";
	rollAnim.checked = getOrDefault(localStorage.getItem("do-roll-animation"), "true") === "true";
	confetti.checked = getOrDefault(localStorage.getItem("do-confetti"), "true") === "true";
	movingBg.checked = getOrDefault(localStorage.getItem("do-moving-bg"), "false") === "true";

	// Add event listeners
	volume.addEventListener("change", configChanged);
	selfTarget.addEventListener("change", configChanged);
	rollAnim.addEventListener("change", configChanged);
	confetti.addEventListener("change", configChanged);
	movingBg.addEventListener("change", configChanged);

	volume.addEventListener("input", updateAudioVolume);
	movingBg.addEventListener("change", (event) => {
		(event.target.checked) ? document.body.classList.add("animate-background") : document.body.classList.remove("animate-background");
	});

	movingBg.dispatchEvent(new Event("change"));
}

/**
 * @param {Event} event
 */
function configChanged(event) {
	const target = event.target;

	let value;
	if (target.type == "checkbox") {
		value = target.checked;
	} else {
		value = target.value;
	}

	localStorage.setItem(target.id, value);
}

function initAudio() {
	updateAudioVolume();
}

function getCurrentVolume() {
	return document.getElementById("volume-slider").value * maxAudioVolume;
}

function updateAudioVolume() {
	Howler.volume(getCurrentVolume());
}

/**
 * @param {String} type "cog" or "toon"
 */
function createTarget(type) {
	const targetContainer = document.getElementById(`${type}-targets`);

	const targetNum = targetContainer.childElementCount + 1;

	const target = document.createElement("div");
	target.classList.add("target", `${type}-target`);

	const arrow = document.createElement("img");
	arrow.className = "target-arrow";
	arrow.src = "assets/target.png";
	arrow.alt = "Target Arrow";
	arrow.role = "none";
	target.appendChild(arrow);

	const iconContainer = document.createElement((type == "toon") ? "button" : "div");
	iconContainer.className = "target-icon-container";

	if (type == "toon") {
		iconContainer.dataset.tooltip = "Set as my Toon";

		iconContainer.addEventListener("click", (event) => {
			const alreadySelected = event.target.parentElement.classList.contains("selected-toon");

			document.querySelectorAll("button.target-icon-container").forEach(e => e.parentElement.classList.remove("selected-toon"));

			if (alreadySelected) {
				event.target.parentElement.classList.remove("selected-toon");
			} else {
				event.target.parentElement.classList.add("selected-toon");
			}
		});
	}

	const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	iconSvg.setAttribute("class", "target-icon");
	iconSvg.setAttribute("viewBox", (type == "toon") ? "0 0 108 108" : "0 0 110 110");
	iconSvg.ariaLabel = `${ordinalSuffix(targetNum)} ${type} from the right`;
	iconSvg.role = "img";

	if (type == "toon") {
		iconSvg.ariaLabel += ", set this toon as yours";
	}

	const iconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
	iconPath.setAttribute("d", (type == "toon") ? toonSvgPath : cogSvgPath);

	iconSvg.appendChild(iconPath);
	iconContainer.appendChild(iconSvg);

	const iconLabel = document.createElement("span");
	iconLabel.className = "target-icon-label";
	iconLabel.textContent = targetNum;
	iconLabel.ariaHidden = true;
	iconContainer.appendChild(iconLabel);

	target.appendChild(iconContainer);
	targetContainer.prepend(target);
}

/**
 * @param {String} type "cog" or "toon"
 */
function removeTarget(type) {
	const targetContainer = document.getElementById(`${type}-targets`);

	if (targetContainer.childElementCount > 1) {
		targetContainer.firstElementChild.remove();
	}
}

// #endregion


//#region Gag rolling

function rollButton() {
	if (document.getElementById("do-roll-animation").checked) {
		startRollAnimation();
	} else {
		rollSingleGag();
	}
}

let currentRollInterval;

function startRollAnimation() {
	clearInterval(currentRollInterval);

	const currentRollSequence = rollSequence(numRolls);
	if (!currentRollSequence) {
		return;
	}

	let frame = 0;

	function doAnimationFrame() {
		let isLastRoll = frame >= numRolls - 1;

		if (isLastRoll) {
			// Roll animation complete
			soundFanfare.play();

			document.getElementById("button-add-cog").removeAttribute("disabled");
			document.getElementById("button-remove-cog").removeAttribute("disabled");
			document.getElementById("button-add-toon").removeAttribute("disabled");
			document.getElementById("button-remove-toon").removeAttribute("disabled");

			clearInterval(currentRollInterval);
		} else {
			soundTick.play();
		}

		let doConfetti = isLastRoll && document.getElementById("do-confetti").checked;
		showRolledGag(currentRollSequence[frame], { isLastRoll: isLastRoll, doConfetti: doConfetti });

		frame++;
	}

	const battlePanel = document.querySelector(".battle-panel-section");
	if (battlePanel.getBoundingClientRect().top < 0) {
		battlePanel.scrollIntoView({ behavior: "smooth" });
	}

	document.getElementById("button-add-cog").setAttribute("disabled", "");
	document.getElementById("button-remove-cog").setAttribute("disabled", "");
	document.getElementById("button-add-toon").setAttribute("disabled", "");
	document.getElementById("button-remove-toon").setAttribute("disabled", "");

	doAnimationFrame();
	currentRollInterval = setInterval(doAnimationFrame, rollSpeedMs);
}

function rollSingleGag({ doConfetti = true, shouldScrollView = true } = {}) {
	let gags = rollSequence(1);
	if (gags) {
		showRolledGag(gags[0], { isLastRoll: true, doConfetti: doConfetti, shouldScrollView: shouldScrollView });
	}
}

function showRolledGag(roll, { isLastRoll, doConfetti, shouldScrollView = true }) {
	document.getElementById("rolled-gag").style.setProperty("background", `var(--track-${roll.track})`);
	document.getElementById("rolled-gag-icon").style.setProperty("background-position", `calc(-${roll.textureX} * var(--gag-size)) calc(-${roll.textureY} * var(--gag-size))`);
	document.getElementById("rolled-gag-label").textContent = roll.name;

	function setTargetInactive(target) {
		target.classList.remove("target-active");

		const icon = target.querySelector(".target-icon");
		icon.ariaLabel = icon.ariaLabel.replace(", targeted", "");
	}

	function setTargetActive(target) {
		target.classList.add("target-active");

		const icon = target.querySelector(".target-icon");
		icon.ariaLabel = icon.ariaLabel + ", targeted";
	}

	// Clear all active targets
	document.querySelectorAll(".target").forEach(e => setTargetInactive(e));

	if (roll.target) {
		// Single target
		setTargetActive(roll.target);
	} else {
		// All targets
		if (roll.targetType == "COGS") {
			document.querySelectorAll("#cog-targets > .target").forEach(e => setTargetActive(e));
		} else if (roll.targetType == "TOONS") {
			document.querySelectorAll("#toon-targets > .target").forEach(e => setTargetActive(e));
		}
	}

	if (isLastRoll) {
		if (shouldScrollView && roll.target) {
			roll.target.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
		}

		if (doConfetti && document.getElementById("do-confetti").checked) {
			const gagIcon = document.getElementById("rolled-gag").getBoundingClientRect();

			confetti({
				spread: 270,
				gravity: 0,
				decay: 0.96,
				startVelocity: 15,
				particleCount: 50,
				scalar: 1.25,
				origin: {
					x: (gagIcon.x + gagIcon.width / 2) / window.innerWidth,
					y: (gagIcon.y + gagIcon.height / 2) / window.innerHeight
				}
			});
		}
	}
}

function rollSequence(sequenceLength) {
	const gagButtons = [...document.querySelectorAll("#gag-panel .gag-button:not(.disabled):not(.hidden)")];

	const cogs = document.querySelectorAll("#cog-targets .target");
	const toons = (document.getElementById("allow-self-target").checked)
		? document.querySelectorAll("#toon-targets .target")
		: document.querySelectorAll("#toon-targets .target:not(.selected-toon)");

	if (toons.length == 0) {
		// If no toons are able to be targeted, remove all gags that target toons
		for (let i = gagButtons.length - 1; i >= 0; i--) {
			const trackData = gagData.tracks[inheritedAttribute(gagButtons[i], "data-track")];
			if (trackData.targetType == "TOONS") {
				gagButtons.splice(i, 1);
			}
		}
	}

	if (gagButtons.length == 0) {
		return null;
	}

	const sequence = Array(sequenceLength);

	for (let i = 0; i < sequenceLength; i++) {
		const randomGag = gagButtons[Math.floor(Math.random() * gagButtons.length)];

		const track = inheritedAttribute(randomGag, "data-track");
		const level = randomGag.dataset.level;

		const trackData = gagData.tracks[track];
		const gag = trackData.gags[level - 1];

		const target = (gag.targets == "ALL")
			? null
			: (trackData.targetType == "COGS")
				? cogs[Math.floor(Math.random() * cogs.length)]
				: toons[Math.floor(Math.random() * toons.length)];

		sequence[i] = {
			name: gag.name,
			track: track,
			target: target,
			targetType: trackData.targetType,
			textureX: gag.x,
			textureY: gag.y,
		};
	}

	return sequence;
}

// #endregion


// #region About modal

let openModalTimeout, closeModalTimeout;

function openAboutModal() {
	const modal = document.getElementById("about-modal");

	clearTimeout(closeModalTimeout);
	closeModalTimeout = undefined;

	if (!openModalTimeout) {
		openModalTimeout = setTimeout(() => {
			openModalTimeout = undefined;

			// Wait until the animation is finished so it doesn't get choppy
			// Toggling the inert property causes reflow(?), slow on mobile
			document.getElementById("title").inert = true;
			document.getElementById("main-content").inert = true;
		}, modalOpenAnimationTime);
	}

	modal.style.display = "flex";
	modal.classList.remove("hide");
	modal.classList.add("show");
	document.querySelector("body").style.overflow = "hidden";

	clearTooltips();
}

function closeAboutModal() {
	const modal = document.getElementById("about-modal");

	clearTimeout(openModalTimeout);
	openModalTimeout = undefined;

	if (!closeModalTimeout) {
		closeModalTimeout = setTimeout(() => {
			closeModalTimeout = undefined;
			modal.style.display = "none";

			document.getElementById("title").inert = false;
			document.getElementById("main-content").inert = false;
		}, modalCloseAnimationTime);
	}

	modal.classList.remove("show");
	modal.classList.add("hide");
	document.querySelector("body").style.overflow = null;

	clearTooltips();
}

// #endregion


// #region Tooltips

/** Target element -> Tooltip { element, timeout } */
const tooltipMap = new Map();

/**
 * @param {Event} event
 */
function tooltipStartHover(event) {
	const target = event.target;

	if (!target.dataset.tooltip) {
		return;
	}

	let tooltip = tooltipMap.get(target);

	if (tooltip) {
		// Reuse tooltip element, cancel removal
		clearTimeout(tooltip.timeout);
	} else {
		// Create tooltip element
		tooltip = { element: document.createElement("div"), timeout: undefined };
		tooltip.element.className = "tooltip";

		const tooltipBody = document.createElement("div");
		tooltipBody.className = "tooltip-body";
		tooltipBody.innerText = target.dataset.tooltip;

		const tooltipArrow = document.createElement("div");
		tooltipArrow.className = "tooltip-arrow";

		tooltip.element.appendChild(tooltipBody);
		tooltip.element.appendChild(tooltipArrow);
		document.body.appendChild(tooltip.element);

		tooltipMap.set(target, tooltip);
	}

	calculateTooltipPosition(target, tooltip.element);
	tooltip.element.style.opacity = "1";
}

/**
 * @param {Event} event
 */
function tooltipStopHover(event) {
	const target = event.target;
	const tooltip = tooltipMap.get(target);

	if (tooltip) {
		clearTimeout(tooltip.timeout);
		tooltip.element.style.opacity = "0";
		tooltip.timeout = setTimeout(() => { tooltipMap.delete(target); tooltip.element.remove(); }, tooltipTransitionTime);
	}
}

/**
 * @param {HTMLElement} target
 * @param {HTMLElement} tooltip
 */
function calculateTooltipPosition(target, tooltip) {
	if (elementIsHidden(target)) {
		return;
	}

	let x, y;

	const tooltipArrow = tooltip.querySelector(".tooltip-arrow");
	const targetBounds = target.getBoundingClientRect();
	const tooltipBounds = tooltip.getBoundingClientRect();

	// Calculate tooltip position
	switch (target.dataset.tooltipPosition) {
		case "bottom":
			x = targetBounds.x - tooltipBounds.width / 2 + targetBounds.width / 2 + window.scrollX;
			y = targetBounds.y + targetBounds.height + tooltipArrowSize + window.scrollY;
			tooltipArrow.classList.add("tooltip-arrow-bottom");
			break;
		case "left":
			x = targetBounds.x - tooltipBounds.width - tooltipArrowSize + window.scrollX;
			y = targetBounds.y - tooltipBounds.height / 2 + targetBounds.height / 2 + window.scrollY;
			tooltipArrow.classList.add("tooltip-arrow-left");
			break;
		case "right":
			x = targetBounds.x + targetBounds.width + tooltipArrowSize + window.scrollX;
			y = targetBounds.y - tooltipBounds.height / 2 + targetBounds.height / 2 + window.scrollY;
			tooltipArrow.classList.add("tooltip-arrow-right");
			break;
		case "top":
		default:
			x = targetBounds.x - tooltipBounds.width / 2.0 + targetBounds.width / 2.0 + window.scrollX;
			y = targetBounds.y - tooltipBounds.height - tooltipArrowSize + window.scrollY;
			tooltipArrow.classList.add("tooltip-arrow-top");
			break;
	}

	tooltip.style.transform = `translate3D(${x}px, ${y}px, 0)`;
}

function recalculateTooltipPositions() {
	tooltipMap.forEach((tooltip, target) => calculateTooltipPosition(target, tooltip.element));
}

function clearTooltips() {
	tooltipMap.forEach((tooltip, target) => tooltipStopHover({ target: target, type: "clear-tooltips" }));
}

// #endregion


// #region Gag panel

/**
 * @param {MouseEvent} event
 */
function gagPanelEventListener(event) {
	let target = event.target;

	if (target.matches(".gag-button")) {
		toggleGagButton(target);
	} else if ((target = target.closest(".toggle-track"))) {
		toggleGagTrack(target);
	}
};

/**
 * Toggle a single gag button.
 * 
 * @param {Element} button The gag button that was clicked.
 */
function toggleGagButton(button) {
	button.classList.toggle("disabled");
}

/**
 * Toggle entire gag track based on it's checkbox state.
 * 
 * @param {Element} checkbox The checkbox element that was clicked.
 */
function toggleGagTrack(checkbox) {
	let numChecked = document.querySelectorAll(".toggle-track[aria-checked=true]").length;

	if (numChecked > 0) {
		// Disable & hide or enable & show all buttons on the corresponding track
		document.querySelectorAll(`*[data-track='${inheritedAttribute(checkbox, "data-track")}'] .gag-button`).forEach(button => {
			let b = button.classList;
			checkbox.ariaChecked === "true" ? b.remove('disabled', 'hidden') : b.add('disabled', 'hidden');
		});
	} else {
		// Force track to stay enabled if it's the last one remaining
		checkbox.ariaChecked = "true";
	}
}

// #endregion
