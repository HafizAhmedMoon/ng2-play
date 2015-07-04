if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var MyService_1 = require('MyService.js');
var App = (function () {
    function App(service) {
        var _this = this;
        this.name = 'World';
        setTimeout(function () {
            _this.name = service.name;
        }, 2000);
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app',
            viewInjector: [
                MyService_1.MyService
            ]
        }),
        angular2_1.View({
            template: "<span *ng-if=\"name\">Hello, {{name}}!</span>",
            directives: [angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [MyService_1.MyService])
    ], App);
    return App;
})();
angular2_1.bootstrap(App);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsQUFDQSwwREFEMEQ7QUFDMUQseUJBQStDLG1CQUMvQyxDQUFDLENBRGlFO0FBQ2xFLDBCQUF3QixXQUV4QixDQUFDLENBRmtDO0FBRW5DO0lBWUlBLGFBQVlBLE9BQWtCQTtRQVpsQ0MsaUJBaUJDQTtRQU5HQSxTQUFJQSxHQUFXQSxPQUFPQSxDQUFDQTtRQUVuQkEsVUFBVUEsQ0FBQ0E7WUFDUEEsS0FBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7UUFDN0JBLENBQUNBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO0lBQ2JBLENBQUNBO0lBaEJMRDtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsS0FBS0E7WUFDZkEsWUFBWUEsRUFBRUE7Z0JBQ1ZBLHFCQUFTQTthQUNaQTtTQUNKQSxDQUFDQTtRQUNEQSxlQUFJQSxDQUFDQTtZQUNGQSxRQUFRQSxFQUFFQSwrQ0FBNkNBO1lBQ3ZEQSxVQUFVQSxFQUFFQSxDQUFDQSxlQUFJQSxDQUFDQTtTQUNyQkEsQ0FBQ0E7O1lBUURBO0lBQURBLFVBQUNBO0FBQURBLENBakJBLEFBaUJDQSxJQUFBO0FBRUQsb0JBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9hbmd1bGFyMi9hbmd1bGFyMi5kLnRzXCIgLz5cclxuaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIGJvb3RzdHJhcCwgTmdJZn0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInXHJcbmltcG9ydCB7TXlTZXJ2aWNlfSBmcm9tICdNeVNlcnZpY2UnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwJyxcclxuICAgIHZpZXdJbmplY3RvcjogW1xyXG4gICAgICAgIE15U2VydmljZVxyXG4gICAgXVxyXG59KVxyXG5AVmlldyh7XHJcbiAgICB0ZW1wbGF0ZTogYDxzcGFuICpuZy1pZj1cIm5hbWVcIj5IZWxsbywge3tuYW1lfX0hPC9zcGFuPmAsXHJcbiAgICBkaXJlY3RpdmVzOiBbTmdJZl1cclxufSlcclxuY2xhc3MgQXBwIHtcclxuICAgIG5hbWU6IHN0cmluZyA9ICdXb3JsZCc7XHJcbiAgICBjb25zdHJ1Y3RvcihzZXJ2aWNlOiBNeVNlcnZpY2UpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uYW1lID0gc2VydmljZS5uYW1lO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG4gICAgfVxyXG59XHJcblxyXG5ib290c3RyYXAoQXBwKTsiXSwic291cmNlUm9vdCI6Ii9qcyJ9