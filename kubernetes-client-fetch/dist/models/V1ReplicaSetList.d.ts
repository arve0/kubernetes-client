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
import { V1ListMeta, V1ReplicaSet } from './';
/**
 * ReplicaSetList is a collection of ReplicaSets.
 * @export
 * @interface V1ReplicaSetList
 */
export interface V1ReplicaSetList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1ReplicaSetList
     */
    apiVersion?: string;
    /**
     * List of ReplicaSets. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller
     * @type {Array<V1ReplicaSet>}
     * @memberof V1ReplicaSetList
     */
    items: Array<V1ReplicaSet>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1ReplicaSetList
     */
    kind?: string;
    /**
     *
     * @type {V1ListMeta}
     * @memberof V1ReplicaSetList
     */
    metadata?: V1ListMeta;
}
export declare function V1ReplicaSetListFromJSON(json: any): V1ReplicaSetList;
export declare function V1ReplicaSetListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ReplicaSetList;
export declare function V1ReplicaSetListToJSON(value?: V1ReplicaSetList | null): any;