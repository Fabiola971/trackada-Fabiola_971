import {readFileSync, existsSync} from "fs"
import {join, dirname} from "path"
import {homedir, hostname} from "os"
import {fileURLToPath} from "url"

console.log(homedir());//C:\Users\WebForce3
console.log(hostname());//DESKTOP-PKPOC80
console.log(import.meta.url);//file:///C:/Users/WebForce3/AdaTech/ada-tech/bloc1/projets/trackada/checktrack.js
console.log(fileURLToPath(import.meta.url));//C:\Users\WebForce3\AdaTech\ada-tech\bloc1\projets\trackada\checktrack.js


//Charger et parser le fichier track.json
const transformJSON = (fichier, encodage) => {
    const data = readFileSync(fichier, encodage);
    console.log(JSON.parse(data));
} 
transformJSON("track.json", "utf-8");

// Vérifier que le dossier~/ada-tech/bloc1/projetsexiste. S'il n'existe pas, afficher l'erreur et arrêter le script
const existFOLDER = (path) => {
    const exist = existsSync(path);
    if (exist) {
        console.log("✅ Le dossier existe");
    }else{
        console.log("❌ Le dossier n'existe pas");
    }
}
existFOLDER(join(homedir(), "AdaTech", "ada-tech", "bloc1", "projets"));