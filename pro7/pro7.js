// a) Converting JSON Text to JavaScript Object
const jsonStr = document.getElementById('jsonText').textContent.trim();
const obj = JSON.parse(jsonStr); // Converts JSON string to JavaScript Object
document.getElementById('jsObject').textContent = JSON.stringify(obj, null, 2);

// b) Convert JSON Results into a Date
const dateStr = document.getElementById('jsonDateText').textContent.trim();
const dateObj = JSON.parse(dateStr); // Parse the JSON string to get an object
const jsDate = new Date(dateObj.date); // Create a JavaScript Date object from the ISO date string
document.getElementById('jsDate').textContent = `JS Date: ${jsDate.toString()}`;

// c) Convert From JSON to CSV and CSV to JSON
const jsonArray = JSON.parse(document.getElementById('jsonArray').textContent.trim());

// JSON to CSV using Papa Parse
function jsonToCsv(data) {
    return Papa.unparse(data); // Convert JSON to CSV using PapaParse
}
const csvData = jsonToCsv(jsonArray); 
document.getElementById('csv').textContent = csvData; // Display CSV

// CSV to JSON using Papa Parse
function csvToJson(csv) {
    const jsonData = Papa.parse(csv, { header: true }).data; // Parse CSV to JSON
    return jsonData;
}
document.getElementById('jsonAgain').textContent = JSON.stringify(csvToJson(csvData), null, 2);

// d) Create Hash from String using crypto.createHash()
async function hashString(str) {
    const encoded = new TextEncoder().encode(str);  // Convert string to Uint8Array
    const hashBuffer = await crypto.subtle.digest('SHA-256', encoded); // Hash using SHA-256
    return Array.from(new Uint8Array(hashBuffer))
        .map(byte => byte.toString(16).padStart(2, '0')) // Convert each byte to a hex string
        .join('');
}

hashString("Hello").then(hash => {
    document.getElementById('hashBrowser').textContent = `SHA-256('Hello'): ${hash}`;
});
