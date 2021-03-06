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
import { V2MetricValueStatus } from './';
/**
 * ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 * @export
 * @interface V2ResourceMetricStatus
 */
export interface V2ResourceMetricStatus {
    /**
     *
     * @type {V2MetricValueStatus}
     * @memberof V2ResourceMetricStatus
     */
    current: V2MetricValueStatus;
    /**
     * Name is the name of the resource in question.
     * @type {string}
     * @memberof V2ResourceMetricStatus
     */
    name: string;
}
export declare function V2ResourceMetricStatusFromJSON(json: any): V2ResourceMetricStatus;
export declare function V2ResourceMetricStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2ResourceMetricStatus;
export declare function V2ResourceMetricStatusToJSON(value?: V2ResourceMetricStatus | null): any;
