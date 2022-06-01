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
 * HTTPHeader describes a custom header to be used in HTTP probes
 * @export
 * @interface V1HTTPHeader
 */
export interface V1HTTPHeader {
    /**
     * The header field name
     * @type {string}
     * @memberof V1HTTPHeader
     */
    name: string;
    /**
     * The header field value
     * @type {string}
     * @memberof V1HTTPHeader
     */
    value: string;
}
export declare function V1HTTPHeaderFromJSON(json: any): V1HTTPHeader;
export declare function V1HTTPHeaderFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HTTPHeader;
export declare function V1HTTPHeaderToJSON(value?: V1HTTPHeader | null): any;