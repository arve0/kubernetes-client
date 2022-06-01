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
 * GroupVersion contains the "group/version" and "version" string of a version. It is made a struct to keep extensibility.
 * @export
 * @interface V1GroupVersionForDiscovery
 */
export interface V1GroupVersionForDiscovery {
    /**
     * groupVersion specifies the API group and version in the form "group/version"
     * @type {string}
     * @memberof V1GroupVersionForDiscovery
     */
    groupVersion: string;
    /**
     * version specifies the version in the form of "version". This is to save the clients the trouble of splitting the GroupVersion.
     * @type {string}
     * @memberof V1GroupVersionForDiscovery
     */
    version: string;
}
export declare function V1GroupVersionForDiscoveryFromJSON(json: any): V1GroupVersionForDiscovery;
export declare function V1GroupVersionForDiscoveryFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1GroupVersionForDiscovery;
export declare function V1GroupVersionForDiscoveryToJSON(value?: V1GroupVersionForDiscovery | null): any;