"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var common = require("./architectview-common");
global.moduleMerge(common, exports);
var ArchitectView = (function (_super) {
    __extends(ArchitectView, _super);
    function ArchitectView() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(ArchitectView.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArchitectView.prototype, "_nativeView", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    ArchitectView.prototype._createUI = function () {
        var _this = this;
        var TrialLicenseKey = "dEYoCjrO019Q9zsNEoQw5j0cB6G/rQQscGS00Zyyhg6CLvQNPs+01hjXNAliVLr/n57U2CDqD5aqjBuyyDegbtpCYF+XUWwm7sWu/xDkBAkTWNi+AW8ewqQyleH6NTf9cSiJR6zHoz8Lk3Pu85GnGpa2Kzm40MokCZCcP4OyyytTYWx0ZWRfX5XbY3rqW5pkMWFQJNDF16ZpizyhZfyUcODNx7v10y3QTOYn0P6eaByKpXgNLOk87KO2+dKhzFjZQFRIX73Clz2EWlv1xxscC+kwo/zak+XfMkcpgaqdqoQBRh7swr0txwbO2gbruY+s9km3Yr4i/QOpuIedRQtTUIR/zNpwBv5qHe+5TEx6nBbbc3F3g10C6+SJHZu6G8kcX/qzg8P3I0Z2DdcKQ7NYpf1tEBwnu8sxJkl2B+qSUN5YnRyn+mqqKr8kFdSxYrNCRpt6HgiXTP+ePezNjQkFf0sVv71G36rpzbz6srs+bJhcMbGFeLMfXQsVysN9uDj1qHZjFbo/kEGvGxD2BEUuRx+fnk8y1I5A1dzsQUHo8jnqBMz6msvDDMb1bjnRh4naBEjM80aystVKcqk8i+F6zERDHfRvVM93dVjhg+rPW3Hgge5+ObvHXtHMFD5m5DC7D25arB70tr4Q6fpHW3iUAKGIb9z15MCWbkXVIR4TSXo=";
        var LicenseKey = "4lcKoBK/LSWs1qGdHV7w+lmNJFKvrxET9//58SdIOEfWcKT+UDTgThHr01n8hdXTJqaMtB50kRn7pMRuZW0ILsmuwVSNfxsLWqL/U2z5qPsgY3xjAd0owQFiewyunxOEsnJV2WmXQRd629WFfv8U4+S+yd2kNJ6xI9f4rcRQHXRTYWx0ZWRfX34TrO04ewfE3ji8N+DDpZzXs+fA6/d6752v4ga4RLH641ibnGqYajobQ6/H4neVUR1XDb/DTSgzs6r55/GKqwSRpRZ63SGFoF5epDXCb05fLKgr2vcf84Qgr+UQFZOhBhr8+EittufbTmTteFHSpUkYXaruESLqlBYrZgpmaKtH3M1Xv3q8O1A9AWDvFfiiEXMkVPWN6UdPmQTXvug1XIR59t++F57QGEEdbPE1S9tJrAXuPtlJug5hXcpYRhiAeVHzZsMdNAkrZdKTDp4xwBObPb1MTkf8upHW2D7e7kYD2eoYRHGLtHAAvR1IhkXgMijpdOoa29iF4mKN4ZkDKREaJMg7fR1W7OY/V1Y9f/5PRH/arPD/ebDSnTppVVdwt8DaMQf8DT1Lj+C1oLH5ezvnLqxSCtZA7Gwx65dIt9nwOLfBSXEgP4CR0zqtGIgm76bcHNI1Zmr4g4/Jo5Cuj7dAKEIgQjIPz1rZwdkRfIRnsDFvXQfhSD0f41beubSswl4QMyJWOljJLE8CIM2Ek4YTQKWBKdpgrg=="
        this._android = new com.wikitude.architect.ArchitectView(this._context);
        var config = new com.wikitude.architect.ArchitectStartupConfiguration()
        config.setLicenseKey(LicenseKey);

        console.dump(config);
        /** */
        this._android.onCreate(config);
        this._android.onPostCreate();
        this._android.onResume();
        this._android.registerUrlListener(new com.wikitude.architect.ArchitectView.ArchitectUrlListener({
            urlWasInvoked: function (url) {
                _this.onUrlInvoked(url);
                return true;
            }
        }));
        this._android.registerWorldLoadedListener(new com.wikitude.architect.ArchitectView.ArchitectWorldLoadedListener({
            worldLoadFailed: function (errorCode, description, failingUrl) {
                _this.onUrlLoadError({
                    description: description,
                    failingUrl: failingUrl
                });
            },
            worldWasLoaded: function (url) {
                _this.onUrlLoad(url);
            }
        }));
    };
    ArchitectView.prototype._onUrlStringPropertyChanged = function (data) {
        this._android.load(data.newValue);
    };
    ArchitectView.prototype.loadUrl = function (urlString) {
        this._hasError = false;
        var url = NSURL.URLWithString(urlString);
        this._android.loadArchitectWorldFromURLWithRequiredFeatures(url, WTFeature_2DTracking);
    };
    ArchitectView.prototype.reloadUrl = function () {
        this._android.load(this.urlString);
    };
    ArchitectView.prototype.callJavaScript = function (javaScript) {
        this._android.callJavascript(javaScript);
    };
    ArchitectView.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        if (!this._android)
            return;
        this._android.onResume();
    };
    ArchitectView.prototype.onUnloaded = function () {
        _super.prototype.onUnloaded.call(this);
        if (!this._android)
            return;
        this._android.onPause();
    };
    return ArchitectView;
}(common.ArchitectView));
exports.ArchitectView = ArchitectView;
//# sourceMappingURL=architectview.js.map