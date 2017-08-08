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
            { name: 'Pizza Margarita', price: '€2.40', desc: 'Product description goes here', extras: [
                    "Extra cheese", "Extra tomato", "Add bacon", "Add ham", "Add egg"
                ] }
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
    Item_pageComponent.prototype.getView = function (item) {
        this.startOrder = true;
        this.addBottomBorder("order");
        this.selectedItem = item;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbV9wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW1fcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsZ0NBQStCO0FBQy9CLCtCQUE4QjtBQUM5QixrQ0FBeUM7QUFFekMsMERBQTREO0FBZ0I1RCxJQUFhLGtCQUFrQjtJQWU5Qiw0QkFBb0IsSUFBVSxFQUFVLEtBQVk7UUFBaEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU87UUFicEQsU0FBSSxHQUFXLFNBQVMsQ0FBQztRQUl6QixXQUFNLEdBQUc7WUFDUixLQUFLLEVBQUMsQ0FBQztZQUNQLE1BQU0sRUFBQyxDQUFDO1lBQ1IsYUFBYSxFQUFFLEVBQUU7U0FDakIsQ0FBQTtRQUNELGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLGtCQUFhLEdBQUcsYUFBYSxDQUFDO0lBRTBCLENBQUM7SUFFekQscUNBQVEsR0FBUjtRQUVDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxnQkFBZ0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ25GLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7UUFDbkUsSUFBSSxDQUFD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QU0sQ0FBQyxhQUFhLEtBQUssU0FBUyxHQUFHLE1BQU0sQ0FBQyxhQUFhLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtRQUNsRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLDZCQUE2QixDQUFDO1FBQzVGLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxnQ0FBRyxHQUFIO1FBQ0MsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQTtJQUMzQixDQUFDO0lBR0YseUJBQUM7QUFBRCxDQUFDLEFBakZELElBaUZDO0FBaEZ3QjtJQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQzs4QkFBWSxpQkFBVTtxREFBQztBQURsQyxrQkFBa0I7SUFOOUIsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSwwQ0FBMEM7UUFDdkQsU0FBUyxFQUFFLENBQUMseUNBQXlDLENBQUM7S0FDdEQsQ0FBQztxQ0FpQnlCLFdBQUksRUFBaUIsYUFBSztHQWZ4QyxrQkFBa0IsQ0FpRjlCO0FBakZZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCB7IHRvcG1vc3QsRnJhbWUgfSBmcm9tIFwidWkvZnJhbWVcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybU1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgRG9ja0xheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL2RvY2stbGF5b3V0XCI7XG5pbXBvcnQgKiBhcyBsaXN0UGlja2VyTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3QtcGlja2VyXCI7XG5cbmRlY2xhcmUgdmFyIFVJSW1hZ2U6IGFueTtcbmRlY2xhcmUgdmFyIFVJQmFyTWV0cmljczogYW55O1xuZGVjbGFyZSB2YXIgY29udHJvbGxlcjogYW55O1xuZGVjbGFyZSB2YXIgQ0dTaXplTWFrZTogYW55O1xuZGVjbGFyZSB2YXJcdFVJQ29sb3I6IGFueTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnaXRlbV9wYWdlJyxcblx0dGVtcGxhdGVVcmw6ICdwYWdlcy9pdGVtX3BhZ2UvaXRlbV9wYWdlLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJ3BhZ2VzL2l0ZW1fcGFnZS9pdGVtX3BhZ2UuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgSXRlbV9wYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QFZpZXdDaGlsZChcIm9yZGVydHlwZVwiKSBvcmRlcnR5cGU6IEVsZW1lbnRSZWY7XG5cdHNob3c6IHN0cmluZyA9ICdyZXdhcmRzJztcblx0c3RhcnRlcnM6W3t9XTtcblx0bWFpbjpbe31dO1xuXHRvcmVkZXJMaXN0O1xuXHRzY3JlZW4gPSB7XHRcblx0XHR3aWR0aDowLFxuXHRcdGhlaWdodDowLFxuXHRcdGhlaWdodFBlcmNlbnQ6ICcnXG5cdH1cblx0c3RhcnRPcmRlciA9IGZhbHNlO1xuXHRzZWxlY3QgPSAwO1xuXHRzZWxlY3RlZE9yZGVyID0gXCJPcmRlciBUYWJsZVwiO1xuXHRzZWxlY3RlZEl0ZW06IGFueTtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIGZyYW1lOiBGcmFtZSkgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0XG5cdFx0dGhpcy5vcmVkZXJMaXN0ID0gW1wiT3JkZXIgZm9yIGNvbGxlY3Rpb25cIiwgXCJPcmRlciBhdCB0YWJsZVwiLCBcIk9yZGVyIGZvciBkZWxpdmVyeVwiXTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoXCJ3cmFwXCIpKTtcblx0XHRjb25zb2xlLmxvZyhcIkRldmljZSBtb2RlbDogXCIgKyBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi53aWR0aFBpeGVscyk7XG5cdFx0dGhpcy5zY3JlZW4ud2lkdGggPSBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi53aWR0aFBpeGVscztcblx0XHR0aGlzLnNjcmVlbi5oZWlnaHQgPSBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRQaXhlbHM7XG5cdFx0dGhpcy5zY3JlZW4uaGVpZ2h0UGVyY2VudCA9IChwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRQaXhlbHMvMTAwKS50b0ZpeGVkKDEpO1xuXHRcdGNvbnNvbGUubG9nKFwiRGV2aWNlIG1vZGVsOiBcIiArIHRoaXMuc2NyZWVuLndpZHRoKTtcblx0XHRjb25zb2xlLmxvZyhcIkRldmljZSBoZWlnaHQ6IFwiICsgdGhpcy5zY3JlZW4uaGVpZ2h0KTtcblx0XHRjb25zb2xlLmxvZyhcIlBlcmNlbnQ6IFwiICsgdGhpcy5zY3JlZW4uaGVpZ2h0UGVyY2VudCk7XG5cblx0XHR0aGlzLnN0YXJ0ZXJzID0gW3sgbmFtZTogJ1BpenphIE1hcmdhcml0YScsIHByaWNlOiAn4oKsMi40MCcsIGRlc2M6ICdQcm9kdWN0IGRlc2NyaXB0aW9uIGdvZXMgaGVyZScsIGV4dHJhczpbXG5cdFx0XHRcIkV4dHJhIGNoZWVzZVwiLCBcIkV4dHJhIHRvbWF0b1wiLCBcIkFkZCBiYWNvblwiLCBcIkFkZCBoYW1cIiwgXCJBZGQgZWdnXCJcblx0XHRdfSxcblx0XHRcdHsgbmFtZTogJ1BpenphIE1hcmdhcml0YScsIHByaWNlOiAn4oKsMi40MCcsIGRlc2M6ICdQcm9kdWN0IGRlc2NyaXB0aW9uIGdvZXMgaGVyZScsIGV4dHJhczpbXG5cdFx0XHRcIkV4dHJhIGNoZWVzZVwiLCBcIkV4dHJhIHRvbWF0b1wiLCBcIkFkZCBiYWNvblwiLCBcIkFkZCBoYW1cIiwgXCJBZGQgZWdnXCJcblx0XHRdfVxuXHRcdF07XG5cdFx0dGhpcy5tYWluID0gW3sgbmFtZTogJ1BpenphIE1hcmdhcml0YScsIHByaWNlOiAn4oKsMi40MCcsIGRlc2M6ICdQcm9kdWN0IGRlc2NyaXB0aW9uIGdvZXMgaGVyZSd9XG5cdFx0XTtcblx0XHR0aGlzLnBhZ2UuYWN0aW9uQmFyLm5hdmlnYXRpb25CdXR0b24uc3R5bGUuY29sb3IgPSBuZXcgQ29sb3IoJyMwMDAwMDAnKTtcblx0XHRpZiAodG9wbW9zdCgpLmlvcykge1xuXHRcdFx0dmFyIG5hdmlnYXRpb25CYXIgPSB0b3Btb3N0KCkuaW9zLmNvbnRyb2xsZXIubmF2aWdhdGlvbkJhcjtcblx0XHRcdG5hdmlnYXRpb25CYXIuc2V0QmFja2dyb3VuZEltYWdlRm9yQmFyTWV0cmljcyhVSUltYWdlLm5ldygpLCBVSUJhck1ldHJpY3MuVUlCYXJNZXRyaWNzRGVmYXVsdCk7XG5cdFx0XHRuYXZpZ2F0aW9uQmFyLnNoYWRvd0ltYWdlID0gVUlJbWFnZS5uZXcoKTtcbiAgICB9XG5cblx0IH1cblx0IGdldFZpZXcoaXRlbSl7XG5cdFx0dGhpcy5zdGFydE9yZGVyID0gdHJ1ZTtcblx0XHR0aGlzLmFkZEJvdHRvbUJvcmRlcihcIm9yZGVyXCIpO1xuXHRcdHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcblx0IH1cblx0IHNlbGVjdGVkSW5kZXhDaGFuZ2VkKHBpY2tlcikge1xuICAgICAgICBjb25zb2xlLmxvZygncGlja2VyIHNlbGVjdGlvbjogJyArIHBpY2tlci5zZWxlY3RlZEluZGV4KTtcblx0fVxuXG5cdGFkZEJvdHRvbUJvcmRlciAoaWQpIHtcblx0XHRsZXQgd3JhcCA9IHRoaXM7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0bGV0IG9yZGVyVHlwZSA9IDxEb2NrTGF5b3V0PndyYXAucGFnZS5nZXRWaWV3QnlJZChpZCk7XG5cdFx0XHRjb25zb2xlLmxvZyhvcmRlclR5cGUsIFwiIE9yZWRlclwiKTtcblx0XHRcdG9yZGVyVHlwZS5ib3JkZXJCb3R0b21XaWR0aD0gMTtcblx0XHRcdG9yZGVyVHlwZS5ib3JkZXJCb3R0b21Db2xvcj0gbmV3IENvbG9yKFwiIzQzNDM0M1wiKTtcblx0fSwwKTtcblx0fVxuXHRcblx0c2VsZWN0T3JkZXIocGlja2VyKXtcblx0XHRjb25zb2xlLmxvZyhwaWNrZXIuc2VsZWN0ZWRJbmRleCk7XG5cdFx0cGlja2VyLnNlbGVjdGVkSW5kZXggPT09IHVuZGVmaW5lZCA/IHBpY2tlci5zZWxlY3RlZEluZGV4ID0gMCA6ICcnXG5cdFx0dGhpcy5zZWxlY3RlZE9yZGVyID0gdGhpcy5vcmVkZXJMaXN0W3BpY2tlci5zZWxlY3RlZEluZGV4XSB8fCBcIlBsZWFzZSBzZWxlY3QgYW4gb3JkZXIgdHlwZVwiO1xuXHRcdHRoaXMuc2VsZWN0Kys7XG5cdFx0dGhpcy5zZWxlY3RlZE9yZGVyID0gdGhpcy5vcmVkZXJMaXN0W3BpY2tlci5zZWxlY3RlZEluZGV4XTtcblx0XHRcdHRoaXMuYWRkQm90dG9tQm9yZGVyKFwib3JkZXJcIik7XG5cdFx0XHR0aGlzLmFkZEJvdHRvbUJvcmRlcihcInRhYmxlXCIpO1xuXHR9XG5cblx0Zm9vKCl7XG5cdFx0dGhpcy5zZWxlY3QrKztcblx0XHRjb25zb2xlLmxvZyh0aGlzLnNlbGVjdCsrKVxuXHR9XG5cblxufSJdfQ==