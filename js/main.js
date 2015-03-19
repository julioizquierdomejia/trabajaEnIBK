/*Avoid `console` errors in browsers that lack a console.
 Developer:MPValdivia / Re: JCastro
 */
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {
        };
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}
var IE = (navigator.appVersion.indexOf("MSIE") >= 0);
var IE7 = (navigator.appVersion.indexOf("MSIE 7.") >= 0);
var IE8 = (navigator.appVersion.indexOf("MSIE 8.") >= 0);
var isiPad = navigator.userAgent.match(/iPad/i) != null;
var isAndroid = navigator.userAgent.match(/android/i) != null;
var isiPhone = (navigator.platform.indexOf("iPhone") != -1);
var isiPod = (navigator.platform.indexOf("iPod") != -1);
var isBlackberry = navigator.userAgent.match(/BlackBerry/i) != null;
var this_pantalla;
var pantallas;
var phonesPosition;

if ((IE8) || (IE7)) {
    $('body').addClass('ie8');
}
if (IE) {
    $('body').addClass('ie');
}

if ($.browser.mozilla) {
    $('body').addClass('firefox');
}
if ($.browser.webkit) {
    $('body').addClass('chrome');
}
if ($.browser.safari) {
    $('body').addClass('safari');
}
if ($.browser.opera) {
    $('body').addClass('opera');
}


function abrirPopup() {
    $('#modalLoguin').modal({opacity: 85});
}


var pantalla = {
    load: function() {
        function resizein() {
            pantallas = $(window).width();
            pantallasH = $(window).height();


            if (window.devicePixelRatio > 1) {
                $('body').addClass('ret');
            }

            /*alert(pantallas)*/

            $('.main_wrapper').css('visibility', 'visible');

            if (/*(isiPod==true)||(isiPhone==true)||(isAndroid==true)||(isBlackberry==true)&&*/(pantallas <= 640)) {
                this_pantalla = 'phones';
            }
            else if ((isiPad == true) || (isAndroid == true) || ((pantallas < 1024) && (pantallas > 640))) {
                this_pantalla = 'tablets';
            }
            else {
                this_pantalla = 'pc';
            }
            /*console.info(this_pantalla)*/
        }


        resizein();
        $(window).on('resize', function() {
            resizein();
        })
    }

}
var choose_css = {
    load: function() {
        var include
        if (this_pantalla == 'pc') {
            include = '<link href="css/main.css" rel="stylesheet" type="text/css" />';
        }
        else if (this_pantalla == 'tablets') {
            include = '<link href="css/tablet.css" rel="stylesheet" type="text/css" />';
        }
        else if (this_pantalla == 'phones') {
            include = '<link href="css/movil.css" rel="stylesheet" type="text/css" />';

        }

        $('head').append(include)

    }
}


var inputblank = {
    load: function() {

        var valor;
        $('.blank_this').each(function() {
            valor = $(this).attr('value');
            $(this).attr('list', valor);
        });
        $('.blank_this').each(function() {
            $(this).live({
                focusin: function() {
                    value = $(this).attr('value');
                    valor = $(this).attr('list');
                    $(this).addClass('colorblack');
                    if (value == valor) {
                        value = '';
                        $(this).attr('value', value);
                    }
                },
                focusout: function() {
                    value2 = $(this).attr('value');
                    if (value2 == '') {
                        $(this).removeClass('colorblack');
                        value2 = valor;
                        $(this).attr('value', value2);
                    }
                }
            });
        });

    }
}
var inputblanksearch = {
    load: function() {

        var valor;
        $('.blank_thissearch').each(function() {
            valor = $(this).attr('value');
            $(this).attr('list', valor);
        });
        $('.blank_thissearch').each(function() {
            $(this).live({
                focusin: function() {
                    value = $(this).attr('value');
                    valor = $(this).attr('list');
                    $(this).addClass('colorblack');
                    if (value == valor) {
                        value = '';
                        $(this).attr('value', value);
                    }
                },
                focusout: function() {
                    value2 = $(this).attr('value');
                    if (value2 == '') {
                        $(this).removeClass('colorblack');
                        value2 = valor;
                        $(this).attr('value', value2);
                    }
                }
            });
        });
    }
}
var nivo = {
    load: function() {

        $('#slider').nivoSlider({
            effect: 'sliceDownLeft',
            slices: 15,
            boxCols: 8,
            bowRows: 4,
            directionNav: true,
            animSpeed: 500,
            pauseTime: 8000,
            startSlide: 0
        });

    }

}

