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
import { V1SELinuxOptions } from './';
/**
 * SELinuxStrategyOptions defines the strategy type and any options used to create the strategy.
 * @export
 * @interface V1beta1SELinuxStrategyOptions
 */
export interface V1beta1SELinuxStrategyOptions {
    /**
     * rule is the strategy that will dictate the allowable labels that may be set.
     * @type {string}
     * @memberof V1beta1SELinuxStrategyOptions
     */
    rule: string;
    /**
     *
     * @type {V1SELinuxOptions}
     * @memberof V1beta1SELinuxStrategyOptions
     */
    seLinuxOptions?: V1SELinuxOptions;
}
export declare function V1beta1SELinuxStrategyOptionsFromJSON(json: any): V1beta1SELinuxStrategyOptions;
export declare function V1beta1SELinuxStrategyOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1SELinuxStrategyOptions;
export declare function V1beta1SELinuxStrategyOptionsToJSON(value?: V1beta1SELinuxStrategyOptions | null): any;
