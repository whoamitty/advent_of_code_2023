## Instructions and context

> [!IMPORTANT]  
> Resulte of this soluce not working


<details >
  <summary>In English</summary>

```
--- Day 4: Scratchcards ---
The gondola takes you up. Strangely, though, the ground doesn't seem to be coming with you; you're not climbing a mountain. As the circle of Snow Island recedes below you, an entire new landmass suddenly appears above you! The gondola carries you to the surface of the new island and lurches into the station.

As you exit the gondola, the first thing you notice is that the air here is much warmer than it was on Snow Island. It's also quite humid. Is this where the water source is?

The next thing you notice is an Elf sitting on the floor across the station in what seems to be a pile of colorful square cards.

"Oh! Hello!" The Elf excitedly runs over to you. "How may I be of service?" You ask about water sources.

"I'm not sure; I just operate the gondola lift. That does sound like something we'd have, though - this is Island Island, after all! I bet the gardener would know. He's on a different island, though - er, the small kind surrounded by water, not the floating kind. We really need to come up with a better naming scheme. Tell you what: if you can help me with something quick, I'll let you borrow my boat and you can go visit the gardener. I got all these scratchcards as a gift, but I can't figure out what I've won."

The Elf leads you over to the pile of colorful cards. There, you discover dozens of scratchcards, all with their opaque covering already scratched off. Picking one up, it looks like each card has two lists of numbers separated by a vertical bar (|): a list of winning numbers and then a list of numbers you have. You organize the information into a table (your puzzle input).

As far as the Elf has been able to figure out, you have to figure out which of the numbers you have appear in the list of winning numbers. The first match makes the card worth one point and each match after the first doubles the point value of that card.

For example:

Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11
In the above example, card 1 has five winning numbers (41, 48, 83, 86, and 17) and eight numbers you have (83, 86, 6, 31, 17, 9, 48, and 53). Of the numbers you have, four of them (48, 83, 17, and 86) are winning numbers! That means card 1 is worth 8 points (1 for the first match, then doubled three times for each of the three matches after the first).

Card 2 has two winning numbers (32 and 61), so it is worth 2 points.
Card 3 has two winning numbers (1 and 21), so it is worth 2 points.
Card 4 has one winning number (84), so it is worth 1 point.
Card 5 has no winning numbers, so it is worth no points.
Card 6 has no winning numbers, so it is worth no points.
So, in this example, the Elf's pile of scratchcards is worth 13 points.

Take a seat in the large pile of colorful cards. How many points are they worth in total?

To begin, get your puzzle input.

Answer: 
 

You can also [Share] this puzzle.
```


</details >


<details>
<summary>En français</summary>

```
--- Jour 4: Cartes à gratter ---
La télécabine vous emmène vers le haut. Étrangement, cependant, le sol ne semble pas vous suivre ; vous n'escaladez pas une montagne. Tandis que le cercle de l'île de la Neige s'éloigne en dessous de vous, un tout nouveau territoire apparaît soudainement au-dessus de vous ! La télécabine vous dépose à la surface de la nouvelle île et entre dans la station.

En sortant de la télécabine, la première chose que vous remarquez est que l'air ici est beaucoup plus chaud qu'il ne l'était sur l'île de la Neige. Il est aussi assez humide. Est-ce là que se trouve la source d'eau ?

La prochaine chose que vous remarquez est un lutin assis par terre de l'autre côté de la station dans ce qui semble être un tas de cartes carrées colorées.

"Oh ! Salut !" Le lutin court vers vous avec enthousiasme. "En quoi puis-je vous être utile ?" Vous demandez des sources d'eau.

"Je ne suis pas sûr ; je gère simplement la télécabine. Cela ressemble à quelque chose que nous aurions, cependant - c'est tout de même l'île de l'Île ! Je parie que le jardinier le saurait. Il est sur une autre île, cependant - euh, le petit genre entouré d'eau, pas le genre flottant. Nous devons vraiment trouver un meilleur système de nommage. Dites ce que vous voulez : si vous pouvez m'aider avec quelque chose de rapide, je vous prêterai mon bateau et vous pourrez aller rendre visite au jardinier. J'ai reçu toutes ces cartes à gratter en cadeau, mais je n'arrive pas à comprendre ce que j'ai gagné."

Le lutin vous conduit vers le tas de cartes colorées. Là, vous découvrez des dizaines de cartes à gratter, toutes avec leur revêtement opaque déjà gratté. En en prenant une, on dirait que chaque carte a deux listes de nombres séparées par une barre verticale (|) : une liste de numéros gagnants, puis une liste de numéros que vous avez. Vous organisez les informations dans un tableau (votre entrée de puzzle).

Pour autant que le lutin ait pu le comprendre, vous devez déterminer quels sont les numéros que vous avez qui apparaissent dans la liste des numéros gagnants. La première correspondance rend la carte d'une valeur d'un point et chaque correspondance après la première double la valeur en points de cette carte.

Par exemple :

Carte 1 : 41 48 83 86 17 | 83 86 6 31 17 9 48 53
Carte 2 : 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Carte 3 : 1 21 53 59 44 | 69 82 63 72 16 21 14 1
Carte 4 : 41 92 73 84 69 | 59 84 76 51 58 5 54 83
Carte 5 : 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Carte 6 : 31 18 13 56 72 | 74 77 10 23 35 67 36 11
Dans l'exemple ci-dessus, la carte 1 a cinq numéros gagnants (41, 48, 83, 86 et 17) et huit numéros que vous avez (83, 86, 6, 31, 17, 9, 48 et 53). Des numéros que vous avez, quatre d'entre eux (48, 83, 17 et 86) sont des numéros gagnants ! Cela signifie que la carte 1 vaut 8 points (1 pour la première correspondance, puis doublé trois fois pour chacune des trois correspondances après la première).

La carte 2 a deux numéros gagnants (32 et 61), elle vaut donc 2 points.
La carte 3 a deux numéros gagnants (1 et 21), elle vaut donc 2 points.
La carte 4 a un numéro gagnant (84), elle vaut donc 1
```





</details>

