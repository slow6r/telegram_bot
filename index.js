const { Telegraf, Markup } = require('telegraf')

const bot = new Telegraf('6470245282:AAEsXIQP6MHycob3gY18Ee-SdhBdsxFYamo')

//Тут все массивы

const arrMesageBot = ['Привет моя любимая Поля, сегодня ты как всегда выглядишь шикарно!❤️','Привет моё солнышко, лучше тебя нет никого на свете!❤️', 'Привет мой бриллиант❤️❤️❤️', 'Моя самая лучшая королева ❤️ захотела пообщаться с ботом?'];

const arrMesageBot_how = ['Как сегодня ты себя чувствуешь?', 'Давай, рассказывай. Как ты там поживаешь?', 'Как настроение?'];

const arrMesageBot_Good = ['Это очень хорошо, чтобы закрепить свое хорошее настроение... Открывай моё меню❤️', 'Подойди к Феде и крепко крепко его обними, он ждёт этого целый день', 'Сегодня Федя не подведёт тебя и все будет у вас хорошо, а пока открывай меню и получай смешные картинки✌️😛','Сегодня ты чудесно выглядишь, впрочем как и всегда;)'];

const arrMesageBot_Sow = ['Надо немного отдохнуть моему солнышку', 'Советую заняться любимым делом чтобы повысить свое настроение', 'Если что то не получается, запомни... Главное никогда не сдаваться твой любимый человек будет тебе всегда помогать и во всем поддерживать ❤️ '];

const arrMesageBot_bad = ['Никогда не забывай, как бы тяжело не было ( за каждой бурей стоит спокойная гладь )', 'Если вы снова поссорились лучше вам не продолжать обоим злиться, немного отдохнуть и как только вы все обдумаете на едине с собой уже пробуйте совместно решать проблему. Я знаю, что у вас все получится'];

const arrMesageBot_bot = ['Я робот, творение Феди. Меня зовут "Лучший помощник", интересное имя конечно мне придумали... У моего хозяина точно беды с головой..ОЙ ( Надеюсь это останется между нами )', 'Я ИИ у меня не может быть настроения, но обычно я всегда весёлый', 'Ты знала что мои родители это Google И Discord. Нееет???. Ну теперь будешь знать. Только я вот сам до сих пор не знаю кто из них мама, а кто папа. Интересно моя родители гетеросексуалы??? Хотя чего это я... Так чего же ты там хотела?)'];

const picture_dog = ['https://i.pinimg.com/564x/1c/41/f7/1c41f7529152ef5e81a7908ed98bf043.jpg', 'https://i.pinimg.com/564x/7c/a9/ab/7ca9ab8c75b8e21e38bd3b45b2b76269.jpg','https://i.pinimg.com/564x/e1/ab/88/e1ab88739bc10408847225201f7d18dd.jpg','https://i.pinimg.com/564x/94/72/71/9472717abd376ea0035be0e4cf5a8442.jpg','https://i.pinimg.com/564x/54/e0/11/54e011ad71f675553cb266704a3dca98.jpg','https://i.pinimg.com/564x/9f/6f/c5/9f6fc5c13d058b69ac82d322909a246f.jpg','https://i.pinimg.com/564x/a1/5e/9c/a15e9cd751e4e282a2d277c7eebaaef4.jpg','https://i.pinimg.com/564x/c9/3f/db/c93fdb79cdd62e15e7e9fc37bf170562.jpg','https://i.pinimg.com/564x/41/9d/ca/419dcafca2d847fc9c59576a57fe4d6a.jpg','https://i.pinimg.com/564x/6b/1e/80/6b1e80d4caf4bd988ef5ee303b342e39.jpg','https://i.pinimg.com/564x/01/89/00/018900ee15a8937a3e56d0825a22364c.jpg','https://i.pinimg.com/564x/70/57/0f/70570fcc0fa460a4df214bb57874cfdb.jpg','https://i.pinimg.com/564x/33/e0/10/33e010841ff0b6216b9f540a9774146b.jpg','https://i.pinimg.com/564x/d2/6a/71/d26a719ee5f8164aeebb1420ef7dcf27.jpg','https://i.pinimg.com/564x/b2/47/af/b247af1e7f5a029619357c036e70f026.jpg','https://i.pinimg.com/564x/67/fd/ab/67fdabdf15c9edede127bb2279292573.jpg','https://i.pinimg.com/564x/0d/b8/62/0db862f8632a1a313fa3d9c20f12ac42.jpg','https://i.pinimg.com/564x/10/59/25/105925750be5dcd3d11d69a54475615a.jpg','https://i.pinimg.com/564x/0e/b8/e9/0eb8e9b0831a7d7c3932e5500d997d83.jpg','https://i.pinimg.com/564x/73/01/fe/7301fe17b8160e17f92cdf14657813b4.jpg','https://i.pinimg.com/564x/26/1d/ba/261dba938c4401372cd3fa7093dfcce0.jpg','https://i.pinimg.com/564x/44/ad/1b/44ad1bfa54f7d21f5ff3d66a47092091.jpg','https://i.pinimg.com/564x/d0/d0/9d/d0d09d9cdd29b8de90c2b424e54424d7.jpg','https://i.pinimg.com/564x/0b/7c/67/0b7c67d1ddbebd570f12c7003fb47da6.jpg','https://i.pinimg.com/564x/94/0d/19/940d19c84b31bdcb63b0ab37714a3333.jpg'];

