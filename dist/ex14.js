"use strict";
// Create an interface `UserProfile` with properties `username`, `email`, and an optional `lastLogin` date.
// Write a function `getLastLoginMessage` that returns the last login date if available, otherwise a "No login recorded" message using nullish coalescing.
// Return type: string.
function getLastLoginMessage(user) {
    return user.lastLogin?.toString() ?? "No login recorded";
}
// Expected output:
console.log(getLastLoginMessage({ username: "user1", email: "user1@example.com", lastLogin: new Date() }));
// logs the date as a string
console.log(getLastLoginMessage({ username: "user2", email: "user2@example.com" }));
// "No login recorded"
