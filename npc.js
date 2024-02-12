//Get a random value from 1-100
const rollD100 = () => {
    return Math.floor(Math.random()*100) + 1
}

//Get a random species from the list.
const getSpecies = (input = '') => {

    //Guard clause if species already specified
    if (input != '') {
        return input       
    } 
    const speciesArr = ["human", "elf", "half-elf", "dwarf", "halfling", "tiefling", "dragonborn", "gnome", "half-orc", "tabaxi", "goblin"]

    return speciesArr[Math.floor(Math.random()*speciesArr.length)]
}

//Get a random gender and pronouns.
const getGender = (input = '') => {

    //Guard clause if gender already specified
    if (input != "") {
        return input
    }

    let gender = {
        gender: "",
        subPronoun: "",
        obPronoun: "",
        posPronoun: "",
        conjugation: "s"
    }

    const roll = rollD100()

    if (roll <= 48) {
        gender.gender = "male"
        gender.subPronoun = "he"
        gender.obPronoun = "him"
        gender.posPronoun = "his"

    } else if (roll <= 96) {
        gender.gender = "female"
        gender.subPronoun = "she"
        gender.obPronoun = "her"
        gender.posPronoun = "her"

    } else {
        gender.gender = "non-binary"
        gender.subPronoun = "they"
        gender.obPronoun = "them"
        gender.posPronoun = "their"
        gender.conjugation = ""
    }

    return gender
}

//?TO DO: Consolidate getDescription() and getAttitude() into one function that takes an array as an argument. 
//Generate a simple physical description. Can be passed false as an argument to skip calling in final generation.
const getDescription = (invoke = true) => {
    const adj = ["short", "tall", "stocky", "swarthy", "shabby", "finely dressed", "fat", "rotund", "athletic", "ripped", "sickly", "average"]

    if (!invoke) {
        return ""
    }

    return adj[Math.floor(Math.random()*adj.length)] + " "
}

//Generate a simple attitude held towards to the party. Can be passed false as an argument to skip calling in final generation.
const getAttitude = (invoke = true) => {
    const adj = ["friendly", "suspicious", "helpful", "indifferent", "hostile", "curious", "shy", "boastful", "dismissive"]

    if (!invoke) {
        return ""
    }

    return adj[Math.floor(Math.random()*adj.length)]
}

const capitalFirstLetter = str => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

//Account for descriptions starting with a vowel. Assumes result will be capitalised for the start of a sentence.
const handleIndefArticle = str => {
    const vowels = ["a", "e", "i", "o", "u"]
    let article

    if (vowels.includes(str[0].toLowerCase())) {
        return "An"
    }
    return "A"
}

//Execute code with default parameters.
//TO DO: Expand to account for user input where certain characteristics have already been established and are unnecessary to generate.
const generateNPC = () => {
    const species = getSpecies()
    const gender = getGender()
    const description = getDescription()
    const attitude = getAttitude()
    const article = handleIndefArticle(description)

    let firstSentence = `${article} ${description}${gender.gender} ${species}.`
    let attitudeSentence

    if (attitude == "") {
        attitudeSentence = ""
    } else {
        attitudeSentence = ` ${capitalFirstLetter(gender.subPronoun)} act${gender.conjugation} ${attitude} towards the party.`
    }

    return firstSentence + attitudeSentence
}

console.log(generateNPC())