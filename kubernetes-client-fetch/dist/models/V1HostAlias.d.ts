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
 * HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file.
 * @export
 * @interface V1HostAlias
 */
export interface V1HostAlias {
    /**
     * Hostnames for the above IP address.
     * @type {Array<string>}
     * @memberof V1HostAlias
     */
    hostnames?: Array<string>;
    /**
     * IP address of the host file entry.
     * @type {string}
     * @memberof V1HostAlias
     */
    ip?: string;
}
export declare function V1HostAliasFromJSON(json: any): V1HostAlias;
export declare function V1HostAliasFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HostAlias;
export declare function V1HostAliasToJSON(value?: V1HostAlias | null): any;
