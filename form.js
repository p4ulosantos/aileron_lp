$(document).ready(function() {
    $("#contact-form").submit(function(e) {
    e.preventDefault();
    var nome = $("input[placeholder='Nome']").val();
    var email = $("input[placeholder='E-mail']").val();
    var mensagem = $("textarea").val();
    $.ajax({
    url: "https://formspree.io/paulosacra10@gmail.com",
    method: "POST",
    data: {
    nome: nome,
    email: email,
    mensagem: mensagem
    },
    dataType: "json"
    });
    });
    });