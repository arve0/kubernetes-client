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
exports.V1ScaleIOPersistentVolumeSourceToJSON = exports.V1ScaleIOPersistentVolumeSourceFromJSONTyped = exports.V1ScaleIOPersistentVolumeSourceFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1ScaleIOPersistentVolumeSourceFromJSON(json) {
    return V1ScaleIOPersistentVolumeSourceFromJSONTyped(json, false);
}
exports.V1ScaleIOPersistentVolumeSourceFromJSON = V1ScaleIOPersistentVolumeSourceFromJSON;
function V1ScaleIOPersistentVolumeSourceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'fsType': !runtime_1.exists(json, 'fsType') ? undefined : json['fsType'],
        'gateway': json['gateway'],
        'protectionDomain': !runtime_1.exists(json, 'protectionDomain') ? undefined : json['protectionDomain'],
        'readOnly': !runtime_1.exists(json, 'readOnly') ? undefined : json['readOnly'],
        'secretRef': _1.V1SecretReferenceFromJSON(json['secretRef']),
        'sslEnabled': !runtime_1.exists(json, 'sslEnabled') ? undefined : json['sslEnabled'],
        'storageMode': !runtime_1.exists(json, 'storageMode') ? undefined : json['storageMode'],
        'storagePool': !runtime_1.exists(json, 'storagePool') ? undefined : json['storagePool'],
        'system': json['system'],
        'volumeName': !runtime_1.exists(json, 'volumeName') ? undefined : json['volumeName'],
    };
}
exports.V1ScaleIOPersistentVolumeSourceFromJSONTyped = V1ScaleIOPersistentVolumeSourceFromJSONTyped;
function V1ScaleIOPersistentVolumeSourceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'fsType': value.fsType,
        'gateway': value.gateway,
        'protectionDomain': value.protectionDomain,
        'readOnly': value.readOnly,
        'secretRef': _1.V1SecretReferenceToJSON(value.secretRef),
        'sslEnabled': value.sslEnabled,
        'storageMode': value.storageMode,
        'storagePool': value.storagePool,
        'system': value.system,
        'volumeName': value.volumeName,
    };
}
exports.V1ScaleIOPersistentVolumeSourceToJSON = V1ScaleIOPersistentVolumeSourceToJSON;
