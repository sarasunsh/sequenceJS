var through2 = require('through2') // https://github.com/rvagg/through2
var split2 = require('split2') // https://www.npmjs.com/package/split2
var fs = require('fs')
var path = require('path');
var transform = require('./utils');

const snpArray = []; // Results array for SNPs

fs.createReadStream('./data/dna2.txt') // Create a readstream from the sequence text file
  .pipe(split2()) // Split the stream into single lines of the file
  .pipe(through2.obj(function (chunk, enc, callback) {
    if (chunk.indexOf('#')===-1) {
      this.push(chunk); // Filter out comment lines (which start with #)
    }
    callback();
  }))
  .pipe(through2.obj(function (chunk, enc, callback) {
    let line = chunk.split(/\s+/g); // Split each SNP line into an array
    this.push(line);
    callback();
  }))
  .on('data', function (data) { // 'data' event is emitted each time the stream receives a chunk
    snpArray.push(data);
  })
  .on('end', function () { // 'end' event is emitted when a readable stream has no more data
    const snpJSON = snpArray.reduce(transform, {})
    fs.writeFileSync(path.join(__dirname, 'data/dna.json'), JSON.stringify(snpJSON))
  })
