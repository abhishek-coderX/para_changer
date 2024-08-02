
var btn=document.querySelector('button');
var para=document.querySelector('#box p')

var flag =0;

btn.addEventListener('click', function(){
    if(flag==0)
    {
        para.textContent="Paragraph change ho gaya bhai bas kar";
        flag=1;

    }
    else
    {
        para.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rem aperiam eum odit expedita accusantium maiores cumque ut molestiae. Velit quo magni delectus qui vero mollitia sapiente ullam, voluptate vitae!"
        flag =0;
    }

})






// btn.addEventListener('dblclick',function(){
// btn.style.backgroundColor="red"
// btn.innerHTML="ek baar click kar"
// main.style.backgroundColor="red"


// })


// btn.addEventListener('mousemove',function(){
//     btn.style.backgroundColor="yellow"
//     btn.innerHTML="click kar bhai"
//     main.style.backgroundColor="yellow"

    
//     })
    