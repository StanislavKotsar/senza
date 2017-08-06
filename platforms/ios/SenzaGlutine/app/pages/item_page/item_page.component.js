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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbV9wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW1fcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsZ0NBQStCO0FBQy9CLCtCQUE4QjtBQUM5QixrQ0FBeUM7QUFFekMsMERBQTREO0FBZ0I1RCxJQUFhLGtCQUFrQjtJQWM5Qiw0QkFBb0IsSUFBVSxFQUFVLEtBQVk7UUFBaEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU87UUFacEQsU0FBSSxHQUFXLFNBQVMsQ0FBQztRQUl6QixXQUFNLEdBQUc7WUFDUixLQUFLLEVBQUMsQ0FBQztZQUNQLE1BQU0sRUFBQyxDQUFDO1lBQ1IsYUFBYSxFQUFDLEVBQUU7U0FDaEIsQ0FBQTtRQUNELGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLGtCQUFhLEdBQUcsYUFBYSxDQUFDO0lBQzBCLENBQUM7SUFFekQscUNBQVEsR0FBUjtRQUVDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxnQkFBZ0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ25GLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7UUFDbkUsSUFBSSxDQUFD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QyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekQsVUFBVSxDQUFDO1lBQ1osSUFBSSxTQUFTLEdBQWUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDbEMsU0FBUyxDQUFDLGlCQUFpQixHQUFFLENBQUMsQ0FBQztZQUMxQixTQUFTLENBQUMsaUJBQWlCLEdBQUUsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVELGdDQUFHLEdBQUg7UUFDQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO0lBQzNCLENBQUM7SUFHRix5QkFBQztBQUFELENBQUMsQUE1RUQsSUE0RUM7QUEzRXdCO0lBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDOzhCQUFZLGlCQUFVO3FEQUFDO0FBRGxDLGtCQUFrQjtJQU45QixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLDBDQUEwQztRQUN2RCxTQUFTLEVBQUUsQ0FBQyx5Q0FBeUMsQ0FBQztLQUN0RCxDQUFDO3FDQWdCeUIsV0FBSSxFQUFpQixhQUFLO0dBZHhDLGtCQUFrQixDQTRFOUI7QUE1RVksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgdG9wbW9zdCxGcmFtZSB9IGZyb20gXCJ1aS9mcmFtZVwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBEb2NrTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvZG9jay1sYXlvdXRcIjtcbmltcG9ydCAqIGFzIGxpc3RQaWNrZXJNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC1waWNrZXJcIjtcblxuZGVjbGFyZSB2YXIgVUlJbWFnZTogYW55O1xuZGVjbGFyZSB2YXIgVUlCYXJNZXRyaWNzOiBhbnk7XG5kZWNsYXJlIHZhciBjb250cm9sbGVyOiBhbnk7XG5kZWNsYXJlIHZhciBDR1NpemVNYWtlOiBhbnk7XG5kZWNsYXJlIHZhclx0VUlDb2xvcjogYW55O1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdpdGVtX3BhZ2UnLFxuXHR0ZW1wbGF0ZVVybDogJ3BhZ2VzL2l0ZW1fcGFnZS9pdGVtX3BhZ2UuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsncGFnZXMvaXRlbV9wYWdlL2l0ZW1fcGFnZS5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBJdGVtX3BhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRAVmlld0NoaWxkKFwib3JkZXJ0eXBlXCIpIG9yZGVydHlwZTogRWxlbWVudFJlZjtcblx0c2hvdzogc3RyaW5nID0gJ3Jld2FyZHMnO1xuXHRzdGFydGVyczpbe31dO1xuXHRtYWluOlt7fV07XG5cdG9yZWRlckxpc3Q7XG5cdHNjcmVlbiA9IHtcdFxuXHRcdHdpZHRoOjAsXG5cdFx0aGVpZ2h0OjAsXG5cdFx0aGVpZ2h0UGVyY2VudDonJ1xuXHR9XG5cdHN0YXJ0T3JkZXIgPSBmYWxzZTtcblx0c2VsZWN0ID0gMDtcblx0c2VsZWN0ZWRPcmRlciA9IFwiT3JkZXIgVGFibGVcIjtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIGZyYW1lOiBGcmFtZSkgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0XG5cdFx0dGhpcy5vcmVkZXJMaXN0ID0gW1wiT3JkZXIgZm9yIGNvbGxlY3Rpb25cIiwgXCJPcmRlciBhdCB0YWJsZVwiLCBcIk9yZGVyIGZvciBkZWxpdmVyeVwiXTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoXCJ3cmFwXCIpKTtcblx0XHRjb25zb2xlLmxvZyhcIkRldmljZSBtb2RlbDogXCIgKyBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi53aWR0aFBpeGVscyk7XG5cdFx0dGhpcy5zY3JlZW4ud2lkdGggPSBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi53aWR0aFBpeGVscztcblx0XHR0aGlzLnNjcmVlbi5oZWlnaHQgPSBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRQaXhlbHM7XG5cdFx0dGhpcy5zY3JlZW4uaGVpZ2h0UGVyY2VudCA9IChOdW1iZXIocGxhdGZvcm1Nb2R1bGUuc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0UGl4ZWxzKS8xMDApLnRvRml4ZWQoMSk7XG5cdFx0Y29uc29sZS5sb2coXCJEZXZpY2UgbW9kZWw6IFwiICsgdGhpcy5zY3JlZW4ud2lkdGgpO1xuXHRcdGNvbnNvbGUubG9nKFwiRGV2aWNlIGhlaWdodDogXCIgKyB0aGlzLnNjcmVlbi5oZWlnaHQpO1xuXHRcdGNvbnNvbGUubG9nKFwiUGVyY2VudDogXCIgKyB0aGlzLnNjcmVlbi5oZWlnaHRQZXJjZW50KTtcblxuXHRcdHRoaXMuc3RhcnRlcnMgPSBbeyBuYW1lOiAnUGl6emEgTWFyZ2FyaXRhJywgcHJpY2U6ICfigqwyLjQwJywgZGVzYzogJ1Byb2R1Y3QgZGVzY3JpcHRpb24gZ29lcyBoZXJlJ30sXG5cdFx0XHR7IG5hbWU6ICdQaXp6YSBNYXJnYXJpdGEnLCBwcmljZTogJ+KCrDIuNDAnLCBkZXNjOiAnUHJvZHVjdCBkZXNjcmlwdGlvbiBnb2VzIGhlcmUnfVxuXHRcdF07XG5cdFx0dGhpcy5tYWluID0gW3sgbmFtZTogJ1BpenphIE1hcmdhcml0YScsIHByaWNlOiAn4oKsMi40MCcsIGRlc2M6ICdQcm9kdWN0IGRlc2NyaXB0aW9uIGdvZXMgaGVyZSd9XG5cdFx0XTtcblx0XHR0aGlzLnBhZ2UuYWN0aW9uQmFyLm5hdmlnYXRpb25CdXR0b24uc3R5bGUuY29sb3IgPSBuZXcgQ29sb3IoJyMwMDAwMDAnKTtcblx0XHRpZiAodG9wbW9zdCgpLmlvcykge1xuXHRcdFx0dmFyIG5hdmlnYXRpb25CYXIgPSB0b3Btb3N0KCkuaW9zLmNvbnRyb2xsZXIubmF2aWdhdGlvbkJhcjtcblx0XHRcdG5hdmlnYXRpb25CYXIuc2V0QmFja2dyb3VuZEltYWdlRm9yQmFyTWV0cmljcyhVSUltYWdlLm5ldygpLCBVSUJhck1ldHJpY3MuVUlCYXJNZXRyaWNzRGVmYXVsdCk7XG5cdFx0XHRuYXZpZ2F0aW9uQmFyLnNoYWRvd0ltYWdlID0gVUlJbWFnZS5uZXcoKTtcbiAgICB9XG5cblx0IH1cblx0IGdldFZpZXcoKXtcblx0XHR0aGlzLnN0YXJ0T3JkZXIgPSB0cnVlO1xuXHRcdGxldCB3cmFwID0gdGhpcztcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRsZXQgb3JkZXJUeXBlID0gPERvY2tMYXlvdXQ+d3JhcC5wYWdlLmdldFZpZXdCeUlkKFwib3JkZXJcIik7XG5cdFx0XHRjb25zb2xlLmxvZyhvcmRlclR5cGUsIFwiIE9yZWRlclwiKTtcblx0XHRcdG9yZGVyVHlwZS5ib3JkZXJCb3R0b21XaWR0aD0gMTtcbiAgICAgIFx0XHRvcmRlclR5cGUuYm9yZGVyQm90dG9tQ29sb3I9IG5ldyBDb2xvcihcIiM0MzQzNDNcIik7XG5cdFx0fSwwKTtcblx0IH1cblx0IHNlbGVjdGVkSW5kZXhDaGFuZ2VkKHBpY2tlcikge1xuICAgICAgICBjb25zb2xlLmxvZygncGlja2VyIHNlbGVjdGlvbjogJyArIHBpY2tlci5zZWxlY3RlZEluZGV4KTtcblx0fVxuXHRcblx0c2VsZWN0T3JkZXIocGlja2VyKXtcblx0XHRjb25zb2xlLmxvZyhwaWNrZXIuc2VsZWN0ZWRJbmRleCk7XG5cdFx0cGlja2VyLnNlbGVjdGVkSW5kZXggPT09IHVuZGVmaW5lZCA/IHBpY2tlci5zZWxlY3RlZEluZGV4ID0gMCA6ICcnXG5cdFx0dGhpcy5zZWxlY3RlZE9yZGVyID0gdGhpcy5vcmVkZXJMaXN0W3BpY2tlci5zZWxlY3RlZEluZGV4XSB8fCBcIlBsZWFzZSBzZWxlY3QgYW4gb3JkZXIgdHlwZVwiO1xuXHRcdHRoaXMuc2VsZWN0Kys7XG5cdFx0bGV0IHdyYXAgPSB0aGlzO1xuXHRcdHRoaXMuc2VsZWN0ZWRPcmRlciA9IHRoaXMub3JlZGVyTGlzdFtwaWNrZXIuc2VsZWN0ZWRJbmRleF07XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdGxldCBvcmRlclR5cGUgPSA8RG9ja0xheW91dD53cmFwLnBhZ2UuZ2V0Vmlld0J5SWQoXCJ0YWJsZVwiKTtcblx0XHRcdGNvbnNvbGUubG9nKG9yZGVyVHlwZSwgXCIgT3JlZGVyXCIpO1xuXHRcdFx0b3JkZXJUeXBlLmJvcmRlckJvdHRvbVdpZHRoPSAxO1xuICAgICAgXHRcdG9yZGVyVHlwZS5ib3JkZXJCb3R0b21Db2xvcj0gbmV3IENvbG9yKFwiIzQzNDM0M1wiKTtcblx0XHR9LDApO1xuXHR9XG5cblx0Zm9vKCl7XG5cdFx0dGhpcy5zZWxlY3QrKztcblx0XHRjb25zb2xlLmxvZyh0aGlzLnNlbGVjdCsrKVxuXHR9XG5cblxufSJdfQ==