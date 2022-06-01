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
import { V1LabelSelector } from './';
/**
 * PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
 * @export
 * @interface V2beta1PodsMetricStatus
 */
export interface V2beta1PodsMetricStatus {
    /**
     * currentAverageValue is the current value of the average of the metric across all relevant pods (as a quantity)
     * @type {string}
     * @memberof V2beta1PodsMetricStatus
     */
    currentAverageValue: string;
    /**
     * metricName is the name of the metric in question
     * @type {string}
     * @memberof V2beta1PodsMetricStatus
     */
    metricName: string;
    /**
     *
     * @type {V1LabelSelector}
     * @memberof V2beta1PodsMetricStatus
     */
    selector?: V1LabelSelector;
}
export declare function V2beta1PodsMetricStatusFromJSON(json: any): V2beta1PodsMetricStatus;
export declare function V2beta1PodsMetricStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2beta1PodsMetricStatus;
export declare function V2beta1PodsMetricStatusToJSON(value?: V2beta1PodsMetricStatus | null): any;