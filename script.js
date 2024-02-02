//  ["", "Yours Truly My Jaan"]; // Add authors corresponding to each quote

let currentQuoteIndex = 0;
const quotes = ["", "Remember, stay calm, focus on each question, and give it your best shot."];
const authors = ["", "Yours Truly, Meri Jaan"]; // Add authors corresponding to each quote
const quoteTextElement = document.getElementById("quote-text");
const authorElement = document.querySelector(".credit");
const numberElement = document.querySelector(".number");

function nextQuote() {
    currentQuoteIndex++;
    if (currentQuoteIndex < quotes.length) {
        quoteTextElement.textContent = quotes[currentQuoteIndex];
        authorElement.textContent = authors[currentQuoteIndex];
        updateNumber();
    } else {
        window.location.href = "checklist.html";
    }
}

function updateNumber() {
    numberElement.textContent = currentQuoteIndex + 1;
}


function checkChecklist() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);

    if (allChecked) {
        window.location.href = "animation.html";
    }
}

function toggleCheckbox(item) {
    const checkbox = item.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;
    checkChecklist();
}
