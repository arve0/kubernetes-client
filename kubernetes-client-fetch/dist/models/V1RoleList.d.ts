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
import { V1ListMeta, V1Role } from './';
/**
 * RoleList is a collection of Roles
 * @export
 * @interface V1RoleList
 */
export interface V1RoleList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1RoleList
     */
    apiVersion?: string;
    /**
     * Items is a list of Roles
     * @type {Array<V1Role>}
     * @memberof V1RoleList
     */
    items: Array<V1Role>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1RoleList
     */
    kind?: string;
    /**
     *
     * @type {V1ListMeta}
     * @memberof V1RoleList
     */
    metadata?: V1ListMeta;
}
export declare function V1RoleListFromJSON(json: any): V1RoleList;
export declare function V1RoleListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1RoleList;
export declare function V1RoleListToJSON(value?: V1RoleList | null): any;
