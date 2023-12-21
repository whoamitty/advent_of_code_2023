Les récap du jour

# 6 14-12-2023 Jeudi  

Problemes réglés:  
ajout de !/null/.test dans "searchNumberColor2"  
pour tester si une valeur est null avant de retouner le résultat

source  
https://www.benpickles.com/articles/60-what-happens-when-null-is-passed-to-a-javascript-regular-expression


Problematique final :  
est ce que je met le code de "statusColor"  
dans "searchNumberColor2" pour faire tout en une fois  

Je pense que je le ferrais





# 7 15-12-2023 vendredi

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



# 8 17-12-2023 Dimanche


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


# 9 18-12-2023 Lundi


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


# 10 19-12-2023 Mardi
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


# 11 20-12-2023 Mercredi
Pas d'IA

X Go deuxieme partie du défie


<details>
  <summary>Tout ce qui as été fait aujourd'hui</summary>
Pendant un moment,
j'ai oublié que c'est la musique qui me tennais éveillé  
Je l'avais éteinte de mon coté donc j'ai somnollé un peut.  

J'aurais pus faire plus je pense sans cette oublie.  


J'ai réagencer les fichiers du jour 2 de sorte à   
ajouter le travail en cours de la partie 2 du defi  

J'ai ajouté aussi la consigne dans le README.md  
J'ai compris le probleme  
et je l'ai expliqué à ma manière dans le fichier reflexion.txt

</details>

<!-- <details>
  <summary>Tout ce qui as été fait aujourd'hui</summary>

</details> -->
