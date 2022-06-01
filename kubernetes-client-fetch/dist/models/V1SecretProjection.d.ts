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
import { V1KeyToPath } from './';
/**
 * Adapts a secret into a projected volume.
 *
 * The contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.
 * @export
 * @interface V1SecretProjection
 */
export interface V1SecretProjection {
    /**
     * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
     * @type {Array<V1KeyToPath>}
     * @memberof V1SecretProjection
     */
    items?: Array<V1KeyToPath>;
    /**
     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * @type {string}
     * @memberof V1SecretProjection
     */
    name?: string;
    /**
     * optional field specify whether the Secret or its key must be defined
     * @type {boolean}
     * @memberof V1SecretProjection
     */
    optional?: boolean;
}
export declare function V1SecretProjectionFromJSON(json: any): V1SecretProjection;
export declare function V1SecretProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1SecretProjection;
export declare function V1SecretProjectionToJSON(value?: V1SecretProjection | null): any;
