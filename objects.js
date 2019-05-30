var playlist = {
  linkinpark: "in the end"
}

function updatePlaylist(playlist,artistName,songTitle)){
  Object.assign({},playlist,{artistName:songTitle});
  return playlist
}