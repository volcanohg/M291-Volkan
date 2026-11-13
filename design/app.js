// ---- Votre code de la semaine 11 commence ici
const listeRecettes = document.getElementById("recipe-list");
const compteurRecettes = document.getElementById("result-count");
const etatVide = document.getElementById("empty-state");
const champRecherche = document.getElementById("fridge-input");
let donnees = [];

function creerCartes(recettes) {
  listeRecettes.replaceChildren();

  for (const recette of recettes) {
    const carte = document.createElement("article");
    carte.classList.add("recipe-card");
    carte.dataset.minutes = recette.minutes;
    carte.dataset.ingredients = recette.nom.toLowerCase();

    const image = document.createElement("div");
    image.classList.add("recipe-image");
    image.setAttribute("aria-hidden", "true");

    const corps = document.createElement("div");
    corps.classList.add("recipe-body");

    const titre = document.createElement("h2");
    titre.textContent = recette.nom;

    const meta = document.createElement("p");
    meta.classList.add("recipe-meta");

    const temps = document.createElement("span");
    temps.textContent = `◷ ${recette.minutes} min`;

    const difficulte = document.createElement("span");
    difficulte.textContent = `⚡ ${recette.difficulte}`;

    const portions = document.createElement("p");
    portions.classList.add("recipe-ingredients");
    portions.textContent = `${recette.personnes} personnes`;

    meta.append(temps, difficulte);
    corps.append(titre, meta, portions);
    carte.append(image, corps);
    listeRecettes.append(carte);
  }

  compteurRecettes.textContent = `${recettes.length} recette${recettes.length > 1 ? "s" : ""}`;
  etatVide.hidden = recettes.length !== 0;
}

function filtrerRecettes() {
  const recherche = champRecherche.value.trim().toLowerCase();
  const filtreTemps = document.querySelector(".quick-button.is-selected")?.dataset.time ?? "all";
  const recettesFiltrees = donnees.filter(function (recette) {
    const correspondAuNom = recette.nom.toLowerCase().includes(recherche);
    const correspondAuTemps = filtreTemps === "all" || recette.minutes <= Number(filtreTemps);
    return correspondAuNom && correspondAuTemps;
  });

  creerCartes(recettesFiltrees);
}

champRecherche.addEventListener("input", filtrerRecettes);
document.querySelectorAll("[data-time]").forEach(function (bouton) {
  bouton.addEventListener("click", filtrerRecettes);
});
document.getElementById("reset-search").addEventListener("click", filtrerRecettes);
document.getElementById("apply-filters").addEventListener("click", filtrerRecettes);

fetch("data.json")
  .then(function (reponse) {
    return reponse.json();
  })
  .then(function (recettes) {
    donnees = recettes;
    filtrerRecettes();
  })
  .catch(function (erreur) {
    console.error("Impossible de charger les recettes :", erreur);
  });
