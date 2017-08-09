"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var frame_1 = require("ui/frame");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
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
        this.page.actionBar.navigationButton.visibility = "collapse";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdF9wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3RfcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0g7QUFDbEgsZ0NBQStCO0FBRS9CLDBDQUF5QztBQUV6QyxrQ0FBeUM7QUFJekMsc0VBQXNHO0FBZXRHLElBQWEsYUFBYTtJQVV4Qix1QkFBb0IsSUFBVSxFQUFVLEtBQVksRUFBUyxNQUFjLEVBQVUsbUJBQXNDO1FBQXZHLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFQM0gsU0FBSSxHQUFRO1lBQ1YsRUFBRTtTQUNILENBQUM7SUFLMkgsQ0FBQztJQUMxSCxnQ0FBUSxHQUFSO1FBR0YsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUU3RCxFQUFFLENBQUMsQ0FBQyxlQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksYUFBYSxHQUFHLGVBQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1lBQzlELGFBQWEsQ0FBQywrQkFBK0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsWUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDL0YsYUFBYSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDekMsQ0FBQztJQUNILENBQUM7SUFFRCx1Q0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUMvQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVILGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELDhCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFHSCxvQkFBQztBQUFELENBQUMsQUF0Q0QsSUFzQ0M7QUFyQ29CO0lBQWxCLGdCQUFTLENBQUMsTUFBTSxDQUFDOzhCQUFPLGlCQUFVOzJDQUFDO0FBQ0Q7SUFBbEMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQzs4QkFBeUIsZ0NBQXNCO3NEQUFDO0FBRnZFLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxnQ0FBZ0M7UUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7S0FDN0MsQ0FBQztxQ0FZMEIsV0FBSSxFQUFpQixhQUFLLEVBQWlCLGVBQU0sRUFBK0Isd0JBQWlCO0dBVmhILGFBQWEsQ0FzQ3pCO0FBdENZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEluamVjdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IHRvcG1vc3QsRnJhbWUgfSBmcm9tIFwidWkvZnJhbWVcIjtcbmltcG9ydCB7IGlzSU9TIH0gZnJvbSBcInBsYXRmb3JtXCI7XG5pbXBvcnQgeyBXcmFwTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvd3JhcC1sYXlvdXRcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyAgU2lkZURyYXdlclR5cGUsIFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciwgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyJztcblxuXG5cbmRlY2xhcmUgdmFyIFVJSW1hZ2U6IGFueTtcbmRlY2xhcmUgdmFyIFVJQmFyTWV0cmljczogYW55O1xuZGVjbGFyZSB2YXIgY29udHJvbGxlcjogYW55O1xuZGVjbGFyZSB2YXIgQ0dTaXplTWFrZTogYW55O1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxpc3QtYXBwXCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xpc3RfcGFnZS9saXN0X3BhZ2UuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xpc3RfcGFnZS9saXN0X3BhZ2UuY3NzXCJdLFxufSlcblxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIEBWaWV3Q2hpbGQoXCJ0ZXN0XCIpIHRlc3Q6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgZGF0YTpbe31dID0gW1xuICAgIHt9XG4gIF07XG5cbiAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xuICBwcml2YXRlIF9kcmF3ZXI6IFNpZGVEcmF3ZXJUeXBlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBmcmFtZTogRnJhbWUscHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZil7fVxuICAgICAgbmdPbkluaXQoKXtcbiAgXG4gICAgXG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhci5uYXZpZ2F0aW9uQnV0dG9uLnZpc2liaWxpdHkgPSBcImNvbGxhcHNlXCI7XG5cbiAgICBpZiAodG9wbW9zdCgpLmlvcykge1xuICAgICAgdmFyIG5hdmlnYXRpb25CYXIgPSB0b3Btb3N0KCkuaW9zLmNvbnRyb2xsZXIubmF2aWdhdGlvbkJhcjtcblx0XHRcdG5hdmlnYXRpb25CYXIuc2V0QmFja2dyb3VuZEltYWdlRm9yQmFyTWV0cmljcyhVSUltYWdlLm5ldygpLCBVSUJhck1ldHJpY3MuVUlCYXJNZXRyaWNzRGVmYXVsdCk7XG5cdFx0XHRuYXZpZ2F0aW9uQmFyLnNoYWRvd0ltYWdlID0gVUlJbWFnZS5uZXcoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICBuZXh0UGFnZSgpe1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9pdGVtXCJdKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLl9kcmF3ZXIudG9nZ2xlRHJhd2VyU3RhdGUoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG4gIFxuXG59Il19