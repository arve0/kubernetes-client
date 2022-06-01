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
import { V1ListMeta, V1ResourceQuota } from './';
/**
 * ResourceQuotaList is a list of ResourceQuota items.
 * @export
 * @interface V1ResourceQuotaList
 */
export interface V1ResourceQuotaList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1ResourceQuotaList
     */
    apiVersion?: string;
    /**
     * Items is a list of ResourceQuota objects. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
     * @type {Array<V1ResourceQuota>}
     * @memberof V1ResourceQuotaList
     */
    items: Array<V1ResourceQuota>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1ResourceQuotaList
     */
    kind?: string;
    /**
     *
     * @type {V1ListMeta}
     * @memberof V1ResourceQuotaList
     */
    metadata?: V1ListMeta;
}
export declare function V1ResourceQuotaListFromJSON(json: any): V1ResourceQuotaList;
export declare function V1ResourceQuotaListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ResourceQuotaList;
export declare function V1ResourceQuotaListToJSON(value?: V1ResourceQuotaList | null): any;
