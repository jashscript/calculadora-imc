(() => {
	document.querySelector('.form').addEventListener('submit', (e) => {
		e.preventDefault();

		let inputpeso = document.querySelector('#peso');
		let inputaltura = document.querySelector('#altura');
		let resposta = document.querySelector('.resposta');
		let cor = '';
		let mensagem = '';

		if (!inputpeso.value) {
			cor = 'red';
			mensagem = 'Peso não pode ser deixado em branco!';
		} else if (isNaN(inputpeso.value)) {
			cor = 'red';
			mensagem = 'Peso precisa ser um número!';
		} else if (!inputaltura.value) {
			cor = 'red';
			mensagem = 'Altura não pode ser deixada em branco!';
		} else if (isNaN(inputaltura.value)) {
			cor = 'red';
			mensagem = 'Altura precisa ser um número!';
		} else {
			cor = 'green';
			let imc = (
				Number(inputpeso.value) /
				(Number(inputaltura.value) * Number(inputaltura.value))
			).toFixed(2);
			mensagem = `Seu IMC é ${imc}`;

			switch (true) {
				case imc < 18.5:
					mensagem += '<br>Classificação:<br>Baixo peso';
					break;
				case imc >= 18.5 && imc <= 24.9:
					mensagem += '<br>Classificação:<br>Peso Normal';
					break;
				case imc > 24.9 && imc <= 29.9:
					mensagem += '<br>Classificação:<br>Pré-obeso';
					break;
				case imc > 29.9 && imc <= 34.9:
					mensagem += '<br>Clasificação:<br>Obeso I';
					break;
				case imc > 34.9 && imc <= 39.9:
					mensagem += '<br>Classificação:<br>Obeso II';
					break;
				case imc > 39.9:
					mensagem += '<br>Classificação:<br>Obeso III';
					break;
			}
		}
		if (cor === 'red') {
			const box = document.createElement('div');
			box.className = 'red-box';
			box.innerHTML = mensagem;
			resposta.innerHTML = box.outerHTML;
		} else if (cor === 'green') {
			const box = document.createElement('div');
			box.className = 'green-box';
			box.innerHTML = mensagem;
			resposta.innerHTML = box.outerHTML;
			inputaltura.value = '';
			inputpeso.value = '';
			inputpeso.focus();
		}
	});
})();
