"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var frame_1 = require("ui/frame");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var platformModule = require("tns-core-modules/platform");
var ListComponent = (function () {
    function ListComponent(page, frame, router, _changeDetectionRef) {
        this.page = page;
        this.frame = frame;
        this.router = router;
        this._changeDetectionRef = _changeDetectionRef;
        this.data = [
            {}
        ];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.height = platformModule.screen.mainScreen.heightPixels;
        this.width = platformModule.screen.mainScreen.widthPixels;
        console.log(this.height);
        this.page.actionBar.navigationButton.visibility = "collapse";
        this.page.actionBarHidden = true;
        if (frame_1.topmost().ios) {
            var navigationBar = frame_1.topmost().ios.controller.navigationBar;
            navigationBar.setBackgroundImageForBarMetrics(UIImage.new(), UIBarMetrics.UIBarMetricsDefault);
            navigationBar.shadowImage = UIImage.new();
        }
    };
    ListComponent.prototype.ngAfterViewInit = function () {
        this._drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    ListComponent.prototype.nextPage = function () {
        this.router.navigate(["/item"]);
    };
    ListComponent.prototype.toggle = function () {
        this._drawer.toggleDrawerState();
        this._changeDetectionRef.detectChanges();
    };
    ListComponent.prototype.enterAccount = function () {
        this.router.navigate(["/account"]);
    };
    ListComponent.prototype.enterFeedback = function () {
        this.router.navigate(["/feedback"]);
    };
    return ListComponent;
}());
__decorate([
    core_1.ViewChild("test"),
    __metadata("design:type", core_1.ElementRef)
], ListComponent.prototype, "test", void 0);
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], ListComponent.prototype, "drawerComponent", void 0);
ListComponent = __decorate([
    core_1.Component({
        selector: "list-app",
        templateUrl: "pages/list_page/list_page.html",
        styleUrls: ["pages/list_page/list_page.css"],
    }),
    __metadata("design:paramtypes", [page_1.Page, frame_1.Frame, router_1.Router, core_1.ChangeDetectorRef])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdF9wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3RfcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0g7QUFDbEgsZ0NBQStCO0FBRS9CLDBDQUF5QztBQUV6QyxrQ0FBeUM7QUFJekMsc0VBQW9HO0FBRXBHLDBEQUE0RDtBQWE1RCxJQUFhLGFBQWE7SUFXeEIsdUJBQW9CLElBQVUsRUFBVSxLQUFZLEVBQVMsTUFBYyxFQUFVLG1CQUFzQztRQUF2RyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO1FBUjNILFNBQUksR0FBUTtZQUNWLEVBQUU7U0FDSCxDQUFDO0lBTTJILENBQUM7SUFDMUgsZ0NBQVEsR0FBUjtRQUdDLElBQUksQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQzVELElBQUksQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLGVBQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxhQUFhLEdBQUcsZUFBTyxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7WUFDOUQsYUFBYSxDQUFDLCtCQUErQixDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUMvRixhQUFhLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN6QyxDQUFDO0lBQ0gsQ0FBQztJQUVELHVDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO1FBQy9DLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUgsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVELG9DQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHFDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVILG9CQUFDO0FBQUQsQ0FBQyxBQWpERCxJQWlEQztBQWhEb0I7SUFBbEIsZ0JBQVMsQ0FBQyxNQUFNLENBQUM7OEJBQU8saUJBQVU7MkNBQUM7QUFDRDtJQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDOzhCQUF5QixnQ0FBc0I7c0RBQUM7QUFGdkUsYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLGdDQUFnQztRQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztLQUM3QyxDQUFDO3FDQWEwQixXQUFJLEVBQWlCLGFBQUssRUFBaUIsZUFBTSxFQUErQix3QkFBaUI7R0FYaEgsYUFBYSxDQWlEekI7QUFqRFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgSW5qZWN0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgdG9wbW9zdCxGcmFtZSB9IGZyb20gXCJ1aS9mcmFtZVwiO1xuaW1wb3J0IHsgaXNJT1MgfSBmcm9tIFwicGxhdGZvcm1cIjtcbmltcG9ydCB7IFdyYXBMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy93cmFwLWxheW91dFwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IFNpZGVEcmF3ZXJUeXBlLCBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciwgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyJztcbmltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5cblxuZGVjbGFyZSB2YXIgVUlJbWFnZTogYW55O1xuZGVjbGFyZSB2YXIgVUlCYXJNZXRyaWNzOiBhbnk7XG5kZWNsYXJlIHZhciBjb250cm9sbGVyOiBhbnk7XG5kZWNsYXJlIHZhciBDR1NpemVNYWtlOiBhbnk7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGlzdC1hcHBcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbGlzdF9wYWdlL2xpc3RfcGFnZS5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbGlzdF9wYWdlL2xpc3RfcGFnZS5jc3NcIl0sXG59KVxuXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgQFZpZXdDaGlsZChcInRlc3RcIikgdGVzdDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICBkYXRhOlt7fV0gPSBbXG4gICAge31cbiAgXTtcbiAgaGVpZ2h0O1xuICB3aWR0aDtcbiAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xuICBwcml2YXRlIF9kcmF3ZXI6IFNpZGVEcmF3ZXJUeXBlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBmcmFtZTogRnJhbWUscHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZil7fVxuICAgICAgbmdPbkluaXQoKXtcbiAgICAgICAgXG5cbiAgICAgICB0aGlzLmhlaWdodCA9IHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLmhlaWdodFBpeGVsczsgXG4gICAgICAgdGhpcy53aWR0aCA9IHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzO1xuICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaGVpZ2h0KTsgIFxuICAgIHRoaXMucGFnZS5hY3Rpb25CYXIubmF2aWdhdGlvbkJ1dHRvbi52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiO1xudGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgaWYgKHRvcG1vc3QoKS5pb3MpIHtcbiAgICAgIHZhciBuYXZpZ2F0aW9uQmFyID0gdG9wbW9zdCgpLmlvcy5jb250cm9sbGVyLm5hdmlnYXRpb25CYXI7XG5cdFx0XHRuYXZpZ2F0aW9uQmFyLnNldEJhY2tncm91bmRJbWFnZUZvckJhck1ldHJpY3MoVUlJbWFnZS5uZXcoKSwgVUlCYXJNZXRyaWNzLlVJQmFyTWV0cmljc0RlZmF1bHQpO1xuXHRcdFx0bmF2aWdhdGlvbkJhci5zaGFkb3dJbWFnZSA9IFVJSW1hZ2UubmV3KCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX2RyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgbmV4dFBhZ2UoKXtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvaXRlbVwiXSk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5fZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuICBcbiAgZW50ZXJBY2NvdW50KCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2FjY291bnRcIl0pO1xuICB9XG5cbiAgZW50ZXJGZWVkYmFjaygpe1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9mZWVkYmFja1wiXSk7XG4gIH1cblxufSJdfQ==