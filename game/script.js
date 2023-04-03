//no ternary operators used, jk except for a few
let loader = document.getElementById('loader');
let i = 0;

window.onload = () => {
    setTimeout(()=>{
    loader.style.display='none';

    },1400)
}
//audio stuff
const accordion = new Audio("./assets/accord1.wav")
const pickaxes = ["rusty","iron","gold","steel","pickaxe","baguette","accordion","snail","eiffeltower","glitchy"];
const boosts = ["catnip","catgrass","cat Coffee"]
const places = ["cave","paris"/* there are plans to add more for sure */];
const cats = ["original","butterscotch","hearts","sochi"];
const ores = ["coal","beignet"/*  same thing here, just putting a placeholder */]
const pick_src = { 
    'rusty': './assets/rusty_pick.png',
    'iron': './assets/iron_pick.png',
    'gold': './assets/gold_pick.png',
    'pickaxe': './assets/pickaxe_pick.png',
    'steel': './assets/steel_pick.png',
    'baguette': './assets/baguette_pick.png',
    'snail':'./assets/snail_pick.png',
    'eiffeltower':'./assets/eiffeltower_pick.png',
    "accordion":"./assets/accordion_pick.png",
    'glitchy': './assets/aipickaxe.png'
};
const ore_src = {
    "cave":"./assets/coal1.png",
    "paris":"./assets/beignet.png"
}
const boost_src = {
    "catnip":"./assets/placeholder.gif",
    "catgrass":"./assets/placeholder.gif",
    "cat Coffee":"./assets/placeholder.gif"
}
const boost_prices = {
    "catnip":5000000,
    "catgrass":60000000,
    "cat Coffee":150000000
}
const pick_prices = {
    'iron': 5000,
    'gold': 15000,
    'pickaxe': 250000,
    'steel':1000000,
    'baguette':7000000,
    'accordion':40000000,
    'snail':80000000,
    'eiffeltower':75000000,
    'glitchy':2222225828528528
};
const ccperpick = {
    'rusty':50,
    'iron':100,
    'gold':4000,
    'pickaxe':40000,
    'steel':80000,
    'baguette':300000,
    'accordion':1000000,
    'snail':2000000,
    'eiffeltower':750000000,
    'glitchy':5702671010111001
}
const dialog_lines = {
    "Mr. Loaf": ["Welcome to my shop!","This is the "+pickaxes[pickaxes.indexOf(localStorage.getItem("activepick"))+wow]+" Pickaxe.","Would you like to buy it?","Here you go, a shiny new pickaxe!", "Ok, have a good day!","It looks like you already have this pickaxe. Would you like to equip it?","That's all in my collection for now.\n(hint:maybe try traveling somewhere new)","It looks like you don't have enough catcoins.\n Thanks anyway!","Alright, here you go!","Ok, feel free to check out any others!"],
    "Pilot Bob": ["Welcome everyone to the When Cats Fly Airport!","Today, we have a flight to "+places[wow]+"!","It looks like you don't have a ticket. Would you like to buy one?","Thanks for your business!","Were you looking for a different flight? You can reuse old tickets.","Attention! We are now boarding!","Alright folks, enjoy your flight!", "Thanks for flying When Cats Fly Airlines!"],
    "speedymetal":["Welcome to my store!",", great choice!","Thanks for shopping! \n Would you like to activate the boost?","Looks like you already bought this.\n Want to activate it?"]
}
const pick_places = {
    "iron":"cave",
    "gold":"cave",
    "pickaxe":"cave",
    "steel":"cave",
    "baguette":"paris",
    "accordion":"paris",
    "snail":"paris",
    "eiffeltower":"paris",
    "glitchy": "cativerse"
}
const place_img = {
    "cave":"./assets/cavebg.png",
    "paris":"./assets/parisbg.png"
}
const minig_img = {
    "cave":"./assets/placeholder.gif",
    "paris":"./assets/placeholder.gif"
}
const ticket_prc = {
    "paris":10000000
}
var wow;
var w = 0;
//get the ids of everything needed to be referred to
const dialog_el = document.getElementById("line")
const cc_el = document.getElementById("catcoins");
const pick_el = document.getElementById("pick");
const shop_el = document.getElementById("shop");
const shop_window = document.getElementById("shop_ctr");
const shop_pick = document.getElementById("shop-pick");
const buy_btn = document.getElementById("buy");
const cat = document.getElementById("cat");
const place_el = document.getElementById("place");
const dialog = document.getElementById("dialog");
const dg_person = document.getElementById("person");
const dg_action = document.querySelector("#action");
const dg_options = document.querySelector("#options");
const o1 = document.querySelector("#ac1");
const o2 = document.querySelector("#ac2");
const travel = document.querySelector("#travel");
const travel_ctr = document.querySelector("#trvl-menu");
const trvl_place = document.querySelector("#place");
const trvl_mg = document.querySelector("#minigame");
const trvl_mgimg = document.querySelector("#mini_img");
const trvl_img = document.querySelector("#place-img");
const trvl_visit = document.querySelector("#visit");
const airport = document.querySelector("#airport");
const shop2_btn = document.querySelector("#shop2");
const pilotbob = document.querySelector("#pilot")
const ore = document.querySelector("#ore")
const shop2 = document.querySelector("#shop2_ctr")
const pick1 = document.getElementById("pick1");const pick2=document.getElementById("pick2");const pick3 = document.getElementById("pick3");const pick4 = document.getElementById("pick4");
const boost1 = document.querySelector("#boost1");const boost2 = document.querySelector("#boost2");const boost3 = document.querySelector("#boost3");
var activePlace; 
var activePick;
var activeCat;

