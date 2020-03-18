let cat = {
  name: "fluffy",
  petCount: 0,
  moods: [
    {
      img: "https://cdn.mos.cms.futurecdn.net/vChK6pTy3vN3KbYZ7UU7k3-1200-80.jpg",
      status: " Happy"
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0344/6469/files/angry.jpg?v=1560891349",
      status: " Mad"
    },
    {
      img: "https://s.yimg.com/uu/api/res/1.2/mTt8v2paYgsktEP85jhhjg--~B/aD0xODAwO3c9MTgwMDtzbT0xO2FwcGlkPXl0YWNoeW9u/http://media.zenfs.com/en-US/homerun/people_218/ddeaf5d430f4cc7b679ea3c9c0be05df",
      status: " Sad"
    },
    {
      img: "https://www.dogalize.com/wp-content/uploads/2018/01/diabeetus-cat.jpg",
      status: " DIABEETUUS"
    }
  ]
}



function pet(){
  cat.petCount++
  draw()
  drawMood()
}


function draw(){
  document.getElementById("pet-count").innerText = cat.petCount.toString()
  // @ts-ignore
}

function randomMood(){
  let moodIndex = Math.floor(Math.random()* cat.moods.length)
  let mood = cat.moods[moodIndex]
  return mood
}

function drawMood(){
  let catPicElem = document.getElementById("cat-pic")
  let catStatusElem = document.getElementById("cat-mood")
  let kittyMood = randomMood()
  
  catStatusElem.innerText = kittyMood.status
  catPicElem.src = kittyMood.img
}