const picture_cat = ['https://i.pinimg.com/564x/85/d9/e6/85d9e6ec64c4b4c0bdba84e5a4195b63.jpg','https://i.pinimg.com/564x/22/46/56/2246562b46b81f2991723aa1cacd8ca5.jpg','https://i.pinimg.com/564x/26/07/e6/2607e6e7373962beddfb49aaa3dd987d.jpg','https://i.pinimg.com/564x/54/f0/d4/54f0d496dedf560bdc4c5209b133bce7.jpg','https://i.pinimg.com/564x/3d/f3/51/3df351809835191a36b94c3f1f54f7d2.jpg','https://i.pinimg.com/564x/2c/18/f0/2c18f01f77f3fd4d51039ff123f74b60.jpg','https://i.pinimg.com/564x/79/2e/40/792e40ab0fdba6466fc3c6b0ec7d0226.jpg','https://i.pinimg.com/564x/f5/00/ec/f500ec4aef244c7ef46385a29185ef8b.jpg','https://i.pinimg.com/564x/33/52/d8/3352d8368e77db88bd825f23a148bc7d.jpg','https://i.pinimg.com/564x/16/2d/2a/162d2a0039825b1e5d004461bc9357a6.jpg','https://i.pinimg.com/750x/fb/1b/bd/fb1bbd21120485564ecea86c20b0dfa4.jpg','https://i.pinimg.com/564x/c5/1a/f3/c51af3971a3b7b405b5e1c741c385696.jpg','https://i.pinimg.com/736x/8e/fa/0a/8efa0ac6e90eb1f115be2e55acafe877.jpg','https://i.pinimg.com/564x/84/76/01/847601ca6e4d982f6eaa33bc52b4a687.jpg','https://i.pinimg.com/564x/4a/dd/b9/4addb95028b9df66415075fcd058bf52.jpg','https://i.pinimg.com/564x/54/c8/cf/54c8cf571979964f6920160b5ccef7cb.jpg','https://i.pinimg.com/564x/44/eb/7f/44eb7fcbcd1039438bd028ba3bd5704e.jpg','https://i.pinimg.com/564x/ee/ae/6c/eeae6c233ee7f99d7c24c39c052dc756.jpg','https://i.pinimg.com/564x/a4/4b/48/a44b486faf08cc2245e5857b701e1e53.jpg','https://i.pinimg.com/564x/2a/f6/99/2af6993c6ab8ca9e6413b4a3225c1339.jpg','https://i.pinimg.com/564x/43/fd/b9/43fdb9b7a244b11b511339b784e1911b.jpg','https://i.pinimg.com/564x/96/77/f4/9677f40c0df82883cf84226c68434f18.jpg','https://i.pinimg.com/564x/cc/ae/30/ccae302abcadd0952f2d5b5f3c5dd6c1.jpg','https://i.pinimg.com/564x/b2/72/9f/b2729f9c406e21a15c02c79e0a046ecc.jpg','https://i.pinimg.com/564x/1c/76/aa/1c76aa9e30ffef05c5f52de270e6e0f3.jpg','https://i.pinimg.com/564x/9d/8a/67/9d8a677dd9d964689969a30a1aa534d1.jpg','https://i.pinimg.com/564x/85/78/31/8578316c80c849cb63b91964a361dc5a.jpg','https://i.pinimg.com/564x/d9/2f/a7/d92fa75e0e6a7e737b45eaa53d893106.jpg'];


