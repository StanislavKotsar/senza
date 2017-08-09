"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var frame_1 = require("ui/frame");
var ListComponent = (function () {
    function ListComponent(page, frame, router) {
        this.page = page;
        this.frame = frame;
        this.router = router;
        this.data = [
            {}
        ];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.page.actionBar.navigationButton.visibility = "collapse";
        if (frame_1.topmost().ios) {
            var navigationBar = frame_1.topmost().ios.controller.navigationBar;
            navigationBar.setBackgroundImageForBarMetrics(UIImage.new(), UIBarMetrics.UIBarMetricsDefault);
            navigationBar.shadowImage = UIImage.new();
        }
    };
    ListComponent.prototype.nextPage = function () {
        this.router.navigate(["/item"]);
    };
    return ListComponent;
}());
__decorate([
    core_1.ViewChild("test"),
    __metadata("design:type", core_1.ElementRef)
], ListComponent.prototype, "test", void 0);
ListComponent = __decorate([
    core_1.Component({
        selector: "list-app",
        templateUrl: "pages/list_page/list_page.html",
        styleUrls: ["pages/list_page/list_page.css"],
    }),
    __metadata("design:paramtypes", [page_1.Page, frame_1.Frame, router_1.Router])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdF9wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3RfcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsZ0NBQStCO0FBRS9CLDBDQUF5QztBQUV6QyxrQ0FBeUM7QUFrQnpDLElBQWEsYUFBYTtJQU14Qix1QkFBb0IsSUFBVSxFQUFVLEtBQVksRUFBUyxNQUFjO1FBQXZELFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUozRSxTQUFJLEdBQVE7WUFDVixFQUFFO1NBQ0gsQ0FBQztJQUUyRSxDQUFDO0lBQzFFLGdDQUFRLEdBQVI7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBRTdELEVBQUUsQ0FBQyxDQUFDLGVBQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxhQUFhLEdBQUcsZUFBTyxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7WUFDOUQsYUFBYSxDQUFDLCtCQUErQixDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUMvRixhQUFhLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN6QyxDQUFDO0lBQ0gsQ0FBQztJQUNELGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUlILG9CQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQztBQXJCb0I7SUFBbEIsZ0JBQVMsQ0FBQyxNQUFNLENBQUM7OEJBQU8saUJBQVU7MkNBQUM7QUFEekIsYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLGdDQUFnQztRQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztLQUM3QyxDQUFDO3FDQVEwQixXQUFJLEVBQWlCLGFBQUssRUFBaUIsZUFBTTtHQU5oRSxhQUFhLENBc0J6QjtBQXRCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgdG9wbW9zdCxGcmFtZSB9IGZyb20gXCJ1aS9mcmFtZVwiO1xuaW1wb3J0IHsgaXNJT1MgfSBmcm9tIFwicGxhdGZvcm1cIjtcbmltcG9ydCB7IFdyYXBMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy93cmFwLWxheW91dFwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcblxuXG5cblxuZGVjbGFyZSB2YXIgVUlJbWFnZTogYW55O1xuZGVjbGFyZSB2YXIgVUlCYXJNZXRyaWNzOiBhbnk7XG5kZWNsYXJlIHZhciBjb250cm9sbGVyOiBhbnk7XG5kZWNsYXJlIHZhciBDR1NpemVNYWtlOiBhbnk7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGlzdC1hcHBcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbGlzdF9wYWdlL2xpc3RfcGFnZS5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbGlzdF9wYWdlL2xpc3RfcGFnZS5jc3NcIl0sXG59KVxuXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgQFZpZXdDaGlsZChcInRlc3RcIikgdGVzdDogRWxlbWVudFJlZjtcbiAgZGF0YTpbe31dID0gW1xuICAgIHt9XG4gIF07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIGZyYW1lOiBGcmFtZSxwcml2YXRlIHJvdXRlcjogUm91dGVyKXt9XG4gICAgICBuZ09uSW5pdCgpe1xuICAgIHRoaXMucGFnZS5hY3Rpb25CYXIubmF2aWdhdGlvbkJ1dHRvbi52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiO1xuXG4gICAgaWYgKHRvcG1vc3QoKS5pb3MpIHtcbiAgICAgIHZhciBuYXZpZ2F0aW9uQmFyID0gdG9wbW9zdCgpLmlvcy5jb250cm9sbGVyLm5hdmlnYXRpb25CYXI7XG5cdFx0XHRuYXZpZ2F0aW9uQmFyLnNldEJhY2tncm91bmRJbWFnZUZvckJhck1ldHJpY3MoVUlJbWFnZS5uZXcoKSwgVUlCYXJNZXRyaWNzLlVJQmFyTWV0cmljc0RlZmF1bHQpO1xuXHRcdFx0bmF2aWdhdGlvbkJhci5zaGFkb3dJbWFnZSA9IFVJSW1hZ2UubmV3KCk7XG4gICAgfVxuICB9XG4gIG5leHRQYWdlKCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2l0ZW1cIl0pO1xuICB9XG5cblxuXG59Il19