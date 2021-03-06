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
import { V1NodeSelectorRequirement } from './';
/**
 * A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
 * @export
 * @interface V1NodeSelectorTerm
 */
export interface V1NodeSelectorTerm {
    /**
     * A list of node selector requirements by node's labels.
     * @type {Array<V1NodeSelectorRequirement>}
     * @memberof V1NodeSelectorTerm
     */
    matchExpressions?: Array<V1NodeSelectorRequirement>;
    /**
     * A list of node selector requirements by node's fields.
     * @type {Array<V1NodeSelectorRequirement>}
     * @memberof V1NodeSelectorTerm
     */
    matchFields?: Array<V1NodeSelectorRequirement>;
}
export declare function V1NodeSelectorTermFromJSON(json: any): V1NodeSelectorTerm;
export declare function V1NodeSelectorTermFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NodeSelectorTerm;
export declare function V1NodeSelectorTermToJSON(value?: V1NodeSelectorTerm | null): any;
