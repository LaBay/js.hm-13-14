'use strict'

QBase = JSON.parse(localStorage.getItem('QBase')); // переменная была объявлена в файле QBase (без defer будет undefained)



$(function() {

	/*ЗАГРУЗКА ДАННЫХ ДЛЯ ШАБЛОНА*/
	var template = tmpl($('#testBody').html());
	$('body').html(template(QBase));


	/* ПРОВЕРКА РЕЗУЛЬТАТОВ*/
	$("#proceed").on("click", printResult);


	function printResult(){
		var positiveScore = 0;
		var negativeScore = 0;
		
		var $chBox = $('input:checked');
		var lgth = $chBox.length;
		for(var i = 0; i < lgth; i++){
			var str = $chBox.eq(i).attr('id');
			str = str.substr(str.indexOf('_')+1);
			var k = +str.substr(0,str.indexOf('_'));
			var j = +str.substr(str.indexOf('_')+1);
			if (QBase.questions[k].answersBlock[j].value){
				positiveScore++;
			} else {
				negativeScore++;
			}
		}

		var totalScore = "Ваш уровень знаний " + ((positiveScore - negativeScore)/QBase.questions.length*100) + "%";
		

		$('#positive span').text(positiveScore);
		$('#negative span').text(negativeScore);
		$('#total span').text(totalScore);

		$("#reset").on("click", reset);
		
		function reset(){

			$('#modalWindow').css({
					"z-index": "-1",
					"opacity": "0"});

			positiveScore = 0;
			negativeScore = 0;	

			for(var i = 0; i < lgth; i++) $chBox.eq(i).attr('checked', false);
			
		};

		$('#modalWindow')
			.css('z-index', '1')
			.animate({
			opacity: 0.95
		})
		
	};


});





	