var catcoins;
var boughtpicks = [];
var visitedplaces = [];
var ccpm; /*(catcoins per mine) */
var as_place;
var special_func = function(){};
//e
console.log("are you a developer?? cause if u try to cheat then cat miner will be iuwheiunhfwfn.")
//load the saved pickaxe
//coulda used a switch statement but whatever
if(localStorage.getItem("activepick") === 'undefined' | null){
    //pretty self-explanatory
    console.log("%c no saved pickaxe found,starting new game.","font-family:sans-serif");
    var activePick = pickaxes[0];
    localStorage.setItem("activepick",activePick)
    var catcoins = 0;
    var ccpm = 5;
    visitedplaces[0]="cave";
} else if(pickaxes.includes(localStorage.getItem("activepick"))){
    //since the saved pickaxe is an item in that array, just set the active pickaxe to the saved value.
    var activePick = localStorage.getItem("activepick");
    var catcoins = parseInt(localStorage.getItem("catcoins"));
    var activePlace=localStorage.getItem('activeplace');
    var visitedplaces = JSON.parse(localStorage.getItem("visitedplaces"));
    console.log("%c found a saved pickaxe.","color:green; font-family:sans-serif;")

} else if(!localStorage.getItem("activepick")) {
    console.log("%c no saved pickaxe found,starting new game.","font-family:sans-serif");
    var activePick = pickaxes[0];
    localStorage.setItem("activepick",activePick)
    var catcoins = 0;
    var ccpm = 5;
    var activePlace = places[0];
    visitedplaces[0]="cave";

} else{
    alert('error! please look in the log and report the bug on github!')
}
//set the active catcoins per mine
if(localStorage.getItem("ccpm")){
    var ccpm = parseInt(localStorage.getItem("ccpm"));
} else {
    var ccpm = 5;
}
if(localStorage.getItem("boughtpicks")){
    var boughtpicks = JSON.parse(localStorage.getItem("boughtpicks"))
} else {
    //ee
}
function hide(el){
    document.getElementById(el).style.display="none";
}
//save the game every 0.1 seconds
let saveInterval = setInterval(() => {
    localStorage.setItem("activepick",activePick);
    localStorage.setItem("activecat",activeCat);
    localStorage.setItem("activeplace",activePlace);    
    localStorage.setItem("catcoins",catcoins);
    localStorage.setItem("ccpm",ccpm)
    localStorage.setItem("boughtpicks",JSON.stringify(boughtpicks));
    localStorage.setItem("visitedplaces",JSON.stringify(visitedplaces))
    //set the catcoins element to be the amount of catcoins
    cc_el.innerHTML = "<img src='./assets/catcoin1.png' height='30px' style='vertical-align:middle'>" + numeral(catcoins).format('0.0a');
},100)
//load the pickaxe
pick_el.src = pick_src[activePick];
//load the ore
activePlace ? ore.src=ore_src[activePlace] : ore.src=ore_src["cave"];
//load the background
activePlace ? document.body.style.backgroundImage="url("+place_img[activePlace]+")" : document.body.style.backgroundImage="url("+place_img["cave"]+")";
visitedplaces[places.indexOf(activePlace)] ? console.log('you are in the cave'): visitedplaces[places.indexOf(activePlace)] = places[activePlace]   
visitedplaces[places.indexOf(activePlace)]=places[places.indexOf(activePlace)]

