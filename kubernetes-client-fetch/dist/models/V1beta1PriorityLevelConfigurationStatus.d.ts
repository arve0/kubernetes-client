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
import { V1beta1PriorityLevelConfigurationCondition } from './';
/**
 * PriorityLevelConfigurationStatus represents the current state of a "request-priority".
 * @export
 * @interface V1beta1PriorityLevelConfigurationStatus
 */
export interface V1beta1PriorityLevelConfigurationStatus {
    /**
     * `conditions` is the current state of "request-priority".
     * @type {Array<V1beta1PriorityLevelConfigurationCondition>}
     * @memberof V1beta1PriorityLevelConfigurationStatus
     */
    conditions?: Array<V1beta1PriorityLevelConfigurationCondition>;
}
export declare function V1beta1PriorityLevelConfigurationStatusFromJSON(json: any): V1beta1PriorityLevelConfigurationStatus;
export declare function V1beta1PriorityLevelConfigurationStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1PriorityLevelConfigurationStatus;
export declare function V1beta1PriorityLevelConfigurationStatusToJSON(value?: V1beta1PriorityLevelConfigurationStatus | null): any;
