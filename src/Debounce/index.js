const input = document.querySelector('input');
let debounce = null;
let throttle = null

const printText = (e) => {   
    /* default */
    console.log("default", e.target.value, new Date().getTime());

    /* debounce */
    clearTimeout(debounce); //setTime을 취소함 == 일정 시간 내에 중복 이벤트가 발생할 경우
    
    debounce = setTimeout(() => {
        console.log("debounce", e.target.value, new Date().getTime());
    }, 5000);

    /* throttle */
    
    //throttle이 null이면 setTime 수행
    if (!throttle) {
        setTimeout(() => {
            console.log("throttle", e.target.value, new Date().getTime());
            throttle = null; //throttle 초기화
        }, 500);
    }
    //throttle이 null이 아니면 input value 세팅
    throttle = e.target.value;
}

input.addEventListener('keyup', printText);

