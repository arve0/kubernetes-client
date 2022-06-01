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
import { V1APIResourceList, V1DeleteOptions, V1Status, V1beta1PodDisruptionBudget, V1beta1PodDisruptionBudgetList, V1beta1PodSecurityPolicy, V1beta1PodSecurityPolicyList } from '../models';
export interface PolicyV1beta1ApiCreateNamespacedPodDisruptionBudgetRequest {
    namespace: string;
    body: V1beta1PodDisruptionBudget;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}
export interface PolicyV1beta1ApiCreatePodSecurityPolicyRequest {
    body: V1beta1PodSecurityPolicy;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}
export interface PolicyV1beta1ApiDeleteCollectionNamespacedPodDisruptionBudgetRequest {
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
export interface PolicyV1beta1ApiDeleteCollectionPodSecurityPolicyRequest {
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
export interface PolicyV1beta1ApiDeleteNamespacedPodDisruptionBudgetRequest {
    name: string;
    namespace: string;
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    body?: V1DeleteOptions;
}
export interface PolicyV1beta1ApiDeletePodSecurityPolicyRequest {
    name: string;
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    body?: V1DeleteOptions;
}
export interface PolicyV1beta1ApiListNamespacedPodDisruptionBudgetRequest {
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
export interface PolicyV1beta1ApiListPodDisruptionBudgetForAllNamespacesRequest {
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
export interface PolicyV1beta1ApiListPodSecurityPolicyRequest {
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
export interface PolicyV1beta1ApiPatchNamespacedPodDisruptionBudgetRequest {
    name: string;
    namespace: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
}
export interface PolicyV1beta1ApiPatchNamespacedPodDisruptionBudgetStatusRequest {
    name: string;
    namespace: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
}
export interface PolicyV1beta1ApiPatchPodSecurityPolicyRequest {
    name: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
}
export interface PolicyV1beta1ApiReadNamespacedPodDisruptionBudgetRequest {
    name: string;
    namespace: string;
    pretty?: string;
}
export interface PolicyV1beta1ApiReadNamespacedPodDisruptionBudgetStatusRequest {
    name: string;
    namespace: string;
    pretty?: string;
}
export interface PolicyV1beta1ApiReadPodSecurityPolicyRequest {
    name: string;
    pretty?: string;
}
export interface PolicyV1beta1ApiReplaceNamespacedPodDisruptionBudgetRequest {
    name: string;
    namespace: string;
    body: V1beta1PodDisruptionBudget;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}
export interface PolicyV1beta1ApiReplaceNamespacedPodDisruptionBudgetStatusRequest {
    name: string;
    namespace: string;
    body: V1beta1PodDisruptionBudget;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}
export interface PolicyV1beta1ApiReplacePodSecurityPolicyRequest {
    name: string;
    body: V1beta1PodSecurityPolicy;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}
/**
 *
 */
export declare class PolicyV1beta1Api extends runtime.BaseAPI {
    /**
     * create a PodDisruptionBudget
     */
    createNamespacedPodDisruptionBudgetRaw(requestParameters: PolicyV1beta1ApiCreateNamespacedPodDisruptionBudgetRequest): Promise<runtime.ApiResponse<V1beta1PodDisruptionBudget>>;
    /**
     * create a PodDisruptionBudget
     */
    createNamespacedPodDisruptionBudget(requestParameters: PolicyV1beta1ApiCreateNamespacedPodDisruptionBudgetRequest): Promise<V1beta1PodDisruptionBudget>;
    /**
     * create a PodSecurityPolicy
     */
    createPodSecurityPolicyRaw(requestParameters: PolicyV1beta1ApiCreatePodSecurityPolicyRequest): Promise<runtime.ApiResponse<V1beta1PodSecurityPolicy>>;
    /**
     * create a PodSecurityPolicy
     */
    createPodSecurityPolicy(requestParameters: PolicyV1beta1ApiCreatePodSecurityPolicyRequest): Promise<V1beta1PodSecurityPolicy>;
    /**
     * delete collection of PodDisruptionBudget
     */
    deleteCollectionNamespacedPodDisruptionBudgetRaw(requestParameters: PolicyV1beta1ApiDeleteCollectionNamespacedPodDisruptionBudgetRequest): Promise<runtime.ApiResponse<V1Status>>;
    /**
     * delete collection of PodDisruptionBudget
     */
    deleteCollectionNamespacedPodDisruptionBudget(requestParameters: PolicyV1beta1ApiDeleteCollectionNamespacedPodDisruptionBudgetRequest): Promise<V1Status>;
    /**
     * delete collection of PodSecurityPolicy
     */
    deleteCollectionPodSecurityPolicyRaw(requestParameters: PolicyV1beta1ApiDeleteCollectionPodSecurityPolicyRequest): Promise<runtime.ApiResponse<V1Status>>;
    /**
     * delete collection of PodSecurityPolicy
     */
    deleteCollectionPodSecurityPolicy(requestParameters: PolicyV1beta1ApiDeleteCollectionPodSecurityPolicyRequest): Promise<V1Status>;
    /**
     * delete a PodDisruptionBudget
     */
    deleteNamespacedPodDisruptionBudgetRaw(requestParameters: PolicyV1beta1ApiDeleteNamespacedPodDisruptionBudgetRequest): Promise<runtime.ApiResponse<V1Status>>;
    /**
     * delete a PodDisruptionBudget
     */
    deleteNamespacedPodDisruptionBudget(requestParameters: PolicyV1beta1ApiDeleteNamespacedPodDisruptionBudgetRequest): Promise<V1Status>;
    /**
     * delete a PodSecurityPolicy
     */
    deletePodSecurityPolicyRaw(requestParameters: PolicyV1beta1ApiDeletePodSecurityPolicyRequest): Promise<runtime.ApiResponse<V1beta1PodSecurityPolicy>>;
    /**
     * delete a PodSecurityPolicy
     */
    deletePodSecurityPolicy(requestParameters: PolicyV1beta1ApiDeletePodSecurityPolicyRequest): Promise<V1beta1PodSecurityPolicy>;
    /**
     * get available resources
     */
    getAPIResourcesRaw(): Promise<runtime.ApiResponse<V1APIResourceList>>;
    /**
     * get available resources
     */
    getAPIResources(): Promise<V1APIResourceList>;
    /**
     * list or watch objects of kind PodDisruptionBudget
     */
    listNamespacedPodDisruptionBudgetRaw(requestParameters: PolicyV1beta1ApiListNamespacedPodDisruptionBudgetRequest): Promise<runtime.ApiResponse<V1beta1PodDisruptionBudgetList>>;
    /**
     * list or watch objects of kind PodDisruptionBudget
     */
    listNamespacedPodDisruptionBudget(requestParameters: PolicyV1beta1ApiListNamespacedPodDisruptionBudgetRequest): Promise<V1beta1PodDisruptionBudgetList>;
    /**
     * list or watch objects of kind PodDisruptionBudget
     */
    listPodDisruptionBudgetForAllNamespacesRaw(requestParameters: PolicyV1beta1ApiListPodDisruptionBudgetForAllNamespacesRequest): Promise<runtime.ApiResponse<V1beta1PodDisruptionBudgetList>>;
    /**
     * list or watch objects of kind PodDisruptionBudget
     */
    listPodDisruptionBudgetForAllNamespaces(requestParameters: PolicyV1beta1ApiListPodDisruptionBudgetForAllNamespacesRequest): Promise<V1beta1PodDisruptionBudgetList>;
    /**
     * list or watch objects of kind PodSecurityPolicy
     */
    listPodSecurityPolicyRaw(requestParameters: PolicyV1beta1ApiListPodSecurityPolicyRequest): Promise<runtime.ApiResponse<V1beta1PodSecurityPolicyList>>;
    /**
     * list or watch objects of kind PodSecurityPolicy
     */
    listPodSecurityPolicy(requestParameters: PolicyV1beta1ApiListPodSecurityPolicyRequest): Promise<V1beta1PodSecurityPolicyList>;
    /**
     * partially update the specified PodDisruptionBudget
     */
    patchNamespacedPodDisruptionBudgetRaw(requestParameters: PolicyV1beta1ApiPatchNamespacedPodDisruptionBudgetRequest): Promise<runtime.ApiResponse<V1beta1PodDisruptionBudget>>;
    /**
     * partially update the specified PodDisruptionBudget
     */
    patchNamespacedPodDisruptionBudget(requestParameters: PolicyV1beta1ApiPatchNamespacedPodDisruptionBudgetRequest): Promise<V1beta1PodDisruptionBudget>;
    /**
     * partially update status of the specified PodDisruptionBudget
     */
    patchNamespacedPodDisruptionBudgetStatusRaw(requestParameters: PolicyV1beta1ApiPatchNamespacedPodDisruptionBudgetStatusRequest): Promise<runtime.ApiResponse<V1beta1PodDisruptionBudget>>;
    /**
     * partially update status of the specified PodDisruptionBudget
     */
    patchNamespacedPodDisruptionBudgetStatus(requestParameters: PolicyV1beta1ApiPatchNamespacedPodDisruptionBudgetStatusRequest): Promise<V1beta1PodDisruptionBudget>;
    /**
     * partially update the specified PodSecurityPolicy
     */
    patchPodSecurityPolicyRaw(requestParameters: PolicyV1beta1ApiPatchPodSecurityPolicyRequest): Promise<runtime.ApiResponse<V1beta1PodSecurityPolicy>>;
    /**
     * partially update the specified PodSecurityPolicy
     */
    patchPodSecurityPolicy(requestParameters: PolicyV1beta1ApiPatchPodSecurityPolicyRequest): Promise<V1beta1PodSecurityPolicy>;
    /**
     * read the specified PodDisruptionBudget
     */
    readNamespacedPodDisruptionBudgetRaw(requestParameters: PolicyV1beta1ApiReadNamespacedPodDisruptionBudgetRequest): Promise<runtime.ApiResponse<V1beta1PodDisruptionBudget>>;
    /**
     * read the specified PodDisruptionBudget
     */
    readNamespacedPodDisruptionBudget(requestParameters: PolicyV1beta1ApiReadNamespacedPodDisruptionBudgetRequest): Promise<V1beta1PodDisruptionBudget>;
    /**
     * read status of the specified PodDisruptionBudget
     */
    readNamespacedPodDisruptionBudgetStatusRaw(requestParameters: PolicyV1beta1ApiReadNamespacedPodDisruptionBudgetStatusRequest): Promise<runtime.ApiResponse<V1beta1PodDisruptionBudget>>;
    /**
     * read status of the specified PodDisruptionBudget
     */
    readNamespacedPodDisruptionBudgetStatus(requestParameters: PolicyV1beta1ApiReadNamespacedPodDisruptionBudgetStatusRequest): Promise<V1beta1PodDisruptionBudget>;
    /**
     * read the specified PodSecurityPolicy
     */
    readPodSecurityPolicyRaw(requestParameters: PolicyV1beta1ApiReadPodSecurityPolicyRequest): Promise<runtime.ApiResponse<V1beta1PodSecurityPolicy>>;
    /**
     * read the specified PodSecurityPolicy
     */
    readPodSecurityPolicy(requestParameters: PolicyV1beta1ApiReadPodSecurityPolicyRequest): Promise<V1beta1PodSecurityPolicy>;
    /**
     * replace the specified PodDisruptionBudget
     */
    replaceNamespacedPodDisruptionBudgetRaw(requestParameters: PolicyV1beta1ApiReplaceNamespacedPodDisruptionBudgetRequest): Promise<runtime.ApiResponse<V1beta1PodDisruptionBudget>>;
    /**
     * replace the specified PodDisruptionBudget
     */
    replaceNamespacedPodDisruptionBudget(requestParameters: PolicyV1beta1ApiReplaceNamespacedPodDisruptionBudgetRequest): Promise<V1beta1PodDisruptionBudget>;
    /**
     * replace status of the specified PodDisruptionBudget
     */
    replaceNamespacedPodDisruptionBudgetStatusRaw(requestParameters: PolicyV1beta1ApiReplaceNamespacedPodDisruptionBudgetStatusRequest): Promise<runtime.ApiResponse<V1beta1PodDisruptionBudget>>;
    /**
     * replace status of the specified PodDisruptionBudget
     */
    replaceNamespacedPodDisruptionBudgetStatus(requestParameters: PolicyV1beta1ApiReplaceNamespacedPodDisruptionBudgetStatusRequest): Promise<V1beta1PodDisruptionBudget>;
    /**
     * replace the specified PodSecurityPolicy
     */
    replacePodSecurityPolicyRaw(requestParameters: PolicyV1beta1ApiReplacePodSecurityPolicyRequest): Promise<runtime.ApiResponse<V1beta1PodSecurityPolicy>>;
    /**
     * replace the specified PodSecurityPolicy
     */
    replacePodSecurityPolicy(requestParameters: PolicyV1beta1ApiReplacePodSecurityPolicyRequest): Promise<V1beta1PodSecurityPolicy>;
}