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
import { V1Condition, V1LoadBalancerStatus } from './';
/**
 * ServiceStatus represents the current status of a service.
 * @export
 * @interface V1ServiceStatus
 */
export interface V1ServiceStatus {
    /**
     * Current service state
     * @type {Array<V1Condition>}
     * @memberof V1ServiceStatus
     */
    conditions?: Array<V1Condition>;
    /**
     *
     * @type {V1LoadBalancerStatus}
     * @memberof V1ServiceStatus
     */
    loadBalancer?: V1LoadBalancerStatus;
}
export declare function V1ServiceStatusFromJSON(json: any): V1ServiceStatus;
export declare function V1ServiceStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ServiceStatus;
export declare function V1ServiceStatusToJSON(value?: V1ServiceStatus | null): any;
