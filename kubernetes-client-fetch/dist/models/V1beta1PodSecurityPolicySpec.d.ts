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
import { V1beta1AllowedCSIDriver, V1beta1AllowedFlexVolume, V1beta1AllowedHostPath, V1beta1FSGroupStrategyOptions, V1beta1HostPortRange, V1beta1RunAsGroupStrategyOptions, V1beta1RunAsUserStrategyOptions, V1beta1RuntimeClassStrategyOptions, V1beta1SELinuxStrategyOptions, V1beta1SupplementalGroupsStrategyOptions } from './';
/**
 * PodSecurityPolicySpec defines the policy enforced.
 * @export
 * @interface V1beta1PodSecurityPolicySpec
 */
export interface V1beta1PodSecurityPolicySpec {
    /**
     * allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true.
     * @type {boolean}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    allowPrivilegeEscalation?: boolean;
    /**
     * AllowedCSIDrivers is an allowlist of inline CSI drivers that must be explicitly set to be embedded within a pod spec. An empty value indicates that any CSI driver can be used for inline ephemeral volumes. This is a beta field, and is only honored if the API server enables the CSIInlineVolume feature gate.
     * @type {Array<V1beta1AllowedCSIDriver>}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    allowedCSIDrivers?: Array<V1beta1AllowedCSIDriver>;
    /**
     * allowedCapabilities is a list of capabilities that can be requested to add to the container. Capabilities in this field may be added at the pod author's discretion. You must not list a capability in both allowedCapabilities and requiredDropCapabilities.
     * @type {Array<string>}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    allowedCapabilities?: Array<string>;
    /**
     * allowedFlexVolumes is an allowlist of Flexvolumes.  Empty or nil indicates that all Flexvolumes may be used.  This parameter is effective only when the usage of the Flexvolumes is allowed in the "volumes" field.
     * @type {Array<V1beta1AllowedFlexVolume>}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    allowedFlexVolumes?: Array<V1beta1AllowedFlexVolume>;
    /**
     * allowedHostPaths is an allowlist of host paths. Empty indicates that all host paths may be used.
     * @type {Array<V1beta1AllowedHostPath>}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    allowedHostPaths?: Array<V1beta1AllowedHostPath>;
    /**
     * AllowedProcMountTypes is an allowlist of allowed ProcMountTypes. Empty or nil indicates that only the DefaultProcMountType may be used. This requires the ProcMountType feature flag to be enabled.
     * @type {Array<string>}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    allowedProcMountTypes?: Array<string>;
    /**
     * allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of allowed sysctls. Single * means all unsafe sysctls are allowed. Kubelet has to allowlist all allowed unsafe sysctls explicitly to avoid rejection.
     *
     * Examples: e.g. "foo/*" allows "foo/bar", "foo/baz", etc. e.g. "foo.*" allows "foo.bar", "foo.baz", etc.
     * @type {Array<string>}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    allowedUnsafeSysctls?: Array<string>;
    /**
     * defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability.  You may not list a capability in both defaultAddCapabilities and requiredDropCapabilities. Capabilities added here are implicitly allowed, and need not be included in the allowedCapabilities list.
     * @type {Array<string>}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    defaultAddCapabilities?: Array<string>;
    /**
     * defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process.
     * @type {boolean}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    defaultAllowPrivilegeEscalation?: boolean;
    /**
     * forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of forbidden sysctls. Single * means all sysctls are forbidden.
     *
     * Examples: e.g. "foo/*" forbids "foo/bar", "foo/baz", etc. e.g. "foo.*" forbids "foo.bar", "foo.baz", etc.
     * @type {Array<string>}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    forbiddenSysctls?: Array<string>;
    /**
     *
     * @type {V1beta1FSGroupStrategyOptions}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    fsGroup: V1beta1FSGroupStrategyOptions;
    /**
     * hostIPC determines if the policy allows the use of HostIPC in the pod spec.
     * @type {boolean}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    hostIPC?: boolean;
    /**
     * hostNetwork determines if the policy allows the use of HostNetwork in the pod spec.
     * @type {boolean}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    hostNetwork?: boolean;
    /**
     * hostPID determines if the policy allows the use of HostPID in the pod spec.
     * @type {boolean}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    hostPID?: boolean;
    /**
     * hostPorts determines which host port ranges are allowed to be exposed.
     * @type {Array<V1beta1HostPortRange>}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    hostPorts?: Array<V1beta1HostPortRange>;
    /**
     * privileged determines if a pod can request to be run as privileged.
     * @type {boolean}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    privileged?: boolean;
    /**
     * readOnlyRootFilesystem when set to true will force containers to run with a read only root file system.  If the container specifically requests to run with a non-read only root file system the PSP should deny the pod. If set to false the container may run with a read only root file system if it wishes but it will not be forced to.
     * @type {boolean}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    readOnlyRootFilesystem?: boolean;
    /**
     * requiredDropCapabilities are the capabilities that will be dropped from the container.  These are required to be dropped and cannot be added.
     * @type {Array<string>}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    requiredDropCapabilities?: Array<string>;
    /**
     *
     * @type {V1beta1RunAsGroupStrategyOptions}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    runAsGroup?: V1beta1RunAsGroupStrategyOptions;
    /**
     *
     * @type {V1beta1RunAsUserStrategyOptions}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    runAsUser: V1beta1RunAsUserStrategyOptions;
    /**
     *
     * @type {V1beta1RuntimeClassStrategyOptions}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    runtimeClass?: V1beta1RuntimeClassStrategyOptions;
    /**
     *
     * @type {V1beta1SELinuxStrategyOptions}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    seLinux: V1beta1SELinuxStrategyOptions;
    /**
     *
     * @type {V1beta1SupplementalGroupsStrategyOptions}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    supplementalGroups: V1beta1SupplementalGroupsStrategyOptions;
    /**
     * volumes is an allowlist of volume plugins. Empty indicates that no volumes may be used. To allow all volumes you may use '*'.
     * @type {Array<string>}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    volumes?: Array<string>;
}
export declare function V1beta1PodSecurityPolicySpecFromJSON(json: any): V1beta1PodSecurityPolicySpec;
export declare function V1beta1PodSecurityPolicySpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1PodSecurityPolicySpec;
export declare function V1beta1PodSecurityPolicySpecToJSON(value?: V1beta1PodSecurityPolicySpec | null): any;
