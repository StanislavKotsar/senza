"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var LoadingPage = (function () {
    function LoadingPage(page, router) {
        this.page = page;
        this.router = router;
    }
    LoadingPage.prototype.ngOnInit = function () {
        this.page.style.backgroundImage = "res://loading_background";
        this.page.style.backgroundRepeat = "no-repeat";
        this.page.style.backgroundSize = "cover";
        this.page.actionBarHidden = true;
    };
    LoadingPage.prototype.nextPage = function () {
        this.router.navigate(["/login"]);
    };
    return LoadingPage;
}());
LoadingPage = __decorate([
    core_1.Component({
        selector: "loading-app",
        templateUrl: "pages/loading_page/loading_page.html",
        styleUrls: ["pages/loading_page/loading_page.css"],
    }),
    __metadata("design:paramtypes", [page_1.Page, router_1.Router])
], LoadingPage);
exports.LoadingPage = LoadingPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZ19wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvYWRpbmdfcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBOEQ7QUFDOUQsZ0NBQStCO0FBRS9CLDBDQUF5QztBQU96QyxJQUFhLFdBQVc7SUFDcEIscUJBQW9CLElBQVUsRUFBVSxNQUFjO1FBQWxDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUUsQ0FBQztJQUN6RCw4QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLDBCQUEwQixDQUFDO1FBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLFdBQVcsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLFdBQVc7SUFMdkIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFdBQVcsRUFBRSxzQ0FBc0M7UUFDbkQsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7S0FDbkQsQ0FBQztxQ0FFNEIsV0FBSSxFQUFrQixlQUFNO0dBRDdDLFdBQVcsQ0FZdkI7QUFaWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxvYWRpbmctYXBwXCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xvYWRpbmdfcGFnZS9sb2FkaW5nX3BhZ2UuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvYWRpbmdfcGFnZS9sb2FkaW5nX3BhZ2UuY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKXt9XG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5wYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwicmVzOi8vbG9hZGluZ19iYWNrZ3JvdW5kXCI7XG4gICAgICAgIHRoaXMucGFnZS5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gXCJuby1yZXBlYXRcIjtcbiAgICAgICAgdGhpcy5wYWdlLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJjb3ZlclwiO1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBuZXh0UGFnZSgpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pO1xuICAgIH1cbn0iXX0=