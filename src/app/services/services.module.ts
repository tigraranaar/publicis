import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ServicesComponent } from "./services.component";
import { CreativeComponent } from "./creative/creative.component";
import { DigitalComponent } from "./digital/digital.component";
import { EventComponent } from "./event/event.component";
import { MediaComponent } from "./media/media.component";
import { StrategyComponent } from "./strategy/strategy.component";
import { ServicesRoutingModule } from "./services.routes";
import { SwiperModule } from "ngx-swiper-wrapper";

@NgModule({
  imports: [CommonModule, ServicesRoutingModule, SwiperModule],
  declarations: [
    ServicesComponent,
    CreativeComponent,
    DigitalComponent,
    EventComponent,
    MediaComponent,
    StrategyComponent,
  ],
})
export class ServicesPageModule {}
