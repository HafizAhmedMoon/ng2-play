/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, NgIf} from 'angular2/angular2'
import {MyService} from 'MyService'

@Component({
    selector: 'app',
    viewInjector: [
        MyService
    ]
})
@View({
    template: `<span *ng-if="name">Hello, {{name}}!</span>`,
    directives: [NgIf]
})
class App {
    name: string = 'World';
    constructor(service: MyService) {
        setTimeout(() => {
            this.name = service.name;
        }, 2000);
    }
}

bootstrap(App);