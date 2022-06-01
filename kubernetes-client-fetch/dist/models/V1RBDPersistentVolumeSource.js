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
exports.V1RBDPersistentVolumeSourceToJSON = exports.V1RBDPersistentVolumeSourceFromJSONTyped = exports.V1RBDPersistentVolumeSourceFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1RBDPersistentVolumeSourceFromJSON(json) {
    return V1RBDPersistentVolumeSourceFromJSONTyped(json, false);
}
exports.V1RBDPersistentVolumeSourceFromJSON = V1RBDPersistentVolumeSourceFromJSON;
function V1RBDPersistentVolumeSourceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'fsType': !runtime_1.exists(json, 'fsType') ? undefined : json['fsType'],
        'image': json['image'],
        'keyring': !runtime_1.exists(json, 'keyring') ? undefined : json['keyring'],
        'monitors': json['monitors'],
        'pool': !runtime_1.exists(json, 'pool') ? undefined : json['pool'],
        'readOnly': !runtime_1.exists(json, 'readOnly') ? undefined : json['readOnly'],
        'secretRef': !runtime_1.exists(json, 'secretRef') ? undefined : _1.V1SecretReferenceFromJSON(json['secretRef']),
        'user': !runtime_1.exists(json, 'user') ? undefined : json['user'],
    };
}
exports.V1RBDPersistentVolumeSourceFromJSONTyped = V1RBDPersistentVolumeSourceFromJSONTyped;
function V1RBDPersistentVolumeSourceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'fsType': value.fsType,
        'image': value.image,
        'keyring': value.keyring,
        'monitors': value.monitors,
        'pool': value.pool,
        'readOnly': value.readOnly,
        'secretRef': _1.V1SecretReferenceToJSON(value.secretRef),
        'user': value.user,
    };
}
exports.V1RBDPersistentVolumeSourceToJSON = V1RBDPersistentVolumeSourceToJSON;