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
import { V1CronJobSpec, V1CronJobStatus, V1ObjectMeta } from './';
/**
 * CronJob represents the configuration of a single cron job.
 * @export
 * @interface V1CronJob
 */
export interface V1CronJob {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1CronJob
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1CronJob
     */
    kind?: string;
    /**
     *
     * @type {V1ObjectMeta}
     * @memberof V1CronJob
     */
    metadata?: V1ObjectMeta;
    /**
     *
     * @type {V1CronJobSpec}
     * @memberof V1CronJob
     */
    spec?: V1CronJobSpec;
    /**
     *
     * @type {V1CronJobStatus}
     * @memberof V1CronJob
     */
    status?: V1CronJobStatus;
}
export declare function V1CronJobFromJSON(json: any): V1CronJob;
export declare function V1CronJobFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CronJob;
export declare function V1CronJobToJSON(value?: V1CronJob | null): any;
