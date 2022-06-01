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
import { V1ContainerPort, V1EnvFromSource, V1EnvVar, V1Lifecycle, V1Probe, V1ResourceRequirements, V1SecurityContext, V1VolumeDevice, V1VolumeMount } from './';
/**
 * An EphemeralContainer is a temporary container that you may add to an existing Pod for user-initiated activities such as debugging. Ephemeral containers have no resource or scheduling guarantees, and they will not be restarted when they exit or when a Pod is removed or restarted. The kubelet may evict a Pod if an ephemeral container causes the Pod to exceed its resource allocation.
 *
 * To add an ephemeral container, use the ephemeralcontainers subresource of an existing Pod. Ephemeral containers may not be removed or restarted.
 *
 * This is a beta feature available on clusters that haven't disabled the EphemeralContainers feature gate.
 * @export
 * @interface V1EphemeralContainer
 */
export interface V1EphemeralContainer {
    /**
     * Arguments to the entrypoint. The image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
     * @type {Array<string>}
     * @memberof V1EphemeralContainer
     */
    args?: Array<string>;
    /**
     * Entrypoint array. Not executed within a shell. The image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
     * @type {Array<string>}
     * @memberof V1EphemeralContainer
     */
    command?: Array<string>;
    /**
     * List of environment variables to set in the container. Cannot be updated.
     * @type {Array<V1EnvVar>}
     * @memberof V1EphemeralContainer
     */
    env?: Array<V1EnvVar>;
    /**
     * List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
     * @type {Array<V1EnvFromSource>}
     * @memberof V1EphemeralContainer
     */
    envFrom?: Array<V1EnvFromSource>;
    /**
     * Container image name. More info: https://kubernetes.io/docs/concepts/containers/images
     * @type {string}
     * @memberof V1EphemeralContainer
     */
    image?: string;
    /**
     * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
     * @type {string}
     * @memberof V1EphemeralContainer
     */
    imagePullPolicy?: string;
    /**
     *
     * @type {V1Lifecycle}
     * @memberof V1EphemeralContainer
     */
    lifecycle?: V1Lifecycle;
    /**
     *
     * @type {V1Probe}
     * @memberof V1EphemeralContainer
     */
    livenessProbe?: V1Probe;
    /**
     * Name of the ephemeral container specified as a DNS_LABEL. This name must be unique among all containers, init containers and ephemeral containers.
     * @type {string}
     * @memberof V1EphemeralContainer
     */
    name: string;
    /**
     * Ports are not allowed for ephemeral containers.
     * @type {Array<V1ContainerPort>}
     * @memberof V1EphemeralContainer
     */
    ports?: Array<V1ContainerPort>;
    /**
     *
     * @type {V1Probe}
     * @memberof V1EphemeralContainer
     */
    readinessProbe?: V1Probe;
    /**
     *
     * @type {V1ResourceRequirements}
     * @memberof V1EphemeralContainer
     */
    resources?: V1ResourceRequirements;
    /**
     *
     * @type {V1SecurityContext}
     * @memberof V1EphemeralContainer
     */
    securityContext?: V1SecurityContext;
    /**
     *
     * @type {V1Probe}
     * @memberof V1EphemeralContainer
     */
    startupProbe?: V1Probe;
    /**
     * Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.
     * @type {boolean}
     * @memberof V1EphemeralContainer
     */
    stdin?: boolean;
    /**
     * Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false
     * @type {boolean}
     * @memberof V1EphemeralContainer
     */
    stdinOnce?: boolean;
    /**
     * If set, the name of the container from PodSpec that this ephemeral container targets. The ephemeral container will be run in the namespaces (IPC, PID, etc) of this container. If not set then the ephemeral container uses the namespaces configured in the Pod spec.
     *
     * The container runtime must implement support for this feature. If the runtime does not support namespace targeting then the result of setting this field is undefined.
     * @type {string}
     * @memberof V1EphemeralContainer
     */
    targetContainerName?: string;
    /**
     * Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.
     * @type {string}
     * @memberof V1EphemeralContainer
     */
    terminationMessagePath?: string;
    /**
     * Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
     * @type {string}
     * @memberof V1EphemeralContainer
     */
    terminationMessagePolicy?: string;
    /**
     * Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.
     * @type {boolean}
     * @memberof V1EphemeralContainer
     */
    tty?: boolean;
    /**
     * volumeDevices is the list of block devices to be used by the container.
     * @type {Array<V1VolumeDevice>}
     * @memberof V1EphemeralContainer
     */
    volumeDevices?: Array<V1VolumeDevice>;
    /**
     * Pod volumes to mount into the container's filesystem. Subpath mounts are not allowed for ephemeral containers. Cannot be updated.
     * @type {Array<V1VolumeMount>}
     * @memberof V1EphemeralContainer
     */
    volumeMounts?: Array<V1VolumeMount>;
    /**
     * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
     * @type {string}
     * @memberof V1EphemeralContainer
     */
    workingDir?: string;
}
export declare function V1EphemeralContainerFromJSON(json: any): V1EphemeralContainer;
export declare function V1EphemeralContainerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EphemeralContainer;
export declare function V1EphemeralContainerToJSON(value?: V1EphemeralContainer | null): any;
