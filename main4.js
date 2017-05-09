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
    res = "<dl class='bg-danger'><dt>" + info[i].error + "</dt><dd>" + info[i].message + "</dd></dl>";
  } else{
    //chequear si transmite o no
    if (info[i].stream != null){
      //transmite
      var name = info[i].stream.name;
      var status = info[i].stream.status;
      var url = info[i]._links.channel;
      res = "<dl class='bg-danger'> <dt> <a href='"+ url+"'>" +name + "</a></dt> <dd>" + status +"</dd> </dl>";
    } else{
      //no transmite
      var name = info[i].display_name;
      var status = "Offline";
      var url = info[i]._links.channel;
      res = "<dl class='bg-secondary'> <dt> <a href='"+ url+"'>" +name + "</a></dt> <dd>" + status +"</dd> </dl>";
    }
  }
  return res;
}

//tal vez para no repetir tanto, debería separar la búsqueda del generar el código html para mostrar la información.
//y que buscar devuelva el índice  y que luego en otra función hecha para generar el html tome como input ese índice y eso se use tanto para el caso de buscar como para el caso de mostrar los canales
//lo tengo que solucionar de algún modo porque tengo código repetido exacto en dos lugares y tiene que ver con un índice, con si existe, si está transmitiendo o no, o no existe y a partir de eso generar el mismo html

//tal vez podría ser así, usar el buscador en canales (aunque me parece que sería muy ineficiente) para cada usuario, y tener otra función para generar el html
//aunque si en vez de ya tener la información, lo que hacemos es pedirla a la api, tiene más sentido eso de para cada búsqueda hacer un pedido y sería conceptualmente lo mismo, si tenés que ver el estado de la lista de usuarios dada, tenés que hacer una búsqueda o pedir información sobre cada uno como si la buscaras individualmente.

function canales(){
  var i;
  for (i= 0; i < users.length; i++){
    //chequear si transmite o no
    if (info[i].stream != null){
      //transmite
      var name = info[i].stream.name;
      var status = info[i].stream.status;
      var url = info[i]._links.channel;
      //var logo = info[i].stream.logo;
      //mostrar en el div todos
      //también mostrar en el div emitiendo
      var html = "<dl class='bg-danger'> <dt> <a href='"+ url+"'>" +name + "</a></dt> <dd>" + status +"</dd> </dl>";
      $('#todos').append(html);
      $('#on').append(html);
     } else{
      //no transmite
      var name = info[i].display_name;
      var status = "Offline";
      var url = info[i]._links.channel;
      //mostrar en el div todos
      //también mostrar en el div offline
      var html = "<dl class='bg-secondary'> <dt> <a href='"+ url+"'>" +name + "</a></dt> <dd>" + status +"</dd> </dl>";
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
  //en principio hasta que vea cómo hacerlo mejor voy a mostrar todo de una
  //inicialmente debería estar oculto todo el div info
  canales(); //canales debería poner la info en los div y ocultarlos todos

  $('#all').on('click', function(){
    //la idea sería que cuando se clickea el botón, muestra el div todos y se ocultan los otros dos y también se oculta el info
    //reconstruirInfo();
    //canales(); //acá habría que mostrar sólo el div todos
    $('#on').hide();
    $('#offline').hide();
    $('#info').hide();
    $('#todos').show();
  });

  $('#str').on('click', function(){
    //acá habría que mostrar sólo el div on
    //reconstruirInfo();
    //canales();
    //muestra el div on y se ocultan los otros dos y también se oculta el info
    $('#todos').hide();
    $('#info').hide();
    $('#offline').hide();
    $('#on').show();    
  });

  $('#off').on('click', function(){
    //acá habría que mostrar el div off
    //reconstruirInfo();
    //canales();
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