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
 * Sysctl defines a kernel parameter to be set
 * @export
 * @interface V1Sysctl
 */
export interface V1Sysctl {
    /**
     * Name of a property to set
     * @type {string}
     * @memberof V1Sysctl
     */
    name: string;
    /**
     * Value of a property to set
     * @type {string}
     * @memberof V1Sysctl
     */
    value: string;
}
export declare function V1SysctlFromJSON(json: any): V1Sysctl;
export declare function V1SysctlFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Sysctl;
export declare function V1SysctlToJSON(value?: V1Sysctl | null): any;