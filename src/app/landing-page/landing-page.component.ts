import { Component, OnInit } from "@angular/core";
import { SwiperConfig, SwiperConfigInterface } from "ngx-swiper-wrapper";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent implements OnInit {
  constructor() {}

  public config: SwiperConfigInterface = {
    a11y: { enabled: true },
    direction: "horizontal",
    keyboard: true,
    navigation: true,
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      reverseDirection: false,
      disableOnInteraction: false,
    },
    effect: "slide",
  };

  public config_services: SwiperConfigInterface = {
    a11y: { enabled: true },
    direction: "horizontal",
    slidesPerView: 5,
    keyboard: true,
    spaceBetween: 2,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1440: {
        slidesPerView: 5,
        pagination: false,
      },
    },
  };

  ngOnInit(): void {}
}