//since the baguette's scaling is wonky, and da pickaxe is of large size, change the size to fit the other pickaxes.
if(localStorage.getItem("activepick")==='baguette'){
    pick_el.style.height="128px";
    //just to clarify 
    console.log('%c pickaxe is baguette!!! wow!!!',"color:orange; font-family:sans-serif;");
} else {
        console.log('wow')
}
//steal the eiffel tower (hehehe haw)
if(activePick==="eiffeltower"){
    document.body.style.backgroundImage = "url(./assets/parisbg_hm.png)";
}
//make bad accordion playing noises while you mine
if(activePick==="accordion"){
    var special_func = ()=>{
        accordion.currentTime=0;
        accordion.play();
        try {
        pick_el.addEventListener("animationstart",()=>{pick_el.src="./assets/accordion_pick1.png"});
        pick_el.addEventListener("animationend",()=>{
            pick_el.src="./assets/accordion_pick.png";
        })
        } catch(e){
            accordion.addEventListener("audio")
            alert(e)
        }

    }
}
//set the spacebar to mine 
Mousetrap.bind('space',(e) =>{
    if(!e.repeat){
    catcoins +=ccpm;
    pick_el.style.animation = 'none';
    pick_el.offsetHeight;
    pick_el.style.animation = null;
    special_func();
    } else {
        console.log("you are holding down space? sorry that doesn't work anymore but here's a jerry \n 〽️\n🟡 wah"); 
    }
    //larry
if(activePick === "snail"){
    pick_el.src="./assets/snail_pick1.png";
    pick_el.onanimationend=()=>{
        pick_el.src=pick_src["snail"];
    }
} else {
    console.log("pickaxe is not larry");
    pick_el.onanimationend=()=>{/* doot dee doot*/}
}
},'keydown')

