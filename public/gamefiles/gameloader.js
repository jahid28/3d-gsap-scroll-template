// GameMaker loader wrapper to handle strict mode issues
(function() {
    'use strict';
    
    // Create a script element to load the game
    var script = document.createElement('script');
    script.src = 'BLANK_GAME.js?cachebust=1664111295';
    script.type = 'text/javascript';
    
    script.onload = function() {
        // Initialize the game once the script is loaded
        if (typeof window.GameMaker_Init === 'function') {
            window.GameMaker_Init();
        } else {
            console.error('GameMaker_Init function not found');
        }
    };
    
    script.onerror = function() {
        console.error('Failed to load GameMaker script');
    };
    
    // Add the script to the document
    document.head.appendChild(script);
})();
