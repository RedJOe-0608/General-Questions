const toggleBtn = document.querySelectorAll('.toggle-btn');
const questions = document.querySelectorAll('.questions');

toggleBtn.forEach((btn) =>{
    btn.addEventListener('click',() =>{
        console.log(btn.dataset.id);
        //Answer forEach
        questions.forEach((question) =>{
            if(question.classList.contains(btn.dataset.id)){
                question.classList.toggle('show');

               
 
                }
            else{
                question.classList.remove('show');
               
            }
        })
    })
})


