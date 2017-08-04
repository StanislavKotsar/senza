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
        this.page.actionBar.navigationButton.style.color = new color_1.Color('#000000');
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
Item_pageComponent = __decorate([
    core_1.Component({
        selector: 'item_page',
        templateUrl: 'pages/item_page/item_page.component.html',
        styleUrls: ['pages/item_page/item_page.component.css']
    }),
    __metadata("design:paramtypes", [page_1.Page, frame_1.Frame])
], Item_pageComponent);
exports.Item_pageComponent = Item_pageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbV9wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW1fcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsZ0NBQStCO0FBQy9CLCtCQUE4QjtBQUM5QixrQ0FBeUM7QUFjekMsSUFBYSxrQkFBa0I7SUFFOUIsNEJBQW9CLElBQVUsRUFBVSxLQUFZO1FBQWhDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFPO0lBQUksQ0FBQztJQUV6RCxxQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4RSxJQUFJLEtBQUssR0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7UUFDcEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUNuQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUMvRCxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwRCxFQUFFLENBQUMsQ0FBQyxlQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksYUFBYSxHQUFHLGVBQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1lBQzNELGFBQWEsQ0FBQywrQkFBK0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsWUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDL0YsYUFBYSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDekMsQ0FBQztJQUVILENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFsQm1CO0lBQWxCLGdCQUFTLENBQUMsT0FBTyxDQUFDOzhCQUFPLGlCQUFVO2lEQUFDO0FBRHpCLGtCQUFrQjtJQU45QixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLDBDQUEwQztRQUN2RCxTQUFTLEVBQUUsQ0FBQyx5Q0FBeUMsQ0FBQztLQUN0RCxDQUFDO3FDQUl5QixXQUFJLEVBQWlCLGFBQUs7R0FGeEMsa0JBQWtCLENBbUI5QjtBQW5CWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQgeyB0b3Btb3N0LEZyYW1lIH0gZnJvbSBcInVpL2ZyYW1lXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuXG5kZWNsYXJlIHZhciBVSUltYWdlOiBhbnk7XG5kZWNsYXJlIHZhciBVSUJhck1ldHJpY3M6IGFueTtcbmRlY2xhcmUgdmFyIGNvbnRyb2xsZXI6IGFueTtcbmRlY2xhcmUgdmFyIENHU2l6ZU1ha2U6IGFueTtcbmRlY2xhcmUgdmFyXHRVSUNvbG9yOiBhbnk7XG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdpdGVtX3BhZ2UnLFxuXHR0ZW1wbGF0ZVVybDogJ3BhZ2VzL2l0ZW1fcGFnZS9pdGVtX3BhZ2UuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsncGFnZXMvaXRlbV9wYWdlL2l0ZW1fcGFnZS5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBJdGVtX3BhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRAVmlld0NoaWxkKFwid2hpdGVcIil3aGl0ZTogRWxlbWVudFJlZjtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIGZyYW1lOiBGcmFtZSkgeyB9XG5cblx0bmdPbkluaXQoKSB7IFxuXHRcdHRoaXMucGFnZS5hY3Rpb25CYXIubmF2aWdhdGlvbkJ1dHRvbi5zdHlsZS5jb2xvciA9IG5ldyBDb2xvcignIzAwMDAwMCcpO1xuXHRcdGxldCB3aGl0ZSA9IDxWaWV3PnRoaXMud2hpdGUubmF0aXZlRWxlbWVudDtcblx0XHR3aGl0ZS5pb3MubGF5ZXIubWFza3NUb0JvdW5kcyA9IGZhbHNlO1xuXHRcdHdoaXRlLmlvcy5sYXllci5zaGFkb3dPcGFjaXR5ID0gMS4wO1xuXHRcdHdoaXRlLmlvcy5sYXllci5zaGFkb3dSYWRpdXMgPSAxLjA7XG5cdFx0d2hpdGUuaW9zLmxheWVyLnNoYWRvd0NvbG9yID0gbmV3IENvbG9yKCcjMDAwMDAwJykuaW9zLkNHQ29sb3I7XG5cdFx0d2hpdGUuaW9zLmxheWVyLnNoYWRvd09mZnNldCA9IENHU2l6ZU1ha2UoMi4wLCAyLjApO1xuXHRcdGlmICh0b3Btb3N0KCkuaW9zKSB7XG5cdFx0XHR2YXIgbmF2aWdhdGlvbkJhciA9IHRvcG1vc3QoKS5pb3MuY29udHJvbGxlci5uYXZpZ2F0aW9uQmFyO1xuXHRcdFx0bmF2aWdhdGlvbkJhci5zZXRCYWNrZ3JvdW5kSW1hZ2VGb3JCYXJNZXRyaWNzKFVJSW1hZ2UubmV3KCksIFVJQmFyTWV0cmljcy5VSUJhck1ldHJpY3NEZWZhdWx0KTtcblx0XHRcdG5hdmlnYXRpb25CYXIuc2hhZG93SW1hZ2UgPSBVSUltYWdlLm5ldygpO1xuICAgIH1cblxuXHQgfVxufSJdfQ==