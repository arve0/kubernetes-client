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
 * AllowedHostPath defines the host volume conditions that will be enabled by a policy for pods to use. It requires the path prefix to be defined.
 * @export
 * @interface V1beta1AllowedHostPath
 */
export interface V1beta1AllowedHostPath {
    /**
     * pathPrefix is the path prefix that the host volume must match. It does not support `*`. Trailing slashes are trimmed when validating the path prefix with a host path.
     *
     * Examples: `/foo` would allow `/foo`, `/foo/` and `/foo/bar` `/foo` would not allow `/food` or `/etc/foo`
     * @type {string}
     * @memberof V1beta1AllowedHostPath
     */
    pathPrefix?: string;
    /**
     * when set to true, will allow host volumes matching the pathPrefix only if all volume mounts are readOnly.
     * @type {boolean}
     * @memberof V1beta1AllowedHostPath
     */
    readOnly?: boolean;
}
export declare function V1beta1AllowedHostPathFromJSON(json: any): V1beta1AllowedHostPath;
export declare function V1beta1AllowedHostPathFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1AllowedHostPath;
export declare function V1beta1AllowedHostPathToJSON(value?: V1beta1AllowedHostPath | null): any;
