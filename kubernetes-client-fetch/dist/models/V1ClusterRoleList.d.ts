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
import { V1ClusterRole, V1ListMeta } from './';
/**
 * ClusterRoleList is a collection of ClusterRoles
 * @export
 * @interface V1ClusterRoleList
 */
export interface V1ClusterRoleList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1ClusterRoleList
     */
    apiVersion?: string;
    /**
     * Items is a list of ClusterRoles
     * @type {Array<V1ClusterRole>}
     * @memberof V1ClusterRoleList
     */
    items: Array<V1ClusterRole>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1ClusterRoleList
     */
    kind?: string;
    /**
     *
     * @type {V1ListMeta}
     * @memberof V1ClusterRoleList
     */
    metadata?: V1ListMeta;
}
export declare function V1ClusterRoleListFromJSON(json: any): V1ClusterRoleList;
export declare function V1ClusterRoleListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ClusterRoleList;
export declare function V1ClusterRoleListToJSON(value?: V1ClusterRoleList | null): any;
