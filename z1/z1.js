window.addEventListener('load', function () {

    let pol = +prompt("Напишите 1, если вы девушка, 2 - если мужчина");
	let rost = +prompt("Введите ваш рост");
    let nomer = +prompt("Введите целое число от 1 до 100");
    let prof = +prompt("Выберите вашу сферу деятельности  1.Медицина 2.Искусство" + "3.Техническая 4.Промышленная 5.Другая");


    let deti = [0, 2, 4, 6, 8];
    let rabota = ["Стоматолога", "Слесаря","СММ-щика", "Президента","Крупье"];
    let goroda = ["Львов", "Москву", "Амстердам", "Оттаву", "Кельн"];

    var a1,
        a2,
        a3,
		aa,
        a4;
	
	switch (pol) {
       case 1:
            a1= "Марком";
            break;
        case 2:
            a1= "Анной";
            break;
       
        default:
            a1= "Сашей";
            break;}
	
	
	
	 if (rost > 130 && rost < 155) 
        a2 = deti[0];
     else if (rost > 154 && rost < 175) 
        a2 = deti[1];
     else if (rost > 174 && rost < 185) 
        a2 = deti[2];
     else if (rost > 184 && rost < 200) 
        a2 = deti[3];
     else 
        a2 = deti[0];
	 
	  
	 if (nomer > 0 && nomer < 33)
        a3 = goroda[0];
     else if (nomer > 32&& nomer < 66)
        a3 = goroda[1];
     else if (nomer > 65 & nomer < 88) 
        a3 = goroda[2];
     else if (nomer > 87&& nomer < 101)
        a3 = goroda[3];
     else 
        a3 = goroda[0];  
	 
	  if (nomer > 0 && nomer < 33)
        a3 = goroda[0];
     else if (nomer > 32&& nomer < 66)
        a3 = goroda[1];
     else if (nomer > 65 & nomer < 88) 
        a3 = goroda[2];
     else if (nomer > 87&& nomer < 101)
        a3 = goroda[3];
     else 
        a3 = goroda[0];  
	 
	 
	 switch (prof) {
        case 1:
            a4 = rabota[0];
            break;
        case 2:
            a4 = rabota[1];
            break;
        case 3:
            a4 = rabota[2];
            break;
        case 4:
            a4 = rabota[3];
            break;
        case 5:
            a4 = rabota[4];
            break;
        default:
            a4 = "Повара";
            break;
    }
	 
	 
	 
	 alert("Вы будете в браке с  "+a1+" и у вас родится  "+a2+" детей. "+"Вы переедете в город  - "
    +a3+" на должность "+a4+".");
})   
