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
import { V1LabelSelectorRequirement } from './';
/**
 * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
 * @export
 * @interface V1LabelSelector
 */
export interface V1LabelSelector {
    /**
     * matchExpressions is a list of label selector requirements. The requirements are ANDed.
     * @type {Array<V1LabelSelectorRequirement>}
     * @memberof V1LabelSelector
     */
    matchExpressions?: Array<V1LabelSelectorRequirement>;
    /**
     * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
     * @type {{ [key: string]: string; }}
     * @memberof V1LabelSelector
     */
    matchLabels?: {
        [key: string]: string;
    };
}
export declare function V1LabelSelectorFromJSON(json: any): V1LabelSelector;
export declare function V1LabelSelectorFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1LabelSelector;
export declare function V1LabelSelectorToJSON(value?: V1LabelSelector | null): any;