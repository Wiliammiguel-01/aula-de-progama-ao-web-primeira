/*mobile*/
function togglemenu(){
    const menu = document.getElementById ('navmenu');
    menu.classlist.toggle('active');
}

/*scroll leve*/
function scrollActive(sectionId){
    const section =document.getElementById(sectionId);

    if(!section) return;

    const headerHeight = 70;
    const sectionPosition = section.offsetTop - headerHeight;
    
    window.scrollTo({top: sectionPosition, behavior: "smooth"});
    const menu = document.getElementById('navmenu');
    menu.classList.remove('active');
}

/*cadastrado*/

function headlesubmit(event){
    event.preventDefalt();

    const form = document.getElementById('volunteerForm');

    const formData ={
        nome:form.nome.value,
        email: form.email.value,
        telefone: form.email.value,
        idade: form.email,value,
        datacadastro: new Date().tolocaleDateString() DD/MM/YYYY
}

let voluntarios = JSON.parse(localStorage.getitem ('voluntarios'))
voluntarios.push(formData);
localStorage.serItem('voluntarios',JSON.stringify(voluntarios))
const sucessMessage = document.getElementById('successMessage')
sucessMessage.classList.add('show');
sucessMessage.scrollintoview ({behavior:'smooth', block:'center'});

setTimeout ( ()=> form.reset(),2000)
setTimeout ( ()=> sucessMessage.classList.remove('show') 3000 );


exibirVoluntarios(){
    const voluntarios = JSON.parse(localStorage.getitem ('voluntarios'))
    const tabelacontainer = document.getElementById('tabelavoluntarios')

    if(!tabelacontainer) return

    if(coluntarios.lenght === 0){
        tabelacontainer.innerHTML = '<p>Nenhum voluntario cadastrado</p>';       
    }
}
