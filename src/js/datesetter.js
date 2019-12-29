function showTime(){
    var date = new Date();
    
    
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("clockID").innerText = time;
    document.getElementById("clockID").textContent = time;
   
    setTimeout(showTime, 1000);
    
}

showTime();

var setToday = function(){
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var resDate = day + "." + month + "." + year;
    document.getElementById("today").innerText = resDate;   
    var days = ["Sonntag, ", "Montag, ", "Dienstag, ", "Mittwoch, ", "Donnerstag, ", "Freitag, ", "Samstag, "];
    document.getElementById("getday").innerText = days[date.getDay()];
}
setToday();