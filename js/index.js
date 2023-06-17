
var solDes1 = document.getElementById("solucoes-description1");
var solDes2 = document.getElementById("solucoes-description2");
var solDes3 = document.getElementById("solucoes-description3");
var solDes4 = document.getElementById("solucoes-description4");
var img = document.getElementById("img-solucoes");

function S2(){
    /* solDes2.style.display="block";
    solDes1.style.display="none";
    solDes3.style.display="none";
    solDes4.style.display="none"; */
    img.src = "./img/img.2.avif";
}

function S1(){
   /*  solDes2.style.display="none";
    solDes1.style.display="block";
    solDes3.style.display="none";
    solDes4.style.display="none"; */
    img.src = "./img/CAB-PNG.png";

}

function S3(){
   /*  solDes2.style.display="none";
    solDes1.style.display="none";
    solDes3.style.display="block";
    solDes4.style.display="none"; */
    img.src = "./img/CAB-PNG.png";

}

function S4(){
    /* solDes2.style.display="none";
    solDes1.style.display="none";
    solDes3.style.display="none";
    solDes4.style.display="block"; */
    img.src = "./img/Projeto2.jpeg";

}

//

var select = document.getElementById("slectTipoServico");
var valorSelecionado =  select.options[select.selectedIndex].value;

function selectCard(){

    if(document.getElementById("slectTipoServico").options[select.selectedIndex].value == "1"){
        /* console.log("sla"); */
        document.getElementById("cardServico1").style.display="block";
        document.getElementById("cardServico2").style.display="none";
        document.getElementById("cardServico3").style.display="none";
    }
    else if(document.getElementById("slectTipoServico").options[select.selectedIndex].value == "2"){
        document.getElementById("cardServico1").style.display="none";
        document.getElementById("cardServico2").style.display="block";
        document.getElementById("cardServico3").style.display="none";

    }
    else if(document.getElementById("slectTipoServico").options[select.selectedIndex].value == "3"){
        document.getElementById("cardServico1").style.display="none";
        document.getElementById("cardServico2").style.display="none";
        document.getElementById("cardServico3").style.display="block";
    }
    else if(document.getElementById("slectTipoServico").options[select.selectedIndex].value == "0"){
        document.getElementById("cardServico1").style.display="none";
        document.getElementById("cardServico2").style.display="none";
        document.getElementById("cardServico3").style.display="none";
    }

}

function showmodal(){
  document.getElementById("hide-modal").style.display = "block";
  document.getElementById("enviarModal").style.display = "block";
  document.getElementById("hide-modal2").style.display = "none";
  document.getElementById("solicitar").style.display = "none";
}

function closemodal(){
  document.getElementById("hide-modal").style.display = "none";
  document.getElementById("enviarModal").style.display = "none";
  document.getElementById("hide-modal2").style.display = "block";
  document.getElementById("solicitar").style.display = "block";
}

