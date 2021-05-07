let form = document.querySelectorAll(".item-footer_input");
console.log(form);
let indexForm = 0;

while(indexForm < form.length){
    $('.item-footer_input').click(function(event)
    {
        // собираем данные с формы
        event.preventDefault();
        var tel    = $('.form_tell').val();
        var text   = $('.form_textarea').val();
        var name    = $('.form_name').val();
        var email    = $('.form_email').val();
        // отправляем данные
        $.ajax
        ({
            url: "form/form.php", // куда отправляем
            type: "post", // метод передачи
            dataType: "json", // тип передачи данных
            data: { // что отправляем
                "tel":      tel,
                "text":    text,
                "name":     name,
                "email":     email,
            },
            // после получения ответа сервера
            success: function(data)
            {   
                if(data.result == 'true'){
                        console.log("true");
                        $('.mod-window').css('display','flex');
                        $('p.text').text(name + " ваша заявка принята!" + "Свяжемся с вами по номеру: " + tel);
                        $('.footer_textarea').val(''); //Очищаем поле сметы
                        $('.footer_tell').val(''); //Очищаем поле телефон
                        $('.footer_name').val(''); //Очищаем поле телефон
                }
                if(data.result == 'false'){
                    console.log("false");
                    $('.mod-window').css('display','flex');
                    $('p.text').text(name + " ваша заявка принята!" + "Свяжемся с вами по номеру: " + tel);
                    $('.footer_textarea').val(''); //Очищаем поле сметы
                    $('.footer_tell').val(''); //Очищаем поле телефон
                    $('.footer_name').val(''); //Очищаем поле телефон
            }
            }
        });
    });
    $('.close').click(function(event){
        event.preventDefault();
        $('.mod-window').css('display','none')
    });
    indexForm++;
}          
        
  