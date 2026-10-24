/**
 * Définit la hauteur d'un élément
 * @param {HTMLElement} element - L'élément dont on veut définir la hauteur
 * @param {number|string} height - La hauteur à définir
 */
export function setHeight(element, height) {
	if (typeof height === "number") {
		element.style.height = `${height}px`;
	} else if (typeof height === "string") {
		element.style.height = height;
	}
}

/**
 * Lit la hauteur définie dans un attribut data-height et applique cette hauteur à l'élément
 * @param {HTMLElement} element - L'élément dont on veut définir la hauteur
 */
export function setHeightFromAttribute(element) {
	const heightValue = element.getAttribute("data-height");
	if (heightValue !== null) {
		setHeight(element, heightValue);
	}
}

/**
 * Configure un gestionnaire d'événement pour un champ de saisie qui modifie dynamiquement la hauteur d'un élément
 * @param {HTMLElement} inputElement - L'élément input de saisie
 * @param {HTMLElement} targetElement - L'élément dont on veut modifier la hauteur
 */
export function setupHeightInput(inputElement, targetElement) {
	// Fonction pour mettre à jour la hauteur
	function updateHeight() {
		const heightValue = parseInt(inputElement.value, 10);
		if (!isNaN(heightValue) && heightValue >= 0) {
			setHeight(targetElement, heightValue);
		}
	}

	// Mettre à jour la hauteur au chargement
	updateHeight();

	// Ajouter un écouteur d'événement pour les changements
	inputElement.addEventListener("input", updateHeight);
}
