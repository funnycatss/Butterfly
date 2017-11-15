$('#page-loaded').html( (new Date).toLocaleTimeString() );

$('form input[type="submit"]').click(sendForm);

function sendForm(e) {
  const form =$('form')[0];
  if(!form.chekValidity()){
    return;
  }
    e.preventDefault();
    $.ajax({
    url: "https://formspree.io/134oriflame@gmail.com", 
    method: "POST",
    data: {
    
          },
        dataType: "json"
    })
    .done(function(){
         $('form')[0].reset();
         $('#msg').html('Дякуємо!');
    })
    .fail(function(){
        $('#msg').html('Вибачте, звернення не відправлено. Повторіть спробу.');
    });
}