function right() {
    //if da thing that you know you shuffle through pickaxes and stuff is not more than the amount of array
    if(!(i + 6 > Object.keys(pickaxes).length)  && visitedplaces.includes(pick_places[pickaxes[i+5]])){
     /* 6 because ya know like the 0th index in an array and youre adding 4 to the i variable and stuff*/
    i += 1;
    pick1.src = pick_src[pickaxes[i + 1]];
    pick2.src = pick_src[pickaxes[i + 2]];
    pick3.src = pick_src[pickaxes[i + 3]];
    pick4.src = pick_src[pickaxes[i + 4]];
    } else {
        dialog.style.display = 'flex';
        dialog_el.innerText = dialog_lines["Mr. Loaf"][6]

    }
}
function left() {
    if(i - 1 !== -2){
        i -=1;
    pick1.src = pick_src[pickaxes[i + 1]];
    pick2.src = pick_src[pickaxes[i + 2]];
    pick3.src = pick_src[pickaxes[i + 3]];
    pick4.src = pick_src[pickaxes[i + 4]];
    } else {
        dialog.style.display = 'flex';
        dialog_el.innerText = dialog_lines["Mr. Loaf"][6]
    }
}
function buyPick(pick, pick_id){
    if(catcoins >= pick_prices[pick] && !boughtpicks.includes(pick)){
    //you have less moolah
    catcoins -= pick_prices[pick];
    //render the pickaxe
    pick_el.src = pick_src[pick];
    //set da active pickaxe to the right active pickaxe and ya dah ya dah ydaafuywgefhf
    activePick=pick;
    //the pickaxe wants to be stronger 
    ccpm = ccperpick[pick];
    //you have bought the pickaxe
    try {
    boughtpicks.push(pick);    
    } catch(e) {
        alert(e)
    }
    } else if(boughtpicks.includes(pick)){
        //you have already bought this pick

    } else {
        return 'not enough money'
        }
    //since baguette has wonky scaling set it to correct size :)
    if(activePick ==='baguette'){
        pick_el.style.height="128px";
        //just to clarify 
        console.log('%c pickaxe is baguette!!! wow!!!',"color:orange; font-family:sans-serif;");
    }
    if(pick==="snail" && !(boughtpicks.includes(pick))){
        alert("NOTICE:\nthe snail(larry) agreed to be a pickaxe. \nNo snails are to be harmed in the mining of this ore.")
    } else {
        console.log("pickaxe is not larry")
    }
    if(pick==="eiffeltower" && !(boughtpicks.includes(pick)) && activePlace === "paris"){
        document.body.style.backgroundImage = "url(./assets/parisbg_hm.png)";
    } else {
        document.body.style.backgroundImage = "url("+place_img[activePlace]+")";
    }
    if(activePick==="accordion"){
        accordion.play()
    }
}
function viewPick(e){
    dg_options.style.display = 'none';
    hide('shop-pick')
    dialog_lines["Mr. Loaf"][1] = "This is the "+pickaxes[e][0].toUpperCase() + pickaxes[e].slice(1)+" Pickaxe, which costs "+numeral(pick_prices[pickaxes[e]]).format("0.0.a")+" catcoins.";
    shop_pick.style.display="inline";
    dialog.style.display="flex";
    shop_pick.src = pick_src[pickaxes[e]];
    dialog_el.innerText = dialog_lines["Mr. Loaf"][1];
    dg_action.onclick = () => {
        dialog_el.innerText = dialog_lines["Mr. Loaf"][2];
        dg_action.innerText = "▲";
        dg_action.onclick = () => {
        dg_options.style.display = 'block';
    }}
    o1.onclick = () => {
        if(boughtpicks.includes(pickaxes[e])){
            //you have already bought this pick
        dg_action.innerText = "▶";
        dg_action.onclick = () => {dg_options.style.display="block";o1.onclick=()=>{activePick=pickaxes[e];dialog_el.innerText=dialog_lines["Mr. Loaf"][8];hide('options');pick_el.src=pick_src[pickaxes[e]];if(pick==="snail" && !(boughtpicks.includes(pick))){ alert("NOTICE:\nthe snail(larry) agreed to be a pickaxe. \nNo snails are to be harmed in the mining of this ore.") } else { console.log("pickaxe is not larry") } if(activePick==="eiffeltower" && !(boughtpicks.includes(pick)) && activePlace === "paris"){ document.body.style.backgroundImage = "url(./assets/parisbg_hm.png)"; special_func=()=>{pick_el.onanimationstart=()=>{};pick_el.onanimationend=()=>{}} } else { document.body.style.backgroundImage = "url("+place_img[activePlace]+")"; } if(activePick==="accordion"){ accordion.play() }};o2.onclick=()=>{}}
        hide('options');
        dialog_el.innerText = dialog_lines["Mr. Loaf"][5];
        
        console.log('works properly')
        } else if(!(buyPick(pickaxes[e],e) === 'not enough money')){
        buyPick(pickaxes[e],e);
        hide('options');
        console.log('bought pickaxe');
        dg_action.innerText = "▶";
        dg_action.onclick = () => {hide('dialog')}
        dialog_el.innerText = dialog_lines["Mr. Loaf"][3]
        } else {
            hide('options')
            dialog_el.innerText = dialog_lines["Mr. Loaf"][7];
            dg_action.innerText = "▲";
            dg_action.onclick=()=>{hide('dialog')}            
        }
    }
    o2.onclick = () => {
        dialog_el.innerText = dialog_lines["Mr. Loaf"][4]
        hide('options');
        dg_action.innerText = "▶";
        dg_action.onclick = () => {hide('dialog')}
    }

}
//when the button for the shop is clicked open it
shop_el.addEventListener('click', () => {
    console.log("opening shop..");
    shop_window.style.display="inline";
    if(pickaxes[pickaxes.indexOf(localStorage.getItem("activepick")) !== undefined | null]){
    pick1.src = pick_src[pickaxes[i + 1]];
    pick2.src = pick_src[pickaxes[i + 2]];
    pick3.src = pick_src[pickaxes[i + 3]];
    pick4.src = pick_src[pickaxes[i + 4]];
    } else {
        console.error("pickaxe is not in range.");
    }
    setTimeout(() => {dialog.style.display="flex";},200);
    dialog_el.innerText = dialog_lines["Mr. Loaf"][0];
    dg_person.innerText = Object.keys(dialog_lines)[0];
    dg_action.innerText = "▶";
    dg_action.onclick = function(){hide('dialog')}

});
if(localStorage.getItem("activepick") === 'glitchy') {
    if(localStorage.getItem("hm") === 'no'){
    var e1 = setInterval(() => {pick_el.style.animationPlayState = "running"},100)
    var e2 = setInterval(() => {pick_el.style.animationPlayState = "paused";catcoins+=1412222228471248;},90)
    var e3 = setInterval(() => {pick_el.style.top =  Math.floor(    Math.random() * 500)+"px";catcoins+=1412847222221248;},120)
    var e4 = setInterval(() => {pick_el.style.left = Math.floor(Math.random() * 1000 - 220)+"px"},110);
    } else if(prompt("if you are prone to seizures, then type 'yes'. otherwise , enjoy the glitchyness.") !== 'yes' | 'Yes' | 'yEs' | 'YeS' | 'yES' | 'YES'){
        var e1 = setInterval(() => {pick_el.style.animationPlayState = "running"},100)
        var e2 = setInterval(() => {pick_el.style.animationPlayState = "paused";catcoins+=1412222228471248;},90)
        var e3 = setInterval(() => {pick_el.style.top =  Math.floor(220 - Math.random() * 500)+"px";catcoins+=1412847222221248;},120)
        var e4 = setInterval(() => {pick_el.style.left =  Math.floor(Math.random() * 1000 -220)+"px"},110);
    localStorage.setItem("hm",'no')

    }
  else {
    clearInterval(e1)
    clearInterval(e2)
    clearInterval(e3)
    clearInterval(e4)

    var activePick = 'glitchy';
    pick_el.src = pick_src[activePick]
    localStorage.setItem("hm","yes")
}
} else {
    console.log("pickaxe is not glitched")
}

