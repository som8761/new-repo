let accordians = document.querySelectorAll('.accordian')

accordians.forEach((somnath) =>{
    // accodians variable er sob jinis ta akhn somnath er modhe save hoye gache.
    // let icon = somnath.querySelector('.icon')
    // let answer = somnath.querySelector('.answer')

    // jahatu sob kichu akhn somnath a store ache tai ami eventlistener akhn somnath ei lagabo tahole automatically accordians ke target kora hoye jabe.

    somnath.addEventListener('click',()=>{
        // ekhane amra somnath.querry dilam document dewar dorkar nai.

        //r ekhane event lagale ki ba kar upor kajkorbe seta select kore nilam.then classlist lagalam.mathay rakhte hbe document diye na parameter diye select korte hbe. 
        let icon = somnath.querySelector('.icon')
        let answer = somnath.querySelector('.answer')


        icon.classList.toggle('active')
        answer.classList.toggle('active')
        



        /*ata holo jadi amra scroll height diye korte chai tahole ki korte hbe.*/
        // if(icon.classList.contains('active')){
        //     icon.classList.remove('active')
        //     answer.style.maxHeight = null;
        // }else{
        //     icon.classList.add('active')
        //     answer.style.maxHeight = answer.scrollHeight + 'px';
        // }





        
        // ata vul korlam.
        //  document.querySelector('.icon').classList.toggle('active')
        //  document.querySelector('.answer').classList.toggle('active')
    
    })

})
















/*ekhane ami ata bujhlam j aksthe na kore jadi alada alada kore kori tahole ki problem face korte hoy.*/


/*first accordian*/

// let accordian = document.querySelector('.accordian')

// accordian.addEventListener('click',()=>{
//     document.querySelector('.answer').classList.toggle('active')
//     document.querySelector('.icon').classList.toggle('active')
// })


/*second accordian*/

// let accordian2 = document.querySelector('.accordian2')
// accordian2.addEventListener('click',()=>{
//     document.querySelector('.answer2').classList.toggle('active')
//     document.querySelector('.icon2').classList.toggle('active')
// })



/*ekhane j ata korte holo seta puro alada ala kore korte holo..mane accordian gulor class thke suru kore ja ja ache sob alada alada kore dite holo tai alada kore csso banate holo ..same class diye to r querry selector kaj kore na.tai js o same korte holo alada alada kore..mahle upore j method ta ache for each loop..seta bisal subidhar karon okhane aksthe sob kota element k select kore nichi as a array..*/
