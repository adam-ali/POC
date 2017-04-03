"use strict";
var main_view_model_1 = require("./main-view-model");
function pageLoaded(args) {
    console.log(args.object);
    var page = args.object;
    page.bindingContext = new main_view_model_1.Demo();
    var architectView = page.getViewById("architectView");
    console.log('pageLoaded');
}
exports.pageLoaded = pageLoaded;
function urlLoaded(eventData) {
    console.log(eventData.url);
    console.log('url loaded');
}
exports.urlLoaded = urlLoaded;
;
function urlLoadError(eventData) {
    console.dump(eventData.error);
    console.log('url failed');
}
exports.urlLoadError = urlLoadError;
;
function urlInvoked(eventData) {
    console.log('url invoked');
}
exports.urlInvoked = urlInvoked;
;
function urlString(data) {
}
exports.urlString = urlString;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxxREFBeUM7QUFLekMsb0JBQW9CLElBQUk7SUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDeEIsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksc0JBQUksRUFBRSxDQUFDO0lBQ2pDLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQU0sZUFBZSxDQUFDLENBQUM7SUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUM1QixDQUFDO0FBQ0QsT0FBTyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFFaEMsbUJBQTBCLFNBQVM7SUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUM1QixDQUFDO0FBSEQsOEJBR0M7QUFBQSxDQUFDO0FBRUYsc0JBQTZCLFNBQVM7SUFDcEMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUMzQixDQUFDO0FBSEQsb0NBR0M7QUFBQSxDQUFDO0FBRUYsb0JBQTJCLFNBQVM7SUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUM1QixDQUFDO0FBRkQsZ0NBRUM7QUFBQSxDQUFDO0FBRUYsbUJBQTBCLElBQUk7QUFFOUIsQ0FBQztBQUZELDhCQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYXBwIGZyb20gJ2FwcGxpY2F0aW9uJztcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnY29sb3InO1xuaW1wb3J0ICogYXMgcGxhdGZvcm0gZnJvbSAncGxhdGZvcm0nO1xuaW1wb3J0IHsgRGVtbyB9IGZyb20gXCIuL21haW4tdmlldy1tb2RlbFwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IEFyY2hpdGVjdFZpZXcgfSBmcm9tICduYXRpdmVzY3JpcHQtd2lraXR1ZGVhcmNoaXRlY3R2aWV3J1xuaW1wb3J0ICogYXMgZnJhbWVNb2R1bGUgZnJvbSAndWkvZnJhbWUnXG5cbmZ1bmN0aW9uIHBhZ2VMb2FkZWQoYXJncykge1xuICBjb25zb2xlLmxvZyhhcmdzLm9iamVjdClcbiAgdmFyIHBhZ2UgPSA8Vmlldz5hcmdzLm9iamVjdDtcbiAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBEZW1vKCk7XG4gIHZhciBhcmNoaXRlY3RWaWV3ID0gcGFnZS5nZXRWaWV3QnlJZDxhbnk+KFwiYXJjaGl0ZWN0Vmlld1wiKTtcbiAgY29uc29sZS5sb2coJ3BhZ2VMb2FkZWQnKTtcbn1cbmV4cG9ydHMucGFnZUxvYWRlZCA9IHBhZ2VMb2FkZWQ7XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxMb2FkZWQoZXZlbnREYXRhKXtcbiAgY29uc29sZS5sb2coZXZlbnREYXRhLnVybCk7XG4gIGNvbnNvbGUubG9nKCd1cmwgbG9hZGVkJyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdXJsTG9hZEVycm9yKGV2ZW50RGF0YSkge1xuICBjb25zb2xlLmR1bXAoZXZlbnREYXRhLmVycm9yKTtcbiAgY29uc29sZS5sb2coJ3VybCBmYWlsZWQnKVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVybEludm9rZWQoZXZlbnREYXRhKXtcbiAgY29uc29sZS5sb2coJ3VybCBpbnZva2VkJylcbn07XG4gXG5leHBvcnQgZnVuY3Rpb24gdXJsU3RyaW5nKGRhdGEpIHtcblxufVxuIl19