var mostrarSel = {
    load: function() {
		$('.styleselect').on('change', function(){
		var selectText = $(this).children('select').children('option:selected').text();
		$(this).children('span.listselect').html(selectText);
		});
		$('.styleselect').each(function(index,element){
		var selectText = $(element).children('select').children('option:selected').text();
		$(element).children('span.listselect').html(selectText);
		});
    }
}

var bannerHome = {
    load: function() {
        $('#banner-fade').bjqs({
            height      : 325,
            width       : 940,
            responsive  : true
          });

    }
}

var advanceSearch = {
    load: function() {

        $('.adv_search').live('click', function(e) {
            e.preventDefault();
            var doacordion = $(this).hasClass('active');
            if (doacordion == false) {
                $('.wrap_contavdsearch').slideDown(500, '', function() {
                });
                $('.wrap_searcher .searcher_in ul li.si_bot input').addClass('disabled').attr('disabled', 'disabled').css('cursor', 'not-allowed');
                $(this).addClass('active');
                $(this).prepend('<span>Cerrar </span>');

            } else {
                $('.wrap_contavdsearch').slideUp(500, '', function() {
                });
                $('.wrap_searcher .searcher_in ul li.si_bot input').removeClass('disabled').removeAttr('disabled').css('cursor', 'pointer');
                $(this).removeClass('active');
                $(this).children('span').remove();

            }
        })
    }

}
var thisdata;
var firstone = true;
var firstone2 = true;
var hccarousel = {
    load: function() {
        if (firstone) {
            thisdata = $('.hcarousel_in').html();
            firstone = false;
        }
    },
    getCarousel: function() {

        $('#hccarousel').jcarousel({scroll: 1, wrap: 'circular'});
        /*$('#hccarousel').jcarousel();*/

        if ((phonesPosition == 'portrait') && (this_pantalla == 'phones')) {
            $('.hcarousel_in').empty();
            $('.hcarousel_in').append(thisdata);
            $('#slider').data('nivoslider').stop();

        } else if ((phonesPosition == 'landscape') && (this_pantalla == 'tablets')) {
            $('.hcarousel_in').empty();
            $('.hcarousel_in').append(thisdata);
            $('#hccarousel').jcarousel({scroll: 1, auto: 4, wrap: 'circular'});
            if (firstone2) {
                /*alert('ft')*/
                nivo.load();
                firstone2 = false
            }
            else {
                $('#slider').data('nivoslider').play();
            }
        }

    }
}
var callLightbox = {
    load: function() {
        $('.this_lb').click(function() {
            var thisLB = $(this).attr('data-lb');
            $(thisLB).modal({opacity: 85});

        })
    }
}
var nav_open = {
    load: function() {
        var isopen = true;
        var time;
        var timed;

        $('.open_navtopin').bind({
            click: function() {
                clearTimeout(time);
                if ($('.navtop_in').css('display') == 'none') {
                    $('.navtop_in').slideDown(300);
                    $(this).addClass('active');
                }
                else if ($('.navtop_in').css('display') == 'block') {
                    time = setTimeout(function() {
                        $('.navtop_in').slideUp(300)
                    }, 100);
                    $(this).removeClass('active');
                }
            }

        })

        $('.nav_movil').bind({
            click: function(e) {
                e.stopPropagation();
                clearTimeout(time);
                if ($('nav.navtop').css('display') == 'none') {
                    $('nav.navtop').slideDown(300, function() {
                        $('.nav_movil').addClass('active');
                    });
                    if ($('.wrap_nav .login_box').css('display') == 'block') {
                        $('.wrap_nav .login_box').slideUp(0, function() {
                            $('.nav_user').removeClass('active');
                        })
                    }
                }
                else if ($('nav.navtop').css('display') == 'block') {
                    time = setTimeout(function() {
                        $('nav.navtop').slideUp(300, function() {
                            $('.nav_movil').removeClass('active');
                        })
                    }, 100);
                }
            }

        })
        
        $('.nav_user').bind({
            click: function(ev) {
                ev.stopPropagation();
                clearTimeout(timed);
                if ($('.wrap_nav .login_box').css('display') == 'none') {
                    $('.wrap_nav .login_box').slideDown(300, function() {
                        $('.nav_user').addClass('active');
                    });
                    if ($('nav.navtop').css('display') == 'block') {
                        $('nav.navtop').slideUp(0, function() {
                            $('.nav_movil').removeClass('active');
                        })
                    }
                }
                else if ($('.wrap_nav .login_box').css('display') == 'block') {
                    timed = setTimeout(function() {
                        $('.wrap_nav .login_box').slideUp(300, function() {
                            $('.nav_user').removeClass('active');
                        })
                    }, 100);
                }
            }

        })
		$('html').click(function() {
            time = setTimeout(function() {
                $('nav.navtop').slideUp(300, function() {
                    $('.nav_movil').removeClass('active');
                })
            }, 100);
            timed = setTimeout(function() {
                $('.wrap_nav .login_box').slideUp(0, function() {
                    $('.nav_user').removeClass('active');
                })
            }, 100);

        });
        $('.wrap_nav nav.navtop,nav.navtop ul li ul li,.wrap_nav .nolog ul li').click(function(e) {
            e.stopPropagation();

        })
        $('nav.navtop ul li').bind({
            click: function() {

                if ($(this).children('ul.second_level').css('display') == 'none') {
                    $(this).children('ul.second_level').slideDown(300, function() {
                        $(this).parent('li').addClass('active');
                    });
                }
                else if ($(this).children('ul.second_level').css('display') == 'block') {
                    $(this).children('ul.second_level').slideUp(300, function() {
                        $(this).parent('li').removeClass('active');
                    });
                }
            }

        })



        $('.nav_activater').on('click', function() {
            pantalla.load();
            if (isopen) {
                $(this).next('ul').css('display', 'block');
                $('header').css('z-index', 1002);
                isopen = false;
            } else {
                $(this).next('ul').css('display', 'none');
                $('header').css('z-index', 1000);
                isopen = true
            }

        })

    }
}

