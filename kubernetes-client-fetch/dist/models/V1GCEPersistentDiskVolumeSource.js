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
exports.V1GCEPersistentDiskVolumeSourceToJSON = exports.V1GCEPersistentDiskVolumeSourceFromJSONTyped = exports.V1GCEPersistentDiskVolumeSourceFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1GCEPersistentDiskVolumeSourceFromJSON(json) {
    return V1GCEPersistentDiskVolumeSourceFromJSONTyped(json, false);
}
exports.V1GCEPersistentDiskVolumeSourceFromJSON = V1GCEPersistentDiskVolumeSourceFromJSON;
function V1GCEPersistentDiskVolumeSourceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'fsType': !runtime_1.exists(json, 'fsType') ? undefined : json['fsType'],
        'partition': !runtime_1.exists(json, 'partition') ? undefined : json['partition'],
        'pdName': json['pdName'],
        'readOnly': !runtime_1.exists(json, 'readOnly') ? undefined : json['readOnly'],
    };
}
exports.V1GCEPersistentDiskVolumeSourceFromJSONTyped = V1GCEPersistentDiskVolumeSourceFromJSONTyped;
function V1GCEPersistentDiskVolumeSourceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'fsType': value.fsType,
        'partition': value.partition,
        'pdName': value.pdName,
        'readOnly': value.readOnly,
    };
}
exports.V1GCEPersistentDiskVolumeSourceToJSON = V1GCEPersistentDiskVolumeSourceToJSON;
