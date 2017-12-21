/*
 * CRÉDITOS (Inspiración)
 * Apple https://developer.apple.com/library/content/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/ControllingMediaWithJavaScript/ControllingMediaWithJavaScript.html#//apple_ref/doc/uid/TP40009523-CH3-SW5
 * Este tipo http://burnignorance.com/html-tips/how-to-play-multiple-videos-in-a-loop-using-html5-and-javascript/
 * Este otro tipo https://stackoverflow.com/a/12460803/3369131
*/

var videos = new Array();

videos[0]='videos/mp4/21_mayo.mp4';
videos[1]='videos/mp4/OIT_Tamarigal.mp4';
videos[2]='videos/mp4/SERNATUR-cuenta_publica.mp4';
videos[3]='videos/mp4/SERNATUR-excelencia_atencion.mp4';
videos[4]='videos/mp4/SERNATUR-gira_calama.mp4';
videos[5]='videos/mp4/SERNATUR-la_tirana.mp4';
videos[6]='videos/mp4/SERNATUR-mujer_empresaria.mp4';/*
videos[7]='videos/mp4/centro_historico.mov';*/
videos[7]='videos/mp4/la_escoba.mp4';
videos[8]='videos/mp4/find_your_Chile.mp4';

var n_videos = videos.length;
var i=0;

function ejecuta()
{
	var elVideo = document.getElementsByTagName('video')[0];
	elVideo.addEventListener('ended', cambiaVideo, false);
	
	//Intento de abrir en pantalla completa
	//https://msdn.microsoft.com/en-us/library/dn265028(v=vs.85).aspx
	document.getElementsByTagName('body')[0].requestFullscreen();
}

window[ addEventListener ? 'addEventListener' : 'attachEvent' ]( addEventListener ? 'load' : 'onload', ejecuta );
window.addEventListener("touchstart", touchHandler, false);

function cambiaVideo()
{
	i++;
	dalePlay(i-1);
	if(i === (n_videos)){
		i = 0;
	}
}

function dalePlay(videoNum)
{
	document.getElementsByTagName('video')[0].setAttribute("src",videos[videoNum]);
	document.getElementsByTagName('video')[0].load();
	document.getElementsByTagName('video')[0].play();
}

//Blockear zoom
//https://stackoverflow.com/a/37712966/3369131
function touchHandler(event){
    if(event.touches.length > 1){
        //the event is multi-touch
        //you can then prevent the behavior
        event.preventDefault();
    }
}