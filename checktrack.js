import {readFileSync, existsSync, readdirSync} from "fs"
import {join, dirname} from "path"
import {homedir, hostname} from "os"
import {fileURLToPath} from "url"

//Charger et parser le fichier track.json
const transformJSON = (fichier, encodage) => {
    const data = readFileSync(fichier, encodage);
    console.log(JSON.parse(data));
} 
const trackTabProjects = transformJSON("track.json", "utf-8");

// Vérifier que le dossier~/ada-tech/bloc1/projets existe. S'il n'existe pas, afficher l'erreur et arrêter le script
const existFOLDER = (path) => {
    const exist = existsSync(path);
    if (exist) {
        console.log(`✅ Dossier ${path.split("\\").pop()}\n`);
    }else{
        console.log(`❌Dossier ${path.split("\\").pop()}\n`);
    }
}
// Folder project exist
existFOLDER(join(homedir(), "AdaTech", "ada-tech", "bloc1", "projets"));
// Creation path project's variable 
const pathProjects = join(homedir(), "AdaTech", "ada-tech", "bloc1", "projets");

const pathTrackada = join(homedir(), "AdaTech", "ada-tech", "bloc1", "projets", "trackada");
const requireTrackada = ["checktrack.js", "track.json", "package.json", "README.md"];

const pathAdapage = join(homedir(), "AdaTech", "ada-tech", "bloc1", "projets", "adapage");
const requireAdapage = ["index.html", "style.css", "README.md"];


const pathAdaquiz = join(homedir(), "AdaTech", "ada-tech", "bloc1",
"projets", "adaquiz");
const requireAdaquiz = ["index.html", "style.css", "script.js", "questions.js", "README.md"];


const pathAdalgo = join(homedir(), "AdaTech", "ada-tech", "bloc1", "projets", "adalgo");
const requireAdalgo = ["package.json", "README.md"];


const pathadAtaviz = join(homedir(), "AdaTech", "ada-tech", "bloc1", "projets", "adataviz");
const requireAdataviz = ["index.html", "package.json", "README.md"];


const pathadAtabase = join(homedir(), "AdaTech", "ada-tech", "bloc1", "projets", "adatabase");
const requireAdatabase = ["package.json", "README.md"];


const pathAdapi = join(homedir(), "AdaTech", "ada-tech", "bloc1", "projets", "adapi");
const requireAdapi = ["package.json", "README.md"];

const checkPROJECT = (folderProjects, require) =>{
    const missing = require.filter((file) => !existsSync(join(folderProjects, file)))
    
    if (missing.length === 0) {
        console.log("✅ tous les fichiers sont présents \n")
    } else if(missing.length === 1){
        console.log(`❌ Dossier ${folderProjects.split("\\").pop()}\n - il manque ${missing[0]}` )
    }else if(missing.length === 2){
        console.log(`❌ Dossier ${folderProjects.split("\\").pop()}\n - il manque ${missing[0]}, ${missing[1]}.` )
    }else if(missing.length === 3){
        console.log(`❌ Dossier ${folderProjects.split("\\").pop()}\n - il manque ${missing[0]}, ${missing[1]} et ${missing[2]}.` )
    }
}

const printResult = (result) =>{
    console.log(``);
}
checkPROJECT(pathAdapi, requireAdapi);
readdirSync(pathProjects).forEach((project) => {
    
   
 });

