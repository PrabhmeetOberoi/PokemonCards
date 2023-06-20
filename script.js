// for(let i = 0;i<40;i++){
//     const grid = document.querySelector('#grid')

// const card= document.createElement('div')
// const front = document.createElement('div')
// const back = document.createElement('div')
// // const text = document.createElement('p')
// // text.innerHTML="some text"
// card.style.position='relative'
// front.style.backgroundColor="lightblue"
// front.style.height='200px'
// back.style.backgroundColor="blue"
// back.style.height='200px'
// front.style.position='absolute'
// front.style.top='0px'
// front.style.width='100%'
// front.style.opacity="100"

// // front.append(text)
// card.append(back,front)
// grid.append(card);




// card.addEventListener('click',function(){
//     if(front.style.opacity==="100"){
//         front.style.transform='transform: rotate3d(0, 1, 0, 180deg)'
//     front.style.transition='1s'
//     front.style.opacity="0"
//     console.log("one")
//     } else{
//         front.style.transition='1s'
//         front.style.opacity="100"
//         console.log("two")
//     }

// })
// }



// axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
// .then(data=>{
//     console.log(data.data.results[0])
//     return axios.get(data.data.results[0].url)
// })
// .then(pokemon=>{
//     console.log(pokemon.data)

//     return axios.get('https://pokeapi.co/api/v2/pokemon/1/encounters')
// })
// .then(location=>{
//     console.log(location)
// })
// .catch(err=>{
//     console.log(err)
// })
// ----------------------------------------------------------------------------


// const id_name = document.getElementById('name')
// const id_image = document.getElementById('image')
// const id_basexp = document.getElementById('basexp')
// const id_abilities = document.getElementById('abilites')
// const id_species = document.getElementById('species')
// const id_stats = document.getElementById('stats')
// const id_type = document.getElementById('type')
// const id_weight = document.getElementById('weight')
// const id_height = document.getElementById('height')
// const id_hp = document.getElementById('hp')
// const id_attack = document.getElementById('attack')
// const id_defense = document.getElementById('defense')
// const id_spl_attack = document.getElementById('spl-attack')
// const id_spl_defense = document.getElementById('spl-defense')
// const id_speed = document.getElementById('speed')


// axios.get('https://pokeapi.co/api/v2/pokemon')
//     .then(data => {
//         console.log(data.data.results)
//         const pokemonlist = data.data.results
//         for (let pokemon of pokemonlist) {
//             const name = (pokemon.name[0].toUpperCase() + pokemon.name.slice(1))
//             console.log(name)
//             axios.get(pokemon.url)
//                 .then(result => {
//                     console.log(result.data)
//                     const details = result.data
//                     const abilities = details.abilities
//                     const basexp = details.base_experience
//                     const species = details.species.name
//                     const stats = [...details.stats]
//                     const hp=stats[0].base_stat
//                     const attack=stats[1].base_stat
//                     const defense = stats[2].base_stat
//                     const spl_attack=stats[3].base_stat
//                     const spl_defense = stats[4].base_stat
//                     const speed = stats[5].base_stat
//                     const type = details.types[0].type.name
//                     const weight = details.weight
//                     const height = details.heightz
//                     const image = details.sprites.other["official-artwork"].front_shiny


//                     console.log(image)
//                     console.log('name', name, 'ab', abilities, 'basexp', basexp, 'species', species, 'stats', stats, 'type', type, 'weight', weight, 'height', height)
//                     id_name.innerHTML=name
//                     id_image.setAttribute('src',image)
//                     id_basexp.innerHTML= `${basexp}`

//                     id_abilities.innerHTML=`${abilities[0].ability.name}<br></br>${abilities[1].ability.name}<br></br>${abilities[2].ability.name}<br></br>`

//                     // id_abilities.innerHTML= `${abilities}`
//                     id_species.innerHTML= `${species}`
//                     id_stats.innerHTML= `${stats}`
//                     id_type.innerHTML= `${type}`
//                     id_weight.innerHTML= `${weight}`
//                     id_hp.innerHTML= `${hp}`
//                     id_attack.innerHTML= `${attack}`
//                     id_defense.innerHTML= `${defense}`
//                     id_spl_attack.innerHTML= `${spl_attack}`
//                     id_spl_defense.innerHTML= `${spl_defense}`
//                     id_speed.innerHTML= `${speed}`
//                     id_height.innerHTML= `${height}`

