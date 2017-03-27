"use strict";
var frame = require("ui/frame");
var observable_1 = require("data/observable");
var Demo = (function (_super) {
    __extends(Demo, _super);
    function Demo() {
        return _super.call(this) || this;
    }
    Demo.prototype.goAway = function (args) {
        var page = frame.topmost().currentPage;
        // let card = <CardView>page.getViewById('batCard');
        // card.animate({
        //   scale: { x: 0, y: 0 },
        //   opacity: 0,
        //   duration: 1000
        // }).then(() => {
        //   card.visibility = 'collapsed';
        // });
    };
    Demo.prototype.goAwayJoker = function (args) {
        var page = frame.topmost().currentPage;
        var card = page.getViewById('jokerCard');
        card.animate({
            scale: { x: 0, y: 0 },
            opacity: 0,
            duration: 1000
        }).then(function () {
            card.visibility = 'collapsed';
        });
    };
    Demo.prototype.cardLoaded = function (args) {
        // let card = <CardView>args.object;
        // console.log('card = ' + card);
        // if (isAndroid) {
        //   console.log('card native android = ' + card.android);
        // } else if (isIOS) {
        //   console.log('card native ios = ' + card.ios);
        // }
    };
    return Demo;
}(observable_1.Observable));
exports.Demo = Demo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxnQ0FBa0M7QUFFbEMsOENBQXdEO0FBSXhEO0lBQTBCLHdCQUFVO0lBRWxDO2VBQ0UsaUJBQU87SUFDVCxDQUFDO0lBRU0scUJBQU0sR0FBYixVQUFjLElBQUk7UUFDaEIsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxvREFBb0Q7UUFDcEQsaUJBQWlCO1FBQ2pCLDJCQUEyQjtRQUMzQixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixtQ0FBbUM7UUFDbkMsTUFBTTtJQUNSLENBQUM7SUFFTSwwQkFBVyxHQUFsQixVQUFtQixJQUFJO1FBQ3JCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUM7UUFDdkMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sRUFBRSxDQUFDO1lBQ1YsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0seUJBQVUsR0FBakIsVUFBa0IsSUFBZTtRQUMvQixvQ0FBb0M7UUFDcEMsaUNBQWlDO1FBQ2pDLG1CQUFtQjtRQUNuQiwwREFBMEQ7UUFDMUQsc0JBQXNCO1FBQ3RCLGtEQUFrRDtRQUNsRCxJQUFJO0lBQ04sQ0FBQztJQUVILFdBQUM7QUFBRCxDQUFDLEFBeENELENBQTBCLHVCQUFVLEdBd0NuQztBQXhDWSxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZyYW1lIGZyb20gJ3VpL2ZyYW1lJztcbmltcG9ydCAqIGFzIGFwcCBmcm9tICdhcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUyB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBEZW1vIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBnb0F3YXkoYXJncykge1xuICAgIGxldCBwYWdlID0gZnJhbWUudG9wbW9zdCgpLmN1cnJlbnRQYWdlO1xuICAgIC8vIGxldCBjYXJkID0gPENhcmRWaWV3PnBhZ2UuZ2V0Vmlld0J5SWQoJ2JhdENhcmQnKTtcbiAgICAvLyBjYXJkLmFuaW1hdGUoe1xuICAgIC8vICAgc2NhbGU6IHsgeDogMCwgeTogMCB9LFxuICAgIC8vICAgb3BhY2l0eTogMCxcbiAgICAvLyAgIGR1cmF0aW9uOiAxMDAwXG4gICAgLy8gfSkudGhlbigoKSA9PiB7XG4gICAgLy8gICBjYXJkLnZpc2liaWxpdHkgPSAnY29sbGFwc2VkJztcbiAgICAvLyB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnb0F3YXlKb2tlcihhcmdzKSB7XG4gICAgbGV0IHBhZ2UgPSBmcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2U7XG4gICAgbGV0IGNhcmQgPSBwYWdlLmdldFZpZXdCeUlkKCdqb2tlckNhcmQnKTtcbiAgICBjYXJkLmFuaW1hdGUoe1xuICAgICAgc2NhbGU6IHsgeDogMCwgeTogMCB9LFxuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICBjYXJkLnZpc2liaWxpdHkgPSAnY29sbGFwc2VkJztcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjYXJkTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIC8vIGxldCBjYXJkID0gPENhcmRWaWV3PmFyZ3Mub2JqZWN0O1xuICAgIC8vIGNvbnNvbGUubG9nKCdjYXJkID0gJyArIGNhcmQpO1xuICAgIC8vIGlmIChpc0FuZHJvaWQpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdjYXJkIG5hdGl2ZSBhbmRyb2lkID0gJyArIGNhcmQuYW5kcm9pZCk7XG4gICAgLy8gfSBlbHNlIGlmIChpc0lPUykge1xuICAgIC8vICAgY29uc29sZS5sb2coJ2NhcmQgbmF0aXZlIGlvcyA9ICcgKyBjYXJkLmlvcyk7XG4gICAgLy8gfVxuICB9XG5cbn1cblxuIl19