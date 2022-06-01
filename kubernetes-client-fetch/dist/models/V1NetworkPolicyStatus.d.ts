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
import { V1Condition } from './';
/**
 * NetworkPolicyStatus describe the current state of the NetworkPolicy.
 * @export
 * @interface V1NetworkPolicyStatus
 */
export interface V1NetworkPolicyStatus {
    /**
     * Conditions holds an array of metav1.Condition that describe the state of the NetworkPolicy. Current service state
     * @type {Array<V1Condition>}
     * @memberof V1NetworkPolicyStatus
     */
    conditions?: Array<V1Condition>;
}
export declare function V1NetworkPolicyStatusFromJSON(json: any): V1NetworkPolicyStatus;
export declare function V1NetworkPolicyStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NetworkPolicyStatus;
export declare function V1NetworkPolicyStatusToJSON(value?: V1NetworkPolicyStatus | null): any;
