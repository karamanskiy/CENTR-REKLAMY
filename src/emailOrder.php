<?php

if (!empty($_POST)) {

	$name1 = htmlspecialchars($_POST['name1']);
	$name2 = htmlspecialchars($_POST['name2']);
	$tel = htmlspecialchars($_POST['tel']);
	$theme_letter = htmlspecialchars($_POST['theme_letter']);
	$mess = htmlspecialchars($_POST['mess']);
	$data_obrab = htmlspecialchars($_POST['data_obrab']);


	$subject = 'Новая заявка с сайта - Центр Рекламы';

	/* сообщение */
	$message = '
	<html>
	<head>
	<title>Новая заявка с сайта - Центр Рекламы</title>
	</head>
	<body>' .
	(!empty($name1) ? '<p><b>Имя:</b> ' . $name1 . '</p>' : '') .
	(!empty($name2) ? '<p><b>Фамилия:</b> ' . $name2 . '</p>' : '') .
	(!empty($tel) ? '<p><b>Телефон:</b> ' . $tel . '</p>' : '') .
	(!empty($theme_letter) ? '<p><b>Тема письма:</b> ' . $theme_letter . '</p>' : '') .
	(!empty($mess) ? '<p><b>Сообщение:</b> ' . $mess . '</p>' : '') .
	(!empty($data_obrab) ? '<p><b>Согласие на обработку:</b> ' . $data_obrab . '</p>' : '') .
	'<br/></body>
	</html>
	';

	$headers = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
	$headers .= "From: Sender <noreply@test.ru>\r\n"; //Наименование и почта отправителя

	mail('karamanskyi@gmail.com', $subject, $message, $headers);

}

?>