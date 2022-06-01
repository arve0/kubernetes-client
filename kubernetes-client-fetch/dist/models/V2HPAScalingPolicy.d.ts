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
 * HPAScalingPolicy is a single policy which must hold true for a specified past interval.
 * @export
 * @interface V2HPAScalingPolicy
 */
export interface V2HPAScalingPolicy {
    /**
     * PeriodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
     * @type {number}
     * @memberof V2HPAScalingPolicy
     */
    periodSeconds: number;
    /**
     * Type is used to specify the scaling policy.
     * @type {string}
     * @memberof V2HPAScalingPolicy
     */
    type: string;
    /**
     * Value contains the amount of change which is permitted by the policy. It must be greater than zero
     * @type {number}
     * @memberof V2HPAScalingPolicy
     */
    value: number;
}
export declare function V2HPAScalingPolicyFromJSON(json: any): V2HPAScalingPolicy;
export declare function V2HPAScalingPolicyFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2HPAScalingPolicy;
export declare function V2HPAScalingPolicyToJSON(value?: V2HPAScalingPolicy | null): any;