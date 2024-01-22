import { ComponentFixture, TestBed } from '@angular/core/testing'

import { EndingScreenComponent } from './ending-screen.component'

describe('EndingScreenComponent', () => {
    let component: EndingScreenComponent
    let fixture: ComponentFixture<EndingScreenComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [EndingScreenComponent]
        })
            .compileComponents()
    
        fixture = TestBed.createComponent(EndingScreenComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
