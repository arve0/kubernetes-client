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
import { V1ObjectFieldSelector, V1ResourceFieldSelector } from './';
/**
 * DownwardAPIVolumeFile represents information to create the file containing the pod field
 * @export
 * @interface V1DownwardAPIVolumeFile
 */
export interface V1DownwardAPIVolumeFile {
    /**
     *
     * @type {V1ObjectFieldSelector}
     * @memberof V1DownwardAPIVolumeFile
     */
    fieldRef?: V1ObjectFieldSelector;
    /**
     * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     * @type {number}
     * @memberof V1DownwardAPIVolumeFile
     */
    mode?: number;
    /**
     * Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
     * @type {string}
     * @memberof V1DownwardAPIVolumeFile
     */
    path: string;
    /**
     *
     * @type {V1ResourceFieldSelector}
     * @memberof V1DownwardAPIVolumeFile
     */
    resourceFieldRef?: V1ResourceFieldSelector;
}
export declare function V1DownwardAPIVolumeFileFromJSON(json: any): V1DownwardAPIVolumeFile;
export declare function V1DownwardAPIVolumeFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DownwardAPIVolumeFile;
export declare function V1DownwardAPIVolumeFileToJSON(value?: V1DownwardAPIVolumeFile | null): any;
