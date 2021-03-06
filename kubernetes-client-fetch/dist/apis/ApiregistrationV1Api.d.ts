/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.24
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import { V1APIResourceList, V1APIService, V1APIServiceList, V1DeleteOptions, V1Status } from '../models';
export interface ApiregistrationV1ApiCreateAPIServiceRequest {
    body: V1APIService;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}
export interface ApiregistrationV1ApiDeleteAPIServiceRequest {
    name: string;
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    body?: V1DeleteOptions;
}
export interface ApiregistrationV1ApiDeleteCollectionAPIServiceRequest {
    pretty?: string;
    _continue?: string;
    dryRun?: string;
    fieldSelector?: string;
    gracePeriodSeconds?: number;
    labelSelector?: string;
    limit?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    timeoutSeconds?: number;
    body?: V1DeleteOptions;
}
export interface ApiregistrationV1ApiListAPIServiceRequest {
    pretty?: string;
    allowWatchBookmarks?: boolean;
    _continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    timeoutSeconds?: number;
    watch?: boolean;
}
export interface ApiregistrationV1ApiPatchAPIServiceRequest {
    name: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
}
export interface ApiregistrationV1ApiPatchAPIServiceStatusRequest {
    name: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
}
export interface ApiregistrationV1ApiReadAPIServiceRequest {
    name: string;
    pretty?: string;
}
export interface ApiregistrationV1ApiReadAPIServiceStatusRequest {
    name: string;
    pretty?: string;
}
export interface ApiregistrationV1ApiReplaceAPIServiceRequest {
    name: string;
    body: V1APIService;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}
export interface ApiregistrationV1ApiReplaceAPIServiceStatusRequest {
    name: string;
    body: V1APIService;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}
/**
 *
 */
export declare class ApiregistrationV1Api extends runtime.BaseAPI {
    /**
     * create an APIService
     */
    createAPIServiceRaw(requestParameters: ApiregistrationV1ApiCreateAPIServiceRequest): Promise<runtime.ApiResponse<V1APIService>>;
    /**
     * create an APIService
     */
    createAPIService(requestParameters: ApiregistrationV1ApiCreateAPIServiceRequest): Promise<V1APIService>;
    /**
     * delete an APIService
     */
    deleteAPIServiceRaw(requestParameters: ApiregistrationV1ApiDeleteAPIServiceRequest): Promise<runtime.ApiResponse<V1Status>>;
    /**
     * delete an APIService
     */
    deleteAPIService(requestParameters: ApiregistrationV1ApiDeleteAPIServiceRequest): Promise<V1Status>;
    /**
     * delete collection of APIService
     */
    deleteCollectionAPIServiceRaw(requestParameters: ApiregistrationV1ApiDeleteCollectionAPIServiceRequest): Promise<runtime.ApiResponse<V1Status>>;
    /**
     * delete collection of APIService
     */
    deleteCollectionAPIService(requestParameters: ApiregistrationV1ApiDeleteCollectionAPIServiceRequest): Promise<V1Status>;
    /**
     * get available resources
     */
    getAPIResourcesRaw(): Promise<runtime.ApiResponse<V1APIResourceList>>;
    /**
     * get available resources
     */
    getAPIResources(): Promise<V1APIResourceList>;
    /**
     * list or watch objects of kind APIService
     */
    listAPIServiceRaw(requestParameters: ApiregistrationV1ApiListAPIServiceRequest): Promise<runtime.ApiResponse<V1APIServiceList>>;
    /**
     * list or watch objects of kind APIService
     */
    listAPIService(requestParameters: ApiregistrationV1ApiListAPIServiceRequest): Promise<V1APIServiceList>;
    /**
     * partially update the specified APIService
     */
    patchAPIServiceRaw(requestParameters: ApiregistrationV1ApiPatchAPIServiceRequest): Promise<runtime.ApiResponse<V1APIService>>;
    /**
     * partially update the specified APIService
     */
    patchAPIService(requestParameters: ApiregistrationV1ApiPatchAPIServiceRequest): Promise<V1APIService>;
    /**
     * partially update status of the specified APIService
     */
    patchAPIServiceStatusRaw(requestParameters: ApiregistrationV1ApiPatchAPIServiceStatusRequest): Promise<runtime.ApiResponse<V1APIService>>;
    /**
     * partially update status of the specified APIService
     */
    patchAPIServiceStatus(requestParameters: ApiregistrationV1ApiPatchAPIServiceStatusRequest): Promise<V1APIService>;
    /**
     * read the specified APIService
     */
    readAPIServiceRaw(requestParameters: ApiregistrationV1ApiReadAPIServiceRequest): Promise<runtime.ApiResponse<V1APIService>>;
    /**
     * read the specified APIService
     */
    readAPIService(requestParameters: ApiregistrationV1ApiReadAPIServiceRequest): Promise<V1APIService>;
    /**
     * read status of the specified APIService
     */
    readAPIServiceStatusRaw(requestParameters: ApiregistrationV1ApiReadAPIServiceStatusRequest): Promise<runtime.ApiResponse<V1APIService>>;
    /**
     * read status of the specified APIService
     */
    readAPIServiceStatus(requestParameters: ApiregistrationV1ApiReadAPIServiceStatusRequest): Promise<V1APIService>;
    /**
     * replace the specified APIService
     */
    replaceAPIServiceRaw(requestParameters: ApiregistrationV1ApiReplaceAPIServiceRequest): Promise<runtime.ApiResponse<V1APIService>>;
    /**
     * replace the specified APIService
     */
    replaceAPIService(requestParameters: ApiregistrationV1ApiReplaceAPIServiceRequest): Promise<V1APIService>;
    /**
     * replace status of the specified APIService
     */
    replaceAPIServiceStatusRaw(requestParameters: ApiregistrationV1ApiReplaceAPIServiceStatusRequest): Promise<runtime.ApiResponse<V1APIService>>;
    /**
     * replace status of the specified APIService
     */
    replaceAPIServiceStatus(requestParameters: ApiregistrationV1ApiReplaceAPIServiceStatusRequest): Promise<V1APIService>;
}
