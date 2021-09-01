var worldLogs = {}
var worlds = {}
var continents = {}
var nations = {}
var realms = {}
var characters = {}
var religions = {}
var militaryForces = {}
var bloodlines = {}
var all = {
    nations,
    realms,
    characters,
    religions,
    militaryForces,
    bloodlines
}

var randomObj = function (obj) {
    var keys = Object.keys(obj);
    return keys[Math.floor(Math.random()*keys.length)];
};

function generateFolklore(rank, skill){
    let ranks = {
        0: "Legendary",
        1: "Mytical",
        2: "Great",
        3: "Known",
        4: "Local"
    }

    let skills = {
        "Hunting": ["Archer", "Skirmisher", "Hunter", "Druid"],
        "Love": ["Cleric", "Leader", "Hero"],
        "War": ["Hero", "Warrior", "Barbarian", "Adventurer"],
        "Luck": ["Bard", "Seer", "Shaman"],
        "Magic": ["Wizard", "Mage", "Druid", "Shaman"],
        "Nature": ["Elementalist", "Druid", "Shaman", "Hunter", "Archer"],
        "Justice": ["Paladin", "Ruler", "Hero", "Warrior"],
        "Fertility": ["Leader", "Ruler", "Druid"]
    }

    let finalRank = ranks[rank]
    let finalSkill = skills[skill][Math.floor(Math.random()*skills[skill].length)]

    return `${finalRank} ${finalSkill}`
}

function generateMaleName(race){
    var racesPrefix = {
        'Human': ["J", "Hall", "John", "Benj", "Ingv", "Karst", "Edg", "Harald", "Har", "Tor", "Torg", "Arnf", "Olav", "Ol", "Mikk", "Rob", "Ben", "Svend"],
        'Ork': ["Uk", "Ov", "Ush", "Kn", "Fr", "Ixh", "In", "Unk", "Inuk", "Vox", "Kesh", "Ukhax", "Okshin", "Gun", "Zum", "Vul", "Far", "Sug", "Sh"],
        'Dwarf': ["Bjer", "Kur", "Thuk", "Gon", "Orir", "Lot", "Brun", "Bruk", "Bruz", "Bjor", "Kor", "Thi", "Tir", "Bunn", "Hurg", "Yus"],
        'Elf': ["Anl", "A", "R", "Tri", "An", "El", "Rel", "K", "Kai", "G", "Gan", "Kh", "H", "Has", "Hal", "D", "Dur", "Durl", "Tan", "Ar", "Arar"]
    }

    var vowels = ["a", "e", "i", "o", "u"]
    var consonants = ["b", "c", "d", "f", "g", "j", "k", "l", "m", "n", "p", "q", "s", "t", "v", "x", "z"]
    var suffix = vowels[Math.floor(Math.random()*vowels.length)]+consonants[Math.floor(Math.random()*consonants.length)]

    return racesPrefix[race][Math.floor(Math.random()*racesPrefix[race].length)]+suffix
}

function generateFemaleName(race){
    var racesPrefix = {
        'Human': ["Od", "Syn", "Syg", "Kris", "Lill", "Agn", "Hil", "Hild", "Kar", "Jann", "Frid", "Ann", "Aslaug", "Nell"],
        'Ork': ["Maz", "Urz", "Bul", "Bad", "Gul", "Graz", "Bor", "B", "Laz", "Ghak", "G", "Bur", "Sh", "Dur", "Durg", "Ar", "Arob", "Ug", "Ur"],
        'Dwarf': ["Gos", "Khen", "Kuf", "Thun", "Fiss", "Fissoun", "Nazz", "Vok", "Varmil", "Lot", "Var", "Varm", "Fissak", "Elr", "Wer", "Nor", "Hog", "Um"],
        'Elf': ["It", "Ityl", "I", "Ioel", "Lym", "L", "Saph", "Sap", "Nam", "Namyel", "Lor", "Gayl", "Al", "A", "Dar", "Vest", "Shan", "Aen", "Rin", "Neph", "Sol"]
    }

    var vowels = ["a", "e", "i", "o", "u"]
    var consonants = ["b", "c", "d", "f", "g", "j", "k", "l", "m", "n", "p", "q", "s", "t", "v", "x", "z"]
    var suffix = vowels[Math.floor(Math.random()*vowels.length)]+consonants[Math.floor(Math.random()*consonants.length)]

    return racesPrefix[race][Math.floor(Math.random()*racesPrefix[race].length)]+suffix
}

