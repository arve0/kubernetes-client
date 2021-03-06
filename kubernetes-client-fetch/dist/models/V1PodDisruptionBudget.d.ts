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
import { V1ObjectMeta, V1PodDisruptionBudgetSpec, V1PodDisruptionBudgetStatus } from './';
/**
 * PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
 * @export
 * @interface V1PodDisruptionBudget
 */
export interface V1PodDisruptionBudget {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1PodDisruptionBudget
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1PodDisruptionBudget
     */
    kind?: string;
    /**
     *
     * @type {V1ObjectMeta}
     * @memberof V1PodDisruptionBudget
     */
    metadata?: V1ObjectMeta;
    /**
     *
     * @type {V1PodDisruptionBudgetSpec}
     * @memberof V1PodDisruptionBudget
     */
    spec?: V1PodDisruptionBudgetSpec;
    /**
     *
     * @type {V1PodDisruptionBudgetStatus}
     * @memberof V1PodDisruptionBudget
     */
    status?: V1PodDisruptionBudgetStatus;
}
export declare function V1PodDisruptionBudgetFromJSON(json: any): V1PodDisruptionBudget;
export declare function V1PodDisruptionBudgetFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PodDisruptionBudget;
export declare function V1PodDisruptionBudgetToJSON(value?: V1PodDisruptionBudget | null): any;
