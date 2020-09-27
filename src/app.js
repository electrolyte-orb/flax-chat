import { MDCRipple } from "@material/ripple";
import { MDCTextField } from "@material/textfield";
import { MDCSnackbar } from "@material/snackbar";
const snackbar = new MDCSnackbar(document.querySelector(".mdc-snackbar"));
document.querySelectorAll(".mdc-text-field").forEach((e) => {
	new MDCTextField(e);
});

import { MDCFormField } from "@material/form-field";
import { MDCCheckbox } from "@material/checkbox";

const checkbox = new MDCCheckbox(document.querySelector(".mdc-checkbox"));
const formField = new MDCFormField(document.querySelector(".mdc-form-field"));
formField.input = checkbox;
// ripples
document
	.querySelectorAll(".mdc-button, .mdc-card__primary-action, .mdc-checkbox")
	.forEach((e) => {
		new MDCRipple(e);
	});
let signup_form = document.getElementById("form");
let cancelBtn = document.getElementById("cancelBtn");
let submitBtn = document.getElementById("submit");

cancelBtn.addEventListener("click", () => {
	snackbar.open();
	submitBtn.disabled = true;
});

signup_form.addEventListener("submit", (e) => {
	e.preventDefault();
	alert("submit");
});
