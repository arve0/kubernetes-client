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
import { V1LeaseSpec, V1ObjectMeta } from './';
/**
 * Lease defines a lease concept.
 * @export
 * @interface V1Lease
 */
export interface V1Lease {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1Lease
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1Lease
     */
    kind?: string;
    /**
     *
     * @type {V1ObjectMeta}
     * @memberof V1Lease
     */
    metadata?: V1ObjectMeta;
    /**
     *
     * @type {V1LeaseSpec}
     * @memberof V1Lease
     */
    spec?: V1LeaseSpec;
}
export declare function V1LeaseFromJSON(json: any): V1Lease;
export declare function V1LeaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Lease;
export declare function V1LeaseToJSON(value?: V1Lease | null): any;
