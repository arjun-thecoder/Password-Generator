document.getElementById('password-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    const password = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
    document.getElementById('password').textContent = password;
});

function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    let characters = '';
    if (includeUppercase) characters += uppercase;
    if (includeLowercase) characters += lowercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;
    
    if (characters.length === 0) {
        return 'Please select at least one character type';
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
}