travel.addEventListener("click",() => {
    hide("pilot")
    travel_ctr.style.display = "block";
    trvl_place.innerText = activePlace[0].toUpperCase() + activePlace.slice(1);
    trvl_mg.value = activePlace;
    trvl_mgimg.src = minig_img[places[places.indexOf(activePlace)]];
    trvl_img.style.background = "url("+place_img[activePlace]+")";
    trvl_img.style.backgroundRepeat = "repeat";
    trvl_img.style.backgroundSize = "1000px 800px";
    
})


shop2_btn.addEventListener("click",()=>{
    shop2.style.display="block";
    dg_person.innerText = "speedymetal";
    dialog_el.innerText=dialog_lines["speedymetal"][0];
    dialog.style.display="flex";
    dg_action.innerText="▶";
    dg_action.onclick=()=>{hide('dialog')}
    boost1.src = boost_src[boosts[w]];
    boost2.src = boost_src[boosts[w + 1]];
    boost3.src = boost_src[boosts[w + 2]];
    
})
function viewBoost(boost_id){
    dialog.style.display="flex";
    dialog_el.innerText= boosts[boost_id].charAt(0).toUpperCase() + boosts[boost_id].slice(1) + dialog_lines["speedymetal"][1];
    dg_action.innerText="▲"
    dg_action.onclick=()=>{dg_options.style.display="block";}
}


