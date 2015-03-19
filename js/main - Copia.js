/*Avoid `console` errors in browsers that lack a console.
Developer:MPValdivia
*/
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}
var IE = (navigator.appVersion.indexOf("MSIE")>=0);
var IE7 = (navigator.appVersion.indexOf("MSIE 7.")>=0);
var IE8 = (navigator.appVersion.indexOf("MSIE 8.")>=0);

if(IE){$('body').addClass('ie');}
if(IE8){$('body').addClass('ie8');}
if ($.browser.mozilla) {$('body').addClass('firefox');}
if ($.browser.webkit) {$('body').addClass('chrome');}
if ($.browser.safari) {$('body').addClass('safari');}

var inputblank = {
	load:function(){
			var valor;
			$('.blank_this').each(function(){
				valor=$(this).attr('value');
				$(this).attr('list',valor);
				});
			$('.blank_this').each(function(){	
				$(this).live({
					focusin: function() {
							value = $(this).attr('value');
							valor = $(this).attr('list');
							$(this).addClass('colorblack');
							if(value==valor) {
								value= '';
								$(this).attr('value',value);	
							}   					
					},
					focusout: function(){
							value2 = $(this).attr('value');
							if(value2=='') {
								$(this).removeClass('colorblack');
								value2 = valor ;
								$(this).attr('value',value2);
							}
						}
				});	
			});
	}
}
var nivo={
	load:function(){
		$('#slider').nivoSlider({
		directionNav: true,
		animSpeed: 500,
        pauseTime: 8000,
		startSlide: 0

			});
		
	}
	
}

