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
import { V1ListMeta, V1NetworkPolicy } from './';
/**
 * NetworkPolicyList is a list of NetworkPolicy objects.
 * @export
 * @interface V1NetworkPolicyList
 */
export interface V1NetworkPolicyList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1NetworkPolicyList
     */
    apiVersion?: string;
    /**
     * Items is a list of schema objects.
     * @type {Array<V1NetworkPolicy>}
     * @memberof V1NetworkPolicyList
     */
    items: Array<V1NetworkPolicy>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1NetworkPolicyList
     */
    kind?: string;
    /**
     *
     * @type {V1ListMeta}
     * @memberof V1NetworkPolicyList
     */
    metadata?: V1ListMeta;
}
export declare function V1NetworkPolicyListFromJSON(json: any): V1NetworkPolicyList;
export declare function V1NetworkPolicyListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NetworkPolicyList;
export declare function V1NetworkPolicyListToJSON(value?: V1NetworkPolicyList | null): any;