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
import { V1ForZone } from './';
/**
 * EndpointHints provides hints describing how an endpoint should be consumed.
 * @export
 * @interface V1EndpointHints
 */
export interface V1EndpointHints {
    /**
     * forZones indicates the zone(s) this endpoint should be consumed by to enable topology aware routing.
     * @type {Array<V1ForZone>}
     * @memberof V1EndpointHints
     */
    forZones?: Array<V1ForZone>;
}
export declare function V1EndpointHintsFromJSON(json: any): V1EndpointHints;
export declare function V1EndpointHintsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EndpointHints;
export declare function V1EndpointHintsToJSON(value?: V1EndpointHints | null): any;
