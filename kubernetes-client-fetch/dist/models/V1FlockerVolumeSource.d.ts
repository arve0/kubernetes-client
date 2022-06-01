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
 * Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling.
 * @export
 * @interface V1FlockerVolumeSource
 */
export interface V1FlockerVolumeSource {
    /**
     * datasetName is Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated
     * @type {string}
     * @memberof V1FlockerVolumeSource
     */
    datasetName?: string;
    /**
     * datasetUUID is the UUID of the dataset. This is unique identifier of a Flocker dataset
     * @type {string}
     * @memberof V1FlockerVolumeSource
     */
    datasetUUID?: string;
}
export declare function V1FlockerVolumeSourceFromJSON(json: any): V1FlockerVolumeSource;
export declare function V1FlockerVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1FlockerVolumeSource;
export declare function V1FlockerVolumeSourceToJSON(value?: V1FlockerVolumeSource | null): any;