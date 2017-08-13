"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var color_1 = require("color");
var frame_1 = require("ui/frame");
var platformModule = require("tns-core-modules/platform");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("MapView", function () { return require("nativescript-google-maps-sdk").MapView; });
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
        this.onMapReady = function (event) {
            console.log("Map Ready");
        };
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
__decorate([
    core_1.ViewChild("MapView"),
    __metadata("design:type", core_1.ElementRef)
], Item_pageComponent.prototype, "mapView", void 0);
Item_pageComponent = __decorate([
    core_1.Component({
        selector: 'item_page',
        templateUrl: 'pages/item_page/item_page.component.html',
        styleUrls: ['pages/item_page/item_page.component.css']
    }),
    __metadata("design:paramtypes", [page_1.Page, frame_1.Frame])
], Item_pageComponent);
exports.Item_pageComponent = Item_pageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbV9wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW1fcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsZ0NBQStCO0FBQy9CLCtCQUE4QjtBQUM5QixrQ0FBeUM7QUFFekMsMERBQTREO0FBRzVELDBFQUFzRTtBQU10RSxrQ0FBZSxDQUFDLFNBQVMsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUMsT0FBTyxFQUEvQyxDQUErQyxDQUFDLENBQUM7QUFTbEYsSUFBYSxrQkFBa0I7SUFnQjlCLDRCQUFvQixJQUFVLEVBQVUsS0FBWTtRQUFoQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTztRQWJwRCxTQUFJLEdBQVcsU0FBUyxDQUFDO1FBSXpCLFdBQU0sR0FBRztZQUNSLEtBQUssRUFBQyxDQUFDO1lBQ1AsTUFBTSxFQUFDLENBQUM7WUFDUixhQUFhLEVBQUUsRUFBRTtTQUNqQixDQUFBO1FBQ0QsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsa0JBQWEsR0FBRyxhQUFhLENBQUM7UUFtRTlCLGVBQVUsR0FBRyxVQUFDLEtBQUs7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQztJQW5FbUQsQ0FBQztJQUV6RCxxQ0FBUSxHQUFSO1FBRUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLHNCQUFzQixFQUFFLGdCQUFnQixFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDbkYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFV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QWtCeUIsV0FBSSxFQUFpQixhQUFLO0dBaEJ4QyxrQkFBa0IsQ0FzRjlCO0FBdEZZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCB7IHRvcG1vc3QsRnJhbWUgfSBmcm9tIFwidWkvZnJhbWVcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybU1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgRG9ja0xheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL2RvY2stbGF5b3V0XCI7XG5pbXBvcnQgKiBhcyBsaXN0UGlja2VyTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3QtcGlja2VyXCI7XG5pbXBvcnQge3JlZ2lzdGVyRWxlbWVudH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbmRlY2xhcmUgdmFyIFVJSW1hZ2U6IGFueTtcbmRlY2xhcmUgdmFyIFVJQmFyTWV0cmljczogYW55O1xuZGVjbGFyZSB2YXIgY29udHJvbGxlcjogYW55O1xuZGVjbGFyZSB2YXIgQ0dTaXplTWFrZTogYW55O1xuZGVjbGFyZSB2YXJcdFVJQ29sb3I6IGFueTtcbnJlZ2lzdGVyRWxlbWVudChcIk1hcFZpZXdcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGtcIikuTWFwVmlldyk7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnaXRlbV9wYWdlJyxcblx0dGVtcGxhdGVVcmw6ICdwYWdlcy9pdGVtX3BhZ2UvaXRlbV9wYWdlLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJ3BhZ2VzL2l0ZW1fcGFnZS9pdGVtX3BhZ2UuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgSXRlbV9wYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QFZpZXdDaGlsZChcIm9yZGVydHlwZVwiKSBvcmRlcnR5cGU6IEVsZW1lbnRSZWY7XG5cdEBWaWV3Q2hpbGQoXCJNYXBWaWV3XCIpIG1hcFZpZXc6IEVsZW1lbnRSZWY7XG5cdHNob3c6IHN0cmluZyA9ICdyZXdhcmRzJztcblx0c3RhcnRlcnM6W3t9XTtcblx0bWFpbjpbe31dO1xuXHRvcmVkZXJMaXN0O1xuXHRzY3JlZW4gPSB7XHRcblx0XHR3aWR0aDowLFxuXHRcdGhlaWdodDowLFxuXHRcdGhlaWdodFBlcmNlbnQ6ICcnXG5cdH1cblx0c3RhcnRPcmRlciA9IGZhbHNlO1xuXHRzZWxlY3QgPSAwO1xuXHRzZWxlY3RlZE9yZGVyID0gXCJPcmRlciBUYWJsZVwiO1xuXHRzZWxlY3RlZEl0ZW06IGFueTtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIGZyYW1lOiBGcmFtZSkgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0XG5cdFx0dGhpcy5vcmVkZXJMaXN0ID0gW1wiT3JkZXIgZm9yIGNvbGxlY3Rpb25cIiwgXCJPcmRlciBhdCB0YWJsZVwiLCBcIk9yZGVyIGZvciBkZWxpdmVyeVwiXTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoXCJ3cmFwXCIpKTtcblx0XHRjb25zb2xlLmxvZyhcIkRldmljZSBtb2RlbDogXCIgKyBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi53aWR0aFBpeGVscyk7XG5cdFx0dGhpcy5zY3JlZW4ud2lkdGggPSBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi53aWR0aFBpeGVscztcblx0XHR0aGlzLnNjcmVlbi5oZWlnaHQgPSBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRQaXhlbHM7XG5cdFx0dGhpcy5zY3JlZW4uaGVpZ2h0UGVyY2VudCA9IChwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRQaXhlbHMvMTAwKS50b0ZpeGVkKDEpO1xuXHRcdGNvbnNvbGUubG9nKFwiRGV2aWNlIG1vZGVsOiBcIiArIHRoaXMuc2NyZWVuLndpZHRoKTtcblx0XHRjb25zb2xlLmxvZyhcIkRldmljZSBoZWlnaHQ6IFwiICsgdGhpcy5zY3JlZW4uaGVpZ2h0KTtcblx0XHRjb25zb2xlLmxvZyhcIlBlcmNlbnQ6IFwiICsgdGhpcy5zY3JlZW4uaGVpZ2h0UGVyY2VudCk7XG5cblx0XHR0aGlzLnN0YXJ0ZXJzID0gW3sgbmFtZTogJ1BpenphIE1hcmdhcml0YScsIHByaWNlOiAn4oKsMi40MCcsIGRlc2M6ICdQcm9kdWN0IGRlc2NyaXB0aW9uIGdvZXMgaGVyZScsIGV4dHJhczpbXG5cdFx0XHRcIkV4dHJhIGNoZWVzZVwiLCBcIkV4dHJhIHRvbWF0b1wiLCBcIkFkZCBiYWNvblwiLCBcIkFkZCBoYW1cIiwgXCJBZGQgZWdnXCJcblx0XHRdfSxcblx0XHRcdHsgbmFtZTogJ1BpenphIE1hcmdhcml0YScsIHByaWNlOiAn4oKsMi40MCcsIGRlc2M6ICdQcm9kdWN0IGRlc2NyaXB0aW9uIGdvZXMgaGVyZScsIGV4dHJhczpbXG5cdFx0XHRcIkV4dHJhIGNoZWVzZVwiLCBcIkV4dHJhIHRvbWF0b1wiLCBcIkFkZCBiYWNvblwiLCBcIkFkZCBoYW1cIiwgXCJBZGQgZWdnXCJcblx0XHRdfVxuXHRcdF07XG5cdFx0dGhpcy5tYWluID0gW3sgbmFtZTogJ1BpenphIE1hcmdhcml0YScsIHByaWNlOiAn4oKsMi40MCcsIGRlc2M6ICdQcm9kdWN0IGRlc2NyaXB0aW9uIGdvZXMgaGVyZSd9XG5cdFx0XTtcblx0XHR0aGlzLnBhZ2UuYWN0aW9uQmFyLm5hdmlnYXRpb25CdXR0b24uc3R5bGUuY29sb3IgPSBuZXcgQ29sb3IoJyMwMDAwMDAnKTtcblx0XHRpZiAodG9wbW9zdCgpLmlvcykge1xuXHRcdFx0dmFyIG5hdmlnYXRpb25CYXIgPSB0b3Btb3N0KCkuaW9zLmNvbnRyb2xsZXIubmF2aWdhdGlvbkJhcjtcblx0XHRcdG5hdmlnYXRpb25CYXIuc2V0QmFja2dyb3VuZEltYWdlRm9yQmFyTWV0cmljcyhVSUltYWdlLm5ldygpLCBVSUJhck1ldHJpY3MuVUlCYXJNZXRyaWNzRGVmYXVsdCk7XG5cdFx0XHRuYXZpZ2F0aW9uQmFyLnNoYWRvd0ltYWdlID0gVUlJbWFnZS5uZXcoKTtcbiAgICB9XG5cblx0IH1cblx0IGdldFZpZXcoaXRlbSl7XG5cdFx0dGhpcy5zdGFydE9yZGVyID0gdHJ1ZTtcblx0XHR0aGlzLmFkZEJvdHRvbUJvcmRlcihcIm9yZGVyXCIpO1xuXHRcdHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcblx0IH1cblx0IHNlbGVjdGVkSW5kZXhDaGFuZ2VkKHBpY2tlcikge1xuICAgICAgICBjb25zb2xlLmxvZygncGlja2VyIHNlbGVjdGlvbjogJyArIHBpY2tlci5zZWxlY3RlZEluZGV4KTtcblx0fVxuXG5cdGFkZEJvdHRvbUJvcmRlciAoaWQpIHtcblx0XHRsZXQgd3JhcCA9IHRoaXM7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0bGV0IG9yZGVyVHlwZSA9IDxEb2NrTGF5b3V0PndyYXAucGFnZS5nZXRWaWV3QnlJZChpZCk7XG5cdFx0XHRjb25zb2xlLmxvZyhvcmRlclR5cGUsIFwiIE9yZWRlclwiKTtcblx0XHRcdG9yZGVyVHlwZS5ib3JkZXJCb3R0b21XaWR0aD0gMTtcblx0XHRcdG9yZGVyVHlwZS5ib3JkZXJCb3R0b21Db2xvcj0gbmV3IENvbG9yKFwiIzQzNDM0M1wiKTtcblx0fSwwKTtcblx0fVxuXHRcblx0c2VsZWN0T3JkZXIocGlja2VyKXtcblx0XHRjb25zb2xlLmxvZyhwaWNrZXIuc2VsZWN0ZWRJbmRleCk7XG5cdFx0cGlja2VyLnNlbGVjdGVkSW5kZXggPT09IHVuZGVmaW5lZCA/IHBpY2tlci5zZWxlY3RlZEluZGV4ID0gMCA6ICcnXG5cdFx0dGhpcy5zZWxlY3RlZE9yZGVyID0gdGhpcy5vcmVkZXJMaXN0W3BpY2tlci5zZWxlY3RlZEluZGV4XSB8fCBcIlBsZWFzZSBzZWxlY3QgYW4gb3JkZXIgdHlwZVwiO1xuXHRcdHRoaXMuc2VsZWN0Kys7XG5cdFx0dGhpcy5zZWxlY3RlZE9yZGVyID0gdGhpcy5vcmVkZXJMaXN0W3BpY2tlci5zZWxlY3RlZEluZGV4XTtcblx0XHRcdHRoaXMuYWRkQm90dG9tQm9yZGVyKFwib3JkZXJcIik7XG5cdFx0XHR0aGlzLmFkZEJvdHRvbUJvcmRlcihcInRhYmxlXCIpO1xuXHR9XG5cblx0Zm9vKCl7XG5cdFx0dGhpcy5zZWxlY3QrKztcblx0XHRjb25zb2xlLmxvZyh0aGlzLnNlbGVjdCsrKVxuXHR9XG5cblx0b25NYXBSZWFkeSA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1hcCBSZWFkeVwiKTtcbiAgICB9O1xuXG5cbn0iXX0=