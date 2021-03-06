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
import { V1LifecycleHandler } from './';
/**
 * Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.
 * @export
 * @interface V1Lifecycle
 */
export interface V1Lifecycle {
    /**
     *
     * @type {V1LifecycleHandler}
     * @memberof V1Lifecycle
     */
    postStart?: V1LifecycleHandler;
    /**
     *
     * @type {V1LifecycleHandler}
     * @memberof V1Lifecycle
     */
    preStop?: V1LifecycleHandler;
}
export declare function V1LifecycleFromJSON(json: any): V1Lifecycle;
export declare function V1LifecycleFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Lifecycle;
export declare function V1LifecycleToJSON(value?: V1Lifecycle | null): any;
