import nlp from '../../src/three.js'

import speechPlugin from './src/plugin.js'
nlp.plugin(speechPlugin)
// nlp.verbose(true)
// nlp.verbose('date')

let txt = ''
txt = 'seventh millenium. white collar'

// let doc = nlp(txt).compute(['soundsLike', 'syllables'])
// console.dir(doc.json()[0], { depth: 5 })

console.log(nlp(txt).syllables())