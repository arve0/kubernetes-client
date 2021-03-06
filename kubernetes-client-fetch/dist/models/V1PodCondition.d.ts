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
 * PodCondition contains details for the current condition of this pod.
 * @export
 * @interface V1PodCondition
 */
export interface V1PodCondition {
    /**
     * Last time we probed the condition.
     * @type {Date}
     * @memberof V1PodCondition
     */
    lastProbeTime?: Date;
    /**
     * Last time the condition transitioned from one status to another.
     * @type {Date}
     * @memberof V1PodCondition
     */
    lastTransitionTime?: Date;
    /**
     * Human-readable message indicating details about last transition.
     * @type {string}
     * @memberof V1PodCondition
     */
    message?: string;
    /**
     * Unique, one-word, CamelCase reason for the condition's last transition.
     * @type {string}
     * @memberof V1PodCondition
     */
    reason?: string;
    /**
     * Status is the status of the condition. Can be True, False, Unknown. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
     * @type {string}
     * @memberof V1PodCondition
     */
    status: string;
    /**
     * Type is the type of the condition. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
     * @type {string}
     * @memberof V1PodCondition
     */
    type: string;
}
export declare function V1PodConditionFromJSON(json: any): V1PodCondition;
export declare function V1PodConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PodCondition;
export declare function V1PodConditionToJSON(value?: V1PodCondition | null): any;
