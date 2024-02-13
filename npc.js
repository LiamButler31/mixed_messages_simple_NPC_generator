//Get a random number between 0 and n.
const randomNum = n => {
    return Math.floor(Math.random() * n)
}

//Get a random value from 1-100
const rollD100 = () => {
    return randomNum(100) + 1
}

//Get a random species from the list.
const getSpecies = (input = '') => {

    //Guard clause if species already specified
    if (input != '') {
        return input       
    } 
    const speciesArr = ["human", "elf", "half-elf", "dwarf", "halfling", "tiefling", "dragonborn", "gnome", "half-orc", "tabaxi", "goblin"]

    return speciesArr[randomNum(speciesArr.length)]
}

//Get a random gender and pronouns.
const getGender = (input = '') => {

    //Guard clause if gender already specified
    if (input != "") {
        return input
    }

    class Gender {
        //Class constructor takes gender, subject pronoun, object pronoun, and possesive adjective. Conjugation accounts for interaction with verbs. Default is "s". Third person pronouns should pass an empty string as the final argument.
        constructor(gender,subPronoun,obPronoun,posAdj,conjugation="s") {
            this.gender = gender;
            this.subPronoun = subPronoun;
            this.obPronoun = obPronoun;
            this.posAdj = posAdj;
            this.conjugation = conjugation
        }

    }

    const roll = rollD100()
    let gender

    if (roll <= 48) {
        gender = new Gender("male", "he", "him", "his")

    } else if (roll <= 96) {
        gender = new Gender("female", "she", "her", "her")

    } else {
        gender = new Gender("non-binary", "they", "them", "their", "")
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

    return adj[randomNum(adj.length)] + " "
}

//Generate a simple attitude held towards to the party. Can be passed false as an argument to skip calling in final generation.
const getAttitude = (invoke = true) => {
    const adj = ["friendly", "suspicious", "helpful", "indifferent", "hostile", "curious", "shy", "boastful", "dismissive"]

    if (!invoke) {
        return ""
    }

    return adj[randomNum(adj.length)]
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