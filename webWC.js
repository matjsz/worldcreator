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

        if(bloodline != "Divine"){
            var names = {
                'Male': bloodline == null ?  `${generateMaleName(this.race)} ${generateMaleName(this.race)}` : `${generateMaleName(this.race)} ${bloodline}`,
                'Female': bloodline == null ? `${generateFemaleName(this.race)} ${generateFemaleName(this.race)}` : `${generateFemaleName(this.race)} ${bloodline}`
            }
        }
        var ranks = {
            0: this.gender == "Male" ? 'God' : 'Goddess',
            1: this.gender == "Male" ? 'King' : 'Queen',
            2: this.gender == "Male" ? 'Lord' : 'Lady',
            3: 'Commoner',
            10: 'Warchief'
        }

        this.name = name == null ? names[this.gender] : name
        this.bloodline = bloodline == null ? new Bloodline(this.name.split(" ")[this.name.split(" ").length-1], Math.floor(Math.random()*5)+1, this).tree.name : bloodline

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

            if(rank == 1){
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
    constructor(name, gens=3, focus){
        this.tree = { 'name': name, 'size': gens }

        var i = 1
        var j = gens
        while(i <= gens){
            if(i == gens){
                this.tree[`Generation ${i}`] = {'name': focus.name, 'relatives': i > 1 ? this.tree[`Generation ${i-1}`][Math.floor(Math.random()*this.tree[`Generation ${i-1}`].length)] : 'unknown'}
            } else{
                if(j > 2){
                    let c = i == 1 ? 1 : Math.floor(Math.random()*3)+1
                    var f = []

                    while(c>0){
                        f.push([
                            {'name': new Character(18*j, Math.floor(Math.random()*3)+1, "Dead", this.tree.name, null, null, null, focus.race, Object.keys(nations).length > 0 ? randomObj(nations) : "unknown"), 'relatives': i > 1 ? this.tree[`Generation ${i-1}`][Math.floor(Math.random()*this.tree[`Generation ${i-1}`].length)] : 'unknown'}, 
                            {'name': new Character(18*j, Math.floor(Math.random()*3)+1, "Dead", this.tree.name, null, null, null, focus.race, Object.keys(nations).length > 0 ? randomObj(nations) : "unknown"), 'relatives': 'Another Family'}
                        ])
                        c--
                    }

                    this.tree[`Generation ${i}`] = f
                } else{
                    let c = i
                    var f = []

                    while(c>0){
                        f.push([
                            {'name': new Character(18*j, Math.floor(Math.random()*3)+1, "Alive", this.tree.name, null, null, null, focus.race, Object.keys(nations).length > 0 ? randomObj(nations) : "unknown"), 'relatives': i > 1 ? this.tree[`Generation ${i-1}`][Math.floor(Math.random()*this.tree[`Generation ${i-1}`].length)] : 'unknown'}, 
                            {'name': new Character(18*j, Math.floor(Math.random()*3)+1, "Alive", this.tree.name, null, null, null, focus.race, Object.keys(nations).length > 0 ? randomObj(nations) : "unknown"), 'relatives': 'Another Family'}
                        ])
                        c--
                    }

                    this.tree[`Generation ${i}`] = f
                }
            }
            i++
            j--
        }

        bloodlines[this.tree.name] = this
    }
}

class Realm{
    constructor(religion, isCapital, nation="Independent"){
        var types = ["River", "Lake", "Hill", "Forest"]
        var cultures = ["Human", "Ork", "Elf", "Dwarf"]

        this.name = generateRealmName()
        this.nation = nation.name
        this.ruler = new Character(18, 2, "Alive", null, null, null, null, nation.culture, nations[this.nation], religion).name
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
    constructor(){
        var cultures = ["Human", "Ork", "Elf", "Dwarf"]

        this.name = generateNationName()
        this.realms = []
        this.population = 0
        this.culture = cultures[Math.floor(Math.random()*cultures.length)]
        this.allies = []
        this.enemies = []

        if(Object.keys(nations).length > 0){
            let dices = Math.random()

            if(dices > 0.5){
                let solved = false
                while(solved == false){
                    let target = nations[randomObj(nations)]
                    let test = this.allies[target.name]

                    if(test == undefined && target.name != this.name){
                        this.allies.push(target.name)
                        solved = true
                    }
                }
            } else{
                let solved = false
                while(solved == false){
                    let target = nations[randomObj(nations)]
                    let test = this.enemies[target.name]

                    if(test == undefined){
                        this.enemies.push(target.name)
                        solved = true
                    }
                }
            }
        }

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
}

class Continent{
    constructor(){
        this.name = generatePlaceName()
        this.size = Math.floor(Math.random()*5000)
        this.nations = []

        var nationNumber = Math.floor(Math.random()*10)+1

        for(let i=0; i<nationNumber; i++){
            this.nations[i] = new Nation().name
            nations[this.nations[i]]["continent"] = this.name
        }

        continents[this.name] = this
    }
}

class World{
    constructor(){
        this.name = generatePlaceName()
        this.continents = []
        this.size = 0

        let continentNumber = Math.floor(Math.random()*5)+1

        for(let i=0; i<continentNumber; i++){
            this.continents[i] = new Continent().name
            this.size += continents[this.continents[i]].size
        }

        this.size += Math.floor(Math.random()*3000)

        worlds[this.name] = this

        console.log(`Thank you for using WorldCreator v${VERSION}!\n\nA new world was generated using the '${ALGORITHM}' algorithm. More details about the world are being shown down here: \n-----\nWorlds: ${Object.keys(worlds).length}\nContinents: ${Object.keys(continents).length}\nNations: ${Object.keys(nations).length}\nRealms: ${Object.keys(realms).length}\nCharacters: ${Object.keys(characters).length}\nMilitary Forces: ${Object.keys(militaryForces).length}\nReligions: ${Object.keys(religions).length}\n-----\nby matjs\n\nIf you have any questions, send me an email at 'matheusjgsilva42@gmail.com' or visit the project's documentation at https://github.com/matjsilva/worldcreator. Good storytelling!`)
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

VERSION = "1.0"
ALGORITHM = "Generate It!"