Les récap du jour

6eme live sur le defi 2
si on prend en compte ceux faits sur twitch+youtube 

Mais 4ieme si en compte seulement ceux de youtube
# 4 14-12-2023 Jeudi  

Problemes réglés:  
ajout de !/null/.test dans "searchNumberColor2"  
pour tester si une valeur est null avant de retouner le résultat

source  
https://www.benpickles.com/articles/60-what-happens-when-null-is-passed-to-a-javascript-regular-expression


Problematique final :  
est ce que je met le code de "statusColor"  
dans "searchNumberColor2" pour faire tout en une fois  

Je pense que je le ferrais





# 5 15-12-2023 vendredi

C'est décevant, mais aujourd'hui,  
pas d'avancement  
peut-être la fatigue ?  

Il y a eu aussi un gros retard de 1h à cause de mauvaises manipes :  
2 arrêts du live sans le faire expres  

Et pour contre-temps  


Ça ne marche pas comme ça devrais  
Pourquoi ça ne s'affiche qu'à la fin ?  
console.log("Nombre de bleu dans le premier tiragee :",searchNumberColor2(lineToTable(line)[0],regexBlue))  

Je ne comprend même plus, certains points de mon code  

À partir de maintenant, j'utiliserais l'IA 1 jour/2  



# 6 17-12-2023 Dimanche


<details >
  <summary>Tout ce qui as été fait aujourd'hui</summary>
Pour Aujourd'hui :  

1. C'est full IA  

X 2. Il serais bien de comprendre  
pourquoi "searchNumberColor2"  
semble s'exécuter seulement à la fin.  

X 3. je vais essayer de néttoyer le code  
pour y voir plus clair.  



### Ce qu'il faut supprimer
#### Les fonctions:  
X 1. La fonction statusGame1()

X 2. searchNumberColor(line,regexColor)

X 3. gameSumElements(line)

#### Les "Appelles" de fonction :
X les "console.log" en fin d'exécution, il y en as trop, ça embrouille.  
X ...


#### variables useless, and init as:  

X (let listNumberColor) in lineToTable  
X concatGamesTrue=""   
X sumIndexGames=0   
X sumAllTrueElements=0    
X sumAllElements=0  
X sumAllElementsPlusIDs=0 

## I renamed
searchNumberColor2 en => searchNumberColor
</details >


# 7 18-12-2023 Lundi


Pas d'IA


Je me suis trompé ↓ c'était au top finalement
X 1. Probleme non mentionné
dans le récap de hier
mais les sous-ensembles m'ont
l'air d'être mal définis

X 2. Il faut que je push
les dernieres modifs du code


X 3. Essayons d'intégrer statusColor(color, number)
à notre code


4. et de généraliser au test de toutes les couleur
sur chaque ensemble d'elements
J'ai essayé, mais j'ai du avoir un probleme de raisonnement





X 1. Probleme non mentionné
dans le récap de hier
mais les sous-ensembles m'ont
l'air d'être mal définis

X 2. Il faut que je push
les dernieres modifs du code

X 3. Essayons d'intégrer statusColor(color, number)
à notre code

4. et de généraliser au test de toutes les couleur
sur chaque ensemble d'elements
J'ai essayé, mais j'ai du avoir un probleme de raisonnement


commit massage
I integrated the function in the code statusColor(color, number)
I created the function testAllColors(setOfTable)
This function look if all the subsets are available



Ça code
00:42:13

statusColor
51:56

récap
02:19:23


# 8 19-12-2023 Mardi
<details>
  <summary>Tout ce qui as été fait aujourd'hui</summary>

IA autorisé (3 requetes faites aujourd'hui)

X 1. Comparrer le résultat avec celui de reddit

X 2. relire la solution de reddit

X 3. essayer de trouver une erreur de
résonnement dans la double imbriquation de forEach

X Demander un peut d'aide à Mr. leprofdedev

En hors live:
J'ai corrigé une balise fermante </details> dans le fichier
avancement_par_lives.md

Aujourd'hui j'ai aussi
changé les boucles forEach en boucles for
parceque les boucles forEach ne permettent pas de 
d'en sortir par une opération return
</details>


# 9 20-12-2023 Mercredi
Pas d'IA

X Go deuxieme partie du défie


<details>
  <summary>Tout ce qui as été fait aujourd'hui</summary>
Pendant un moment,  
j'ai oublié que c'est la musique qui me tennais éveillé  
Je l'avais éteinte de mon coté(pas coté youtube)  
donc j'ai somnollé un peut.  

J'aurais pus faire plus je pense sans cette oublie.    

J'ai expliqué ce qui as été fait hier  
vue qui j'ai codé dans le vent(sans stream erreur d'inattention)    

