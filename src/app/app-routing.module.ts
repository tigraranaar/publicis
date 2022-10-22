import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "portfolio",
    loadChildren: () =>
      import("./portfolio/portfolio.module").then((m) => m.PortfolioPageModule),
  },
  {
    path: "services",
    loadChildren: () =>
      import("./services/services.module").then((m) => m.ServicesPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      anchorScrolling: "enabled",
      scrollPositionRestoration: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