function generatePlaceName(){
    var prefix = ["To", "Ne", "Ge", "Glo", "Sne", "Ecra", "Echa", "Clo", "Stu", "Fa", "Bu", "Bo", "No", "Gru", "Fru", "Ucha", "Etri", "Gli", "Tha", "Nu", "Ja", "Ugla", "Bre", "Sni", "Eglu", "Aglu", "Gle", "Bra", "Wu", "De", "Mo", "Sna", "Fra"]
    var middle = ["dref", "drot", "ast", "gluk", "glec", "kuab", "tral", "when", "trun", "trom", "flor", "flur", "xhen", "katron", "bruk", "frak", "fragh", "van", "von", "vom", "ruf", "raf", "gruf", "graf", "prof", "prowf", "phaun", "phown"]
    var suffix = ["al", "es", "an", "que", "ae", "an", "ya", "au", "urg", "or", "na", "on", "us", "ad", "ia", "ze", "la", "nes", "les", "in", "ua", "ga", "ra", "ar"]

    var s = ""
    s += prefix[Math.floor(Math.random()*prefix.length)]
    s += middle[Math.floor(Math.random()*middle.length)]
    s += suffix[Math.floor(Math.random()*suffix.length)]
    return s
}

function generateNationName(){
    var l = [`${generatePlaceName()}`, `Great ${generatePlaceName()}`, `${generatePlaceName()} Nation`, `The ${generatePlaceName()}`, `${generatePlaceName()} Alliance`, `${generatePlaceName()} Union`, `Realms of ${generatePlaceName()}`, `${generatePlaceName()} Empire`, `${generatePlaceName()} Realms`]
    return l[Math.floor(Math.random()*l.length)]
}

function generateRealmName(){
    var l = [`The Realm of ${generatePlaceName()}`, `${generatePlaceName()} Realm`, `The Great ${generatePlaceName()} Realm`, `${generatePlaceName()} Kingdom`, `Great ${generatePlaceName()}`, `${generatePlaceName()}`, `Kingdom of ${generatePlaceName()}`, `Realm of ${generatePlaceName()}`]
    return l[Math.floor(Math.random()*l.length)]
}

function generateReligionGods(mono, size=1){
    if(mono == true){
        let gender = Math.random() > 0.5 ? "Male" : "Female"
        let name = gender == "Male" ? generateMaleName('Human') : generateFemaleName('Human')
        var l = [`${name}ism`, `${name} Worshipers`, `${name}lism`]
        var l2 = [`${name}ist`, `${name}anist`]
        var religionName = l[Math.floor(Math.random()*l.length)]

        var s = {
            'name': religionName,
            'worshipers': l2[Math.floor(Math.random()*l2.length)],
            'gods': [new Character(0, 0, "Imortal", "Divine", name, gender, 0, "Human", null, religionName).name]
        }
    } else{
        let name = generatePlaceName()
        var l = [`${name}logy`, `${name}ism`, `The ${name} Gods`, `${name} Pantheon`]   
        var l2 = [`${name}ist`, `${name}anist`]
        let gods = []

        for(let i=0; i<size; i++){
            let gender = Math.random() > 0.5 ? "Male" : "Female"
            let name = gender == "Male" ? generateMaleName('Human') : generateFemaleName('Human')
            var religionName = l[Math.floor(Math.random()*l.length)]
            gods[i] = new Character(0, 0, "Imortal", "Divine", name, gender, 0, "Human", null, religionName).name
        }

        var s = {
            'name': religionName,
            'worshipers': l2[Math.floor(Math.random()*l2.length)],
            'gods': gods
        }
    }

    return s
}

function generateMilitaryForceName(nation){
    s = [`${nation} Forces`, `${nation} Brigade`, `Military Forces of ${nation}`, `Great Forces of ${nation}`, `${nation} Soldiers`, `Soldiers of ${nation}`, `${nation} Defenders`]

    return s[Math.floor(Math.random()*s.length)]
}

class Religion{
    constructor(mono=true){
        var religion = mono == true ? generateReligionGods(true) : generateReligionGods(false, Math.floor(Math.random()*5)+2)

        this.name = religion.name
        this.type = mono == true ? "Monotheist" : "Polytheist"
        this.worshipers = religion.worshipers
        this.gods = religion.gods

        worldLogs[`? Religion Created`] = {
            'name': this.name,
            'type': this.type,
            'gods': this.gods   
        }

        religions[this.name] = this
    }
}

