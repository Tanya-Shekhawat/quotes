let currentQuoteIndex = 0;
const quotes = ["Quote 1", "Quote 2", "New Quote 1", "New Quote 2"];
const quoteTextElement = document.getElementById("quote-text");

function nextQuote() {
    currentQuoteIndex++;
    if (currentQuoteIndex < quotes.length) {
        quoteTextElement.textContent = quotes[currentQuoteIndex];
    } else {
        window.location.href = "checklist.html";
    }
}

function checkChecklist() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);

    if (allChecked) {
        window.location.href = "goodluck.html";
    }
}


