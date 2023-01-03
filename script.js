function areas(){
    corpo.scrollTop = 0;
    if (iext.checked){
        exatas.style.display = 'block';
        lbext.style.backgroundColor = 'lightcyan';
        lbext.style.borderBottom= '2px solid black';
    } else{
        exatas.style.display = 'none';
        lbext.style.backgroundColor = 'transparent';
        lbext.style.borderBottom= '2px solid transparent';
    }
    if (ihum.checked){
        humanas.style.display = 'block';
        lbhum.style.backgroundColor = 'lightcyan';
        lbhum.style.borderBottom = '2px solid black';
    } else{
        humanas.style.display = 'none';
        lbhum.style.backgroundColor = 'transparent';
        lbhum.style.borderBottom = '2px solid transparent';
    }
    if (ilin.checked){
        linguagens.style.display = 'block';
        lblin.style.backgroundColor = 'lightcyan';
        lblin.style.borderBottom = '2px solid black';
    } else{
        linguagens.style.display = 'none';
        lblin.style.backgroundColor = 'transparent';
        lblin.style.borderBottom = '2px solid transparent';
    }
    if (ibio.checked){
        biologia.style.display = 'block';
        lbbio.style.backgroundColor = 'lightcyan';
        lbbio.style.borderBottom = '2px solid black';
    } else{
        biologia.style.display = 'none';
        lbbio.style.backgroundColor = 'transparent';
        lbbio.style.borderBottom = '2px solid transparent';
    }
}
function abrirBarra(){
    if(document.getElementById('barra-lateral').style.width <= '10vw'){
    
    document.getElementById('barra-lateral').style.width = '100vw'
    document.getElementById('barra-lateral').style.top = '0'
    document.getElementById('barra-lateral').style.left = '0'
    document.getElementById('barra-lateral').style.height = '100vh'
    document.getElementById('barra-lateral').firstElementChild.textContent = "Turma IX";
    
} 

    //document.getElementById('barra-lateral').style.width = '10vw'
    //document.getElementById('barra-lateral').style.top = '1vw'
    //document.getElementById('barra-lateral').style.left = '1vw'
   // document.getElementById('barra-lateral').style.height = '10vw'
    //document.getElementById('barra-lateral').firstElementChild.textContent = "IX";


   
}
