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
import { V1ListMeta, V1ServiceAccount } from './';
/**
 * ServiceAccountList is a list of ServiceAccount objects
 * @export
 * @interface V1ServiceAccountList
 */
export interface V1ServiceAccountList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1ServiceAccountList
     */
    apiVersion?: string;
    /**
     * List of ServiceAccounts. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
     * @type {Array<V1ServiceAccount>}
     * @memberof V1ServiceAccountList
     */
    items: Array<V1ServiceAccount>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1ServiceAccountList
     */
    kind?: string;
    /**
     *
     * @type {V1ListMeta}
     * @memberof V1ServiceAccountList
     */
    metadata?: V1ListMeta;
}
export declare function V1ServiceAccountListFromJSON(json: any): V1ServiceAccountList;
export declare function V1ServiceAccountListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ServiceAccountList;
export declare function V1ServiceAccountListToJSON(value?: V1ServiceAccountList | null): any;
