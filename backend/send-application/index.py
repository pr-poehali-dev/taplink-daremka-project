import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправляет заявку с сайта на email психолога"""
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    contact = body.get('contact', '').strip()
    email = body.get('email', '').strip()
    message = body.get('message', '').strip()

    if not name or not contact:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Имя и контакт обязательны'})
        }

    smtp_password = os.environ['SMTP_PASSWORD']
    from_email = 'daria.alvinceva1@yandex.ru'
    to_email = 'daria.alvinceva1@yandex.ru'

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка на сессию от {name}'
    msg['From'] = from_email
    msg['To'] = to_email

    html = f"""
    <html><body style="font-family: Arial, sans-serif; color: #2c2420; padding: 20px;">
      <h2 style="color: #b07d62;">Новая заявка на сессию</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #9c7b6e; width: 160px;"><b>Имя:</b></td><td>{name}</td></tr>
        <tr><td style="padding: 8px 0; color: #9c7b6e;"><b>Телефон / Telegram:</b></td><td>{contact}</td></tr>
        {'<tr><td style="padding: 8px 0; color: #9c7b6e;"><b>Email:</b></td><td>' + email + '</td></tr>' if email else ''}
        {'<tr><td style="padding: 8px 0; color: #9c7b6e; vertical-align: top;"><b>Запрос:</b></td><td>' + message + '</td></tr>' if message else ''}
      </table>
    </body></html>
    """

    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as server:
        server.login(from_email, smtp_password)
        server.sendmail(from_email, to_email, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True})
    }