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
        console.log(`✅ Dossier ${path.split("\\").pop()}`);
    }else{
        console.log(`❌Dossier ${path.split("\\").pop()}`);
    }
}
existFOLDER(join(homedir(), "AdaTech", "ada-tech", "bloc1", "projets"));

const pathProject = join(homedir(), "AdaTech", "ada-tech", "bloc1", "projets");

const checkPROJECT = (folderProjects, name) => {
    const way = join(folderProjects, name)
    const existing  = existsSync(way)
    const gitOk   = existsSync(join(way, ".git"))
    // return { existing, gitOk }
    if(existing && gitOk){
        console.log(`✅ Dossier du ${folderProjects.split("\\").pop()} ${name}`);
    }else if(name != existing){
        console.log(`❌ Dossier du ${folderProjects.split("\\").pop()} \n - Le dossier ${name} n'existe pas ou n'est pas nommé correctement`);
    }else if(gitOk === "false"){
        console.log(`- le repository git n'est pas initialisé`);
    }else{
        console.log(`- il manque <fichiers manquants>`);
    }
}

console.log(checkPROJECT(pathProject, "trackad"));