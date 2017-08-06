"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var color_1 = require("color");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(page, router) {
        this.page = page;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        var passwordTextfield = this.page.getViewById("tpassword");
        console.log(passwordTextfield);
        passwordTextfield.borderBottomWidth = 1;
        passwordTextfield.borderBottomColor = new color_1.Color("#434343");
        var emailTextfield = this.page.getViewById("temail");
        emailTextfield.borderBottomWidth = 1;
        emailTextfield.borderBottomColor = new color_1.Color("#434343");
    };
    LoginComponent.prototype.nextPage = function () {
        this.router.navigate(["list"]);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "login-app",
        templateUrl: "pages/login_page/login_page.html",
        styleUrls: ["pages/login_page/login_page.css"],
    }),
    __metadata("design:paramtypes", [page_1.Page, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5fcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbl9wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSxnQ0FBK0I7QUFDL0IsK0JBQThCO0FBQzlCLDBDQUF5QztBQU16QyxJQUFhLGNBQWM7SUFFdkIsd0JBQW9CLElBQVUsRUFBVSxNQUFjO1FBQWxDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUUsQ0FBQztJQUV6RCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksaUJBQWlCLEdBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMvQixpQkFBaUIsQ0FBQyxpQkFBaUIsR0FBRSxDQUFDLENBQUM7UUFDdkMsaUJBQWlCLENBQUMsaUJBQWlCLEdBQUUsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUQsSUFBSSxjQUFjLEdBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xFLGNBQWMsQ0FBQyxpQkFBaUIsR0FBRSxDQUFDLENBQUM7UUFDcEMsY0FBYyxDQUFDLGlCQUFpQixHQUFFLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUFsQkQsSUFrQkM7QUFsQlksY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLGtDQUFrQztRQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztLQUMvQyxDQUFDO3FDQUc0QixXQUFJLEVBQWtCLGVBQU07R0FGN0MsY0FBYyxDQWtCMUI7QUFsQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibG9naW4tYXBwXCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xvZ2luX3BhZ2UvbG9naW5fcGFnZS5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW5fcGFnZS9sb2dpbl9wYWdlLmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKXt9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICBsZXQgcGFzc3dvcmRUZXh0ZmllbGQgPSAgPFRleHRGaWVsZD4gdGhpcy5wYWdlLmdldFZpZXdCeUlkKFwidHBhc3N3b3JkXCIpO1xuICAgICAgY29uc29sZS5sb2cocGFzc3dvcmRUZXh0ZmllbGQpO1xuICAgICAgcGFzc3dvcmRUZXh0ZmllbGQuYm9yZGVyQm90dG9tV2lkdGg9IDE7XG4gICAgICBwYXNzd29yZFRleHRmaWVsZC5ib3JkZXJCb3R0b21Db2xvcj0gbmV3IENvbG9yKFwiIzQzNDM0M1wiKTtcbiAgICAgIGxldCBlbWFpbFRleHRmaWVsZCA9ICA8VGV4dEZpZWxkPiB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoXCJ0ZW1haWxcIik7XG4gICAgICBlbWFpbFRleHRmaWVsZC5ib3JkZXJCb3R0b21XaWR0aD0gMTtcbiAgICAgIGVtYWlsVGV4dGZpZWxkLmJvcmRlckJvdHRvbUNvbG9yPSBuZXcgQ29sb3IoXCIjNDM0MzQzXCIpO1xuICAgIH1cblxuICAgIG5leHRQYWdlKCl7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJsaXN0XCJdKVxuICAgIH1cbn0iXX0=