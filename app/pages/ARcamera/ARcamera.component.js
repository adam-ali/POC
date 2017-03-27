"use strict";
var core_1 = require("@angular/core");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var camera = require("nativescript-camera");
var LoginComponent = (function () {
    function LoginComponent(router, userService, page) {
        this.router = router;
        this.userService = userService;
        this.page = page;
    }
    LoginComponent.prototype.ngOnInit = function () {
        camera.requestPermissions();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        templateUrl: "pages/ARcamera/ARcamera.html",
        styleUrls: ["pages/ARcamera/ARcamera-common.css", "pages/ARcamera/ARcamera.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService, page_1.Page])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVJjYW1lcmEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQVJjYW1lcmEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxzQ0FBeUU7QUFFekUsK0RBQTZEO0FBQzdELDBDQUF5QztBQUN6QyxnQ0FBK0I7QUFDL0IsNENBQThDO0FBUTlDLElBQWEsY0FBYztJQUV6Qix3QkFBb0IsTUFBYyxFQUFVLFdBQXdCLEVBQVUsSUFBVTtRQUFwRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO0lBQ3hGLENBQUM7SUFDRCxpQ0FBUSxHQUFSO1FBQ0UsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQVVILHFCQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQWhCWSxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1FBQ3hCLFdBQVcsRUFBRSw4QkFBOEI7UUFDM0MsU0FBUyxFQUFDLENBQUMsb0NBQW9DLEVBQUUsNkJBQTZCLENBQUM7S0FDaEYsQ0FBQztxQ0FHNEIsZUFBTSxFQUF1QiwwQkFBVyxFQUFnQixXQUFJO0dBRjdFLGNBQWMsQ0FnQjFCO0FBaEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjsgXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCAqIGFzIGNhbWVyYSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvQVJjYW1lcmEvQVJjYW1lcmEuaHRtbFwiLFxuICBzdHlsZVVybHM6W1wicGFnZXMvQVJjYW1lcmEvQVJjYW1lcmEtY29tbW9uLmNzc1wiLCBcInBhZ2VzL0FSY2FtZXJhL0FSY2FtZXJhLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSkge1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIGNhbWVyYS5yZXF1ZXN0UGVybWlzc2lvbnMoKTtcbiAgfVxuXG4gIC8vIGdvdG9DYW1lcmEoKSB7XG4gIC8vICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xpc3RcIl0pXG4gIC8vICAgY2FtZXJhLnRha2VQaWN0dXJlKCkudGhlbihyZXN1bHQgPT4ge1xuICAvLyAgIC8vIHJlc3VsdCBpcyBJbWFnZVNvdXJjZVxuICAvLyAgIH0pO1xuICAvLyB9XG4gICAgXG5cbn1cbiJdfQ==