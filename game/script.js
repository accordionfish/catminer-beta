var gp = document.getElementById("gp");
var gptxt = document.getElementById("gptxt");
var irp = document.getElementById("irp");
var irptxt = document.getElementById("irptxt");
var aipbtn = document.getElementById("aip-btn");
var gpbtn = document.getElementById("gold_pickaxe-btn");
var irpbtn = document.getElementById("irp-btn");
var bgpbtn = document.getElementById("bgp-btn");
var bgep = document.getElementById("bgp");
var bgptxt = document.getElementById("bgptxt");
var ap = document.getElementById("ap");
var aptxt = document.getElementById("aptxt");
var ms1 = new Audio("./sounds/mine1.wav");
var ms2 = new Audio("./sounds/mine2.wav");
var plusamt = document.getElementById("plusamt");
var elem = document.getElementById("cash");
var cat = $("#cat");
var ore = document.getElementById("ore");
var cmtitle= document.getElementById("title")
var pickaxe = document.getElementById("pickaxe");
var aipickaxe = "notbought";  
var upcontent = document.getElementById("up1-content")
if(Cookies.get("money") !== "NaN"){window.money = parseInt(Cookies.get("money"));} else {window.money=0;}

/*



   /\____/\    
  |  .  .  |_________
   \   ▾  /           \
    |                  \
     \________________  \
         ____________/  /
         \_____________/


If you can see this cat and don't cheat, this cat will be happy




*/
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
var aipButton = document.getElementById("aip-btn");
var zo = setInterval(function() {money += 5; plusamt.innerHTML = "+<img src='./assets/catcoin1.png' height='15px'>5";setTimeout(function(){plusamt.innerHTML = "&nbsp;";},800);}, 1000)
var z = setInterval(function() {elem.innerHTML = "<img src='./assets/catcoin1.png' height='15px'>" + numberWithCommas(money);bgc(); Cookies.set("money",money);upc();if(isNaN(money)){window.money=0}else{console.log("savedata found :>")}}, 99);
if(Cookies.get("activepick")!==["gold","baguette","iron"]){
  Mousetrap.bind('space', function() { 
      money += 10;
        plusamt.innerHTML="+<img src='./assets/catcoin1.png' height='15px'>10";
        pickaxe.style.animation = 'none';
        pickaxe.offsetHeight; /* trigger reflow */
        pickaxe.style.animation = null; 
        ms1.play();
  },'keyup');
} else {
  console.log("pickaxe is not copper")
}
if(Cookies.get("activepick") == "iron"){clearInterval(zo);IP_Interval()}else{console.log("other pickaxe, doing other stuff")}
if(Cookies.get("activepick")=="gold"){GP_Interval()} else { console.log("e")}
if(Cookies.get("activepick")=="baguette"){bgp();} else { console.log("e")}

