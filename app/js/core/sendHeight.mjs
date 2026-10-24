/**
 * Envoie la hauteur de l'élément via postMessage dès qu'elle change
 * @param {HTMLElement} element - L'élément dont la hauteur doit être envoyée
 */
export function sendHeight(element) {
	// Vérifie si l'élément existe
	if (!element) {
		console.warn("L'élément n'existe pas");
		return;
	}

	// Envoie la hauteur initiale
	const height = element.offsetHeight;
	if (typeof window !== "undefined" && window.parent) {
		window.parent.postMessage({ type: "height", height }, "*");
	}

	// Surveille les changements de hauteur
	const observer = new MutationObserver(() => {
		const newHeight = element.offsetHeight;
		if (newHeight !== height) {
			if (typeof window !== "undefined" && window.parent) {
				window.parent.postMessage({ type: "height", height: newHeight }, "*");
			}
		}
	});

	// Démarrage de l'observation
	observer.observe(element, {
		childList: true,
		subtree: true,
		characterData: true,
		attributes: true,
	});
}
