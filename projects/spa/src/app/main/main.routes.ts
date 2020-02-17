import { Routes } from "@angular/router";
import { MainComponent } from "./main.component";
// import { Page1Component } from "page1/page1.component";

export const mainRoutes: Routes = [
  {
    path: "spa",
    children: [
      { path: "main", component: MainComponent }
      // {
      //   path: "",
      //   // canActivate: [AuthGuard],
      //   redirectTo: "dashboard",
      //   pathMatch: "full"
      // },
      // {
      //   path: "dashboard",
      //   loadChildren: () =>
      //     import("./dashboard/dashboard.module").then(d => d.DashboardModule)
      // }
    ]
  }
];
