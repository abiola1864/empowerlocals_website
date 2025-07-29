document.addEventListener("DOMContentLoaded", function () {
    var phrases = ["Vibrant ", "Prosperous ", "Tech-Driven "]; // Added spaces after each phrase
    var index = 0;
    var typingSpeed = 100; // Adjust typing speed (milliseconds)
    var phraseDuration = 3000; // Duration of each phrase (3 seconds)
    var typingElement = document.getElementById("typing-text");

    function typeText() {
        if (index < phrases.length) {
            var text = phrases[index];
            var textIndex = 0;

            function typeNextLetter() {
                if (textIndex < text.length) {
                    typingElement.textContent += text.charAt(textIndex);
                    textIndex++;
                    setTimeout(typeNextLetter, typingSpeed);
                } else {
                    // Wait for the phraseDuration, then erase the text
                    setTimeout(eraseText, phraseDuration);
                }
            }

            // Start typing the current phrase
            typeNextLetter();
        }
    }

    function eraseText() {
        var text = typingElement.textContent;
        if (text.length > 0) {
            typingElement.textContent = text.slice(0, -1); // Remove the last character
            setTimeout(eraseText, typingSpeed);
        } else {
            // Move to the next phrase
            index = (index + 1) % phrases.length;
            setTimeout(typeText, typingSpeed);
        }
    }

    // Start the typing animation when the page loads
    typeText();
});
