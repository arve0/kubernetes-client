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
 * ConfigMapNodeConfigSource contains the information to reference a ConfigMap as a config source for the Node. This API is deprecated since 1.22: https://git.k8s.io/enhancements/keps/sig-node/281-dynamic-kubelet-configuration
 * @export
 * @interface V1ConfigMapNodeConfigSource
 */
export interface V1ConfigMapNodeConfigSource {
    /**
     * KubeletConfigKey declares which key of the referenced ConfigMap corresponds to the KubeletConfiguration structure This field is required in all cases.
     * @type {string}
     * @memberof V1ConfigMapNodeConfigSource
     */
    kubeletConfigKey: string;
    /**
     * Name is the metadata.name of the referenced ConfigMap. This field is required in all cases.
     * @type {string}
     * @memberof V1ConfigMapNodeConfigSource
     */
    name: string;
    /**
     * Namespace is the metadata.namespace of the referenced ConfigMap. This field is required in all cases.
     * @type {string}
     * @memberof V1ConfigMapNodeConfigSource
     */
    namespace: string;
    /**
     * ResourceVersion is the metadata.ResourceVersion of the referenced ConfigMap. This field is forbidden in Node.Spec, and required in Node.Status.
     * @type {string}
     * @memberof V1ConfigMapNodeConfigSource
     */
    resourceVersion?: string;
    /**
     * UID is the metadata.UID of the referenced ConfigMap. This field is forbidden in Node.Spec, and required in Node.Status.
     * @type {string}
     * @memberof V1ConfigMapNodeConfigSource
     */
    uid?: string;
}
export declare function V1ConfigMapNodeConfigSourceFromJSON(json: any): V1ConfigMapNodeConfigSource;
export declare function V1ConfigMapNodeConfigSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ConfigMapNodeConfigSource;
export declare function V1ConfigMapNodeConfigSourceToJSON(value?: V1ConfigMapNodeConfigSource | null): any;
