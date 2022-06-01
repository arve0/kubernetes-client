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
 * IPBlock describes a particular CIDR (Ex. "192.168.1.1/24","2001:db9::/64") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule.
 * @export
 * @interface V1IPBlock
 */
export interface V1IPBlock {
    /**
     * CIDR is a string representing the IP Block Valid examples are "192.168.1.1/24" or "2001:db9::/64"
     * @type {string}
     * @memberof V1IPBlock
     */
    cidr: string;
    /**
     * Except is a slice of CIDRs that should not be included within an IP Block Valid examples are "192.168.1.1/24" or "2001:db9::/64" Except values will be rejected if they are outside the CIDR range
     * @type {Array<string>}
     * @memberof V1IPBlock
     */
    except?: Array<string>;
}
export declare function V1IPBlockFromJSON(json: any): V1IPBlock;
export declare function V1IPBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1IPBlock;
export declare function V1IPBlockToJSON(value?: V1IPBlock | null): any;
