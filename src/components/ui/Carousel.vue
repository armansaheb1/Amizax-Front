<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">UI elements /</span> Carousel
    </h4>

    <hr class="container-m-nx border-light mt-0">

    <h5 class="font-weight-bold pt-1 pb-1 mt-4 mb-4">Bootstrap carousel</h5>

    <b-carousel controls indicators :interval="4000">
      <b-carousel-slide
        caption="First slide"
        text="Eos mutat malis maluisset et, agam ancillae quo te, in vim congue pertinacia."
        :img-src="`${publicUrl}img/bg/1.jpg`" />
      <b-carousel-slide
        caption="Second slide"
        text="In numquam omittam sea."
        :img-src="`${publicUrl}img/bg/2.jpg`" />
      <b-carousel-slide
        caption="Third slide"
        text="Lorem ipsum dolor sit amet, virtute consequat ea qui, minim graeco mel no."
        :img-src="`${publicUrl}img/bg/3.jpg`" />
    </b-carousel>

    <hr class="container-m-nx border-light mt-5">

    <h5 class="font-weight-bold pt-1 pb-1 mt-4 mb-4">Vue Awesome Swiper</h5>

    <div class="demo-vertical-spacing w-100">
      <!-- Default -->
      <swiper class="swiper-container">
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
      </swiper>

      <!-- With arrows -->
      <swiper class="swiper-container" :options="swiperWithArrows">
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <div slot="button-prev" class="swiper-button-prev custom-icon"><i class="lnr lnr-chevron-left text-primary"></i></div>
        <div slot="button-next" class="swiper-button-next custom-icon"><i class="lnr lnr-chevron-right text-primary"></i></div>
      </swiper>

      <!-- With pagination -->
      <swiper class="swiper-container" :options="swiperWithPagination">
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
      </swiper>

      <!-- With fraction pagination -->
      <swiper class="swiper-container" :options="swiperWithFractionPagination">
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
      </swiper>

      <!-- With progress -->
      <swiper class="swiper-container" :options="swiperWithProgress">
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
        <div slot="button-prev" class="swiper-button-prev custom-icon"><i class="lnr lnr-chevron-left"></i></div>
        <div slot="button-next" class="swiper-button-next custom-icon"><i class="lnr lnr-chevron-right"></i></div>
      </swiper>

      <!-- With scrollbar -->
      <swiper class="swiper-container" :options="swiperWithScrollbar">
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <div slot="scrollbar" class="swiper-scrollbar"></div>
      </swiper>

      <!-- Vertical -->
      <swiper class="swiper-container" :options="verticalSwiper" id="swiper-vertical">
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
      </swiper>

      <!-- Multiple slides -->
      <swiper class="swiper-container" :options="swiperMultipleSlides">
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
      </swiper>

      <!-- Fade effect -->
      <swiper class="swiper-container" :options="swiperFadeEffect" id="swiper-fade-effect">
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <div slot="pagination" class="swiper-pagination swiper-pagination-white"></div>
        <div slot="button-prev" class="swiper-button-prev custom-icon"><i class="lnr lnr-chevron-left small"></i></div>
        <div slot="button-next" class="swiper-button-next custom-icon"><i class="lnr lnr-chevron-right small"></i></div>
      </swiper>

      <!-- 3D cube effect -->
      <swiper class="swiper-container" :options="swiper3dCubeEffect" id="swiper-3d-cube-effect">
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
      </swiper>

      <!-- 3D coverflow effect -->
      <swiper class="swiper-container" :options="swiper3dCoverflowEffect" id="swiper-3d-coverflow-effect">
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
      </swiper>

      <!-- 3D flip effect -->
      <swiper class="swiper-container" :options="swiper3dFlipEffect" id="swiper-3d-flip-effect">
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
        <div slot="button-prev" class="swiper-button-prev custom-icon"><i class="lnr lnr-chevron-left text-muted small"></i></div>
        <div slot="button-next" class="swiper-button-next custom-icon"><i class="lnr lnr-chevron-right text-muted small"></i></div>
      </swiper>
    </div>
  </div>
</template>

<style>
.swiper-container .swiper-slide {
  padding: 5rem 0;
  text-align: center;
  font-size: 1.5rem;
  background: #ecebed;
}

.dark-style .swiper-container .swiper-slide {
  background: #2f3237;
}

#swiper-vertical {
  max-height: 195px;
}

#swiper-3d-cube-effect {
  max-width: 300px;
}

#swiper-3d-coverflow-effect .swiper-slide {
  max-width: 300px;
}

#swiper-3d-flip-effect,
#swiper-3d-flip-effect .swiper-slide {
  max-width: 300px;
}

#swiper-3d-flip-effect {
  padding: 50px;
}
</style>
<style src="@/vendor/libs/vue-awesome-swiper/vue-awesome-swiper.scss" lang="scss"></style>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'ui-carousel',
  metaInfo: {
    title: 'Carousel - UI elements'
  },
  components: {
    Swiper,
    SwiperSlide
  },
  data: () => ({
    swiperWithArrows: {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    },

    swiperWithPagination: {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    },

    swiperWithFractionPagination: {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
      }
    },

    swiperWithProgress: {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    },

    swiperWithScrollbar: {
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: true
      }
    },

    verticalSwiper: {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    },

    swiperMultipleSlides: {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    },

    swiperFadeEffect: {
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    },

    swiper3dCubeEffect: {
      effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
      },
      pagination: {
        el: '.swiper-pagination'
      }
    },

    swiper3dCoverflowEffect: {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: '.swiper-pagination'
      }
    },

    swiper3dFlipEffect: {
      effect: 'flip',
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
  })
}
</script>
