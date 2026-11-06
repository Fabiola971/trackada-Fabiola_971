                TRACKADA - PROJECT

Trackada est un projet côté serveur construit avec node.js.
Il permet de savoir si tous les dossiers present dans mon arborescence est conforme à la "Track" fournie dans le fichier track.json.

Comment procéder ?
- S'assurer d'avoir la bonne version de node (v26.13.0) avec la commande node --version.
- S'assurer d'avoir la bonne version npm (11.20.0) avec la commande npm -v.
(si ce n'est pas le cas rdv sur le site officiel de node js pour les mises à jour)
- Lancer le fichier checktrack.js avec la commande node suivi du nom du fichier dans le terminal.

Une fois lancer vous êtes informés de l'état de chaque dossier existant.
✅ Dossier existant
✅ Dossier verifié et complet
❌ Dossier inexistant
❌ Dossier avec fichier manquant(les fichiers manquant sont listés).
Le pourcentage de dossier complet s'affiche ainsi qu'un compteur.
