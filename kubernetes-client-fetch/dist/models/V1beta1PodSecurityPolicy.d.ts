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
import { V1ObjectMeta, V1beta1PodSecurityPolicySpec } from './';
/**
 * PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container. Deprecated in 1.21.
 * @export
 * @interface V1beta1PodSecurityPolicy
 */
export interface V1beta1PodSecurityPolicy {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1beta1PodSecurityPolicy
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1beta1PodSecurityPolicy
     */
    kind?: string;
    /**
     *
     * @type {V1ObjectMeta}
     * @memberof V1beta1PodSecurityPolicy
     */
    metadata?: V1ObjectMeta;
    /**
     *
     * @type {V1beta1PodSecurityPolicySpec}
     * @memberof V1beta1PodSecurityPolicy
     */
    spec?: V1beta1PodSecurityPolicySpec;
}
export declare function V1beta1PodSecurityPolicyFromJSON(json: any): V1beta1PodSecurityPolicy;
export declare function V1beta1PodSecurityPolicyFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1PodSecurityPolicy;
export declare function V1beta1PodSecurityPolicyToJSON(value?: V1beta1PodSecurityPolicy | null): any;
