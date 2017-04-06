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
    return WikitudeView;
}(content_view_1.ContentView));
exports.WikitudeView = WikitudeView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lraXR1ZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3aWtpdHVkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUNBQW1DO0FBQ25DLGdEQUE4QztBQUc5QztJQUFrQyxnQ0FBVztJQUE3QztRQUFBLHFFQU1DO1FBSkcsV0FBSyxHQUFTLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs7SUFJM0YsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQU5ELENBQWtDLDBCQUFXLEdBTTVDO0FBTlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhcHAgZnJvbSAnYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgQ29udGVudFZpZXcgfSBmcm9tICd1aS9jb250ZW50LXZpZXcnO1xuZGVjbGFyZSB2YXIgY29tIDogYW55O1xuXG5leHBvcnQgY2xhc3MgV2lraXR1ZGVWaWV3IGV4dGVuZHMgQ29udGVudFZpZXcge1xuXG4gICAgX2luc3QgOiBhbnkgPSBuZXcgY29tLndpa2l0dWRlLmFyY2hpdGVjdC5BcmNoaXRlY3RWaWV3KGFwcC5hbmRyb2lkLmZvcmVncm91bmRBY3Rpdml0eSk7XG5cblxuICAgIFxufSJdfQ==