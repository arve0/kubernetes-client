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
import { V1beta1IDRange } from './';
/**
 * RunAsGroupStrategyOptions defines the strategy type and any options used to create the strategy.
 * @export
 * @interface V1beta1RunAsGroupStrategyOptions
 */
export interface V1beta1RunAsGroupStrategyOptions {
    /**
     * ranges are the allowed ranges of gids that may be used. If you would like to force a single gid then supply a single range with the same start and end. Required for MustRunAs.
     * @type {Array<V1beta1IDRange>}
     * @memberof V1beta1RunAsGroupStrategyOptions
     */
    ranges?: Array<V1beta1IDRange>;
    /**
     * rule is the strategy that will dictate the allowable RunAsGroup values that may be set.
     * @type {string}
     * @memberof V1beta1RunAsGroupStrategyOptions
     */
    rule: string;
}
export declare function V1beta1RunAsGroupStrategyOptionsFromJSON(json: any): V1beta1RunAsGroupStrategyOptions;
export declare function V1beta1RunAsGroupStrategyOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1RunAsGroupStrategyOptions;
export declare function V1beta1RunAsGroupStrategyOptionsToJSON(value?: V1beta1RunAsGroupStrategyOptions | null): any;
