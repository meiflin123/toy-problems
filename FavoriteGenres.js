/*Given a map Map<String, List<String>> userSongs with user names as keys and a list of all the songs that the user has listened to as values.

Also given a map Map<String, List<String>> songGenres, with song genre as keys and a list of all the songs within that genre as values. The song can only belong to only one genre.

The task is to return a map Map<String, List<String>>, where the key is a user name and the value is a list of the user's favorite genre(s). Favorite genre is the most listened to genre. A user can have more than one favorite genre if he/she has listened to the same number of songs per each of the genres.

Example 1:

Input:
userSongs = {  
   "David": ["song1", "song2", "song3", "song4", "song8"],
   "Emma":  ["song5", "song6", "song7"]
},
songGenres = {  
   "Rock":    ["song1", "song3"],
   "Dubstep": ["song7"],
   "Techno":  ["song2", "song4"],
   "Pop":     ["song5", "song6"],
   "Jazz":    ["song8", "song9"]
}

Output: {  
   "David": ["Rock", "Techno"],
   "Emma":  ["Pop"]
}

Explanation:
David has 2 Rock, 2 Techno and 1 Jazz song. So he has 2 favorite genres.
Emma has 2 Pop and 1 Dubstep song. Pop is Emma's favorite genre.
Example 2:

Input:
userSongs = {  
   "David": ["song1", "song2"],
   "Emma":  ["song3", "song4"]
},
songGenres = {}

Output: {  
   "David": [],
   "Emma":  []
}*/



function favoriteGenres(userSongs, songGenres){
   var result = {};

   //for in loop userSongs
     //push user into result hashtable with value = {};
     //loop through userSong array
       //if song is found in a genre in songGenres 
         //result[user][genre] += frequency
         // else create result[user][genres] = 1;  
          //--> result: { David: { Rock: 2, Techno: 2, Jazz: 1 },Emma: { Pop: 2, Dubstep: 1 } }

   for (let key in userSongs) {
     let userSong = userSongs[key]
     result[key] = {};
     for(let i = 0; i< userSong.length; i++) {
       let song= userSong[i];
       for(let genres in songGenres) {
         let genre = songGenres[genres];
         if(genre.includes(song)) {
           if(!result[key][genres]) {
             result[key][genres] = 1;
           } else {
             result[key][genres] += 1;
           }    
         }
       }
     }
   }

   //for in loop the inner obj, update max and favGenres if frq > max. Add to favGenres if equal frq.
   //renew user's genres to be only favGenre.
  for(let user in result){
    var max = 1;
    var favGenres = [];
    var genresDict = result[user]

    for (let songGenre in genresDict) {
      if(genresDict[songGenre] > max) {
      
        max = genresDict[songGenre];
        favGenres = [songGenre];
      } 
      else if(genresDict[songGenre] === max) {
        favGenres.push(songGenre);
      } 
      
    }
    
    result[user] = favGenres;
  }
  
  return result;
}