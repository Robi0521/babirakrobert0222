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
    
}