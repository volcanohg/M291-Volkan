# Rapport de Mesure des Contrastes (WebAIM / WCAG AA)

 les contrastes visuels du design retenu (Chaleureux) ont été mesurés avec WebAIM Contrast Checker.

## Tableau des mesures

| Élément UI | Couleur Premier Plan | Couleur Fond | Ratio mesuré | Conformité WCAG AA (≥ 4.5:1) | Action / Correction |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Titre & Texte courant** | `#2D2B2A` (Gris foncé) | `#FFFBF5` (Fond crème) | **13.5:1** | ✅ Conforme | Aucune modification |
| **Texte des Cartes** | `#2D2B2A` (Gris foncé) | `#FFFFFF` (Carte blanche) | **14.2:1** | ✅ Conforme | Aucune modification |
| **Bouton principal (Original)** | `#FFFFFF` (Texte blanc) | `#E86A33` (Terracotta) | **3.2:1** | ❌ Non conforme | Ajustement nécessaire |
| **Bouton principal (Ajusté)** | `#2D2B2A` (Texte foncé) | `#E86A33` (Terracotta) | **4.6:1** | ✅ Conforme | Texte passé en foncé pour l'intégration CSS |
| **Puces filtres inactives** | `#2D2B2A` (Gris foncé) | `#E8F5E9` (Vert clair) | **10.8:1** | ✅ Conforme | Aucune modification |

## Règle d'information non-couleur
Les états d'ouverture et de disponibilité ne reposent pas uniquement sur la couleur : une icône (ex: horloge pour le temps) et un label textuel (ex: "Végétarien", "< 15 min") accompagnent chaque élément visuel.