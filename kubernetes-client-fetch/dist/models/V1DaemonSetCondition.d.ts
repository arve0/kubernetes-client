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
 * DaemonSetCondition describes the state of a DaemonSet at a certain point.
 * @export
 * @interface V1DaemonSetCondition
 */
export interface V1DaemonSetCondition {
    /**
     * Last time the condition transitioned from one status to another.
     * @type {Date}
     * @memberof V1DaemonSetCondition
     */
    lastTransitionTime?: Date;
    /**
     * A human readable message indicating details about the transition.
     * @type {string}
     * @memberof V1DaemonSetCondition
     */
    message?: string;
    /**
     * The reason for the condition's last transition.
     * @type {string}
     * @memberof V1DaemonSetCondition
     */
    reason?: string;
    /**
     * Status of the condition, one of True, False, Unknown.
     * @type {string}
     * @memberof V1DaemonSetCondition
     */
    status: string;
    /**
     * Type of DaemonSet condition.
     * @type {string}
     * @memberof V1DaemonSetCondition
     */
    type: string;
}
export declare function V1DaemonSetConditionFromJSON(json: any): V1DaemonSetCondition;
export declare function V1DaemonSetConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DaemonSetCondition;
export declare function V1DaemonSetConditionToJSON(value?: V1DaemonSetCondition | null): any;