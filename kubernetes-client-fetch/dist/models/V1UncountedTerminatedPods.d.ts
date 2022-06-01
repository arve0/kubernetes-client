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
 * UncountedTerminatedPods holds UIDs of Pods that have terminated but haven't been accounted in Job status counters.
 * @export
 * @interface V1UncountedTerminatedPods
 */
export interface V1UncountedTerminatedPods {
    /**
     * Failed holds UIDs of failed Pods.
     * @type {Array<string>}
     * @memberof V1UncountedTerminatedPods
     */
    failed?: Array<string>;
    /**
     * Succeeded holds UIDs of succeeded Pods.
     * @type {Array<string>}
     * @memberof V1UncountedTerminatedPods
     */
    succeeded?: Array<string>;
}
export declare function V1UncountedTerminatedPodsFromJSON(json: any): V1UncountedTerminatedPods;
export declare function V1UncountedTerminatedPodsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UncountedTerminatedPods;
export declare function V1UncountedTerminatedPodsToJSON(value?: V1UncountedTerminatedPods | null): any;