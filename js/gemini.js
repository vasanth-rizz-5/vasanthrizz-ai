const API_KEY = 'AIzaSyA_Gewt7v7DLOxaEUKBBtWh5rR883AfQNg';
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';


// Disable Right Click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Disable specific key combinations
document.addEventListener('keydown', function(e) {
    // Ctrl+U
    if (e.ctrlKey && e.key.toLowerCase() === 'u') {
        e.preventDefault();
    }
    // Ctrl+Shift+I or Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && (e.key.toLowerCase() === 'i' || e.key.toLowerCase() === 'c')) {
        e.preventDefault();
    }
    // F12
    if (e.key === 'F12') {
        e.preventDefault();
    }

});

