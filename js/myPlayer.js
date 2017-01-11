function myPlayer(songList) {
	var player = document.createElement("audio");
	player.setAttribute('controls','true');
	var pList = document.createElement("ul");
	pList.classList.add("playlist");
	var descrZone = document.createElement('p');

	for (var i = songList.length - 1; i >= 0; i--) {
		var song = document.createElement("li");
		song.innerHTML = '<strong>' + songList[i].title+'</strong> ' + songList[i].artist + '<br/>' + songList[i].place;
		song.setAttribute('url',songList[i].url);
		song.setAttribute('description',songList[i].description);
		song.onclick = function() {
			player.src = this.getAttribute('url');
			descrZone.innerHTML = this.getAttribute('description');
			player.load(); //call this to just preload the audio without playing
        	player.play(); //call this to play the song right away
		}
		pList.appendChild(song);
	}
	var mPlayerInst = document.getElementsByClassName("m-player")[0];
	mPlayerInst.appendChild(player);
	mPlayerInst.appendChild(pList);
	mPlayerInst.appendChild(descrZone);
	console.log(songList);
}