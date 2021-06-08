let button = document.getElementsByTagName("button")
let mysong = new Audio();

const playsong = (id) => {
    console.log(id)
    switch (id) {
        case 1:
            mysong.src = 'music/carnival.mp3';
            mysong.play();
            break;
        case 2:
            mysong.src = 'music/ik-kahani.mp3';
            mysong.play();
            break;
        case 3:
            mysong.src = 'music/kangana.mp3';
            mysong.play();
            break;
        case 4:
            mysong.src = 'music/UddGaye.mp3';
            mysong.play();
            break;
        case 5:
            mysong.src = 'music/TheNights.mp3';
            mysong.play();
            break;
        case 6:
            mysong.src = 'music/gym class.mp3';
            mysong.play();
            break;
        case 7:
            mysong.src = 'music/blinding-lights.mp3';
            mysong.play();
            break;
        case 8:
            mysong.src = 'music/sugar.mp3';
            mysong.play();
            break;
        case 9:
            mysong.src = 'music/treat-you-better.mp3';
            mysong.play();
            break;
        case 10:
            mysong.src = 'music/hamnava.mp3';
            mysong.play();
            break;
        case 11:
            mysong.src = 'music/walliyan.mp3';
            mysong.play();
            break;
        case 12:
            mysong.src = 'music/dil ke chain.mp3';
            mysong.play();
            break;
        case 13:
            mysong.src = 'music/pehla nasha.mp3';
            mysong.play();
            break;
        case 14: 
            mysong.src = 'music/awara.mp3';
            mysong.play();
            break;
        case 15:
            mysong.src = 'music/neele neele.mp3';
            mysong.play();
            break;

    }
}

const pausesong = (id) => {
    switch (id) {
        case 1:
            mysong.pause();
            break;
        case 2:
            mysong.pause();
            break;
        case 3:
            mysong.pause();
            break;
        case 4:
            mysong.pause();
            break;
        case 5:
            mysong.pause();
            break;
        case 6:
            mysong.pause();
            break;
        case 7:
            mysong.pause();
            break;
        case 8:
            mysong.pause();
            break;
        case 9:
            mysong.pause();
            break;
            case 10:
            mysong.pause();
            break;
            case 11:
            mysong.pause();
            break;
            case 12:
            mysong.pause();
            break;
            case 13:
            mysong.pause();
            break;
            case 14:
            mysong.pause();
            break;
            case 15:
            mysong.pause();
            break;
    }
}