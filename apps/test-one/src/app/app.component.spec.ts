import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'test-one'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Test-one');
  });

  it('should render whole the greeting with the title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome to Test-one!'
    );
  });
});

it(`should return false if Hallo otherwise capitalize`, () => {
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;

  expect(app.capitalizeIfNotHelloElseReturnFalse('hallo')).toEqual('Hallo');
  expect(app.capitalizeIfNotHelloElseReturnFalse('Hallo')).toEqual(false);
});
