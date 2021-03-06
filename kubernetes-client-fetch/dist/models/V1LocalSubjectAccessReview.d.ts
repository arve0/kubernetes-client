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
import { V1ObjectMeta, V1SubjectAccessReviewSpec, V1SubjectAccessReviewStatus } from './';
/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 * @export
 * @interface V1LocalSubjectAccessReview
 */
export interface V1LocalSubjectAccessReview {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1LocalSubjectAccessReview
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1LocalSubjectAccessReview
     */
    kind?: string;
    /**
     *
     * @type {V1ObjectMeta}
     * @memberof V1LocalSubjectAccessReview
     */
    metadata?: V1ObjectMeta;
    /**
     *
     * @type {V1SubjectAccessReviewSpec}
     * @memberof V1LocalSubjectAccessReview
     */
    spec: V1SubjectAccessReviewSpec;
    /**
     *
     * @type {V1SubjectAccessReviewStatus}
     * @memberof V1LocalSubjectAccessReview
     */
    status?: V1SubjectAccessReviewStatus;
}
export declare function V1LocalSubjectAccessReviewFromJSON(json: any): V1LocalSubjectAccessReview;
export declare function V1LocalSubjectAccessReviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1LocalSubjectAccessReview;
export declare function V1LocalSubjectAccessReviewToJSON(value?: V1LocalSubjectAccessReview | null): any;
