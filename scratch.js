/* eslint-disable no-console, no-unused-vars */
import nlp from './src/three.js'
import dates from './plugins/dates/src/plugin.js'
nlp.plugin(dates)
// import nlp from './builds/compromise.cjs'
// nlp.verbose('tagger')

let txt = ''

// let doc = nlp(txt)
// doc.debug()

// const doc = nlp('he is cool')
// doc.verbs().toNegative()
// doc.debug()

txt = `hazed-over`

let doc = nlp(txt)
// doc.replace('hazed', 'fogged')
doc.verbs().toInfinitive()
console.log(doc.text())

// const doc = nlp('Tony on september 12 1998 yeah')
// const doc = nlp('fifty five')
// doc.numbers().toOrdinal()
// doc.debug()
// console.dir(doc.times().json({ terms: false }), { depth: 5 })
// console.dir(doc.dates().json({ terms: false }), { depth: 5 })
// let doc = nlp(txt)
// doc.debug()




/*










*/
