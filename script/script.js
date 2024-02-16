(function($){
    const c_type1 ={
        init(){
            this.left_wrap();
            this.section1();
            this.section2();
        },
        left_wrap(){
            //네비게이션  각각 나타나게 할려면 어떻게 해야하는지 eq each함수 쓰는 법 다시 
            
            //메인메뉴 클릭시 서브 메뉴 나타남
            $('.main-btn').on({
                mouseenter(){
                    $('.sub').stop().slideDown(300);
                }
            })
            //서브메뉴 벗어나면 사ㄹㅏ짐
            $('.main-meum').on({
                mouseleave(){
                    $('.sub').stop().slideUp(300);
                }
            })
        },
        section1(){
            //메인슬라이드
            //1.변수 설정
            let cnt=0;
            let setId=0;
                        
            //2.메인슬라이드
            function mainSlide(){
                console.log(cnt);
                $('.slide-wrap').stop().animate({left:`${-100*cnt}%`},600,function(){
                    if(cnt>2) cnt=0;
                    $('.slide-wrap').stop().animate({left:`${-100*cnt}%`},0);
                })
            } 
            //3.다음카운트
            function nextCount(){
                cnt++;
                mainSlide();
            }
            //4.자동타이머함수
            function autoTimer(){
                setId=setInterval(nextCount,3000);
            }
            autoTimer();

        },
        section2(){
            //left
            //갤러리버튼 클릭시 
            $('.gallery-btn').on({
                click(){
                    $('.gallery-btn').addClass('on');
                    $('.notice-btn').addClass('on');
                    $('.gallery').show(0);
                    $('.notice').hide(0);
                }
            })

            //공지사항버튼 클릭시
            $('.notice-btn').on({
                click(){
                    $('.gallery-btn').removeClass('on');
                    $('.notice-btn').removeClass('on');
                    $('.gallery').hide(0);
                    $('.notice').show(0);
                }
            })
        }

    }
    c_type1.init();
})(jQuery);