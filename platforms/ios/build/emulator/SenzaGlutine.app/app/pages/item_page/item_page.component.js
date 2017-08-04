"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var color_1 = require("color");
var frame_1 = require("ui/frame");
var Item_pageComponent = (function () {
    function Item_pageComponent(page, frame) {
        this.page = page;
        this.frame = frame;
    }
    Item_pageComponent.prototype.ngOnInit = function () {
        var white = this.white.nativeElement;
        white.ios.layer.masksToBounds = false;
        white.ios.layer.shadowOpacity = 1.0;
        white.ios.layer.shadowRadius = 1.0;
        white.ios.layer.shadowColor = new color_1.Color('#000000').ios.CGColor;
        white.ios.layer.shadowOffset = CGSizeMake(2.0, 2.0);
        if (frame_1.topmost().ios) {
            var navigationBar = frame_1.topmost().ios.controller.navigationBar;
            navigationBar.setBackgroundImageForBarMetrics(UIImage.new(), UIBarMetrics.UIBarMetricsDefault);
            navigationBar.shadowImage = UIImage.new();
        }
    };
    return Item_pageComponent;
}());
__decorate([
    core_1.ViewChild("white"),
    __metadata("design:type", core_1.ElementRef)
], Item_pageComponent.prototype, "white", void 0);
__decorate([
    core_1.ViewChild("navBtn"),
    __metadata("design:type", core_1.ElementRef)
], Item_pageComponent.prototype, "navBtn", void 0);
Item_pageComponent = __decorate([
    core_1.Component({
        selector: 'item_page',
        templateUrl: 'pages/item_page/item_page.component.html',
        styleUrls: ['pages/item_page/item_page.component.css']
    }),
    __metadata("design:paramtypes", [page_1.Page, frame_1.Frame])
], Item_pageComponent);
exports.Item_pageComponent = Item_pageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbV9wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW1fcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsZ0NBQStCO0FBQy9CLCtCQUE4QjtBQUM5QixrQ0FBeUM7QUFhekMsSUFBYSxrQkFBa0I7SUFHOUIsNEJBQW9CLElBQVUsRUFBVSxLQUFZO1FBQWhDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFPO0lBQUksQ0FBQztJQUV6RCxxQ0FBUSxHQUFSO1FBQ0MsSUFBSSxLQUFLLEdBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFDM0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO1FBQ3BDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDbkMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7UUFDL0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEQsRUFBRSxDQUFDLENBQUMsZUFBTyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLGFBQWEsR0FBRyxlQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztZQUMzRCxhQUFhLENBQUMsK0JBQStCLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQy9GLGFBQWEsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3pDLENBQUM7SUFFSCxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBbkJELElBbUJDO0FBbEJtQjtJQUFsQixnQkFBUyxDQUFDLE9BQU8sQ0FBQzs4QkFBTyxpQkFBVTtpREFBQztBQUNqQjtJQUFuQixnQkFBUyxDQUFDLFFBQVEsQ0FBQzs4QkFBTyxpQkFBVTtrREFBQztBQUYxQixrQkFBa0I7SUFOOUIsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSwwQ0FBMEM7UUFDdkQsU0FBUyxFQUFFLENBQUMseUNBQXlDLENBQUM7S0FDdEQsQ0FBQztxQ0FLeUIsV0FBSSxFQUFpQixhQUFLO0dBSHhDLGtCQUFrQixDQW1COUI7QUFuQlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgdG9wbW9zdCxGcmFtZSB9IGZyb20gXCJ1aS9mcmFtZVwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcblxuZGVjbGFyZSB2YXIgVUlJbWFnZTogYW55O1xuZGVjbGFyZSB2YXIgVUlCYXJNZXRyaWNzOiBhbnk7XG5kZWNsYXJlIHZhciBjb250cm9sbGVyOiBhbnk7XG5kZWNsYXJlIHZhciBDR1NpemVNYWtlOiBhbnk7XG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdpdGVtX3BhZ2UnLFxuXHR0ZW1wbGF0ZVVybDogJ3BhZ2VzL2l0ZW1fcGFnZS9pdGVtX3BhZ2UuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsncGFnZXMvaXRlbV9wYWdlL2l0ZW1fcGFnZS5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBJdGVtX3BhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRAVmlld0NoaWxkKFwid2hpdGVcIil3aGl0ZTogRWxlbWVudFJlZjtcblx0QFZpZXdDaGlsZChcIm5hdkJ0blwiKW5hdkJ0bjpFbGVtZW50UmVmO1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgZnJhbWU6IEZyYW1lKSB7IH1cblxuXHRuZ09uSW5pdCgpIHsgXG5cdFx0bGV0IHdoaXRlID0gPFZpZXc+dGhpcy53aGl0ZS5uYXRpdmVFbGVtZW50O1xuXHRcdHdoaXRlLmlvcy5sYXllci5tYXNrc1RvQm91bmRzID0gZmFsc2U7XG5cdFx0d2hpdGUuaW9zLmxheWVyLnNoYWRvd09wYWNpdHkgPSAxLjA7XG5cdFx0d2hpdGUuaW9zLmxheWVyLnNoYWRvd1JhZGl1cyA9IDEuMDtcblx0XHR3aGl0ZS5pb3MubGF5ZXIuc2hhZG93Q29sb3IgPSBuZXcgQ29sb3IoJyMwMDAwMDAnKS5pb3MuQ0dDb2xvcjtcblx0XHR3aGl0ZS5pb3MubGF5ZXIuc2hhZG93T2Zmc2V0ID0gQ0dTaXplTWFrZSgyLjAsIDIuMCk7XG5cdFx0aWYgKHRvcG1vc3QoKS5pb3MpIHtcblx0XHRcdHZhciBuYXZpZ2F0aW9uQmFyID0gdG9wbW9zdCgpLmlvcy5jb250cm9sbGVyLm5hdmlnYXRpb25CYXI7XG5cdFx0XHRuYXZpZ2F0aW9uQmFyLnNldEJhY2tncm91bmRJbWFnZUZvckJhck1ldHJpY3MoVUlJbWFnZS5uZXcoKSwgVUlCYXJNZXRyaWNzLlVJQmFyTWV0cmljc0RlZmF1bHQpO1xuXHRcdFx0bmF2aWdhdGlvbkJhci5zaGFkb3dJbWFnZSA9IFVJSW1hZ2UubmV3KCk7XG4gICAgfVxuXG5cdCB9XG59Il19