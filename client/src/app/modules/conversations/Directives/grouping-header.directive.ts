import {ComponentFactoryResolver, Directive, ElementRef, EmbeddedViewRef, Input, OnInit, Renderer2, ViewContainerRef} from '@angular/core';
import {GroupingType} from '@app/modules/conversations/models/types';
import {Employee} from '../../../../models/employee.entity';
import {Medicine} from "../../../../models/medicine.entity";
import {EmployeeComponent} from "@app/shared/components/employee/employee.component";

@Directive({
    selector: '[appConversationGroupingHeader]'
})
export class GroupingHeaderDirective implements OnInit {

    @Input()
    groupingType: GroupingType;
    @Input()
    header: string;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private viewContainerRef: ViewContainerRef,
                private elementRef: ElementRef,
                private renderer: Renderer2
    ) {
    }

    ngOnInit(): void {
        switch (this.groupingType) {
            case 'leader': {
                const factory = this.componentFactoryResolver.resolveComponentFactory(EmployeeComponent);
                const component = factory.create(this.viewContainerRef.parentInjector);
                const person: Employee = JSON.parse(this.header);
                this.viewContainerRef.insert(component.hostView);
               // this.renderer.addClass((component.hostView as EmbeddedViewRef<any>).rootNodes[0], 'grouping__header');
                (<EmployeeComponent>component.instance).user = person;
                break;
            }
            case 'medicine': {
                const medicine: Medicine = JSON.parse(this.header);
                const element = this.viewContainerRef.element.nativeElement;
                this.renderer.setProperty(element, 'innerText', medicine.mnn.name);
                break;
            }
            case 'liable': {
                const factory = this.componentFactoryResolver.resolveComponentFactory(EmployeeComponent);
                const component = factory.create(this.viewContainerRef.injector);
                const person: Employee = JSON.parse(this.header);
                this.viewContainerRef.insert(component.hostView);
                // this.renderer.addClass((component.hostView as EmbeddedViewRef<any>).rootNodes[0], 'grouping__header');
                (<EmployeeComponent>component.instance).user = person;
                (<EmployeeComponent>component.instance).direction = 'rtl';
                break;
            }
        }
    }

}
