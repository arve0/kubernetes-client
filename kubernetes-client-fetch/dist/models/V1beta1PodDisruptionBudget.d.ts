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
import { V1ObjectMeta, V1beta1PodDisruptionBudgetSpec, V1beta1PodDisruptionBudgetStatus } from './';
/**
 * PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
 * @export
 * @interface V1beta1PodDisruptionBudget
 */
export interface V1beta1PodDisruptionBudget {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1beta1PodDisruptionBudget
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1beta1PodDisruptionBudget
     */
    kind?: string;
    /**
     *
     * @type {V1ObjectMeta}
     * @memberof V1beta1PodDisruptionBudget
     */
    metadata?: V1ObjectMeta;
    /**
     *
     * @type {V1beta1PodDisruptionBudgetSpec}
     * @memberof V1beta1PodDisruptionBudget
     */
    spec?: V1beta1PodDisruptionBudgetSpec;
    /**
     *
     * @type {V1beta1PodDisruptionBudgetStatus}
     * @memberof V1beta1PodDisruptionBudget
     */
    status?: V1beta1PodDisruptionBudgetStatus;
}
export declare function V1beta1PodDisruptionBudgetFromJSON(json: any): V1beta1PodDisruptionBudget;
export declare function V1beta1PodDisruptionBudgetFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1PodDisruptionBudget;
export declare function V1beta1PodDisruptionBudgetToJSON(value?: V1beta1PodDisruptionBudget | null): any;
