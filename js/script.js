$(document).ready(function(){
	var nome = prompt("Qual seu nome?")

	$('#btn').click(function(){
		var peso = $('#kg').val();
		var altura = $('#altura').val();
		altura = altura.replace(',','.');
		var res;
		// A fórmula usada para o cálculo do IMC é o peso em kg dividido pela altura em metros ao quadrado.

		var imc = parseInt(peso/(altura*altura));

		if(imc < 16){
			res = "Aponta magreza grave e pode causar insuficiência cardíaca, anemia grave e enfraquecimento do sistema imunológico.";
		}else if((imc >= 16) && (imc <= 17)){
			res = "Aponta magreza moderada, o que pode levar à infertilidade, queda de cabelo e falta de menstruação.";
		}else if((imc >= 17.1) && (imc <= 18.5)){
			res = "Magreza leve, o que pode resultar em estresse, ansiedade e fadiga."
		}else if((imc >= 18.6) && (imc <= 25)){
			res = "Considerado saudável, apresentando menor risco para doenças."
		}else if((imc >= 25.1) && (imc <= 30)){
			res = "Indica sobrepeso, podendo levar à fadiga, varizes e má circulação."
		}else if((imc >= 30.1) && (imc <= 35)){
			res = "Aponta obesidade de grau I, podendo resultar em diabetes, infarto, angina e aterosclerose."
		}else if((imc >= 35.1) && (imc <= 40)){
			res = " Indica obesidade de grau II (severa), podendo causar falta de ar e apneia do sono."
		}else{
			res = "IMC acima de 40 aponta obesidade de grau III (mórbida), podendo levar à refluxo, infartos, AVC, dificuldades de locomoção e escaras."
		}

		$('#results').html(imc);
		$('.referencias').html(nome+" "+res);

		
	})

		
	
	
})