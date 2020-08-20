/* Collected and modified from a YouTube video. Link: https://www.youtube.com/watch?v=g_rv9XfQJTE */
function expandCollapse(id, height){
	var sec = document.getElementById(id);
	var header = document.getElementById('header');

	if (sec.style.height == "0px" || sec.style.height == ""){
		sec.style.height = ""+height+"px";
		if (id == 'menuExp'){
			header.style.backgroundColor = "rgba(30,30,47,1)";
		}
	}
	else{
		sec.style.height = "0px";
		header.style.backgroundColor = "rgba(30,30,47,0.7)";
	}
}

