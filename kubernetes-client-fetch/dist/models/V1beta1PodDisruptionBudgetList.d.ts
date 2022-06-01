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
import { V1ListMeta, V1beta1PodDisruptionBudget } from './';
/**
 * PodDisruptionBudgetList is a collection of PodDisruptionBudgets.
 * @export
 * @interface V1beta1PodDisruptionBudgetList
 */
export interface V1beta1PodDisruptionBudgetList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1beta1PodDisruptionBudgetList
     */
    apiVersion?: string;
    /**
     * items list individual PodDisruptionBudget objects
     * @type {Array<V1beta1PodDisruptionBudget>}
     * @memberof V1beta1PodDisruptionBudgetList
     */
    items: Array<V1beta1PodDisruptionBudget>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1beta1PodDisruptionBudgetList
     */
    kind?: string;
    /**
     *
     * @type {V1ListMeta}
     * @memberof V1beta1PodDisruptionBudgetList
     */
    metadata?: V1ListMeta;
}
export declare function V1beta1PodDisruptionBudgetListFromJSON(json: any): V1beta1PodDisruptionBudgetList;
export declare function V1beta1PodDisruptionBudgetListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1PodDisruptionBudgetList;
export declare function V1beta1PodDisruptionBudgetListToJSON(value?: V1beta1PodDisruptionBudgetList | null): any;
