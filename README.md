# sequenceJS
Decades of research have given us the ability to peer into our own genomes! If you use a service like 23andMe, you can download a text file that contains genotype and locus information for all the single nucleotide polymorphisms (SNPs) that are surveyed by 23andMe. SNPs are changes at a specific base pair in your genome. For example, most humans might have the base C at a given position in the genome, but an established minority have base A in that location. This position is then considered to be a SNP with C and A as alleles. The vast majority SNPs have no effect, but some SNPs are associated with specific traits or diseases.

To look at what SNPs might be present in your own genome, you first must convert the text file you received from your sequencing services and convert it to a giant JSON object with RSID values as keys. To do so, you can run the file through `sequenceConvert.js`, which will use Node.js streams to produce a file containing your sequence data as JSON. This project was inspired by the DNA2json library from genome.js (https://genomejs.readme.io/). 

Once your genetic data has been reformatted, you can utilize Genome Query Language (https://github.com/genomejs/gql) and genosets from SNPedia (http://www.snpedia.com/index.php/Genoset) to test if you have a predisposition for certain traits like blue eyes or ability to taste bitter. Bioinformatics is fun!

For more information, please see my presentation from Fullstack Academy's November 2016 Stackathon: http://slides.com/sarasunsh/deck