J'ai réagencer les fichiers du jour 2 de sorte à   
ajouter le travail en cours de la partie 2 du defi  

J'ai ajouté aussi la consigne dans le README.md  
en original (Anglais)  
et aussi traduit en Français  

J'ai compris le probleme  
et je l'ai expliqué à ma manière dans le fichier reflexion.txt  

</details>

<!-- <details>
  <summary>Tout ce qui as été fait aujourd'hui</summary>

</details> -->



# 10 20-12-2023 Jeudi

IA autorisé (1 requete à la fin)
Codeium as relevés une erreur dans testIfMinimal()


<details>
  <summary>Conversation avec Codeium</summary>






```
-- Requete faite --
Qu'est ce que fait ce code ?

function testIfMinimal(setOfTable){
let numberColor

let listMinimal=[0,0,0]


for (subSet of setOfTable ){
    for (indexListMinimal  of [[0,'red',regexRed],[1,'green',regexGreen],[2,'blue',regexBlue]]){
        
        numberColor=searchNumberColor(subSet,indexListMinimal[2])
        
        if (listMinimal[indexListMinimal] < numberColor){
            listMinimal[indexListMinimal] = numberColor
        }
    }
}
return listMinimal



-- Réponse de Codeium --

Ce code définit une fonction testIfMinimal, qui prend en paramètre setOfTable. Voici ce que la fonction semble faire :

Initialise une variable numberColor sans lui attribuer de valeur.
Crée une liste listMinimal avec trois valeurs initiales de zéro, qui semble représenter un comptage minimal pour trois couleurs respectivement : rouge, vert et bleu.
Itère sur chaque subSet dans le setOfTable. On suppose que setOfTable est une collection de sous-ensembles.
Pour chaque subSet, la fonction itère sur une liste de trois tableaux, où chaque tableau contient un index pour listMinimal, une couleur et un regex associé à cette couleur.
Pour chaque couleur, la fonction searchNumberColor est appelée avec subSet et le regex correspondant à la couleur. La fonction searchNumberColor n'est pas définie dans cet extrait de code, mais on peut supposer qu'elle recherche des correspondances de la couleur dans le subSet en utilisant le regex fourni et renvoie le nombre de correspondances.
Si le nombre de correspondances pour une couleur dans le subSet courant est supérieur à la valeur actuelle correspondante dans listMinimal, alors cette valeur est mise à jour dans listMinimal avec le nouveau nombre plus élevé de correspondances.
Après avoir itéré sur tous les subSet et toutes les couleurs, la fonction retourne listMinimal, qui contient maintenant le compte maximal pour chaque couleur rouge, vert et bleu trouvé dans tous les sous-ensembles de setOfTable.
Notez que dans la boucle interne, indexListMinimal est utilisé de manière incorrecte. Il semblerait que l'intention était d'utiliser indexListMinimal[0] pour indexer listMinimal, car indexListMinimal est un tableau et non un nombre.

Aussi, la fonction utilise des variables regexRed, regexGreen, et regexBlue qui ne sont pas définies dans cet extrait de code. Ces variables sont probablement des expressions régulières utilisées pour identifier les couleurs dans les sous-ensembles.

Il est important de noter que, sans plus de contexte ou de code supplémentaire, cette interprétation peut ne pas être tout à fait correcte. Si vous avez des parties spécifiques du code ou des fonctionnalités que vous souhaitez clarifier davantage, n'hésitez pas à demander.

```
</details>


Récap:
fonction ajouté testIfMinimal()  retournant une liste
décrivant quel sont les nombres
d'éléments minimals ajouté

Retour à une version une version prédantes de part1/app.js  
car je m'était trompé de fichier dans lequel éditer  
ça devais être part2/app.js  
f11c379aeffbd65372e32b21d3dca12f3f13e43b  


# 11  22-12-2023 vendredi



Pas d'IA


X 1. Essayer de comprendre l'erreur
trouvé par Codeium(l'IA) hier

X 2. Essayer trouver
ce qui cloche dans testIfMinimal()


La boucle interne,
indexListMinimal était utilisé de manière incorrecte.
Il semblerait que l'intention était d'utiliser
indexListMinimal[0] pour indexer listMinimal,
car indexListMinimal est un tableau et non un nombre.




renamed testIfMinimal() to power()


Et maintenant power  
calcule la multiplication des minimums

J'ai fait pour chaque ligne
dans rl.on('line', (line) => {
la somme des puissances calculés





