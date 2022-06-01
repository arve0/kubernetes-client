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
import { V1LabelSelector } from './';
/**
 * MetricIdentifier defines the name and optionally selector for a metric
 * @export
 * @interface V2MetricIdentifier
 */
export interface V2MetricIdentifier {
    /**
     * name is the name of the given metric
     * @type {string}
     * @memberof V2MetricIdentifier
     */
    name: string;
    /**
     *
     * @type {V1LabelSelector}
     * @memberof V2MetricIdentifier
     */
    selector?: V1LabelSelector;
}
export declare function V2MetricIdentifierFromJSON(json: any): V2MetricIdentifier;
export declare function V2MetricIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2MetricIdentifier;
export declare function V2MetricIdentifierToJSON(value?: V2MetricIdentifier | null): any;
