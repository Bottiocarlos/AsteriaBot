const Toxic = () => new Promise((resolve, reject) => {
  let kata = [
    'pig',
    'ape',
    'dog',
    'mf',
    'jembut',
    'pussy',
    'dick',
    'shout',
    'shout',
    'gay',
    'lesbi',
    'yoga',
    'setan',
    'piyo',
    'chopsticks',
    'cumbersome',
    'bastard',
    'fuck'
  ]
  let randKata = kata[Math.floor(Math.random() * kata.length)]
  let list = [
    `your face cake ${randKata}`, `you know ${randKata} ?`,`${randKata} lel ${randKata}`,
    `why ${randKata} not happy?`,`noisy here lol ${randKata}`,`dont laugh ${randKata}`,
    `wey ${randKata}!!`,`I m oh oh okay ${randKata}`,`dont like to send your location ${randKata}`,
    `tired uff ${randKata}`, `today you are interested in wrestling ${kata[2]} ?`, `whats that ${randKata}`,
    `wao handsome and you cake ${randKata}`,`fuck you ${randKata}`,
    `mf ${randKata}`,
    `tea ${randKata}`,`Your style is pretentious, you are a cake ${randKata}`,`${randKata} Lmfao`
  ]
  resolve(list[Math.floor(Math.random() * list.length)])
})

//PLEASE DON'T CHANGE THE NAME MAKERS
//CREATED BY Xeon 

module.exports = { Toxic }