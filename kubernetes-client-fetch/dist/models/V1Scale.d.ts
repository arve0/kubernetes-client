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
import { V1ObjectMeta, V1ScaleSpec, V1ScaleStatus } from './';
/**
 * Scale represents a scaling request for a resource.
 * @export
 * @interface V1Scale
 */
export interface V1Scale {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1Scale
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1Scale
     */
    kind?: string;
    /**
     *
     * @type {V1ObjectMeta}
     * @memberof V1Scale
     */
    metadata?: V1ObjectMeta;
    /**
     *
     * @type {V1ScaleSpec}
     * @memberof V1Scale
     */
    spec?: V1ScaleSpec;
    /**
     *
     * @type {V1ScaleStatus}
     * @memberof V1Scale
     */
    status?: V1ScaleStatus;
}
export declare function V1ScaleFromJSON(json: any): V1Scale;
export declare function V1ScaleFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Scale;
export declare function V1ScaleToJSON(value?: V1Scale | null): any;
