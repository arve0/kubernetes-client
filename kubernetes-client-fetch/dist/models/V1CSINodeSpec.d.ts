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
import { V1CSINodeDriver } from './';
/**
 * CSINodeSpec holds information about the specification of all CSI drivers installed on a node
 * @export
 * @interface V1CSINodeSpec
 */
export interface V1CSINodeSpec {
    /**
     * drivers is a list of information of all CSI Drivers existing on a node. If all drivers in the list are uninstalled, this can become empty.
     * @type {Array<V1CSINodeDriver>}
     * @memberof V1CSINodeSpec
     */
    drivers: Array<V1CSINodeDriver>;
}
export declare function V1CSINodeSpecFromJSON(json: any): V1CSINodeSpec;
export declare function V1CSINodeSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CSINodeSpec;
export declare function V1CSINodeSpecToJSON(value?: V1CSINodeSpec | null): any;