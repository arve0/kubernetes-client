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
import { V1APIResourceList, V1DeleteOptions, V1Ingress, V1IngressClass, V1IngressClassList, V1IngressList, V1NetworkPolicy, V1NetworkPolicyList, V1Status } from '../models';
export interface NetworkingV1ApiCreateIngressClassRequest {
    body: V1IngressClass;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}
export interface NetworkingV1ApiCreateNamespacedIngressRequest {
    namespace: string;
    body: V1Ingress;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}
export interface NetworkingV1ApiCreateNamespacedNetworkPolicyRequest {
    namespace: string;
    body: V1NetworkPolicy;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}
export interface NetworkingV1ApiDeleteCollectionIngressClassRequest {
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
export interface NetworkingV1ApiDeleteCollectionNamespacedIngressRequest {
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
export interface NetworkingV1ApiDeleteCollectionNamespacedNetworkPolicyRequest {
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
export interface NetworkingV1ApiDeleteIngressClassRequest {
    name: string;
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    body?: V1DeleteOptions;
}
export interface NetworkingV1ApiDeleteNamespacedIngressRequest {
    name: string;
    namespace: string;
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    body?: V1DeleteOptions;
}
export interface NetworkingV1ApiDeleteNamespacedNetworkPolicyRequest {
    name: string;
    namespace: string;
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    body?: V1DeleteOptions;
}
export interface NetworkingV1ApiListIngressClassRequest {
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
export interface NetworkingV1ApiListIngressForAllNamespacesRequest {
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
export interface NetworkingV1ApiListNamespacedIngressRequest {
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
export interface NetworkingV1ApiListNamespacedNetworkPolicyRequest {
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
export interface NetworkingV1ApiListNetworkPolicyForAllNamespacesRequest {
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
export interface NetworkingV1ApiPatchIngressClassRequest {
    name: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
}
export interface NetworkingV1ApiPatchNamespacedIngressRequest {
    name: string;
    namespace: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
}
export interface NetworkingV1ApiPatchNamespacedIngressStatusRequest {
    name: string;
    namespace: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
}
export interface NetworkingV1ApiPatchNamespacedNetworkPolicyRequest {
    name: string;
    namespace: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
}
export interface NetworkingV1ApiPatchNamespacedNetworkPolicyStatusRequest {
    name: string;
    namespace: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
}
export interface NetworkingV1ApiReadIngressClassRequest {
    name: string;
    pretty?: string;
}
export interface NetworkingV1ApiReadNamespacedIngressRequest {
    name: string;
    namespace: string;
    pretty?: string;
}
export interface NetworkingV1ApiReadNamespacedIngressStatusRequest {
    name: string;
    namespace: string;
    pretty?: string;
}
export interface NetworkingV1ApiReadNamespacedNetworkPolicyRequest {
    name: string;
    namespace: string;
    pretty?: string;
}
export interface NetworkingV1ApiReadNamespacedNetworkPolicyStatusRequest {
    name: string;
    namespace: string;
    pretty?: string;
}
export interface NetworkingV1ApiReplaceIngressClassRequest {
    name: string;
    body: V1IngressClass;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}
export interface NetworkingV1ApiReplaceNamespacedIngressRequest {
    name: string;
    namespace: string;
    body: V1Ingress;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}
export interface NetworkingV1ApiReplaceNamespacedIngressStatusRequest {
    name: string;
    namespace: string;
    body: V1Ingress;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}
export interface NetworkingV1ApiReplaceNamespacedNetworkPolicyRequest {
    name: string;
    namespace: string;
    body: V1NetworkPolicy;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}
export interface NetworkingV1ApiReplaceNamespacedNetworkPolicyStatusRequest {
    name: string;
    namespace: string;
    body: V1NetworkPolicy;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}
/**
 *
 */
export declare class NetworkingV1Api extends runtime.BaseAPI {
    /**
     * create an IngressClass
     */
    createIngressClassRaw(requestParameters: NetworkingV1ApiCreateIngressClassRequest): Promise<runtime.ApiResponse<V1IngressClass>>;
    /**
     * create an IngressClass
     */
    createIngressClass(requestParameters: NetworkingV1ApiCreateIngressClassRequest): Promise<V1IngressClass>;
    /**
     * create an Ingress
     */
    createNamespacedIngressRaw(requestParameters: NetworkingV1ApiCreateNamespacedIngressRequest): Promise<runtime.ApiResponse<V1Ingress>>;
    /**
     * create an Ingress
     */
    createNamespacedIngress(requestParameters: NetworkingV1ApiCreateNamespacedIngressRequest): Promise<V1Ingress>;
    /**
     * create a NetworkPolicy
     */
    createNamespacedNetworkPolicyRaw(requestParameters: NetworkingV1ApiCreateNamespacedNetworkPolicyRequest): Promise<runtime.ApiResponse<V1NetworkPolicy>>;
    /**
     * create a NetworkPolicy
     */
    createNamespacedNetworkPolicy(requestParameters: NetworkingV1ApiCreateNamespacedNetworkPolicyRequest): Promise<V1NetworkPolicy>;
    /**
     * delete collection of IngressClass
     */
    deleteCollectionIngressClassRaw(requestParameters: NetworkingV1ApiDeleteCollectionIngressClassRequest): Promise<runtime.ApiResponse<V1Status>>;
    /**
     * delete collection of IngressClass
     */
    deleteCollectionIngressClass(requestParameters: NetworkingV1ApiDeleteCollectionIngressClassRequest): Promise<V1Status>;
    /**
     * delete collection of Ingress
     */
    deleteCollectionNamespacedIngressRaw(requestParameters: NetworkingV1ApiDeleteCollectionNamespacedIngressRequest): Promise<runtime.ApiResponse<V1Status>>;
    /**
     * delete collection of Ingress
     */
    deleteCollectionNamespacedIngress(requestParameters: NetworkingV1ApiDeleteCollectionNamespacedIngressRequest): Promise<V1Status>;
    /**
     * delete collection of NetworkPolicy
     */
    deleteCollectionNamespacedNetworkPolicyRaw(requestParameters: NetworkingV1ApiDeleteCollectionNamespacedNetworkPolicyRequest): Promise<runtime.ApiResponse<V1Status>>;
    /**
     * delete collection of NetworkPolicy
     */
    deleteCollectionNamespacedNetworkPolicy(requestParameters: NetworkingV1ApiDeleteCollectionNamespacedNetworkPolicyRequest): Promise<V1Status>;
    /**
     * delete an IngressClass
     */
    deleteIngressClassRaw(requestParameters: NetworkingV1ApiDeleteIngressClassRequest): Promise<runtime.ApiResponse<V1Status>>;
    /**
     * delete an IngressClass
     */
    deleteIngressClass(requestParameters: NetworkingV1ApiDeleteIngressClassRequest): Promise<V1Status>;
    /**
     * delete an Ingress
     */
    deleteNamespacedIngressRaw(requestParameters: NetworkingV1ApiDeleteNamespacedIngressRequest): Promise<runtime.ApiResponse<V1Status>>;
    /**
     * delete an Ingress
     */
    deleteNamespacedIngress(requestParameters: NetworkingV1ApiDeleteNamespacedIngressRequest): Promise<V1Status>;
    /**
     * delete a NetworkPolicy
     */
    deleteNamespacedNetworkPolicyRaw(requestParameters: NetworkingV1ApiDeleteNamespacedNetworkPolicyRequest): Promise<runtime.ApiResponse<V1Status>>;
    /**
     * delete a NetworkPolicy
     */
    deleteNamespacedNetworkPolicy(requestParameters: NetworkingV1ApiDeleteNamespacedNetworkPolicyRequest): Promise<V1Status>;
    /**
     * get available resources
     */
    getAPIResourcesRaw(): Promise<runtime.ApiResponse<V1APIResourceList>>;
    /**
     * get available resources
     */
    getAPIResources(): Promise<V1APIResourceList>;
    /**
     * list or watch objects of kind IngressClass
     */
    listIngressClassRaw(requestParameters: NetworkingV1ApiListIngressClassRequest): Promise<runtime.ApiResponse<V1IngressClassList>>;
    /**
     * list or watch objects of kind IngressClass
     */
    listIngressClass(requestParameters: NetworkingV1ApiListIngressClassRequest): Promise<V1IngressClassList>;
    /**
     * list or watch objects of kind Ingress
     */
    listIngressForAllNamespacesRaw(requestParameters: NetworkingV1ApiListIngressForAllNamespacesRequest): Promise<runtime.ApiResponse<V1IngressList>>;
    /**
     * list or watch objects of kind Ingress
     */
    listIngressForAllNamespaces(requestParameters: NetworkingV1ApiListIngressForAllNamespacesRequest): Promise<V1IngressList>;
    /**
     * list or watch objects of kind Ingress
     */
    listNamespacedIngressRaw(requestParameters: NetworkingV1ApiListNamespacedIngressRequest): Promise<runtime.ApiResponse<V1IngressList>>;
    /**
     * list or watch objects of kind Ingress
     */
    listNamespacedIngress(requestParameters: NetworkingV1ApiListNamespacedIngressRequest): Promise<V1IngressList>;
    /**
     * list or watch objects of kind NetworkPolicy
     */
    listNamespacedNetworkPolicyRaw(requestParameters: NetworkingV1ApiListNamespacedNetworkPolicyRequest): Promise<runtime.ApiResponse<V1NetworkPolicyList>>;
    /**
     * list or watch objects of kind NetworkPolicy
     */
    listNamespacedNetworkPolicy(requestParameters: NetworkingV1ApiListNamespacedNetworkPolicyRequest): Promise<V1NetworkPolicyList>;
    /**
     * list or watch objects of kind NetworkPolicy
     */
    listNetworkPolicyForAllNamespacesRaw(requestParameters: NetworkingV1ApiListNetworkPolicyForAllNamespacesRequest): Promise<runtime.ApiResponse<V1NetworkPolicyList>>;
    /**
     * list or watch objects of kind NetworkPolicy
     */
    listNetworkPolicyForAllNamespaces(requestParameters: NetworkingV1ApiListNetworkPolicyForAllNamespacesRequest): Promise<V1NetworkPolicyList>;
    /**
     * partially update the specified IngressClass
     */
    patchIngressClassRaw(requestParameters: NetworkingV1ApiPatchIngressClassRequest): Promise<runtime.ApiResponse<V1IngressClass>>;
    /**
     * partially update the specified IngressClass
     */
    patchIngressClass(requestParameters: NetworkingV1ApiPatchIngressClassRequest): Promise<V1IngressClass>;
    /**
     * partially update the specified Ingress
     */
    patchNamespacedIngressRaw(requestParameters: NetworkingV1ApiPatchNamespacedIngressRequest): Promise<runtime.ApiResponse<V1Ingress>>;
    /**
     * partially update the specified Ingress
     */
    patchNamespacedIngress(requestParameters: NetworkingV1ApiPatchNamespacedIngressRequest): Promise<V1Ingress>;
    /**
     * partially update status of the specified Ingress
     */
    patchNamespacedIngressStatusRaw(requestParameters: NetworkingV1ApiPatchNamespacedIngressStatusRequest): Promise<runtime.ApiResponse<V1Ingress>>;
    /**
     * partially update status of the specified Ingress
     */
    patchNamespacedIngressStatus(requestParameters: NetworkingV1ApiPatchNamespacedIngressStatusRequest): Promise<V1Ingress>;
    /**
     * partially update the specified NetworkPolicy
     */
    patchNamespacedNetworkPolicyRaw(requestParameters: NetworkingV1ApiPatchNamespacedNetworkPolicyRequest): Promise<runtime.ApiResponse<V1NetworkPolicy>>;
    /**
     * partially update the specified NetworkPolicy
     */
    patchNamespacedNetworkPolicy(requestParameters: NetworkingV1ApiPatchNamespacedNetworkPolicyRequest): Promise<V1NetworkPolicy>;
    /**
     * partially update status of the specified NetworkPolicy
     */
    patchNamespacedNetworkPolicyStatusRaw(requestParameters: NetworkingV1ApiPatchNamespacedNetworkPolicyStatusRequest): Promise<runtime.ApiResponse<V1NetworkPolicy>>;
    /**
     * partially update status of the specified NetworkPolicy
     */
    patchNamespacedNetworkPolicyStatus(requestParameters: NetworkingV1ApiPatchNamespacedNetworkPolicyStatusRequest): Promise<V1NetworkPolicy>;
    /**
     * read the specified IngressClass
     */
    readIngressClassRaw(requestParameters: NetworkingV1ApiReadIngressClassRequest): Promise<runtime.ApiResponse<V1IngressClass>>;
    /**
     * read the specified IngressClass
     */
    readIngressClass(requestParameters: NetworkingV1ApiReadIngressClassRequest): Promise<V1IngressClass>;
    /**
     * read the specified Ingress
     */
    readNamespacedIngressRaw(requestParameters: NetworkingV1ApiReadNamespacedIngressRequest): Promise<runtime.ApiResponse<V1Ingress>>;
    /**
     * read the specified Ingress
     */
    readNamespacedIngress(requestParameters: NetworkingV1ApiReadNamespacedIngressRequest): Promise<V1Ingress>;
    /**
     * read status of the specified Ingress
     */
    readNamespacedIngressStatusRaw(requestParameters: NetworkingV1ApiReadNamespacedIngressStatusRequest): Promise<runtime.ApiResponse<V1Ingress>>;
    /**
     * read status of the specified Ingress
     */
    readNamespacedIngressStatus(requestParameters: NetworkingV1ApiReadNamespacedIngressStatusRequest): Promise<V1Ingress>;
    /**
     * read the specified NetworkPolicy
     */
    readNamespacedNetworkPolicyRaw(requestParameters: NetworkingV1ApiReadNamespacedNetworkPolicyRequest): Promise<runtime.ApiResponse<V1NetworkPolicy>>;
    /**
     * read the specified NetworkPolicy
     */
    readNamespacedNetworkPolicy(requestParameters: NetworkingV1ApiReadNamespacedNetworkPolicyRequest): Promise<V1NetworkPolicy>;
    /**
     * read status of the specified NetworkPolicy
     */
    readNamespacedNetworkPolicyStatusRaw(requestParameters: NetworkingV1ApiReadNamespacedNetworkPolicyStatusRequest): Promise<runtime.ApiResponse<V1NetworkPolicy>>;
    /**
     * read status of the specified NetworkPolicy
     */
    readNamespacedNetworkPolicyStatus(requestParameters: NetworkingV1ApiReadNamespacedNetworkPolicyStatusRequest): Promise<V1NetworkPolicy>;
    /**
     * replace the specified IngressClass
     */
    replaceIngressClassRaw(requestParameters: NetworkingV1ApiReplaceIngressClassRequest): Promise<runtime.ApiResponse<V1IngressClass>>;
    /**
     * replace the specified IngressClass
     */
    replaceIngressClass(requestParameters: NetworkingV1ApiReplaceIngressClassRequest): Promise<V1IngressClass>;
    /**
     * replace the specified Ingress
     */
    replaceNamespacedIngressRaw(requestParameters: NetworkingV1ApiReplaceNamespacedIngressRequest): Promise<runtime.ApiResponse<V1Ingress>>;
    /**
     * replace the specified Ingress
     */
    replaceNamespacedIngress(requestParameters: NetworkingV1ApiReplaceNamespacedIngressRequest): Promise<V1Ingress>;
    /**
     * replace status of the specified Ingress
     */
    replaceNamespacedIngressStatusRaw(requestParameters: NetworkingV1ApiReplaceNamespacedIngressStatusRequest): Promise<runtime.ApiResponse<V1Ingress>>;
    /**
     * replace status of the specified Ingress
     */
    replaceNamespacedIngressStatus(requestParameters: NetworkingV1ApiReplaceNamespacedIngressStatusRequest): Promise<V1Ingress>;
    /**
     * replace the specified NetworkPolicy
     */
    replaceNamespacedNetworkPolicyRaw(requestParameters: NetworkingV1ApiReplaceNamespacedNetworkPolicyRequest): Promise<runtime.ApiResponse<V1NetworkPolicy>>;
    /**
     * replace the specified NetworkPolicy
     */
    replaceNamespacedNetworkPolicy(requestParameters: NetworkingV1ApiReplaceNamespacedNetworkPolicyRequest): Promise<V1NetworkPolicy>;
    /**
     * replace status of the specified NetworkPolicy
     */
    replaceNamespacedNetworkPolicyStatusRaw(requestParameters: NetworkingV1ApiReplaceNamespacedNetworkPolicyStatusRequest): Promise<runtime.ApiResponse<V1NetworkPolicy>>;
    /**
     * replace status of the specified NetworkPolicy
     */
    replaceNamespacedNetworkPolicyStatus(requestParameters: NetworkingV1ApiReplaceNamespacedNetworkPolicyStatusRequest): Promise<V1NetworkPolicy>;
}