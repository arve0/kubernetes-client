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
 * AttachedVolume describes a volume attached to a node
 * @export
 * @interface V1AttachedVolume
 */
export interface V1AttachedVolume {
    /**
     * DevicePath represents the device path where the volume should be available
     * @type {string}
     * @memberof V1AttachedVolume
     */
    devicePath: string;
    /**
     * Name of the attached volume
     * @type {string}
     * @memberof V1AttachedVolume
     */
    name: string;
}
export declare function V1AttachedVolumeFromJSON(json: any): V1AttachedVolume;
export declare function V1AttachedVolumeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1AttachedVolume;
export declare function V1AttachedVolumeToJSON(value?: V1AttachedVolume | null): any;
