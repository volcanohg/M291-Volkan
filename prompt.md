

# Prompt setlist coincée

Voici mon HTML/JS :
[<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Setlist — e1-9 (version livrée par l’IA)</title>
  <style>
    :root { --ink:#1c1917; --band:#1c1917; --accent:#ea580c; --bg:#fffefa; --paper:#f5f5f4; }
    * { box-sizing: border-box; }
    body { margin:0; font-family: Arial, Helvetica, sans-serif; background:var(--bg); color:var(--ink); }
    header { background:var(--band); color:#fffefa; padding:0.85rem 1.2rem; letter-spacing:.12em; text-transform:uppercase; font-size:.78rem; font-weight:700; }
    main { max-width: 28rem; margin:0 auto; padding:1.6rem 1.1rem 3rem; }
    h1 { font-size:1.55rem; margin:.2rem 0 .4rem; }
    .note { color:#57534e; font-size:.95rem; margin-bottom:1rem; }
    ol { list-style:none; margin:0; padding:0; }
    li { display:flex; gap:.8rem; align-items:baseline; background:#fff; border:1px solid #e7e5e4; margin:0 0 .45rem; padding:.7rem .8rem; cursor:grab; }
    li:active { cursor:grabbing; }
    .heure { font-family: ui-monospace, monospace; font-weight:700; color:var(--accent); min-width:3.6rem; }
    .nom { font-weight:700; }
  </style>
</head>
<body>
  <header>Fiche e1-9 · La setlist coincée · M291</header>
  <main>
    <h1>Scène du lac</h1>
    <p class="note">Livré par une IA. « Vous pouvez réordonner la setlist. » Vraiment ? Glissez une ligne et posez-la ailleurs. L’ordre visé : du plus tôt au plus tard.</p>
    <ol id="liste">
      <li id="morceau-echo" draggable="true" data-heure="2140">
        <span class="heure">21:40</span>
        <span class="nom">Echo du Jura</span>
      </li>
      <li id="morceau-fanfare" draggable="true" data-heure="1800">
        <span class="heure">18:00</span>
        <span class="nom">Fanfare de Nyon</span>
      </li>
      <li id="morceau-dj" draggable="true" data-heure="2010">
        <span class="heure">20:10</span>
        <span class="nom">DJ Vallée</span>
      </li>
      <li id="morceau-nora" draggable="true" data-heure="1900">
        <span class="heure">19:00</span>
        <span class="nom">Nora &amp; the Funiculaire</span>
      </li>
      <li id="morceau-amis" draggable="true" data-heure="2230">
        <span class="heure">22:30</span>
        <span class="nom">Les Amis du Stand</span>
      </li>
    </ol>
  </main>
  <script>
    const liste = document.getElementById("liste");

    liste.addEventListener("dragstart", function (e) {
      const ligne = e.target.closest("li");
      if (!ligne) {
        return;
      }
      e.dataTransfer.setData("text/id", ligne.id);
      console.log("prise :", ligne.id);
    });

    liste.addEventListener("drop", function (e) {
      const id = e.dataTransfer.getData("text/plain");
      console.log("dépôt, id reçu :", id);
      const deplacee = document.getElementById(id);
      const cible = e.target;
      if (deplacee && cible) {
        cible.parentNode.insertBefore(deplacee, cible);
      }
    });
  </script>
</body>
</html>
]

# Prompt setlist coincée

## Prompt envoyé à l'IA
Voici mon HTML/JS (contenu du fichier setlist.html).
Ce que je veux : pouvoir glisser une ligne de la liste pour changer l'ordre (horaires du plus tôt au plus tard). Pas de librairie. Pas de nouvelle page.
Ce que je vois quand je glisse : Le curseur affiche un symbole d'interdiction et rien ne se passe lorsqu'on relâche la ligne.
Ce que dit la console (F12) : Aucun événement drop ne se déclenche et la valeur récupérée vaut null.

Explique d'abord le concept du glisser-déposer HTML : quels événements, dans quel ordre, et pourquoi dragover a souvent besoin de preventDefault.
Liste ensuite les problèmes de CE fichier.
Propose ENSUITE le plus petit changement possible. Ne réécris pas toute la page.

---

## Ce que j'ai compris du glisser-déposer (Analyse du problème)

1. **La chaîne d'événements :** Le glisser-déposer HTML repose sur une suite d'événements précis (`dragstart`, `dragover`, `drop`). Pour autoriser le dépôt, il faut obligatoirement appeler `e.preventDefault()` sur l'événement `dragover`, sinon le navigateur bloque l'action par défaut.
2. **Le problème de sacoche (`dataTransfer`) :** Le script enregistrait l'identifiant sous le type `"text/id"` lors du `dragstart`, mais essayait de le lire sous le type `"text/plain"` lors du `drop`. La variable valait donc `null`.
3. **La cible précise (`closest`) :** L'événement `drop` capturait parfois un sous-élément (`<span>`) au lieu du `<li>`. L'utilisation de `e.target.closest("li")` permet de cibler précisément la ligne entière.

---

## Correctif appliqué

* Ajout du gestionnaire `dragover` avec `e.preventDefault()`.
* Alignement des types de données dans `dataTransfer` sur `"text/plain"`.
* Ciblage sécurisé du `<li>` avec `closest("li")` lors du `drop`.



