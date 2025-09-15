
let inp = document.querySelector("#display");
let buttons = document.querySelectorAll('input[type="button"]');

    for (let btn of buttons) {
        btn.addEventListener("click", () => {
            let txt = btn.value; // use value instead of innerText
            if (txt == "C") {
                inp.value = "";
            } else if (txt == "=") {
                inp.value = eval(inp.value);
            } else {
                inp.value += txt;
            }
        });

    }        