# Palette de Couleurs - Recette Express (Piste B : Chaleureuse)

Ce document définit le système chromatique officiel de l'application **Recette Express**, basé sur la direction visuelle **Chaleureuse / Terroir** et respectant la règle d'ergonomie **60-30-10** ainsi que les normes d'accessibilité **WCAG 2.2**.

---

## 🎨 Règle 60-30-10 & Charte Chromatique

| Rôle dans l'UI | Proportion | Nom de la couleur | Code Hex | Utilisation dans l'interface |
| :--- | :--- | :--- | :--- | :--- |
| **Dominante** | **60%** | Crème chaud | `#FAF6EE` | Arrière-plan principal (`body`), espaces neutres |
| **Secondaire** | **30%** | Blanc pur | `#FFFFFF` | Conteneurs, cartes de recettes, cartes d'ingrédients |
| **Accentuation** | **10%** | Terracotta / Brique | `#E05A47` | Boutons d'action principaux (CTA), badges actifs, logo |

---

## 🏷️ Couleurs de Soutien & Badges Categoriels

Pour assurer une hiérarchie visuelle claire sans surcharger l'interface, des teintes pastel douces accompagnent les éléments d'information :

- **Vert Pastel (`#E8EFE6`) :** Puces de filtres secondaires (ex: *Végétarien*).
- **Ocre Pastel (`#F9EED9`) :** Badges de temps et budget (ex: *< 15 min*, *Budget*).
- **Texte Principal (`#2D2B2A`) :** Gris très foncé / Anthracite pour une lisibilité maximale (contraste élevé sur fond crème).

---

## ♿ Conformité WCAG 2.2 & Accessibilité

- **Contraste Texte / Fond Crème :** `#2D2B2A` sur `#FAF6EE` = Ratio de **13.5:1** (Conforme WCAG AA / AAA).
- **Contraste Texte / Carte Blanche :** `#2D2B2A` sur `#FFFFFF` = Ratio de **14.2:1** (Conforme WCAG AA / AAA).
- **Information non-chromatique :** Les couleurs ne sont jamais utilisées seules pour véhiculer une information. Chaque badge ou filtre combine couleur, libellé textuel explicite et icône visuelle.