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
import { V1ListMeta, V1Node } from './';
/**
 * NodeList is the whole list of all Nodes which have been registered with master.
 * @export
 * @interface V1NodeList
 */
export interface V1NodeList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1NodeList
     */
    apiVersion?: string;
    /**
     * List of nodes
     * @type {Array<V1Node>}
     * @memberof V1NodeList
     */
    items: Array<V1Node>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1NodeList
     */
    kind?: string;
    /**
     *
     * @type {V1ListMeta}
     * @memberof V1NodeList
     */
    metadata?: V1ListMeta;
}
export declare function V1NodeListFromJSON(json: any): V1NodeList;
export declare function V1NodeListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NodeList;
export declare function V1NodeListToJSON(value?: V1NodeList | null): any;
