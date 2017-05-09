var users = ["freecodecamp", "OgamingSC2", "esl_sc2", "noobs2ninjas"];

var info = [
  {
    "stream": {
      "mature": false,
      "status": "Greg working on Electron-Vue boilerplate w/ Akira #programming #vuejs #electron",
      "broadcaster_language": "en",
      "display_name": "FreeCodeCamp",
      "game": "Creative",
      "language": "en",
      "_id": 79776140,
      "name": "freecodecamp",
      "created_at": "2015-01-14T03:36:47Z",
      "updated_at": "2016-09-17T05:00:52Z",
      "delay": null,
      "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png",
      "banner": null,
      "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-channel_offline_image-b8e133c78cd51cb0-1920x1080.png",
      "background": null,
      "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_banner-6f5e3445ff474aec-480.png",
      "profile_banner_background_color": null,
      "partner": false,
      "url": "https://www.twitch.tv/freecodecamp",
      "views": 161989,
      "followers": 10048,
      "_links": {
        "self": "https://api.twitch.tv/kraken/channels/freecodecamp",
        "follows": "https://api.twitch.tv/kraken/channels/freecodecamp/follows",
        "commercial": "https://api.twitch.tv/kraken/channels/freecodecamp/commercial",
        "stream_key": "https://api.twitch.tv/kraken/channels/freecodecamp/stream_key",
        "chat": "https://api.twitch.tv/kraken/chat/freecodecamp",
        "subscriptions": "https://api.twitch.tv/kraken/channels/freecodecamp/subscriptions",
        "editors": "https://api.twitch.tv/kraken/channels/freecodecamp/editors",
        "teams": "https://api.twitch.tv/kraken/channels/freecodecamp/teams",
        "videos": "https://api.twitch.tv/kraken/channels/freecodecamp/videos"
      }
    },
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/freecodecamp",
      "channel": "https://api.twitch.tv/kraken/channels/freecodecamp"
    }
  },
  {
    "stream": null,
    "display_name": "OgamingSC2",
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/ogamingsc2",
      "channel": "https://api.twitch.tv/kraken/channels/ogamingsc2"
    }
  },
  {
    "stream": {
      "mature": false,
      "status": "RERUN: StarCraft 2 - Kane vs. HuK (ZvP) - WCS Season 3 Challenger AM - Match 4",
      "broadcaster_language": "en",
      "display_name": "ESL_SC2",
      "game": "StarCraft II",
      "language": "en",
      "_id": 30220059,
      "name": "esl_sc2",
      "created_at": "2012-05-02T09:59:20Z",
      "updated_at": "2016-09-17T06:02:57Z",
      "delay": null,
      "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg",
      "banner": null,
      "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-channel_offline_image-5a8657f8393c9d85-1920x1080.jpeg",
      "background": null,
      "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_banner-f8295b33d1846e75-480.jpeg",
      "profile_banner_background_color": "#050506",
      "partner": true,
      "url": "https://www.twitch.tv/esl_sc2",
      "views": 60843789,
      "followers": 135275,
      "_links": {
        "self": "https://api.twitch.tv/kraken/channels/esl_sc2",
        "follows": "https://api.twitch.tv/kraken/channels/esl_sc2/follows",
        "commercial": "https://api.twitch.tv/kraken/channels/esl_sc2/commercial",
        "stream_key": "https://api.twitch.tv/kraken/channels/esl_sc2/stream_key",
        "chat": "https://api.twitch.tv/kraken/chat/esl_sc2",
        "subscriptions": "https://api.twitch.tv/kraken/channels/esl_sc2/subscriptions",
        "editors": "https://api.twitch.tv/kraken/channels/esl_sc2/editors",
        "teams": "https://api.twitch.tv/kraken/channels/esl_sc2/teams",
        "videos": "https://api.twitch.tv/kraken/channels/esl_sc2/videos"
      }
    },
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/esl_sc2",
      "channel": "https://api.twitch.tv/kraken/channels/esl_sc2"
    }
  },
  {
    "stream": null,
    "display_name": "noobs2ninjas",
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/esl_sc2",
      "channel": "https://api.twitch.tv/kraken/channels/esl_sc2"
    }
  },
  {
    "error": "Not Found",
    "status": 404,
    "message": "Channel 'not-a-valid-account' does not exist"
  }
];

