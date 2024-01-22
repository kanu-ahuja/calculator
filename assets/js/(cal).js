let button = document.querySelectorAll('input');
console.log(button, "button ===");
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
        let display1 = document.querySelector('#first_display');
        let display2 = document.querySelector('#Second_display');
        let existingval = display1.getAttribute('value');
        let reservedkeyword = ['+', '-', '*', '/', '%'];
        let btnval = button[i].value;

        // [AC] Button Code
        if (btnval === "AC") {
            display1.innerHTML = '';
            display1.setAttribute('value', '');
            display2.innerHTML = '';
            display2.setAttribute('value', '')
        }

        // [cross] Button Code
        else if (btnval === "Clear") {
            let clr = existingval.slice(0, existingval.length - 1);
            display1.innerHTML = clr;
            display1.setAttribute('value', clr)
            display2.innerHTML = clr;
            display2.setAttribute('value', clr)
        }

        // [=] Button Code 
        else if (btnval === "=") {
            let res = eval(existingval);
            display2.innerHTML = "=" + res;
            display2.setAttribute('value', res);
        }
        else {
            // get last character
            let lchar = (existingval != null && existingval.length > 0) ? (existingval.slice(existingval.length - 1)) : '';
            console.log(lchar);
            if (reservedkeyword.includes(lchar) && reservedkeyword.includes(btnval)) {
                if (lchar == btnval)
                    return;
                else
                    existingval = existingval.slice(0, existingval.length - 1);
                console.log(btnval, existingval);
                display1.setAttribute('value', existingval + btnval);
                display1.innerHTML = existingval + btnval;
                return;
            }
            let str = (existingval == null) ? btnval : (existingval + btnval);
            display1.innerHTML = str;
            display1.setAttribute('value', str);

            if (!reservedkeyword.includes(btnval)) {
                let str1 = eval(str);
                display2.innerHTML = "=" + str1;
            }
        }
    })
}
