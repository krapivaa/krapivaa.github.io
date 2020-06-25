//Quote of the Day:
let day = (new Date().getDay());
let quote = "";

switch (day){
  case 0:
    quote = '<b>"Whether you think you can, or you think you can not... You are right!"</b><br><i>Henry Ford</i>';
    break;
  case 1:
    quote = '<b>"We don’t see things as they are, we see them as we are"</b><br><i>Anais Nin</i>';
    break
  case 2:    
    quote = '<b>"If you are working on something exciting that you really care about, you don not have to be pushed. The vision pulls you."</b><br><i>Steve Jobs</i>';
    break;
  case 3:    
    quote = '<b>"Creativity is intelligence having fun."</b><br><i>Albert Einstein</i>';
    break; 
  case 4:    
   quote = '<b>"You don not have to be great to start, but you have to start to be great."</b><br><i>Zig Ziglar</i>';
    break;
  case 5:    
    quote = '<b>"I am not afraid of storms, for I am learning to sail my ship."</b><br><i>Louisa May Alcott</i>';
  case 6:    
    quote= '<b>"If you are not making mistakes, then you are not making decisions."</b><br><i>Catherine Cook</i>';
    break;
}

let text = document.getElementById("quote");
let textQ = quote;
let textQu = document.createElement('h3');
textQu.setAttribute('id', 'dayQuote');
text.appendChild(textQu);
textQu.innerHTML = quote



