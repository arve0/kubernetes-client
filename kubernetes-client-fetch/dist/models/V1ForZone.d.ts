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
 * ForZone provides information about which zones should consume this endpoint.
 * @export
 * @interface V1ForZone
 */
export interface V1ForZone {
    /**
     * name represents the name of the zone.
     * @type {string}
     * @memberof V1ForZone
     */
    name: string;
}
export declare function V1ForZoneFromJSON(json: any): V1ForZone;
export declare function V1ForZoneFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ForZone;
export declare function V1ForZoneToJSON(value?: V1ForZone | null): any;