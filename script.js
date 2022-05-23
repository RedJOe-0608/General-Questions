const toggleBtn = document.querySelectorAll('.toggle-btn');
const answer = document.querySelectorAll('.answer');
const questions = document.querySelectorAll('.question');
const plusIcon = document.querySelectorAll('.plus-icon');
const minusIcon = document.querySelectorAll('.minus-icon');




toggleBtn.forEach((btn) =>{
    btn.addEventListener('click',() =>{
        console.log(btn.dataset.id);
        //Answer forEach
        answer.forEach((ans) =>{
            if(ans.classList.contains(btn.dataset.id)){
                ans.classList.toggle('show');

                // plusIcon.forEach((plus) =>{
                //     if(plus.classList.contains(btn.dataset.id)){
                //         for(let i=0;i<minusIcon.length;i++)
                //         {
                //             if(minusIcon[i].classList.contains(btn.dataset.id))
                //             {
                //                 plus.classList.toggle('hide');
                //                 minusIcon[i].classList.toggle('hide');
                //             }
                //         }
                //         }
                //         else{
                //             for(let i=0;i<minusIcon.length;i++)
                //         {
                //             minusIcon[i].classList.add('hide');
                //             plus.classList.remove('hide')
                //         }
                //         }
                    
                // })
 
                }
            else{
                ans.classList.remove('show');
                // plusIcon.forEach((plus) =>{
                //     for(let i=0;i<minusIcon.length;i++)
                //     {
                //         if(!minusIcon[i].classList.contains('hide')){
                //             minusIcon[i].classList.add('hide');
                //             plus.classList.remove('hide');

                //         }
                //             // plus.classList.toggle('hide');
                //             // minusIcon[i].classList.toggle('hide');
                //         }
                //     }
                // )
            }
        })
    })
})



 
        // hideBtn.forEach((hidebtn) => {
        //     if(hidebtn.classList.contains(btn.dataset.id)){
        //         btn.classList.add('hide-icon');
        //         hidebtn.classList.remove('hide-icon');
        //       }
        //       hidebtn.addEventListener('click', () =>{
        //           if(hidebtn.classList.contains(btn.dataset.id)){
        //               hidebtn.classList.add('hide-icon');
        //                 btn.classList.remove('hide-icon')
        //               }
           
        //           })
             
        //     })