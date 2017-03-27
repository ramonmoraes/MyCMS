var req = new XMLHttpRequest();

function postThePost(){
  url='http:??localhost:3000/easycms/newpost';
  req.open("POST",url,true);
  req.onload = function(){

  }
  req.send();
}
function lerPost(url){
  verForm();
  updatePost();
  req.open("GET", url, true);
  req.onload = function(){
    var data = JSON.parse(req.responseText);
    passarData(data);
  };
  req.send();
}


function criarNovoPost(){
  verForm();
  newPost();
  }


function updatePost(){
  document.getElementById('post_form').action='/easycms/update_post';
}

function verForm(){
  document.getElementById('post_form').style.visibility='visible';
}

function passarData(data){
  document.getElementById('comando').innerHTML='Atualizar Post';
  document.getElementById('enviar').value='Update Post';
  document.getElementById('titulo').readOnly=true;
  document.getElementById('titulo').value=data.titulo;
  document.getElementById('tag').value=data.tags;
  document.getElementById('resumo').value=data.resumo;
  document.getElementById('conteudo').value=data.conteudo;
  document.getElementById('obs').innerHTML='O titulo não pode ser editado'
  document.getElementById('deletar').href='/easycms/login/delete_posts?titulo='+data.titulo;
  document.getElementById('deletar').style.display='flex';
}


function newPost(){
  document.getElementById('post_form').action='/easycms/newpost';
  document.getElementById('comando').innerHTML='Novo Post';
  document.getElementById('titulo').value='';
  document.getElementById('titulo').readOnly=false;
  document.getElementById('tag').value='';
  document.getElementById('resumo').value='';
  document.getElementById('conteudo').value='';
  document.getElementById('obs').innerHTML='O titulo não pode ser repitido';
  document.getElementById('enviar').value='Criar novo Post';
  document.getElementById('deletar').style.display='none';


}
