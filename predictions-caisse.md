# Mes prédictions - Exercice e1-8 : La caisse du kiosque

## Scénario 1 : Un clic sur Frites (6 CHF)
* **Je pense que l'écran va montrer :** `06 CHF` ou `6 CHF`.
* **Ce qui s'est passé :** L'écran affiche `06 CHF`.
* **Explication :** La boîte `total` vaut 0 au départ, puis le code ajoute la chaîne de caractères `"6"` (texte entre guillemets), ce qui donne `"06"`. La vitrine `#affiche` montre donc `06 CHF`.

## Scénario 2 : Frites (6 CHF) puis Boisson (4 CHF)
* **Je pense que l'écran va montrer :** L'écran va afficher `064 CHF` au lieu de `10 CHF`.
* **Ce qui s'est passé :** L'écran affiche `064 CHF`.
* **Explication :** La boîte `total` contient du texte entre guillemets et non un nombre. Au lieu d'additionner 6 + 4, JavaScript colle les textes les uns après les autres (concaténation).

## Scénario 3 : Frites, puis saisir PALEO puis cliquer sur Appliquer
* **Je pense que l'écran va montrer :** Le total ne revient pas à 0.
* **Ce qui s'est passé :** L'écran conserve `06 CHF` et ne se réinitialise pas.
* **Explication :** Le script vérifie strict `code === "paleo"` en minuscules, alors que l'utilisateur a tapé `PALEO` en majuscules comme indiqué sur l'affiche. Les deux textes entre guillemets ne sont pas identiques.

## Scénario 4 : Frites, puis Vider le plateau, puis Frites à nouveau
* **Je pense que l'écran va montrer :** L'écran va afficher `066 CHF` au lieu de `6 CHF`.
* **Ce qui s'est passé :** L'écran affiche `066 CHF`.
* **Explication :** Le bouton Vider nettoie seulement la vitrine (`#affiche` repasse visuellement à `"0 CHF"`), mais oublie de réinitialiser la boîte `total` qui conserve l'ancienne valeur `"06"`.
// pour corriger 

//* <script>
  let total = 0; // La boîte contient maintenant un vrai nombre

  function montrer() {
    document.getElementById("affiche").textContent = total + " CHF";
  }

  document.getElementById("frites").addEventListener("click", function () {
    total = total + 6; // Addition numérique (pas de guillemets)
    document.getElementById("panier").textContent =
      document.getElementById("panier").textContent + "Frites ";
    montrer();
  });

  document.getElementById("boisson").addEventListener("click", function () {
    total = total + 4; // Addition numérique
    document.getElementById("panier").textContent =
      document.getElementById("panier").textContent + "Boisson ";
    montrer();
  });

  document.getElementById("promo").addEventListener("click", function () {
    const code = document.getElementById("code").value;
    // Utilisation de toLowerCase() pour accepter "PALEO" ou "paleo"
    if (code.trim().toLowerCase() === "paleo") {
      total = 0;
      document.getElementById("panier").textContent = "";
      montrer();
    }
  });

  document.getElementById("vider").addEventListener("click", function () {
    total = 0; // Réinitialise aussi la boîte en mémoire !
    document.getElementById("panier").textContent = "";
    montrer();
  });
</script>//