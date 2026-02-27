const name = document.querySelector('#name')
const email = document.querySelector('#email')
const number = document.querySelector('#number')
const form = document.querySelector('.main_hero')
const btn_submit=document.querySelector('.footer_btn')

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form));
    fetch('sdfsdgs',{
        headers:{ 'Content-Type': 'application/json' },
        method:'POST',
        body:JSON.stringify(data)
    })
    .then(res=>{
        if (res.ok){
            alert('okey,good')
        }
        else{
            throw new Error(res.status)
        }
        
    })
    .catch(err=>{
        console.log(err)
    })

})