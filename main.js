'use strict';

//robo
const robo = ['グー', 'チョキ', 'パー'];
let n = Math.floor(Math.random() * 3);
// const roboPick = robo[n];   roboの出す手はランダムで決まる
const r_ques = document.getElementById('robo-question');
const r_rock = document.getElementById('robo-rock');
const r_sci = document.getElementById('robo-scissors');
const r_pap = document.getElementById('robo-paper');

//roboの最初の状態
function roboFirst () {
    r_ques.style.visibility = 'visible';
    r_rock.style.visibility = 'hidden';
    r_sci.style.visibility = 'hidden';
    r_pap.style.visibility = 'hidden';
}
roboFirst();

//roboがグーのとき
function roboR () {
    r_rock.style.visibility = 'visible';
    r_sci.style.visibility = 'hidden';
    r_pap.style.visibility = 'hidden';
}

//roboがチョキのとき
function roboS () {
    r_sci.style.visibility = 'visible';
    r_rock.style.visibility = 'hidden';
    r_pap.style.visibility = 'hidden';
}

//roboがパーのとき
function roboP () {
    r_pap.style.visibility = 'visible';
    r_rock.style.visibility = 'hidden';
    r_sci.style.visibility = 'hidden';
}


//player
const p_rock = document.getElementById('rock');
const p_scissors = document.getElementById('scissors');
const p_paper = document.getElementById('paper');

//playerの最初の状態
p_rock.style.visibility = 'hidden';
p_scissors.style.visibility = 'hidden';
p_paper.style.visibility = 'hidden';


//結果
const result = document.getElementById('result');

//スタートボタン
const go = document.getElementById('go');
go.style.visibility = 'visible';

//ドロー（あいこ）ボタン
const draw = document.getElementById('draw');
draw.style.visibility = 'hidden';



function game () {

    //player:グー
    p_rock.addEventListener ('click', () => {
        let n = Math.floor(Math.random() * 3);
        r_ques.style.visibility = 'hidden';
        p_scissors.style.visibility = 'hidden';
        p_paper.style.visibility = 'hidden';
        p_rock.disabled = true;
        switch (n) {
            case 0:   //r:グー
                result.innerHTML = 'あいこ　です　　もう１回';
                roboR();
                p_rock.style.background = 'orange';
                draw.style.visibility = 'visible';
                break;
            
            case 1:   //r:チョキ
                result.innerHTML = 'あなたの　勝ち　です';
                roboS();
                p_rock.style.background = 'red';
                draw.style.visibility = 'hidden';
                break;

            case 2:   //r:パー
                result.innerHTML = 'あなたの　負け　です';
                roboP();
                p_rock.style.background = 'blue';
                draw.style.visibility = 'hidden';
                break;
        }
    });

    //player:チョキ
    p_scissors.addEventListener ('click', () => {
        let n = Math.floor(Math.random() * 3);
        r_ques.style.visibility = 'hidden';
        p_rock.style.visibility = 'hidden';
        p_paper.style.visibility = 'hidden';
        p_scissors.disabled = true;
        switch (n) {
            case 0:   //r:グー
                result.innerHTML = 'あなたの　負け　です';
                roboR();
                p_scissors.style.background = 'blue';
                draw.style.visibility = 'hidden';
                break;
            
            case 1:   //r:チョキ
                result.innerHTML = 'あいこ　です　　もう１回';
                roboS();
                p_scissors.style.background = 'orange';
                draw.style.visibility = 'visible';
                break;

            case 2:   //r:パー
                result.innerHTML = 'あなたの　勝ち　です';
                roboP();
                p_scissors.style.background = 'red';
                draw.style.visibility = 'hidden';
                break;
        }
    });

    //player:パー
    p_paper.addEventListener ('click', () => {
        let n = Math.floor(Math.random() * 3);
        r_ques.style.visibility = 'hidden';
        p_rock.style.visibility = 'hidden';
        p_scissors.style.visibility = 'hidden';
        p_paper.disabled = true;
        switch (n) {
            case 0:   //r:グー
                result.innerHTML = 'あなたの　勝ち　です';
                roboR();
                p_paper.style.background = 'red';
                draw.style.visibility = 'hidden';
                break;
            
            case 1:   //r:チョキ
                result.innerHTML = 'あなたの　負け　です';
                roboS();
                p_paper.style.background = 'blue';
                draw.style.visibility = 'hidden';
                break;

            case 2:   //r:パー
                result.innerHTML = 'あいこ　です　　もう１回';
                roboP();
                p_paper.style.background = 'orange';
                draw.style.visibility = 'visible';
                break;
        }
    });
}



function start () {
    p_rock.style.visibility = 'visible';
    p_scissors.style.visibility = 'visible';
    p_paper.style.visibility = 'visible';
    p_rock.style.background = 'orange';
    p_scissors.style.background = 'orange';
    p_paper.style.background = 'orange';
    go.style.visibility = 'hidden';
    draw.style.visibility = 'hidden';
    p_rock.disabled = false;
    p_scissors.disabled = false;
    p_paper.disabled = false;
}


//スタートボタンをクリック
go.addEventListener('click', () => {
    result.innerHTML = 'じゃんけん…';
    roboFirst();
    start();
    game();
});


//ドローボタンをクリック（あいこ）
draw.addEventListener('click', () => {
    result.innerHTML = 'あいこ　で…';
    roboFirst();
    start();
    game();
});




