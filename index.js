/* CREATING FUNCTION FOR IMAGE SIMPLICITY */
function newImage(url, left, bottom) {
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

/* EVENT LISTENER TO REMOVE OBJECTS */
function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)
    object.addEventListener('dblclick', () => {
    object.remove()
    })
}

/* ADDING SKY + GRASS */
function title(url, left, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++) {
            newImage(url, left + w*100, bottom+h*100)
        }
    }
}

let horizon = window.innerHeight / 2
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

title('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
title('assets/grass.png', 0, 0, window.innerWidth/100, heightOfSky/100)


/* ADDING IMAGES + ITEMS*/
newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)
newImage('assets/clouds3.png', 120, 640)
newImage('assets/clouds.png', 100, 600)
newImage('assets/clouds2.png', 10, 620)

newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)