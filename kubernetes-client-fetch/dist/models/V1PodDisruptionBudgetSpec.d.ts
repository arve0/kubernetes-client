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
 * PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.
 * @export
 * @interface V1PodDisruptionBudgetSpec
 */
export interface V1PodDisruptionBudgetSpec {
    /**
     * An eviction is allowed if at most "maxUnavailable" pods selected by "selector" are unavailable after the eviction, i.e. even in absence of the evicted pod. For example, one can prevent all voluntary evictions by specifying 0. This is a mutually exclusive setting with "minAvailable".
     * @type {object}
     * @memberof V1PodDisruptionBudgetSpec
     */
    maxUnavailable?: object;
    /**
     * An eviction is allowed if at least "minAvailable" pods selected by "selector" will still be available after the eviction, i.e. even in the absence of the evicted pod.  So for example you can prevent all voluntary evictions by specifying "100%".
     * @type {object}
     * @memberof V1PodDisruptionBudgetSpec
     */
    minAvailable?: object;
    /**
     *
     * @type {V1LabelSelector}
     * @memberof V1PodDisruptionBudgetSpec
     */
    selector?: V1LabelSelector;
}
export declare function V1PodDisruptionBudgetSpecFromJSON(json: any): V1PodDisruptionBudgetSpec;
export declare function V1PodDisruptionBudgetSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PodDisruptionBudgetSpec;
export declare function V1PodDisruptionBudgetSpecToJSON(value?: V1PodDisruptionBudgetSpec | null): any;
