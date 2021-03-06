"use strict";
/* tslint:disable */
/* eslint-disable */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VsphereVirtualDiskVolumeSourceToJSON = exports.V1VsphereVirtualDiskVolumeSourceFromJSONTyped = exports.V1VsphereVirtualDiskVolumeSourceFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1VsphereVirtualDiskVolumeSourceFromJSON(json) {
    return V1VsphereVirtualDiskVolumeSourceFromJSONTyped(json, false);
}
exports.V1VsphereVirtualDiskVolumeSourceFromJSON = V1VsphereVirtualDiskVolumeSourceFromJSON;
function V1VsphereVirtualDiskVolumeSourceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'fsType': !runtime_1.exists(json, 'fsType') ? undefined : json['fsType'],
        'storagePolicyID': !runtime_1.exists(json, 'storagePolicyID') ? undefined : json['storagePolicyID'],
        'storagePolicyName': !runtime_1.exists(json, 'storagePolicyName') ? undefined : json['storagePolicyName'],
        'volumePath': json['volumePath'],
    };
}
exports.V1VsphereVirtualDiskVolumeSourceFromJSONTyped = V1VsphereVirtualDiskVolumeSourceFromJSONTyped;
function V1VsphereVirtualDiskVolumeSourceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'fsType': value.fsType,
        'storagePolicyID': value.storagePolicyID,
        'storagePolicyName': value.storagePolicyName,
        'volumePath': value.volumePath,
    };
}
exports.V1VsphereVirtualDiskVolumeSourceToJSON = V1VsphereVirtualDiskVolumeSourceToJSON;
