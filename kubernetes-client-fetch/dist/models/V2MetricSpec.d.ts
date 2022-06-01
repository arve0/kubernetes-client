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
import { V2ContainerResourceMetricSource, V2ExternalMetricSource, V2ObjectMetricSource, V2PodsMetricSource, V2ResourceMetricSource } from './';
/**
 * MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).
 * @export
 * @interface V2MetricSpec
 */
export interface V2MetricSpec {
    /**
     *
     * @type {V2ContainerResourceMetricSource}
     * @memberof V2MetricSpec
     */
    containerResource?: V2ContainerResourceMetricSource;
    /**
     *
     * @type {V2ExternalMetricSource}
     * @memberof V2MetricSpec
     */
    external?: V2ExternalMetricSource;
    /**
     *
     * @type {V2ObjectMetricSource}
     * @memberof V2MetricSpec
     */
    object?: V2ObjectMetricSource;
    /**
     *
     * @type {V2PodsMetricSource}
     * @memberof V2MetricSpec
     */
    pods?: V2PodsMetricSource;
    /**
     *
     * @type {V2ResourceMetricSource}
     * @memberof V2MetricSpec
     */
    resource?: V2ResourceMetricSource;
    /**
     * type is the type of metric source.  It should be one of "ContainerResource", "External", "Object", "Pods" or "Resource", each mapping to a matching field in the object. Note: "ContainerResource" type is available on when the feature-gate HPAContainerMetrics is enabled
     * @type {string}
     * @memberof V2MetricSpec
     */
    type: string;
}
export declare function V2MetricSpecFromJSON(json: any): V2MetricSpec;
export declare function V2MetricSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2MetricSpec;
export declare function V2MetricSpecToJSON(value?: V2MetricSpec | null): any;