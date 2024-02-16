// this code will tell you. your remaining life

function timeleft (){
    var yourage=prompt("Enter your age.");
    var limitY = 80;
    var year = limitY-yourage;
    var month = year*12;
    var week = year*52;
    var days = year*365;
    alert("you have "+year+" years, "+month+" months, "+week+" weeks, "+days+" days Left to live.")
}
timeleft()
