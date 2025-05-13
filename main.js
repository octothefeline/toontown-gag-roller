// #region Initialize page

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

const MAX_VOLUME = 0.30;

const rollAudio = new Audio("assets/roll2.mp3");
rollAudio.preload = "auto";
rollAudio.load();
rollAudio.volume = 0.15;

if (document.readyState === "loading") {
	// DOM still loading
	document.addEventListener("DOMContentLoaded", DOMContentLoaded);
} else {
	// DOM already loaded, immediately call event listener
	DOMContentLoaded();
}

function DOMContentLoaded() {
	const root = document.querySelector(":root");
	for (const [track, trackData] of Object.entries(gagData.tracks)) {
		root.style.setProperty(`--track-${track}`, trackData.color);
	}

	rollSingleGag(false);

	document.querySelectorAll(".checkbox").forEach(e => e.addEventListener("click", (event) => {
		// Specifically when using VoiceOver on iOS, the event target is the SVG-use element instead of the checkbox itself, so set the target to the checkbox element.
		// (This does not occur if the inner element is something other than an SVG element, such as an IMG element)
		const target = event.target.closest(".checkbox");
		target.ariaChecked = (target.ariaChecked === "true") ? "false" : "true";
	}));

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

	document.getElementById("volume-slider").addEventListener("input", (event) => {
		rollAudio.volume = event.target.value * MAX_VOLUME;
	});

	document.getElementById("do-moving-bg").addEventListener("change", (event) => {
		(event.target.checked) ? document.body.classList.add("animate-background") : document.body.classList.remove("animate-background");
	});

	document.getElementById("button-add-cog").addEventListener("click", () => createTarget("cog"));
	document.getElementById("button-remove-cog").addEventListener("click", () => removeTarget("cog"));
	document.getElementById("button-add-toon").addEventListener("click", () => createTarget("toon"));
	document.getElementById("button-remove-toon").addEventListener("click", () => removeTarget("toon"));

	// Tooltip event listeners
	document.querySelector("body").addEventListener("mouseover", tooltipStartHover);
	document.querySelector("body").addEventListener("mouseout", tooltipStopHover);
	document.querySelector("body").addEventListener("focusin", tooltipStartHover);
	document.querySelector("body").addEventListener("focusout", tooltipStopHover);

	// Recalculate tooltip positions when the window resizes
	window.visualViewport.addEventListener("resize", recalculateTooltipPositions);

	document.getElementById("gag-panel").addEventListener("click", gagPanelEventListener);

	document.querySelectorAll(".roll-button").forEach(b => b.addEventListener("click", rollButton));

	// Set up config local storage
	const volume = document.getElementById("volume-slider");
	const rollAnimation = document.getElementById("do-roll-animation");
	const confetti = document.getElementById("do-confetti");
	const movingBg = document.getElementById("do-moving-bg");

	volume.value = getOrDefault(localStorage.getItem("volume-slider"), 0.5);
	rollAnimation.checked = getOrDefault(localStorage.getItem("do-roll-animation"), true) === "true";
	confetti.checked = getOrDefault(localStorage.getItem("do-confetti"), true) === "true";
	movingBg.checked = getOrDefault(localStorage.getItem("do-moving-bg"), false) === "true";

	volume.dispatchEvent(new Event("input"));
	movingBg.dispatchEvent(new Event("change"));

	volume.addEventListener("change", configChanged);
	rollAnimation.addEventListener("change", configChanged);
	confetti.addEventListener("change", configChanged);
	movingBg.addEventListener("change", configChanged);
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

function getOrDefault(value, def) {
	return (typeof value === "undefined" || value === null) ? def : value;
}

const numRolls = 10;
const rollSpeedMs = 140;

let currentRollTimeout;
let currentRollSequence;

function rollButton() {
	if (document.getElementById("do-roll-animation").checked) {
		startRoll();
	} else {
		rollSingleGag(document.getElementById("do-confetti").checked);
	}
}

function startRoll() {
	const battlePanel = document.querySelector(".battle-panel-section");
	if (battlePanel.getBoundingClientRect().top < 0) {
		// Only scroll if the battle panel is off screen
		battlePanel.scrollIntoView({ behavior: "smooth" });
	}

	document.getElementById("button-add-cog").setAttribute("disabled", "");
	document.getElementById("button-remove-cog").setAttribute("disabled", "");
	document.getElementById("button-add-toon").setAttribute("disabled", "");
	document.getElementById("button-remove-toon").setAttribute("disabled", "");

	currentRollSequence = rollSequence(numRolls);
	if (currentRollSequence) {
		rollAudio.currentTime = 0;
		rollAudio.play();
		rollAnimation();
	}
}

function rollAnimation(frame = 0) {
	clearTimeout(currentRollTimeout);

	let isLastRoll = frame >= numRolls - 1;

	if (isLastRoll) {
		// Roll animation complete
		document.getElementById("button-add-cog").removeAttribute("disabled");
		document.getElementById("button-remove-cog").removeAttribute("disabled");
		document.getElementById("button-add-toon").removeAttribute("disabled");
		document.getElementById("button-remove-toon").removeAttribute("disabled");
	} else {
		// Continue animation
		currentRollTimeout = setTimeout(() => { rollAnimation(frame + 1); }, rollSpeedMs);
	}

	showRolledGag(currentRollSequence[frame], document.getElementById("do-confetti").checked && isLastRoll);
}

function showRolledGag(roll, doConfetti = true) {
	document.getElementById("rolled-gag-bg").style.setProperty("background", `var(--track-${roll.track})`);
	document.getElementById("rolled-gag-icon").style.setProperty("background-position", `calc(-${roll.textureX} * var(--gag-size)) calc(-${roll.textureY} * var(--gag-size))`);
	document.getElementById("rolled-gag-label").textContent = roll.name;

	// Clear active targets
	document.querySelectorAll(".target").forEach(e => e.classList.remove("target-active"));

	function setTargetActive(target) {
		target.classList.add("target-active");
	}

	if (!roll.target) {
		// All targets
		if (roll.targetType == "COGS") {
			document.querySelectorAll("#cog-targets > .target").forEach(e => setTargetActive(e));
		} else if (roll.targetType == "TOONS") {
			document.querySelectorAll("#toon-targets > .target").forEach(e => setTargetActive(e));
		}
	} else {
		// Single target
		setTargetActive(roll.target);
	}

	if (doConfetti) {
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

function rollSingleGag(doConfetti = true) {
	let gags = rollSequence(1);
	if (gags) {
		showRolledGag(gags[0], doConfetti);
	}
}

/**
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
 * @param {HTMLElement} element 
 * @param {String} attr 
 * @returns Attribute value or null
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

function rollSequence(sequenceLength) {
	const gagButtons = document.getElementById("gag-panel").querySelectorAll(".gag-button:not(.disabled):not(.hidden)");

	const cogs = document.getElementById("cog-targets").querySelectorAll(".target");
	const toons = document.getElementById("toon-targets").querySelectorAll(".target");

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

/**
 * @param {String} type "cog" or "toon"
 */
function createTarget(type) {
	const targetContainer = document.getElementById(`${type}-targets`);

	const target = document.createElement("div");
	target.classList.add("target", `${type}-target`);

	const arrow = document.createElement("img");
	arrow.className = "target-arrow";
	arrow.src = "assets/target.png";
	target.appendChild(arrow);

	const iconContainer = document.createElement("div");
	iconContainer.className = "target-icon-container";
	{
		const iconImg = document.createElement("img");
		iconImg.className = "target-icon";
		iconImg.src = `assets/${type}.png`;
		iconContainer.appendChild(iconImg);

		const iconLabel = document.createElement("span");
		iconLabel.className = "target-icon-label";
		iconLabel.textContent = targetContainer.childElementCount + 1;
		iconContainer.appendChild(iconLabel);
	}
	target.appendChild(iconContainer);

	targetContainer.prepend(target);

	recalculateTooltipPositions();
}

/**
 * @param {String} type "cog" or "toon"
 */
function removeTarget(type) {
	const targetContainer = document.getElementById(`${type}-targets`);

	if (targetContainer.childElementCount > 1) {
		targetContainer.firstElementChild.remove();
		recalculateTooltipPositions();
	}
}

// #endregion

// #region About modal

const modalOpenAnimationTime = 200;
const modalCloseAnimationTime = 200;
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

// #endregion About modal

// #region Tooltip functionality

const tooltipArrowSize = 6;
const tooltipTransitionTime = 150;
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

// #endregion Tooltip functionality

// #region Gag panel functionality

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
