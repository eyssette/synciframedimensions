// oxlint-disable import/no-unassigned-import sort-imports

// Import du fichier CSS principal de l'application
// On peut en mettre plusieurs : ils seront concaténés et minifiés dans le bundle final
import "../css/styles.css";

// Gestion du service worker pour que l'application fonctionne hors ligne et pour le caching des ressources (PWA : Progressive Web App)
import { registerServiceWorker } from "../pwa/registerServiceWorker.mjs";

// Import des fonctions pour gérer la hauteur
import { setHeightFromAttribute, setupHeightInput } from "./core/setHeight.mjs";
import { sendHeight } from "./core/sendHeight.mjs";

import constantFromFile from "./txt/demo.md?raw";

registerServiceWorker();

const mainElement = document.querySelector("main");
const heightInputElement = document.getElementById("height-input");

// Applique la hauteur définie dans l'attribut data-height
setHeightFromAttribute(mainElement);

// Configure le champ de saisie pour modifier dynamiquement la hauteur
if (heightInputElement) {
	setupHeightInput(heightInputElement, mainElement);
}

// Envoie la hauteur de body dès qu'elle change
sendHeight(document.body);

// Ajout du texte importé depuis le fichier Markdown
mainElement.innerHTML += `<p>${constantFromFile}</p>`;