const picture_love = ['https://sun93-1.userapi.com/impg/RE1b7lQP1Pal9SM7dUNfyn0WzLS2g2C5SzDDCw/XD_Aj8jdtN8.jpg?size=960x1280&quality=96&sign=785a558a6b412a5fa7dd251a03994f0f&type=album', 'https://sun9-61.userapi.com/impg/VYLYsO6OvJ4Z0HpBQR182ym-P9M2XjRwoycMvA/Bivf2MFhqqk.jpg?size=640x1136&quality=95&sign=60d69af5697c61e0e62d7dc280ef733f&type=album', 'https://sun9-67.userapi.com/impg/kdggb6meOWl1FzRRmX-vnX14EW6cK5oZ-N88Lw/2-VoDtU7L4k.jpg?size=2560x1660&quality=95&sign=91f8ff9d73891c3eeeebe357496153c8&type=album', 'https://sun9-71.userapi.com/impg/SsjopD14lxuwazHN7pod5PHFaQyKtX-0tyYYgw/EiggkzN7Abg.jpg?size=2560x1707&quality=95&sign=576b979d68781d6a5f0abba0bc081968&type=album', 'https://sun9-34.userapi.com/impg/T9vIz8_XSjqD37H9V5QugTZHG1JFRoqoujpGxw/jI-glM9pDQw.jpg?size=816x1088&quality=96&sign=408999b8e055ad7f94242d781d9d0712&type=album','https://sun9-12.userapi.com/impg/4541EYcBuL3VCg0WpEXsmpCOZtahVvltRG2UXQ/nO1huN89qto.jpg?size=2560x1919&quality=95&sign=1f1ebc04da000115034120c1e4f4170a&type=album', 'https://sun9-2.userapi.com/impg/0aChSkvC8mkW6i90N5RZQfoXy45BDY3rOSthKA/e2AbspubjEQ.jpg?size=960x1280&quality=95&sign=c316cc41d3063715c88fd2b74c33f78b&type=album',
'https://sun9-6.userapi.com/impg/hoAVEhL4UtsghxRcbmN6_R2iFcLXIHn9WMPLiQ/jF3L2VgtwQE.jpg?size=720x1280&quality=95&sign=e119deaf355c4580c20bfaec8e79db10&type=album', 'https://sun9-5.userapi.com/impg/9WqXekqnsZ-u70r-KUKpfKEdJHieSacDT5u9nQ/0cdjcH6GkFQ.jpg?size=959x1280&quality=95&sign=f021359043a5a465633756bbdedef35d&type=album', 'https://sun9-50.userapi.com/impg/x3bQWyU3AblM8RTfOwrnOcd8XQyo9MDEWey2jw/8IVAYHkRxpw.jpg?size=960x1280&quality=95&sign=5248624c484e789e2a6420c18251caa7&type=album', 'https://sun9-58.userapi.com/impg/UsxVoq6RrIr0Juz1udeldEtDSF7LKAyuVgzrdQ/N6C6nRvxgH4.jpg?size=720x1280&quality=95&sign=5bda33ada37f3301b1fb9e7d71621393&type=album', 'https://sun9-18.userapi.com/impg/Qho5moATLV2_8S0Ngos-ycA6QvgTBp9JULRzww/oN1sSqokHo4.jpg?size=1226x1280&quality=95&sign=b9437db680bda16f28db2d350cfbf03a&type=album', 'https://sun9-25.userapi.com/impg/8gs0hNx-XI26DLtfVOxlGTqSKCzUarDRtmcdFg/q6WfsrNyj5Q.jpg?size=959x1280&quality=95&sign=8166849cfaa4c2bbe2848fcdf4d4bc11&type=album','https://sun9-69.userapi.com/impg/EZUG-b4oCRP5IE88GtEh4mq6LEpdXa3x3hgpyA/IfJVYl4BHg8.jpg?size=1536x2048&quality=96&sign=e01f98acc86bf883a70009798292aecd&type=album',
'https://sun9-63.userapi.com/impg/4RFQBbNOFrBUkj1SXsSrrpu-MsQ-B6KF4GFXZw/1hwH6wFLtFs.jpg?size=1536x2048&quality=96&sign=d54f5fb3fc8720a62f454deb93775e01&type=album','https://sun9-12.userapi.com/impg/fgZZw1tR0UQxP1vyw_moBHq93qVFBDhxq5ypMw/_1g0j5DUVeU.jpg?size=1536x2048&quality=96&sign=be659ebb6d919bd7b40dc5031b0eef76&type=album','https://sun9-12.userapi.com/impg/fgZZw1tR0UQxP1vyw_moBHq93qVFBDhxq5ypMw/_1g0j5DUVeU.jpg?size=1536x2048&quality=96&sign=be659ebb6d919bd7b40dc5031b0eef76&type=album','https://sun9-75.userapi.com/impg/K4aRXuJWh4BogPvnoFepiBndRYEKgdWca7vSnw/pTZEj78KQ30.jpg?size=640x1136&quality=96&sign=de61eef2c3521cc41bcc930253b7f6e7&type=album','https://sun9-54.userapi.com/impg/2mC-ErD5OkPVgIXguxg4BEK2VWAjp-IJssCWIA/Dy9_fxv2e8Y.jpg?size=810x1080&quality=96&sign=92f13a8678b3b5890ada197343398ff5&type=album','https://sun3-21.userapi.com/impg/7C-umJiLC_MgeVmk5fHfI-_6ZZmEc6-kwzHcHQ/700fnR-617E.jpg?size=1536x2048&quality=96&sign=b642d168b3f6121f5dc2a9e4ccb45155&type=album','https://sun9-77.userapi.com/impg/pLQTI67IZw6lJgU0z5OSU1g7wataDQFEpZws2Q/VIFihneLd88.jpg?size=810x1080&quality=96&sign=12bfa6b1630494e2c7a5b4216575378a&type=album','https://sun9-76.userapi.com/impg/koZWJ7x0KHBPS_ZwDQVkn274BD3VPusiX4wT_w/oTh948k71vA.jpg?size=1439x1920&quality=96&sign=d7cb05ab3001096ee2a881b898b54a62&type=album','https://sun9-19.userapi.com/impg/LV7-sB-Ne8xzTzjxVrh9bAdVOP2qwnkFnRWFeg/vZyIvm59OPc.jpg?size=1536x2048&quality=96&sign=d690aa5a68b4f167d9b96987007501df&type=album',
'https://sun9-62.userapi.com/impg/QCl3Ywt88JtvFqyocpemJt9cp5_lxdZpo2FmZA/C5sLylFcf7I.jpg?size=1536x2048&quality=96&sign=d41aef04eb1c062350b054bb7a722b0c&type=album','https://sun9-26.userapi.com/impg/9pBUTVaYOr3qrSbfOraDJYL82aLUFWb1LAT7Jw/74r0lBxfRCk.jpg?size=1536x2048&quality=96&sign=42c1cd9891c88b9d2896c60940a41465&type=album','https://sun9-37.userapi.com/impg/0n6KrEB4EluH6NT25cAGsjYDSRPbgFmdjGHYsw/5FcW7hYlLN0.jpg?size=1536x2048&quality=96&sign=9d6edf8630da7ad9136db3e77c5cb738&type=album','https://sun9-1.userapi.com/impg/DprBo6uyXJahI3Olznlt7VO-cAtcS6cKtVBNjQ/ZIVhHHHb0aM.jpg?size=1536x2048&quality=96&sign=885f589037b34e09d31dc609cf9c0f5f&type=album','https://sun9-35.userapi.com/impg/l-UIhTxV55wb3xEOGADnnlosqyzNhkvTQunD4w/33gAu9dM_2M.jpg?size=1536x2048&quality=96&sign=93c4057b80990e66ea8c1de8a007fefd&type=album','https://sun9-13.userapi.com/impg/k9q53b_8NmXbrcdQXJFt8QUjWmqUYrZGtoDPjQ/ZD6apHZq9uA.jpg?size=960x1280&quality=96&sign=9e05746848020ade8e927a7814d53d33&type=album','https://sun9-33.userapi.com/impg/eHmsiLf90KVdVajyNPGI41BOLt_LyXVlolxhzA/WMk5ja3rVaw.jpg?size=1536x2048&quality=96&sign=0209d769c163935289dac30dde7b963d&type=album','https://sun9-58.userapi.com/impg/ciQNoq6XFPWOjhwMnd1Rf7LGdLRCcNgudug-NQ/P_h9p1q9nHE.jpg?size=640x1136&quality=96&sign=c9a1522a27b9ee31fc7b0b6baf7921cb&type=album','https://sun9-42.userapi.com/impg/w4iieNWX5jcQXjeGf9uFID6GRfcgsxPZ_osWoA/1zA3C8QJarI.jpg?size=1536x2048&quality=96&sign=8deb4ac5d27e9ab964ccddfede72fb2c&type=album','https://sun9-71.userapi.com/impg/Qog2vAdmR8On7o1v5VH_TFhm46kvJb0SjG5gvQ/ps5FXkn54rg.jpg?size=1536x2048&quality=96&sign=f1348689125c9ef1ea4971c736037128&type=album','https://sun9-63.userapi.com/impg/t-HkS2lv0UM9MlDeSC5UK2uQ2H4luTStnfLwWg/3b4IUZhYUpM.jpg?size=1536x2048&quality=96&sign=1bbb1293abc0ae76b7f38a05bf986d78&type=album'];

