> [!IMPORTANT]  
> Resulte of soluce not working

## Instructions and context


<details >
  <summary>In English</summary>

```
--- Day 2: Cube Conundrum ---
You're launched high into the atmosphere! The apex of your trajectory just barely reaches the surface of a large island floating in the sky. You gently land in a fluffy pile of leaves. It's quite cold, but you don't see much snow. An Elf runs over to greet you.

The Elf explains that you've arrived at Snow Island and apologizes for the lack of snow. He'll be happy to explain the situation, but it's a bit of a walk, so you have some time. They don't get many visitors up here; would you like to play a game in the meantime?

As you walk, the Elf shows you a small bag and some cubes which are either red, green, or blue. Each time you play this game, he will hide a secret number of cubes of each color in the bag, and your goal is to figure out information about the number of cubes.

To get information, once a bag has been loaded with cubes, the Elf will reach into the bag, grab a handful of random cubes, show them to you, and then put them back in the bag. He'll do this a few times per game.

You play several games and record the information from each game (your puzzle input). Each game is listed with its ID number (like the 11 in Game 11: ...) followed by a semicolon-separated list of subsets of cubes that were revealed from the bag (like 3 red, 5 green, 4 blue).

For example, the record of a few games might look like this:

Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
In game 1, three sets of cubes are revealed from the bag (and then put back again). The first set is 3 blue cubes and 4 red cubes; the second set is 1 red cube, 2 green cubes, and 6 blue cubes; the third set is only 2 green cubes.

The Elf would first like to know which games would have been possible if the bag contained only 12 red cubes, 13 green cubes, and 14 blue cubes?

In the example above, games 1, 2, and 5 would have been possible if the bag had been loaded with that configuration. However, game 3 would have been impossible because at one point the Elf showed you 20 red cubes at once; similarly, game 4 would also have been impossible because the Elf showed you 15 blue cubes at once. If you add up the IDs of the games that would have been possible, you get 8.

Determine which games would have been possible if the bag had been loaded with only 12 red cubes, 13 green cubes, and 14 blue cubes. What is the sum of the IDs of those games?

To begin, get your puzzle input.

Answer: 
 

You can also [Share] this puzzle.
```
</details >


<details>


  <summary>En français</summary>
  
```
Translated by chatgpt

--- Jour 2: Énigme du Cube ---
Vous êtes propulsé haut dans l'atmosphère ! Le sommet de votre trajectoire atteint à peine la surface d'une grande île flottant dans le ciel. Vous atterrissez doucement dans un tas moelleux de feuilles. Il fait assez froid, mais vous ne voyez pas beaucoup de neige. Un lutin court vers vous pour vous saluer.

Le lutin explique que vous êtes arrivé sur l'île de la neige et s'excuse pour le manque de neige. Il sera ravi de vous expliquer la situation, mais c'est un peu loin, donc vous avez un peu de temps. Ils n'ont pas beaucoup de visiteurs ici ; aimeriez-vous jouer à un jeu en attendant ?

En marchant, le lutin vous montre un petit sac et quelques cubes qui sont soit rouges, verts ou bleus. Chaque fois que vous jouez à ce jeu, il cachera un nombre secret de cubes de chaque couleur dans le sac, et votre objectif est de découvrir des informations sur le nombre de cubes.

Pour obtenir des informations, une fois qu'un sac a été chargé de cubes, le lutin plongera la main dans le sac, prendra une poignée de cubes au hasard, les montrera, puis les remettra dans le sac. Il fera cela quelques fois par jeu.

Vous jouez plusieurs jeux et enregistrez les informations de chaque jeu (votre entrée de puzzle). Chaque jeu est répertorié avec son numéro d'identification (comme le 11 dans Jeu 11 : ...) suivi d'une liste de sous-ensembles de cubes qui ont été révélés du sac (comme 3 rouges, 5 verts, 4 bleus).

Par exemple, l'enregistrement de quelques jeux pourrait ressembler à ceci :

Jeu 1 : 3 bleus, 4 rouges ; 1 rouge, 2 verts, 6 bleus ; 2 verts
Jeu 2 : 1 bleu, 2 verts ; 3 verts, 4 bleus, 1 rouge ; 1 vert, 1 bleu
Jeu 3 : 8 verts, 6 bleus, 20 rouges ; 5 bleus, 4 rouges, 13 verts ; 5 verts, 1 rouge
Jeu 4 : 1 vert, 3 rouges, 6 bleus ; 3 verts, 6 rouges ; 3 verts, 15 bleus, 14 rouges
Jeu 5 : 6 rouges, 1 bleu, 3 verts ; 2 bleus, 1 rouge, 2 verts
Dans le jeu 1, trois ensembles de cubes sont révélés du sac (et remis à l'intérieur). Le premier ensemble est composé de 3 cubes bleus et 4 cubes rouges ; le deuxième ensemble est composé de 1 cube rouge, 2 cubes verts et 6 cubes bleus ; le troisième ensemble est composé uniquement de 2 cubes verts.

Le lutin aimerait d'abord savoir quels jeux auraient été possibles si le sac ne contenait que 12 cubes rouges, 13 cubes verts et 14 cubes bleus ?

Dans l'exemple ci-dessus, les jeux 1, 2 et 5 auraient été possibles si le sac avait été chargé avec cette configuration. Cependant, le jeu 3 aurait été impossible parce qu'à un moment donné, le lutin vous a montré 20 cubes rouges à la fois ; de même, le jeu 4 aurait également été impossible parce que le lutin vous a montré 15 cubes bleus à la fois. Si vous additionnez les identifiants des jeux qui auraient été possibles, vous obtenez 8.

Déterminez quels jeux auraient été possibles si le sac avait été chargé avec seulement 12 cubes rouges, 13 cubes verts et 14 cubes bleus. Quelle est la somme des identifiants de ces jeux ?
```
</details>