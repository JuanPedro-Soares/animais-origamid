function lista() {
  const tabmenu = document.querySelectorAll('.js-lista li');
  const tabcontent = document.querySelectorAll('.js-desc section');
  const menu = document.querySelector('.js-lista');
  const alturaMenu = menu.clientHeight;

  function ativar(index) {
    tabcontent.forEach((content) => {
      content.classList.remove('ativo');
    });
    tabcontent[index].classList.add('ativo');
  }

  menu.addEventListener('scroll', () => {
    let imagemVisivel = null;
    tabmenu.forEach((imagem, index) => {
      const topoImagem = imagem.getBoundingClientRect().top; 
      
      const alturaImagem = imagem.clientHeight;  //pega a altura da imagem

      if (topoImagem >= 0 && topoImagem <= alturaMenu) { //Quando o topo da imagem chega no inicio da altura do menu atualiza
        imagemVisivel = index;
      }
    });

    //Ativa o paragrafo correspondente a imagem visivel
    if (imagemVisivel !== null) {
      ativar(imagemVisivel);
    }
  });
}
  





function accordeon(){
  const accordion = document.querySelectorAll('.js-accordion dt');
  const resposta =document.querySelectorAll('.js-accordion dd');

  accordion[0].classList.add('ativado');
  accordion[0].nextElementSibling.classList.add('ativo')
  
  function dartoggle(index){
   resposta[index].classList.toggle('ativo');
   accordion[index].classList.toggle('ativado');
  };
  
  accordion.forEach((item , index) =>{
    item.addEventListener('click',()=>{
      dartoggle(index)
    })
  });
  
  }
function menu(){
const tabmenu = document.querySelectorAll('.js-lista li');
const tabcontent = document.querySelectorAll('.js-desc section ');

function ativar(index){
  tabcontent.forEach((content) =>{
  content.classList.remove('ativo');
});
tabcontent[index].classList.add('ativo');
}

tabmenu.forEach((item, index)=>{
   item.addEventListener('click',() =>{
    ativar(index);
   })
});
}

function scrollsuave(){
const linkinterno = document.querySelectorAll('.js-menu a[href^="#"]');
function scroll(event){
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href)
  section.scrollIntoView({
  behavior:'smooth',
  block: 'start',
})
  //forma alternativa
  // const top = section.offsetTop
  // window.scrollTo({
  //   top: top,
  //   behavior: 'smooth',
  // });
}

linkinterno.forEach((link) =>{
  link.addEventListener('click',scroll);
})
}
lista()
menu();
accordeon();
scrollsuave();



function animacao(){
  const sections = document.querySelectorAll('.js-scroll');
  
  function animasrcoll() {
    sections.forEach((section) => {
      const windowmetade = window.innerHeight*0.6;
      const sectiontop = section.getBoundingClientRect().top ;
      const metadetela = sectiontop - windowmetade;
    
      metadetela < 0 && section.classList.add('ativo')
    })}
  animasrcoll();
  window.addEventListener('scroll' , animasrcoll);
}
animacao();