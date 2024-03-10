const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");

form.addEventListener("submit", formSubmitHandler );
form.addEventListener("input", formInputHandler);

function formInputHandler(event) {
    const email = form.elements.email.value.trim();
    const msg = textarea.value.trim();
    const formData = JSON.stringify({email, msg});
    localStorage.setItem(STORAGE_KEY, formData)
}

const dataFromLocalStorage = localStorage.getItem(STORAGE_KEY) ?? "";
try {
        const jsnData = JSON.parse(dataFromLocalStorage)

        form.elements.email.value = jsnData.email;
        textarea.value = jsnData.msg;
} catch {
    console.log("no saved data");
}

function formSubmitHandler(event) {
    event.preventDefault();
    const email = form.elements.email.value
    const msg = textarea.value

    if(email === "" || msg === "") {
   alert("Please fill-in all fields") 
} else {
console.log({email, msg})
event.currentTarget.reset()
localStorage.clear()
}
}




