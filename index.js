let timer=10;
let time = document.getElementById('display');
setTimeout(() => {
    time.innerHTML = timer--;
    setTimeout(() =>{
        time.innerHTML = timer--;
        setTimeout(() =>{
            time.innerHTML = timer--;
            setTimeout(() =>{
                time.innerHTML = timer--;
                setTimeout(() =>{
                    time.innerHTML = timer--;
                    setTimeout(() =>{
                        time.innerHTML = timer--;
                        setTimeout(() =>{
                            time.innerHTML = timer--;
                            setTimeout(() =>{
                                time.innerHTML = timer--;
                                setTimeout(() =>{
                                    time.innerHTML = timer--;
                                    setTimeout(() =>{
                                        time.innerHTML = timer--;
                                        setTimeout(() =>{
                                            time.style.fontSize = "50px";
                                            time.innerHTML = "Happy New Year!"    
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)     
        },1000)
    },1000)
}, 1000); 