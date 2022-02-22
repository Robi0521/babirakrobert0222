function kiertekeles()
{
    var pontok = 0;
    if(document.getElementById("balaton").checked==true){
        pontok+=1;
    }
    if(document.getElementById("oregto").checked==true){
        pontok+=0;
    }
    if(document.getElementById("tiszato").checked==true){
        pontok+=0;
    }
    
   if(document.getElementById("komaromesztergom").checked==true){
        pontok+=0;
   }
   if(document.getElementById("bekes").checked==true){
        pontok+=1;
   }
   if(document.getElementById("pest").checked==true){
        pontok+=0;
    }
    if(document.getElementById("gyormoson").checked==true){
        pontok+=0;
   }
   alert(pontok)
}