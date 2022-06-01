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
import { V1IngressServiceBackend, V1TypedLocalObjectReference } from './';
/**
 * IngressBackend describes all endpoints for a given service and port.
 * @export
 * @interface V1IngressBackend
 */
export interface V1IngressBackend {
    /**
     *
     * @type {V1TypedLocalObjectReference}
     * @memberof V1IngressBackend
     */
    resource?: V1TypedLocalObjectReference;
    /**
     *
     * @type {V1IngressServiceBackend}
     * @memberof V1IngressBackend
     */
    service?: V1IngressServiceBackend;
}
export declare function V1IngressBackendFromJSON(json: any): V1IngressBackend;
export declare function V1IngressBackendFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1IngressBackend;
export declare function V1IngressBackendToJSON(value?: V1IngressBackend | null): any;