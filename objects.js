var playlist = {
  "linkinpark" : "in the end"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}