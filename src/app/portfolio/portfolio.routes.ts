import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErebuniYerevanComponent } from "./erebuni-yerevan/erebuni-yerevan.component";
import { PortfolioComponent } from "./portfolio.component";
import { SelfupComponent } from "./selfup/selfup.component";
import { VisaComponent } from "./visa/visa.component";
import { VivaComponent } from "./viva/viva.component";
import { WasteComponent } from "./waste/waste.component";
import { WorldVisionComponent } from "./world-vision/world-vision.component";

const routes: Routes = [
  {
    path: "",
    component: PortfolioComponent,
  },
  {
    path: "erebuni",
    component: ErebuniYerevanComponent,
  },
  {
    path: "viva",
    component: VivaComponent,
  },
  {
    path: "visa",
    component: VisaComponent,
  },
  {
    path: "world-vision",
    component: WorldVisionComponent,
  },
  {
    path: "waste",
    component: WasteComponent,
  },
  {
    path: "selfup",
    component: SelfupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
