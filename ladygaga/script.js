    var body = document.body;
    var fulls = document.querySelector(".fulls");
    var fullscr = document.querySelector(".fullscr");
    fulls.onclick = function() {
        body.requestFullscreen();
        fullscr.textContent = "Вы в полноэкранном режиме. Для выхода нажмите ESC.";
    }

    thefame.onclick = function () {
        h3.textContent = "The Fame";
        text.textContent = "The Fame — дебютный альбом Леди Гаги, выпущенный в 2008 году. Альбом был положительно встречен критикой. Альбом занял первую строчку в таких странах, как Соединенное Королевство, Канада и Ирландия. https://ru.wikipedia.org/wiki/The_Fame";
    }

    thefamem.onclick = function () {
        h3.textContent = "The Fame Monster";
        text.textContent = "The Fame Monster — третий мини-альбом певицы Леди Гаги, выпущенный в 2009 году. Альбом посвящён мрачной стороне славы. Альбом занял первые места в большом количестве стран, обрёв большую популярность. https://ru.wikipedia.org/wiki/The_Fame_Monster"
    }

    bornthisway.onclick = function () {
        h3.textContent = "Born This Way";
        text.textContent = "Born This Way — третий студийный альбом певицы Леди Гаги, выпущенный в 2011 году. В первую неделю альбом попал на первые строчки во многих странах. По состоянию на 2019 год, было продано около 12 000 00 копий альбома. https://ru.wikipedia.org/wiki/Born_This_Way_(альбом)";
    }

    artpop.onclick = function () {
        h3.textContent = "Artpop";
        text.textContent = "Artpop — студийный альбом певицы Леди Гаги, выпущенный в 2013 году. Он получил смешанные отзывы от критиков. Долгое время дебютировал на первых строчках с недельными продажами в 258 тысяч экземпляров. https://ru.wikipedia.org/wiki/Artpop";
    }

    joanne.onclick = function () {
        h3.textContent = "Joanne";
        text.textContent = "Joanne — четвёртый студийный альбом певицы Леди Гаги, выпущенный в 2016 году. Запись альбома длилась около полугода. Певица назвала альбом в честь своей покойной тёти Джоанн, которая умерла в возрасте 19 лет из-за осложнений. По состоянию на 2019 год, в мире продано около 2 500 000 копий альбома. https://ru.wikipedia.org/wiki/Joanne ";
    }

    chromatica.onclick = function () {
        h3.textContent = "Chromatica";
        text.textContent = "Chromatica — шестой студийный альбом певицы Леди Гаги, выход которого состоялся 29 мая 2020 года. В феврале Леди Гага анонсировала песню Stupid Love, и на рекламных щитах этой песни (и в самом клипе) красовались надписи Chromatica. Альбом включает в себя 16 треков. https://ru.wikipedia.org/wiki/Chromatica";
    }


document.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
        fullscr.textContent = 'Смотреть в полноэкранном режиме лучше.';
    }
});
