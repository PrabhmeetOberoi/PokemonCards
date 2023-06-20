
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
            ball.src = "https://github.com/PrabhmeetOberoi/PokemonCards/blob/38b1b9c85e023b06a35a04e85ddd4269f92bcd0b/assets/pokeball.svg"
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