var openMenuLogin = {
    load: function() {
        var Visible = false;
        $('.loginfull .arrow_sublogueado ').click(function() {
            if ($('.loginfull ul.sub_logueado').css('display') == 'none') {
                $('.loginfull ul.sub_logueado').show();
                Visible = true;
            } else if ($('.loginfull ul.sub_logueado').css('display') == 'block') {
                $('.loginfull ul.sub_logueado').hide();
                Visible = false;

            }
			
        }) 
        var time;
		$('html').click(function() {
				time = setTimeout(function() {
					$('.loginfull ul.sub_logueado').slideUp(300, function() {
						Visible = false;
					})
				}, 100);
        	});
			$('.loginfull ul.sub_logueado li,.loginfull .arrow_sublogueado').click(function(e) {
            	e.stopPropagation();
				 clearTimeout(time);
			});


    }
}

var FaqTabCarousel = {
    load: function() {
        var counterfinal;
        var activeleft = false;
        var counter = 0;
        var showingViewport = 2;
        var lisize;
        lisize = $('ul#movetab li').width();
        console.info(lisize)
        var countli = $('ul#movetab li').size();
        ulSize = lisize * countli;
        $('#movetab').css('width', ulSize);
        $('.navizq a').addClass('stopper');

        $('.navizq a').click(function(e) {
            e.preventDefault();
            if (showingViewport > 2) {
                showingViewport--
                counterfinal = countli - counter
                $('#movetab').animate({left: '+=' + lisize})
                console.info(showingViewport);
                $('.navdere a').removeClass('stopper')
                if (showingViewport == 2)
                    $('.navizq a').addClass('stopper');
            }

        })
        $('.navdere a').click(function(e) {
            e.preventDefault();
            if ((showingViewport < countli)) {
                showingViewport++
                $('#movetab').animate({left: '-=' + lisize})
                console.info(showingViewport);
                $('.navizq a').removeClass('stopper')
                if (showingViewport == countli)
                    $('.navdere a').addClass('stopper');
            }
        })


    },
    tabs_in: function() {
        $('ul#movetab li a').click(function(e) {
            e.preventDefault();
        })
        $('ul#movetab li').click(function() {
            $('ul#movetab li').removeClass('active');
            $(this).addClass('active');
            var getContent = $(this).attr('data-cf');
            /*if(IE8){
             $('.contenfaq_in').hide();
             $(getContent).show();
             }else*/{
                $('.contenfaq_in').fadeOut(0, function() {
                });
                $(getContent).fadeIn(250);
            }
        })
    }

}
var apisteps = {
    load: function() {
        var doc = document.documentElement;
        $(window).scroll(function() {
            var scrollPos = (window.pageYOffset || doc.scrollTop);
            if (scrollPos >= 85) {
                $('.head_fixed').addClass('posfixed')

            } else {
                $('.head_fixed').removeClass('posfixed')
            }

        })
    }
}
var calendar = {
    load: function() {
        $("#calendar").datepicker({
            defaultDate: "-35y",
            maxDate: "+35Y",
            changeYear: true,
            dateFormat: 'dd/mm/yy',
            showOn: "button",
            buttonImage: "images/icon_calendar.gif",
            buttonImageOnly: true,
            monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            dayNames: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"],
            dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
            dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"]
        });

    }

}
var newExpLab = {
    load: function() {
        $('.barTitu a').click(function(e) {
            e.preventDefault();

            if ($(this).parent().next('.newExpLab').css('display') == 'none') {
                $(this).parent().next('.newExpLab').slideDown();
                $(this).addClass('active');
                Visible = true;
            } else if ($(this).parent().next('.newExpLab').css('display') == 'block') {
                $(this).parent().next('.newExpLab').slideUp();
                $(this).removeClass('active');
                Visible = false;

            }
        })
    }

}

