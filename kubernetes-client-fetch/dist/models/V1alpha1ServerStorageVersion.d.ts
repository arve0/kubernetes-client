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
 * An API server instance reports the version it can decode and the version it encodes objects to when persisting objects in the backend.
 * @export
 * @interface V1alpha1ServerStorageVersion
 */
export interface V1alpha1ServerStorageVersion {
    /**
     * The ID of the reporting API server.
     * @type {string}
     * @memberof V1alpha1ServerStorageVersion
     */
    apiServerID?: string;
    /**
     * The API server can decode objects encoded in these versions. The encodingVersion must be included in the decodableVersions.
     * @type {Array<string>}
     * @memberof V1alpha1ServerStorageVersion
     */
    decodableVersions?: Array<string>;
    /**
     * The API server encodes the object to this version when persisting it in the backend (e.g., etcd).
     * @type {string}
     * @memberof V1alpha1ServerStorageVersion
     */
    encodingVersion?: string;
}
export declare function V1alpha1ServerStorageVersionFromJSON(json: any): V1alpha1ServerStorageVersion;
export declare function V1alpha1ServerStorageVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1ServerStorageVersion;
export declare function V1alpha1ServerStorageVersionToJSON(value?: V1alpha1ServerStorageVersion | null): any;
