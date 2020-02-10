const para = document.querySelector('p')
para.style.color = 'lightBlue';
const head = document.querySelector('head')
head.style.fontSize = '5em'
para.innerText = 'Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.';

const thirteenth = document.querySelector('#item-13')
thirteenth.style.opacity = '0.5'

const third = document.querySelector('#item-3')
third.innerText = 'Hi!'

const image = document.querySelector('img')
image.src = 'http://www.tioxic.com/wp-content/uploads/trex_4.jpg'
image.height = '300'

const divi = document.querySelector('div')
const image2 = document.createElement('img')
divi.appendChild(image2);
image2.src = 'https://i.pinimg.com/236x/5d/c0/b7/5dc0b7f8497520fd9c0c0bccd740907e.jpg'
image2.height = '300'
const newLi = document.createElement('li')
const list = document.querySelector('ul')
list.appendChild(newLi);
newLi.className = 'item'
let i = document.querySelectorAll('li').length
newLi.id = `item-${i}`
newLi.innerText = "Won't get fooled again."