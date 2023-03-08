$(document).ready(function(){
    
    $('form').on('submit', function(e){
        e.preventDefault();


        const tarefa = $('#nome-tarefa').val();
        const novaTarefa = $('<li></li>');
        $(tarefa).appendTo(novaTarefa);
        $(novaTarefa).appendTo("ul");

        $('#nome-tarefa').val('');
    });
});