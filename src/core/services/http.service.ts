import axios, { AxiosResponse } from 'axios';
import { HTTPOptions } from '@core/interfaces/http-options.interface';
import { Response } from '@core/interfaces/http-response.interface';
import { HTTPRequestType } from '@core/types/http-request.type';
import { Observable, throwError, from } from 'rxjs';
import { shareReplay, retry, delay, map, catchError } from 'rxjs/operators';
import { Injectable } from '@nestjs/common';


@Injectable()
export class HttpService {

    public get<T>(
        url: string,
        options?: HTTPOptions
    ): Observable<Response<T>> {
        return this.request<T>(
            'GET',
            `${url}`,
            options
        );
    }

    public post<T>(
        url: string,
        body?: any,
        options?: HTTPOptions
    ): Observable<Response<T>> {
        return this.request<T>(
            'POST',
            `${url}`,
            { body, ...options }
        );
    }

    public put<T>(
        url: string,
        body: any,
        options?: HTTPOptions
    ): Observable<Response<T>> {
        return this.request<T>(
            'PUT',
            `${url}`,
            { body, ...options }
        );
    }

    public delete<T>(
        url: string,
        options?: HTTPOptions
    ): Observable<Response<T>> {
        return this.request<T>(
            'DELETE',
            `${url}`,
            options
        );
    }

    public patch<T>(
        url: string,
        body: any,
        options?: HTTPOptions
    ): Observable<Response<T>> {
        return this.request<T>(
            'PATCH',
            `${url}`,
            { body, ...options }
        );
    }

    private request<T>(
        type: HTTPRequestType,
        url: string,
        options: HTTPOptions
    ): any {
        const {
            body,
            headers,
            responseType
        } = options;

    return from(
        axios.request<T>({
            method: type,
            data: body,
            url,
            headers,
            responseType
        })
    )
    .pipe(
        shareReplay(),
        retry(0),
        delay(500),
        map((res: AxiosResponse<T, any>) => {
            return {
                ok: res.status >= 200 && res.status <= 299,
                statusCode: res.status,
                statusText: res.statusText,
                data: res.data,
                headers: res.headers
            };
        }),
        catchError(error => {
            return throwError(() => {
                return {
                    ok: error.ok,
                    statusCode: error.status,
                    statusText: error.statusText,
                    data: error.error,
                    headers: error.headers,
                    name: error.name,
                    message: error.message
                };
            });
        })
    );
    }

}
