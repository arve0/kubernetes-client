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
import { V1ObjectMeta, V1alpha1StorageVersionStatus } from './';
/**
 * Storage version of a specific resource.
 * @export
 * @interface V1alpha1StorageVersion
 */
export interface V1alpha1StorageVersion {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1alpha1StorageVersion
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1alpha1StorageVersion
     */
    kind?: string;
    /**
     *
     * @type {V1ObjectMeta}
     * @memberof V1alpha1StorageVersion
     */
    metadata?: V1ObjectMeta;
    /**
     * Spec is an empty spec. It is here to comply with Kubernetes API style.
     * @type {object}
     * @memberof V1alpha1StorageVersion
     */
    spec: object;
    /**
     *
     * @type {V1alpha1StorageVersionStatus}
     * @memberof V1alpha1StorageVersion
     */
    status: V1alpha1StorageVersionStatus;
}
export declare function V1alpha1StorageVersionFromJSON(json: any): V1alpha1StorageVersion;
export declare function V1alpha1StorageVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1StorageVersion;
export declare function V1alpha1StorageVersionToJSON(value?: V1alpha1StorageVersion | null): any;