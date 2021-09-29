let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons)
{
    item.addEventListener('click',(e)=>
    {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText)
        if(buttonText== 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'C')
        {
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == '=')
        {
            screen.value = eval(screenValue);
        }
        else if(buttonText == 'DEL')
        {
            var num = screen.value;
            var len = num.length - 1;
            var newNum = num.substr(0, len);
            screen.value = newNum;
        }
        else if(buttonText == 'lg')
        {
            buttonText = 'log(';
            var n = screen.value;
            screenValue = Math.log10(n);
            screen.value = screenValue;
        }
        else if(buttonText == 'ln')
        {
            buttonText = 'ln(';
            var m = screen.value;
            screenValue = Math.log(m) / Math.log(2.73);
            screen.value = screenValue;
        }
        else
        {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}