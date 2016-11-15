// Parsing helper function
var parseLine =  function(row) {
    // Format the SNP appropriately
    var snp = {
      id: row[0],
      chromosome: row[1],
      genotype: row[3]
    };

    // Set deletions properly
    if (snp.genotype === '--' ||
      snp.genotype === 'DD') {
      snp.genotype = null;
    }
    // Convert chromosome number to integer format unless sex chromosome or mitochondrial DNA
    if (snp.chromosome !== 'X' &&
      snp.chromosome !== 'Y' &&
      snp.chromosome !== 'MT') {
      snp.chromosome = +snp.chromosome;
    }
    return snp;
};

// Reducing function -- will convert each row into proper SNP JSON format
var transform = function(genome, row){
  var snp = parseLine(row);
  genome[snp.id] = {chromosome: snp.chromosome, genotype: snp.genotype};
  return genome;
};

module.exports = transform;
