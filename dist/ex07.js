"use strict";
// Create a function `logCoordinates` that accepts a tuple of latitude and longitude. 
// - The latitude is required, but the longitude is optional. 
// - Use a type guard to log different messages based on whether the longitude is provided.
// - Return type: void.
function logCoordinates(coords) {
    const [latitude, longitude] = coords;
    if (longitude !== undefined) {
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    }
    else {
        console.log(`Latitude: ${latitude}`);
    }
}
// Expected output:
console.log(logCoordinates([40.7128, -74.0060])); // "Latitude: 40.7128, Longitude: -74.0060"
console.log(logCoordinates([34.0522])); // "Latitude: 34.0522"
