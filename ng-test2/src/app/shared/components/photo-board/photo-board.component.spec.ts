import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoBoardComponent } from './photo-board.component';
import { PhotoBoardModule } from './photo-board.module';
import { SimpleChange, SimpleChanges } from '@angular/core';
import { buildPhotoList } from './test/build-photo-list';

describe(PhotoBoardComponent.name, () => {
    let fixture: ComponentFixture<PhotoBoardComponent>
    let component: PhotoBoardComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PhotoBoardModule]
        }).compileComponents();

        fixture = TestBed.createComponent(PhotoBoardComponent);
        component = fixture.componentInstance;
    });

    it(`Should display rows and columns when (@Input photos) has value`, () => {
        component.photos = buildPhotoList();
        const change: SimpleChanges = {
            photos: new SimpleChange([], component.photos, true)
        };
        component.ngOnChanges(change);
        fixture.detectChanges();
        expect(component.rows.length).withContext('Number of rows').toBe(2);
        expect(component.rows[0].length).withContext('Number of columns from the first row').toBe(4);
        expect(component.rows[1].length).withContext('Number of columns from the second row').toBe(4);
    })
})