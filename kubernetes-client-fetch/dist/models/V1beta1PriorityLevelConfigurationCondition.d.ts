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
/**
 * PriorityLevelConfigurationCondition defines the condition of priority level.
 * @export
 * @interface V1beta1PriorityLevelConfigurationCondition
 */
export interface V1beta1PriorityLevelConfigurationCondition {
    /**
     * `lastTransitionTime` is the last time the condition transitioned from one status to another.
     * @type {Date}
     * @memberof V1beta1PriorityLevelConfigurationCondition
     */
    lastTransitionTime?: Date;
    /**
     * `message` is a human-readable message indicating details about last transition.
     * @type {string}
     * @memberof V1beta1PriorityLevelConfigurationCondition
     */
    message?: string;
    /**
     * `reason` is a unique, one-word, CamelCase reason for the condition's last transition.
     * @type {string}
     * @memberof V1beta1PriorityLevelConfigurationCondition
     */
    reason?: string;
    /**
     * `status` is the status of the condition. Can be True, False, Unknown. Required.
     * @type {string}
     * @memberof V1beta1PriorityLevelConfigurationCondition
     */
    status?: string;
    /**
     * `type` is the type of the condition. Required.
     * @type {string}
     * @memberof V1beta1PriorityLevelConfigurationCondition
     */
    type?: string;
}
export declare function V1beta1PriorityLevelConfigurationConditionFromJSON(json: any): V1beta1PriorityLevelConfigurationCondition;
export declare function V1beta1PriorityLevelConfigurationConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1PriorityLevelConfigurationCondition;
export declare function V1beta1PriorityLevelConfigurationConditionToJSON(value?: V1beta1PriorityLevelConfigurationCondition | null): any;
