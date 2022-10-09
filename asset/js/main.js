
$(document).ready(function () {

    $('.tooltip').tooltip();

    let t;ms=0,s=0,mn=0,h=0;


function updatechrono(){
    ms+=1;
    if (ms == 10) {
        ms=1;
        s+=1;
        
    }
    if (s == 60) {
        s=0;
        mn+=1;
        
    }
    if (mn == 60) {
        
        mn=0;
        h+=1;
        
    }

    $('.heures').text(`${h} h :`) ;
    $('.minutes').text(`${mn} min :`);
    $('.secondes').text(`${s} s :`);
    $('.milisecondes').text(`${ms} ms`);

}

function start(){
   // setInterval(updatechrono(),100);
    t=setInterval(updatechrono, 100 ); 

}
function pause(){
   // alert('stop')
    clearInterval(t);
 
 }

 function reset(){
    // alert('stop')
     clearInterval(t);
     ms=0,s=0,mn=00,h=00;
     $('.heures').text(`${h} h:  `) ;
     $('.minutes').text(`${mn} min:  `);
     $('.secondes').text(`${s} s:  `);
     $('.milisecondes').text(`${ms} ms`);
 
  
  }
  

$('.play').on('click', function () {
//console.log('meow')
    $('.toolip').removeClass('active');
    $(this).toggleClass('active');
    
    //newAlea();
    start();
})
$('.pause').on('click', function () {
//console.log('pause')
    $('.toolip').removeClass('active')
    $(this).toggleClass('active')
    pause();
     
 })

 $('.reset').on('click', function () {
    //console.log('reset')
    $('.toolip').removeClass('active')
    $(this).toggleClass('active')
    reset();
    //$('.pause').prop('disabled', true)
    $('.pause').prop('disabled', true);
     
 })

});
