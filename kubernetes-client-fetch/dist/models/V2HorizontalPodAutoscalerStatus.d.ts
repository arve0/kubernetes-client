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
import { V2HorizontalPodAutoscalerCondition, V2MetricStatus } from './';
/**
 * HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
 * @export
 * @interface V2HorizontalPodAutoscalerStatus
 */
export interface V2HorizontalPodAutoscalerStatus {
    /**
     * conditions is the set of conditions required for this autoscaler to scale its target, and indicates whether or not those conditions are met.
     * @type {Array<V2HorizontalPodAutoscalerCondition>}
     * @memberof V2HorizontalPodAutoscalerStatus
     */
    conditions?: Array<V2HorizontalPodAutoscalerCondition>;
    /**
     * currentMetrics is the last read state of the metrics used by this autoscaler.
     * @type {Array<V2MetricStatus>}
     * @memberof V2HorizontalPodAutoscalerStatus
     */
    currentMetrics?: Array<V2MetricStatus>;
    /**
     * currentReplicas is current number of replicas of pods managed by this autoscaler, as last seen by the autoscaler.
     * @type {number}
     * @memberof V2HorizontalPodAutoscalerStatus
     */
    currentReplicas?: number;
    /**
     * desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler.
     * @type {number}
     * @memberof V2HorizontalPodAutoscalerStatus
     */
    desiredReplicas: number;
    /**
     * lastScaleTime is the last time the HorizontalPodAutoscaler scaled the number of pods, used by the autoscaler to control how often the number of pods is changed.
     * @type {Date}
     * @memberof V2HorizontalPodAutoscalerStatus
     */
    lastScaleTime?: Date;
    /**
     * observedGeneration is the most recent generation observed by this autoscaler.
     * @type {number}
     * @memberof V2HorizontalPodAutoscalerStatus
     */
    observedGeneration?: number;
}
export declare function V2HorizontalPodAutoscalerStatusFromJSON(json: any): V2HorizontalPodAutoscalerStatus;
export declare function V2HorizontalPodAutoscalerStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2HorizontalPodAutoscalerStatus;
export declare function V2HorizontalPodAutoscalerStatusToJSON(value?: V2HorizontalPodAutoscalerStatus | null): any;