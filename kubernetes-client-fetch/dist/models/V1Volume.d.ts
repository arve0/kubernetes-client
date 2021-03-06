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
import { V1AWSElasticBlockStoreVolumeSource, V1AzureDiskVolumeSource, V1AzureFileVolumeSource, V1CSIVolumeSource, V1CephFSVolumeSource, V1CinderVolumeSource, V1ConfigMapVolumeSource, V1DownwardAPIVolumeSource, V1EmptyDirVolumeSource, V1EphemeralVolumeSource, V1FCVolumeSource, V1FlexVolumeSource, V1FlockerVolumeSource, V1GCEPersistentDiskVolumeSource, V1GitRepoVolumeSource, V1GlusterfsVolumeSource, V1HostPathVolumeSource, V1ISCSIVolumeSource, V1NFSVolumeSource, V1PersistentVolumeClaimVolumeSource, V1PhotonPersistentDiskVolumeSource, V1PortworxVolumeSource, V1ProjectedVolumeSource, V1QuobyteVolumeSource, V1RBDVolumeSource, V1ScaleIOVolumeSource, V1SecretVolumeSource, V1StorageOSVolumeSource, V1VsphereVirtualDiskVolumeSource } from './';
/**
 * Volume represents a named volume in a pod that may be accessed by any container in the pod.
 * @export
 * @interface V1Volume
 */
export interface V1Volume {
    /**
     *
     * @type {V1AWSElasticBlockStoreVolumeSource}
     * @memberof V1Volume
     */
    awsElasticBlockStore?: V1AWSElasticBlockStoreVolumeSource;
    /**
     *
     * @type {V1AzureDiskVolumeSource}
     * @memberof V1Volume
     */
    azureDisk?: V1AzureDiskVolumeSource;
    /**
     *
     * @type {V1AzureFileVolumeSource}
     * @memberof V1Volume
     */
    azureFile?: V1AzureFileVolumeSource;
    /**
     *
     * @type {V1CephFSVolumeSource}
     * @memberof V1Volume
     */
    cephfs?: V1CephFSVolumeSource;
    /**
     *
     * @type {V1CinderVolumeSource}
     * @memberof V1Volume
     */
    cinder?: V1CinderVolumeSource;
    /**
     *
     * @type {V1ConfigMapVolumeSource}
     * @memberof V1Volume
     */
    configMap?: V1ConfigMapVolumeSource;
    /**
     *
     * @type {V1CSIVolumeSource}
     * @memberof V1Volume
     */
    csi?: V1CSIVolumeSource;
    /**
     *
     * @type {V1DownwardAPIVolumeSource}
     * @memberof V1Volume
     */
    downwardAPI?: V1DownwardAPIVolumeSource;
    /**
     *
     * @type {V1EmptyDirVolumeSource}
     * @memberof V1Volume
     */
    emptyDir?: V1EmptyDirVolumeSource;
    /**
     *
     * @type {V1EphemeralVolumeSource}
     * @memberof V1Volume
     */
    ephemeral?: V1EphemeralVolumeSource;
    /**
     *
     * @type {V1FCVolumeSource}
     * @memberof V1Volume
     */
    fc?: V1FCVolumeSource;
    /**
     *
     * @type {V1FlexVolumeSource}
     * @memberof V1Volume
     */
    flexVolume?: V1FlexVolumeSource;
    /**
     *
     * @type {V1FlockerVolumeSource}
     * @memberof V1Volume
     */
    flocker?: V1FlockerVolumeSource;
    /**
     *
     * @type {V1GCEPersistentDiskVolumeSource}
     * @memberof V1Volume
     */
    gcePersistentDisk?: V1GCEPersistentDiskVolumeSource;
    /**
     *
     * @type {V1GitRepoVolumeSource}
     * @memberof V1Volume
     */
    gitRepo?: V1GitRepoVolumeSource;
    /**
     *
     * @type {V1GlusterfsVolumeSource}
     * @memberof V1Volume
     */
    glusterfs?: V1GlusterfsVolumeSource;
    /**
     *
     * @type {V1HostPathVolumeSource}
     * @memberof V1Volume
     */
    hostPath?: V1HostPathVolumeSource;
    /**
     *
     * @type {V1ISCSIVolumeSource}
     * @memberof V1Volume
     */
    iscsi?: V1ISCSIVolumeSource;
    /**
     * name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * @type {string}
     * @memberof V1Volume
     */
    name: string;
    /**
     *
     * @type {V1NFSVolumeSource}
     * @memberof V1Volume
     */
    nfs?: V1NFSVolumeSource;
    /**
     *
     * @type {V1PersistentVolumeClaimVolumeSource}
     * @memberof V1Volume
     */
    persistentVolumeClaim?: V1PersistentVolumeClaimVolumeSource;
    /**
     *
     * @type {V1PhotonPersistentDiskVolumeSource}
     * @memberof V1Volume
     */
    photonPersistentDisk?: V1PhotonPersistentDiskVolumeSource;
    /**
     *
     * @type {V1PortworxVolumeSource}
     * @memberof V1Volume
     */
    portworxVolume?: V1PortworxVolumeSource;
    /**
     *
     * @type {V1ProjectedVolumeSource}
     * @memberof V1Volume
     */
    projected?: V1ProjectedVolumeSource;
    /**
     *
     * @type {V1QuobyteVolumeSource}
     * @memberof V1Volume
     */
    quobyte?: V1QuobyteVolumeSource;
    /**
     *
     * @type {V1RBDVolumeSource}
     * @memberof V1Volume
     */
    rbd?: V1RBDVolumeSource;
    /**
     *
     * @type {V1ScaleIOVolumeSource}
     * @memberof V1Volume
     */
    scaleIO?: V1ScaleIOVolumeSource;
    /**
     *
     * @type {V1SecretVolumeSource}
     * @memberof V1Volume
     */
    secret?: V1SecretVolumeSource;
    /**
     *
     * @type {V1StorageOSVolumeSource}
     * @memberof V1Volume
     */
    storageos?: V1StorageOSVolumeSource;
    /**
     *
     * @type {V1VsphereVirtualDiskVolumeSource}
     * @memberof V1Volume
     */
    vsphereVolume?: V1VsphereVirtualDiskVolumeSource;
}
export declare function V1VolumeFromJSON(json: any): V1Volume;
export declare function V1VolumeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Volume;
export declare function V1VolumeToJSON(value?: V1Volume | null): any;
