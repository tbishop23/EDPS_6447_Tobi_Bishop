// Sections in the HTML CSS Grid
var sec_landing = document.getElementById("sec_landing"),
	sec_quiz = document.getElementById("sec_quiz");

// Containers to display feedback
var cont_success = document.getElementById("cont_success"),
	cont_danger = document.getElementById("cont_danger");

// Inputs - textbox or radio buttons
var input_username = document.getElementById("input_username"),
	input_1 = document.getElementById("input_1"),
	input_2 = document.getElementById("input_2"),
    input_3 = document.getElementById("input_3"),
    input_4 = document.getElementById("input_4"),
    text_input1 = document.getElementById("text_input1"),
    text_input2 = document.getElementById("text_input2"),
    text_input3 = document.getElementById("text_input3"),
    text_input4 = document.getElementById("text_input4"),
    text_hint = document.getElementById("text_hint"),
    text_tidbit = document.getElementById("text_tidbit");

// Buttons
var btn_start = document.getElementById("btn_start"),
	btn_tutorial = document.getElementById("btn_tutorial"),
	btn_submit = document.getElementById("btn_submit"),
	btn_previous = document.getElementById("btn_previous"),
	btn_hint = document.getElementById("btn_hint"),
	btn_next = document.getElementById("btn_next");

// Text containers where content is updated
var text_statement = document.getElementById("text_statement"),
	text_question_id = document.getElementById("text_question_id"),
	text_question_total = document.getElementById("text_question_total"),
	text_question_correct = document.getElementById("text_question_correct"),
	text_question_incorrect = document.getElementById("text_question_incorrect"),
	text_agent_dialogue = document.getElementById("text_agent_dialogue");

// Variables to store values
var counter = 0,
	hint_request = false,
	start_time,
	end_time,
	username,
	lrs;
