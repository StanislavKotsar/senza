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
ListComponent = __decorate([
    core_1.Component({
        selector: "list-app",
        templateUrl: "pages/list_page/list_page.html",
        styleUrls: ["pages/list_page/list_page.css"],
    }),
    __metadata("design:paramtypes", [page_1.Page, frame_1.Frame, router_1.Router])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdF9wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3RfcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsZ0NBQStCO0FBRS9CLDBDQUF5QztBQUV6QyxrQ0FBeUM7QUFZekMsSUFBYSxhQUFhO0lBS3hCLHVCQUFvQixJQUFVLEVBQVUsS0FBWSxFQUFTLE1BQWM7UUFBdkQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU87UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSjNFLFNBQUksR0FBUTtZQUNWLEVBQUU7U0FDSCxDQUFDO0lBRTJFLENBQUM7SUFDMUUsZ0NBQVEsR0FBUjtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0QsRUFBRSxDQUFDLENBQUMsZUFBTyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLGFBQWEsR0FBRyxlQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztZQUMzRCxhQUFhLENBQUMsK0JBQStCLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQy9GLGFBQWEsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzVDLENBQUM7SUFDSCxDQUFDO0lBQ0QsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBSUgsb0JBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJZLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxnQ0FBZ0M7UUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7S0FDN0MsQ0FBQztxQ0FPMEIsV0FBSSxFQUFpQixhQUFLLEVBQWlCLGVBQU07R0FMaEUsYUFBYSxDQW9CekI7QUFwQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyB0b3Btb3N0LEZyYW1lIH0gZnJvbSBcInVpL2ZyYW1lXCI7XG5pbXBvcnQgeyBpc0lPUyB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0IHsgV3JhcExheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL3dyYXAtbGF5b3V0XCI7XG5kZWNsYXJlIHZhciBVSUltYWdlOiBhbnk7XG5kZWNsYXJlIHZhciBVSUJhck1ldHJpY3M6IGFueTtcbmRlY2xhcmUgdmFyIGNvbnRyb2xsZXI6IGFueTtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaXN0LWFwcFwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9saXN0X3BhZ2UvbGlzdF9wYWdlLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9saXN0X3BhZ2UvbGlzdF9wYWdlLmNzc1wiXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBkYXRhOlt7fV0gPSBbXG4gICAge31cbiAgXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgZnJhbWU6IEZyYW1lLHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpe31cbiAgICAgIG5nT25Jbml0KCl7XG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhci5uYXZpZ2F0aW9uQnV0dG9uLnZpc2liaWxpdHkgPSBcImNvbGxhcHNlXCI7XG4gICAgaWYgKHRvcG1vc3QoKS5pb3MpIHtcbiAgICAgIHZhciBuYXZpZ2F0aW9uQmFyID0gdG9wbW9zdCgpLmlvcy5jb250cm9sbGVyLm5hdmlnYXRpb25CYXI7XG4gICAgICBuYXZpZ2F0aW9uQmFyLnNldEJhY2tncm91bmRJbWFnZUZvckJhck1ldHJpY3MoVUlJbWFnZS5uZXcoKSwgVUlCYXJNZXRyaWNzLlVJQmFyTWV0cmljc0RlZmF1bHQpO1xuICAgICAgbmF2aWdhdGlvbkJhci5zaGFkb3dJbWFnZSA9IFVJSW1hZ2UubmV3KCk7XG4gICAgfVxuICB9XG4gIG5leHRQYWdlKCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2l0ZW1cIl0pO1xuICB9XG5cblxuXG59Il19