function generarHTML(i, estado){
  var html;
  //si estado es online 1
  //si estado es offline 0
  //si estado es error -1
  if (estado == "transmite"){
      var name = info[i].stream.name;
      var status = info[i].stream.status;
      var url = info[i].stream.url;
      html = "<dl class='bg-danger'> <dt> <a href='"+ url+"'>" +name + "</a></dt> <dd>" + status +"</dd> </dl>";
  } else if(estado == "notransmite"){
      var name = info[i].display_name;
      var status = "Offline";
      var url = "https://www.twitch.tv/" + info[i].display_name.toLowerCase();
      html = "<dl class='bg-secondary'> <dt> <a href='"+ url+"'>" +name + "</a></dt> <dd>" + status +"</dd> </dl>";
  } else{
      html = "<dl class='bg-danger'><dt>" + info[i].error + "</dt><dd>" + info[i].message + "</dd></dl>";
  }
  return html;
}


//mejorar esta función buscar para no tener que usar break, usar un while y la condición apropiada para que corte y después chequear cuándo salió y a partir de ahí deducir qué pasó
function buscar(usuario){
  //buscar en users
  //si lo encontramos, entonces usamos el índice para acceder a info
    //y ahí tenemos que chequear si el stream es o no null
  //si no accedemos al último de info que es el que tiene el mensaje de error, en este caso tiene el índice 4
  // y ahí devolvemos el mensaje de error
  var res;
  var i;
  for (i= 0; i < users.length; i++){
    if (users[i].toLowerCase() === usuario.toLowerCase()){
      break;
    }
  }
  //si el índice es 4 entonces no lo encontró
  //si el índice es menor que 4 entonces lo encontró
  //en cualquier caso uso el índice para acceder a la información

  if (i == users.length){
    //no lo encontró, como en info hay uno más que en users, podemos acceder a un índice que es igual a la longitud de users
    res = generarHTML(i, "error");
  } else{
    //chequear si transmite o no
    if (info[i].stream != null){
      //transmite
      res = generarHTML(i, "transmite");
    } else{
      //no transmite
      res = generarHTML(i, "notransmite");
    }
  }
  return res;
}

function canales(){
  var i;
  for (i= 0; i < users.length; i++){
    //chequear si transmite o no
    if (info[i].stream != null){
      //transmite
      html = generarHTML(i, "transmite");
      $('#todos').append(html);
      $('#on').append(html);
     } else{
      //no transmite
      var html = generarHTML(i, "notransmite");
      $('#todos').append(html);
      $('#offline').append(html);
    }
  }
  $('#todos').hide();
  $('#on').hide();
  $('#offline').hide();
}

function limpiarInfo(){
     $('#info').html("");
}

function reconstruirInfo(){
  $('#info').html('<div class="col-sm-4" id="todos"></div><div class="col-sm-4" id="on"></div><div class="col-sm-4" id="offline"></div>');
}

$(document).ready(function(){
  //ubicar la información en los div correspondientes
  canales();

  $('#all').on('click', function(){
    //la idea sería que cuando se clickea el botón, muestra el div todos y se ocultan los otros dos y también se oculta el info
    $('#on').hide();
    $('#offline').hide();
    $('#info').hide();
    $('#todos').show();
  });

  $('#str').on('click', function(){
    //muestra el div on y se ocultan los otros dos y también se oculta el info
    $('#todos').hide();
    $('#info').hide();
    $('#offline').hide();
    $('#on').show();    
  });

  $('#off').on('click', function(){
    // muestra el div offline y se ocultan los otros dos y también se oculta el info
    $('#todos').hide();
    $('#on').hide();
    $('#info').hide();
    $('#offline').show();
    });

  $('#btnBuscador').on('click', function(){
    //obtener información de lo que se escribió en el cuadro de texto
    //y buscar el usuario y la información correspondiente.

    //por ejemplo si no está en la lista de los confirmados (para el local)
    //o si la api responde con un error, mostramos el mensaje de error.

    //si está mostramos si está transmitiendo ahora o no
    var buscado = $('#buscador').val();
    var resultado = buscar(buscado);
    //alert(resultado);
    limpiarInfo();
    //además hay que ocultar todo el div info-botones
    $('#todos').hide();
    $('#on').hide();
    $('#offline').hide();
    $('#info').append(resultado);
    $('#info').show();
  });

  $('#buscador').on('keyup', function buscar(event){
    //código de stackoverflow
    //https://stackoverflow.com/questions/155188/trigger-a-button-click-with-javascript-on-the-enter-key-in-a-text-box
    if(event.keyCode == 13){
      //alert("enter");
      $("#btnBuscador").click();
    }
  });
});