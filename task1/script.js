var price = prompt('Введите сумму от 200 до 1500?', '');
var a = [
                {
                    memory: 64,
                    colors: 2
                },
                {
                    memory: 128,
                    colors: 2
                },
                {
                    memory: 256,
                    colors: 2
                }
            ];
if (price == null) {
   alert('Вы не ввели сумму, повторите ввод!');
  } 
else if (price >= 200 && price < 400){
    alert( 'Вы можете приобрести "Samsung"' );
    document.write('<h1>Samsung</h1>');
    document.write('<h2>Цена: '+price+'$</h2>');
}
else if (price >= 401 && price < 570) { 
    alert( 'Можем вам предложить "Sony"' );
    document.write('<h1>Sony</h1>');
    document.write('<h2>Цена: '+price+'$</h2>');
}
else if (price >=571 && price <=1500) { 
    alert( 'В наличии для вас есть"iPhone"?' );
    document.write('<h1>iPhone</h1>');
    document.write('<h2>Цена: '+price+'$</h2>');
}
else {
    alert( 'Нет для вас вариантов:)' );
    document.write('<h1>Sorry</h1>');
  }

var colors = [
    {
        name: 'silver',
        img: '1.jpg',
    },
    {
        name: 'black',
        img: '2.jpg',
    }
];

    var memory, color; 
    var valPhone =0;
    var x = true;
    var img;   


while(!valPhone && x){
    memory = prompt('Введите объем памяти: 64, 128, 256');
    if(memory == null){
        x = false;
        alert('До свидания!');
    }
    for (var i = 0; i < a.length; i++) {
        if(+memory === a[i].memory){
            valPhone = a[i].memory;
        }
     }
}

 while(x){
     color = prompt('Введите желаемый цвет: black или silver');
    for (var i = 0; i < colors.length; i++) {
       if(color === colors[i].name){
            img = colors[i].img;
            x = false;
         }
    }
}

 document.write('<h2>Объем: '+ valPhone+'</h2>');
 document.write('<h2>Цвет: '+color+'</h2>');
 document.write('<img width="250" src="images/'+img+'">');

