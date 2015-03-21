function ym(id, ereignis, funktion)
{
   if(window.addEventListener)
      document.getElementById(id)
         .addEventListener(ereignis, funktion, false);
   else if(window.attachEvent)
      document.getElementById(id)
         .attachEvent("on" + ereignis, funktion);
}
