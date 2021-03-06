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
 * NetworkPolicyPort describes a port to allow traffic on
 * @export
 * @interface V1NetworkPolicyPort
 */
export interface V1NetworkPolicyPort {
    /**
     * If set, indicates that the range of ports from port to endPort, inclusive, should be allowed by the policy. This field cannot be defined if the port field is not defined or if the port field is defined as a named (string) port. The endPort must be equal or greater than port. This feature is in Beta state and is enabled by default. It can be disabled using the Feature Gate "NetworkPolicyEndPort".
     * @type {number}
     * @memberof V1NetworkPolicyPort
     */
    endPort?: number;
    /**
     * The port on the given protocol. This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers. If present, only traffic on the specified protocol AND port will be matched.
     * @type {object}
     * @memberof V1NetworkPolicyPort
     */
    port?: object;
    /**
     * The protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP.
     * @type {string}
     * @memberof V1NetworkPolicyPort
     */
    protocol?: string;
}
export declare function V1NetworkPolicyPortFromJSON(json: any): V1NetworkPolicyPort;
export declare function V1NetworkPolicyPortFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NetworkPolicyPort;
export declare function V1NetworkPolicyPortToJSON(value?: V1NetworkPolicyPort | null): any;
