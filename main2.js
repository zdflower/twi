/*
an example call to fetch Free Code Camp's Twitch channel data:

$.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
  console.log(data);
});
*/

var users = ["freecodecamp", "OgamingSC2", "esl_sc2", "noobs2ninjas"]; //["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

var api = "https://wind-bow.gomix.me/twitch-api";

var fccInfo = api + "streams/freecodecamp?callback=?";

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
    res = "<span class='bg-danger'>" + info[i].message + "</span>";
  } else{
    //chequear si transmite o no
    if (info[i].stream != null){
      //transmite
      //res = "<span class='text-success nombre'" + info[i].stream.name + "</span>" + "<br/>" + "<span class="">" + info[i].stream.status +"</span>";
      res = "<dl class='bg-success'> <dt>" + info[i].stream.name + "</dt> <dd>" + info[i].stream.status +"</dd> </dl>";
    } else{
      //no transmite
      res = "<span class='bg-warning'>"+ info[i].display_name  + ": Offline </span>";
    }
  }
  return res;
}

function mostrarEstado(){
  //buscar en users
  //si lo encontramos, entonces usamos el índice para acceder a info
    //y ahí tenemos que chequear si el stream es o no null
  //si no accedemos al último de info que es el que tiene el mensaje de error, en este caso tiene el índice 4
  // y ahí devolvemos el mensaje de error
  var res;
  var i;
  for (i= 0; i < users.length; i++){
    //chequear si transmite o no
    if (info[i].stream != null){
      //transmite
      //res = "<span class='text-success nombre'" + info[i].stream.name + "</span>" + "<br/>" + "<span class="">" + info[i].stream.status +"</span>";
      res = "<dl class='bg-success'> <dt>" + info[i].stream.name + "</dt> <dd>" + info[i].stream.status +"</dd> </dl>";
      $('#info').append(res);
    } else{
      //no transmite
      res = "<dl class='bg-warning'> <dt>"+ info[i].display_name  + "</dt> <dd>Offline</dd></dl>";
      $('#info').append(res);
    }
  }
}

//////¿cómo podría mejorar esto y tener menos código repetido?//////

//podría tener una sola función, por ej. mostrar estado, que pudiera tomar 1 de tres parámetros posibles,
//si se elige t, se muestran todos, si se elige e se muestran sólo los que están emitiendo y si se elige o sólo los que están offline

function emitiendo(){
  var res;
  var i;
  for (i= 0; i < users.length; i++){
    //chequear si transmite o no
    if (info[i].stream != null){
      //transmite
      //res = "<span class='text-success nombre'" + info[i].stream.name + "</span>" + "<br/>" + "<span class="">" + info[i].stream.status +"</span>";
      res = "<dl class='bg-success'> <dt>" + info[i].stream.name + "</dt> <dd>" + info[i].stream.status +"</dd> </dl>";
      $('#info').append(res);
    }
  }
}

function offline(){
  var res;
  var i;
  for (i= 0; i < users.length; i++){
    if (info[i].stream == null){
     res = "<dl class='bg-warning'> <dt>"+ info[i].display_name  + "</dt> <dd>Offline</dd></dl>";
     $('#info').append(res); 
    }
  }
}

function limpiarInfo(){
     $('#info').html("");
}

/*
por ejemplo, recorro el array de usuarios y también recorro el array info

¿qué quiero hacer?
quiero para cada usuario que tengo en users primero ver si está en info, y si es así mostrar si está emitiendo (en ese caso qué), o si no.

no importa las mayúsculas y minúsculas

¿qué representa el array de info? ¿es una colección de pedidos a la api de twitch tv para ciertos nombres de usuario?

¿entonces no haría falta buscar si el nombre está, si no asumir que el primer objeto corresponde a tal usuario, como si se hubiese hecho el pedido?

entonces, viendo el último, que tira error, tenemos que suponer que pedimos info sobre cierto usuario pero no sabemos lo que va a venir, entonces tenemos que chequear que no hubo error antes de poder usar la información.

si no hay error
	y el stream no es null
		el nombre está en name
	y el stream es null
		el nombre está en display_name

Al cargar el documento quiero que se ejecute una función donde 
voy a recorrer el array info de 0 a 4
voy a chequear si hay error o si tiene la propiedad stream y en este caso si es o no null

y para cada info válida voy a mostrar en el documento el nombre y el estado del canal

*/

//primero procesar la información de todos, cuáles están en línea y cuáles están offline


$(document).ready(function(){
  
  $('#all').on('click', function(){
    limpiarInfo();
    mostrarEstado();
  });

  $('#str').on('click', function(){
    //acá se va a usar una función para filtrar cuáles están en línea
    //y después se van a mostrar esos
    limpiarInfo();
    emitiendo();
  });

  $('#off').on('click', function(){
    //acá se va a usar una función para filtrar cuáles están fuera de línea
    //y después se van a mostrar esos
    limpiarInfo();
    offline();
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
    $('#info').append(resultado);
  });
});