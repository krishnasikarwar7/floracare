// Fetch and Display User Name from Firestore
if (userGreetingElement) {
    userGreetingElement.textContent = 'Hi!'; // Default while loading
    db.collection('users').doc(user.uid).get().then(doc => {
      if (doc.exists) {
        const userName = doc.data().name;
        if (userName) {
            // Display only the first name for brevity
            userGreetingElement.textContent = `Hi, ${userName.split(' ')[0]}!`;
            console.log(`Greeting set using Firestore name: ${userName.split(' ')[0]}`);
        } else {
            console.log("Name field missing in Firestore document for UID:", user.uid);
            userGreetingElement.textContent = 'Hi!'; // Fallback to a generic greeting
        }
      } else {
        console.log("No user profile document found in Firestore for UID:", user.uid);
        userGreetingElement.textContent = 'Hi!'; // Fallback to a generic greeting
      }
    }).catch(error => {
      console.error("Error getting user document for greeting:", error);
      userGreetingElement.textContent = 'Hi!'; // Fallback to a generic greeting on error
    });
  }

  // Add this inside your DOMContentLoaded event listener in script.js

// Set min date for appointment date input to today
const dateInput = document.getElementById('appointment-date');
if (dateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    // Months are 0-based, add 1 and pad with '0' if needed
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    // Pad day with '0' if needed
    const dd = String(today.getDate()).padStart(2, '0');
    // Set the minimum date attribute in YYYY-MM-DD format
    dateInput.min = `${yyyy}-${mm}-${dd}`;
}

// --- Placeholder for dynamic slot loading logic goes here ---
// (See comments in the HTML file for pseudo-code example)