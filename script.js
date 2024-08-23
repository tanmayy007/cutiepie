document.getElementById("beautyForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const inputText = document.getElementById("beautyInput").value.trim().toLowerCase();
    let resultText = "";

    const validPhrases = [
        "what is beauty",
        "describe beauty",
        "the essence of beauty",
        "true beauty",
        "beauty in life",
        "beauty defined",
        "What is beauty",
        "What defines beauty",
        "The most beautiful girl in the whole wide world",
        "queen of nift shillong",
        "the best version of geet"

    ];

    const vPhrases = [
        "chutiya"
    ];

    if (validPhrases.includes(inputText)) {
        resultText = "Ishneet Rekhi <3";
    }
    if (vPhrases.includes(inputText)) {
        resultText = "Tanmay Tripathi Xd";
    }
    else {
        resultText = "Try a different phrase!";
    }

    document.getElementById("result").innerText = resultText;

    document.getElementById("doItAgainButton").style.display = "inline-block";

    document.getElementById("doItAgainButton").addEventListener("click", function () {
        document.getElementById("beautyInput").value = "";
        document.getElementById("result").innerText = "";
        this.style.display = "none";
    });
});