const nauch = ['https://www.youtube.com/@etonuzno', 'https://www.youtube.com/@telblognet', 'https://www.youtube.com/@ADME_RU', 'https://www.youtube.com/watch?v=nJ_b4VDbmmk']

const fackt = ['Самая крупная жемчужина в мире достигает 6 килограммов в весе.','Законодательство США допускало отправку детей по почте до 1913 года.','В языке древних греков не существовало слова, которое обозначало религию.','В современной истории есть промежуток времени, когда на счетах компании «Apple», было больше средств, чем у американского правительства.','Среднее облако весит порядка 500 тонн, столько же весят 80 слонов.','В Ирландии никогда не было кротов.','Флот США содержит больше авианосцев, чем все флоты мира вместе взятые.','Скорость распространения лавы после извержения, близка к скорости бега гончей.','Изначально, отвертка была изобретена для выковыривания гвоздей, шуруп был изобретен на 100 лет позже.', 'Библия – книга, которую чаще всего воруют в американских магазинах.', 'Примерно 1/3 всей соли, производимой в США, расходуется на очистку дорог ото льда.','Существует пробирка, диаметр которой, в 10000 раз меньше диаметра человеческого волоса.'];

const estetic = ['https://www.youtube.com/watch?v=b9VMm6L476M', 'https://www.youtube.com/watch?v=shuUw5XnFHw', 'https://www.youtube.com/watch?v=jYQFZEP3s6c&t=311s']

