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
 * FlowDistinguisherMethod specifies the method of a flow distinguisher.
 * @export
 * @interface V1beta2FlowDistinguisherMethod
 */
export interface V1beta2FlowDistinguisherMethod {
    /**
     * `type` is the type of flow distinguisher method The supported types are "ByUser" and "ByNamespace". Required.
     * @type {string}
     * @memberof V1beta2FlowDistinguisherMethod
     */
    type: string;
}
export declare function V1beta2FlowDistinguisherMethodFromJSON(json: any): V1beta2FlowDistinguisherMethod;
export declare function V1beta2FlowDistinguisherMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta2FlowDistinguisherMethod;
export declare function V1beta2FlowDistinguisherMethodToJSON(value?: V1beta2FlowDistinguisherMethod | null): any;
