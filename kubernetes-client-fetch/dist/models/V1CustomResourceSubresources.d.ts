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
import { V1CustomResourceSubresourceScale } from './';
/**
 * CustomResourceSubresources defines the status and scale subresources for CustomResources.
 * @export
 * @interface V1CustomResourceSubresources
 */
export interface V1CustomResourceSubresources {
    /**
     *
     * @type {V1CustomResourceSubresourceScale}
     * @memberof V1CustomResourceSubresources
     */
    scale?: V1CustomResourceSubresourceScale;
    /**
     * status indicates the custom resource should serve a `/status` subresource. When enabled: 1. requests to the custom resource primary endpoint ignore changes to the `status` stanza of the object. 2. requests to the custom resource `/status` subresource ignore changes to anything other than the `status` stanza of the object.
     * @type {object}
     * @memberof V1CustomResourceSubresources
     */
    status?: object;
}
export declare function V1CustomResourceSubresourcesFromJSON(json: any): V1CustomResourceSubresources;
export declare function V1CustomResourceSubresourcesFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CustomResourceSubresources;
export declare function V1CustomResourceSubresourcesToJSON(value?: V1CustomResourceSubresources | null): any;