const kpop = ['https://www.youtube.com/watch?v=H4v_TdxCYvs', 'https://www.youtube.com/watch?v=15fjOHWH4xA', 'https://www.youtube.com/watch?v=47xpoWuYeMg']

const roundMatch = (max, min) => {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

bot.command('start', (ctx) => {
    console.log('Поля запустила r2d2')
    ctx.reply((`${arrMesageBot[roundMatch(3, 0)]}`), {
        reply_markup: Markup.keyboard(['Привет!'])
        
    })
        

})
bot.hears('Привет!', (ctx) => {
    ctx.reply((`${arrMesageBot_how[roundMatch(2, 0)]}`), {
        reply_markup: Markup.keyboard([
            ['Всё отлично!😁','Пойдет😐'],
            ['Всё ужасно..😞','Лучше скажи как у тебя дела?🙃'],
            ['📌Открыть меню📌']
        ])
    })
})
bot.hears('Всё отлично!😁', (context) => {
    context.reply((`${arrMesageBot_Good[roundMatch(3, 0)]}`))
})
bot.hears('Пойдет😐', (context) => {
    context.reply((`${arrMesageBot_Sow[roundMatch(2, 0)]}`))
})
bot.hears('Всё ужасно..😞', (context) => {
    context.reply((`${arrMesageBot_bad[roundMatch(1, 0)]}`))
})
bot.hears('Лучше скажи как у тебя дела?🙃', (context) => {
    context.reply((`${arrMesageBot_bot[roundMatch(2, 0)]}`))
})

bot.hears('📌Открыть меню📌', (ctx) => {
    ctx.reply('Это мой основной мозг🧠', {
        reply_markup: Markup.inlineKeyboard([
            [
                Markup.callbackButton('Хочу картинку..😚', 'one'),
                Markup.callbackButton('Хочу видео к просмотру🎥 ', 'two'),
            ],
            [
                Markup.callbackButton('Музыка для поднятия настроения🎶', 'three'),
                Markup.callbackButton('Интересные факты✌️', 'four'),
            ],
        ])
    })
})
bot.action('one', (ctx) => {
    ctx.reply('Осталось выбрать =)', {
        reply_markup: Markup.inlineKeyboard([
            [
                Markup.callbackButton('Кошечки', 'two_cat'),
            ],
            [
                Markup.callbackButton('Собачки', 'one_dog'),
            ],
            [
                Markup.callbackButton('Любимый', 'three_love'),
            ],
        ])
    })
})
bot.action('two', (ctx) => {
    ctx.reply('Выбирем видео..', {
        reply_markup: Markup.inlineKeyboard([
            [
                Markup.callbackButton('Научные каналы', '1_channel'),
            ],
            [
                Markup.callbackButton('Куплинов', '2_channel'),
            ],
            [
                Markup.callbackButton('Valera_ghoster', '3_channel'),
            ],
            [
                Markup.callbackButton('Дима Масленников', '4_channel'),
            ],

        ])
    })
})
//video
bot.action('1_channel', (ctx) => {
    ctx.reply((`${nauch[roundMatch(3, 0)]}`))
})
bot.action('2_channel', (ctx) => {
    ctx.reply('https://www.youtube.com/@kuplinovplay')
})
bot.action('3_channel', (ctx) => {
    ctx.reply('https://www.youtube.com/@ValeraGhosther')
})
bot.action('4_channel', (ctx) => {
    ctx.reply('https://www.youtube.com/@pognalishow')
})




//video

//audio

bot.action('three', (ctx) => {
    ctx.reply('Подбираю плейлист', {
        reply_markup: Markup.inlineKeyboard([
            [
                Markup.callbackButton('Музыка для медитации', 'meditation'),
            ],
            [
                Markup.callbackButton('K-pop', 'kpop'),
            ],
            [
                Markup.callbackButton('Любимое ЯндексМузыка', 'yandex'),
            ],
            [
                Markup.callbackButton('Aesthetic song', 'estetic'),
            ],
        ])
    })
    ctx.reply('Если хочешь вернуться к выбору музыки напиши мне "хочу музыку"')
})
bot.action('meditation', (ctx) => {
    ctx.reply('https://www.youtube.com/watch?v=kndqIj8Qgok&t=162s')
})
bot.action('kpop', (ctx) => {
    ctx.reply((`${kpop[roundMatch(2, 0)]}`))
})
bot.action('yandex', (ctx) => {
    ctx.reply('https://music.yandex.ru/users/paulinaselyuk/playlists/3')
})
bot.action('estetic', (ctx) => {
    ctx.reply((`${estetic[roundMatch(2, 0)]}`))
})
bot.hears('хочу музыку', (ctx) => {
    ctx.reply('Подбираю плейлист', {
        reply_markup: Markup.inlineKeyboard([
            [
                Markup.callbackButton('Музыка для медитации', 'meditation'),
            ],
            [
                Markup.callbackButton('K-pop', 'kpop'),
            ],
            [
                Markup.callbackButton('Любимое ЯндексМузыка', 'yandex'),
            ],
            [
                Markup.callbackButton('Аеstetic song', 'estetic'),
            ],
        ])
    })
})
//audio

//fackts
bot.action('four', (ctx) => {
    ctx.reply((`${fackt[roundMatch(11, 0)]}`))
    
})

bot.action('one_dog', (ctx) => {
    ctx.replyWithPhoto({
        url: (`${picture_dog[roundMatch(24, 0)]}`)
    })
})
bot.action('two_cat', (ctx) => {
    ctx.replyWithPhoto({
        url: (`${picture_cat[roundMatch(27, 0)]}`)
    })
})
bot.action('three_love', (ctx) => {
    ctx.replyWithPhoto({
        url: (`${picture_love[roundMatch(33, 0)]}`)
        
    })
    ctx.reply('Если хочешь вернуться к выбору фото, напиши мне "хочу фото"'
    )



    
})
bot.hears('хочу фото', (ctx) => {
    ctx.reply('Осталось выбрать =)', {
        reply_markup: Markup.inlineKeyboard([
            [
                Markup.callbackButton('Кошечки', 'two_cat'),
            ],
            [
                Markup.callbackButton('Собачки', 'one_dog'),
            ],
            [
                Markup.callbackButton('Любимый', 'three_love'),
            ],
        ])
    })
    ctx.reply('Если хочешь вернуться в меню, напиши мне "вернуться меню"')
})
bot.hears('вернуться в меню', (ctx) => {
    ctx.reply('Это мой основной мозг🧠', {
        reply_markup: Markup.inlineKeyboard([
            [
                Markup.callbackButton('Хочу картинку..😚', 'one'),
                Markup.callbackButton('Хочу видео к просмотру🎥', 'two'),
            ],
            [
                Markup.callbackButton('Музыка для поднятия настроения🎶', 'three'),
                Markup.callbackButton('Интересные факты✌️', 'four'),
            ],
        ])
    })
})











bot.launch().then(() => {
    console.log('R2D2 Работает')
})
