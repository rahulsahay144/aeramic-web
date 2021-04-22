import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { HttpHeaders } from '@angular/common/http';
import {forkJoin, Observable, of} from "rxjs";
import {tap, catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { 
      
  }

  // public getAllPropertyData(resources: Array<string>): Observable<any> {
  //   const arrOfCalls = new Array();
  //   resources.forEach(r => {
  //     arrOfCalls.push(this.httpClient.get(environment.dataURI + '/' + r + '.json',
  //                     {
  //                         headers : {
  //                             "Content-Type" : "application/json",
  //                             "Authorization" : "allow"
  //                         },
  //                         //withCredentials : true
  //                     }).pipe(catchError(e => of('ERROR'))))
  //   });

  //   return forkJoin(arrOfCalls);
  // }

  // public getPropertyData(category?: string) {
  //   if(!category) {
  //     category = 'data.json';
  //   }

  //   return this.httpClient.get(environment.dataURI + '/' + category,
  //   {
  //       headers : {
  //           "Content-Type" : "application/json",
  //           "Authorization" : "allow"
  //       },
  //       //withCredentials : true
  //   });
  // }

  public async getProjectImageConfiguration() {
    return this.httpClient.get<any>(environment.dataURI + "projects.json",
    {
        headers : {
            "Content-Type" : "application/json",
            "Authorization" : "allow"
        }
    }).toPromise();
  }

  // public async getExternalPropertyData() {
  //   return this.httpClient.get(environment.dataURI + '?_'+ Date.now(),
  //   {
  //       headers : {
  //           "Content-Type" : "application/json",
  //           "Authorization" : await this.getAuthToken()
  //       }
  //   }).toPromise();
  // }

  // public async getPropertyLocationData(fullAddress: string) {
  //   fullAddress = fullAddress.replace(" ", "%20");

  //   let getUri = environment.geoCodeAPI + '?sensor=false&address=' + fullAddress + '&language=en&key=' + environment.googleAPIKey;
  //   return this.httpClient.get<any>(getUri, {responseType: 'json'}).toPromise();
  // }

  // public async getExternalPropertyData() {
  //   return this.httpClient.get(environment.getExternalPropertiesURI + '?_'+ Date.now(),
  //   {
  //       headers : {
  //           "Content-Type" : "application/json",
  //           "Authorization" : await this.getAuthToken()
  //       }
  //   }).toPromise();
  // }

  // public getEstimateWebForm() {
  //   return this.httpClient.get('https://crm.zoho.com/crm/WebFormServeServlet?rid=e6268f15d5c86512e8fd0e8c57cf6474d3427c1ff7cbc91e4e678d7a0fe1c79fgid5bc4f5107ae4764149f5b97812cdaed99dde313bcff15b3f25e9b8377c8aea47&script=$sYG');
  // }

  // public async calcBallparkEstimate(data: any) {
  //   let headers = new HttpHeaders();
  //   headers = headers.set('Content-Type', 'application/json')
  //             .append('Authorization', await this.getAuthToken());

  //   let options = {
  //     headers: headers
  //   }; 

  //   return this.httpClient.post<any>(environment.estimateURI + '?_'+ Date.now(), data, options).toPromise();
  // }

  // public async getPropertyById(id: string) {

  //   let headers = new HttpHeaders();
  //   headers = headers.set('Content-Type', 'application/json')
  //             .append('Authorization', await this.getAuthToken());

  //   let data = {
  //     "propertyId" : id
  //   }

  //   let options = {
  //     headers: headers
  //   }; 

  //   return this.httpClient.post<any>(environment.propertyGetURI + '?_'+ Date.now(), data, options).toPromise();
  // }

  // public async getUnderwritingByPropertyById(id: string) {
  //   let headers = new HttpHeaders();
  //   headers = headers.set('Content-Type', 'application/json')
  //             .append('Authorization', await this.getAuthToken());

  //   let data = {
  //     "propertyId" : id
  //   }

  //   let options = {
  //     headers: headers
  //   }; 

  //   return this.httpClient.post<any>(environment.getUnderwritingURI + '?_'+ Date.now(), data, options).toPromise();
  // }

  // public async postUnderwritingByPropertyById(data: any) {
  //   let headers = new HttpHeaders();
  //   headers = headers.set('Content-Type', 'application/json')
  //             .append('Authorization', await this.getAuthToken());

  //   let options = {
  //     headers: headers
  //   }; 

  //   return this.httpClient.post<any>(environment.postUnderwritingURI + '?_'+ Date.now(), data, options).toPromise();
  // }

  // public async getEstimate(userId: string, propertyId: string) {
  //   let headers = new HttpHeaders();
  //   headers = headers.set('Content-Type', 'application/json')
  //             .append('Authorization', await this.getAuthToken());

  //   let data = {
  //     "propertyId" : propertyId,
  //     "userId" : userId
  //   }

  //   let options = {
  //     headers: headers
  //   }; 

  //   return this.httpClient.post<any>(environment.getEstimateURI + '?_'+ Date.now(), data, options).toPromise();
  // }

  // public async postEstimate(data: any) {
  //   let headers = new HttpHeaders();
  //   headers = headers.set('Content-Type', 'application/json')
  //             .append('Authorization', await this.getAuthToken());

  //   let options = {
  //     headers: headers
  //   }; 

  //   return this.httpClient.post<any>(environment.postEstimateURI + '?_'+ Date.now(), data, options).toPromise();
  // }

  // public async saveNewProperty(data: any) {
  //   let headers = new HttpHeaders();
  //   headers = headers.set('Content-Type', 'application/json')
  //             .append('Authorization', await this.getAuthToken());

  //   let options = {
  //     headers: headers
  //   }; 

  //   return this.httpClient.post<any>(environment.addNewPropertyURI + '?_'+ Date.now(), data, options).toPromise();
  // }

  // public async getPropertyIdFromEncryptedToken(propertyId:string, token: string) {
  //   let headers = new HttpHeaders();
  //   headers = headers.set('Content-Type', 'application/json')
  //             .append('Authorization', await this.getAuthToken());

  //   let data = {
  //     "id" : token,
  //     "propertyId" : propertyId,
  //   }

  //   let options = {
  //     headers: headers
  //   }; 

  //   return this.httpClient.post<any>(environment.getPropertyIdURI + '?_'+ Date.now(), data, options).toPromise();
  // }
  

  // public async getAllEstimates(propertyId: string, userId: string) {
  //   let headers = new HttpHeaders();
  //   headers = headers.set('Content-Type', 'application/json')
  //             .append('Authorization', await this.getAuthToken());

  //   let data = {
  //     "propertyId" : propertyId,
  //     "userId" : userId
  //   }

  //   let options = {
  //     headers: headers
  //   }; 

  //   return this.httpClient.post<any>(environment.getAllEstimateURI + '?_'+ Date.now(), data, options).toPromise();
  // }

  // async getAuthToken() {
  //   let user = await Auth.currentAuthenticatedUser();
  //   return user.signInUserSession.idToken.jwtToken;
  //   // return Auth.currentAuthenticatedUser().then((user) => {
  //   //   return user.signInUserSession.idToken.jwtToken;
  //   // });
  // }

  // public async upsertUserInfoInCRM(userData: any) {
  //   let headers = new HttpHeaders();
  //   headers = headers.set('Content-Type', 'application/json')
  //             .append('Authorization', await this.getAuthToken());

  //   let options = {
  //     headers: headers
  //   }; 

  //   return this.httpClient.post<any>(environment.userManagerAPI + '?_'+ Date.now(), userData, options).toPromise();
  // }

  // public async touchLastLoginTime(userData: any) {
  //   let headers = new HttpHeaders();
  //   headers = headers.set('Content-Type', 'application/json')
  //             .append('Authorization', await this.getAuthToken());

  //   let options = {
  //     headers: headers
  //   }; 

  //   return this.httpClient.post<any>(environment.userManagerAPI + '?_'+ Date.now(), userData, options).toPromise();
  // }

  // public async getPropertySalesData(propertyId:string) {
  //   let headers = new HttpHeaders();
  //   headers = headers.set('Content-Type', 'application/json')
  //             .append('Authorization', await this.getAuthToken());

  //   let data = {
  //     "propertyId" : propertyId,
  //   }

  //   let options = {
  //     headers: headers
  //   }; 

  //   return this.httpClient.post<any>(environment.getPropertySalesDataURI + '?_'+ Date.now(), data, options).toPromise();
  // }

  // public async getPropertyPrices(id: string) {
  //   let headers = new HttpHeaders();
  //   headers = headers.set('Content-Type', 'application/json')
  //             .append('Authorization', await this.getAuthToken());

  //   let data = {
  //     "propertyId" : id
  //   }

  //   let options = {
  //     headers: headers
  //   }; 

  //   return this.httpClient.post<any>(environment.priceDataURI + '?_'+ Date.now(), data, options).toPromise();
  // }
}