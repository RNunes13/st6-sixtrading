export default function Swipers() {
  new Swiper(".swiper", {
    direction: "horizontal",
    slidesPerView: 1.2,
    spaceBetween: 28,
    navigation: {
      nextEl: ".swiper-button-next-methodology",
      prevEl: ".swiper-button-prev-methodology",
    },
    breakpoints: {
      768: {
        slidesPerView: 2.2,
        spaceBetween: 28,
      },
      1200: {
        slidesPerView: 3.2,
        spaceBetween: 32,
      },
    },
  });

  new Swiper(".swiper-ganhos", {
    direction: "horizontal",
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 2500, // Delay in milliseconds between slides. Adjust as needed.
      disableOnInteraction: false, // Autoplay will not stop on user interaction.
    },
    navigation: {
      nextEl: ".swiper-button-next-ganhos",
      prevEl: ".swiper-button-prev-ganhos",
    },
    slidesPerView: 1.3,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  new Swiper(".swiper-indicadores", {
    direction: "horizontal",
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 2500, // Delay in milliseconds between slides. Adjust as needed.
      disableOnInteraction: false, // Autoplay will not stop on user interaction.
    },
    navigation: {
      nextEl: ".swiper-button-next-indicadores",
      prevEl: ".swiper-button-prev-indicadores",
    },
    slidesPerView: 1.2,
    breakpoints: {
      1020: {
        slidesPerView: 1.5,
      },
    },
  });

  new Swiper(".swiper-estrategias", {
    direction: "horizontal",
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 2500, // Delay in milliseconds between slides. Adjust as needed.
      disableOnInteraction: false, // Autoplay will not stop on user interaction.
    },
    navigation: {
      nextEl: ".swiper-button-next-estrategias",
      prevEl: ".swiper-button-prev-estrategias",
    },
    slidesPerView: 1.2,
    breakpoints: {
      1020: {
        slidesPerView: 1.8,
      },
    },
  });
}
