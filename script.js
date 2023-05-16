let text = document.getElementById('text');
let btn = document.getElementById('btn');
let container = document.getElementById('cont');
const messege1 = ["cool buddy and you ?", "iam absolutely awesome", "doing great what about you"]
const messege2 = ["iam your chat buddy", "iam bot your freind", "iam your freind"]
const typing = document.getElementById('typing');
const speak = document.getElementById('speak');


const createReplyDiv = (value) =>{
let replydiv = document.createElement('div');
replydiv.classList.add('replydiv')
replydiv.innerHTML = value;
container.appendChild(replydiv);
}


createReplyDiv("How may I assist you today ?")
createReplyDiv(`If you prefer a menu with options, simply type 'hii'.<br>
If you already know the option you want to choose, feel free to send it directly.`)


const reply = () =>{
    let textValue = text.value;

    if(textValue.includes("hii")){
        createReplyDiv(`send:- <br>
        send 1 For moving to homepage <br> send 2 For courses <br> send 3 For Contact Us <br> send 4 For Team Info <br> Send 5 For Exam Details <br> send 6 For Study Materials <br> send 7 To View Selections <br> send 8 To Read Blogs`)
    }

    else if(textValue.includes("1")){  
        createReplyDiv("Redirecting to the homepage. Please wait...")
        window.location.href = 'https://www.sciastra.com/'
    }
    else if(textValue.includes("2")){
        createReplyDiv("Redirecting to the Courses. Please wait...")
        window.location.href = 'https://www.sciastra.com/courses/'
}
 else if(textValue.includes("3")){
    createReplyDiv("Redirecting to the Contact Page. Please wait...")
    window.location.href = 'https://www.sciastra.com/contact/'
}
else if(textValue.includes("4")){
    createReplyDiv("Redirecting. Please wait...")
    window.location.href ='https://www.sciastra.com/teams/'
}
else if(textValue.includes("5")){
    createReplyDiv("Redirecting. Please wait...")
    window.location.href = ''
}
else if(textValue.includes("6")){
    createReplyDiv("Redirecting. Please wait...")
    window.location.href = 'https://www.sciastra.com/materials/'
}
else if(textValue.includes("7")){
    createReplyDiv("Redirecting. Please wait...")
    window.location.href = 'https://www.sciastra.com/selections/'
}
else if(textValue.includes("8")){
    createReplyDiv("Redirecting to Blogs. Please wait...")
    window.location.href = 'https://www.sciastra.com/blog/'
}
else if(textValue === ""){
    createReplyDiv("please select the valid option")
    createReplyDiv(`send:- <br>
    send 1 For moving to homepage <br> send 2 For courses <br> send 3 For Contact Us <br> send 4 For Team Info <br> Send 5 For Exam Details <br> send 6 For Study Materials <br> send 7 To View Selections <br> send 8 To Read Blogs`)
}

else{
    let replydiv = document.createElement('div');
    createReplyDiv("sorry, i didn't understand")
    createReplyDiv("please select the valid menu option !")
    createReplyDiv(`send:- <br>
    send 1 For moving to homepage <br> send 2 For courses <br> send 3 For Contact Us <br> send 4 For Team Info <br> Send 5 For Exam Details <br> send 6 For Study Materials <br> send 7 To View Selections <br> send 8 To Read Blogs`)
}

container.scrollTop = container.scrollHeight;

}

btn.addEventListener('click',()=>{
    let textValue = text.value;
    let msg = document.createElement('div');
    msg.classList.add('sentMesseges');
    msg.innerHTML = textValue;
    container.appendChild(msg);
    setTimeout(() => {
        reply();
    text.value = " ";
    }, 1500);
});
