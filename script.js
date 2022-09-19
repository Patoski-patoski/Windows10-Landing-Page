

var myInterval = setInterval(() => {
    var time = new Date().toLocaleTimeString()
    document.getElementById('time').innerHTML = time; 

    var fullDate = new Date().getDay()
    var displayFullDate = document.getElementById('fullDate')

    var myDate = new Date().getDate()

    var myMonth = new Date().getMonth()

    let Month = document.createElement('todaysMonth')


         
  switch (myMonth) {
    case 0:
        Month.innerText = 'January'
        
        break;
    case 1:
        Month.innerText  = 'February'
        
        break;
    case 2:
        Month.innerText  = 'March'
        
        break;
    case 3:
        Month.innerText  = 'April'
        
        break;
    case 4:
        Month.innerText  = 'May'
        
        break;
    case 5:
        Month.innerText  = 'June'
        
        break;
    case 6:
        Month.innerText  = 'July'
        
        break;
    case 7:
        Month.innerText  = 'August'
        
        break;
    case 8: 
        Month.innerText = 'September'
        
        break;
    case 9:
        Month.innerText  = 'October'
        
        break;
    case 10:
        Month.innerText  = 'November'
        
        break;
    case 11:
        Month.innerText  = 'December'
        
        break;

    default:
        Month.innerText  = ' This Month'
        break;
}




    
    switch (fullDate) {
        case 1:
            displayFullDate.innerText = 'Monday,' + ' ' + myDate + ' ' + Month.innerText
            break;
        case 2:
            displayFullDate.innerText = 'Tuesday,'  + ' ' + myDate + ' ' + Month.innerText
            break;
        case 3:
            displayFullDate.innerText ='Wednesday,' + ' ' + myDate + ' ' + Month.innerText
            break;
        case 4:
            displayFullDate.innerText = 'Thursday,' + ' ' + myDate + ' ' + Month.innerText
            break;
        case 5:
            displayFullDate.innerText ='Friday,'  + ' ' + myDate +' ' + Month.innerText
            break;
        case 6:
            displayFullDate.innerText = 'Saturday,' + ' ' + myDate +' ' + Month.innerText
            break;
        case 7:
            displayFullDate.innerText = 'Sunday,' + ' ' + myDate +' ' + Month.innerText
            break;
    
        default:
            displayFullDate.innerText = 'Todays Date, ' + ' ' + myDate + Month.innerText
            break; 
    }

  
 
}, 1000);  
 


hide = () =>{ 
   var toggle = document.querySelector('.f11 p');
   toggle.style.transition = 'ease-in 3s';
   toggle.style.display = 'none'
} 


 
