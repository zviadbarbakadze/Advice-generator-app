let buttons=document.querySelector('.dice');
let texts=document.querySelector('.text')
let satauri=document.querySelector('.satauri')


let getResult=async()=>{
    try {
         await fetch('https://api.adviceslip.com/advice')
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            satauri.innerHTML=`${data.slip.id}`
            texts.innerHTML=`${data.slip.advice}`
        })
        
    } catch (error) {
        console.log(error)
    }
}
buttons.addEventListener('click',getResult);