import { LoginComponent } from "./pages/ARcamera/ARcamera.component";
import { ListComponent } from "./pages/list/list.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "list", component: ListComponent }
];

export const navigatableComponents = [
  LoginComponent,
  ListComponent
];