import test from 'tape'
import nlp from '../_lib.js'
const here = '[three/verb-toInfinitive] '

test('toInfinitive-phrase:', function (t) {
  let arr = [
    ['he walked', 'he walk'],
    ['i walked', 'i walk'],
    ['we walked', 'we walk'],
    ['they walked', 'they walk'],
    ['the friends walked', 'the friends walk'],
    ['the friend walked', 'the friend walk'],
    ['our users walked', 'our users walk'],
    ['our user walked', 'our user walk'],
    ['the eye closed', 'the eye close'],
    ['the eyes closed', 'the eyes close'],
    ['their colloseum will open', 'their colloseum open'],
    ['their children will open', 'their children open'],
    ['he walks', 'he walk'],
    ['he walked', 'he walk'],
    ['he will walk', 'he walk'],
    ['he is walking', 'he walk'],
    ['he was walking', 'he walk'],
    ['i am walking', 'i walk'],
    ['he will be walking', 'he walk'],
    ['he has walked', 'he walk'],
    ['he had walked', 'he walk'],
    ['he will have walked', 'he walk'],
    ['he has been walking', 'he walk'],
    ['he had been walking', 'he walk'],
    ['he will have been walking', 'he walk'],
    ['got walked', 'walk'],
    ['was walked', 'walk'],
    ['were walked', 'walk'],
    ['i was being walked', 'i walk'],
    ['had been walked', 'walk'],
    ['have been walked', 'walk'],
    ['is walked', 'walk'],
    ['are walked', 'walk'],
    ['is being walked', 'walk'],
    ['she has been walked', 'she walk'],
    ['had been walked', 'walk'],
    ['will have been walked', 'walk'],
    ['will be walked', 'walk'],
    ['would be walked', 'walk'],
    ['would have been walked', 'walk'],
    ['is going to walk', 'walk'],
    ['did walk', 'walk'],
    ['used to walk', 'walk'],
    ['do walk', 'walk'],
    ['does walk', 'walk'],

    // negatives
    ['i did not walk', 'i do not walk'],
    ['we did not walk', 'we do not walk'],
    ['he did not walk', 'he does not walk'],
    ['i was not being walked', 'i do not walk'],
    ['i had not walked', 'i do not walk'],
    ['I will do that', 'I do that'],
    ['I will not do that', 'I do not do that'],
    ["I won't do that", 'I do not do that'],
    // ['I will never do that', 'I do not do that'],

    // want-infinitive
    // ['he wants to walk', 'he want to walk'],
    // ['he wanted to walk', 'he want to walk'],
    // ['he will want to walk', 'he want to walk'],
    // adverbs
    // ['i was really not being walked', 'i do really not walk'],
    // ['i was not really being walked', 'i do not really walk'],
    ['i was being really not walked', 'i do really not walk'],
    ['i was being not really walked', 'i do not really walk'],
    ['he was not going to walk', 'he does not walk'],
    ['we are putting', 'we put'],
    // from particple
    ['overthrown', 'overthrow'],
    ['thrown', 'throw'],
    // ["overgrown", "overgrow"],
    ['flown', 'fly'],
    ['shown', 'show'],
    ['sown', 'sow'],
    ['sworn', 'swear'],
    // ["worn", "wear"],
    ['forgotten', 'forget'],
    ['bitten', 'bite'],
    ['stolen', 'steal'],
    // ["shrunk", "shrink"],

    ['upheld', 'uphold'],
    ['withheld', 'withhold'],
    ['dyed', 'dye'],
    ['gutted', 'gut'],
    ['slotted', 'slot'],
    ['allotted', 'allot'],
    ['dotted', 'dot'],
    ['acquitted', 'acquit'],
    ['knitted', 'knit'],
    ['transmitted', 'transmit'],
    ['permitted', 'permit'],
    ['omitted', 'omit'],
    ['committed', 'commit'],
    ['remitted', 'remit'],
    ['emitted', 'emit'],
    ['admitted', 'admit'],
    ['submitted', 'submit'],
    ['outfitted', 'outfit'],
    ['benefitted', 'benefit'],
    ['he fitted', 'he fit'],
    ['vetted', 'vet'],
    ['persuaded', 'persuade'],
    ['netted', 'net'],
    ['formatted', 'format'],
    ['tasted', 'taste'],
    ['he quoted', 'he quote'],
    ['consulted', 'consult'],
    ['resulted', 'result'],
    ['catapulted', 'catapult'],
    ['defaulted', 'default'],
    ['wilted', 'wilt'],
    ['tilted', 'tilt'],
    ['salted', 'salt'],
    ['malted', 'malt'],
    ['exited', 'exit'],
    ['he excited', 'he excite'],
    ['deposited', 'deposit'],
    ['transited', 'transit'],
    ['revisited', 'revisit'],
    ['visited', 'visit'],
    ['inherited', 'inherit'],
    ['solicited', 'solicit'],
    ['expedited', 'expedite'],
    ['marketed', 'market'],
    ['skyrocketed', 'skyrocket'],
    ['acted', 'act'],
    ['accentuated', 'accentuate'],
    ['situated', 'situate'],
    ['perpetuated', 'perpetuate'],
    ['fluctuated', 'fluctuate'],
    ['evaluated', 'evaluate'],
    ['graduated', 'graduate'],
    ['abbreviated', 'abbreviate'],
    ['alleviated', 'alleviate'],
    ['deviated', 'deviate'],
    ['renegotiated', 'renegotiate'],
    ['negotiated', 'negotiate'],
    ['differentiated', 'differentiate'],
    ['substantiated', 'substantiate'],
    ['self-initiated', 'self-initiate'],
    ['initiated', 'initiate'],
    ['satiated', 'satiate'],
    ['expropriated', 'expropriate'],
    ['appropriated', 'appropriate'],
    ['affiliated', 'affiliate'],
    ['conciliated', 'conciliate'],
    ['repudiated', 'repudiate'],
    ['mediated', 'mediate'],
    ['enunciated', 'enunciate'],
    ['created', 'create'],
    ['warehoused', 'warehouse'],
    ['kissed', 'kiss'],
    ['missed', 'miss'],
    ['spurred', 'spur'],
    ['blurred', 'blur'],
    ['incurred', 'incur'],
    ['occurred', 'occur'],
    ['deterred', 'deter'],
    ['transferred', 'transfer'],
    ['conferred', 'confer'],
    ['inferred', 'infer'],
    ['referred', 'refer'],
    ['marred', 'mar'],
    ['jarred', 'jar'],
    ['scarred', 'scar'],
    ['barred', 'bar'],
    ['quickly scored', 'quickly score'],
    ['quickly favored', 'quickly favor'],
    ['quickly monitored', 'quickly monitor'],
    ['quickly factored', 'quickly factor'],
    ['quickly co-sponsored', 'quickly co-sponsor'],
    ['quickly sponsored', 'quickly sponsor'],
    ['quickly mirrored', 'quickly mirror'],
    ['quickly anchored', 'quickly anchor'],
    ['quickly stopped', 'quickly stop'],
    ['quickly topped', 'quickly top'],
    ['quickly popped', 'quickly pop'],
    ['quickly chopped', 'quickly chop'],
    ['quickly sipped', 'quickly sip'],
    ['outstripped quickly', 'outstrip quickly'],
    ['stripped quickly', 'strip quickly'],
    ['whipped', 'whip'],
    ['transshipped', 'transship'],
    ['worshipped', 'worship'],
    ['shipped', 'ship'],
    ['dipped', 'dip'],
    ['stepped', 'step'],
    ['tapped', 'tap'],
    ['unwrapped', 'unwrap'],
    ['shrinkwrapped', 'shrinkwrap'],
    ['wrapped', 'wrap'],
    ['strapped', 'strap'],
    ['scrapped', 'scrap'],
    ['snapped', 'snap'],
    ['mapped', 'map'],
    ['revamped', 'revamp'],
    ['stamped', 'stamp'],
    ['clamped', 'clamp'],
    ['helped', 'help'],
    ['seeped', 'seep'],
    ['reaped', 'reap'],
    ['banned', 'ban'],
    ['frowned', 'frown'],
    ['drowned', 'drown'],
    ['crowned', 'crown'],
    ['browned', 'brown'],
    ['downed', 'down'],
    ['wholly-owned', 'wholly-own'],
    ['co-owned', 'co-own'],
    ['owned', 'own'],
    ['pawned', 'pawn'],
    ['attuned', 'attune'],
    ['tuned', 'tune'],
    ['boned', 'bone'],
    ['twinned', 'twin'],
    ['underpinned', 'underpin'],
    ['skinned', 'skin'],
    ['thinned', 'thin'],
    ['spanned', 'span'],
    ['panned', 'pan'],
    ['scanned', 'scan'],
    ['canned', 'can'],
    ['intertwined', 'intertwine'],
    ['entwined', 'entwine'],
    ['destined', 'destine'],
    ['quarantined', 'quarantine'],
    ['enshrined', 'enshrine'],
    ['predetermined', 'predetermine'],
    ['undermined', 'undermine'],
    ['examined', 'examine'],
    ['mined', 'mine'],
    ['outlined', 'outline'],
    ['underlined', 'underline'],
    ['streamlined', 'streamline'],
    ['sidelined', 'sideline'],
    ['inclined', 'incline'],
    ['declined', 'decline'],
    ['lined', 'line'],
    ['machined', 'machine'],
    ['imagined', 'imagine'],
    ['confined', 'confine'],
    ['quickly defined', 'quickly define'],
    ['fined', 'fine'],
    ['dined', 'dine'],
    ['convened', 'convene'],
    ['caned', 'cane'],
    ['annulled', 'annul'],
    ['extolled', 'extol'],
    ['quickly leveled', 'quickly level'],
    ['travelled', 'travel'],
    ['expelled', 'expel'],
    ['dispelled', 'dispel'],
    ['compelled', 'compel'],
    ['funnelled', 'funnel'],
    ['channelled', 'channel'],
    ['cancelled', 'cancel'],
    ['rivalled', 'rival'],
    ['profiled', 'profile'],
    ['scaled', 'scale'],
    ['baled', 'bale'],
    ['invoked', 'invoke'],
    ['revoked', 'revoke'],
    ['choked', 'choke'],
    ['he spiked', 'he spike'],
    ['mimicked', 'mimic'],
    ['flaked', 'flake'],
    // ["baked", "bake"],
    ['guaranteed', 'guarantee'],
    ['agreed', 'agree'],
    ['freed', 'free'],
    ['fed', 'feed'],
    ['reworded', 'reword'],
    ['worded', 'word'],
    ['afforded', 'afford'],
    ['forwarded', 'forward'],
    ['rewarded', 'reward'],
    ['safely guarded', 'safely guard'],
    ['regarded', 'regard'],
    ['discarded', 'discard'],
    ['carded', 'card'],
    ['bombarded', 'bombard'],
    ['ended', 'end'],
    ['aided', 'aid'],
    ['plodded', 'plod'],
    ['skidded', 'skid'],
    ['embedded', 'embed'],
    ['dissuaded', 'dissuade'],
    ['persuaded', 'persuade'],
    ['dubbed', 'dub'],
    ['bobbed', 'bob'],
    ['ribbed', 'rib'],
    ['swabbed', 'swab'],
    ['stabbed', 'stab'],
    ['nabbed', 'nab'],
    ['opened', 'open'],
    // ["resold", "resell"],
    ['blitzed', 'blitz'],
    ['overpaid', 'overpay'],
    ['marketed', 'market'],
    ['skyrocketed', 'skyrocket'],
    ['ticketed', 'ticket'],
    ['aroused', 'arouse'],
    ['espoused', 'espouse'],
    ['warehoused', 'warehouse'],
    ['created', 'create'],
    ['acquired', 'acquire'],
    ['aired', 'air'],
    ['persevered', 'persevere'],
    ['imprisoned', 'imprison'],
    ['poisoned', 'poison'],
    ['he seasoned', 'he season'],
    ['combed', 'comb'],
    ['climbed', 'climb'],
    ['succumbed', 'succumb'],
    ['decreed', 'decree'],
    ['hacked', 'hack'],
    ['clocked', 'clock'],
    ['blocked', 'block'],
    ['linked', 'link'],
    ['tasked', 'task'],
    ['reckoned', 'reckon'],
    ['shouted', 'shout'],
    ['poured', 'pour'],
    ['aroused', 'arouse'],
    ['decreed', 'decree'],
    ['freed', 'free'],

    // ["interpreted", "interpret"],
    // ["longed", "long"],
    // ["intervened", "intervene"],
    // ["stoned", "stone"],
    // ["phoned", "phone"],
    // ["overtaken", "overtake"],
    // ["undertaken", "undertake"],
    // ["taken", "take"],
    // ["overseen", "oversee"],
    // ["foreseen", "foresee"],
    // ["overridden", "override"],
    // ["forbidden", "forbid"],
    // ["withstood", "withstand"],
    // ["ground", "grind"],
    // ["acquired", "acquire"],
    // ["aired", "air"],
    // ["adhered", "adhere"],
    // ["ill-equipped", "ill-equip"],
    // ["equipped", "equip"],
    // ["underdeveloped", "underdevelop"],
    // ["well-developed", "well-develop"],
    // ["foreign-owned", "foreign-own"],

    ['he forecasted', 'he forecast'],
    ['he misunderstood', 'he misunderstand'],
    ['he blasted', 'he blast'],
    ['he ignited', 'he ignite'],
    ['he permeated', 'he permeate'],
    ['he recreated', 'he recreate'],
    ['he praised', 'he praise'],
    ['he explored', 'he explore'],
    ['he layered', 'he layer'],
    ['he answered', 'he answer'],
    ['he lowered', 'he lower'],
    ['he severed', 'he sever'],
    ['he leaked', 'he leak'],
    ['he buttered', 'he butter'],
    ['he uttered', 'he utter'],
    ['he cleaned', 'he clean'],
    ['he rained', 'he rain'],
    ['he joined', 'he join'],
    ['he ruined', 'he ruin'],
    ['he postponed', 'he postpone'],
    ['he pondered', 'he ponder'],
    ['he triggered', 'he trigger'],
    ['he checkered', 'he checker'],
    ['he slaughtered', 'he slaughter'],
    ['he chartered', 'he charter'],
    ['he sequestered', 'he sequester'],
    ['he bolstered', 'he bolster'],
    ['he mustered', 'he muster'],
    ['he benefited', 'he benefit'],
    ['he credited', 'he credit'],
    ['he deposited', 'he deposit'],
    ['he edited', 'he edit'],
    ['he exhibited', 'he exhibit'],
    ['he exploited', 'he exploit'],
    ['he inherited', 'he inherit'],
    ['he prohibited', 'he prohibit'],
    ['he recruited', 'he recruit'],
    ['he submited', 'he submit'],
    ['he suited', 'he suit'],
    ['he visited', 'he visit'],
    ['he vomited', 'he vomit'],
    ['he waited', 'he wait'],
    ['he cited', 'he cite'],
    ['he excited', 'he excite'],
    ['he invited', 'he invite'],
    ['he recited', 'he recite'],

    // gerund -> infinitive
    ['coming', 'come'],
    ['joking', 'joke'],
    ['poking', 'poke'],
    ['naming', 'name'],
    ['tuning', 'tune'],
    ['hazing', 'haze'],
    //phrasal
    ['hazing over', 'haze over'],
    // ['hazing-over', 'haze-over'],

    // pastTense -> infinitive
    ['came', 'come'],
    ['named', 'name'],
    ['moved', 'move'],
    ['joked', 'joke'],
    ['poked', 'poke'],
    ['hooping', 'hoop'],
    ['ached', 'ache'],
    ['tuned', 'tune'],
    //phrasal
    ['hazed over', 'haze over'],
    // ['hazed-over', 'haze-over'],

    // ["have been working non-stop on the project", `To have been working non-stop on the project`],
    // ["will be leaving early tomorrow", `To be leaving early tomorrow`],
    // ["had just finished washing the dishes", `To have just finished washing the dishes`],
    // ["should have checked the details more carefully", `To have checked the details more carefully`],
    // ["can easily solve the puzzle", `To be able to solve the puzzle easily`],
    // ["might have been waiting at the wrong place", `To have been waiting at the wrong place`],
    // ["would have gone to the event if invited", `To have gone to the event if invited`],
    // ["should be preparing for the presentation", `To be preparing for the presentation`],
    // ["is trying to learn Spanish", `To be trying to learn Spanish`],
    // ["has been thinking about changing careers", `To have been thinking about changing careers`],
    // ["have been considering a new strategy", `To have been considering a new strategy`],
    // ["will be going to the concert tonight", `To be going to the concert tonight`],
    // ["was just making a cup of coffee", `To have just made a cup of coffee`],
    // ["must have forgotten the appointment", `To have forgotten the appointment`],
    // ["can jump higher than anyone else", `To be able to jump higher than anyone else`],
    // ["could have been mistaken about the time", `To have been mistaken about the time`],
    // ["would be flying to Paris next month", `To be flying to Paris next month`],
    // ["should have started the project earlier", `To have started the project earlier`],
    // ["is planning to visit the museum", `To be planning to visit the museum`],
    // ["has been dreaming about a vacation", `To have been dreaming about a vacation`],
    // ["might be moving to a different city", `To be moving to a different city`],
    // ["was reading a fascinating book", `To have read a fascinating book`],
    // ["could play the guitar beautifully", `To be able to play the guitar beautifully`],
    // ["will have finished the report by tomorrow", `To have finished the report by tomorrow`],
    // ["has been working out regularly", `To have been working out regularly`],
    // ["was going to call you later", `To have been going to call you later`],
    // ["might have left the keys in the car", `To have left the keys in the car`],
    // ["is starting to understand the concept", `To be starting to understand the concept`],
    // ["should be doing the homework now", `To be doing the homework now`],
    // ["would have been upset if you didn't show up", `To have been upset if you didn't show up`],
    // ["has been trying to quit smoking", `To have been trying to quit smoking`],
    // ["can't wait to see the new movie", `To not be able to wait to see the new movie`],
    // ["were hoping for a positive outcome", `To have hoped for a positive outcome`],
    // ["could have told me the truth", `To have told me the truth`],
    // ["wouldn't dare to break the rules", `To not dare to break the rules`],
    // ["is looking forward to the trip", `To be looking forward to the trip`],
    // ["should be resting after the surgery", `To be resting after the surgery`],
    // ["might be studying for the exam", `To be studying for the exam`],
    // ["have been meaning to call you", `To have been meaning to call you`],
    // ["was wondering about the results", `To have wondered about the results`],
  ]
  arr.forEach(a => {
    let doc = nlp(a[0])
    doc.verbs().toInfinitive()
    t.equal(doc.text(), a[1], here + ' ' + a[0])
  })
  t.end()
})

test('toInfinitive-coerced:', function (t) {
  let arr = [
    ['smoked', 'smoke'],
    ['detailed', 'detail'],
    ['tailored', 'tailor'],
    ['controlled', 'control'],
    ['recorded', 'record'],
    ['trapped', 'trap'],
    ['associated', 'associate'],
    ['stunned', 'stun'],
  ]
  arr.forEach(a => {
    let doc = nlp(a[0]).tag('PastTense')
    doc.verbs().toInfinitive()
    t.equal(doc.text(), a[1], here + ' ' + a[0])
  })
  t.end()
})
