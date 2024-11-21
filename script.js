$(document).ready(function () {
    $('#textbox').blur(function () {
        const input = $(this).val();

        if (input > 10) {
            $(this).addClass('error');
        } else {
            $(this).removeClass('error'); 
        }
    });
      
    function calculate(operator) {
        const val1 = parseFloat($('#textbox1').val());
        const val2 = parseFloat($('#textbox2').val());

        if (isNaN(val1) || isNaN(val2)) {
            alert('Please enter valid numbers');
            return;
        }

        let result;
        switch (operator) {
            case '+':
                result = val1 + val2;
                break;
            case '-':
                result = val1 - val2;
                break;
            case '*':
                result = val1 * val2;
                break;
            case '/':
                if (val2 === 0) {
                    alert('Division by zero is not allowed');
                    return;
                }
                result = val1 / val2;
                break;
        }
        $('#textbox3').val(result)
    }

    $('#add').click(function () {
        calculate('+');
    });

    $('#subtract').click(function () {
        calculate('-');
    });

    $('#multiply').click(function () {
        calculate('*');
    });

    $('#divide').click(function () {
        calculate('/');
    });
});
