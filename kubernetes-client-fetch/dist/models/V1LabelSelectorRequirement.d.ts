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
/**
 * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 * @export
 * @interface V1LabelSelectorRequirement
 */
export interface V1LabelSelectorRequirement {
    /**
     * key is the label key that the selector applies to.
     * @type {string}
     * @memberof V1LabelSelectorRequirement
     */
    key: string;
    /**
     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
     * @type {string}
     * @memberof V1LabelSelectorRequirement
     */
    operator: string;
    /**
     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
     * @type {Array<string>}
     * @memberof V1LabelSelectorRequirement
     */
    values?: Array<string>;
}
export declare function V1LabelSelectorRequirementFromJSON(json: any): V1LabelSelectorRequirement;
export declare function V1LabelSelectorRequirementFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1LabelSelectorRequirement;
export declare function V1LabelSelectorRequirementToJSON(value?: V1LabelSelectorRequirement | null): any;
