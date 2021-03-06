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
 * UserSubject holds detailed information for user-kind subject.
 * @export
 * @interface V1beta1UserSubject
 */
export interface V1beta1UserSubject {
    /**
     * `name` is the username that matches, or "*" to match all usernames. Required.
     * @type {string}
     * @memberof V1beta1UserSubject
     */
    name: string;
}
export declare function V1beta1UserSubjectFromJSON(json: any): V1beta1UserSubject;
export declare function V1beta1UserSubjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1UserSubject;
export declare function V1beta1UserSubjectToJSON(value?: V1beta1UserSubject | null): any;