class MilitaryForce{
    constructor(nation, enemy=null){
        this.name = generateMilitaryForceName(nation.name)
        this.nation = nation.name
        this.allies = nation.allies
        this.enemies = nation.enemies
        this.warchief = new Character(20, 10, "Alive", null, null, null, null, nation.culture, nation, nation.religion).name

        militaryForces[this.name] = this
    }
}

class Character{
    constructor(minimumAge=18, rank=3, state, bloodline=null, name=null, gender=null, age=null, race=null, nation=null, religion=null){
        var genders = ["Male", "Female"]
        var races = ["Human", "Elf", "Dwarf", "Ork"]
        var divineSources = ["Hunting", "Love", "War", "Luck", "Magic", "Nature", "Justice", "Fertility"]

        this.gender = gender == null ? Math.random() <= 0.5 ? genders[0] : genders[1] : gender
        this.state = state
        this.age = age == null ? Math.floor(Math.random()*(100-minimumAge)+minimumAge) : age
        this.race = race == null ? races[Math.floor(Math.random()*races.length)] : race
        this.isMarried = false
        this.childs = []

        var names = {
            'Male': bloodline == null ?  `${generateMaleName(this.race)} ${generateMaleName(this.race)}` : `${generateMaleName(this.race)} ${bloodline}`,
            'Female': bloodline == null ? `${generateFemaleName(this.race)} ${generateFemaleName(this.race)}` : `${generateFemaleName(this.race)} ${bloodline}`
        }
        var ranks = {
            0: this.gender == "Male" ? 'God' : 'Goddess',
            1: this.gender == "Male" ? 'King' : 'Queen',
            2: this.gender == "Male" ? 'Lord' : 'Lady',
            3: 'Commoner',
            10: 'Warchief',
            11: 'Hero'
        }

        this.name = name == null ? names[this.gender] : name
        this.bloodline = bloodline == null ? new Bloodline(this.name.split(" ")[this.name.split(" ").length-1], this).name : bloodline

        this.title = ranks[rank]

        if(this.bloodline == "Divine"){
            this.nation = "Divine Plane"
            this.religion = religion
            this.worships = null
            this.divineSource = divineSources[Math.floor(Math.random()*divineSources.length)]
            this.knownAs = generateFolklore(0, this.divineSource)
        } else{
            if(nation == null){
                this.nation = Object.keys(nations).length > 0 ? randomObj(nations) : "unknown"
                this.religion = randomObj(religions)
            } else if(nation == "unknown"){
                this.nation = nation
                this.religion = randomObj(religions)
            } else{
                this.nation = nation.name
                this.religion = religion
            }

            if(rank == 1 || rank == 11){
                let skills = ["War", "Justice"]

                this.knownAs = generateFolklore(2, skills[Math.floor(Math.random()*skills.length)])
            }

            if(this.religion != null || this.religion != undefined){
                let ref = religions[this.religion].gods
                this.worships = ref[Math.floor(Math.random()*ref.length)]
            }
        }

        characters[this.name] = this
    }
}

class Bloodline{
    constructor(name, first){
        this.name = name
        this.tree = [[first.name]]

        bloodlines[this.name] = this
    }

    marriage(who, withWho){
        for(let i=0; i<this.tree.length; i++){
            if(this.tree[i][0] == withWho.name){
                this.tree[i].push(who.name)
                withWho.isMarried = true

                for(let i=0; i<bloodlines[who.bloodline].tree.length; i++){
                    if(bloodlines[who.bloodline].tree[i][0] == who.name){
                        bloodlines[who.bloodline].tree[i].push(withWho.name)
                        who.isMarried = true
                    }
                }
            }
        }
    }

    child(who, fromWho){
        for(let i=0; i<this.tree.length; i++){
            if(this.tree[i][0] == fromWho.name){
                if(this.tree[i][1] != undefined){
                    this.tree[i].push([who.name])
                    
                    let anotherWho = characters[this.tree[i][1]]
                    for(let i=0; i<bloodlines[anotherWho.bloodline].tree.length; i++){
                        if(bloodlines[anotherWho.bloodline].tree[i][0] == anotherWho.name){
                            bloodlines[anotherWho.bloodline].tree[i].push([who.name])
                        }
                    }

                    fromWho.childs.push(who.name)
                    anotherWho.childs.push(who.name)
                } else{
                    return {'Error': 'Child must be from a couple.'}
                }
            }
        }
    }
}

