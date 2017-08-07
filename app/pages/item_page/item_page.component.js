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
        this.screen.heightPercent = (platformModule.screen.mainScreen.heightPixels / 100).toFixed(1);
        console.log("Device model: " + this.screen.width);
        console.log("Device height: " + this.screen.height);
        console.log("Percent: " + this.screen.heightPercent);
        this.starters = [{ name: 'Pizza Margarita', price: '€2.40', desc: 'Product description goes here', extras: [
                    "Extra cheese", "Extra tomato", "Add bacon", "Add ham", "Add egg"
                ] },
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
        this.addBottomBorder("order");
    };
    Item_pageComponent.prototype.selectedIndexChanged = function (picker) {
        console.log('picker selection: ' + picker.selectedIndex);
    };
    Item_pageComponent.prototype.addBottomBorder = function (id) {
        var wrap = this;
        setTimeout(function () {
            var orderType = wrap.page.getViewById(id);
            console.log(orderType, " Oreder");
            orderType.borderBottomWidth = 1;
            orderType.borderBottomColor = new color_1.Color("#434343");
        }, 0);
    };
    Item_pageComponent.prototype.selectOrder = function (picker) {
        console.log(picker.selectedIndex);
        picker.selectedIndex === undefined ? picker.selectedIndex = 0 : '';
        this.selectedOrder = this.orederList[picker.selectedIndex] || "Please select an order type";
        this.select++;
        this.selectedOrder = this.orederList[picker.selectedIndex];
        this.addBottomBorder("order");
        this.addBottomBorder("table");
    };
    Item_pageComponent.prototype.foo = function () {
        this.select++;
        console.log(this.select++);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbV9wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW1fcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsZ0NBQStCO0FBQy9CLCtCQUE4QjtBQUM5QixrQ0FBeUM7QUFFekMsMERBQTREO0FBZ0I1RCxJQUFhLGtCQUFrQjtJQWM5Qiw0QkFBb0IsSUFBVSxFQUFVLEtBQVk7UUFBaEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU87UUFacEQsU0FBSSxHQUFXLFNBQVMsQ0FBQztRQUl6QixXQUFNLEdBQUc7WUFDUixLQUFLLEVBQUMsQ0FBQztZQUNQLE1BQU0sRUFBQyxDQUFDO1lBQ1IsYUFBYSxFQUFFLEVBQUU7U0FDakIsQ0FBQTtRQUNELGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLGtCQUFhLEdBQUcsYUFBYSxDQUFDO0lBQzBCLENBQUM7SUFFekQscUNBQVEsR0FBUjtRQUVDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxnQkFBZ0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ25GLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7UUFDbkUsSUFBSSxDQUFD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Q0FBQyxhQUFhLENBQUMsSUFBSSw2QkFBNkIsQ0FBQztRQUM1RixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsZ0NBQUcsR0FBSDtRQUNDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7SUFDM0IsQ0FBQztJQUdGLHlCQUFDO0FBQUQsQ0FBQyxBQTdFRCxJQTZFQztBQTVFd0I7SUFBdkIsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7OEJBQVksaUJBQVU7cURBQUM7QUFEbEMsa0JBQWtCO0lBTjlCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsMENBQTBDO1FBQ3ZELFNBQVMsRUFBRSxDQUFDLHlDQUF5QyxDQUFDO0tBQ3RELENBQUM7cUNBZ0J5QixXQUFJLEVBQWlCLGFBQUs7R0FkeEMsa0JBQWtCLENBNkU5QjtBQTdFWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQgeyB0b3Btb3N0LEZyYW1lIH0gZnJvbSBcInVpL2ZyYW1lXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCB7IERvY2tMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9kb2NrLWxheW91dFwiO1xuaW1wb3J0ICogYXMgbGlzdFBpY2tlck1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXBpY2tlclwiO1xuXG5kZWNsYXJlIHZhciBVSUltYWdlOiBhbnk7XG5kZWNsYXJlIHZhciBVSUJhck1ldHJpY3M6IGFueTtcbmRlY2xhcmUgdmFyIGNvbnRyb2xsZXI6IGFueTtcbmRlY2xhcmUgdmFyIENHU2l6ZU1ha2U6IGFueTtcbmRlY2xhcmUgdmFyXHRVSUNvbG9yOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2l0ZW1fcGFnZScsXG5cdHRlbXBsYXRlVXJsOiAncGFnZXMvaXRlbV9wYWdlL2l0ZW1fcGFnZS5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWydwYWdlcy9pdGVtX3BhZ2UvaXRlbV9wYWdlLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEl0ZW1fcGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBWaWV3Q2hpbGQoXCJvcmRlcnR5cGVcIikgb3JkZXJ0eXBlOiBFbGVtZW50UmVmO1xuXHRzaG93OiBzdHJpbmcgPSAncmV3YXJkcyc7XG5cdHN0YXJ0ZXJzOlt7fV07XG5cdG1haW46W3t9XTtcblx0b3JlZGVyTGlzdDtcblx0c2NyZWVuID0ge1x0XG5cdFx0d2lkdGg6MCxcblx0XHRoZWlnaHQ6MCxcblx0XHRoZWlnaHRQZXJjZW50OiAnJ1xuXHR9XG5cdHN0YXJ0T3JkZXIgPSBmYWxzZTtcblx0c2VsZWN0ID0gMDtcblx0c2VsZWN0ZWRPcmRlciA9IFwiT3JkZXIgVGFibGVcIjtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIGZyYW1lOiBGcmFtZSkgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0XG5cdFx0dGhpcy5vcmVkZXJMaXN0ID0gW1wiT3JkZXIgZm9yIGNvbGxlY3Rpb25cIiwgXCJPcmRlciBhdCB0YWJsZVwiLCBcIk9yZGVyIGZvciBkZWxpdmVyeVwiXTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoXCJ3cmFwXCIpKTtcblx0XHRjb25zb2xlLmxvZyhcIkRldmljZSBtb2RlbDogXCIgKyBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi53aWR0aFBpeGVscyk7XG5cdFx0dGhpcy5zY3JlZW4ud2lkdGggPSBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi53aWR0aFBpeGVscztcblx0XHR0aGlzLnNjcmVlbi5oZWlnaHQgPSBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRQaXhlbHM7XG5cdFx0dGhpcy5zY3JlZW4uaGVpZ2h0UGVyY2VudCA9IChwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRQaXhlbHMvMTAwKS50b0ZpeGVkKDEpO1xuXHRcdGNvbnNvbGUubG9nKFwiRGV2aWNlIG1vZGVsOiBcIiArIHRoaXMuc2NyZWVuLndpZHRoKTtcblx0XHRjb25zb2xlLmxvZyhcIkRldmljZSBoZWlnaHQ6IFwiICsgdGhpcy5zY3JlZW4uaGVpZ2h0KTtcblx0XHRjb25zb2xlLmxvZyhcIlBlcmNlbnQ6IFwiICsgdGhpcy5zY3JlZW4uaGVpZ2h0UGVyY2VudCk7XG5cblx0XHR0aGlzLnN0YXJ0ZXJzID0gW3sgbmFtZTogJ1BpenphIE1hcmdhcml0YScsIHByaWNlOiAn4oKsMi40MCcsIGRlc2M6ICdQcm9kdWN0IGRlc2NyaXB0aW9uIGdvZXMgaGVyZScsIGV4dHJhczpbXG5cdFx0XHRcIkV4dHJhIGNoZWVzZVwiLCBcIkV4dHJhIHRvbWF0b1wiLCBcIkFkZCBiYWNvblwiLCBcIkFkZCBoYW1cIiwgXCJBZGQgZWdnXCJcblx0XHRdfSxcblx0XHRcdHsgbmFtZTogJ1BpenphIE1hcmdhcml0YScsIHByaWNlOiAn4oKsMi40MCcsIGRlc2M6ICdQcm9kdWN0IGRlc2NyaXB0aW9uIGdvZXMgaGVyZSd9XG5cdFx0XTtcblx0XHR0aGlzLm1haW4gPSBbeyBuYW1lOiAnUGl6emEgTWFyZ2FyaXRhJywgcHJpY2U6ICfigqwyLjQwJywgZGVzYzogJ1Byb2R1Y3QgZGVzY3JpcHRpb24gZ29lcyBoZXJlJ31cblx0XHRdO1xuXHRcdHRoaXMucGFnZS5hY3Rpb25CYXIubmF2aWdhdGlvbkJ1dHRvbi5zdHlsZS5jb2xvciA9IG5ldyBDb2xvcignIzAwMDAwMCcpO1xuXHRcdGlmICh0b3Btb3N0KCkuaW9zKSB7XG5cdFx0XHR2YXIgbmF2aWdhdGlvbkJhciA9IHRvcG1vc3QoKS5pb3MuY29udHJvbGxlci5uYXZpZ2F0aW9uQmFyO1xuXHRcdFx0bmF2aWdhdGlvbkJhci5zZXRCYWNrZ3JvdW5kSW1hZ2VGb3JCYXJNZXRyaWNzKFVJSW1hZ2UubmV3KCksIFVJQmFyTWV0cmljcy5VSUJhck1ldHJpY3NEZWZhdWx0KTtcblx0XHRcdG5hdmlnYXRpb25CYXIuc2hhZG93SW1hZ2UgPSBVSUltYWdlLm5ldygpO1xuICAgIH1cblxuXHQgfVxuXHQgZ2V0Vmlldygpe1xuXHRcdHRoaXMuc3RhcnRPcmRlciA9IHRydWU7XG5cdFx0dGhpcy5hZGRCb3R0b21Cb3JkZXIoXCJvcmRlclwiKTtcblx0IH1cblx0IHNlbGVjdGVkSW5kZXhDaGFuZ2VkKHBpY2tlcikge1xuICAgICAgICBjb25zb2xlLmxvZygncGlja2VyIHNlbGVjdGlvbjogJyArIHBpY2tlci5zZWxlY3RlZEluZGV4KTtcblx0fVxuXG5cdGFkZEJvdHRvbUJvcmRlciAoaWQpIHtcblx0XHRsZXQgd3JhcCA9IHRoaXM7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0bGV0IG9yZGVyVHlwZSA9IDxEb2NrTGF5b3V0PndyYXAucGFnZS5nZXRWaWV3QnlJZChpZCk7XG5cdFx0XHRjb25zb2xlLmxvZyhvcmRlclR5cGUsIFwiIE9yZWRlclwiKTtcblx0XHRcdG9yZGVyVHlwZS5ib3JkZXJCb3R0b21XaWR0aD0gMTtcblx0XHRcdG9yZGVyVHlwZS5ib3JkZXJCb3R0b21Db2xvcj0gbmV3IENvbG9yKFwiIzQzNDM0M1wiKTtcblx0fSwwKTtcblx0fVxuXHRcblx0c2VsZWN0T3JkZXIocGlja2VyKXtcblx0XHRjb25zb2xlLmxvZyhwaWNrZXIuc2VsZWN0ZWRJbmRleCk7XG5cdFx0cGlja2VyLnNlbGVjdGVkSW5kZXggPT09IHVuZGVmaW5lZCA/IHBpY2tlci5zZWxlY3RlZEluZGV4ID0gMCA6ICcnXG5cdFx0dGhpcy5zZWxlY3RlZE9yZGVyID0gdGhpcy5vcmVkZXJMaXN0W3BpY2tlci5zZWxlY3RlZEluZGV4XSB8fCBcIlBsZWFzZSBzZWxlY3QgYW4gb3JkZXIgdHlwZVwiO1xuXHRcdHRoaXMuc2VsZWN0Kys7XG5cdFx0dGhpcy5zZWxlY3RlZE9yZGVyID0gdGhpcy5vcmVkZXJMaXN0W3BpY2tlci5zZWxlY3RlZEluZGV4XTtcblx0XHRcdHRoaXMuYWRkQm90dG9tQm9yZGVyKFwib3JkZXJcIik7XG5cdFx0XHR0aGlzLmFkZEJvdHRvbUJvcmRlcihcInRhYmxlXCIpO1xuXHR9XG5cblx0Zm9vKCl7XG5cdFx0dGhpcy5zZWxlY3QrKztcblx0XHRjb25zb2xlLmxvZyh0aGlzLnNlbGVjdCsrKVxuXHR9XG5cblxufSJdfQ==