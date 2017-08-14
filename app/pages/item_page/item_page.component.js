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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbV9wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW1fcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsZ0NBQStCO0FBQy9CLCtCQUE4QjtBQUM5QixrQ0FBeUM7QUFFekMsMERBQTREO0FBRzVELDBFQUFzRTtBQU10RSxrQ0FBZSxDQUFDLFNBQVMsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUMsT0FBTyxFQUEvQyxDQUErQyxDQUFDLENBQUM7QUFTbEYsSUFBYSxrQkFBa0I7SUFpQjlCLDRCQUFvQixJQUFVLEVBQVUsS0FBWTtRQUFoQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTztRQWRwRCxTQUFJLEdBQVcsU0FBUyxDQUFDO1FBS3pCLFdBQU0sR0FBRztZQUNSLEtBQUssRUFBQyxDQUFDO1lBQ1AsTUFBTSxFQUFDLENBQUM7WUFDUixhQUFhLEVBQUUsRUFBRTtTQUNqQixDQUFBO1FBQ0QsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsa0JBQWEsR0FBRyxhQUFhLENBQUM7UUE2RTlCLGVBQVUsR0FBRyxVQUFDLEtBQUs7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQztJQTdFbUQsQ0FBQztJQUV6RCxxQ0FBUSxHQUFSO1FBRUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLHNCQUFzQixFQUFFLGdCQUFnQixFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDbkYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFV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UUFDbEMsTUFBTSxDQUFDLGFBQWEsS0FBSyxTQUFTLEdBQUcsTUFBTSxDQUFDLGFBQWEsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFBO1FBQ2xFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksNkJBQTZCLENBQUM7UUFDNUYsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGdDQUFHLEdBQUg7UUFDQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO0lBQzNCLENBQUM7SUFPRix5QkFBQztBQUFELENBQUMsQUFqR0QsSUFpR0M7QUFoR3dCO0lBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDOzhCQUFZLGlCQUFVO3FEQUFDO0FBQ3hCO0lBQXJCLGdCQUFTLENBQUMsU0FBUyxDQUFDOzhCQUFVLGlCQUFVO21EQUFDO0FBRjlCLGtCQUFrQjtJQU45QixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLDBDQUEwQztRQUN2RCxTQUFTLEVBQUUsQ0FBQyx5Q0FBeUMsQ0FBQztLQUN0RCxDQUFDO3FDQW1CeUIsV0FBSSxFQUFpQixhQUFLO0dBakJ4QyxrQkFBa0IsQ0FpRzlCO0FBakdZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCB7IHRvcG1vc3QsRnJhbWUgfSBmcm9tIFwidWkvZnJhbWVcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybU1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgRG9ja0xheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL2RvY2stbGF5b3V0XCI7XG5pbXBvcnQgKiBhcyBsaXN0UGlja2VyTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3QtcGlja2VyXCI7XG5pbXBvcnQge3JlZ2lzdGVyRWxlbWVudH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbmRlY2xhcmUgdmFyIFVJSW1hZ2U6IGFueTtcbmRlY2xhcmUgdmFyIFVJQmFyTWV0cmljczogYW55O1xuZGVjbGFyZSB2YXIgY29udHJvbGxlcjogYW55O1xuZGVjbGFyZSB2YXIgQ0dTaXplTWFrZTogYW55O1xuZGVjbGFyZSB2YXJcdFVJQ29sb3I6IGFueTtcbnJlZ2lzdGVyRWxlbWVudChcIk1hcFZpZXdcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGtcIikuTWFwVmlldyk7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnaXRlbV9wYWdlJyxcblx0dGVtcGxhdGVVcmw6ICdwYWdlcy9pdGVtX3BhZ2UvaXRlbV9wYWdlLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJ3BhZ2VzL2l0ZW1fcGFnZS9pdGVtX3BhZ2UuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgSXRlbV9wYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QFZpZXdDaGlsZChcIm9yZGVydHlwZVwiKSBvcmRlcnR5cGU6IEVsZW1lbnRSZWY7XG5cdEBWaWV3Q2hpbGQoXCJNYXBWaWV3XCIpIG1hcFZpZXc6IEVsZW1lbnRSZWY7XG5cdHNob3c6IHN0cmluZyA9ICdyZXdhcmRzJztcblx0c3RhcnRlcnM6W3t9XTtcblx0bWFpbjpbe31dO1xuXHRvcmVkZXJMaXN0O1xuXHR3aGl0ZUNhcmRIZWlnaHQ7XG5cdHNjcmVlbiA9IHtcdFxuXHRcdHdpZHRoOjAsXG5cdFx0aGVpZ2h0OjAsXG5cdFx0aGVpZ2h0UGVyY2VudDogJydcblx0fVxuXHRzdGFydE9yZGVyID0gZmFsc2U7XG5cdHNlbGVjdCA9IDA7XG5cdHNlbGVjdGVkT3JkZXIgPSBcIk9yZGVyIFRhYmxlXCI7XG5cdHNlbGVjdGVkSXRlbTogYW55O1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgZnJhbWU6IEZyYW1lKSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRcblx0XHR0aGlzLm9yZWRlckxpc3QgPSBbXCJPcmRlciBmb3IgY29sbGVjdGlvblwiLCBcIk9yZGVyIGF0IHRhYmxlXCIsIFwiT3JkZXIgZm9yIGRlbGl2ZXJ5XCJdO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMucGFnZS5nZXRWaWV3QnlJZChcIndyYXBcIikpO1xuXHRcdGNvbnNvbGUubG9nKFwiRGV2aWNlIG1vZGVsOiBcIiArIHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzKTtcblx0XHR0aGlzLnNjcmVlbi53aWR0aCA9IHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzO1xuXHRcdHRoaXMuc2NyZWVuLmhlaWdodCA9IHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLmhlaWdodFBpeGVscztcblx0XHR0aGlzLnNjcmVlbi5oZWlnaHRQZXJjZW50ID0gKHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLmhlaWdodFBpeGVscy8xMDApLnRvRml4ZWQoMSk7XG5cdFx0Y29uc29sZS5sb2coXCJEZXZpY2UgbW9kZWw6IFwiICsgdGhpcy5zY3JlZW4ud2lkdGgpO1xuXHRcdGNvbnNvbGUubG9nKFwiRGV2aWNlIGhlaWdodDogXCIgKyB0aGlzLnNjcmVlbi5oZWlnaHQpO1xuXHRcdGNvbnNvbGUubG9nKFwiUGVyY2VudDogXCIgKyB0aGlzLnNjcmVlbi5oZWlnaHRQZXJjZW50KTtcblx0XHRpZih0aGlzLnNjcmVlbi5oZWlnaHQgPT09IDIyMDgpIHtcblx0XHRcdHRoaXMud2hpdGVDYXJkSGVpZ2h0ID0gLSh0aGlzLnNjcmVlbi5oZWlnaHQgKiAwLjc4KSArJ3B4Jztcblx0XHR9IGVsc2UgaWYgKHRoaXMuc2NyZWVuLmhlaWdodCA9PT0gMTEzNil7XG5cdFx0XHR0aGlzLndoaXRlQ2FyZEhlaWdodCA9IC0odGhpcy5zY3JlZW4uaGVpZ2h0ICogMC44NikgKyAncHgnO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zY3JlZW4uaGVpZ2h0ID09PSAxMzM0KXtcblx0XHRcdHRoaXMud2hpdGVDYXJkSGVpZ2h0ID0gLSh0aGlzLnNjcmVlbi5oZWlnaHQgKiAwLjg0KSArICdweCc7XG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLndoaXRlQ2FyZEhlaWdodCA9IC0odGhpcy5zY3JlZW4uaGVpZ2h0ICogMC44NikgKyAncHgnO1xuXHRcdH1cblxuXHRcdGNvbnNvbGUubG9nKCd3aGl0ZUNhcmRIZWlnaHQgJywgdGhpcy53aGl0ZUNhcmRIZWlnaHQpXG5cdFx0dGhpcy5zdGFydGVycyA9IFt7IG5hbWU6ICdQaXp6YSBNYXJnYXJpdGEnLCBwcmljZTogJ+KCrDIuNDAnLCBkZXNjOiAnUHJvZHVjdCBkZXNjcmlwdGlvbiBnb2VzIGhlcmUnLCBleHRyYXM6W1xuXHRcdFx0XCJFeHRyYSBjaGVlc2VcIiwgXCJFeHRyYSB0b21hdG9cIiwgXCJBZGQgYmFjb25cIiwgXCJBZGQgaGFtXCIsIFwiQWRkIGVnZ1wiXG5cdFx0XX0sXG5cdFx0XHR7IG5hbWU6ICdQaXp6YSBNYXJnYXJpdGEnLCBwcmljZTogJ+KCrDIuNDAnLCBkZXNjOiAnUHJvZHVjdCBkZXNjcmlwdGlvbiBnb2VzIGhlcmUnLCBleHRyYXM6W1xuXHRcdFx0XCJFeHRyYSBjaGVlc2VcIiwgXCJFeHRyYSB0b21hdG9cIiwgXCJBZGQgYmFjb25cIiwgXCJBZGQgaGFtXCIsIFwiQWRkIGVnZ1wiXG5cdFx0XX1cblx0XHRdO1xuXHRcdHRoaXMubWFpbiA9IFt7IG5hbWU6ICdQaXp6YSBNYXJnYXJpdGEnLCBwcmljZTogJ+KCrDIuNDAnLCBkZXNjOiAnUHJvZHVjdCBkZXNjcmlwdGlvbiBnb2VzIGhlcmUnfVxuXHRcdF07XG5cdFx0dGhpcy5wYWdlLmFjdGlvbkJhci5uYXZpZ2F0aW9uQnV0dG9uLnN0eWxlLmNvbG9yID0gbmV3IENvbG9yKCcjMDAwMDAwJyk7XG5cdFx0aWYgKHRvcG1vc3QoKS5pb3MpIHtcblx0XHRcdHZhciBuYXZpZ2F0aW9uQmFyID0gdG9wbW9zdCgpLmlvcy5jb250cm9sbGVyLm5hdmlnYXRpb25CYXI7XG5cdFx0XHRuYXZpZ2F0aW9uQmFyLnNldEJhY2tncm91bmRJbWFnZUZvckJhck1ldHJpY3MoVUlJbWFnZS5uZXcoKSwgVUlCYXJNZXRyaWNzLlVJQmFyTWV0cmljc0RlZmF1bHQpO1xuXHRcdFx0bmF2aWdhdGlvbkJhci5zaGFkb3dJbWFnZSA9IFVJSW1hZ2UubmV3KCk7XG4gICAgfVxuXG5cdCB9XG5cdCBnZXRWaWV3KGl0ZW0pe1xuXHRcdHRoaXMuc3RhcnRPcmRlciA9IHRydWU7XG5cdFx0dGhpcy5hZGRCb3R0b21Cb3JkZXIoXCJvcmRlclwiKTtcblx0XHR0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG5cdCB9XG5cdCBzZWxlY3RlZEluZGV4Q2hhbmdlZChwaWNrZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3BpY2tlciBzZWxlY3Rpb246ICcgKyBwaWNrZXIuc2VsZWN0ZWRJbmRleCk7XG5cdH1cblxuXHRhZGRCb3R0b21Cb3JkZXIgKGlkKSB7XG5cdFx0bGV0IHdyYXAgPSB0aGlzO1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdGxldCBvcmRlclR5cGUgPSA8RG9ja0xheW91dD53cmFwLnBhZ2UuZ2V0Vmlld0J5SWQoaWQpO1xuXHRcdFx0Y29uc29sZS5sb2cob3JkZXJUeXBlLCBcIiBPcmVkZXJcIik7XG5cdFx0XHRvcmRlclR5cGUuYm9yZGVyQm90dG9tV2lkdGg9IDE7XG5cdFx0XHRvcmRlclR5cGUuYm9yZGVyQm90dG9tQ29sb3I9IG5ldyBDb2xvcihcIiM0MzQzNDNcIik7XG5cdH0sMCk7XG5cdH1cblx0XG5cdHNlbGVjdE9yZGVyKHBpY2tlcil7XG5cdFx0Y29uc29sZS5sb2cocGlja2VyLnNlbGVjdGVkSW5kZXgpO1xuXHRcdHBpY2tlci5zZWxlY3RlZEluZGV4ID09PSB1bmRlZmluZWQgPyBwaWNrZXIuc2VsZWN0ZWRJbmRleCA9IDAgOiAnJ1xuXHRcdHRoaXMuc2VsZWN0ZWRPcmRlciA9IHRoaXMub3JlZGVyTGlzdFtwaWNrZXIuc2VsZWN0ZWRJbmRleF0gfHwgXCJQbGVhc2Ugc2VsZWN0IGFuIG9yZGVyIHR5cGVcIjtcblx0XHR0aGlzLnNlbGVjdCsrO1xuXHRcdHRoaXMuc2VsZWN0ZWRPcmRlciA9IHRoaXMub3JlZGVyTGlzdFtwaWNrZXIuc2VsZWN0ZWRJbmRleF07XG5cdFx0XHR0aGlzLmFkZEJvdHRvbUJvcmRlcihcIm9yZGVyXCIpO1xuXHRcdFx0dGhpcy5hZGRCb3R0b21Cb3JkZXIoXCJ0YWJsZVwiKTtcblx0fVxuXG5cdGZvbygpe1xuXHRcdHRoaXMuc2VsZWN0Kys7XG5cdFx0Y29uc29sZS5sb2codGhpcy5zZWxlY3QrKylcblx0fVxuXG5cdG9uTWFwUmVhZHkgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJNYXAgUmVhZHlcIik7XG4gICAgfTtcblxuXG59Il19