var playlist = {
  My Bloody Valentine:"song1" ,
  Phil Ochs:"song2" ,
  Slowdive: "song3"
}

function updatePlaylist(thePlaylist, artistName, songTitle) {
  return Object.assign({}, thePlaylist, { [artistName]: songTitle});
}


  






