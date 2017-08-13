"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var color_1 = require("color");
var frame_1 = require("ui/frame");
var platformModule = require("tns-core-modules/platform");
var mapsModule = require("nativescript-google-maps-sdk");
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
            var map = event.object;
            var marker = new mapsModule.Marker();
            marker.position = mapsModule.Position.positionFromLatLng(48.87, 2.35);
            marker.title = "Sydney";
            marker.snippet = "Australia";
            marker.userData = { index: 1 };
            map.addMarker(marker);
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
    core_1.ViewChild("MapView"),
    __metadata("design:type", core_1.ElementRef)
], Item_pageComponent.prototype, "mapView", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbV9wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW1fcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsZ0NBQStCO0FBQy9CLCtCQUE4QjtBQUM5QixrQ0FBeUM7QUFFekMsMERBQTREO0FBRzVELElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBYXpELElBQWEsa0JBQWtCO0lBZ0I5Qiw0QkFBb0IsSUFBVSxFQUFVLEtBQVk7UUFBaEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU87UUFicEQsU0FBSSxHQUFXLFNBQVMsQ0FBQztRQUl6QixXQUFNLEdBQUc7WUFDUixLQUFLLEVBQUMsQ0FBQztZQUNQLE1BQU0sRUFBQyxDQUFDO1lBQ1IsYUFBYSxFQUFFLEVBQUU7U0FDakIsQ0FBQTtRQUNELGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLGtCQUFhLEdBQUcsYUFBYSxDQUFDO1FBbUU5QixlQUFVLEdBQUcsVUFBQyxLQUFLO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6QixJQUFJLEdBQUcsR0FBRSxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ3RCLElBQUksTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3JDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdEUsTUFBTSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7WUFDeEIsTUFBTSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7WUFDN0IsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLEtBQUssRUFBRyxDQUFDLEVBQUMsQ0FBQztZQUMvQixH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QyxNQUFNLEVBQUUsQ0FBQyxDQUFBO0lBQzNCLENBQUM7SUFhRix5QkFBQztBQUFELENBQUMsQUE1RkQsSUE0RkM7QUEzRnNCO0lBQXJCLGdCQUFTLENBQUMsU0FBUyxDQUFDOzhCQUFVLGlCQUFVO21EQUFDO0FBQ2xCO0lBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDOzhCQUFZLGlCQUFVO3FEQUFDO0FBRmxDLGtCQUFrQjtJQU45QixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLDBDQUEwQztRQUN2RCxTQUFTLEVBQUUsQ0FBQyx5Q0FBeUMsQ0FBQztLQUN0RCxDQUFDO3FDQWtCeUIsV0FBSSxFQUFpQixhQUFLO0dBaEJ4QyxrQkFBa0IsQ0E0RjlCO0FBNUZZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCB7IHRvcG1vc3QsRnJhbWUgfSBmcm9tIFwidWkvZnJhbWVcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybU1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgRG9ja0xheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL2RvY2stbGF5b3V0XCI7XG5pbXBvcnQgKiBhcyBsaXN0UGlja2VyTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3QtcGlja2VyXCI7XG52YXIgbWFwc01vZHVsZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrXCIpO1xuZGVjbGFyZSB2YXIgVUlJbWFnZTogYW55O1xuZGVjbGFyZSB2YXIgVUlCYXJNZXRyaWNzOiBhbnk7XG5kZWNsYXJlIHZhciBjb250cm9sbGVyOiBhbnk7XG5kZWNsYXJlIHZhciBDR1NpemVNYWtlOiBhbnk7XG5kZWNsYXJlIHZhclx0VUlDb2xvcjogYW55O1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdpdGVtX3BhZ2UnLFxuXHR0ZW1wbGF0ZVVybDogJ3BhZ2VzL2l0ZW1fcGFnZS9pdGVtX3BhZ2UuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsncGFnZXMvaXRlbV9wYWdlL2l0ZW1fcGFnZS5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBJdGVtX3BhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRAVmlld0NoaWxkKFwiTWFwVmlld1wiKSBtYXBWaWV3OiBFbGVtZW50UmVmO1xuXHRAVmlld0NoaWxkKFwib3JkZXJ0eXBlXCIpIG9yZGVydHlwZTogRWxlbWVudFJlZjtcblx0c2hvdzogc3RyaW5nID0gJ3Jld2FyZHMnO1xuXHRzdGFydGVyczpbe31dO1xuXHRtYWluOlt7fV07XG5cdG9yZWRlckxpc3Q7XG5cdHNjcmVlbiA9IHtcdFxuXHRcdHdpZHRoOjAsXG5cdFx0aGVpZ2h0OjAsXG5cdFx0aGVpZ2h0UGVyY2VudDogJydcblx0fVxuXHRzdGFydE9yZGVyID0gZmFsc2U7XG5cdHNlbGVjdCA9IDA7XG5cdHNlbGVjdGVkT3JkZXIgPSBcIk9yZGVyIFRhYmxlXCI7XG5cdHNlbGVjdGVkSXRlbTogYW55O1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgZnJhbWU6IEZyYW1lKSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRcblx0XHR0aGlzLm9yZWRlckxpc3QgPSBbXCJPcmRlciBmb3IgY29sbGVjdGlvblwiLCBcIk9yZGVyIGF0IHRhYmxlXCIsIFwiT3JkZXIgZm9yIGRlbGl2ZXJ5XCJdO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMucGFnZS5nZXRWaWV3QnlJZChcIndyYXBcIikpO1xuXHRcdGNvbnNvbGUubG9nKFwiRGV2aWNlIG1vZGVsOiBcIiArIHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzKTtcblx0XHR0aGlzLnNjcmVlbi53aWR0aCA9IHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzO1xuXHRcdHRoaXMuc2NyZWVuLmhlaWdodCA9IHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLmhlaWdodFBpeGVscztcblx0XHR0aGlzLnNjcmVlbi5oZWlnaHRQZXJjZW50ID0gKHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLmhlaWdodFBpeGVscy8xMDApLnRvRml4ZWQoMSk7XG5cdFx0Y29uc29sZS5sb2coXCJEZXZpY2UgbW9kZWw6IFwiICsgdGhpcy5zY3JlZW4ud2lkdGgpO1xuXHRcdGNvbnNvbGUubG9nKFwiRGV2aWNlIGhlaWdodDogXCIgKyB0aGlzLnNjcmVlbi5oZWlnaHQpO1xuXHRcdGNvbnNvbGUubG9nKFwiUGVyY2VudDogXCIgKyB0aGlzLnNjcmVlbi5oZWlnaHRQZXJjZW50KTtcblxuXHRcdHRoaXMuc3RhcnRlcnMgPSBbeyBuYW1lOiAnUGl6emEgTWFyZ2FyaXRhJywgcHJpY2U6ICfigqwyLjQwJywgZGVzYzogJ1Byb2R1Y3QgZGVzY3JpcHRpb24gZ29lcyBoZXJlJywgZXh0cmFzOltcblx0XHRcdFwiRXh0cmEgY2hlZXNlXCIsIFwiRXh0cmEgdG9tYXRvXCIsIFwiQWRkIGJhY29uXCIsIFwiQWRkIGhhbVwiLCBcIkFkZCBlZ2dcIlxuXHRcdF19LFxuXHRcdFx0eyBuYW1lOiAnUGl6emEgTWFyZ2FyaXRhJywgcHJpY2U6ICfigqwyLjQwJywgZGVzYzogJ1Byb2R1Y3QgZGVzY3JpcHRpb24gZ29lcyBoZXJlJywgZXh0cmFzOltcblx0XHRcdFwiRXh0cmEgY2hlZXNlXCIsIFwiRXh0cmEgdG9tYXRvXCIsIFwiQWRkIGJhY29uXCIsIFwiQWRkIGhhbVwiLCBcIkFkZCBlZ2dcIlxuXHRcdF19XG5cdFx0XTtcblx0XHR0aGlzLm1haW4gPSBbeyBuYW1lOiAnUGl6emEgTWFyZ2FyaXRhJywgcHJpY2U6ICfigqwyLjQwJywgZGVzYzogJ1Byb2R1Y3QgZGVzY3JpcHRpb24gZ29lcyBoZXJlJ31cblx0XHRdO1xuXHRcdHRoaXMucGFnZS5hY3Rpb25CYXIubmF2aWdhdGlvbkJ1dHRvbi5zdHlsZS5jb2xvciA9IG5ldyBDb2xvcignIzAwMDAwMCcpO1xuXHRcdGlmICh0b3Btb3N0KCkuaW9zKSB7XG5cdFx0XHR2YXIgbmF2aWdhdGlvbkJhciA9IHRvcG1vc3QoKS5pb3MuY29udHJvbGxlci5uYXZpZ2F0aW9uQmFyO1xuXHRcdFx0bmF2aWdhdGlvbkJhci5zZXRCYWNrZ3JvdW5kSW1hZ2VGb3JCYXJNZXRyaWNzKFVJSW1hZ2UubmV3KCksIFVJQmFyTWV0cmljcy5VSUJhck1ldHJpY3NEZWZhdWx0KTtcblx0XHRcdG5hdmlnYXRpb25CYXIuc2hhZG93SW1hZ2UgPSBVSUltYWdlLm5ldygpO1xuICAgIH1cblxuXHQgfVxuXHQgZ2V0VmlldyhpdGVtKXtcblx0XHR0aGlzLnN0YXJ0T3JkZXIgPSB0cnVlO1xuXHRcdHRoaXMuYWRkQm90dG9tQm9yZGVyKFwib3JkZXJcIik7XG5cdFx0dGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuXHQgfVxuXHQgc2VsZWN0ZWRJbmRleENoYW5nZWQocGlja2VyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwaWNrZXIgc2VsZWN0aW9uOiAnICsgcGlja2VyLnNlbGVjdGVkSW5kZXgpO1xuXHR9XG5cblx0YWRkQm90dG9tQm9yZGVyIChpZCkge1xuXHRcdGxldCB3cmFwID0gdGhpcztcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRsZXQgb3JkZXJUeXBlID0gPERvY2tMYXlvdXQ+d3JhcC5wYWdlLmdldFZpZXdCeUlkKGlkKTtcblx0XHRcdGNvbnNvbGUubG9nKG9yZGVyVHlwZSwgXCIgT3JlZGVyXCIpO1xuXHRcdFx0b3JkZXJUeXBlLmJvcmRlckJvdHRvbVdpZHRoPSAxO1xuXHRcdFx0b3JkZXJUeXBlLmJvcmRlckJvdHRvbUNvbG9yPSBuZXcgQ29sb3IoXCIjNDM0MzQzXCIpO1xuXHR9LDApO1xuXHR9XG5cdFxuXHRzZWxlY3RPcmRlcihwaWNrZXIpe1xuXHRcdGNvbnNvbGUubG9nKHBpY2tlci5zZWxlY3RlZEluZGV4KTtcblx0XHRwaWNrZXIuc2VsZWN0ZWRJbmRleCA9PT0gdW5kZWZpbmVkID8gcGlja2VyLnNlbGVjdGVkSW5kZXggPSAwIDogJydcblx0XHR0aGlzLnNlbGVjdGVkT3JkZXIgPSB0aGlzLm9yZWRlckxpc3RbcGlja2VyLnNlbGVjdGVkSW5kZXhdIHx8IFwiUGxlYXNlIHNlbGVjdCBhbiBvcmRlciB0eXBlXCI7XG5cdFx0dGhpcy5zZWxlY3QrKztcblx0XHR0aGlzLnNlbGVjdGVkT3JkZXIgPSB0aGlzLm9yZWRlckxpc3RbcGlja2VyLnNlbGVjdGVkSW5kZXhdO1xuXHRcdFx0dGhpcy5hZGRCb3R0b21Cb3JkZXIoXCJvcmRlclwiKTtcblx0XHRcdHRoaXMuYWRkQm90dG9tQm9yZGVyKFwidGFibGVcIik7XG5cdH1cblxuXHRmb28oKXtcblx0XHR0aGlzLnNlbGVjdCsrO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0KyspXG5cdH1cblxuXHRvbk1hcFJlYWR5ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWFwIFJlYWR5XCIpO1xuICAgICAgICB2YXIgbWFwID1ldmVudC5vYmplY3Q7XG4gICAgICAgIHZhciBtYXJrZXIgPSBuZXcgbWFwc01vZHVsZS5NYXJrZXIoKTtcbiAgICAgICAgbWFya2VyLnBvc2l0aW9uID0gbWFwc01vZHVsZS5Qb3NpdGlvbi5wb3NpdGlvbkZyb21MYXRMbmcoNDguODcsIDIuMzUpO1xuICAgICAgICBtYXJrZXIudGl0bGUgPSBcIlN5ZG5leVwiO1xuICAgICAgICBtYXJrZXIuc25pcHBldCA9IFwiQXVzdHJhbGlhXCI7XG4gICAgICAgIG1hcmtlci51c2VyRGF0YSA9IHsgaW5kZXggOiAxfTtcbiAgICAgICAgbWFwLmFkZE1hcmtlcihtYXJrZXIpO1xuICAgIH07XG5cbn0iXX0=