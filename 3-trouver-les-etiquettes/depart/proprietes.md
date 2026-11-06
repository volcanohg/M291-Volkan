# Les étiquettes de la location d'instruments

Une ligne par étiquette. La colonne « Sert à » répond aux questions 2, 3 et 4 de la méthode : afficher, filtrer, trier. Une étiquette qui ne sert à rien de tout cela n'entre pas dans le fichier, sauf `id`. Ajoutez autant de lignes qu'il en faut.

| Étiquette | Écran | Sert à (afficher, filtrer, trier) | Sorte de valeur | Unique ? | Exemple |
| --- | --- | --- | --- | --- | --- |
| id | aucun | aucun | nombre | oui | 1 |
| nom | Liste, Détail | afficher | texte | non | "Violon 3/4" |
| famille | Liste, Détail | afficher, filtrer | texte | non | "cordes" |
| prix | Liste, Détail | afficher, trier | nombre | non | 25 |
| disponible | aucun | filtrer | vrai/faux | non | true |
| taille | Détail | afficher | texte | non | "enfant" |
| description | Détail | afficher | texte | non | "Avec étui et archet." |

Pourquoi le nom de l'instrument ne suffit pas à distinguer les fiches (une phrase) :

/* Le nom ne suffit pas car le classeur contient deux instruments qui s'appellent exactement « Violon 3/4 » ; seul l'id permet de les différencier de manière unique.*/

Suggestion de l'IA que j'ai refusée, et pourquoi :

/*L'IA a suggéré d'ajouter l'étiquette « etat » pour décrire l'usure de l'instrument, mais je l'ai refusée car elle ne répond à aucun écran, filtre ou tri demandé dans le mini-brief.*/