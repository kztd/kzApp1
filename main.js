// main.js
// JavaScript Document
"use strict";
/* eslint-env es6, jquery*/

/*
const FORMID = "#multipleChoices";
const QUESTION_SPAN = ".js-quizQuestion";
const ANSWER_SPAN = ".js-quizAnswers";
const RETAKE_QUIZ = ".js-retakeQuiz";
//const HIDEOUT = ".js-hideOut";
*/

$("p").click(function(){
    $(this).hide();
});

/*global console*/  //eslint always flags console statements
$("document").ready(function(){
    console.log("I'm ready!");
});


$("#ok").click(function(){
    console.log("I'm clicked");
});
