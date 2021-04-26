function onJson_com(json){
    console.log(json);

    const c=document.querySelector('.res_flex');
    c.innerHTML='';
    const res=json.data.results;
    if(json.data.count===0){
        const div=document.createElement('div');
        const err = document.createElement("h1"); 
        err.classList.add('int_esp');
        err.style.color='red';
        err.textContent='La ricerca non ha avuto alcun risultato. Prova ad utilizzare altre parole chiave.';

        div.appendChild(err);
	    c.appendChild(div); 
        
    }
    for(let r of res ){
        
        const cont=document.createElement('div');
        cont.classList.add('coms');
        const img=document.createElement('img');
        const title=document.createElement('a');
        img.src=r.images[0].path + string_req;
        title.textContent=r.title;
        title.href='';
        title.classList.add('desc_t_c');
        cont.appendChild(img);
        cont.appendChild(title);
        c.appendChild(cont);
    }
}



function onResponse(response){
    return response.json();
}


function search(event){
    const span=document.querySelectorAll('.span');

    for(sp of span){
    sp.classList.add('hidden');
    }
    event.preventDefault();

    const cont=document.querySelector('#comics').value;
    const t=encodeURIComponent(cont);
    if(t){

        marvel_req=marvel_endpoint +'?title=' + t + '&hash=' + marvel_hash  + '&ts='+ time_stamp + '&apikey=' + marvel_key;
        fetch(marvel_req).then(onResponse).then(onJson_com);
    }
    else{
        alert('Inserisci una parola.');
    }
}



const form_c=document.querySelector('#form');
form_c.addEventListener('submit',search);


const marvel_endpoint='https://gateway.marvel.com/v1/public/comics';
const marvel_key='469a00df6f90972f930cbfa9d0bef724';
const marvel_hash='5e35930b9414dfd86b58e412f5bac91e';
const time_stamp=1;
const string_req='/portrait_xlarge.jpg';

















