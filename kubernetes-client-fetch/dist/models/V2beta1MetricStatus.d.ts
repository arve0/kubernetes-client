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
import { V2beta1ContainerResourceMetricStatus, V2beta1ExternalMetricStatus, V2beta1ObjectMetricStatus, V2beta1PodsMetricStatus, V2beta1ResourceMetricStatus } from './';
/**
 * MetricStatus describes the last-read state of a single metric.
 * @export
 * @interface V2beta1MetricStatus
 */
export interface V2beta1MetricStatus {
    /**
     *
     * @type {V2beta1ContainerResourceMetricStatus}
     * @memberof V2beta1MetricStatus
     */
    containerResource?: V2beta1ContainerResourceMetricStatus;
    /**
     *
     * @type {V2beta1ExternalMetricStatus}
     * @memberof V2beta1MetricStatus
     */
    external?: V2beta1ExternalMetricStatus;
    /**
     *
     * @type {V2beta1ObjectMetricStatus}
     * @memberof V2beta1MetricStatus
     */
    object?: V2beta1ObjectMetricStatus;
    /**
     *
     * @type {V2beta1PodsMetricStatus}
     * @memberof V2beta1MetricStatus
     */
    pods?: V2beta1PodsMetricStatus;
    /**
     *
     * @type {V2beta1ResourceMetricStatus}
     * @memberof V2beta1MetricStatus
     */
    resource?: V2beta1ResourceMetricStatus;
    /**
     * type is the type of metric source.  It will be one of "ContainerResource", "External", "Object", "Pods" or "Resource", each corresponds to a matching field in the object. Note: "ContainerResource" type is available on when the feature-gate HPAContainerMetrics is enabled
     * @type {string}
     * @memberof V2beta1MetricStatus
     */
    type: string;
}
export declare function V2beta1MetricStatusFromJSON(json: any): V2beta1MetricStatus;
export declare function V2beta1MetricStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2beta1MetricStatus;
export declare function V2beta1MetricStatusToJSON(value?: V2beta1MetricStatus | null): any;