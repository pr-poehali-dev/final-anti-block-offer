import json
import os
import urllib.request


def handler(event: dict, context) -> dict:
    """Принимает заявку с сайта и отправляет её в Telegram-канал."""
    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '—')
    phone = body.get('phone', '—')
    company = body.get('company', '—')
    messenger = body.get('messenger', '—')

    messenger_labels = {
        'whatsapp': 'WhatsApp',
        'telegram': 'Telegram',
        'vkmax': 'MAX',
        'phone': 'Звонок',
    }
    messenger_display = messenger_labels.get(messenger, messenger)

    text = (
        '🔔 *Новая заявка — Протокол Анти-Блок*\n\n'
        f'👤 *Имя:* {name}\n'
        f'📞 *Телефон:* {phone}\n'
        f'🏢 *Компания:* {company}\n'
        f'💬 *Канал связи:* {messenger_display}'
    )

    bot_token = os.environ['TELEGRAM_BOT_TOKEN']
    chat_id = os.environ['TELEGRAM_CHAT_ID']

    payload = json.dumps({
        'chat_id': chat_id,
        'text': text,
        'parse_mode': 'Markdown',
    }).encode('utf-8')

    req = urllib.request.Request(
        f'https://api.telegram.org/bot{bot_token}/sendMessage',
        data=payload,
        headers={'Content-Type': 'application/json'},
        method='POST',
    )
    with urllib.request.urlopen(req) as resp:
        tg_result = json.loads(resp.read())

    return {
        'statusCode': 200,
        'headers': cors_headers,
        'body': json.dumps({'ok': tg_result.get('ok', False)}),
    }
