$(document).ready(function() {
    
    $('form').on('submit', function(e) {
        e.preventDefault();

        const tarefa = $('#nome-tarefa').val();
        const novaTarefa = $('<li></li>').text(tarefa);
        $(`<li>${novaTarefa}</li>`).appendTo(tarefa);
        $(novaTarefa).appendTo('ul');
        $("li").click(function() {
            $(this).addClass("grifado");
        });
        $('#nome-tarefa').val('');
    });
});