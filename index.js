const captchaTextbox = document.querySelector(".captcha_box input");
const refreshButton = document.querySelector(".refresh_button");
const captchaInputbox = document.querySelector(".captcha_input input");
const message = document.querySelector(".message");
const submitButton = document.querySelector(".button");

let captchaText = null;

const generateCaptcha = () => {
    const randomString = Math.random().toString(36).substring(2, 7);
    const randomStringArray = randomString.split("");
    const changeString = randomStringArray.map((char) => (Math.random() > 0.5 ? char.toUpperCase() : char));
    captchaText = changeString.join("");
    captchaTextbox.value = captchaText;
    console.log(captchaText);
};

refreshButton.addEventListener("click", generateCaptcha);

const captchaKeyUpValidate = () => {
    const isCaptchaCorrect = captchaInputbox.value === captchaText;
    submitButton.classList.toggle("disabled", !isCaptchaCorrect);
};
const submitBtnClick = () =>{
    captchaText = captchaText
    .split("")
    .filter((char)=> char !== "")
    .join("");

message.classList.add("active");
if(captchaInputbox.value === captchaText ){
    message.innerText ="Enter captcha is Correct"
    message.style.color ="#826afb";

}
else{
    message.innerText ="Enter captcha is not Correct"
    message.style.color ="#FF2525";


}

}
captchaInputbox.addEventListener("keyup", captchaKeyUpValidate);
submitButton.addEventListener("click",submitBtnClick)
generateCaptcha();
