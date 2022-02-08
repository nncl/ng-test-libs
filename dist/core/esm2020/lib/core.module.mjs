import { InjectionToken, NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
export const CORE_CONFIG_TOKEN = new InjectionToken('CORE_CONFIG');
export class CoreModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: CoreModule,
            providers: [
                { provide: CORE_CONFIG_TOKEN, useValue: config }
            ]
        };
    }
}
CoreModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreModule, deps: [{ token: CoreModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule });
CoreModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreModule, imports: [CommonModule,
        HttpClientModule] });
CoreModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreModule, imports: [[
            CommonModule,
            HttpClientModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                    // CoreComponent
                    ],
                    imports: [
                        CommonModule,
                        HttpClientModule
                    ],
                    exports: [
                    // CoreComponent
                    ]
                }]
        }], ctorParameters: function () { return [{ type: CoreModule, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9saWIvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBdUIsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQU0vQyxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLGNBQWMsQ0FBYSxhQUFhLENBQUMsQ0FBQztBQWMvRSxNQUFNLE9BQU8sVUFBVTtJQUNyQixZQUFvQyxZQUF5QjtRQUMzRCxJQUFJLFlBQVksRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUNiLCtEQUErRCxDQUFDLENBQUM7U0FDcEU7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFrQjtRQUMvQixPQUFPO1lBQ0wsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7YUFDakQ7U0FDRixDQUFDO0lBQ0osQ0FBQzs7dUdBZlUsVUFBVSxrQkFDOEIsVUFBVTt3R0FEbEQsVUFBVSxZQVBuQixZQUFZO1FBQ1osZ0JBQWdCO3dHQU1QLFVBQVUsWUFSWjtZQUNQLFlBQVk7WUFDWixnQkFBZ0I7U0FDakI7MkZBS1UsVUFBVTtrQkFadEIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7b0JBQ1osZ0JBQWdCO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixnQkFBZ0I7cUJBQ2pCO29CQUNELE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7cUJBQ2pCO2lCQUNGOzBEQUVvRCxVQUFVOzBCQUFoRCxRQUFROzswQkFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvcmVDb25maWcge1xuICB1cmlBcGk6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IENPUkVfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPENvcmVDb25maWc+KCdDT1JFX0NPTkZJRycpO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAvLyBDb3JlQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLy8gQ29yZUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU/OiBDb3JlTW9kdWxlKSB7XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnQ29yZU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogQ29yZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q29yZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29yZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IENPUkVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=