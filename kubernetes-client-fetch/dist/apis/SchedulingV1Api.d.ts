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
import { V1APIResourceList, V1DeleteOptions, V1PriorityClass, V1PriorityClassList, V1Status } from '../models';
export interface SchedulingV1ApiCreatePriorityClassRequest {
    body: V1PriorityClass;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}
export interface SchedulingV1ApiDeleteCollectionPriorityClassRequest {
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
export interface SchedulingV1ApiDeletePriorityClassRequest {
    name: string;
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    body?: V1DeleteOptions;
}
export interface SchedulingV1ApiListPriorityClassRequest {
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
export interface SchedulingV1ApiPatchPriorityClassRequest {
    name: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
}
export interface SchedulingV1ApiReadPriorityClassRequest {
    name: string;
    pretty?: string;
}
export interface SchedulingV1ApiReplacePriorityClassRequest {
    name: string;
    body: V1PriorityClass;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}
/**
 *
 */
export declare class SchedulingV1Api extends runtime.BaseAPI {
    /**
     * create a PriorityClass
     */
    createPriorityClassRaw(requestParameters: SchedulingV1ApiCreatePriorityClassRequest): Promise<runtime.ApiResponse<V1PriorityClass>>;
    /**
     * create a PriorityClass
     */
    createPriorityClass(requestParameters: SchedulingV1ApiCreatePriorityClassRequest): Promise<V1PriorityClass>;
    /**
     * delete collection of PriorityClass
     */
    deleteCollectionPriorityClassRaw(requestParameters: SchedulingV1ApiDeleteCollectionPriorityClassRequest): Promise<runtime.ApiResponse<V1Status>>;
    /**
     * delete collection of PriorityClass
     */
    deleteCollectionPriorityClass(requestParameters: SchedulingV1ApiDeleteCollectionPriorityClassRequest): Promise<V1Status>;
    /**
     * delete a PriorityClass
     */
    deletePriorityClassRaw(requestParameters: SchedulingV1ApiDeletePriorityClassRequest): Promise<runtime.ApiResponse<V1Status>>;
    /**
     * delete a PriorityClass
     */
    deletePriorityClass(requestParameters: SchedulingV1ApiDeletePriorityClassRequest): Promise<V1Status>;
    /**
     * get available resources
     */
    getAPIResourcesRaw(): Promise<runtime.ApiResponse<V1APIResourceList>>;
    /**
     * get available resources
     */
    getAPIResources(): Promise<V1APIResourceList>;
    /**
     * list or watch objects of kind PriorityClass
     */
    listPriorityClassRaw(requestParameters: SchedulingV1ApiListPriorityClassRequest): Promise<runtime.ApiResponse<V1PriorityClassList>>;
    /**
     * list or watch objects of kind PriorityClass
     */
    listPriorityClass(requestParameters: SchedulingV1ApiListPriorityClassRequest): Promise<V1PriorityClassList>;
    /**
     * partially update the specified PriorityClass
     */
    patchPriorityClassRaw(requestParameters: SchedulingV1ApiPatchPriorityClassRequest): Promise<runtime.ApiResponse<V1PriorityClass>>;
    /**
     * partially update the specified PriorityClass
     */
    patchPriorityClass(requestParameters: SchedulingV1ApiPatchPriorityClassRequest): Promise<V1PriorityClass>;
    /**
     * read the specified PriorityClass
     */
    readPriorityClassRaw(requestParameters: SchedulingV1ApiReadPriorityClassRequest): Promise<runtime.ApiResponse<V1PriorityClass>>;
    /**
     * read the specified PriorityClass
     */
    readPriorityClass(requestParameters: SchedulingV1ApiReadPriorityClassRequest): Promise<V1PriorityClass>;
    /**
     * replace the specified PriorityClass
     */
    replacePriorityClassRaw(requestParameters: SchedulingV1ApiReplacePriorityClassRequest): Promise<runtime.ApiResponse<V1PriorityClass>>;
    /**
     * replace the specified PriorityClass
     */
    replacePriorityClass(requestParameters: SchedulingV1ApiReplacePriorityClassRequest): Promise<V1PriorityClass>;
}