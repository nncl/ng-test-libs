import { Inject, Injectable, Optional } from '@angular/core';
import { CORE_CONFIG_TOKEN } from './core.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
// FIXME
// export class UserServiceConfig {
//   apiUrl = '';
// }
// TODO WHAT ABOUT NOT PROVIDING IT??? - https://flowup.cz/en/article/dependency-injection-in-angular-libraries
// TODO {providedIn: 'root'}
export class CoreService {
    constructor(http, config) {
        this.http = http;
        this.config = config;
        this._apiUrl = 'https://randomuser.me/api/';
        if (config?.uriApi) {
            this._apiUrl = config.uriApi;
        }
    }
    get() {
        return this.http.get(this._apiUrl);
    }
}
CoreService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreService, deps: [{ token: i1.HttpClient }, { token: CORE_CONFIG_TOKEN, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
CoreService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [CORE_CONFIG_TOKEN]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvbGliL2NvcmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFjLE1BQU0sZUFBZSxDQUFDOzs7QUFPOUQsUUFBUTtBQUNSLG1DQUFtQztBQUNuQyxpQkFBaUI7QUFDakIsSUFBSTtBQUVKLCtHQUErRztBQUMvRyw0QkFBNEI7QUFFNUIsTUFBTSxPQUFPLFdBQVc7SUFHdEIsWUFBb0IsSUFBZ0IsRUFDZ0MsTUFBbUI7UUFEbkUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNnQyxXQUFNLEdBQU4sTUFBTSxDQUFhO1FBSHZGLFlBQU8sR0FBRyw0QkFBNEIsQ0FBQztRQUlyQyxJQUFJLE1BQU0sRUFBRSxNQUFNLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUVELEdBQUc7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDOzt3R0FaVSxXQUFXLDRDQUlVLGlCQUFpQjs0R0FKdEMsV0FBVyxjQURFLE1BQU07MkZBQ25CLFdBQVc7a0JBRHZCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzswQkFLbkIsUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ09SRV9DT05GSUdfVE9LRU4sIENvcmVDb25maWcgfSBmcm9tICcuL2NvcmUubW9kdWxlJztcblxuZXhwb3J0IGludGVyZmFjZSBVc2VycyB7XG4gIHJlc3VsdHM6IFtdLFxuICBpbmZvOiBvYmplY3Rcbn1cblxuLy8gRklYTUVcbi8vIGV4cG9ydCBjbGFzcyBVc2VyU2VydmljZUNvbmZpZyB7XG4vLyAgIGFwaVVybCA9ICcnO1xuLy8gfVxuXG4vLyBUT0RPIFdIQVQgQUJPVVQgTk9UIFBST1ZJRElORyBJVD8/PyAtIGh0dHBzOi8vZmxvd3VwLmN6L2VuL2FydGljbGUvZGVwZW5kZW5jeS1pbmplY3Rpb24taW4tYW5ndWxhci1saWJyYXJpZXNcbi8vIFRPRE8ge3Byb3ZpZGVkSW46ICdyb290J31cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ29yZVNlcnZpY2Uge1xuICBfYXBpVXJsID0gJ2h0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQ09SRV9DT05GSUdfVE9LRU4pIHByaXZhdGUgcmVhZG9ubHkgY29uZmlnPzogQ29yZUNvbmZpZykge1xuICAgIGlmIChjb25maWc/LnVyaUFwaSkge1xuICAgICAgdGhpcy5fYXBpVXJsID0gY29uZmlnLnVyaUFwaTtcbiAgICB9XG4gIH1cblxuICBnZXQoKTogT2JzZXJ2YWJsZTxVc2Vycz4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFVzZXJzPih0aGlzLl9hcGlVcmwpO1xuICB9XG59XG4iXX0=