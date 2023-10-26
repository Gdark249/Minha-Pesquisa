function submitForm() {
    var firstName = document.getElementById("firstName").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;

    var data = {
        firstName: firstName,
        age: age,
        gender: gender
    };

    // Enviar os dados para o servidor Node.js
    fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        console.log('Dados enviados com sucesso:', result);

        // Limpar o formulário após o envio
        document.getElementById("surveyForm").reset();
    })
    .catch(error => {
        console.error('Erro ao enviar dados:', error);
    });
}
