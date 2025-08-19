const fest_btn = document.querySelector(".fest-btn");
const img = document.querySelector(".img-fest");

function syncButtonHeight() {
  const blockHeight = img.clientHeight;
  fest_btn.style.height = blockHeight * 0.02 + "%";
}

syncButtonHeight();

window.addEventListener("resize", syncButtonHeight);

function updateIconsSize() {
  const icons_fon_list = document.querySelectorAll(".icons-fon");
  icons_fon_list.forEach((el) => {
    el.style.height = el.clientWidth + "px";
  });
}

updateIconsSize();

window.addEventListener("resize", updateIconsSize);

const images = document.querySelectorAll(".image");

images.forEach((img) => {
  img.addEventListener("click", () => {
    images.forEach((i) => i.classList.remove("active"));
    img.classList.add("active");
  });
});

function updateCaptionsPosition() {
  if (window.innerWidth <= 480) return;
  const images = document.querySelectorAll(".image");
  images.forEach((img) => {
    const caption = img.querySelector("span");
    if (!caption) return;

    const h = img.offsetHeight;
    caption.style.marginTop = h * 0.73 + "px";
  });
}

window.addEventListener("load", updateCaptionsPosition);
window.addEventListener("resize", updateCaptionsPosition);

images.forEach((img) => {
  img.addEventListener("click", () => {
    images.forEach((i) => i.classList.remove("active"));
    img.classList.add("active");
    updateCaptionsPosition();
  });
});

const pic_schedule = document.querySelector(".pic-schedule");
const date_btn = document.querySelector(".date-btn");
const place_btn = document.querySelector(".place-btn");

function heightPicSchedule() {
  if (window.innerWidth >= 480) return;
  pic_schedule.style.height = pic_schedule.clientWidth + "px";
}

heightPicSchedule();

window.addEventListener("resize", heightPicSchedule);

date_btn.addEventListener("click", () => {
  pic_schedule.style.backgroundImage = "url('static/img/schedule.JPEG')";
});

place_btn.addEventListener("click", () => {
  pic_schedule.style.backgroundImage = "url('static/img/place.PNG')";
});

window.addEventListener("load", () => {
  new Swiper(".swiper", {
    initialSlide: 3,
    centeredSlides: true,
    loop: true,
    observer: true,
    observerParents: true,
    speed: 900,
    grabCursor: true,
    allowTouchMove: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: -10,
      stretch: -45,
      depth: 90,
      modifier: 1,
      slideShadows: true,
    },
    mousewheel: {
      thresholdDelta: 50,
      sensitivity: 1,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });
  swiper.update();
});
