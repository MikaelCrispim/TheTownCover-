$('.filter-btn').on('click', function(){

    let type = $(this).attr('id');   //identificando o atributo de id
    let bandas = $('.project-banda');   //identificando as bandas que existem

    $('.main-btn').removeClass('active'); //todos os botões que tiverem a class active vão ser removidas e no botão que a gnt clicou vai ser adicionada
    $(this).addClass('active');

    if (type == 'eight-btn') {
        eachbandas('eight', bandas)  //mandando os parametros
    } else if( type == 'seven-btn') {
        eachbandas('seven', bandas);
    } else if(type == 'nine-btn') {
        eachbandas('nine', bandas);
    }else if(type == 'ten-btn') {
        eachbandas('ten', bandas);
    } else {
        eachbandas('all', bandas);
    }
});

function eachbandas (type, bandas) {
    if (type == 'all') {
        $(bandas).fadeIn();
    }else {
        $(bandas).each(function(){
            // Se o botão que foi clicado não representa a class da banda
            if(!$(this).hasClass(type)) {
                $(this).fadeOut('slow, easing'); //esconder lentamente
            } else {
                $(this).fadeIn(); //aparecer 
            }
        });
    }
}
let btnall = document.getElementById('all-btn');
let btn10 = document.getElementById('ten-btn');
let btn9 = document.getElementById('nine-btn');
let btn8 = document.getElementById('eight-btn');
let btn7 = document.getElementById('seven-btn');

let coluna1 = document.querySelector('.coluna-1');
let coluna2 = document.querySelector('.coluna-2');
let coluna3 = document.querySelector('.coluna-3');
let coluna4 = document.querySelector('.coluna-4');

btn8.addEventListener('click', function () {
    coluna1.style.marginTop = '30px'
    coluna1.style.marginBottom = '170px'
})

btn9.addEventListener('click', function () {
    coluna3.style.marginTop = '30px'
    coluna3.style.marginBottom = '170px'
})

btn10.addEventListener('click', function () {
    coluna4.style.marginTop = '30px'
})

btn7.addEventListener('click', function () {
    coluna2.style.marginTop = '30px'
    coluna2.style.marginBottom = '200px'
})

btnall.addEventListener('click', function () {
    coluna1.style.marginTop = ''
    coluna1.style.marginBottom = ''

    coluna2.style.marginTop = ''
    coluna2.style.marginBottom = ''

    coluna3.style.marginTop = ''
    coluna3.style.marginBottom = ''

    coluna4.style.marginTop = ''
})
