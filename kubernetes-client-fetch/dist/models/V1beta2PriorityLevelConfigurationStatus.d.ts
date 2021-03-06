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
import { V1beta2PriorityLevelConfigurationCondition } from './';
/**
 * PriorityLevelConfigurationStatus represents the current state of a "request-priority".
 * @export
 * @interface V1beta2PriorityLevelConfigurationStatus
 */
export interface V1beta2PriorityLevelConfigurationStatus {
    /**
     * `conditions` is the current state of "request-priority".
     * @type {Array<V1beta2PriorityLevelConfigurationCondition>}
     * @memberof V1beta2PriorityLevelConfigurationStatus
     */
    conditions?: Array<V1beta2PriorityLevelConfigurationCondition>;
}
export declare function V1beta2PriorityLevelConfigurationStatusFromJSON(json: any): V1beta2PriorityLevelConfigurationStatus;
export declare function V1beta2PriorityLevelConfigurationStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta2PriorityLevelConfigurationStatus;
export declare function V1beta2PriorityLevelConfigurationStatusToJSON(value?: V1beta2PriorityLevelConfigurationStatus | null): any;
