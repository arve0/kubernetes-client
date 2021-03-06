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
 * Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
 * @export
 * @interface V1ISCSIVolumeSource
 */
export interface V1ISCSIVolumeSource {
    /**
     * chapAuthDiscovery defines whether support iSCSI Discovery CHAP authentication
     * @type {boolean}
     * @memberof V1ISCSIVolumeSource
     */
    chapAuthDiscovery?: boolean;
    /**
     * chapAuthSession defines whether support iSCSI Session CHAP authentication
     * @type {boolean}
     * @memberof V1ISCSIVolumeSource
     */
    chapAuthSession?: boolean;
    /**
     * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi
     * @type {string}
     * @memberof V1ISCSIVolumeSource
     */
    fsType?: string;
    /**
     * initiatorName is the custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
     * @type {string}
     * @memberof V1ISCSIVolumeSource
     */
    initiatorName?: string;
    /**
     * iqn is the target iSCSI Qualified Name.
     * @type {string}
     * @memberof V1ISCSIVolumeSource
     */
    iqn: string;
    /**
     * iscsiInterface is the interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).
     * @type {string}
     * @memberof V1ISCSIVolumeSource
     */
    iscsiInterface?: string;
    /**
     * lun represents iSCSI Target Lun number.
     * @type {number}
     * @memberof V1ISCSIVolumeSource
     */
    lun: number;
    /**
     * portals is the iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
     * @type {Array<string>}
     * @memberof V1ISCSIVolumeSource
     */
    portals?: Array<string>;
    /**
     * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
     * @type {boolean}
     * @memberof V1ISCSIVolumeSource
     */
    readOnly?: boolean;
    /**
     *
     * @type {V1LocalObjectReference}
     * @memberof V1ISCSIVolumeSource
     */
    secretRef?: V1LocalObjectReference;
    /**
     * targetPortal is iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
     * @type {string}
     * @memberof V1ISCSIVolumeSource
     */
    targetPortal: string;
}
export declare function V1ISCSIVolumeSourceFromJSON(json: any): V1ISCSIVolumeSource;
export declare function V1ISCSIVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ISCSIVolumeSource;
export declare function V1ISCSIVolumeSourceToJSON(value?: V1ISCSIVolumeSource | null): any;
