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
import { V1LocalObjectReference } from './';
/**
 * Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
 * @export
 * @interface V1CinderVolumeSource
 */
export interface V1CinderVolumeSource {
    /**
     * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
     * @type {string}
     * @memberof V1CinderVolumeSource
     */
    fsType?: string;
    /**
     * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
     * @type {boolean}
     * @memberof V1CinderVolumeSource
     */
    readOnly?: boolean;
    /**
     *
     * @type {V1LocalObjectReference}
     * @memberof V1CinderVolumeSource
     */
    secretRef?: V1LocalObjectReference;
    /**
     * volumeID used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
     * @type {string}
     * @memberof V1CinderVolumeSource
     */
    volumeID: string;
}
export declare function V1CinderVolumeSourceFromJSON(json: any): V1CinderVolumeSource;
export declare function V1CinderVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CinderVolumeSource;
export declare function V1CinderVolumeSourceToJSON(value?: V1CinderVolumeSource | null): any;
