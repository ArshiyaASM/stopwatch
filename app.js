const btn = document.querySelectorAll("button");
const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const sec = document.querySelector("#sec");
const m_sec = document.querySelector("#m_s");
const span = document.querySelector("#for_m_s");


let clickC = 0;


btn[0].addEventListener("click" , ()=>{
    if(clickC == 0){
        timer();
        btn[0].disabled = true;
    }
})


btn[1].addEventListener("click", ()=>{
    clearInterval(SetInterval);
    btn[0].disabled = false;
})

btn[2].addEventListener("click", ()=>{
    clearInterval(SetInterval);
    sec.innerHTML = "00";
    m_sec.innerHTML = "00";
    minute.innerHTML = "00";
    hour.innerHTML = "00";
    btn[0].disabled = false;
    m_sec.style.display = "none";
    span.style.display = "none";
})


let SetInterval;

function timer(){
    m_sec.style.display = "inline-block";
    span.style.display = "inline-block";
    SetInterval = setInterval(()=>{
        if(m_sec.innerHTML < 99){
            if(m_sec.innerHTML < 9){
                m_sec.innerHTML = `0${Number(m_sec.innerHTML) + 1}`;
            }else {
                m_sec.innerHTML++;
            }
        }else {
            m_sec.innerHTML = "00";
            if(sec.innerHTML < 59){
                if(sec.innerHTML < 9){
                    sec.innerHTML = `0${Number(sec.innerHTML) + 1}`;
                }else {
                    sec.innerHTML++;
                }
            }else{
                m_sec.innerHTML = "00";
                sec.innerHTML = "00"
                if(minute.innerHTML < 59){
                    if(minute.innerHTML < 9){
                        minute.innerHTML = `0${Number(minute.innerHTML) + 1}`;
                    }else {
                        minute.innerHTML++;
                    }
                }else{
                    m_sec.innerHTML = "00";
                    sec.innerHTML = "00"
                    minute.innerHTML = "00"
                    if(hour.innerHTML < 9){
                        hour.innerHTML = `0${Number(hour.innerHTML) + 1}`;
                    }else {
                        hour.innerHTML++;
                    }
                }  
            }
        }
    } , 10)
}