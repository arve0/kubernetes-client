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
exports.V1SecretVolumeSourceToJSON = exports.V1SecretVolumeSourceFromJSONTyped = exports.V1SecretVolumeSourceFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1SecretVolumeSourceFromJSON(json) {
    return V1SecretVolumeSourceFromJSONTyped(json, false);
}
exports.V1SecretVolumeSourceFromJSON = V1SecretVolumeSourceFromJSON;
function V1SecretVolumeSourceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'defaultMode': !runtime_1.exists(json, 'defaultMode') ? undefined : json['defaultMode'],
        'items': !runtime_1.exists(json, 'items') ? undefined : (json['items'].map(_1.V1KeyToPathFromJSON)),
        'optional': !runtime_1.exists(json, 'optional') ? undefined : json['optional'],
        'secretName': !runtime_1.exists(json, 'secretName') ? undefined : json['secretName'],
    };
}
exports.V1SecretVolumeSourceFromJSONTyped = V1SecretVolumeSourceFromJSONTyped;
function V1SecretVolumeSourceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'defaultMode': value.defaultMode,
        'items': value.items === undefined ? undefined : (value.items.map(_1.V1KeyToPathToJSON)),
        'optional': value.optional,
        'secretName': value.secretName,
    };
}
exports.V1SecretVolumeSourceToJSON = V1SecretVolumeSourceToJSON;
