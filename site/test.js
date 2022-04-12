// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate').v2;

// Creates a client
const projectId = 'verdant-cable-346903'
const keyFilename = "./Term 2/cosc_310/Assignment 3/A3COSC310-Team11.github.io/verdant-cable-346903-a19a6cc308c3.json"
const translate = new Translate({projectId, keyFilename});

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
const text = 'Bonjour le monde! Comment était ta journée?';
// const target = 'fr';

async function detectLanguage() {
    let [detections] = await translate.detect(text);
    detections = Array.isArray(detections) ? detections : [detections];
    // console.log('Detections:');
	let detect = '';
	detections.forEach(detection => {
		detect += `${detection.language}`;
	  	
	});
	return detect;
  }
  
  console.log(String(detectLanguage()));