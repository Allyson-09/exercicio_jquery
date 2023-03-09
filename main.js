$(document).ready(function(){
    
    $('form').on('submit', function(e){
        e.preventDefault();

        const tarefa = $('#nome-tarefa').val();
        const novaTarefa = $('<li></li>').text(tarefa);
        $(tarefa).appendTo(novaTarefa);
        novaTarefa.appendTo('dd');

        $('#nome-tarefa').val('');

        $("dd").click(function() {
            $(this).addClass("grifado");
        });
    });
});