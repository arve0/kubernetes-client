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
import { V1CSIDriverSpec, V1ObjectMeta } from './';
/**
 * CSIDriver captures information about a Container Storage Interface (CSI) volume driver deployed on the cluster. Kubernetes attach detach controller uses this object to determine whether attach is required. Kubelet uses this object to determine whether pod information needs to be passed on mount. CSIDriver objects are non-namespaced.
 * @export
 * @interface V1CSIDriver
 */
export interface V1CSIDriver {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1CSIDriver
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1CSIDriver
     */
    kind?: string;
    /**
     *
     * @type {V1ObjectMeta}
     * @memberof V1CSIDriver
     */
    metadata?: V1ObjectMeta;
    /**
     *
     * @type {V1CSIDriverSpec}
     * @memberof V1CSIDriver
     */
    spec: V1CSIDriverSpec;
}
export declare function V1CSIDriverFromJSON(json: any): V1CSIDriver;
export declare function V1CSIDriverFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CSIDriver;
export declare function V1CSIDriverToJSON(value?: V1CSIDriver | null): any;
