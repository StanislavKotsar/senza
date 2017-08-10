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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdF9wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3RfcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0g7QUFDbEgsZ0NBQStCO0FBRS9CLDBDQUF5QztBQUV6QyxrQ0FBeUM7QUFJekMsc0VBQXNHO0FBZXRHLElBQWEsYUFBYTtJQVV4Qix1QkFBb0IsSUFBVSxFQUFVLEtBQVksRUFBUyxNQUFjLEVBQVUsbUJBQXNDO1FBQXZHLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFQM0gsU0FBSSxHQUFRO1lBQ1YsRUFBRTtTQUNILENBQUM7SUFLMkgsQ0FBQztJQUMxSCxnQ0FBUSxHQUFSO1FBR0YsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDN0IsRUFBRSxDQUFDLENBQUMsZUFBTyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLGFBQWEsR0FBRyxlQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztZQUM5RCxhQUFhLENBQUMsK0JBQStCLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQy9GLGFBQWEsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3pDLENBQUM7SUFDSCxDQUFDO0lBRUQsdUNBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDL0MsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFSCxnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQsb0NBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUgsb0JBQUM7QUFBRCxDQUFDLEFBekNELElBeUNDO0FBeENvQjtJQUFsQixnQkFBUyxDQUFDLE1BQU0sQ0FBQzs4QkFBTyxpQkFBVTsyQ0FBQztBQUNEO0lBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7OEJBQXlCLGdDQUFzQjtzREFBQztBQUZ2RSxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsZ0NBQWdDO1FBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO0tBQzdDLENBQUM7cUNBWTBCLFdBQUksRUFBaUIsYUFBSyxFQUFpQixlQUFNLEVBQStCLHdCQUFpQjtHQVZoSCxhQUFhLENBeUN6QjtBQXpDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBJbmplY3R9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyB0b3Btb3N0LEZyYW1lIH0gZnJvbSBcInVpL2ZyYW1lXCI7XG5pbXBvcnQgeyBpc0lPUyB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0IHsgV3JhcExheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL3dyYXAtbGF5b3V0XCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHsgIFNpZGVEcmF3ZXJUeXBlLCBSYWRTaWRlRHJhd2VyQ29tcG9uZW50ICB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIsIERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlcic7XG5cblxuXG5kZWNsYXJlIHZhciBVSUltYWdlOiBhbnk7XG5kZWNsYXJlIHZhciBVSUJhck1ldHJpY3M6IGFueTtcbmRlY2xhcmUgdmFyIGNvbnRyb2xsZXI6IGFueTtcbmRlY2xhcmUgdmFyIENHU2l6ZU1ha2U6IGFueTtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaXN0LWFwcFwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9saXN0X3BhZ2UvbGlzdF9wYWdlLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9saXN0X3BhZ2UvbGlzdF9wYWdlLmNzc1wiXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBAVmlld0NoaWxkKFwidGVzdFwiKSB0ZXN0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG4gIGRhdGE6W3t9XSA9IFtcbiAgICB7fVxuICBdO1xuXG4gIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcbiAgcHJpdmF0ZSBfZHJhd2VyOiBTaWRlRHJhd2VyVHlwZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgZnJhbWU6IEZyYW1lLHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpe31cbiAgICAgIG5nT25Jbml0KCl7XG4gIFxuICAgIFxuICAgIHRoaXMucGFnZS5hY3Rpb25CYXIubmF2aWdhdGlvbkJ1dHRvbi52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiO1xudGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgaWYgKHRvcG1vc3QoKS5pb3MpIHtcbiAgICAgIHZhciBuYXZpZ2F0aW9uQmFyID0gdG9wbW9zdCgpLmlvcy5jb250cm9sbGVyLm5hdmlnYXRpb25CYXI7XG5cdFx0XHRuYXZpZ2F0aW9uQmFyLnNldEJhY2tncm91bmRJbWFnZUZvckJhck1ldHJpY3MoVUlJbWFnZS5uZXcoKSwgVUlCYXJNZXRyaWNzLlVJQmFyTWV0cmljc0RlZmF1bHQpO1xuXHRcdFx0bmF2aWdhdGlvbkJhci5zaGFkb3dJbWFnZSA9IFVJSW1hZ2UubmV3KCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX2RyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgbmV4dFBhZ2UoKXtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvaXRlbVwiXSk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5fZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuICBcbiAgZW50ZXJBY2NvdW50KCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2FjY291bnRcIl0pO1xuICB9XG5cbn0iXX0=