//                 })

//         }

//     })
//     .catch(err => {
//         console.log(err)
//     })
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton.style.opacity = "100%";
  } else {
    mybutton.style.opacity = "0%";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const grid = document.querySelector('#grid')
console.dir(document.querySelector('.hptag'))
axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0')
    .then(data => {
        console.log(data.data.results)
        const pokemonlist = data.data.results
        for (pokemon of pokemonlist) {
            const pokename = (pokemon.name[0].toUpperCase() + pokemon.name.slice(1))

            const container = document.createElement('div')
            container.classList.add('container')

            const cardbg = document.createElement('div')
            cardbg.classList.add('cardbg')
            container.append(cardbg)

            const ball = document.createElement('img')
            ball.src = "./assets/pokeball.svg"
            ball.classList.add('ball')
            const card = document.createElement('div')
            const cardinfo = document.createElement('div')
            cardinfo.classList.add('cardinfo')
            cardbg.append(ball, card, cardinfo)

            const leftinfo = document.createElement('div')
            leftinfo.classList.add('leftinfo')
            const image = document.createElement('img')
            image.classList.add('image')

            const index = document.createElement('div')
            index.classList.add('index')
            index.innerHTML = `#${pokemonlist.indexOf(pokemon)+1}`
            const name = document.createElement('div')
            name.classList.add('name')
            name.innerHTML = pokename
            const types = document.createElement('div')
            types.classList.add('types')
            const hptag = document.createElement('div')
            hptag.classList.add('hptag')
            hptag.innerHTML = 'HP <span class="hp"></span>'
            const exptag = document.createElement('div')
            exptag.classList.add('hptag')
            exptag.innerHTML = 'EXP <span class="hp"></span>'
            leftinfo.append(index, name, types, hptag, exptag)

            const infoTop = document.createElement('div')
            infoTop.classList.add('infoTop')
            const infoMid = document.createElement('div')
            infoMid.classList.add('infoMid')
            const infoBottom = document.createElement('div')
            infoBottom.classList.add('infoBottom')
            cardinfo.append(infoTop, infoMid, infoBottom)

            const pAb = document.createElement('p')
            pAb.innerHTML = "Abilities:"
            const abilities = document.createElement('div')
            abilities.classList.add('abilities')
            infoTop.append(pAb, abilities)

            const pSpec = document.createElement('p')
            pSpec.innerHTML = "Species:"
            const whbox = document.createElement('div')
            whbox.classList.add('whbox')
            const pw = document.createElement('p')
            pw.classList.add('wh')
            pw.innerHTML = "Weight:"
            const ph = document.createElement('p')
            ph.classList.add('wh')
            ph.innerHTML = "Height:"
            whbox.append(pw, ph)
            infoMid.append(pSpec, whbox)

            const list = document.createElement('div')
            list.classList.add('list')
            const statsvalue = document.createElement('div')
            statsvalue.classList.add('statsvalue')
            const statsbar = document.createElement('div')
            statsbar.classList.add('statsbar')
            infoBottom.append(list, statsvalue, statsbar)

            const pAtk = document.createElement('p')
            const pDef = document.createElement('p')
            const pSatk = document.createElement('p')
            const pSdef = document.createElement('p')
            const pSpeed = document.createElement('p')
            pAtk.innerHTML = "Attack:"
            pDef.innerHTML = "Defence:"
            pSatk.innerHTML = "Spl.Atk:"
            pSdef.innerHTML = "Spl.Def:"
            pSpeed.innerHTML = "Speed:"
            list.append(pAtk, pDef, pSatk, pSdef, pSpeed)



            axios.get(pokemon.url)
                .then(result => {
                    console.log(result.data)
                    const details = result.data
                    image.src = details.sprites.other["official-artwork"].front_shiny
                    // console.log(details.sprites.other["official-artwork"].front_shiny)
                    const basexp = details.base_experience
                    exptag.children[0].innerHTML = basexp
                    const hp = details.stats[0].base_stat


                    hptag.children[0].innerHTML = hp
                    const typearray = details.types
                    for (let t of typearray) {
                        const type = document.createElement('div')
                        type.classList.add('type')
                        const tCap = t.type.name
                        type.innerHTML = (t.type.name[0].toUpperCase() + t.type.name.slice(1))
                        types.append(type)
                    }
                    if (types.children[0].innerHTML === "Fire") {
                        cardbg.classList.add('fire')
                    } else if (types.children[0].innerHTML === "Water") {
                        cardbg.classList.add('water')
                    } else if (types.children[0].innerHTML === "Grass") {
                        cardbg.classList.add('grass')
                    } else if (types.children[0].innerHTML === "Poison") {
                        cardbg.classList.add('poison')
                    } else if (types.children[0].innerHTML === "Ground") {
                        cardbg.classList.add('ground')
                    }else if (types.children[0].innerHTML === "Fighting") {
                        cardbg.classList.add('fighting')
                    }else if (types.children[0].innerHTML === "Dragon") {
                        cardbg.classList.add('dragon')
                    }else if (types.children[0].innerHTML === "Electric") {
                        cardbg.classList.add('electric')
                    } else {
                        cardbg.classList.add('normal')
                    }

                    const abarray = details.abilities
                    for (let a of abarray) {
                        const ability = document.createElement('div')
                        ability.classList.add('ability')
                        ability.innerHTML = (a.ability.name[0].toUpperCase() + a.ability.name.slice(1))
                        abilities.append(ability)
                    }

                    const speciesval = document.createElement('div')
                    speciesval.classList.add('speciesval')
                    const species = document.createElement('h6')
                    const weight = document.createElement('h6')
                    species.innerHTML = (details.species.name[0].toUpperCase() + details.species.name.slice(1))
                    weight.innerHTML = `${details.weight} lbs.`
                    speciesval.append(species, weight)
                    const heightval = document.createElement('div')
                    heightval.classList.add('heightvalue')
                    heightval.innerHTML = `${details.height / 10} m`
                    infoMid.append(speciesval, heightval)

                    const attack = details.stats[1].base_stat
                    const defense = details.stats[2].base_stat
                    const spl_attack = details.stats[3].base_stat
                    const spl_defense = details.stats[4].base_stat
                    const speed = details.stats[5].base_stat
                    const atkval = document.createElement('h6')
                    const defval = document.createElement('h6')
                    const spatkval = document.createElement('h6')
                    const spdefval = document.createElement('h6')
                    const speedval = document.createElement('h6')
                    atkval.innerHTML = attack
                    defval.innerHTML = defense
                    spatkval.innerHTML = spl_attack
                    spdefval.innerHTML = spl_defense
                    speedval.innerHTML = speed
                    statsvalue.append(atkval, defval,spatkval,spdefval,speedval)

                    const baratk = document.createElement('div')
                    const bardef = document.createElement('div')
                    const barspatk = document.createElement('div')
                    const barspdef = document.createElement('div')
                    const barspeed = document.createElement('div')
                    baratk.classList.add('bar','atk')
                    bardef.classList.add('bar','def')
                    barspatk.classList.add('bar','splatk')
                    barspdef.classList.add('bar','spldef')
                    barspeed.classList.add('bar','speed')
                    statsbar.append(baratk,bardef,barspatk,barspdef,barspeed,)

                    const fillatk = document.createElement('div')
                    const filldef = document.createElement('div')
                    const fillspatk = document.createElement('div')
                    const fillspdef = document.createElement('div')
                    const fillspeed = document.createElement('div')
                    fillatk.classList.add('green')
                    fillatk.style.width=`${attack}%`
                    filldef.classList.add('red')
                    filldef.style.width=`${defense}%`
                    fillspatk.classList.add('green')
                    fillspatk.style.width=`${spl_attack}%`
                    fillspdef.classList.add('red')
                    fillspdef.style.width=`${spl_defense}%`
                    fillspeed.classList.add('green')
                    fillspeed.style.width=`${speed}%`

                    baratk.append(fillatk)
                    bardef.append(filldef)
                    barspatk.append(fillspatk)
                    barspdef.append(fillspdef)
                    barspeed.append(fillspeed)   

                    







                })
            //  console.log(details.sprites.other["official-artwork"].front_shiny)
            card.append(leftinfo, image, cardinfo)



            grid.append(container)


        }
    })
    .catch(err=>{
        console.log(err)
    })