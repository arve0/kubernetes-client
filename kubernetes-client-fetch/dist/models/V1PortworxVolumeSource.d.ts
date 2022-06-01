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
 * PortworxVolumeSource represents a Portworx volume resource.
 * @export
 * @interface V1PortworxVolumeSource
 */
export interface V1PortworxVolumeSource {
    /**
     * fSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs". Implicitly inferred to be "ext4" if unspecified.
     * @type {string}
     * @memberof V1PortworxVolumeSource
     */
    fsType?: string;
    /**
     * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     * @type {boolean}
     * @memberof V1PortworxVolumeSource
     */
    readOnly?: boolean;
    /**
     * volumeID uniquely identifies a Portworx volume
     * @type {string}
     * @memberof V1PortworxVolumeSource
     */
    volumeID: string;
}
export declare function V1PortworxVolumeSourceFromJSON(json: any): V1PortworxVolumeSource;
export declare function V1PortworxVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PortworxVolumeSource;
export declare function V1PortworxVolumeSourceToJSON(value?: V1PortworxVolumeSource | null): any;
