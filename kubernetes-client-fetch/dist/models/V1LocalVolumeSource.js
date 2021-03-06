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
exports.V1LocalVolumeSourceToJSON = exports.V1LocalVolumeSourceFromJSONTyped = exports.V1LocalVolumeSourceFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1LocalVolumeSourceFromJSON(json) {
    return V1LocalVolumeSourceFromJSONTyped(json, false);
}
exports.V1LocalVolumeSourceFromJSON = V1LocalVolumeSourceFromJSON;
function V1LocalVolumeSourceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'fsType': !runtime_1.exists(json, 'fsType') ? undefined : json['fsType'],
        'path': json['path'],
    };
}
exports.V1LocalVolumeSourceFromJSONTyped = V1LocalVolumeSourceFromJSONTyped;
function V1LocalVolumeSourceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'fsType': value.fsType,
        'path': value.path,
    };
}
exports.V1LocalVolumeSourceToJSON = V1LocalVolumeSourceToJSON;
