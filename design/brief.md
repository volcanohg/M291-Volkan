# Brief - Recettes Express

### Pitch
Recettes Express est une application web simple qui permet aux étudiants de trouver une idée de repas rapide en moins de 1 minute. Elle propose des recettes faciles à réaliser avec des ingrédients du quotidien, sans perdre de temps.

### Public
- Lucas, 19 ans, étudiant en CFC à Lausanne.
- Rentre tard le soir, n'a pas beaucoup de matériel de cuisine.
- Utilise son téléphone portable, souvent à une main dans la cuisine.
- Recherche la rapidité : pas de compte obligatoire, pas de longs textes.
- Ne veut pas de recettes complexes avec 15 ingrédients introuvables.

### Écrans
- Écran 1 : Page d'accueil / Liste des recettes
- Écran 2 : Fiche détail d'une recette
- Écran 3 : Page de confirmation / Mode cuisine

### Contenu de chaque écran

#### Écran 1 (Liste des recettes)
- **On y voit** : Une grille de cartes de recettes avec photo, titre, temps de préparation et niveau de difficulté.
- **On peut y faire** : Chercher une recette, filtrer par temps (ex: -15 min), cliquer sur une carte.
- **Bouton principal** : "Filtrer les recettes"

#### Écran 2 (Fiche détail d'une recette)
- **On y voit** : La photo du plat, le temps total, la liste des ingrédients simples et les étapes numérotées.
- **On peut y faire** : Lancer le mode préparation étape par étape, revenir à la liste.
- **Bouton principal** : "Commencer la recette"

#### Écran 3 (Mode cuisine)
- **On y voit** : L'étape actuelle affichée en grand texte très lisible et un minuteur.
- **On peut y faire** : Passer à l'étape suivante, faire pause sur le minuteur.
- **Bouton principal** : "Étape suivante"

### Ambiance visuelle
Rapide, chaleureuse, épurée. Comme un livre de cuisine moderne pour étudiants ou une fiche recette d'un magazine.

### Palette
- **Fond** : Blanc cassé / Gris très clair
- **Texte** : Sombre / Noir
- **Accent** : Orange chaud (rappel de la cuisine)
- **Attention / erreur** : Rouge doux

### Interdits
- Pas de Bootstrap, pas de React, pas de compte obligatoire pour consulter.
- Pas d'API externe payante.
- Pas de vidéos lourdes ou de pub intempestive.




# Brief de projet - Recette Express

## 1. Vision et Concept
**Recette Express** est une application web conçue pour aider les personnes pressées (notamment les étudiants) à trouver rapidement des idées de repas simples à partir des ingrédients qu'ils possèdent déjà dans leur réfrigérateur.

## 2. Persona Cible (Maya)
* **Profil :** Maya, 18 ans, étudiante / apprentie médiamaticienne.
* **Contexte :** Rentre tard chez elle, fatiguée, pas envie de faire des courses.
* **Appareil :** Smartphone (360px de large), utilisation d'une seule main.
* **Contrainte :** « Si ça me prend plus de 2 minutes pour trouver une recette ou si on me demande un compte, je ferme l'application. »
* **Tâche mesurable :** Trouver une recette en moins de 15 minutes avec 3 ingrédients.

## 3. Périmètre du Projet (MVP)
* **Inclus :** Recherche par ingrédients restants, filtrage par temps (< 15 min), affichage sous forme de cartes.
* **Exclus :** Pas de création de compte, pas d'API payante, pas de fonctionnalités sociales.

## 4. Architecture des Écrans (Nom officiel des cadres)
Les noms d'écrans suivants sont définitifs et doivent être identiques dans les wireframes :
1. **`Liste` (Écran principal) :** Champ de recherche basé sur le contenu du réfrigérateur (« Qu'avez-vous dans votre frigo ? »), puces de filtres temporels et cartes de recettes.
2. **`Détail` (Fiche recette) :** Ingrédients complets, étapes de préparation, bouton retour.
3. **`Filtres` (Panneau de critères) :** Options de régimes (végétarien, sans cuisson).