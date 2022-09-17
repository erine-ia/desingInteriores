let menu = document.querySelector('.menu');

let btn = document.querySelector('.btn-abrir')
let logo = document.querySelector('.logo')

btn.addEventListener('click', abrir_fechar_menu)


function abrir_fechar_menu(){
    if(btn.className == 'btn-abrir'){
        btn.classList.remove('btn-abrir')
        btn.classList.add('btn-fechar')
        menu.classList.remove('.menu')
        menu.classList.add('menu-fechar')
      
    }else{
        btn.classList.add('btn-abrir')
        btn.classList.remove('btn-fechar')
        menu.classList.add('.menu')
        menu.classList.remove('menu-fechar')
        
    }
}