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
exports.V1CinderVolumeSourceToJSON = exports.V1CinderVolumeSourceFromJSONTyped = exports.V1CinderVolumeSourceFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1CinderVolumeSourceFromJSON(json) {
    return V1CinderVolumeSourceFromJSONTyped(json, false);
}
exports.V1CinderVolumeSourceFromJSON = V1CinderVolumeSourceFromJSON;
function V1CinderVolumeSourceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'fsType': !runtime_1.exists(json, 'fsType') ? undefined : json['fsType'],
        'readOnly': !runtime_1.exists(json, 'readOnly') ? undefined : json['readOnly'],
        'secretRef': !runtime_1.exists(json, 'secretRef') ? undefined : _1.V1LocalObjectReferenceFromJSON(json['secretRef']),
        'volumeID': json['volumeID'],
    };
}
exports.V1CinderVolumeSourceFromJSONTyped = V1CinderVolumeSourceFromJSONTyped;
function V1CinderVolumeSourceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'fsType': value.fsType,
        'readOnly': value.readOnly,
        'secretRef': _1.V1LocalObjectReferenceToJSON(value.secretRef),
        'volumeID': value.volumeID,
    };
}
exports.V1CinderVolumeSourceToJSON = V1CinderVolumeSourceToJSON;
