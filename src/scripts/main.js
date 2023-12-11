document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('submit', function(e) {
        e.preventDefault();

        const nomeTutor = document.getElementById('nome-tutor').value;
        
        document.getElementById('agradecimento-tutor').innerHTML = nomeTutor;
        document.querySelector('.agradecimento').style.display = 'block';    
    })
})