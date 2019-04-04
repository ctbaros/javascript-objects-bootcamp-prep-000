var playlist = {
  artist1: "song1",
  artist2: "Phil Ochs",
  artist3: "song3"
};

function updatePlaylist(thePlaylist, artistName, songTitle) {
    return Object.assign({}, thePlaylist, { [artistName]: songTitle});
}


  