var showMenu = {
    load: function() {
        var times;
        /*console.log(this_pantalla)*/
	if (this_pantalla === 'pc') {
        $('.wrap_nav nav.navtop ul li').on({
            mouseenter: function() {
                clearTimeout(times);
                $('.blank_thissearch').blur();
                $(".navtop").focus();

                if ($(this).children('ul.second_level').css('display') == 'none') {
                    $(this).children('ul.second_level').slideDown(0, function() {
                        /*
                         if(IE8){
                         $(this).children('li').css({opacity:1});
                         } else{
                         $(this).children('li').animate({opacity:1}, 190);
                         
                         } */


                        if (IE8) {
                            if ($(this).children('ul.second_level').css('display') == 'block')
                                ;
                        }

                    });
                }
            },
            mouseleave: function(ev) {
                var ev = $(this);
                if ($(this).children('ul.second_level').css('display') == 'block') {
                    /*times = setTimeout(function(){*/
                    $(this).children('ul.second_level').slideUp(20, function() {
                        /*
                         if(IE8){
                         $(this).children('li').css({opacity:0});
                         }else{
                         $(this).children('li').animate({opacity:0}, 200);
                         }
                         */
                        if (IE8) {
                            if ($(this).children('ul.second_level').css('display') == 'none')
                                ;
                        }

                    })
                    /*},200);*/
                }


            }

        })
	  }
	  if (this_pantalla === 'tablets') {
			$('.wrap_nav nav.navtop ul li').bind({
				click: function() {
					clearTimeout(times);
					$('.blank_thissearch').blur();
					$(".navtop").focus();
	
					if ($(this).children('ul.second_level').css('display') === 'none') {
						$('ul.second_level').css('display','none');
						$('.wrap_nav nav.navtop ul li').removeClass('on');
						$(this).addClass('on');
						$(this).children('ul.second_level').slideDown(300, function() {});
					}else if ($(this).children('ul.second_level').css('display') === 'block') {
						$('.wrap_nav nav.navtop ul li').removeAttr('class');
						$(this).children('ul.second_level').slideUp(300, function() {});
					}
				}
			})
	   }
    }
}
var catchHeight = {
    load: function() {
        $('.modArt2,.modArt').each(function() {
            var gotHeight = $(this).height();
            $(this).css('height', gotHeight);

        })


    }

}
var MouseOverHome = {
    load: function() {
        if (this_pantalla == 'pc') {
            $('.callactions_in .upcv,.callactions_in .oplab,.callactions_in .alab').bind({
                mouseover: function() {

                    $(this).children('.callactions_overin').slideDown(300)
                    $(this).children('.callactions_overin_grey').slideDown(300)
                },
                mouseleave: function() {

                    $(this).children('.callactions_overin').slideUp(600)
                    $(this).children('.callactions_overin_grey').slideUp(400)
                }
            })
        }
    }
}

/*funciones temporales solo para mostrar lightbox para que los revise QA*/

