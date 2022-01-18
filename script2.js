/**
 * Create a Album object.
 */
 const album = {
    name: "Universe", //separated by comma
    songs: 15,
    album_color: "black and white", //only contain letters, digits, dollar signs, underscore
    aldumDimensions: { //camelCase property names avoid issues
      width: 145,
      height: 205,
    },
  };
  
  console.log("The Album object:", album);
  console.log("The number of songs:", album.songs); //dot notation - most common