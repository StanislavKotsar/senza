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
        this.screen.width = platformModule.screen.mainScreen.widthPixels;
        this.screen.height = platformModule.screen.mainScreen.heightPixels;
        this.screen.heightPercent = (platformModule.screen.mainScreen.heightPixels / 100).toFixed(1);
        if (this.screen.height === 2208) {
            this.whiteCardHeight = -(this.screen.height * 0.78) + 'px';
        }
        else if (this.screen.height === 1136) {
            this.whiteCardHeight = -(this.screen.height * 0.86) + 'px';
        }
        else if (this.screen.height === 1334) {
            this.whiteCardHeight = -(this.screen.height * 0.84) + 'px';
        }
        else {
            this.whiteCardHeight = -(this.screen.height * 0.86) + 'px';
        }
        console.log('whiteCardHeight ', this.whiteCardHeight);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbV9wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW1fcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsZ0NBQStCO0FBQy9CLCtCQUE4QjtBQUM5QixrQ0FBeUM7QUFFekMsMERBQTREO0FBRzVELDBFQUFzRTtBQU10RSxrQ0FBZSxDQUFDLFNBQVMsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUMsT0FBTyxFQUEvQyxDQUErQyxDQUFDLENBQUM7QUFTbEYsSUFBYSxrQkFBa0I7SUFpQjlCLDRCQUFvQixJQUFVLEVBQVUsS0FBWTtRQUFoQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTztRQWRwRCxTQUFJLEdBQVcsU0FBUyxDQUFDO1FBS3pCLFdBQU0sR0FBRztZQUNSLEtBQUssRUFBQyxDQUFDO1lBQ1AsTUFBTSxFQUFDLENBQUM7WUFDUixhQUFhLEVBQUUsRUFBRTtTQUNqQixDQUFBO1FBQ0QsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsa0JBQWEsR0FBRyxhQUFhLENBQUM7UUF3RTlCLGVBQVUsR0FBRyxVQUFDLEtBQUs7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQztJQXhFbUQsQ0FBQztJQUV6RCxxQ0FBUSxHQUFSO1FBRUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLHNCQUFzQixFQUFFLGdCQUFnQixFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxD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QUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7SUFDM0IsQ0FBQztJQU9GLHlCQUFDO0FBQUQsQ0FBQyxBQTVGRCxJQTRGQztBQTNGd0I7SUFBdkIsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7OEJBQVksaUJBQVU7cURBQUM7QUFDeEI7SUFBckIsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7OEJBQVUsaUJBQVU7bURBQUM7QUFGOUIsa0JBQWtCO0lBTjlCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsMENBQTBDO1FBQ3ZELFNBQVMsRUFBRSxDQUFDLHlDQUF5QyxDQUFDO0tBQ3RELENBQUM7cUNBbUJ5QixXQUFJLEVBQWlCLGFBQUs7R0FqQnhDLGtCQUFrQixDQTRGOUI7QUE1RlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgdG9wbW9zdCxGcmFtZSB9IGZyb20gXCJ1aS9mcmFtZVwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBEb2NrTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvZG9jay1sYXlvdXRcIjtcbmltcG9ydCAqIGFzIGxpc3RQaWNrZXJNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC1waWNrZXJcIjtcbmltcG9ydCB7cmVnaXN0ZXJFbGVtZW50fSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuZGVjbGFyZSB2YXIgVUlJbWFnZTogYW55O1xuZGVjbGFyZSB2YXIgVUlCYXJNZXRyaWNzOiBhbnk7XG5kZWNsYXJlIHZhciBjb250cm9sbGVyOiBhbnk7XG5kZWNsYXJlIHZhciBDR1NpemVNYWtlOiBhbnk7XG5kZWNsYXJlIHZhclx0VUlDb2xvcjogYW55O1xucmVnaXN0ZXJFbGVtZW50KFwiTWFwVmlld1wiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNka1wiKS5NYXBWaWV3KTtcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdpdGVtX3BhZ2UnLFxuXHR0ZW1wbGF0ZVVybDogJ3BhZ2VzL2l0ZW1fcGFnZS9pdGVtX3BhZ2UuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsncGFnZXMvaXRlbV9wYWdlL2l0ZW1fcGFnZS5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBJdGVtX3BhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRAVmlld0NoaWxkKFwib3JkZXJ0eXBlXCIpIG9yZGVydHlwZTogRWxlbWVudFJlZjtcblx0QFZpZXdDaGlsZChcIk1hcFZpZXdcIikgbWFwVmlldzogRWxlbWVudFJlZjtcblx0c2hvdzogc3RyaW5nID0gJ3Jld2FyZHMnO1xuXHRzdGFydGVyczpbe31dO1xuXHRtYWluOlt7fV07XG5cdG9yZWRlckxpc3Q7XG5cdHdoaXRlQ2FyZEhlaWdodDtcblx0c2NyZWVuID0ge1x0XG5cdFx0d2lkdGg6MCxcblx0XHRoZWlnaHQ6MCxcblx0XHRoZWlnaHRQZXJjZW50OiAnJ1xuXHR9XG5cdHN0YXJ0T3JkZXIgPSBmYWxzZTtcblx0c2VsZWN0ID0gMDtcblx0c2VsZWN0ZWRPcmRlciA9IFwiT3JkZXIgVGFibGVcIjtcblx0c2VsZWN0ZWRJdGVtOiBhbnk7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBmcmFtZTogRnJhbWUpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdFxuXHRcdHRoaXMub3JlZGVyTGlzdCA9IFtcIk9yZGVyIGZvciBjb2xsZWN0aW9uXCIsIFwiT3JkZXIgYXQgdGFibGVcIiwgXCJPcmRlciBmb3IgZGVsaXZlcnlcIl07XG5cdFx0dGhpcy5zY3JlZW4ud2lkdGggPSBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi53aWR0aFBpeGVscztcblx0XHR0aGlzLnNjcmVlbi5oZWlnaHQgPSBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRQaXhlbHM7XG5cdFx0dGhpcy5zY3JlZW4uaGVpZ2h0UGVyY2VudCA9IChwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRQaXhlbHMvMTAwKS50b0ZpeGVkKDEpO1xuXHRcdGlmKHRoaXMuc2NyZWVuLmhlaWdodCA9PT0gMjIwOCkge1xuXHRcdFx0dGhpcy53aGl0ZUNhcmRIZWlnaHQgPSAtKHRoaXMuc2NyZWVuLmhlaWdodCAqIDAuNzgpICsncHgnO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zY3JlZW4uaGVpZ2h0ID09PSAxMTM2KXtcblx0XHRcdHRoaXMud2hpdGVDYXJkSGVpZ2h0ID0gLSh0aGlzLnNjcmVlbi5oZWlnaHQgKiAwLjg2KSArICdweCc7XG5cdFx0fSBlbHNlIGlmICh0aGlzLnNjcmVlbi5oZWlnaHQgPT09IDEzMzQpe1xuXHRcdFx0dGhpcy53aGl0ZUNhcmRIZWlnaHQgPSAtKHRoaXMuc2NyZWVuLmhlaWdodCAqIDAuODQpICsgJ3B4Jztcblx0XHR9ZWxzZXtcblx0XHRcdHRoaXMud2hpdGVDYXJkSGVpZ2h0ID0gLSh0aGlzLnNjcmVlbi5oZWlnaHQgKiAwLjg2KSArICdweCc7XG5cdFx0fVxuXG5cdFx0Y29uc29sZS5sb2coJ3doaXRlQ2FyZEhlaWdodCAnLCB0aGlzLndoaXRlQ2FyZEhlaWdodClcblx0XHR0aGlzLnN0YXJ0ZXJzID0gW3sgbmFtZTogJ1BpenphIE1hcmdhcml0YScsIHByaWNlOiAn4oKsMi40MCcsIGRlc2M6ICdQcm9kdWN0IGRlc2NyaXB0aW9uIGdvZXMgaGVyZScsIGV4dHJhczpbXG5cdFx0XHRcIkV4dHJhIGNoZWVzZVwiLCBcIkV4dHJhIHRvbWF0b1wiLCBcIkFkZCBiYWNvblwiLCBcIkFkZCBoYW1cIiwgXCJBZGQgZWdnXCJcblx0XHRdfSxcblx0XHRcdHsgbmFtZTogJ1BpenphIE1hcmdhcml0YScsIHByaWNlOiAn4oKsMi40MCcsIGRlc2M6ICdQcm9kdWN0IGRlc2NyaXB0aW9uIGdvZXMgaGVyZScsIGV4dHJhczpbXG5cdFx0XHRcIkV4dHJhIGNoZWVzZVwiLCBcIkV4dHJhIHRvbWF0b1wiLCBcIkFkZCBiYWNvblwiLCBcIkFkZCBoYW1cIiwgXCJBZGQgZWdnXCJcblx0XHRdfVxuXHRcdF07XG5cdFx0dGhpcy5tYWluID0gW3sgbmFtZTogJ1BpenphIE1hcmdhcml0YScsIHByaWNlOiAn4oKsMi40MCcsIGRlc2M6ICdQcm9kdWN0IGRlc2NyaXB0aW9uIGdvZXMgaGVyZSd9XG5cdFx0XTtcblx0XHR0aGlzLnBhZ2UuYWN0aW9uQmFyLm5hdmlnYXRpb25CdXR0b24uc3R5bGUuY29sb3IgPSBuZXcgQ29sb3IoJyMwMDAwMDAnKTtcblx0XHRpZiAodG9wbW9zdCgpLmlvcykge1xuXHRcdFx0dmFyIG5hdmlnYXRpb25CYXIgPSB0b3Btb3N0KCkuaW9zLmNvbnRyb2xsZXIubmF2aWdhdGlvbkJhcjtcblx0XHRcdG5hdmlnYXRpb25CYXIuc2V0QmFja2dyb3VuZEltYWdlRm9yQmFyTWV0cmljcyhVSUltYWdlLm5ldygpLCBVSUJhck1ldHJpY3MuVUlCYXJNZXRyaWNzRGVmYXVsdCk7XG5cdFx0XHRuYXZpZ2F0aW9uQmFyLnNoYWRvd0ltYWdlID0gVUlJbWFnZS5uZXcoKTtcbiAgICB9XG5cblx0IH1cblx0IGdldFZpZXcoaXRlbSl7XG5cdFx0dGhpcy5zdGFydE9yZGVyID0gdHJ1ZTtcblx0XHR0aGlzLmFkZEJvdHRvbUJvcmRlcihcIm9yZGVyXCIpO1xuXHRcdHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcblx0IH1cblx0IHNlbGVjdGVkSW5kZXhDaGFuZ2VkKHBpY2tlcikge1xuICAgICAgICBjb25zb2xlLmxvZygncGlja2VyIHNlbGVjdGlvbjogJyArIHBpY2tlci5zZWxlY3RlZEluZGV4KTtcblx0fVxuXG5cdGFkZEJvdHRvbUJvcmRlciAoaWQpIHtcblx0XHRsZXQgd3JhcCA9IHRoaXM7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0bGV0IG9yZGVyVHlwZSA9IDxEb2NrTGF5b3V0PndyYXAucGFnZS5nZXRWaWV3QnlJZChpZCk7XG5cdFx0XHRjb25zb2xlLmxvZyhvcmRlclR5cGUsIFwiIE9yZWRlclwiKTtcblx0XHRcdG9yZGVyVHlwZS5ib3JkZXJCb3R0b21XaWR0aD0gMTtcblx0XHRcdG9yZGVyVHlwZS5ib3JkZXJCb3R0b21Db2xvcj0gbmV3IENvbG9yKFwiIzQzNDM0M1wiKTtcblx0fSwwKTtcblx0fVxuXHRcblx0c2VsZWN0T3JkZXIocGlja2VyKXtcblx0XHRjb25zb2xlLmxvZyhwaWNrZXIuc2VsZWN0ZWRJbmRleCk7XG5cdFx0cGlja2VyLnNlbGVjdGVkSW5kZXggPT09IHVuZGVmaW5lZCA/IHBpY2tlci5zZWxlY3RlZEluZGV4ID0gMCA6ICcnXG5cdFx0dGhpcy5zZWxlY3RlZE9yZGVyID0gdGhpcy5vcmVkZXJMaXN0W3BpY2tlci5zZWxlY3RlZEluZGV4XSB8fCBcIlBsZWFzZSBzZWxlY3QgYW4gb3JkZXIgdHlwZVwiO1xuXHRcdHRoaXMuc2VsZWN0Kys7XG5cdFx0dGhpcy5zZWxlY3RlZE9yZGVyID0gdGhpcy5vcmVkZXJMaXN0W3BpY2tlci5zZWxlY3RlZEluZGV4XTtcblx0XHRcdHRoaXMuYWRkQm90dG9tQm9yZGVyKFwib3JkZXJcIik7XG5cdFx0XHR0aGlzLmFkZEJvdHRvbUJvcmRlcihcInRhYmxlXCIpO1xuXHR9XG5cblx0Zm9vKCl7XG5cdFx0dGhpcy5zZWxlY3QrKztcblx0XHRjb25zb2xlLmxvZyh0aGlzLnNlbGVjdCsrKVxuXHR9XG5cblx0b25NYXBSZWFkeSA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1hcCBSZWFkeVwiKTtcbiAgICB9O1xuXG5cbn0iXX0=