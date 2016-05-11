'use strict'

	// УСЛОВНАЯ БАЗА ВОПРОСОВ И ОТВЕТОВ	

	var  QBase =
	{	title: 'Тест по астрономии',
		task: 'Выберите правильные варианты ответов',
		questions:
		[	
			{ 
				question: 'Самая дальняя планета от Солнца:',
				answersBlock: 
				[
					{answer: 'Плутон', value: false},
					{answer: 'Меркурий', value: false},
					{answer: 'Нептун', value: true},
				]
			},
			{ 
				question: 'Спутники Марса:',
				answersBlock: 
				[
					{answer: 'Тритий и Дейтерий', value: false},
					{answer: 'Фобос и Деймос', value: true},
					{answer: 'Ио и Ганимед', value: false},
				]
			},
			{	question: 'Ближайшая к Земле звезда:',
				answersBlock: 
				[
					{answer: 'Церера', value: false},
					{answer: 'Альфа Центавра ', value: true},
					{answer: 'Альдебаран', value: false},
				]
			},
						{	question: 'Название нашей Галактики:',
				answersBlock: 
				[
					{answer: 'Туманность Андромеды', value: false},
					{answer: 'Большое Магелланово Облако', value: false},
					{answer: 'Млечный Путь', value: true},
				]
			},
		]
	};


	//помещаем условную базу вопросов и ответов QBase в localStorage  с ключом 'QBase'

localStorage.setItem('QBase', JSON.stringify(QBase));