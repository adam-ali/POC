"use strict";
var app = require("application");
var content_view_1 = require("ui/content-view");
var WikitudeView = (function (_super) {
    __extends(WikitudeView, _super);
    function WikitudeView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._inst = new com.wikitude.architect.ArchitectView(app.android.foregroundActivity);
        return _this;
    }
    WikitudeView.prototype.setLocation = function (lat, lng, acc) {
        this._inst.setLocation();
    };
    return WikitudeView;
}(content_view_1.ContentView));
exports.WikitudeView = WikitudeView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lraXR1ZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3aWtpdHVkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUNBQW1DO0FBQ25DLGdEQUE4QztBQUc5QztJQUFrQyxnQ0FBVztJQUE3QztRQUFBLHFFQVNDO1FBUEcsV0FBSyxHQUFTLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs7SUFPM0YsQ0FBQztJQUxHLGtDQUFXLEdBQVgsVUFBWSxHQUFXLEVBQUUsR0FBVyxFQUFFLEdBQVc7UUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBR0wsbUJBQUM7QUFBRCxDQUFDLEFBVEQsQ0FBa0MsMEJBQVcsR0FTNUM7QUFUWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcCBmcm9tICdhcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBDb250ZW50VmlldyB9IGZyb20gJ3VpL2NvbnRlbnQtdmlldyc7XG5kZWNsYXJlIHZhciBjb20gOiBhbnk7XG5cbmV4cG9ydCBjbGFzcyBXaWtpdHVkZVZpZXcgZXh0ZW5kcyBDb250ZW50VmlldyB7XG5cbiAgICBfaW5zdCA6IGFueSA9IG5ldyBjb20ud2lraXR1ZGUuYXJjaGl0ZWN0LkFyY2hpdGVjdFZpZXcoYXBwLmFuZHJvaWQuZm9yZWdyb3VuZEFjdGl2aXR5KTtcblxuICAgIHNldExvY2F0aW9uKGxhdDogbnVtYmVyLCBsbmc6IG51bWJlciwgYWNjOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5faW5zdC5zZXRMb2NhdGlvbigpXG4gICAgfVxuXG5cbn0iXX0=