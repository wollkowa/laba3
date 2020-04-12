window.addEventListener('load', function () {

    let a = +prompt("Введите число меньше 50");
    let b = 1;
    for ( i = a; i >= 1; i--) {
           document.write ('<style>\n')
		document.write ('body {text-align: center; font:21px Tahoma; margin: 15px 15px 15px 15px; overflow-x: scroll}\n');
		document.write ('</style>\n');
		document.write ('<body>\n');
		 document.write (i + " бутылок стоит на стене, одна упала и осталось " + (a - b) + ".");
		document.write(' <br/>');
        b++;
    }
})