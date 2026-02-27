const line_slider=document.querySelector('.line_slider')
const worst=document.querySelector('.worst')
const no_good=document.querySelector('.no_good')
const neytral=document.querySelector('.neytral')
const good=document.querySelector('.good')
const best=document.querySelector('.best')
line_slider.value=100
best.src="pict/Loveit.png"

worst.src='pict/Type=Worst 1.png'
no_good.src="pict/Type=It's just fine 1.png"
neytral.src="pict/Neutral.png"  
good.src="pict/Type=Good 1.png"
line_slider.addEventListener('input',()=>{
    if (line_slider.value<=20){
        worst.src='pict/Worst.png  '

        no_good.src="pict/Type=It's just fine 1.png"
        neytral.src="pict/Neutral.png"
        good.src="pict/Type=Good 1.png"
        best.src="pict/Type=Loveit 1.png"
    }
    else if (line_slider.value<=40){
        no_good.src="pict/min.png"

       worst.src='pict/Type=Worst 1.png'
       
        neytral.src="pict/Neutral.png"
        good.src="pict/Type=Good 1.png"
        best.src="pict/Type=Loveit 1.png"
    }
    else if (line_slider.value<=60){
        neytral.src="pict/ney.png"

        worst.src='pict/Type=Worst 1.png'
        no_good.src="pict/Type=It's just fine 1.png"
       
        good.src="pict/Type=Good 1.png"
        best.src="pict/Type=Loveit 1.png"
    }
    else if (line_slider.value<=80){
        good.src="pict/good.png"

         worst.src='pict/Type=Worst 1.png'
        no_good.src="pict/Type=It's just fine 1.png"
        neytral.src="pict/Neutral.png"
        
        best.src="pict/Type=Loveit 1.png"
    }
    else if (line_slider.value<=100){
        best.src="pict/Loveit.png"

       worst.src='pict/Type=Worst 1.png'
        no_good.src="pict/Type=It's just fine 1.png"
        neytral.src="pict/Neutral.png"
        good.src="pict/Type=Good 1.png"
      
    }
})