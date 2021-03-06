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
 * ServiceAccountSubject holds detailed information for service-account-kind subject.
 * @export
 * @interface V1beta2ServiceAccountSubject
 */
export interface V1beta2ServiceAccountSubject {
    /**
     * `name` is the name of matching ServiceAccount objects, or "*" to match regardless of name. Required.
     * @type {string}
     * @memberof V1beta2ServiceAccountSubject
     */
    name: string;
    /**
     * `namespace` is the namespace of matching ServiceAccount objects. Required.
     * @type {string}
     * @memberof V1beta2ServiceAccountSubject
     */
    namespace: string;
}
export declare function V1beta2ServiceAccountSubjectFromJSON(json: any): V1beta2ServiceAccountSubject;
export declare function V1beta2ServiceAccountSubjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta2ServiceAccountSubject;
export declare function V1beta2ServiceAccountSubjectToJSON(value?: V1beta2ServiceAccountSubject | null): any;