class Realm{
    constructor(religion, isCapital, nation="Independent"){
        var types = ["River", "Lake", "Hill", "Forest"]
        var cultures = ["Human", "Ork", "Elf", "Dwarf"]

        this.name = generateRealmName()
        this.nation = nation.name
        this.ruler = new Character(18, 2, "Alive", null, null, null, null, nation.culture, nations[this.nation], religion).name
        characters[this.ruler]["realm"] = this.name
        this.population = Math.floor(Math.random()*50000)
        this.religion = religion
        this.type = types[Math.floor(Math.random()*types.length)]
        this.culture = nation == "Independent" ? cultures[Math.floor(Math.random()*cultures.length)] : nation.culture
        this.capital = isCapital
        this.port = this.type == "River" ? true : false
        this.castle = this.capital == true ? true : Math.random() > 0.5 ? true : false
        this.walled = this.capital == true ? true : Math.random() > 0.5 ? true : false
        this.tradeCenter = this.capital == true ? true : Math.random() > 0.5 ? true : false
        this.religiousCenter = this.capital == true ? true : Math.random() > 0.5 ? true : false

        realms[this.name] = this
    }
}

// Wars and Alliances
class Nation{
    constructor(continent){
        var cultures = ["Human", "Ork", "Elf", "Dwarf"]

        this.name = generateNationName()
        this.realms = []
        this.continent = continent
        this.population = 0
        this.culture = cultures[Math.floor(Math.random()*cultures.length)]
        this.allies = []
        this.enemies = []

        if(Object.keys(religions).length > 0){
            this.religion = Math.random() > 0.5 ? randomObj(religions) : Math.random() > 0.5 ? new Religion(true).name : new Religion(false).name 
        } else{    
            this.religion = Math.random() > 0.5 ? new Religion(true).name : new Religion(false).name 
        }

        let realmNumber = Math.floor(Math.random()*5)+1
        for(let i=1; i<=realmNumber; i++){
            let thisRealm = new Realm(this.religion, i == 1 ? true : false, this, this.culture)
            this.realms.push(thisRealm.name)
            this.population += thisRealm.population
        }

        this.ruler = new Character(18, 1, "Alive", null, null, null, null, this.culture, this, this.religion).name
        this.militaryForce = new MilitaryForce(this)

        nations[this.name] = this
    }

    fall(time){
        var causes = ["Natural", "Killed in Battle", "Assassinated", "Suicide"]
        var realmsFounded = this.realms.length

        nations[this.name]["realms"] = []
        nations[this.name]["population"] = 0
        nations[this.name]["allies"] = []
        nations[this.name]["enemies"] = []
        nations[this.name]["state"] = "Fallen Nation"

        if(characters[nations[this.name]['ruler']].state == "Alive"){
            characters[nations[this.name]['ruler']].title = "Commoner"
        }
        worldLogs[`${time} Nation Fall`] = {
            'name': this.name,
            'realmsFoundedOverTime': realmsFounded,
            'year': time,
            'ruler': this.ruler,
            'cause': characters[nations[this.name]['ruler']].state == "Dead" ? "Ruler Death" : "Unknown"
        }
    }
}

class Continent{
    constructor(world){
        this.name = generatePlaceName()
        this.size = Math.floor(Math.random()*5000)
        this.nations = []
        this.world = world

        continents[this.name] = this
    }

    riseNation(){
        let nation = new Nation(this.name)
        this.nations.push(nation.name)

        return nations[nation.name]
    }

    fallNation(time=null){
        if(Object.keys(nations) > 0){
            let choosen = Object.keys(nations)[Math.floor(Math.random()*Object.keys(nations).length)]
            let nation = nations[choosen]
            nation.fall(time)
        }
    }
}

