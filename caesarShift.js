'use strict';

function encode( string ) {
  // A-Z: 65-90 a-z: 97-122
  var string = string
  var encodedString = ""
  for ( var i = 0; i < string.length; i++ ) {
    var charCode = string.charCodeAt( i )
    var encodedChar = string[ i ]
    if ( ( charCode <= 87 && charCode >= 65 ) || ( charCode <= 119 && charCode >= 97 ) ) {
      charCode += 3
      encodedChar = String.fromCharCode( charCode );
    } else if ( ( charCode <= 90 && charCode >= 88 ) || ( charCode <= 122 && charCode >= 120 ) ) {
      charCode -= 23
      encodedChar = String.fromCharCode( charCode );
    }
    encodedString += encodedChar
  }
  return encodedString;
}

function decode( string ) {
  var string = string
  var decodedString = ""
  for ( var i = 0; i < string.length; i++ ) {
    var charCode = string.charCodeAt( i )
    var decodedChar = string[ i ]
    if ( ( charCode <= 90 && charCode >= 68 ) || ( charCode <= 122 && charCode >= 100 ) ) {
      charCode -= 3
      decodedChar = String.fromCharCode( charCode );
    } else if ( ( charCode <= 67 && charCode >= 65 ) || ( charCode <= 99 && charCode >= 97 ) ) {
      charCode += 22
      decodedChar = String.fromCharCode( charCode );
    }
    decodedString += decodedChar
  }
  return decodedString;
}

module.exports = {
  encode,
  decode
}