if (($('#suscribirse1')).size() != 0) {
    ;
    function opensuscribete1() {
        $('#suscribirse1').modal({opacity: 85});
    }
}
if (($('#suscribirse2')).size() != 0) {
    function opensuscribete2() {
        $('#suscribirse2').modal({opacity: 85});
    }
}
if (($('#suscribirse3')).size() != 0) {
    ;
    function opensuscribete3() {
        $('#suscribirse3').modal({opacity: 85});
    }
}
if (($('#register1')).size() != 0) {
    ;
    function opensuscribete4() {
        $('#register1').modal({opacity: 85});
    }
}
if (($('#iniciachat')).size() != 0) {
    ;
    function opensuscribete5() {
        $('#iniciachat').modal({opacity: 85});
    }
}
;
/*FIN funciones temporales*/

var listaCompleteHome = {
    load: function() {
        var tagsTrabajo = [
            "Administración",
            "Secretaria",
            "Comunicadora",
            "Enfermera",
            "Abogada",
            "Desarrollador"
        ];
        $("#buscar_trabajo").autocomplete({
            source: tagsTrabajo
        });
    }
};

var listaCompleteAdvance = {
    load: function() {
        var tagsLocalidad = [
            "San Isidro",
            "Lima"
        ];

        $("#buscar_localidad").autocomplete({
            source: tagsLocalidad
        });

        var tagsCarrera = [
            "Administración",
            "Marketing"
        ];

        function split(val) {
            return val.split(/,\s*/);
        }
        function extractLast(term) {
            return split(term).pop();
        }

        $("#buscar_carrera").bind("keydown", function(event) {
            if (event.keyCode === $.ui.keyCode.TAB &&
                $(this).data("ui-autocomplete").menu.active) {
                event.preventDefault();
            }
        }).autocomplete({
            minLength: 0,
            source: function(request, response) {
                // delegate back to autocomplete, but extract the last term
                response($.ui.autocomplete.filter(
                        tagsCarrera, extractLast(request.term)));
            },
            focus: function() {
                // prevent value inserted on focus
                return false;
            },
            select: function(event, ui) {
                var terms = split(this.value);
                // remove the current input
                terms.pop();
                // add the selected item
                terms.push(ui.item.value);
                // add placeholder to get the comma-and-space at the end
                terms.push("");
                this.value = terms.join(", ");
                return false;
            }
        });

    }
};

var listaCompleteRegistro = {
    load: function() {
        var tagsPais = [
            "Argentina",
            "Alemania",
            "Berlín",
            "Bolivia",
            "Brasil",
            "Perú"
        ];
        $("#buscar_pais").autocomplete({
            source: tagsPais
        });
    }
};

var counterphones = false;
var countertablets = false;
var shooter = {
    funciones: function() {
		
        pantalla.load();
        if (this_pantalla == 'pc') {
            apisteps.load();
            if (($('.callactions_in')).size() != 0)
                MouseOverHome.load();
        }
        if (($('#hccarousel')).size() != 0)
            hccarousel.load();
        if ((this_pantalla == 'pc') || (this_pantalla == 'tablets')) {
            showMenu.load();
            if ($('#slider').size() != 0)
                nivo.load();
            
            if ($('#banner-fade').size() != 0)
                bannerHome.load();
            
            if (($('.adv_search')).size() != 0)
                advanceSearch.load();
            if (($('#hccarousel')).size() != 0)
                hccarousel.getCarousel();
            if (($('.this_lb')).size() != 0)
                callLightbox.load();
            if (($('.wrap_nav .loginfull')).size() != 0)
                openMenuLogin.load();
				
			if ($('.styleselect').size() != 0)
                mostrarSel.load();
        }
        if (this_pantalla == 'phones') {
            if(counterphones == false){
             	 nav_open.load();
				 counterphones = true
			  }
            if ($('ul#movetab').size() != 0)
                FaqTabCarousel.load();
        }
        if ($('.modArt2').size() != 0)
            catchHeight.load()
        if ($('ul#movetab').size() != 0)
            FaqTabCarousel.tabs_in();
        if (($('.blank_this')).size() != 0)
            inputblank.load();
        if (($('.blank_thissearch')).size() != 0)
            inputblanksearch.load();
        if (($('#calendar')).size() != 0)
            calendar.load();
        if (($('.newExpLab')).size() != 0)
            newExpLab.load();

        if (($('#search-trabajo')).size() !== 0)
            listaCompleteHome.load();

        if (($('#search-avanzada')).size() !== 0)
            listaCompleteAdvance.load();
        
        if (($('#search-pais')).size() !== 0)
            listaCompleteRegistro.load();
			
		if ($('.styleselect').size() != 0)
                mostrarSel.load();

    }
};

