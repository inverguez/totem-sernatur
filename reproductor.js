
/*
 * CRÉDITOS (Inspiración)
 * Apple https://developer.apple.com/library/content/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/ControllingMediaWithJavaScript/ControllingMediaWithJavaScript.html#//apple_ref/doc/uid/TP40009523-CH3-SW5
 * Este tipo http://burnignorance.com/html-tips/how-to-play-multiple-videos-in-a-loop-using-html5-and-javascript/
*/

var videos = new Array();

videos[0]='videos/mp4/Gibbon.mp4';
videos[1]='videos/mp4/Giraffes.mp4';
videos[2]='videos/mp4/Stingray.mp4';
videos[3]='videos/mp4/paranaltimelapse12i.mp4';

var n_videos = videos.length;
var i=0;

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

function myAddListener()
{
	var elVideo = document.getElementsByTagName('video')[0];
	
	elVideo.addEventListener('ended', cambiaVideo, false);

}