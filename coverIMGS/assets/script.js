
$(document).ready(function() { /* instruçao jquery = inicia script somente quando o doc estiver pronto = carregar todo*/
    

         //nav bar
        let links = document.querySelector('.navbar-nav a')
        var altnav = document.querySelector('.navbar');

        window.addEventListener("scroll", function() {
            if(window.pageYOffset>80){
                altnav.style.background = "#111";
                links.style.paddingBottom = '0px'
            }
            else{
                altnav.style.background = "transparent";
            }
        });

    setTimeout(function() { //pra carregar as imagens da pagina primeiro 
        
        $('#ingresso-area ').parallax({imageSrc: './assets/novasimgs/roxo4.png'});

    }, 250);

});