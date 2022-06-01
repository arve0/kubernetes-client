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
import { V1SecretReference } from './';
/**
 * ScaleIOPersistentVolumeSource represents a persistent ScaleIO volume
 * @export
 * @interface V1ScaleIOPersistentVolumeSource
 */
export interface V1ScaleIOPersistentVolumeSource {
    /**
     * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Default is "xfs"
     * @type {string}
     * @memberof V1ScaleIOPersistentVolumeSource
     */
    fsType?: string;
    /**
     * gateway is the host address of the ScaleIO API Gateway.
     * @type {string}
     * @memberof V1ScaleIOPersistentVolumeSource
     */
    gateway: string;
    /**
     * protectionDomain is the name of the ScaleIO Protection Domain for the configured storage.
     * @type {string}
     * @memberof V1ScaleIOPersistentVolumeSource
     */
    protectionDomain?: string;
    /**
     * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     * @type {boolean}
     * @memberof V1ScaleIOPersistentVolumeSource
     */
    readOnly?: boolean;
    /**
     *
     * @type {V1SecretReference}
     * @memberof V1ScaleIOPersistentVolumeSource
     */
    secretRef: V1SecretReference;
    /**
     * sslEnabled is the flag to enable/disable SSL communication with Gateway, default false
     * @type {boolean}
     * @memberof V1ScaleIOPersistentVolumeSource
     */
    sslEnabled?: boolean;
    /**
     * storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
     * @type {string}
     * @memberof V1ScaleIOPersistentVolumeSource
     */
    storageMode?: string;
    /**
     * storagePool is the ScaleIO Storage Pool associated with the protection domain.
     * @type {string}
     * @memberof V1ScaleIOPersistentVolumeSource
     */
    storagePool?: string;
    /**
     * system is the name of the storage system as configured in ScaleIO.
     * @type {string}
     * @memberof V1ScaleIOPersistentVolumeSource
     */
    system: string;
    /**
     * volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source.
     * @type {string}
     * @memberof V1ScaleIOPersistentVolumeSource
     */
    volumeName?: string;
}
export declare function V1ScaleIOPersistentVolumeSourceFromJSON(json: any): V1ScaleIOPersistentVolumeSource;
export declare function V1ScaleIOPersistentVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ScaleIOPersistentVolumeSource;
export declare function V1ScaleIOPersistentVolumeSourceToJSON(value?: V1ScaleIOPersistentVolumeSource | null): any;
