import { Component, OnInit } from "@angular/core";
import { SwiperConfig, SwiperConfigInterface } from "ngx-swiper-wrapper";
@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"],
})
export class ServicesComponent implements OnInit {
  constructor() {}

  public config_services1: SwiperConfigInterface = {
    a11y: { enabled: true },
    direction: "horizontal",
    slidesPerView: 5,
    keyboard: true,
    spaceBetween: 2,
    // navigation: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    // loop: true,
    // effect: "slide",
    // zoom: {
    //   maxRatio: 2,
    //   minRatio: 1,
    // },

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

  public isTextHide: boolean = true;

  toggleText() {
    this.isTextHide = !this.isTextHide;
  }

  ngOnInit(): void {}
}
