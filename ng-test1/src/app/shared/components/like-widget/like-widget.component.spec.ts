import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LikeWidgetComponent } from "./like-widget.component";
import { UniqueIdService } from "../../services/unique-id/unique-id";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

describe(LikeWidgetComponent.name, () => {
    let fixture: ComponentFixture<LikeWidgetComponent> = null;
    let component: LikeWidgetComponent = null;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LikeWidgetComponent],
            imports: [FontAwesomeModule],
            providers: [UniqueIdService]
        }).compileComponents();

        fixture = TestBed.createComponent(LikeWidgetComponent);
        component = fixture.componentInstance;
    });

    it('Should create component', () => {
        expect(component).toBeTruthy();
    });

    it('Should auto-generate ID during ngOnInit when (@Input id) is not assigned', () => {
        fixture.detectChanges();
        expect(component.id).toBeTruthy();
    });

    it('Should NOT auto-generate ID during ngInInit when (@Input id) is assigned', () => {
        const someId = 'someId';
        component.id = someId;
        fixture.detectChanges();
        expect(component.id).toBe(someId);
    });

    it(`#${LikeWidgetComponent.prototype.like.name} should trigger (@OutPut liked) when called`, () => {
        spyOn(component.liked, 'emit');
        fixture.detectChanges();
        component.like();
        expect(component.liked.emit).toHaveBeenCalled();
    })
})