function onJson_c(json){

    console.log(json);

    const c=document.querySelector('.res_flex');
    c.innerHTML='';
    const res=json.data;
    for(let r of res){
        const cont=document.createElement('div');
        cont.classList.add('clip');
        const img=document.createElement('img');
        img.classList.add('img_twitch');
        const streamer=document.createElement('p');
        streamer.classList.add('desc_t_c');
        const n_clip=document.createElement('p');
        n_clip.classList.add('desc_t_c');
        const url=document.createElement('a');
        url.classList.add('url');

        url.textContent='Vai a vederla';
        url.href=r.url;
        img.src=r.thumbnail_url;
        streamer.textContent='Streamer: '+r.broadcaster_name;
        n_clip.textContent='Titolo: '+r.title;

        cont.appendChild(img);
        cont.appendChild(n_clip);
        cont.appendChild(streamer);
        cont.appendChild(url);
        c.appendChild(cont);
    }

}




function onJson_g(json){
    console.log(json);
    
    
    const id=json.data[0].id;
    const id_g=encodeURIComponent(id);
    const first=10;

    fetch(twitch_endpoint + '?game_id=' + id_g + '&first=' + first,
    {
        headers: {
            'Authorization': 'Bearer ' + token.access_token,
            'Client-Id': client_id_t,
            
        }
    }
).then(onResponse).then(onJson_c);
}

function onResponse(response){
    return response.json();
}

function gToken(json) {
    token = json;
    console.log(token);
}

function onTokenResponse(response){
    console.log('risposta ok');
    return response.json();
}



function search_t(event){
    const span=document.querySelectorAll('.span');
    
    for(sp of span){
    sp.classList.add('hidden');
    }

    event.preventDefault();
    const con=document.querySelector('#twitch').value;
    const text=encodeURIComponent(con);
    if(text){
        fetch(twitch_endpoint_tg + '?name=' + text,
            {
                headers: {
                    'Authorization': 'Bearer ' + token.access_token,
                    'Client-Id': client_id_t,
                    
                }
            }   
        ).then(onResponse).then(onJson_g);
    }
    else{
        alert('Inserisci una parola.');
    }
}

const form_t=document.querySelector('#form_t');
form_t.addEventListener('submit',search_t);

const twitch_token_endpoint='https://id.twitch.tv/oauth2/token';
const twitch_endpoint_tg='https://api.twitch.tv/helix/games';
const twitch_endpoint='https://api.twitch.tv/helix/clips';
let token;
const client_id_t='ytc1qjmpfpmooncqr6ad40chb5nvt5';
const secret_client_t='oiglrmjvzr21d7gl2e9x4r409z04w9';


fetch(twitch_token_endpoint,
    {
        method:'POST',
        body:'grant_type=client_credentials&client_id='+ client_id_t + '&client_secret=' + secret_client_t,
        headers:
	    {
		    'Content-Type': 'application/x-www-form-urlencoded'
	    }
    }).then(onTokenResponse).then(gToken);





