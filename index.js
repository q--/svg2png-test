const svg2png = require('svg2png-many');

var srcDir = 'in';
var dstDir = 'out';
 
// same function can be run as alias 
svg2png.svg2PngDir(srcDir, dstDir, {width:120, height:120});