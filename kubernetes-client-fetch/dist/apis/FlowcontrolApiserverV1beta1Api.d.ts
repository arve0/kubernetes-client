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
import { V1APIResourceList, V1DeleteOptions, V1Status, V1beta1FlowSchema, V1beta1FlowSchemaList, V1beta1PriorityLevelConfiguration, V1beta1PriorityLevelConfigurationList } from '../models';
export interface FlowcontrolApiserverV1beta1ApiCreateFlowSchemaRequest {
    body: V1beta1FlowSchema;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}
export interface FlowcontrolApiserverV1beta1ApiCreatePriorityLevelConfigurationRequest {
    body: V1beta1PriorityLevelConfiguration;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}
export interface FlowcontrolApiserverV1beta1ApiDeleteCollectionFlowSchemaRequest {
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
export interface FlowcontrolApiserverV1beta1ApiDeleteCollectionPriorityLevelConfigurationRequest {
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
export interface FlowcontrolApiserverV1beta1ApiDeleteFlowSchemaRequest {
    name: string;
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    body?: V1DeleteOptions;
}
export interface FlowcontrolApiserverV1beta1ApiDeletePriorityLevelConfigurationRequest {
    name: string;
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    body?: V1DeleteOptions;
}
export interface FlowcontrolApiserverV1beta1ApiListFlowSchemaRequest {
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
export interface FlowcontrolApiserverV1beta1ApiListPriorityLevelConfigurationRequest {
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
export interface FlowcontrolApiserverV1beta1ApiPatchFlowSchemaRequest {
    name: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
}
export interface FlowcontrolApiserverV1beta1ApiPatchFlowSchemaStatusRequest {
    name: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
}
export interface FlowcontrolApiserverV1beta1ApiPatchPriorityLevelConfigurationRequest {
    name: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
}
export interface FlowcontrolApiserverV1beta1ApiPatchPriorityLevelConfigurationStatusRequest {
    name: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
}
export interface FlowcontrolApiserverV1beta1ApiReadFlowSchemaRequest {
    name: string;
    pretty?: string;
}
export interface FlowcontrolApiserverV1beta1ApiReadFlowSchemaStatusRequest {
    name: string;
    pretty?: string;
}
export interface FlowcontrolApiserverV1beta1ApiReadPriorityLevelConfigurationRequest {
    name: string;
    pretty?: string;
}
export interface FlowcontrolApiserverV1beta1ApiReadPriorityLevelConfigurationStatusRequest {
    name: string;
    pretty?: string;
}
export interface FlowcontrolApiserverV1beta1ApiReplaceFlowSchemaRequest {
    name: string;
    body: V1beta1FlowSchema;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}
export interface FlowcontrolApiserverV1beta1ApiReplaceFlowSchemaStatusRequest {
    name: string;
    body: V1beta1FlowSchema;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}
export interface FlowcontrolApiserverV1beta1ApiReplacePriorityLevelConfigurationRequest {
    name: string;
    body: V1beta1PriorityLevelConfiguration;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}
export interface FlowcontrolApiserverV1beta1ApiReplacePriorityLevelConfigurationStatusRequest {
    name: string;
    body: V1beta1PriorityLevelConfiguration;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}
/**
 *
 */
export declare class FlowcontrolApiserverV1beta1Api extends runtime.BaseAPI {
    /**
     * create a FlowSchema
     */
    createFlowSchemaRaw(requestParameters: FlowcontrolApiserverV1beta1ApiCreateFlowSchemaRequest): Promise<runtime.ApiResponse<V1beta1FlowSchema>>;
    /**
     * create a FlowSchema
     */
    createFlowSchema(requestParameters: FlowcontrolApiserverV1beta1ApiCreateFlowSchemaRequest): Promise<V1beta1FlowSchema>;
    /**
     * create a PriorityLevelConfiguration
     */
    createPriorityLevelConfigurationRaw(requestParameters: FlowcontrolApiserverV1beta1ApiCreatePriorityLevelConfigurationRequest): Promise<runtime.ApiResponse<V1beta1PriorityLevelConfiguration>>;
    /**
     * create a PriorityLevelConfiguration
     */
    createPriorityLevelConfiguration(requestParameters: FlowcontrolApiserverV1beta1ApiCreatePriorityLevelConfigurationRequest): Promise<V1beta1PriorityLevelConfiguration>;
    /**
     * delete collection of FlowSchema
     */
    deleteCollectionFlowSchemaRaw(requestParameters: FlowcontrolApiserverV1beta1ApiDeleteCollectionFlowSchemaRequest): Promise<runtime.ApiResponse<V1Status>>;
    /**
     * delete collection of FlowSchema
     */
    deleteCollectionFlowSchema(requestParameters: FlowcontrolApiserverV1beta1ApiDeleteCollectionFlowSchemaRequest): Promise<V1Status>;
    /**
     * delete collection of PriorityLevelConfiguration
     */
    deleteCollectionPriorityLevelConfigurationRaw(requestParameters: FlowcontrolApiserverV1beta1ApiDeleteCollectionPriorityLevelConfigurationRequest): Promise<runtime.ApiResponse<V1Status>>;
    /**
     * delete collection of PriorityLevelConfiguration
     */
    deleteCollectionPriorityLevelConfiguration(requestParameters: FlowcontrolApiserverV1beta1ApiDeleteCollectionPriorityLevelConfigurationRequest): Promise<V1Status>;
    /**
     * delete a FlowSchema
     */
    deleteFlowSchemaRaw(requestParameters: FlowcontrolApiserverV1beta1ApiDeleteFlowSchemaRequest): Promise<runtime.ApiResponse<V1Status>>;
    /**
     * delete a FlowSchema
     */
    deleteFlowSchema(requestParameters: FlowcontrolApiserverV1beta1ApiDeleteFlowSchemaRequest): Promise<V1Status>;
    /**
     * delete a PriorityLevelConfiguration
     */
    deletePriorityLevelConfigurationRaw(requestParameters: FlowcontrolApiserverV1beta1ApiDeletePriorityLevelConfigurationRequest): Promise<runtime.ApiResponse<V1Status>>;
    /**
     * delete a PriorityLevelConfiguration
     */
    deletePriorityLevelConfiguration(requestParameters: FlowcontrolApiserverV1beta1ApiDeletePriorityLevelConfigurationRequest): Promise<V1Status>;
    /**
     * get available resources
     */
    getAPIResourcesRaw(): Promise<runtime.ApiResponse<V1APIResourceList>>;
    /**
     * get available resources
     */
    getAPIResources(): Promise<V1APIResourceList>;
    /**
     * list or watch objects of kind FlowSchema
     */
    listFlowSchemaRaw(requestParameters: FlowcontrolApiserverV1beta1ApiListFlowSchemaRequest): Promise<runtime.ApiResponse<V1beta1FlowSchemaList>>;
    /**
     * list or watch objects of kind FlowSchema
     */
    listFlowSchema(requestParameters: FlowcontrolApiserverV1beta1ApiListFlowSchemaRequest): Promise<V1beta1FlowSchemaList>;
    /**
     * list or watch objects of kind PriorityLevelConfiguration
     */
    listPriorityLevelConfigurationRaw(requestParameters: FlowcontrolApiserverV1beta1ApiListPriorityLevelConfigurationRequest): Promise<runtime.ApiResponse<V1beta1PriorityLevelConfigurationList>>;
    /**
     * list or watch objects of kind PriorityLevelConfiguration
     */
    listPriorityLevelConfiguration(requestParameters: FlowcontrolApiserverV1beta1ApiListPriorityLevelConfigurationRequest): Promise<V1beta1PriorityLevelConfigurationList>;
    /**
     * partially update the specified FlowSchema
     */
    patchFlowSchemaRaw(requestParameters: FlowcontrolApiserverV1beta1ApiPatchFlowSchemaRequest): Promise<runtime.ApiResponse<V1beta1FlowSchema>>;
    /**
     * partially update the specified FlowSchema
     */
    patchFlowSchema(requestParameters: FlowcontrolApiserverV1beta1ApiPatchFlowSchemaRequest): Promise<V1beta1FlowSchema>;
    /**
     * partially update status of the specified FlowSchema
     */
    patchFlowSchemaStatusRaw(requestParameters: FlowcontrolApiserverV1beta1ApiPatchFlowSchemaStatusRequest): Promise<runtime.ApiResponse<V1beta1FlowSchema>>;
    /**
     * partially update status of the specified FlowSchema
     */
    patchFlowSchemaStatus(requestParameters: FlowcontrolApiserverV1beta1ApiPatchFlowSchemaStatusRequest): Promise<V1beta1FlowSchema>;
    /**
     * partially update the specified PriorityLevelConfiguration
     */
    patchPriorityLevelConfigurationRaw(requestParameters: FlowcontrolApiserverV1beta1ApiPatchPriorityLevelConfigurationRequest): Promise<runtime.ApiResponse<V1beta1PriorityLevelConfiguration>>;
    /**
     * partially update the specified PriorityLevelConfiguration
     */
    patchPriorityLevelConfiguration(requestParameters: FlowcontrolApiserverV1beta1ApiPatchPriorityLevelConfigurationRequest): Promise<V1beta1PriorityLevelConfiguration>;
    /**
     * partially update status of the specified PriorityLevelConfiguration
     */
    patchPriorityLevelConfigurationStatusRaw(requestParameters: FlowcontrolApiserverV1beta1ApiPatchPriorityLevelConfigurationStatusRequest): Promise<runtime.ApiResponse<V1beta1PriorityLevelConfiguration>>;
    /**
     * partially update status of the specified PriorityLevelConfiguration
     */
    patchPriorityLevelConfigurationStatus(requestParameters: FlowcontrolApiserverV1beta1ApiPatchPriorityLevelConfigurationStatusRequest): Promise<V1beta1PriorityLevelConfiguration>;
    /**
     * read the specified FlowSchema
     */
    readFlowSchemaRaw(requestParameters: FlowcontrolApiserverV1beta1ApiReadFlowSchemaRequest): Promise<runtime.ApiResponse<V1beta1FlowSchema>>;
    /**
     * read the specified FlowSchema
     */
    readFlowSchema(requestParameters: FlowcontrolApiserverV1beta1ApiReadFlowSchemaRequest): Promise<V1beta1FlowSchema>;
    /**
     * read status of the specified FlowSchema
     */
    readFlowSchemaStatusRaw(requestParameters: FlowcontrolApiserverV1beta1ApiReadFlowSchemaStatusRequest): Promise<runtime.ApiResponse<V1beta1FlowSchema>>;
    /**
     * read status of the specified FlowSchema
     */
    readFlowSchemaStatus(requestParameters: FlowcontrolApiserverV1beta1ApiReadFlowSchemaStatusRequest): Promise<V1beta1FlowSchema>;
    /**
     * read the specified PriorityLevelConfiguration
     */
    readPriorityLevelConfigurationRaw(requestParameters: FlowcontrolApiserverV1beta1ApiReadPriorityLevelConfigurationRequest): Promise<runtime.ApiResponse<V1beta1PriorityLevelConfiguration>>;
    /**
     * read the specified PriorityLevelConfiguration
     */
    readPriorityLevelConfiguration(requestParameters: FlowcontrolApiserverV1beta1ApiReadPriorityLevelConfigurationRequest): Promise<V1beta1PriorityLevelConfiguration>;
    /**
     * read status of the specified PriorityLevelConfiguration
     */
    readPriorityLevelConfigurationStatusRaw(requestParameters: FlowcontrolApiserverV1beta1ApiReadPriorityLevelConfigurationStatusRequest): Promise<runtime.ApiResponse<V1beta1PriorityLevelConfiguration>>;
    /**
     * read status of the specified PriorityLevelConfiguration
     */
    readPriorityLevelConfigurationStatus(requestParameters: FlowcontrolApiserverV1beta1ApiReadPriorityLevelConfigurationStatusRequest): Promise<V1beta1PriorityLevelConfiguration>;
    /**
     * replace the specified FlowSchema
     */
    replaceFlowSchemaRaw(requestParameters: FlowcontrolApiserverV1beta1ApiReplaceFlowSchemaRequest): Promise<runtime.ApiResponse<V1beta1FlowSchema>>;
    /**
     * replace the specified FlowSchema
     */
    replaceFlowSchema(requestParameters: FlowcontrolApiserverV1beta1ApiReplaceFlowSchemaRequest): Promise<V1beta1FlowSchema>;
    /**
     * replace status of the specified FlowSchema
     */
    replaceFlowSchemaStatusRaw(requestParameters: FlowcontrolApiserverV1beta1ApiReplaceFlowSchemaStatusRequest): Promise<runtime.ApiResponse<V1beta1FlowSchema>>;
    /**
     * replace status of the specified FlowSchema
     */
    replaceFlowSchemaStatus(requestParameters: FlowcontrolApiserverV1beta1ApiReplaceFlowSchemaStatusRequest): Promise<V1beta1FlowSchema>;
    /**
     * replace the specified PriorityLevelConfiguration
     */
    replacePriorityLevelConfigurationRaw(requestParameters: FlowcontrolApiserverV1beta1ApiReplacePriorityLevelConfigurationRequest): Promise<runtime.ApiResponse<V1beta1PriorityLevelConfiguration>>;
    /**
     * replace the specified PriorityLevelConfiguration
     */
    replacePriorityLevelConfiguration(requestParameters: FlowcontrolApiserverV1beta1ApiReplacePriorityLevelConfigurationRequest): Promise<V1beta1PriorityLevelConfiguration>;
    /**
     * replace status of the specified PriorityLevelConfiguration
     */
    replacePriorityLevelConfigurationStatusRaw(requestParameters: FlowcontrolApiserverV1beta1ApiReplacePriorityLevelConfigurationStatusRequest): Promise<runtime.ApiResponse<V1beta1PriorityLevelConfiguration>>;
    /**
     * replace status of the specified PriorityLevelConfiguration
     */
    replacePriorityLevelConfigurationStatus(requestParameters: FlowcontrolApiserverV1beta1ApiReplacePriorityLevelConfigurationStatusRequest): Promise<V1beta1PriorityLevelConfiguration>;
}