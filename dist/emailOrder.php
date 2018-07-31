<?php

if (!empty($_POST)) {

	$name = htmlspecialchars($_POST['name']);
	$tel = htmlspecialchars($_POST['tel']);
	$mes = htmlspecialchars($_POST['mess']);
	$type = htmlspecialchars($_POST['type']);


	$subject = 'Новая заявка с сайта - LiderTrans';

	/* сообщение */
	$message = '
	<html>
	<head>
	<title>Новая заявка с сайта - LiderTrans</title>
	</head>
	<body>' .
	(!empty($name) ? '<p><b>Имя:</b> ' . $name . '</p>' : '') .
	(!empty($tel) ? '<p><b>Телефон:</b> ' . $tel . '</p>' : '') .
	(!empty($type) ? '<p><b>Тип услуги:</b> ' . $type . '</p>' : '') .
	(!empty($mes) ? '<p><b>Сообщение:</b> ' . $mes . '</p>' : '') .
	'<br/></body>
	</html>
	';

	$headers = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
	$headers .= "From: Отправитель <noreply@di-di.ru>\r\n"; //Наименование и почта отправителя

	mail('karamanskyi@gmail.com', $subject, $message, $headers);

}

?>