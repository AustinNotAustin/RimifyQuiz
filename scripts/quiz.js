const currentQuestionNumElement = document.getElementById("current-question-num");
const currentQuestionNumTitleElement = document.getElementById("current-question-num-title");
const progressBarElement = document.getElementById("progress-bar");
const numOfQuestionsElement = document.getElementById("num-of-questions");

var count = 0;                  // Current number
var completePercent = 0;        // % complete by current num question / total questions num
var total = 0;                  // Total number of questions

var resultMap = new Map();      // Stores the users results from the quiz


// Set up the result map fields
const setResultMapDefaultVal = () => {
    resultMap.set('Animals',        { right: 0, wrong: 0});
    resultMap.set('Artistic',       { right: 0, wrong: 0});
    resultMap.set('Construction',   { right: 0, wrong: 0});
    resultMap.set('Cooking',        { right: 0, wrong: 0});
    resultMap.set('Crafting',       { right: 0, wrong: 0});
    resultMap.set('Intellectual',   { right: 0, wrong: 0});
    resultMap.set('Medical',        { right: 0, wrong: 0});
    resultMap.set('Melee',          { right: 0, wrong: 0});
    resultMap.set('Mining',         { right: 0, wrong: 0});
    resultMap.set('Plants',         { right: 0, wrong: 0});
    resultMap.set('Shooting',       { right: 0, wrong: 0});
    resultMap.set('Social',         { right: 0, wrong: 0});
}

// Get the total number of questions and load the 1st question
$(document).ready(function () {

    $(numOfQuestionsElement).load("php/get-total-num-qs.php", (data) => {
        total = data;
    });

    $("#submit-btn").on('click', () => {
        getNextQuestion();
    });
});

// Call every submit to update progress bar progression
const handleProgressBar = () => {
    completePercent = (count / total) * 100;

    progressBarElement.style.width = `${completePercent}%`;
}

// Values from the DB for each questions fields, respectively
var question, opt1, opt2, opt3, opt4, answer, subtype;

// Call on every submit to handle loading the next question, checking their response, checking for end, ect.
const getNextQuestion = () => {
    count++;

    if (count > total) completeQuiz();

    currentQuestionNumElement.textContent = count;
    currentQuestionNumTitleElement.textContent = count;
    handleProgressBar();

    $("#question-type-text").load("php/get-question-sub-type.php", { newCount: count }, function (data) {
        subtype = data;
    });

    $("#question-text").load("php/get-question.php", { newCount: count }, function (data) {
        question = data;
    });
    
    $("#option-1-text").load("php/get-option-1.php", { newCount: count }, function (data) {
        opt1 = data;
        $("#radio-option-1").val(data);
    });

    $("#option-2-text").load("php/get-option-2.php", { newCount: count }, function (data) {
        opt2 = data;
        $("#radio-option-2").val(data);
    });

    $("#option-3-text").load("php/get-option-3.php", { newCount: count }, function (data) {
        opt3 = data;
        $("#radio-option-3").val(opt3);
    });

    $("#option-4-text").load("php/get-option-4.php", { newCount: count }, function (data) {
        opt4 = data;
        $("#radio-option-4").val(opt4);
    });

    $.post("php/get-answer.php", { newCount: count }, function (data) {
        answer = data;
    });

    let submission = getSubmitAnswer();

    // Only handle the answer if the user is actually completing and answer
    if (count > 1) handleAnswer(submission, answer, subtype);
}

// Get the submit value from the users response
const getSubmitAnswer = () => {
    if ($("#radio-option-1").prop("checked")) {
        return $("#radio-option-1").attr("value");
    }
    if ($("#radio-option-2").prop("checked")) {
        return $("#radio-option-2").attr("value");
    }
    if ($("#radio-option-3").prop("checked")) {
        return $("#radio-option-3").attr("value");
    }
    if ($("#radio-option-4").prop("checked")) {
        return $("#radio-option-4").attr("value");
    }
    
    return 'none';
}

// Check if the question was right or wrong, and update map accordingly
const handleAnswer = (submission, correct, type) => {

    if (type == null || correct == null) return;

    let mapTarget = resultMap.get(type);

    if (submission === correct) mapTarget.right++;
    else mapTarget.wrong++;
}

// Call once the user reaches the end of the quiz
const completeQuiz = () => {
    count = 0;

    let barTarget = barGraph.config.data.datasets[0];               // Get the bar graph data []
    let donutTarget = donut.config.data.datasets[0];                // Get the donut graph data []

    let tempArr = [];                                               // Set up a blank [] to push items to

    // Input the result map to the 
    resultMap.forEach(skill => {                                    // Iter through the skills and set their values to the graphs respectively
        tempArr.push(skill.right);
    });

    barTarget.data = tempArr;                                       // Set the data graphs new values
    donutTarget.data = tempArr;

    barGraph.update();                                              // Update the data graphs to display the changes
    donut.update();
    
    homeContentDiv.style.display = "flex";                       // Hide the quiz divs and show the graphs
    resultsBriefDiv.style.display = "flex";
    resultsExpandedDiv.style.display = "flex";
    quizStatusDiv.style.display = "none";
    quizSectionDiv.style.display = "none";
}

// const test = () => {
//     homeContentDiv.style.display = "flex";                       // Hide the quiz divs and show the graphs
//     resultsBriefDiv.style.display = "flex";
//     resultsExpandedDiv.style.display = "flex";
//     quizStatusDiv.style.display = "none";
//     quizSectionDiv.style.display = "none";
// }
