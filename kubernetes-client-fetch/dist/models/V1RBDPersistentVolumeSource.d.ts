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
 * Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.
 * @export
 * @interface V1RBDPersistentVolumeSource
 */
export interface V1RBDPersistentVolumeSource {
    /**
     * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd
     * @type {string}
     * @memberof V1RBDPersistentVolumeSource
     */
    fsType?: string;
    /**
     * image is the rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
     * @type {string}
     * @memberof V1RBDPersistentVolumeSource
     */
    image: string;
    /**
     * keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
     * @type {string}
     * @memberof V1RBDPersistentVolumeSource
     */
    keyring?: string;
    /**
     * monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
     * @type {Array<string>}
     * @memberof V1RBDPersistentVolumeSource
     */
    monitors: Array<string>;
    /**
     * pool is the rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
     * @type {string}
     * @memberof V1RBDPersistentVolumeSource
     */
    pool?: string;
    /**
     * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
     * @type {boolean}
     * @memberof V1RBDPersistentVolumeSource
     */
    readOnly?: boolean;
    /**
     *
     * @type {V1SecretReference}
     * @memberof V1RBDPersistentVolumeSource
     */
    secretRef?: V1SecretReference;
    /**
     * user is the rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
     * @type {string}
     * @memberof V1RBDPersistentVolumeSource
     */
    user?: string;
}
export declare function V1RBDPersistentVolumeSourceFromJSON(json: any): V1RBDPersistentVolumeSource;
export declare function V1RBDPersistentVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1RBDPersistentVolumeSource;
export declare function V1RBDPersistentVolumeSourceToJSON(value?: V1RBDPersistentVolumeSource | null): any;
