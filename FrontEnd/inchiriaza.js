window.onload = function () {
    const name = document.getElementById('name');
    const cardnumber = document.getElementById('cardnumber');
    const expirationdate = document.getElementById('expirationdate');
    const securitycode = document.getElementById('securitycode');
    const output = document.getElementById('output');
    const ccicon = document.getElementById('ccicon');
    const ccsingle = document.getElementById('ccsingle');
    const generatecard = document.getElementById('generatecard');

    let cctype = null;

    // Format credit card number input
    cardnumber.addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, '');
        let formatted = '';

        // Basic card type guessing
        if (/^3[47]/.test(value)) {
            formatted = value.replace(/^(\d{0,4})(\d{0,6})(\d{0,5}).*/, '$1 $2 $3'); // Amex
        } else {
            formatted = value.replace(/(\d{4})/g, '$1 ').trim(); // Other types
        }

        e.target.value = formatted;
    });

    // Format expiration date as MM/YY
    expirationdate.addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 3) {
            e.target.value = value.slice(0, 2) + '/' + value.slice(2, 4);
        } else {
            e.target.value = value;
        }
    });

    // Limit security code to 4 digits
    securitycode.addEventListener('input', function (e) {
        e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4);
    });

    // Add any additional logic from your original script here...
};
