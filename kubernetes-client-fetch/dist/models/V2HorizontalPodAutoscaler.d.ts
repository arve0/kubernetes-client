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
import { V1ObjectMeta, V2HorizontalPodAutoscalerSpec, V2HorizontalPodAutoscalerStatus } from './';
/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 * @export
 * @interface V2HorizontalPodAutoscaler
 */
export interface V2HorizontalPodAutoscaler {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V2HorizontalPodAutoscaler
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V2HorizontalPodAutoscaler
     */
    kind?: string;
    /**
     *
     * @type {V1ObjectMeta}
     * @memberof V2HorizontalPodAutoscaler
     */
    metadata?: V1ObjectMeta;
    /**
     *
     * @type {V2HorizontalPodAutoscalerSpec}
     * @memberof V2HorizontalPodAutoscaler
     */
    spec?: V2HorizontalPodAutoscalerSpec;
    /**
     *
     * @type {V2HorizontalPodAutoscalerStatus}
     * @memberof V2HorizontalPodAutoscaler
     */
    status?: V2HorizontalPodAutoscalerStatus;
}
export declare function V2HorizontalPodAutoscalerFromJSON(json: any): V2HorizontalPodAutoscaler;
export declare function V2HorizontalPodAutoscalerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2HorizontalPodAutoscaler;
export declare function V2HorizontalPodAutoscalerToJSON(value?: V2HorizontalPodAutoscaler | null): any;
