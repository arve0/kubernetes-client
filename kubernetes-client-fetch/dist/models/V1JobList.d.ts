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
import { V1Job, V1ListMeta } from './';
/**
 * JobList is a collection of jobs.
 * @export
 * @interface V1JobList
 */
export interface V1JobList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1JobList
     */
    apiVersion?: string;
    /**
     * items is the list of Jobs.
     * @type {Array<V1Job>}
     * @memberof V1JobList
     */
    items: Array<V1Job>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1JobList
     */
    kind?: string;
    /**
     *
     * @type {V1ListMeta}
     * @memberof V1JobList
     */
    metadata?: V1ListMeta;
}
export declare function V1JobListFromJSON(json: any): V1JobList;
export declare function V1JobListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1JobList;
export declare function V1JobListToJSON(value?: V1JobList | null): any;
