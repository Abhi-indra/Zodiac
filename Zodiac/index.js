const zodiac = document.getElementById("zodiac")
const body  = document.body;


const changeBackground = () => {
    switch (zodiac.value){
        case "aries":
            body.style.backgroundColor = "red";
            break;

        case "tarus":
            body.style.backgroundColor = "green";
            break;
        
        case "gemini":
            body.style.backgroundColor = "yellow";
            break;
                
        case "cancer":
            body.style.backgroundColor = "silver";
            break;

        case "leo":
            body.style.backgroundColor = "gold";
            break;

        case "virgo":
            body.style.backgroundColor = "brown";
            break;

        case "libra":
            body.style.backgroundColor = "pink";
            break;

        case "scorpio":
            body.style.backgroundColor = "black";
            break;
         
    
        case "sagittarius":
            body.style.backgroundColor = "purple";
            break;
            
        
        case "aquarius":
            body.style.backgroundColor = "blue";
            break;
            
        
        case "capricorn":
            body.style.backgroundColor = "grey";
            break;

        
        case "pisces":
            body.style.backgroundColor = "lightgreen";
            break;    

            
                

        default:
            break;    
    }
    
}