class World{
    constructor(worldAge=null){
        if(worldAge == null){
            var errorCode = {
                'Error': 'Missing World Age',
                'Text': 'Please insert a valid world age. (5000 years maximum recommended)'
            } 
            console.log(errorCode)
            return errorCode
        }

        this.name = generatePlaceName()
        this.continents = []
        this.size = 0

        this.size += Math.floor(Math.random()*3000)
        this.time = 0
        var initialTime = Math.floor(Math.random()*worldAge)
        console.log(`WorldCreator v${VERSION}\n\nGenerating world history for '${this.name}', starting at year ${initialTime}. This can take some minutes.`)
        this.passTime(initialTime)

        worlds[this.name] = this

        console.log(`Thank you for using WorldCreator v${VERSION}!\n\nA new world was generated using the '${ALGORITHM}' algorithm. More details about the world are being shown down here: \n-----\nWorlds: ${Object.keys(worlds).length}\nContinents: ${Object.keys(continents).length}\nNations: ${Object.keys(nations).length}\nRealms: ${Object.keys(realms).length}\nCharacters: ${Object.keys(characters).length}\nMilitary Forces: ${Object.keys(militaryForces).length}\nReligions: ${Object.keys(religions).length}\n-----\nby matjs\n\nIf you have any questions, send me an email at 'matheusjgsilva42@gmail.com' or visit the project's documentation at https://github.com/matjsilva/worldcreator. Good storytelling!`)
        console.log(`${EXTRA}`)
    }

