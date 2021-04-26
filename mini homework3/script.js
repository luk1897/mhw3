const sec=document.querySelector('section');

const sez_carr=document.createElement('div');

sez_carr.classList.add('main_flex');
sez_carr.classList.add('hidden');

sec.appendChild(sez_carr);


const pay=document.createElement('button');
pay.textContent='Procedi al pagamento';
pay.classList.add('pag');
pay.classList.add('hidden');

sez_carr.appendChild(pay);




for(key in r_map){
    let nome=r_map[key].title;
    let image=r_map[key].img;
    let parag=r_map[key].par;
    let dett=r_map[key].desc;
    let b=r_map[key].butt
    
    const mf=document.querySelector('.main_flex');

    const blocco=document.createElement('div');
    blocco.classList.add('giochi');
    mf.appendChild(blocco);
    

    const img=document.createElement('img');
    const div=document.createElement('div');
    const paragrafo=document.createElement('p');
    const det=document.createElement('p');
    const bot=document.createElement('img');

    
    
    img.classList.add('image');
    div.classList.add('nome');
    det.classList.add('dettagli');
    paragrafo.classList.add('hidden');
    paragrafo.classList.add('descrizione');
    bot.classList.add('bottone');

    div.textContent=nome;
    img.src=image;
    det.textContent=dett;
    paragrafo.textContent=parag;
    bot.src=b;
    
    blocco.appendChild(bot);
    blocco.appendChild(img);
    blocco.appendChild(div);
    blocco.appendChild(paragrafo);
    blocco.appendChild(det);
    
}

function removeDesc(event){
    event.currentTarget.textContent='Dettagli';
    let d=event.currentTarget.parentNode.querySelector('.descrizione');
    d.classList.add('hidden');


    event.currentTarget.removeEventListener('click',removeDesc);
    event.currentTarget.addEventListener('click',addDesc);
}

function addDesc(event){
event.currentTarget.textContent='Meno dettagli';
let d=event.currentTarget.parentNode.querySelector('.descrizione');
d.classList.remove('hidden');
event.currentTarget.removeEventListener('click',addDesc);
event.currentTarget.addEventListener('click',removeDesc);
}



const det=document.querySelectorAll('.dettagli');
for(let d of det){
d.addEventListener('click',addDesc);
}


let count=0;
function addSez(event){
    sez_carr.classList.remove('hidden');
    pay.classList.remove('hidden');
    
    let cont=document.createElement('div'); 
    let butt_rim=document.createElement('img');
    let new_img=document.createElement('img');
    let new_div=document.createElement('div'); 
    let nome_gioco=event.currentTarget.parentNode.querySelector('.nome').textContent;
    

    cont.classList.add('giochi');
    butt_rim.classList.add('b_rimozione');
    new_img.classList.add('image');
    new_div.classList.add('nome');

    
    butt_rim.src='https://media.istockphoto.com/photos/red-x-picture-id621475462?k=6&m=621475462&s=170667a&w=0&h=bxVz2Gv-IyEsDb2W7h225UVCI1eX3xH0t89XUzsWqG0=';
    
    cont.appendChild(butt_rim);
    cont.appendChild(new_img);
    cont.appendChild(new_div);
    sez_carr.appendChild(cont);

    for(key in r_map){
        if(key===nome_gioco){
        new_img.src=r_map[key].img;
        new_div.textContent=r_map[key].title;
        butt_rim.addEventListener('click',remSez);
        }
    }
    count++;
}

const bt=document.querySelectorAll('.bottone');

for(let b of bt){
    b.addEventListener('click',addSez);
}

function remSez(event){
    count--;
    const paym=document.querySelector('.pag');
    if(count==0){
        paym.classList.add('hidden');
    }
    let gioco=event.currentTarget.parentNode;
    gioco.remove();
    
}


function ricerca(event){
   let ric=event.currentTarget;
   let r=ric.value.toUpperCase();
   const lista_giochi=document.querySelectorAll('.nome');
   for(let lg of lista_giochi){
       if(lg.textContent.toUpperCase().indexOf(r)!=-1){
           lg.parentNode.style.display='';
        }
        else{
            lg.parentNode.style.display='none';
        }
   }

}

const input=document.querySelectorAll('#search');
for(let inp of input){
    inp.addEventListener('keyup',ricerca);
}


