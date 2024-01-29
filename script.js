let com = '';
function show() {
    let character =
        'qwertyuiopasdfghjklmnbvcxzQWERTYUIOPLKJHGFDSAZXCVBNM1234567890'
    // let com = '';
    for (i = 0; i < 6; i++) {
        let store = character.charAt(Math.floor(Math.random() * character.length));
        com += store;
    }

    document.getElementById('cap').innerHTML = com;
};
function refresh() {
    com = '';
    show();
};
function submit() {
    let captchainp = document.getElementById("captcha-form").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username !== "" && password !== "") {
        if (com === captchainp) {
            alert("login")
        } else {
            alert("invalid captcha")
        }
    } else {
        alert('Enter a valid information')
    }
};