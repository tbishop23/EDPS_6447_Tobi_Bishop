btn_start.addEventListener("click", function () {
	routeView("quiz");
});
btn_submit.addEventListener("click", function () {
	getAnswer();
});
btn_previous.addEventListener("click", function () {
	decrementQuestion();
});
btn_previous.addEventListener("click", function () {
    disable ();
});
btn_previous.addEventListener("click", function () {
    undisable ();
});
btn_hint.addEventListener("click", function () {
	getHint();
});
btn_next.addEventListener("click", function () {
	incrementQuestion();
});
btn_next.addEventListener("click", function () {
    disable ();
});
btn_next.addEventListener("click", function () {
    undisable ();
});
document.addEventListener("DOMContentLoaded", function () {
	routeView("landing");
});
