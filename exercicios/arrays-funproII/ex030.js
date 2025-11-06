/*Crie um array playlist com ["música1", "música2", "música3", "música4"]. Faça as seguintes
operações em sequência:
1. Adicione "música5" no final
2. Remova a primeira música
3. Adicione "música0" no início
4. Substitua "música3" por "música3-remix" usando splice Imprima o array final. */
let playlist = ["música1", "música2", "música3", "música4"]
playlist.push('musica5')
playlist.shift()
playlist.unshift('musica0')
playlist.splice(2,1,'musica3-remix')
console.log(playlist)