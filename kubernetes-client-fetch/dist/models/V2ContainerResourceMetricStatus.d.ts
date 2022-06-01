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
 * ContainerResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing a single container in each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 * @export
 * @interface V2ContainerResourceMetricStatus
 */
export interface V2ContainerResourceMetricStatus {
    /**
     * Container is the name of the container in the pods of the scaling target
     * @type {string}
     * @memberof V2ContainerResourceMetricStatus
     */
    container: string;
    /**
     *
     * @type {V2MetricValueStatus}
     * @memberof V2ContainerResourceMetricStatus
     */
    current: V2MetricValueStatus;
    /**
     * Name is the name of the resource in question.
     * @type {string}
     * @memberof V2ContainerResourceMetricStatus
     */
    name: string;
}
export declare function V2ContainerResourceMetricStatusFromJSON(json: any): V2ContainerResourceMetricStatus;
export declare function V2ContainerResourceMetricStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2ContainerResourceMetricStatus;
export declare function V2ContainerResourceMetricStatusToJSON(value?: V2ContainerResourceMetricStatus | null): any;
