var mybutton = document.getElementById('button'),
    mydiv = document.getElementById('div');


var x = 0;

mybutton.onclick = function() {
    var chars = '123456789QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuiopasdfghjklkzxcvbnm';
    var serialLength = 15,
        randomserial = '',
        i;
    for (i = 0; i < serialLength; i++) {
        var randomnumber = Math.floor(Math.random() * chars.length)
        randomserial += chars[randomnumber];

    }
    x++;
    mydiv.textContent = 'code number ' + x + ' is ' + randomserial;
}