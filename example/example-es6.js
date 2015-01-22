//
// This is an example of using the DICOM data dictionary from node using ES6
//

// load the library
var dicomDataDictionary = require('../dist');
// or use the following line instead if package is installed via npm
//var dicomDataDictionary = require('dicom-data-dictionary');

// create a data element dictionary
var dictionary = new dicomDataDictionary.DataElementDictionary();

// lookup an element by tag
var element = dictionary.lookup('00100010');

// print out the name and VR
console.log('Name = ' + element.name);
console.log('VR  = ' + element.vr);

// iterate over all elements in the dictionary looking for names that begin with "Patient"
for(let it of dictionary) {
    if(it[1].name.indexOf('Patient') === 0) {
        console.log(it[1].name);
    }
}
