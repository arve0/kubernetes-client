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
import { V1JobSpec, V1JobStatus, V1ObjectMeta } from './';
/**
 * Job represents the configuration of a single job.
 * @export
 * @interface V1Job
 */
export interface V1Job {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1Job
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1Job
     */
    kind?: string;
    /**
     *
     * @type {V1ObjectMeta}
     * @memberof V1Job
     */
    metadata?: V1ObjectMeta;
    /**
     *
     * @type {V1JobSpec}
     * @memberof V1Job
     */
    spec?: V1JobSpec;
    /**
     *
     * @type {V1JobStatus}
     * @memberof V1Job
     */
    status?: V1JobStatus;
}
export declare function V1JobFromJSON(json: any): V1Job;
export declare function V1JobFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Job;
export declare function V1JobToJSON(value?: V1Job | null): any;
