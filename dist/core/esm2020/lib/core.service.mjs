import { Injectable, Optional } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class UserServiceConfig {
    constructor() {
        this.apiUrl = '';
    }
}
export class CoreService {
    constructor(http, config) {
        this.http = http;
        this._apiUrl = 'https://randomuser.me/api/';
        if (config) {
            this._apiUrl = config.apiUrl;
        }
    }
    get() {
        return this.http.get(this._apiUrl);
    }
}
CoreService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreService, deps: [{ token: i1.HttpClient }, { token: UserServiceConfig, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
CoreService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: UserServiceConfig, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvbGliL2NvcmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBU3JELE1BQU0sT0FBTyxpQkFBaUI7SUFBOUI7UUFDRSxXQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2QsQ0FBQztDQUFBO0FBS0QsTUFBTSxPQUFPLFdBQVc7SUFHdEIsWUFBb0IsSUFBZ0IsRUFDWixNQUEwQjtRQUQ5QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFlBQU8sR0FBRyw0QkFBNEIsQ0FBQztRQUlyQyxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUM5QjtJQUNILENBQUM7SUFFRCxHQUFHO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7d0dBWlUsV0FBVyw0Q0FJVyxpQkFBaUI7NEdBSnZDLFdBQVcsY0FGVixNQUFNOzJGQUVQLFdBQVc7a0JBSHZCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CO21GQUtrQyxpQkFBaUI7MEJBQXJDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuZXhwb3J0IGludGVyZmFjZSBVc2VycyB7XG4gIHJlc3VsdHM6IFtdLFxuICBpbmZvOiBvYmplY3Rcbn1cblxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlQ29uZmlnIHtcbiAgYXBpVXJsID0gJyc7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvcmVTZXJ2aWNlIHtcbiAgX2FwaVVybCA9ICdodHRwczovL3JhbmRvbXVzZXIubWUvYXBpLyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBjb25maWc/OiBVc2VyU2VydmljZUNvbmZpZykge1xuICAgIGlmIChjb25maWcpIHtcbiAgICAgIHRoaXMuX2FwaVVybCA9IGNvbmZpZy5hcGlVcmw7XG4gICAgfVxuICB9XG5cbiAgZ2V0KCk6IE9ic2VydmFibGU8VXNlcnM+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxVc2Vycz4odGhpcy5fYXBpVXJsKTtcbiAgfVxufVxuIl19