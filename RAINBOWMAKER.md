# Rainbow maker
La fabrication d'arcs-en-ciel standard répond aux spécifications suivantes, par ordre de priorité :
- Chaque couleur est unique
- Le rouge est en première position
- L'orange se trouve entre le rouge et le jaune
- Le jaune se situe après l'orange
- Le vert est avant le violet
- Le bleu arrive entre le vert et le violet
- Le violet est en dernière position
- l'arc-en-ciel se compose de 6 couleurs, exclusivement
- Chaque couleur est unique

Quelque soit l'arc-en-ciel créé, la méthode dédiée doit évaluer sa validité.

## Le Besoin
***En tant que*** fabricante ou fabricant d'arcs-en-ciel \
***Etant donné*** une utilisatrice ou un utilisateur de l'interface graphique \
***Je voudrais*** valider la conception d'arcs-en-ciel standard \
***Afin d'apporter*** plus de couleurs

## Le Résultat attendu
```
function isValidRainbow(userRainbow){...}

isValidRainbow([]) // false
isValidRainbow([{ item: RAINBOW_COLORS.VIOLET }]) // false
isValidRainbow([{ item: RAINBOW_COLORS.RED }]) // false
isValidRainbow([{ item: RAINBOW_COLORS.RED }, { item: RAINBOW_COLORS.RED }]) // false
isValidRainbow([
    { item: RAINBOW_COLORS.RED },
    { item: RAINBOW_COLORS.ORANGE },
    { item: RAINBOW_COLORS.YELLOW },
    { item: RAINBOW_COLORS.GREEN },
    { item: RAINBOW_COLORS.BLUE },
    { item: RAINBOW_COLORS.VIOLET }
]) // true
```