$(function(){
  $("#ugp1-launcher, #ugp1-background, #ugp1-close").click(function() {
      $("#ugp1-content, #ugp1-background").toggleClass("active");
  });
});
$(function(){
  $("#up1-background, #up1-close").click(function() {
      $("#up1-content, #up1-background").toggleClass("active");
  });
});
function bgc() {
  if(Cookies.get("travelTicket") !=="1"){
    document.body.classList.add("cave");
    elem.style="color:white;" 
    cmtitle.style="color:white;" 
    plusamt.style="color:white;" 

  } else {
    document.body.classList.toggle("paris");
  }
}
function upc(){
  if(money > 1000){
    irp.style.display = "inline";
    irptxt.style.display = "inline";
    irpbtn.style.display="inline";
   } else {
    return false
  }
  if(money > 1005 && Cookies.get("modal1alrshown") != "yep"){
    upcontent.innerHTML = "<div id='up1-close'>To exit, click on cat</div><h1 style='text-align:center;'>New Pickaxe Availible!</h1><img src='./assets/iron_pickaxe.png' height='120px'>Iron Pickaxe"
    $("#up1-content, #up1-background").toggleClass("active");
    Cookies.set("modal1alrshown","yep");
  }
  if(money > 1000000){
    gp.style.display = "inline";
    gptxt.style.display = "inline";
    gpbtn.style.display="inline"

  } else {
    return false;
  }
  if(money > 1000005 && Cookies.get("modal2alrshown") != "yep"){
    upcontent.innerHTML = "<div id='up1-close'>To exit, click on cat</div><h1 style='text-align:center;'>New Pickaxe Availible!</h1><img src='./assets/gold_pickaxe.png' height='120px'>Gold Pickaxe"
    $("#up1-content, #up1-background").toggleClass("active");
    Cookies.set("modal2alrshown","yep");
  }
  if(money > 5000000){
    bgep.style.display = "inline";
    bgptxt.style.display = "inline";
    bgpbtn.style.display="inline";
  } else {
    return false;
  }
  if(money > 5000005 && Cookies.get("modal3alrshown") != "yep"){
    upcontent.innerHTML = "<div id='up1-close'>To exit, click on cat</div><h1 style='text-align:center;'>New Pickaxe Availible!</h1><img src='./assets/baguettepick.png' height='120px'>Baguette Pickaxe<br>And you got a <br><h3>Travel Ticket<img src='./assets/travelticket.png' height='20px'></h3>"
    $("#up1-content, #up1-background").toggleClass("active");
    Cookies.set("modal3alrshown","yep");
    Cookies.set("travelTicket","1");
    
  }
  if(money > 100000000){
    return true;
  }
}
function checkForAIPickaxe(){
  if(money > 100000000){
    money -= 100000000;
    pickaxe.src = "./assets/aipickaxe.png";
    pickaxe.style.animationDuration = "0.1s";
    AIInterval()
    document.getElementById("aip-btn").disabled=true;
    document.getElementById("aip-btn").innerText="OWNED";
  } else {
    alert("You don't have enough money.");
  }
}
function AIInterval(){
  document.getElementById("aip-btn").disabled=true;
  document.getElementById("aip-btn").innerText="OWNED";
  var q = setInterval(function() {money += 10000000000000005; plusamt.innerHTML = "+<img src='./assets/catcoin1.png' height='15px'>10000000000000005";setTimeout(function(){plusamt.innerHTML = "&nbsp;";},800);}, 1000)
  Mousetrap.bind('space', function() {  
        money += 10000000000000;
        plusamt.innerHTML = "+10 Trillion";
        pickaxe.style.animation = 'none';
        pickaxe.offsetHeight; /* trigger reanimate */
        pickaxe.style.animation = null; 
        pickaxe.style.animationDuration = "0.1s";
      },'keyup')
}
function checkForIronPickaxe(){
  // something smoething something something
  /*                         _
                            / /
  /\__/\                  / /
 | •  • |________________| |
  ---                      /
      ___________________/
  
  
  */
      if(money > 1000){
        money -= 1000;
        IP_Interval();

      } else {
        alert("You don't have enough money.");
      }
}
function IP_Interval(){
  pickaxe.src = "./assets/iron_pickaxe.png";
  pickaxe.style.animationDuration = "2.7s";
  clearInterval(zo);
  document.getElementById("irp-btn").disabled=true;
  document.getElementById("irp-btn").innerText="OWNED";
  window.int1q = setInterval(function() {money += 5000; plusamt.innerHTML = "+<img src='./assets/catcoin1.png' height='15px'>5,000";setTimeout(function(){plusamt.innerHTML = "&nbsp;";},800);}, 1000)
  pickaxe.src = "./assets/iron_pickaxe.png";
  pickaxe.style.animationDuration = "2.7s";
  Cookies.set("activepick","iron")
  Mousetrap.bind('space', function() {
    
        money += 8000;
        plusamt.innerHTML = "+<img src='./assets/catcoin1.png' height='15px'>8,000";
        pickaxe.style.animation = 'none';
        pickaxe.offsetHeight; /* trigger reanimate */
        pickaxe.style.animation = null; 
        ms2.play();

  },'keyup');
}
function checkForGoldPickaxe(){
  if(money > 1000000){
    money -= 1000000;

    GP_Interval();
  } else {
    alert("You don't have enough money.");
  }
}
function GP_Interval(){
  pickaxe.src = "./assets/gold_pickaxe.png";
  pickaxe.style.animationDuration = "2.7s";
  document.getElementById("gold_pickaxe-btn").disabled=true;
  document.getElementById("gold_pickaxe-btn").innerText="OWNED";
  Cookies.set("activepick","gold");
  clearInterval(window.int1q); 
  window.g = setInterval(function() {money += 25000; plusamt.innerHTML = "+<img src='./assets/catcoin1.png' height='15px'>25,000";setTimeout(function(){plusamt.innerHTML = "&nbsp;";},800);}, 1000)
    Mousetrap.bind('space', function(){
        money += 15000;
        plusamt.innerHTML = "+<img src='./assets/catcoin1.png' height='15px'>15,000";
        pickaxe.style.animation = 'none';
        pickaxe.offsetHeight; /* trigger reflow */
        pickaxe.style.animation = null; 
        ms1.play();
        localStorage.setItem("money",money)
    
  },'keyup');
}
function cfbgp(){
  if(window.money > 5000000){
    money -= 5000000;
    pickaxe.src = "./assets/baguettepick.png";
    pickaxe.style.animationDuration = "2.7s";
    bgp();
    document.getElementById("bgp-btn").disabled=true;
    document.getElementById("bgp-btn").innerText="OWNED";
    Cookies.set("activepick","baguette");
  } else {
    alert("You don't have enough money.");
  }
}
function bgp(){
  gpbtn.innerText="OWNED";
  gpbtn.disabled=true;
  Cookies.set("activepick","baguette")
  document.getElementById("irp-btn").disabled=true;
  document.getElementById("irp-btn").innerText="OWNED";
  document.getElementById("bgp-btn").disabled=true;
  document.getElementById("bgp-btn").innerText="OWNED";
  pickaxe.src = "./assets/baguettepick.png";
  pickaxe.style.animationDuration = "2.7s";
  clearInterval(window.g); 
  window.c = setInterval(function() {money += 50000; plusamt.innerText = "+50k";setTimeout(function(){plusamt.innerHTML = "&nbsp;";},800);}, 1000)
  Mousetrap.bind('space', function(){
        money += 80000;
        plusamt.innerHTML = "+<img src='./assets/catcoin1.png' height='15px'>80k";
        pickaxe.style.animation = 'none';
        pickaxe.offsetHeight; /* trigger reflow */
        pickaxe.style.animation = null; 
        ms1.play();
},'keyup');
} 
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 alert("you are using mobile.  As of right now, Cat Miner is in BETA. when the full game releases, there will be a mobile app.")
}