    passTime(years=null){
        if(years == null){
            var errorCode = {
                'Error': 'Missing Years to pass',
                'Text': 'Please insert a valid amount of years to generate.'
            } 
            console.log(errorCode)
            return errorCode
        }

        var events = {
            "Geoformation": 0, // 1000 > 80
            'Nation Rise': 0, // 100 > 20
            'Marriage': 0, // 50 > 25
            'Child': 0, // 50 > 50
            // 'Alliance': 0, // 250 > 25
            // 'Declaration of War': 0, // 250 > 60
            // 'Battle': 0, // 250 > 75
            // 'Hero Surge': 0
        }

        for(let i=0; i<years; i+=1){
            this.time += 1

            var ages = {
                'Human': 100,
                'Elf': 200,
                'Ork': 120,
                'Dwarf': 80
            }

            for(let j=0; j<Object.keys(characters).length; j++){
                let who = characters[Object.keys(characters)[j]]
                if(who.state == "Alive" && who.title != "Commoner" && who.title != "Divine"){
                    who.age += 1//

                    if(who.age >= ages[who.race]){
                        who.state = "Dead"

                        if(who.title == "King" || who.title == "Queen" || who.title == "Hero"){
                            let nation = nations[who.nation]

                            worldLogs[`${this.time} Character Death`] = {
                                'age': who.age,
                                'name': who.name,
                                'wasA': who.title,
                                'year': this.time,
                                'cause': 'Natural'
                            }

                            if(who.title != "Hero"){
                                if(who.childs.length == 0){
                                    nation.fall(this.time)
                                } else{
                                    nation.ruler == who.childs[Math.floor(Math.random()*who.childs.length)]
                                }
                            }
                        } else if(who.title == "Lord" || who.title == "Lady"){
                            let realm = realms[who.realm]

                            if(realm != undefined){
                                realm.ruler = new Character(18, 2, "Alive", null, null, null, null, nations[realm.nation].culture, nations[realm.nation], realm.religion).name
                                characters[realm.ruler]["realm"] = realm.name
                            }
                        }
                    }
                }
            }

            if(events[`Geoformation`] == 500 && Math.random()*100 > 40){
                let cont = new Continent(this.name)
                this.continents.push(cont.name)
                this.size += cont.size

                events["Geoformation"] = 0
                worldLogs[`${this.time} Geoformation`] = {
                    'year': this.time,
                    'createdContinent': cont.name
                }
            } else if(events['Geoformation'] > 500){
                events['Geoformation'] = 0
            }

            if(events[`Nation Rise`] == 100 && Math.random()*100 > 20){
                if(Object.keys(continents).length > 0){
                    let where = Object.keys(continents)[Math.floor(Math.random()*Object.keys(continents).length)]
                    let cont = continents[where]
                    var nation = cont.riseNation()

                    events["Nation Rise"] = 0
                    worldLogs[`${this.time} Nation Rise`] = {
                        'year': this.time,
                        'name': nation.name,
                        'ruler': nation.ruler
                    }
                }
            } else if(events['Nation Rise'] > 100){
                events['Nation Rise'] = 0
            }

            if(events['Marriage'] == 10 && Math.random()*100 > 20){
                if(Object.keys(characters).length > 1){
                    let target1 = Object.keys(characters)[Math.floor(Math.random()*Object.keys(characters).length)]
                    let who = characters[target1]
                    let target2 = Object.keys(characters)[Math.floor(Math.random()*Object.keys(characters).length)]
                    let withWho = characters[target2]

                    while(target1 == target2){
                        target1 = Object.keys(characters)[Math.floor(Math.random()*Object.keys(characters).length)]
                    }

                    if(withWho.bloodline != "Divine" && who.bloodline != "Divine" && who != withWho && who.state == "Alive" && withWho.state == "Alive"){
                        if(withWho.isMarried == false && who.isMarried == false){
                            bloodlines[withWho.bloodline].marriage(who, withWho)

                            events['Marriage'] = 0
                            if(who.title == "King" || who.title == "Queen" || who.title == "Hero" || withWho.title == "King" || withWho.title == "Queen" || withWho.tittle == "Hero"){
                                worldLogs[`${this.time} Marriage`] = {
                                    'year': this.time,
                                    'who': who.name,
                                    'withWho': withWho.name
                                }
                            }

                            if(Math.random() > 0.5){
                                let child = new Character(1, 2, "Alive", who.bloodline, null, null, 1, who.race, who.nation, who.religion)
                                bloodlines[who.bloodline].child(child, who)
                                worldLogs[`${this.time} Child`] = {
                                    'year': this.time,
                                    'child': child.name,
                                    'parent1': who.name,
                                    'parent2': withWho.name
                                }
                            }
                        }
                    }
                }
            } else if(events['Marriage'] > 10){
                events['Marriage'] = 0
            }

            if(events["Child"] == 10 && Math.random()*100 > 25){
                if(Object.keys(characters).length > 1){
                    let target = Object.keys(characters)[Math.floor(Math.random()*Object.keys(characters).length)]
                    let fromWho = characters[target]
                    if(fromWho.bloodline != "Divine"){
                        let child = new Character(1, 3, "Alive", fromWho.bloodline, null, null, 1, fromWho.race, fromWho.nation, fromWho.religion)

                        for(let j=0; j<bloodlines[fromWho.bloodline].tree.length; j++){
                            if(bloodlines[fromWho.bloodline].tree[j][0] == fromWho.name && bloodlines[fromWho.bloodline].tree[j].length > 1  && fromWho.state == "Alive"){
                                bloodlines[fromWho.bloodline].child(child, fromWho)
                                
                                events['Child'] = 0
                                worldLogs[`${this.time} Child`] = {
                                    'year': this.time,
                                    'child': child.name,
                                    'parent1': fromWho.name,
                                    'parent2': bloodlines[fromWho.bloodline].tree[j][1]
                                }
                            }
                        }
                    }
                }
            } else if(events["Child"] > 10){
                events["Child"] = 0
            }

            // if(events["Hero Surge"] == 1000 && Math.random()*100 > 50){
            //     if(Object.keys(nations).length > 0){
            //         let hero = new Character(18, 11, "Alive")

            //         worldLogs[`${this.time} Hero Surge`] = {
            //             'year': this.time,
            //             'name': hero.name,
            //             'knownAs': hero.knownAs
            //         }
            //     }
            // } else if(events["Hero Surge"] > 1000){
            //     events["Hero Surge"] = 0
            // }

            // if(events["Alliance"] == 250 && Math.random()*100 > 75){

            // }

            let choosen = Object.keys(events)[Math.floor(Math.random()*Object.keys(events).length)]
            events[choosen] += 1
        }
    }

    delete(){
        let worldName = this.name

        worlds = {}
        continents = {}
        nations = {}
        realms = {}
        characters = {}
        religions = {}
        militaryForces = {}
        bloodlines = {}
        all = {
            nations,
            realms,
            characters,
            religions,
            militaryForces,   
        }

        console.log(`World '${worldName}' deleted!`)
    }
}

class Dimension{} // WIP

VERSION = "1.1 Alpha"
ALGORITHM = "And Time Passes"
EXTRA = `Tip: You are running the version ${VERSION} of webWC.js, which has a new feature: Time and WorldLog, you can pass world's time with worlds[world-name].passTime(years) so procedural events can happen in your world. You can see what happened in the past years by typing worldLogs in you console.`