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
import { V1APIResourceList, V1DeleteOptions, V1Status, V1beta1CSIStorageCapacity, V1beta1CSIStorageCapacityList } from '../models';
export interface StorageV1beta1ApiCreateNamespacedCSIStorageCapacityRequest {
    namespace: string;
    body: V1beta1CSIStorageCapacity;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}
export interface StorageV1beta1ApiDeleteCollectionNamespacedCSIStorageCapacityRequest {
    namespace: string;
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
export interface StorageV1beta1ApiDeleteNamespacedCSIStorageCapacityRequest {
    name: string;
    namespace: string;
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    body?: V1DeleteOptions;
}
export interface StorageV1beta1ApiListCSIStorageCapacityForAllNamespacesRequest {
    allowWatchBookmarks?: boolean;
    _continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    timeoutSeconds?: number;
    watch?: boolean;
}
export interface StorageV1beta1ApiListNamespacedCSIStorageCapacityRequest {
    namespace: string;
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
export interface StorageV1beta1ApiPatchNamespacedCSIStorageCapacityRequest {
    name: string;
    namespace: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
}
export interface StorageV1beta1ApiReadNamespacedCSIStorageCapacityRequest {
    name: string;
    namespace: string;
    pretty?: string;
}
export interface StorageV1beta1ApiReplaceNamespacedCSIStorageCapacityRequest {
    name: string;
    namespace: string;
    body: V1beta1CSIStorageCapacity;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}
/**
 *
 */
export declare class StorageV1beta1Api extends runtime.BaseAPI {
    /**
     * create a CSIStorageCapacity
     */
    createNamespacedCSIStorageCapacityRaw(requestParameters: StorageV1beta1ApiCreateNamespacedCSIStorageCapacityRequest): Promise<runtime.ApiResponse<V1beta1CSIStorageCapacity>>;
    /**
     * create a CSIStorageCapacity
     */
    createNamespacedCSIStorageCapacity(requestParameters: StorageV1beta1ApiCreateNamespacedCSIStorageCapacityRequest): Promise<V1beta1CSIStorageCapacity>;
    /**
     * delete collection of CSIStorageCapacity
     */
    deleteCollectionNamespacedCSIStorageCapacityRaw(requestParameters: StorageV1beta1ApiDeleteCollectionNamespacedCSIStorageCapacityRequest): Promise<runtime.ApiResponse<V1Status>>;
    /**
     * delete collection of CSIStorageCapacity
     */
    deleteCollectionNamespacedCSIStorageCapacity(requestParameters: StorageV1beta1ApiDeleteCollectionNamespacedCSIStorageCapacityRequest): Promise<V1Status>;
    /**
     * delete a CSIStorageCapacity
     */
    deleteNamespacedCSIStorageCapacityRaw(requestParameters: StorageV1beta1ApiDeleteNamespacedCSIStorageCapacityRequest): Promise<runtime.ApiResponse<V1Status>>;
    /**
     * delete a CSIStorageCapacity
     */
    deleteNamespacedCSIStorageCapacity(requestParameters: StorageV1beta1ApiDeleteNamespacedCSIStorageCapacityRequest): Promise<V1Status>;
    /**
     * get available resources
     */
    getAPIResourcesRaw(): Promise<runtime.ApiResponse<V1APIResourceList>>;
    /**
     * get available resources
     */
    getAPIResources(): Promise<V1APIResourceList>;
    /**
     * list or watch objects of kind CSIStorageCapacity
     */
    listCSIStorageCapacityForAllNamespacesRaw(requestParameters: StorageV1beta1ApiListCSIStorageCapacityForAllNamespacesRequest): Promise<runtime.ApiResponse<V1beta1CSIStorageCapacityList>>;
    /**
     * list or watch objects of kind CSIStorageCapacity
     */
    listCSIStorageCapacityForAllNamespaces(requestParameters: StorageV1beta1ApiListCSIStorageCapacityForAllNamespacesRequest): Promise<V1beta1CSIStorageCapacityList>;
    /**
     * list or watch objects of kind CSIStorageCapacity
     */
    listNamespacedCSIStorageCapacityRaw(requestParameters: StorageV1beta1ApiListNamespacedCSIStorageCapacityRequest): Promise<runtime.ApiResponse<V1beta1CSIStorageCapacityList>>;
    /**
     * list or watch objects of kind CSIStorageCapacity
     */
    listNamespacedCSIStorageCapacity(requestParameters: StorageV1beta1ApiListNamespacedCSIStorageCapacityRequest): Promise<V1beta1CSIStorageCapacityList>;
    /**
     * partially update the specified CSIStorageCapacity
     */
    patchNamespacedCSIStorageCapacityRaw(requestParameters: StorageV1beta1ApiPatchNamespacedCSIStorageCapacityRequest): Promise<runtime.ApiResponse<V1beta1CSIStorageCapacity>>;
    /**
     * partially update the specified CSIStorageCapacity
     */
    patchNamespacedCSIStorageCapacity(requestParameters: StorageV1beta1ApiPatchNamespacedCSIStorageCapacityRequest): Promise<V1beta1CSIStorageCapacity>;
    /**
     * read the specified CSIStorageCapacity
     */
    readNamespacedCSIStorageCapacityRaw(requestParameters: StorageV1beta1ApiReadNamespacedCSIStorageCapacityRequest): Promise<runtime.ApiResponse<V1beta1CSIStorageCapacity>>;
    /**
     * read the specified CSIStorageCapacity
     */
    readNamespacedCSIStorageCapacity(requestParameters: StorageV1beta1ApiReadNamespacedCSIStorageCapacityRequest): Promise<V1beta1CSIStorageCapacity>;
    /**
     * replace the specified CSIStorageCapacity
     */
    replaceNamespacedCSIStorageCapacityRaw(requestParameters: StorageV1beta1ApiReplaceNamespacedCSIStorageCapacityRequest): Promise<runtime.ApiResponse<V1beta1CSIStorageCapacity>>;
    /**
     * replace the specified CSIStorageCapacity
     */
    replaceNamespacedCSIStorageCapacity(requestParameters: StorageV1beta1ApiReplaceNamespacedCSIStorageCapacityRequest): Promise<V1beta1CSIStorageCapacity>;
}