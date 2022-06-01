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
import { V1ListMeta, V1Pod } from './';
/**
 * PodList is a list of Pods.
 * @export
 * @interface V1PodList
 */
export interface V1PodList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1PodList
     */
    apiVersion?: string;
    /**
     * List of pods. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md
     * @type {Array<V1Pod>}
     * @memberof V1PodList
     */
    items: Array<V1Pod>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1PodList
     */
    kind?: string;
    /**
     *
     * @type {V1ListMeta}
     * @memberof V1PodList
     */
    metadata?: V1ListMeta;
}
export declare function V1PodListFromJSON(json: any): V1PodList;
export declare function V1PodListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PodList;
export declare function V1PodListToJSON(value?: V1PodList | null): any;