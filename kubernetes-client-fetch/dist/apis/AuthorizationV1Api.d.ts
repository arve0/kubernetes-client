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
import { V1APIResourceList, V1LocalSubjectAccessReview, V1SelfSubjectAccessReview, V1SelfSubjectRulesReview, V1SubjectAccessReview } from '../models';
export interface AuthorizationV1ApiCreateNamespacedLocalSubjectAccessReviewRequest {
    namespace: string;
    body: V1LocalSubjectAccessReview;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    pretty?: string;
}
export interface AuthorizationV1ApiCreateSelfSubjectAccessReviewRequest {
    body: V1SelfSubjectAccessReview;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    pretty?: string;
}
export interface AuthorizationV1ApiCreateSelfSubjectRulesReviewRequest {
    body: V1SelfSubjectRulesReview;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    pretty?: string;
}
export interface AuthorizationV1ApiCreateSubjectAccessReviewRequest {
    body: V1SubjectAccessReview;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    pretty?: string;
}
/**
 *
 */
export declare class AuthorizationV1Api extends runtime.BaseAPI {
    /**
     * create a LocalSubjectAccessReview
     */
    createNamespacedLocalSubjectAccessReviewRaw(requestParameters: AuthorizationV1ApiCreateNamespacedLocalSubjectAccessReviewRequest): Promise<runtime.ApiResponse<V1LocalSubjectAccessReview>>;
    /**
     * create a LocalSubjectAccessReview
     */
    createNamespacedLocalSubjectAccessReview(requestParameters: AuthorizationV1ApiCreateNamespacedLocalSubjectAccessReviewRequest): Promise<V1LocalSubjectAccessReview>;
    /**
     * create a SelfSubjectAccessReview
     */
    createSelfSubjectAccessReviewRaw(requestParameters: AuthorizationV1ApiCreateSelfSubjectAccessReviewRequest): Promise<runtime.ApiResponse<V1SelfSubjectAccessReview>>;
    /**
     * create a SelfSubjectAccessReview
     */
    createSelfSubjectAccessReview(requestParameters: AuthorizationV1ApiCreateSelfSubjectAccessReviewRequest): Promise<V1SelfSubjectAccessReview>;
    /**
     * create a SelfSubjectRulesReview
     */
    createSelfSubjectRulesReviewRaw(requestParameters: AuthorizationV1ApiCreateSelfSubjectRulesReviewRequest): Promise<runtime.ApiResponse<V1SelfSubjectRulesReview>>;
    /**
     * create a SelfSubjectRulesReview
     */
    createSelfSubjectRulesReview(requestParameters: AuthorizationV1ApiCreateSelfSubjectRulesReviewRequest): Promise<V1SelfSubjectRulesReview>;
    /**
     * create a SubjectAccessReview
     */
    createSubjectAccessReviewRaw(requestParameters: AuthorizationV1ApiCreateSubjectAccessReviewRequest): Promise<runtime.ApiResponse<V1SubjectAccessReview>>;
    /**
     * create a SubjectAccessReview
     */
    createSubjectAccessReview(requestParameters: AuthorizationV1ApiCreateSubjectAccessReviewRequest): Promise<V1SubjectAccessReview>;
    /**
     * get available resources
     */
    getAPIResourcesRaw(): Promise<runtime.ApiResponse<V1APIResourceList>>;
    /**
     * get available resources
     */
    getAPIResources(): Promise<V1APIResourceList>;
}
