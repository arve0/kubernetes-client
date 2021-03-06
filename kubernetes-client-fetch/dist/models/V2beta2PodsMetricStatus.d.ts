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
import { V2beta2MetricIdentifier, V2beta2MetricValueStatus } from './';
/**
 * PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
 * @export
 * @interface V2beta2PodsMetricStatus
 */
export interface V2beta2PodsMetricStatus {
    /**
     *
     * @type {V2beta2MetricValueStatus}
     * @memberof V2beta2PodsMetricStatus
     */
    current: V2beta2MetricValueStatus;
    /**
     *
     * @type {V2beta2MetricIdentifier}
     * @memberof V2beta2PodsMetricStatus
     */
    metric: V2beta2MetricIdentifier;
}
export declare function V2beta2PodsMetricStatusFromJSON(json: any): V2beta2PodsMetricStatus;
export declare function V2beta2PodsMetricStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2beta2PodsMetricStatus;
export declare function V2beta2PodsMetricStatusToJSON(value?: V2beta2PodsMetricStatus | null): any;
