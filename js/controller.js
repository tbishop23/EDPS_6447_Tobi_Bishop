function getAnswer() {
	let answer;
	if (input_1.checked == true) {
		answer = input_1.value;
	} else if (input_2.checked == true) {
		answer = input_2.value;
    } else if (input_3.checked == true) {
		answer = input_3.value;
    } else if (input_4.checked == true) {
		answer = input_4.value;
	} else {
		answer = "N/A";
	}
	return evalAnswer(answer);
}

function evalAnswer(answer) {
	if (answer == array_questions[counter].answer_key) {
		array_answers[counter] = {
			username: username,
			answer: answer,
			hint: hint_request,
			topic: array_questions[counter].topic,
			sub_topic: array_questions[counter].sub_topic,
			evaluation: "correct",
		};
	} else {
		array_answers[counter] = {
			username: username,
			answer: answer,
			hint: hint_request,
			topic: array_questions[counter].topic,
			sub_topic: array_questions[counter].sub_topic,
			evaluation: "incorrect",
		};
	}
	showFeedback();
	sumAnswerEvals();
	return array_answers;
}

function incrementQuestion() {
	counter = counter + 1; // Also written as counter += 1;
	text_question_id.textContent = counter + 1;
	text_statement.textContent = array_questions[counter].statement;
    text_input1.textContent = array_questions[counter].labels[0];
    text_input2.textContent = array_questions[counter].labels[1];
    text_input3.textContent = array_questions[counter].labels[2];
    text_input4.textContent = array_questions[counter].labels[3];
    text_tidbit.textContent = array_questions[counter].tri_tidbit;
    text_hint.textContent = "";
    input_1.checked = false;
    input_2.checked = false;
    input_3.checked = false;
    input_4.checked = false;
    if (counter >= array_questions.length - 1) {
		btn_next.disabled = true;
	}
   	btn_previous.disabled = false;
    showFeedback();
}

function decrementQuestion() {
	counter = counter - 1; // Also written as counter -= 1;
	text_question_id.textContent = counter + 1;
	text_statement.textContent = array_questions[counter].statement;
    text_input1.textContent = array_questions[counter].labels[0];
    text_input2.textContent = array_questions[counter].labels[1];
    text_input3.textContent = array_questions[counter].labels[2];
    text_input4.textContent = array_questions[counter].labels[3];
    text_tidbit.textContent = array_questions[counter].tri_tidbit;
    text_hint.textContent = "";
    input_1.checked = false;
    input_2.checked = false;
    input_3.checked = false;
    input_4.checked = false;
    if (counter <= 0) {
		btn_previous.disabled = true;
	}
	btn_next.disabled = false;
    showFeedback();
}

function showFeedback() {
	if (array_answers[counter] == undefined) {
		cont_success.classList.add("d-none");
		cont_danger.classList.add("d-none");
		btn_submit.disabled = false;
	} else {
		if (array_answers[counter].evaluation == "correct") {
			cont_success.classList.remove("d-none");
			cont_danger.classList.add("d-none");
			btn_submit.disabled = true;
		} else {
			cont_success.classList.add("d-none");
			cont_danger.classList.remove("d-none");
			btn_submit.disabled = true;
		}
	}
}

function routeView(view) {
	switch (view) {
		case "landing":
			sec_landing.classList.remove("d-none");
			sec_quiz.classList.add("d-none");
			break;
		case "quiz":
			username = input_username.value;
			text_question_total.textContent = array_questions.length;
            text_statement.textContent = array_questions[counter].statement;
            text_input1.textContent = array_questions[counter].labels[0];
            text_input2.textContent = array_questions[counter].labels[1];
            text_input3.textContent = array_questions[counter].labels[2];
            text_input4.textContent = array_questions[counter].labels[3];
            text_tidbit.textContent = array_questions[counter].tri_tidbit;
			sec_quiz.classList.remove("d-none");
			sec_landing.classList.add("d-none");
            
			break;
		default:
			return "Error: View is not recognized by the router";
			break;
	}
}

            //Quiz True/False conditional statement: 

            //  if (array_questions[counter].type == "multiple_choice") {
            //    input_3.disabled = false;
            //    input_4.disabled = false;
            //} else {
            //    if (array_questions[counter].type == "true_false") {
            //    input_3.disabled = true;
            //    input_4.disabled = true;
            //}

function getHint() {
	text_hint.textContent = array_questions[counter].hint;
    }

function disable() {
    if (array_questions[counter].type == "true_false")
        document.getElementById("input_3").style.display = "none";
    if (array_questions[counter].type == "true_false")
        document.getElementById("input_4").style.display = "none";
}

function undisable() {
    if (array_questions[counter].type == "multiple_choice")
        document.getElementById("input_3").style.display = "initial";
    if (array_questions[counter].type == "multiple_choice")
        document.getElementById("input_4").style.display = "initial";
}

function sumAnswerEvals() {
	let correct = 0,
		incorrect = 0;
	for (let i = 0; i < array_answers.length; i++) {
		if (array_answers[i].evaluation == "correct") {
			correct++;
		} else {
			incorrect++;
		}
	}
	text_question_correct.textContent = correct;
	text_question_incorrect.textContent = incorrect;
}