$(document).ready(shooter.funciones);
if (IE == false) {
	
    window.addEventListener("orientationchange", function() {
      /*  alert(this_pantalla);*/
	  	
		pantalla.load();
        if ((window.orientation == 0) || (window.orientation == 180)) {
            phonesPosition = 'portrait';
        } else if ((window.orientation == 90) || (window.orientation == -90)) {
            phonesPosition = 'landscape';
        }
        
       	 hccarousel.getCarousel();
		 if ((this_pantalla == 'tablets')||(countertablets == false)) {
			 if ($('#slider').size() != 0){
				countertablets = true
                nivo.load();
			}
		 }
		 if (this_pantalla == 'phones') {
			 if(counterphones == false){
             	 nav_open.load();
				 counterphones = true
			  }
			  if ($('ul#movetab').size() != 0)FaqTabCarousel.load(); 
                $('.hcarousel_in').empty();
            	$('.hcarousel_in').append(thisdata);
            	$('#slider').data('nivoslider').stop();  
		 }


    }, false);

}

 $('.destacado_box').on({
     mouseenter: function () {
         $(this).find('.dest_text').stop(true).animate({ 'bottom': 0,'opacity':0.95 }, 400)
     },
     mouseleave: function () {
         $(this).find('.dest_text').stop(true).animate({ 'bottom': -160 ,'opacity':0}, 150)
     }
 });



 /* LOADING */

 function loadloading() {
     var heightTotal = $(window).height() + 1700;
     $(".procesandobg").css('height', heightTotal);
     $(".procesandobg").css('display', 'block');
     $(".procesando").fadeIn(500);
 }

 function closeloading() {
     $(".procesandobg").css('display', 'none');
     $(".procesando").css('display', 'none');
     $(".box_lightbox").css('display', 'none');
 }



    $('.link_sesion').on('click', function(){
       loadbox();
       $(".box_insesion").css('display', 'block');
    });

    $('.link_registrate').on('click', function(){
       loadbox();
       $(".box_registrate").css('display', 'block');
    });

    $('.link_terms').on('click', function(){
       loadbox();
       $(".box_terms").css('display', 'block');
    });

    $('.close_modal').on('click', function(){
        closeloading();
    });


 	function loadbox() {
     var heightTotal = $('body').height();
     $(".procesandobg").css('height', heightTotal);
     $(".procesandobg").css('display', 'block');
 	}

    $(document).keyup(function(event){
        if(event.which==27)
        {
            $(".procesandobg").css('display', 'none');
            $(".box_lightbox").css('display', 'none');
        }
    });  


 /*SCROLL BUSQUEDA AVANZADA */
 $( document ).ready(function() {
    $('.interes_scroll').slimscroll({
          alwaysVisible: true,
          railVisible: true,
          width: '270px'
        });

    $('.scroll_terms').slimscroll({
          alwaysVisible: true,
          railVisible: true,
          height: '300px'
        });

 });


 /* Z-INDEX YOUTUBE  */ 
 $('iframe').each(function(){
        var ifr_source = $(this).attr('src');
        var wmode = 'wmode=opaque';
        if(ifr_source.indexOf('?') != -1) {
            var getQString = ifr_source.split('?');
            var oldString = getQString[1];
            var newString = getQString[0];
            $(this).attr('src',newString+'?'+wmode+'&'+oldString);
        } else {
            $(this).attr('src',ifr_source+'?'+wmode);
        };
  });


/* INYECCIÓN HTML DESTACADOS  */
$(document).ready(function(){
    detectarTamanio();
    $(window).resize(detectarTamanio);
    
})

function detectarTamanio(){
    if ($(window).width() <= 641) {
            content = $("#callactions_fixed").clone();
            $(".wrap_callactions").remove();
            $("#callactions_new").append(content).addClass("add");
        }
        else {
                $("#callactions_new").removeClass("add");
                content = $("#callactions_fixed").clone();
                $("#callactions_fixed").remove();
                $("#contentSuper").append(content);
        }
}