var currentmoney = 'S/.'
var drag_slider = {
	load:function(){
			$( "#rp_rmin" ).slider({
				range: "max",
				step: 1,
				value:400,
				min: 0,
				max: 12000,
				slide: function( event, ui ) {
					var valuable = (ui.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
					$( "#val_rpmin" ).val( currentmoney + valuable + '.00');
				}
			});
				var ini_valuable = $( "#rp_rmin" ).slider( "value" ).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
			$( "#val_rpmin" ).val( currentmoney + ini_valuable + '.00' );
			
			$( "#rp_rmax" ).slider({
				range: "max",
				value:12000,
				min: 0,
				max: 100000,
				step: 10,
				slide: function( event, ui ) {
					var valuable = (ui.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
					$( "#val_rpmax" ).val( currentmoney + valuable + '.00') ;
				}
			});
				var ini_valuable = $( "#rp_rmax" ).slider( "value" ).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
			$( "#val_rpmax" ).val( currentmoney + ini_valuable + '.00' );
			
			$( "#rp_amax" ).slider({
				range: "max",
				value:1900,
				min: 0,
				max: 2500,
				slide: function( event, ui ) {
					$( "#val_apmax" ).val( ui.value );
				}
			});
			$( "#val_apmax" ).val( $( "#rp_amax" ).slider( "value" ));
			
			$( "#rp_amin" ).slider({
				range: "max",
				value:140,
				min: 0,
				max: 1000,
				slide: function( event, ui ) {
					$( "#val_apmin" ).val( ui.value );
				}
			});
			$( "#val_apmin" ).val( $( "#rp_amin" ).slider( "value" )  );
			
			$( "#numhab" ).slider({
				range: "max",
				value:3,
				min: 1,
				max: 7,
				step: 1,
				slide: function( event, ui ) {
					$( "#val_numhab" ).val( ui.value);
				}
			});
			$( "#val_numhab" ).val( $( "#numhab" ).slider( "value" ));
			
			$( "#numban" ).slider({
				range: "max",
				value:2,
				min: 1,
				max: 3,
				step: 1,
				slide: function( event, ui ) {
					$( "#val_numban" ).val( ui.value);
				}
			});
			$( "#val_numban" ).val( $( "#numban" ).slider( "value" ));
			
			$( "#num_anos" ).slider({
				range: "max",
				value:24,
				min: 10,
				max: 35,
				slide: function( event, ui ) {
					$( "#val_num_anos" ).val( ui.value);
				}
			});
			$( "#val_num_anos" ).val( $( "#num_anos" ).slider( "value" ));
			
			$( "#num_anos2" ).slider({
				range: "max",
				value:16,
				min: 10,
				max: 35,
				slide: function( event, ui ) {
					$( "#val_num_anos2" ).val( ui.value);
				}
			});
			$( "#val_num_anos2" ).val( $( "#num_anos2" ).slider( "value" ));

	
		
		
		
		}
	}
var changemoney = {
	load:function(){
		$('.wrap_dolarsol div').click(function(){
			$('.wrap_dolarsol div').removeClass('active');
			$(this).addClass('active');
			currentmoney = $(this).attr('data-current');
			drag_slider.load();
			$('.cmoney').empty();
			$('.cmoney').append(currentmoney);
	
		})		
	}
	
}
var carousel = {
	load:function(){
		    $('#carousel').jcarousel({scroll:2});
			$('#carousel2').jcarousel({wrap: 'circular'});
		}
	}
var acordeon = {
	load:function(){
		$('.thisacordeon ul li').click(function(){
				var doacordion = $(this).hasClass('active');
				if (doacordion == false){
					$(this).parent('ul').children('li').children('.cont_accordeon').slideUp(300);
					$(this).children('.cont_accordeon').slideDown(500,'',function(){});
					$(this).parent('ul').children('li').removeClass('active')
					$(this).addClass('active');
				}
		})	
	}
	
}
var acordeon2 = {
	load:function(){
		$('ul.thisacordeon  li').click(function(){
				var doacordion = $(this).hasClass('active');
				if (doacordion == false){
					$('ul.thisacordeon  li div:nth-child(even)').slideUp(300);
					$(this).children('div').slideDown(500,'',function(){});
					$(this).parent('ul').children('li').removeClass('active');
					$(this).addClass('active');
				}
		})	
	}
	
}
var tabs = {
	load:function(){
		$('.thistab ul li a').click(function(e){
			e.preventDefault();
			$('.thistab ul li a').removeClass('active');
			$(this).addClass('active');
			var idTab = '#'+$(this).attr('href');
			$('.tab-all').hide();
			$(idTab).fadeIn(500);
		})		
		
	}
	
}
var modalcaller = {
	load:function(){
		$('.lb_caller').click(function(e){
		  e.preventDefault();
		  object = $(this).attr('data-val');
		  object = object.split(',');
		  object0 = object[0];
		  object1 = parseInt (object[1]);
		  object2 = object[2];
		  if (!object1){object1=90}
		  if (!object2){object2 = false}
		  
		  console.info(object)
		  $(object0).modal({
			  	opacity:object1,
				focus: false,
				overlayClose:object2,
				onOpen: function (dialog) {
						dialog.overlay.fadeIn(300, function () {
							dialog.data.hide();
							dialog.container.fadeIn('fast', function () {
								dialog.data.fadeIn('fast');	 
							});
						});	
				}
			
			
			});	
			
		});
		
		
	}
}

var sum=0;
var numstep = 0;
var pospointer;
var posblue = 0;
var lbcontent;
var count_on= true;
var apisteps = {
		
	load:function(  ){
		$( '.steps_content' ).on({
					"mousewheel": scrollHandler,
					"DOMMouseScroll": scrollHandler // Firefox
		})
		
		function scrollHandler(e){
			e.preventDefault();
			var speed = 15;
			var maxlim = 1218;
			var scrollDelta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
	            dir = scrollDelta / ( Math.abs( scrollDelta ) );
					
			if (dir==1)dir= dir-speed;
			if (dir==-1)dir= dir+speed;
			
			sum= sum +dir;
			console.info(sum);
			if((sum>0)&&(sum<=63)){numstep = 1}
			if((sum>63)&&(sum<=201)){numstep = 2}
			if((sum>201)&&(sum<=339)){numstep = 3}
			if((sum>339)&&(sum<=477)){numstep = 4}
			if((sum>477)&&(sum<=615)){numstep = 5}
			if((sum>615)&&(sum<=753)){numstep = 6}
			if((sum>753)&&(sum<=891)){numstep = 7}
			if((sum>891)&&(sum<=1029)){numstep = 8}
			if((sum>1029)&&(sum<=1167)){numstep = 9}
			if((sum>1167)&&(sum<=1221)){numstep = 10}
			/*console.info(numstep)*/
			if(sum<=-9)sum=-9;
			if(sum>=maxlim)sum=maxlim;		
			getstep();
		}
		function getstep(){
			switch (numstep) {
				case 1:
					pospointer=20;
					porpasos();
					break;
				case 2:
					pospointer=91;
					porpasos();
					break;
				case 3:
					pospointer=165;
					porpasos();
					break;
				case 4:
					pospointer=232;
					porpasos();
					break;
				case 5:
					pospointer=298;
					porpasos();
					break;
				case 6:
					pospointer=368;
					porpasos();
					break;
				case 7:
					pospointer=433;
					porpasos();
					break;
				case 8:
					pospointer=509;
					porpasos();
					break;
				case 9:
					pospointer=577;
					porpasos();
					break;
				case 10:
					pospointer=644;
					porpasos();
					break;			
				}
			
		}
		
		
		var cont = new Array()
		function porpasos(){
		
			cont[1]= numstep;
			cont.push(numstep)
			cont.reverse();	
			
			if (cont[0] != cont[2]){
				
				$('.steps_numbers ul li').removeClass('active');
				$('.wrap_pointerstep').fadeIn(1000);
				$('.wrap_pointerstep').animate({top:pospointer},300);	
				$('.steps_numbers ul li:nth-child('+numstep+')').addClass('active');
				$('.stepsnone').fadeOut(1000);
				$('.stepcont_'+numstep).fadeIn(1000);
				$('.overlaystep,.wrap_contsteplb').css('display','none');
				$('.wrap_pointerstep').removeClass('lb');
				$('.steps_content').removeClass('borderblue');
			
			}

		}
		
		$('.steps_numbers ul li').click(function(){
			var linum = $(this).index()+1;
			numstep = linum;
			switch (numstep) {
				case 1:
					sum=1;
					posblue= 0;
					pospointer=20;
					break;
				case 2:
					sum=111;
					posblue= 60;
					pospointer=91;
					break;
				case 3:
					sum=249;
					posblue=126;
					pospointer=165;				
					break;
				case 4:
					sum=387;
					posblue=195;
					pospointer=232;			
					break;
				case 5:
					sum=525;
					posblue=264;
					pospointer=298;
					break;
				case 6:
					sum=663;
					posblue=336;
					pospointer=368;
					break;
				case 7:
					sum:801;
					posblue=402;
					pospointer=433;
					break;
				case 8:
					sum=939;
					posblue=471;
					pospointer=509;
					break;
				case 9:
					sum=1077;
					posblue=540;
					pospointer=577;
					break;
				case 10:
					sum=1215;
					posblue=609;
					pospointer=644;
					break;			
			}
			
			$('.steps_numbers ul li').removeClass('active');
			$('.steps_numbers ul li:nth-child('+numstep+')').addClass('active');
			$('.wrap_pointerstep').animate({top:pospointer},300);
			$('.stepsnone').fadeOut(500);
			$('.stepcont_'+numstep).fadeIn(1000);
			$('.overlaystep,.wrap_contsteplb').css('display','none');
			$('.wrap_pointerstep').fadeIn(600);
			$('.wrap_pointerstep').removeClass('lb');
			$('.steps_content').removeClass('borderblue');
			if(count_on==false){
				count_on=true;
				$( '.steps_content' ).on({
						"mousewheel": scrollHandler,
						"DOMMouseScroll": scrollHandler // Firefox
				})
			}
		})
		$('.opensteplb').click(function(e){
			e.preventDefault();
			lbcontent = $(this).attr('data-lb');
			console.info(lbcontent)
			$('.overlaystep,'+'.'+lbcontent).fadeIn(300,'',function(){
				$('.scrollbar2').tinyscrollbar()
			});
			$('.wrap_pointerstep').addClass('lb');	
			$( '.steps_content' ).off({
					"mousewheel": scrollHandler,
					"DOMMouseScroll": scrollHandler // Firefox
			})

		})
		$('.thislb-close').click(function(e){
			e.preventDefault();
			count_on=false;
			$('.overlaystep,'+'.'+lbcontent).fadeOut(300);
			$('.wrap_pointerstep').removeClass('lb');	
			$( '.steps_content' ).on({
					"mousewheel": scrollHandler,
					"DOMMouseScroll": scrollHandler // Firefox
			})

		})
	},
	catchSelect: function(point){
				var posselect;
				 
			$('.steps_numbers ul li:nth-child('+ point +')').addClass('select');
			console.info(point);
		switch (point) {
			case 1:
					sum=1;
					posblue= 0;
					pospointer=20;
					break;
				case 2:
					sum=111;
					posblue= 60;
					pospointer=91;
					break;
				case 3:
					sum=249;
					posblue=126;
					pospointer=165;				
					break;
				case 4:
					sum=387;
					posblue=195;
					pospointer=232;			
					break;
				case 5:
					sum=525;
					posblue=264;
					pospointer=298;
					break;
				case 6:
					sum=663;
					posblue=336;
					pospointer=368;
					break;
				case 7:
					sum:801;
					posblue=402;
					pospointer=433;
					break;
				case 8:
					sum=939;
					posblue=471;
					pospointer=509;
					break;
				case 9:
					sum=1077;
					posblue=540;
					pospointer=577;
					break;
				case 10:
					sum=1215;
					posblue=609;
					pospointer=644;
					break;			
			}
			console.info(posselect);
			$('.stepcont_'+point).css('display','block');
			$('.wrap_pointerstep').css({top:pospointer});
			$('.wrap_pointerstep').css('display','block');
			$('.steps_content').removeClass('borderblue');

	}
}
var lb_dicc = {
		load:function(){
			$('ul.list-dic .dcit').click(function(){
				$('#lb_dic').modal({
					opacity:0,
					onShow:function(){$('#scrollbar1').tinyscrollbar();}
					
					})
			
			})
			
		}
	
	
	
	}
var call_calendar = {
	html28listado:function(){
			$( "#datepicker28" ).datepicker({
				showOn: "button",
				buttonImage: "images/ico_cal.gif",
				buttonImageOnly: true,
				dateFormat: 'dd/mm/yy',
				monthNames:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
				monthNamesShort:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],
				dayNames:["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado"],
				dayNamesShort:["Dom","Lun","Mar","Mie","Jue","Vie","Sab"],
				dayNamesMin:["Do","Lu","Ma","Mi","Ju","Vi","Sa"]
			});
			$( "#datepicker28_2" ).datepicker({
				showOn: "button",
				buttonImage: "images/ico_cal.gif",
				buttonImageOnly: true,
				dateFormat: 'dd/mm/yy',
				monthNames:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
				monthNamesShort:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],
				dayNames:["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado"],
				dayNamesShort:["Dom","Lun","Mar","Mie","Jue","Vie","Sab"],
				dayNamesMin:["Do","Lu","Ma","Mi","Ju","Vi","Sa"]
			});
		
		},
	html28adlistado:function(){
			$( "#datepicker28_3" ).datepicker({
				showOn: "button",
				buttonImage: "images/ico_cal.gif",
				buttonImageOnly: true,
				dateFormat: 'dd/mm/yy',
				monthNames:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
				monthNamesShort:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],
				dayNames:["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado"],
				dayNamesShort:["Dom","Lun","Mar","Mie","Jue","Vie","Sab"],
				dayNamesMin:["Do","Lu","Ma","Mi","Ju","Vi","Sa"]
			});
			$( "#datepicker28_4,#datepicker28_5" ).datepicker({
				showOn: "button",
				buttonImage: "images/ico_cal.gif",
				buttonImageOnly: true,
				dateFormat: 'dd/mm/yy',
				monthNames:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
				monthNamesShort:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],
				dayNames:["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado"],
				dayNamesShort:["Dom","Lun","Mar","Mie","Jue","Vie","Sab"],
				dayNamesMin:["Do","Lu","Ma","Mi","Ju","Vi","Sa"]
			});
	
		}
}
var carousel_backend = {
	load:function(){
		$('#car_backend').jcarousel();
		}
	
	}
var shooter = {
	funciones : function(){
		 if($('#slider').size()!=0)nivo.load();
		 if(($('#num_anos,#rp_rmin')).size()!=0)drag_slider.load();
		 if(($('#carousel')).size()!=0)carousel.load();
		 if(($('.thisacordeon')).size()!=0)acordeon.load();
		 if(($('ul.thisacordeon')).size()!=0)acordeon2.load();
		 if(($('.thistab')).size()!=0)tabs.load();
		 if(($('.lb_caller')).size()!=0)modalcaller.load();
		 if(($('#apisteps')).size()!=0)apisteps.load();
		 if(($('.wrap_dolarsol')).size()!=0)changemoney.load();
		 if(($('.blank_this')).size()!=0)inputblank.load();
		 if(($('#lb_dic')).size()!=0)lb_dicc.load();
		 if(($("#datepicker28_2")).size()!=0)call_calendar.html28listado();
		 if(($("#datepicker28_3")).size()!=0)call_calendar.html28adlistado();
		 if(($('#car_backend')).size()!=0)carousel_backend.load();		 
	}
}

$(document).ready(shooter.funciones);











