$(function () {
   $('.container').fullpage({
       sectionsColor:['#fadd67', '#84a2d4','#ef674d','#ffeedd','#d04759','#84d9ed','#8ac060'],
       verticalCentered:false,
       navigation:true,
       afterLoad:function (link,index) {
           $('.section').eq(index-1).addClass('now');
       },
       afterRender:function () {
           $('.more').on('click',function () {
               $.fn.fullpage.moveSectionDown();
           });
           $('.screen4 .cart').on('transitionend',function () { //监听动画结束
               $('.screen4 .address').show().find('img:last').fadeIn(1000);
               $('.screen4 .text').addClass('show');
           });
           $('.screen8').on('mousemove', function (e) {
               $(this).find('.hand').css({
                   left:e.pageX+10,
                   top:e.pageY+10
               });
           });
           $('.again').on('click', function () {
               window.location.reload()
           });


       },
       scrollingSpeed: 1000,
       onLeave:function (index,nextIndex,direction) {
           if(index==2&&nextIndex==3){/*从2到3时 */
               $('.section').eq(index-1).addClass('leaved');
           }else if(index==3&&nextIndex==4){
               $('.section').eq(index-1).addClass('leaved');
           }else if(index==5&&nextIndex==6){
               $('.section').eq(index-1).addClass('leaved');
               $('.screen6 .box').addClass('show');
           }else if(index==6&&nextIndex==7){
               $('.screen7 .text').addClass('show');
               $('.screen7 .star img').each(function (i,item) {
                   $(this).delay(i*0.5*1000).fadeIn();
               })
           }
       }
   });

});