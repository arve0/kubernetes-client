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
 * ContainerStateTerminated is a terminated state of a container.
 * @export
 * @interface V1ContainerStateTerminated
 */
export interface V1ContainerStateTerminated {
    /**
     * Container's ID in the format '<type>://<container_id>'
     * @type {string}
     * @memberof V1ContainerStateTerminated
     */
    containerID?: string;
    /**
     * Exit status from the last termination of the container
     * @type {number}
     * @memberof V1ContainerStateTerminated
     */
    exitCode: number;
    /**
     * Time at which the container last terminated
     * @type {Date}
     * @memberof V1ContainerStateTerminated
     */
    finishedAt?: Date;
    /**
     * Message regarding the last termination of the container
     * @type {string}
     * @memberof V1ContainerStateTerminated
     */
    message?: string;
    /**
     * (brief) reason from the last termination of the container
     * @type {string}
     * @memberof V1ContainerStateTerminated
     */
    reason?: string;
    /**
     * Signal from the last termination of the container
     * @type {number}
     * @memberof V1ContainerStateTerminated
     */
    signal?: number;
    /**
     * Time at which previous execution of the container started
     * @type {Date}
     * @memberof V1ContainerStateTerminated
     */
    startedAt?: Date;
}
export declare function V1ContainerStateTerminatedFromJSON(json: any): V1ContainerStateTerminated;
export declare function V1ContainerStateTerminatedFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ContainerStateTerminated;
export declare function V1ContainerStateTerminatedToJSON(value?: V1ContainerStateTerminated | null): any;
