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
 * MetricValueStatus holds the current value for a metric
 * @export
 * @interface V2beta2MetricValueStatus
 */
export interface V2beta2MetricValueStatus {
    /**
     * currentAverageUtilization is the current value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.
     * @type {number}
     * @memberof V2beta2MetricValueStatus
     */
    averageUtilization?: number;
    /**
     * averageValue is the current value of the average of the metric across all relevant pods (as a quantity)
     * @type {string}
     * @memberof V2beta2MetricValueStatus
     */
    averageValue?: string;
    /**
     * value is the current value of the metric (as a quantity).
     * @type {string}
     * @memberof V2beta2MetricValueStatus
     */
    value?: string;
}
export declare function V2beta2MetricValueStatusFromJSON(json: any): V2beta2MetricValueStatus;
export declare function V2beta2MetricValueStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2beta2MetricValueStatus;
export declare function V2beta2MetricValueStatusToJSON(value?: V2beta2MetricValueStatus | null): any;
