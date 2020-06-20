//Quote of the Day:
let day = (new Date().getDay());
let quote = "";

switch (day){
  case 0:
    quote = " Everything <br> you <br> can <br> imagine <br> is <br> real.";
    break;
  case 1:
    quote = "Everything <br> you <br> can <br> imagine <br> is <br> real.";
    break
  case 2:    
    quote = "Everything <br> you <br> can <br> imagine <br> is <br> real.";
    break;
  case 3:    
    quote = "Everything <br> you <br> can <br> imagine <br> is <br> real.";
    break; 
  case 4:    
   quote = "Everything <br> you <br> can <br> imagine <br> is <br> real.";
    break;
  case 5:    
    quote = "Everything <br> you <br> can <br> imagine <br> is <br> real.";
  case 6:    
    quote= "Everything <br> you <br> can <br> imagine <br> is <br> real.";
    break;
}

let text = document.getElementById("quote");
let textQ = quote;
let textQu = document.createElement('h3');
textQu.setAttribute('id', 'dayQuote');
text.appendChild(textQu);
textQu.innerHTML = quote




