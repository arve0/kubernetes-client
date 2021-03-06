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
exports.V1PortworxVolumeSourceToJSON = exports.V1PortworxVolumeSourceFromJSONTyped = exports.V1PortworxVolumeSourceFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1PortworxVolumeSourceFromJSON(json) {
    return V1PortworxVolumeSourceFromJSONTyped(json, false);
}
exports.V1PortworxVolumeSourceFromJSON = V1PortworxVolumeSourceFromJSON;
function V1PortworxVolumeSourceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'fsType': !runtime_1.exists(json, 'fsType') ? undefined : json['fsType'],
        'readOnly': !runtime_1.exists(json, 'readOnly') ? undefined : json['readOnly'],
        'volumeID': json['volumeID'],
    };
}
exports.V1PortworxVolumeSourceFromJSONTyped = V1PortworxVolumeSourceFromJSONTyped;
function V1PortworxVolumeSourceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'fsType': value.fsType,
        'readOnly': value.readOnly,
        'volumeID': value.volumeID,
    };
}
exports.V1PortworxVolumeSourceToJSON = V1PortworxVolumeSourceToJSON;
