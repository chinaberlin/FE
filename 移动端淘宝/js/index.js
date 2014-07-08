(function(){

	window.onload = function(){


		var sliderOverflow = document.querySelector('.slider-overflow');
		var ul = document.querySelector('.slider-overflow ul');
		var startPage;
		var index = 0;
		var l = document.querySelectorAll('.slider-overflow li').length;
		var imgWidth = document.querySelector('.slider-overflow li img').offsetWidth;
		var old = 0;
		
		sliderOverflow.addEventListener('touchstart',function(e){
			startPage = e.changedTouches[0].pageX;
		});

		sliderOverflow.addEventListener('touchmove',function(e){

			var moveX = e.changedTouches[0].pageX;

		    ul.style.WebkitTransition = 0;
			ul.style.WebkitTransform = 'translate3d('+(moveX - startPage + (-imgWidth * index))+'px,0px,0px)';

		})

		sliderOverflow.addEventListener('touchend',function(e){

			var endX = e.changedTouches[0].pageX;

			if(endX - startPage === 0){
				return;
			}else if(endX-startPage > 0) {
				if(index !== 0){
					--index;
				}
			}else{
				if (index < l - 1) {
					++index;
				};
				
			}
			document.querySelectorAll('#slider>ul li')[old].className = '';
			document.querySelectorAll('#slider>ul li')[index].className = 'active';
			old = index;
			ul.style.WebkitTransition = '300ms';
			ul.style.WebkitTransform =  'translate3d('+(-imgWidth * index)+'px,0px,0px)';


		});
	}



})()