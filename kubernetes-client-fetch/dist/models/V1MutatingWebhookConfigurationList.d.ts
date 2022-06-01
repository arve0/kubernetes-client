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
import { V1ListMeta, V1MutatingWebhookConfiguration } from './';
/**
 * MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration.
 * @export
 * @interface V1MutatingWebhookConfigurationList
 */
export interface V1MutatingWebhookConfigurationList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1MutatingWebhookConfigurationList
     */
    apiVersion?: string;
    /**
     * List of MutatingWebhookConfiguration.
     * @type {Array<V1MutatingWebhookConfiguration>}
     * @memberof V1MutatingWebhookConfigurationList
     */
    items: Array<V1MutatingWebhookConfiguration>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1MutatingWebhookConfigurationList
     */
    kind?: string;
    /**
     *
     * @type {V1ListMeta}
     * @memberof V1MutatingWebhookConfigurationList
     */
    metadata?: V1ListMeta;
}
export declare function V1MutatingWebhookConfigurationListFromJSON(json: any): V1MutatingWebhookConfigurationList;
export declare function V1MutatingWebhookConfigurationListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1MutatingWebhookConfigurationList;
export declare function V1MutatingWebhookConfigurationListToJSON(value?: V1MutatingWebhookConfigurationList | null): any;