trvl_visit.addEventListener("click",() => {
    //load images
    airport.style.display="block";
    airport.src='./assets/airport.jpg';
    pilotbob.style.display="block";
    pilotbob.src = "./assets/pilotbob-1.png"
    //show the airport 
    airport.hidden=false;
    //put mr bob into the right place
    if(window.innerHeight!==window.screen.height){
        pilotbob.style.top="30%"
    }
    //ding sound that is in every airport announcement in the US
    setTimeout(() => {var dng = new Audio("./assets/ding.mp3");dng.volume=0.25;dng.play();
    //load the dialog and make it do stuff
    dialog.style.display="flex";
    dialog_el.innerText = dialog_lines["Pilot Bob"][0];
    dg_person.innerText = "Pilot Bob";
    dg_action.innerText="▶";
    //the part where the glitch is
    try {
    if(typeof places[places.indexOf(localStorage.getItem("activeplace"))+1] === "undefined" | undefined | null){
        dialog_lines["Pilot Bob"][6] = "Well, looks like you beat the game(as it is so far).\n To suggest features or report a bug go to the cat miner stuff document.\n ";
        dialog_el.innerText = dialog_lines["Pilot Bob"][6]
        dg_action.onclick=()=>{location.reload()}
    } else {dialog_lines["Pilot Bob"][1] = "Today, we have a flight to "+places[places.indexOf(localStorage.getItem("activeplace"))+1].charAt(0).toUpperCase()+places[places.indexOf(localStorage.getItem("activeplace"))+1].slice(1)+"!";}
    } catch(e){
        alert(e)
        dialog_lines["Pilot Bob"][6] = "Well, looks like you beat the game(as it is so far).\n To suggest features or report a bug go to the cat miner stuff document.\n ";
    }
    dg_action.onclick=() => {
        if(localStorage.getItem("visitedplaces").includes(places[0])){
        dialog_el.innerText=dialog_lines["Pilot Bob"][1];
        dg_action.onclick=() =>{
        dialog_el.innerText=dialog_lines["Pilot Bob"][2];
        dg_options.style.display="block";
        dg_action.innerText = "▲";
        o1.onclick=()=>{
            if(catcoins >= ticket_prc[places[places.indexOf(activePlace)+1]]){
            dialog_el.innerText=dialog_lines["Pilot Bob"][3];
            hide("options");
            dg_action.onclick = () => {
                dng.play()
                dialog_el.innerText=dialog_lines["Pilot Bob"][5];
                catcoins-=ticket_prc[places[places.indexOf(activePlace)+1]]
                dg_action.innerText = "▶";
                dg_action.onclick=()=>{var activePlace=places[places.indexOf(activePlace)+1];visitedplaces[places.indexOf(activePlace)]=places[places.indexOf(activePlace)];clearInterval(saveInterval);localStorage.setItem("activeplace",places[places.indexOf(activePlace)+1]);location.reload()}
                
            } 

        } else if(catcoins!==ticket_prc[places[places.indexOf(activePlace)+1]] | catcoins<ticket_prc[places[places.indexOf(activePlace)+1]]){
            console.log(ticket_prc[places[places.indexOf(activePlace)+1]]+" "+catcoins)
            hide("options");
            dialog_el.innerText="Sorry, but you can't buy a ticket with "+numeral(catcoins).format("0.0a")+" catcoins."
            dg_action.onclick = () => {
                dialog_el.innerText = "See you soon!";
                dg_action.onclick=()=>{hide("dialog");hide("airport");hide("trvl-menu");}
            }
        } else {
            dialog_lines["Pilot Bob"][6] = "Well, looks like you beat the game(as it is so far).\n To suggest features or report a bug go to the cat miner stuff document.\n ";
        dg_action.onclick=()=>{location.reload()}
   
        }
        }
           o2.onclick=()=>{
            dialog_el.innerText= "Alright, see you soon!";
            hide("options")
            dg_action.onclick=()=>{hide("airport");hide("dialog");hide("pilot");hide("options")}
            }
    if(typeof places[places.indexOf(localStorage.getItem("activeplace"))+1] === "undefined" | undefined | null){
        dg_action.onclick=()=>{dg_options.style.display="block";o1.innerText="suggest feature/bug report";o2.innerText="go to cat miner stuff doc";o1.onclick=()=>{window.open("https://docs.google.com/forms/d/e/1FAIpQLSdLy7A08w0yase2p1Fs46aOVNgASPBwWEN-k7FV4Etssdxm-g/viewform")};o2.onclick=()=>{window.open("https://docs.google.com/document/d/1uDUJMTFPlbcwzbpFQFVxILnffG4DfFRKKgw_faGnuA4/edit")}}
    }

    }}}},1500);
    }
)

function eatborgir(){
    console.log("you ate borgir. nothing happened.")
}
function del_data(){
 //oh no the autosave its broken
    clearInterval(saveInterval)
    localStorage.clear()
    window.location.reload();
}