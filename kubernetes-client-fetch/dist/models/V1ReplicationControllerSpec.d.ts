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
import { V1PodTemplateSpec } from './';
/**
 * ReplicationControllerSpec is the specification of a replication controller.
 * @export
 * @interface V1ReplicationControllerSpec
 */
export interface V1ReplicationControllerSpec {
    /**
     * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
     * @type {number}
     * @memberof V1ReplicationControllerSpec
     */
    minReadySeconds?: number;
    /**
     * Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller
     * @type {number}
     * @memberof V1ReplicationControllerSpec
     */
    replicas?: number;
    /**
     * Selector is a label query over pods that should match the Replicas count. If Selector is empty, it is defaulted to the labels present on the Pod template. Label keys and values that must match in order to be controlled by this replication controller, if empty defaulted to labels on Pod template. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
     * @type {{ [key: string]: string; }}
     * @memberof V1ReplicationControllerSpec
     */
    selector?: {
        [key: string]: string;
    };
    /**
     *
     * @type {V1PodTemplateSpec}
     * @memberof V1ReplicationControllerSpec
     */
    template?: V1PodTemplateSpec;
}
export declare function V1ReplicationControllerSpecFromJSON(json: any): V1ReplicationControllerSpec;
export declare function V1ReplicationControllerSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ReplicationControllerSpec;
export declare function V1ReplicationControllerSpecToJSON(value?: V1ReplicationControllerSpec | null): any;
