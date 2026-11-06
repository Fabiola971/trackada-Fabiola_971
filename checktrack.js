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

// Function Folder project exist
const existFOLDER = (path) => {
    const exist = existsSync(path);
    if (exist) {
        console.log(`✅ Dossier ${path.split("\\").pop()}\n`);
    }else{
        console.log(`❌ Dossier ${path.split("\\").pop()} n'existe pas.\n`);
    }
}

// Creation path project's variable 
const pathProjects = join(homedir(), "AdaTech", "ada-tech", "bloc1", "projets");

const pathAdapage = join(homedir(), "AdaTech", "ada-tech", "bloc1", "projets", "adapage");
const requireAdapage = ["index.html", "style.css", "README.md"];

const pathAdaquiz = join(homedir(), "AdaTech", "ada-tech", "bloc1",
"projets", "adaquiz");
const requireAdaquiz = ["index.html", "style.css", "script.js", "questions.js", "README.md"];

const pathTrackada = join(homedir(), "AdaTech", "ada-tech", "bloc1", "projets", "trackada");
const requireTrackada = ["checktrack.js", "track.json", "package.json", "README.md"];

const pathAdalgo = join(homedir(), "AdaTech", "ada-tech", "bloc1", "projets", "adalgo");
const requireAdalgo = ["package.json", "README.md"];


const pathAdataviz = join(homedir(), "AdaTech", "ada-tech", "bloc1", "projets", "adataviz");
const requireAdataviz = ["index.html", "package.json", "README.md"];


const pathadAtabase = join(homedir(), "AdaTech", "ada-tech", "bloc1", "projets", "adatabase");
const requireAdatabase = ["package.json", "README.md"];


const pathAdapi = join(homedir(), "AdaTech", "ada-tech", "bloc1", "projets", "adapi");
const requireAdapi = ["package.json", "README.md"];


let totalProjects = 0;
let fullProjects = 0;
const checkPROJECT = (folderProjects, require) =>{
    totalProjects++;
    const missing = require.filter((file) => !existsSync(join(folderProjects, file)));
    
    const gitOk = existsSync(join(folderProjects, ".git"));
    if(!folderProjects){
        console.log(`❌ dossier du projet ${folderProjects.split("\\").pop()}\n- le dossier n'existe pas ou n'est pas nommé correctement`);
    }else 
        if ((missing.length === 0) && (gitOk)){
            fullProjects++;
            console.log(`✅ Dossier ${folderProjects.split("\\").pop()}\n`);
        }else 
            if((missing.length === 1) && (gitOk)){
                console.log(`❌ dossier du projet ${folderProjects.split("\\").pop()}\n- il manque ${missing}\n`);
            }else 
                if((missing.length === 2) && (gitOk)){
                    console.log(`❌ dossier du projet ${folderProjects.split("\\").pop()}\n- il manque ${missing}\n- il manque ${missing[0]}, ${missing[1]}.\n`);
                }else 
                    if((missing.length === 3) && (gitOk)){
                        console.log(`❌ dossier du projet ${folderProjects.split("\\").pop()}\n- il manque ${missing}\n- il manque ${missing[0]}, ${missing[1]} et ${missing[2]}.\n`);
                    }else
                        if((missing.length === 1) && (!gitOk)){
                            console.log(`❌ Dossier ${folderProjects.split("\\").pop()}\n- le repository git n'est pas initialisé\n- il manque ${missing[0]}\n`); 
                        }else 
                            if ((missing.length === 2) && (!gitOk)){
                                console.log(`❌ Dossier ${folderProjects.split("\\").pop()}\n- le repository n'est pas initialisé \n- il manque ${missing[0]}, ${missing[1]}.\n` );
                            }else
                                if((missing.length === 3) && (!gitOk)){
                                    console.log(`❌ Dossier ${folderProjects.split("\\").pop()}\n- le repository n'est pas initialisé\n- il manque ${missing[0]}, ${missing[1]} et ${missing[2]}.\n`);
                                }else{
                                    console.log(`❌ Dossier ${folderProjects.split("\\").pop()}\n `);
                                }
}

existFOLDER(pathProjects);
checkPROJECT(pathAdapage, requireAdapage);
checkPROJECT(pathAdaquiz, requireAdaquiz);
checkPROJECT(pathTrackada, requireTrackada);
checkPROJECT(pathAdalgo, requireAdalgo);
checkPROJECT(pathAdataviz, requireAdataviz);
checkPROJECT(pathadAtabase, requireAdatabase);
checkPROJECT(pathAdapi, requireAdapi);

const calculPercentage = (full, total) =>  {
    const result = Math.round((full/total)*100);
   console.log(result);
   if(result === 100){
        console.log(`✅ ${result}% des projets sont initialisés correctement (${full}/${total})`)
   }else{
        console.log(`❌ ${result}% des projets sont initialisés correctement (${full}/${total})`)
   }
}
calculPercentage(fullProjects, totalProjects);


    






