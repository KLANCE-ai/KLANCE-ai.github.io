function checkquestion1(answer){
    let buttons = document.querySelectorAll('button')
    for (let b of buttons){
        b.disabled = true
        b.style.backgroundColor = 'tomato'
    }
    if (answer == 'correct'){
        document.getElementById('answer1').innerHTML = "you are klanceful."
    } else {
        document.getElementById('answer1').innerHTML = "you arent very klanceful"
    }
    let question = document.querySelector('.question')
    let link = document.createElement(a)
    link.innerHTML = "Next Question"
    link.href = 'question2.html'
    console.log(question)
    question.appendChild(link)
}