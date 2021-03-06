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
import { V1ObjectMeta, V1PolicyRule } from './';
/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 * @export
 * @interface V1Role
 */
export interface V1Role {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1Role
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1Role
     */
    kind?: string;
    /**
     *
     * @type {V1ObjectMeta}
     * @memberof V1Role
     */
    metadata?: V1ObjectMeta;
    /**
     * Rules holds all the PolicyRules for this Role
     * @type {Array<V1PolicyRule>}
     * @memberof V1Role
     */
    rules?: Array<V1PolicyRule>;
}
export declare function V1RoleFromJSON(json: any): V1Role;
export declare function V1RoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Role;
export declare function V1RoleToJSON(value?: V1Role | null): any;
