"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var color_1 = require("color");
var LoginComponent = (function () {
    function LoginComponent(page) {
        this.page = page;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var passwordTextfield = this.page.getViewById("tpassword");
        passwordTextfield.borderBottomWidth = 1;
        passwordTextfield.borderBottomColor = new color_1.Color("#434343");
        var emailTextfield = this.page.getViewById("temail");
        emailTextfield.borderBottomWidth = 1;
        emailTextfield.borderBottomColor = new color_1.Color("#434343");
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "login-app",
        templateUrl: "pages/login_page/login_page.html",
        styleUrls: ["pages/login_page/login_page.css"],
    }),
    __metadata("design:paramtypes", [page_1.Page])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5fcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luX3BhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFFekUsZ0NBQStCO0FBQy9CLCtCQUE4QjtBQU05QixJQUFhLGNBQWM7SUFFdkIsd0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUUsQ0FBQztJQUVqQyxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxpQkFBaUIsR0FBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEUsaUJBQWlCLENBQUMsaUJBQWlCLEdBQUUsQ0FBQyxDQUFDO1FBQ3ZDLGlCQUFpQixDQUFDLGlCQUFpQixHQUFFLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFELElBQUksY0FBYyxHQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRSxjQUFjLENBQUMsaUJBQWlCLEdBQUUsQ0FBQyxDQUFDO1FBQ3BDLGNBQWMsQ0FBQyxpQkFBaUIsR0FBRSxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLGNBQWM7SUFMMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSxrQ0FBa0M7UUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7S0FDL0MsQ0FBQztxQ0FHNEIsV0FBSTtHQUZyQixjQUFjLENBWTFCO0FBWlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibG9naW4tYXBwXCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xvZ2luX3BhZ2UvbG9naW5fcGFnZS5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW5fcGFnZS9sb2dpbl9wYWdlLmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKXt9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgbGV0IHBhc3N3b3JkVGV4dGZpZWxkID0gIDxUZXh0RmllbGQ+IHRoaXMucGFnZS5nZXRWaWV3QnlJZChcInRwYXNzd29yZFwiKTtcbiAgICAgIHBhc3N3b3JkVGV4dGZpZWxkLmJvcmRlckJvdHRvbVdpZHRoPSAxO1xuICAgICAgcGFzc3dvcmRUZXh0ZmllbGQuYm9yZGVyQm90dG9tQ29sb3I9IG5ldyBDb2xvcihcIiM0MzQzNDNcIik7XG4gICAgICBsZXQgZW1haWxUZXh0ZmllbGQgPSAgPFRleHRGaWVsZD4gdGhpcy5wYWdlLmdldFZpZXdCeUlkKFwidGVtYWlsXCIpO1xuICAgICAgZW1haWxUZXh0ZmllbGQuYm9yZGVyQm90dG9tV2lkdGg9IDE7XG4gICAgICBlbWFpbFRleHRmaWVsZC5ib3JkZXJCb3R0b21Db2xvcj0gbmV3IENvbG9yKFwiIzQzNDM0M1wiKTtcbiAgICB9XG59Il19