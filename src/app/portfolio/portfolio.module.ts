import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PortfolioRoutingModule } from "./portfolio.routes";
import { VivaComponent } from "./viva/viva.component";
import { WorldVisionComponent } from "./world-vision/world-vision.component";
import { WasteComponent } from "./waste/waste.component";
import { ErebuniYerevanComponent } from "./erebuni-yerevan/erebuni-yerevan.component";
import { SelfupComponent } from "./selfup/selfup.component";
import { VisaComponent } from "./visa/visa.component";
import { RouterModule } from "@angular/router";
import { PortfolioComponent } from "./portfolio.component";
@NgModule({
  imports: [CommonModule, PortfolioRoutingModule],
  declarations: [
    PortfolioComponent,
    VivaComponent,
    WorldVisionComponent,
    WasteComponent,
    ErebuniYerevanComponent,
    SelfupComponent,
    VisaComponent,
  ],
})
export class PortfolioPageModule {}
