"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var frame_1 = require("ui/frame");
var ListComponent = (function () {
    function ListComponent(page, frame) {
        this.page = page;
        this.frame = frame;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.page.actionBar.navigationButton.visibility = "collapse";
        if (frame_1.topmost().ios) {
            var navigationBar = frame_1.topmost().ios.controller.navigationBar;
            navigationBar.setBackgroundImageForBarMetrics(UIImage.new(), UIBarMetrics.UIBarMetricsDefault);
            navigationBar.shadowImage = UIImage.new();
        }
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: "list-app",
        templateUrl: "pages/list_page/list_page.html",
        styleUrls: ["pages/list_page/list_page.css"],
    }),
    __metadata("design:paramtypes", [page_1.Page, frame_1.Frame])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdF9wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3RfcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsZ0NBQStCO0FBSS9CLGtDQUF5QztBQVl6QyxJQUFhLGFBQWE7SUFHeEIsdUJBQW9CLElBQVUsRUFBVSxLQUFZO1FBQWhDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFPO0lBQUUsQ0FBQztJQUNuRCxnQ0FBUSxHQUFSO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3RCxFQUFFLENBQUMsQ0FBQyxlQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksYUFBYSxHQUFHLGVBQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1lBQzNELGFBQWEsQ0FBQywrQkFBK0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsWUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDL0YsYUFBYSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDNUMsQ0FBQztJQUNILENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWlksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLGdDQUFnQztRQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztLQUM3QyxDQUFDO3FDQUswQixXQUFJLEVBQWlCLGFBQUs7R0FIekMsYUFBYSxDQVl6QjtBQVpZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgdG9wbW9zdCxGcmFtZSB9IGZyb20gXCJ1aS9mcmFtZVwiO1xuaW1wb3J0IHsgaXNJT1MgfSBmcm9tIFwicGxhdGZvcm1cIjtcbmltcG9ydCB7IFdyYXBMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy93cmFwLWxheW91dFwiO1xuZGVjbGFyZSB2YXIgVUlJbWFnZTogYW55O1xuZGVjbGFyZSB2YXIgVUlCYXJNZXRyaWNzOiBhbnk7XG5kZWNsYXJlIHZhciBjb250cm9sbGVyOiBhbnk7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGlzdC1hcHBcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbGlzdF9wYWdlL2xpc3RfcGFnZS5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbGlzdF9wYWdlL2xpc3RfcGFnZS5jc3NcIl0sXG59KVxuXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICBcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgZnJhbWU6IEZyYW1lKXt9XG4gICAgICBuZ09uSW5pdCgpe1xuICAgIHRoaXMucGFnZS5hY3Rpb25CYXIubmF2aWdhdGlvbkJ1dHRvbi52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiO1xuICAgIGlmICh0b3Btb3N0KCkuaW9zKSB7XG4gICAgICB2YXIgbmF2aWdhdGlvbkJhciA9IHRvcG1vc3QoKS5pb3MuY29udHJvbGxlci5uYXZpZ2F0aW9uQmFyO1xuICAgICAgbmF2aWdhdGlvbkJhci5zZXRCYWNrZ3JvdW5kSW1hZ2VGb3JCYXJNZXRyaWNzKFVJSW1hZ2UubmV3KCksIFVJQmFyTWV0cmljcy5VSUJhck1ldHJpY3NEZWZhdWx0KTtcbiAgICAgIG5hdmlnYXRpb25CYXIuc2hhZG93SW1hZ2UgPSBVSUltYWdlLm5ldygpO1xuICAgIH1cbiAgfVxufSJdfQ==