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
import { V1LimitRangeItem } from './';
/**
 * LimitRangeSpec defines a min/max usage limit for resources that match on kind.
 * @export
 * @interface V1LimitRangeSpec
 */
export interface V1LimitRangeSpec {
    /**
     * Limits is the list of LimitRangeItem objects that are enforced.
     * @type {Array<V1LimitRangeItem>}
     * @memberof V1LimitRangeSpec
     */
    limits: Array<V1LimitRangeItem>;
}
export declare function V1LimitRangeSpecFromJSON(json: any): V1LimitRangeSpec;
export declare function V1LimitRangeSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1LimitRangeSpec;
export declare function V1LimitRangeSpecToJSON(value?: V1LimitRangeSpec | null): any;
