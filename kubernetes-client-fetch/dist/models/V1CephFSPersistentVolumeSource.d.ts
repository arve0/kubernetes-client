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
 * Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
 * @export
 * @interface V1CephFSPersistentVolumeSource
 */
export interface V1CephFSPersistentVolumeSource {
    /**
     * monitors is Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
     * @type {Array<string>}
     * @memberof V1CephFSPersistentVolumeSource
     */
    monitors: Array<string>;
    /**
     * path is Optional: Used as the mounted root, rather than the full Ceph tree, default is /
     * @type {string}
     * @memberof V1CephFSPersistentVolumeSource
     */
    path?: string;
    /**
     * readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
     * @type {boolean}
     * @memberof V1CephFSPersistentVolumeSource
     */
    readOnly?: boolean;
    /**
     * secretFile is Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
     * @type {string}
     * @memberof V1CephFSPersistentVolumeSource
     */
    secretFile?: string;
    /**
     *
     * @type {V1SecretReference}
     * @memberof V1CephFSPersistentVolumeSource
     */
    secretRef?: V1SecretReference;
    /**
     * user is Optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
     * @type {string}
     * @memberof V1CephFSPersistentVolumeSource
     */
    user?: string;
}
export declare function V1CephFSPersistentVolumeSourceFromJSON(json: any): V1CephFSPersistentVolumeSource;
export declare function V1CephFSPersistentVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CephFSPersistentVolumeSource;
export declare function V1CephFSPersistentVolumeSourceToJSON(value?: V1CephFSPersistentVolumeSource | null): any;
