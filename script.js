document.getElementById("beautyForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const inputText = document.getElementById("beautyInput").value.trim().toLowerCase();
    let resultText = "";

    const validPhrases = [
        "what is beauty",
        "describe beauty",
        "the essence of beauty",
        "true beauty",
        "beauty in life",
        "beauty defined"
    ];

    if (validPhrases.includes(inputText)) {
        resultText = "Ishneet Rekhi <3";
    } else {
        resultText = "Try a different phrase!";
    }

    document.getElementById("result").innerText = resultText;
});
