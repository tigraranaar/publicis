import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreativeComponent } from "./creative/creative.component";
import { DigitalComponent } from "./digital/digital.component";
import { EventComponent } from "./event/event.component";
import { MediaComponent } from "./media/media.component";
import { ServicesComponent } from "./services.component";
import { StrategyComponent } from "./strategy/strategy.component";

const routes: Routes = [
  {
    path: "",
    component: ServicesComponent,
  },
  {
    path: "creative",
    component: CreativeComponent,
  },
  {
    path: "digital",
    component: DigitalComponent,
  },
  {
    path: "event",
    component: EventComponent,
  },
  {
    path: "media",
    component: MediaComponent,
  },
  {
    path: "strategy",
    component: StrategyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
