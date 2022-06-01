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
 * CrossVersionObjectReference contains enough information to let you identify the referred resource.
 * @export
 * @interface V2beta1CrossVersionObjectReference
 */
export interface V2beta1CrossVersionObjectReference {
    /**
     * API version of the referent
     * @type {string}
     * @memberof V2beta1CrossVersionObjectReference
     */
    apiVersion?: string;
    /**
     * Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds"
     * @type {string}
     * @memberof V2beta1CrossVersionObjectReference
     */
    kind: string;
    /**
     * Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names
     * @type {string}
     * @memberof V2beta1CrossVersionObjectReference
     */
    name: string;
}
export declare function V2beta1CrossVersionObjectReferenceFromJSON(json: any): V2beta1CrossVersionObjectReference;
export declare function V2beta1CrossVersionObjectReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2beta1CrossVersionObjectReference;
export declare function V2beta1CrossVersionObjectReferenceToJSON(value?: V2beta1CrossVersionObjectReference | null): any;
