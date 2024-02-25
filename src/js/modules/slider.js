import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
function slider() {


    const swiper = new Swiper('.swiper-1', {
        // configure Swiper to use modules
        modules: [Navigation],
        // Optional parameters
        grabCursor: true,
        rewind: true,
        slidesPerView: "auto",
        // spaceBetween: 22,
        // direction: 'horizontal',

        navigation: {
            nextEl: '.offer-slider__arrow--right',
            prevEl: '.offer-slider__arrow--left',
        },
    }
    );

        let init = false;
        let swiper2;
        function swiperCard() {
          if (window.innerWidth <= 574) {
            if (!init) {
              init = true;
            const swiper2 = new Swiper('.swiper-2', {
                modules: [Navigation],
    
                slidesPerView: "auto",
                grabCursor: true,
                rewind: true,
    
    
                navigation: {
                    nextEl: '.about-slider__arrow--right',
                    prevEl: '.about-slider__arrow--left',
                },
            }
        );
            }
          } else if (init) {
            swiper2.destroy(true, true);
            init = false;
          }
        }
        swiperCard();
        window.addEventListener("resize", swiperCard);

   /*  const swiper2 = new Swiper('.swiper-2', {
        modules: [Navigation],

        slidesPerView: "auto",
        grabCursor: true,
        rewind: true,


        navigation: {
            nextEl: '.about-slider__arrow--right',
            prevEl: '.about-slider__arrow--left',
        },
    }
    );
 */



    const swiper3 = new Swiper('.swiper-3', {
        // configure Swiper to use modules
        modules: [Navigation],
        // Optional parameters
        slidesPerView: "auto",
        grabCursor: true,
        rewind: true,
        // spaceBetween: 22,
        // direction: 'horizontal',

        navigation: {
            nextEl: '.gallery-slider__arrow--right',
            prevEl: '.gallery-slider__arrow--left',
        },
    }
    );
    const swiper4 = new Swiper('.swiper-4', {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 10,
        rewind: true,
        grabCursor: true,
        navigation: {
            nextEl: '.events-slider__arrow--right',
            prevEl: '.events-slider__arrow--left',
        },
    }
    );
    const swiper5 = new Swiper('.swiper-5', {
        modules: [Navigation],
        slidesPerView: "auto",
        rewind: true,
        grabCursor: true,
        navigation: {
            nextEl: '.reviews__slider-arrow--right',
            prevEl: '.reviews__slider-arrow--left',
        },
    }
    );
}

export default slider;