"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var color_1 = require("color");
var frame_1 = require("ui/frame");
var platformModule = require("tns-core-modules/platform");
var Item_pageComponent = (function () {
    function Item_pageComponent(page, frame) {
        this.page = page;
        this.frame = frame;
        this.show = 'rewards';
        this.screen = {
            width: 0,
            height: 0,
            heightPercent: ''
        };
        this.startOrder = false;
        this.select = 0;
        this.selectedOrder = "Order Table";
    }
    Item_pageComponent.prototype.ngOnInit = function () {
        this.orederList = ["Order for collection", "Order at table", "Order for delivery"];
        console.log(this.page.getViewById("wrap"));
        console.log("Device model: " + platformModule.screen.mainScreen.widthPixels);
        this.screen.width = platformModule.screen.mainScreen.widthPixels;
        this.screen.height = platformModule.screen.mainScreen.heightPixels;
        this.screen.heightPercent = (Number(platformModule.screen.mainScreen.heightPixels) / 100).toFixed(1);
        console.log("Device model: " + this.screen.width);
        console.log("Device height: " + this.screen.height);
        console.log("Percent: " + this.screen.heightPercent);
        this.starters = [{ name: 'Pizza Margarita', price: '€2.40', desc: 'Product description goes here' },
            { name: 'Pizza Margarita', price: '€2.40', desc: 'Product description goes here' }
        ];
        this.main = [{ name: 'Pizza Margarita', price: '€2.40', desc: 'Product description goes here' }
        ];
        this.page.actionBar.navigationButton.style.color = new color_1.Color('#000000');
        if (frame_1.topmost().ios) {
            var navigationBar = frame_1.topmost().ios.controller.navigationBar;
            navigationBar.setBackgroundImageForBarMetrics(UIImage.new(), UIBarMetrics.UIBarMetricsDefault);
            navigationBar.shadowImage = UIImage.new();
        }
    };
    Item_pageComponent.prototype.getView = function () {
        this.startOrder = true;
        var wrap = this;
        setTimeout(function () {
            var orderType = wrap.page.getViewById("order");
            console.log(orderType, " Oreder");
            orderType.borderBottomWidth = 1;
            orderType.borderBottomColor = new color_1.Color("#434343");
        }, 0);
    };
    Item_pageComponent.prototype.selectedIndexChanged = function (picker) {
        console.log('picker selection: ' + picker.selectedIndex);
    };
    Item_pageComponent.prototype.selectOrder = function (picker) {
        console.log(picker.selectedIndex);
        picker.selectedIndex === undefined ? picker.selectedIndex = 0 : '';
        this.selectedOrder = this.orederList[picker.selectedIndex] || "Please select an order type";
        this.select++;
        var wrap = this;
        this.selectedOrder = this.orederList[picker.selectedIndex];
        setTimeout(function () {
            var orderType = wrap.page.getViewById("table");
            console.log(orderType, " Oreder");
            orderType.borderBottomWidth = 1;
            orderType.borderBottomColor = new color_1.Color("#434343");
        }, 0);
    };
    return Item_pageComponent;
}());
__decorate([
    core_1.ViewChild("ordertype"),
    __metadata("design:type", core_1.ElementRef)
], Item_pageComponent.prototype, "ordertype", void 0);
Item_pageComponent = __decorate([
    core_1.Component({
        selector: 'item_page',
        templateUrl: 'pages/item_page/item_page.component.html',
        styleUrls: ['pages/item_page/item_page.component.css']
    }),
    __metadata("design:paramtypes", [page_1.Page, frame_1.Frame])
], Item_pageComponent);
exports.Item_pageComponent = Item_pageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbV9wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW1fcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsZ0NBQStCO0FBQy9CLCtCQUE4QjtBQUM5QixrQ0FBeUM7QUFFekMsMERBQTREO0FBZ0I1RCxJQUFhLGtCQUFrQjtJQWM5Qiw0QkFBb0IsSUFBVSxFQUFVLEtBQVk7UUFBaEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU87UUFacEQsU0FBSSxHQUFXLFNBQVMsQ0FBQztRQUl6QixXQUFNLEdBQUc7WUFDUixLQUFLLEVBQUMsQ0FBQztZQUNQLE1BQU0sRUFBQyxDQUFDO1lBQ1IsYUFBYSxFQUFDLEVBQUU7U0FDaEIsQ0FBQTtRQUNELGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLGtCQUFhLEdBQUcsYUFBYSxDQUFDO0lBQzBCLENBQUM7SUFFekQscUNBQVEsR0FBUjtRQUVDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxnQkFBZ0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ25GLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7UUFDbkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEdBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25HLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVyRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsK0JBQStCLEVBQUM7WUFDakcsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsK0JBQStCLEVBQUM7U0FDakYsQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSwrQkFBK0IsRUFBQztTQUM3RixDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4RSxFQUFFLENBQUMsQ0FBQyxlQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksYUFBYSxHQUFHLGVBQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1lBQzNELGFBQWEsQ0FBQywrQkFBK0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsWUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDL0YsYUFBYSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDekMsQ0FBQztJQUVILENBQUM7SUFDRCxvQ0FBTyxHQUFQO1FBQ0EsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFVBQVUsQ0FBQztZQUNWLElBQUksU0FBUyxHQUFlLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2xDLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRSxDQUFDLENBQUM7WUFDMUIsU0FBUyxDQUFDLGlCQUFpQixHQUFFLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hELENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxpREFBb0IsR0FBcEIsVUFBcUIsTUFBTTtRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsd0NBQVcsR0FBWCxVQUFZLE1BQU07UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLGFBQWEsS0FBSyxTQUFTLEdBQUcsTUFBTSxDQUFDLGFBQWEsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFBO1FBQ2xFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksNkJBQTZCLENBQUM7UUFDNUYsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekQsVUFBVSxDQUFDO1lBQ1osSUFBSSxTQUFTLEdBQWUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDbEMsU0FBUyxDQUFDLGlCQUFpQixHQUFFLENBQUMsQ0FBQztZQUMxQixTQUFTLENBQUMsaUJBQWlCLEdBQUUsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUdGLHlCQUFDO0FBQUQsQ0FBQyxBQXZFRCxJQXVFQztBQXRFd0I7SUFBdkIsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7OEJBQVksaUJBQVU7cURBQUM7QUFEbEMsa0JBQWtCO0lBTjlCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsMENBQTBDO1FBQ3ZELFNBQVMsRUFBRSxDQUFDLHlDQUF5QyxDQUFDO0tBQ3RELENBQUM7cUNBZ0J5QixXQUFJLEVBQWlCLGFBQUs7R0FkeEMsa0JBQWtCLENBdUU5QjtBQXZFWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQgeyB0b3Btb3N0LEZyYW1lIH0gZnJvbSBcInVpL2ZyYW1lXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCB7IERvY2tMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9kb2NrLWxheW91dFwiO1xuaW1wb3J0ICogYXMgbGlzdFBpY2tlck1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXBpY2tlclwiO1xuXG5kZWNsYXJlIHZhciBVSUltYWdlOiBhbnk7XG5kZWNsYXJlIHZhciBVSUJhck1ldHJpY3M6IGFueTtcbmRlY2xhcmUgdmFyIGNvbnRyb2xsZXI6IGFueTtcbmRlY2xhcmUgdmFyIENHU2l6ZU1ha2U6IGFueTtcbmRlY2xhcmUgdmFyXHRVSUNvbG9yOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2l0ZW1fcGFnZScsXG5cdHRlbXBsYXRlVXJsOiAncGFnZXMvaXRlbV9wYWdlL2l0ZW1fcGFnZS5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWydwYWdlcy9pdGVtX3BhZ2UvaXRlbV9wYWdlLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEl0ZW1fcGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBWaWV3Q2hpbGQoXCJvcmRlcnR5cGVcIikgb3JkZXJ0eXBlOiBFbGVtZW50UmVmO1xuXHRzaG93OiBzdHJpbmcgPSAncmV3YXJkcyc7XG5cdHN0YXJ0ZXJzOlt7fV07XG5cdG1haW46W3t9XTtcblx0b3JlZGVyTGlzdDtcblx0c2NyZWVuID0ge1x0XG5cdFx0d2lkdGg6MCxcblx0XHRoZWlnaHQ6MCxcblx0XHRoZWlnaHRQZXJjZW50OicnXG5cdH1cblx0c3RhcnRPcmRlciA9IGZhbHNlO1xuXHRzZWxlY3QgPSAwO1xuXHRzZWxlY3RlZE9yZGVyID0gXCJPcmRlciBUYWJsZVwiO1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgZnJhbWU6IEZyYW1lKSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRcblx0XHR0aGlzLm9yZWRlckxpc3QgPSBbXCJPcmRlciBmb3IgY29sbGVjdGlvblwiLCBcIk9yZGVyIGF0IHRhYmxlXCIsIFwiT3JkZXIgZm9yIGRlbGl2ZXJ5XCJdO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMucGFnZS5nZXRWaWV3QnlJZChcIndyYXBcIikpO1xuXHRcdGNvbnNvbGUubG9nKFwiRGV2aWNlIG1vZGVsOiBcIiArIHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzKTtcblx0XHR0aGlzLnNjcmVlbi53aWR0aCA9IHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzO1xuXHRcdHRoaXMuc2NyZWVuLmhlaWdodCA9IHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLmhlaWdodFBpeGVscztcblx0XHR0aGlzLnNjcmVlbi5oZWlnaHRQZXJjZW50ID0gKE51bWJlcihwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRQaXhlbHMpLzEwMCkudG9GaXhlZCgxKTtcblx0XHRjb25zb2xlLmxvZyhcIkRldmljZSBtb2RlbDogXCIgKyB0aGlzLnNjcmVlbi53aWR0aCk7XG5cdFx0Y29uc29sZS5sb2coXCJEZXZpY2UgaGVpZ2h0OiBcIiArIHRoaXMuc2NyZWVuLmhlaWdodCk7XG5cdFx0Y29uc29sZS5sb2coXCJQZXJjZW50OiBcIiArIHRoaXMuc2NyZWVuLmhlaWdodFBlcmNlbnQpO1xuXG5cdFx0dGhpcy5zdGFydGVycyA9IFt7IG5hbWU6ICdQaXp6YSBNYXJnYXJpdGEnLCBwcmljZTogJ+KCrDIuNDAnLCBkZXNjOiAnUHJvZHVjdCBkZXNjcmlwdGlvbiBnb2VzIGhlcmUnfSxcblx0XHRcdHsgbmFtZTogJ1BpenphIE1hcmdhcml0YScsIHByaWNlOiAn4oKsMi40MCcsIGRlc2M6ICdQcm9kdWN0IGRlc2NyaXB0aW9uIGdvZXMgaGVyZSd9XG5cdFx0XTtcblx0XHR0aGlzLm1haW4gPSBbeyBuYW1lOiAnUGl6emEgTWFyZ2FyaXRhJywgcHJpY2U6ICfigqwyLjQwJywgZGVzYzogJ1Byb2R1Y3QgZGVzY3JpcHRpb24gZ29lcyBoZXJlJ31cblx0XHRdO1xuXHRcdHRoaXMucGFnZS5hY3Rpb25CYXIubmF2aWdhdGlvbkJ1dHRvbi5zdHlsZS5jb2xvciA9IG5ldyBDb2xvcignIzAwMDAwMCcpO1xuXHRcdGlmICh0b3Btb3N0KCkuaW9zKSB7XG5cdFx0XHR2YXIgbmF2aWdhdGlvbkJhciA9IHRvcG1vc3QoKS5pb3MuY29udHJvbGxlci5uYXZpZ2F0aW9uQmFyO1xuXHRcdFx0bmF2aWdhdGlvbkJhci5zZXRCYWNrZ3JvdW5kSW1hZ2VGb3JCYXJNZXRyaWNzKFVJSW1hZ2UubmV3KCksIFVJQmFyTWV0cmljcy5VSUJhck1ldHJpY3NEZWZhdWx0KTtcblx0XHRcdG5hdmlnYXRpb25CYXIuc2hhZG93SW1hZ2UgPSBVSUltYWdlLm5ldygpO1xuICAgIH1cblxuXHQgfVxuXHQgZ2V0Vmlldygpe1xuXHRcdHRoaXMuc3RhcnRPcmRlciA9IHRydWU7XG5cdFx0bGV0IHdyYXAgPSB0aGlzO1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdGxldCBvcmRlclR5cGUgPSA8RG9ja0xheW91dD53cmFwLnBhZ2UuZ2V0Vmlld0J5SWQoXCJvcmRlclwiKTtcblx0XHRcdGNvbnNvbGUubG9nKG9yZGVyVHlwZSwgXCIgT3JlZGVyXCIpO1xuXHRcdFx0b3JkZXJUeXBlLmJvcmRlckJvdHRvbVdpZHRoPSAxO1xuICAgICAgXHRcdG9yZGVyVHlwZS5ib3JkZXJCb3R0b21Db2xvcj0gbmV3IENvbG9yKFwiIzQzNDM0M1wiKTtcblx0XHR9LDApO1xuXHQgfVxuXHQgc2VsZWN0ZWRJbmRleENoYW5nZWQocGlja2VyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwaWNrZXIgc2VsZWN0aW9uOiAnICsgcGlja2VyLnNlbGVjdGVkSW5kZXgpO1xuXHR9XG5cdFxuXHRzZWxlY3RPcmRlcihwaWNrZXIpe1xuXHRcdGNvbnNvbGUubG9nKHBpY2tlci5zZWxlY3RlZEluZGV4KTtcblx0XHRwaWNrZXIuc2VsZWN0ZWRJbmRleCA9PT0gdW5kZWZpbmVkID8gcGlja2VyLnNlbGVjdGVkSW5kZXggPSAwIDogJydcblx0XHR0aGlzLnNlbGVjdGVkT3JkZXIgPSB0aGlzLm9yZWRlckxpc3RbcGlja2VyLnNlbGVjdGVkSW5kZXhdIHx8IFwiUGxlYXNlIHNlbGVjdCBhbiBvcmRlciB0eXBlXCI7XG5cdFx0dGhpcy5zZWxlY3QrKztcblx0XHRsZXQgd3JhcCA9IHRoaXM7XG5cdFx0dGhpcy5zZWxlY3RlZE9yZGVyID0gdGhpcy5vcmVkZXJMaXN0W3BpY2tlci5zZWxlY3RlZEluZGV4XTtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0bGV0IG9yZGVyVHlwZSA9IDxEb2NrTGF5b3V0PndyYXAucGFnZS5nZXRWaWV3QnlJZChcInRhYmxlXCIpO1xuXHRcdFx0Y29uc29sZS5sb2cob3JkZXJUeXBlLCBcIiBPcmVkZXJcIik7XG5cdFx0XHRvcmRlclR5cGUuYm9yZGVyQm90dG9tV2lkdGg9IDE7XG4gICAgICBcdFx0b3JkZXJUeXBlLmJvcmRlckJvdHRvbUNvbG9yPSBuZXcgQ29sb3IoXCIjNDM0MzQzXCIpO1xuXHRcdH0sMCk7XG5cdH1cblxuXG59Il19