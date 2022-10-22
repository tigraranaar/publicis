import { Component, HostListener, OnInit } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { filter } from "rxjs";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  isMenuOpen: boolean = false;

  openMenu() {
    this.isMenuOpen = true;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  @HostListener("window:scroll", ["$event"]) onScroll() {
    if (this.isMenuOpen) {
      this.closeMenu();
    }
  }
}
