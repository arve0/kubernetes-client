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
import { V1beta2NonResourcePolicyRule, V1beta2ResourcePolicyRule, V1beta2Subject } from './';
/**
 * PolicyRulesWithSubjects prescribes a test that applies to a request to an apiserver. The test considers the subject making the request, the verb being requested, and the resource to be acted upon. This PolicyRulesWithSubjects matches a request if and only if both (a) at least one member of subjects matches the request and (b) at least one member of resourceRules or nonResourceRules matches the request.
 * @export
 * @interface V1beta2PolicyRulesWithSubjects
 */
export interface V1beta2PolicyRulesWithSubjects {
    /**
     * `nonResourceRules` is a list of NonResourcePolicyRules that identify matching requests according to their verb and the target non-resource URL.
     * @type {Array<V1beta2NonResourcePolicyRule>}
     * @memberof V1beta2PolicyRulesWithSubjects
     */
    nonResourceRules?: Array<V1beta2NonResourcePolicyRule>;
    /**
     * `resourceRules` is a slice of ResourcePolicyRules that identify matching requests according to their verb and the target resource. At least one of `resourceRules` and `nonResourceRules` has to be non-empty.
     * @type {Array<V1beta2ResourcePolicyRule>}
     * @memberof V1beta2PolicyRulesWithSubjects
     */
    resourceRules?: Array<V1beta2ResourcePolicyRule>;
    /**
     * subjects is the list of normal user, serviceaccount, or group that this rule cares about. There must be at least one member in this slice. A slice that includes both the system:authenticated and system:unauthenticated user groups matches every request. Required.
     * @type {Array<V1beta2Subject>}
     * @memberof V1beta2PolicyRulesWithSubjects
     */
    subjects: Array<V1beta2Subject>;
}
export declare function V1beta2PolicyRulesWithSubjectsFromJSON(json: any): V1beta2PolicyRulesWithSubjects;
export declare function V1beta2PolicyRulesWithSubjectsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta2PolicyRulesWithSubjects;
export declare function V1beta2PolicyRulesWithSubjectsToJSON(value?: V1beta2PolicyRulesWithSubjects | null): any;
