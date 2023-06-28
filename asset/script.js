//DOM Elements 
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
usrName = document.getElementById('usrName'),
focus = document.getElementById('focus');

//show Time 
function showTime(){
    let today = new Date(),
    hour =today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
    
    //Set AM or PM 
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    //Output Time
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}

// Add Zero 
function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}
//Set Background and Greeting 
function setBg (){
    let today = new Date (),
      hour = today.getHours();


      if (hour < 12){
        //Morning 
        document.body.style.backgroundImage = "url(asset/morning.webp)";
        greeting.textContent ='Good Morning';
      } else if (hour < 18){
        //Afternoon
        document.body.style.backgroundImage = "url(asset/afternoon.webp)";
        greeting.textContent ='Good Afternoon';

      }else {
         //Evening 
         document.body.style.backgroundImage = "url(asset/night.jpg)";
        greeting.textContent ='Good Evening';
        document.body.style.color = 'white';
      }

}
//Get Name 
function getName(){
    if (localStorage.getItem('usrName') === null) {
        usrName.textContent = '[Enter Name]';
    }else {
        usrName.textContent = localStorage.getItem('usrName');
    }
}
// Get focus
function getFocus(){
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    }else {
       focus.textContent = localStorage.getItem('focus');
    }
}


// Run 
getName()
showTime();
setBg();
getFocus();
