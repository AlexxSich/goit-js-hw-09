import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const r="feedback-form-state",t=document.querySelector(".feedback-form"),o=t.querySelector("textarea");t.addEventListener("submit",c);t.addEventListener("input",s);function s(e){const a=t.elements.email.value.trim(),l=o.value.trim(),n=JSON.stringify({email:a,msg:l});localStorage.setItem(r,n)}const m=localStorage.getItem(r)??"";try{const e=JSON.parse(m);t.elements.email.value=e.email,o.value=e.msg}catch{console.log("no saved data")}function c(e){e.preventDefault();const a=t.elements.email.value,l=o.value;a===""||l===""?alert("Please fill-in all fields"):(console.log({email:a,msg:l}),e.currentTarget.reset(),localStorage.clear())}
//# sourceMappingURL=commonHelpers2.js.map
