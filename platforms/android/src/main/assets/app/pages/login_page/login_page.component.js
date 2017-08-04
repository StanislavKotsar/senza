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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5fcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbl9wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSxnQ0FBK0I7QUFDL0IsK0JBQThCO0FBQzlCLDBDQUF5QztBQU16QyxJQUFhLGNBQWM7SUFFdkIsd0JBQW9CLElBQVUsRUFBVSxNQUFjO1FBQWxDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUUsQ0FBQztJQUV6RCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksaUJBQWlCLEdBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hFLGlCQUFpQixDQUFDLGlCQUFpQixHQUFFLENBQUMsQ0FBQztRQUN2QyxpQkFBaUIsQ0FBQyxpQkFBaUIsR0FBRSxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxRCxJQUFJLGNBQWMsR0FBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEUsY0FBYyxDQUFDLGlCQUFpQixHQUFFLENBQUMsQ0FBQztRQUNwQyxjQUFjLENBQUMsaUJBQWlCLEdBQUUsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQztBQWpCWSxjQUFjO0lBTDFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsa0NBQWtDO1FBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO0tBQy9DLENBQUM7cUNBRzRCLFdBQUksRUFBa0IsZUFBTTtHQUY3QyxjQUFjLENBaUIxQjtBQWpCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsb2dpbi1hcHBcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbG9naW5fcGFnZS9sb2dpbl9wYWdlLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbl9wYWdlL2xvZ2luX3BhZ2UuY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpe31cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgIGxldCBwYXNzd29yZFRleHRmaWVsZCA9ICA8VGV4dEZpZWxkPiB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoXCJ0cGFzc3dvcmRcIik7XG4gICAgICBwYXNzd29yZFRleHRmaWVsZC5ib3JkZXJCb3R0b21XaWR0aD0gMTtcbiAgICAgIHBhc3N3b3JkVGV4dGZpZWxkLmJvcmRlckJvdHRvbUNvbG9yPSBuZXcgQ29sb3IoXCIjNDM0MzQzXCIpO1xuICAgICAgbGV0IGVtYWlsVGV4dGZpZWxkID0gIDxUZXh0RmllbGQ+IHRoaXMucGFnZS5nZXRWaWV3QnlJZChcInRlbWFpbFwiKTtcbiAgICAgIGVtYWlsVGV4dGZpZWxkLmJvcmRlckJvdHRvbVdpZHRoPSAxO1xuICAgICAgZW1haWxUZXh0ZmllbGQuYm9yZGVyQm90dG9tQ29sb3I9IG5ldyBDb2xvcihcIiM0MzQzNDNcIik7XG4gICAgfVxuXG4gICAgbmV4dFBhZ2UoKXtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImxpc3RcIl0pXG4gICAgfVxufSJdfQ==