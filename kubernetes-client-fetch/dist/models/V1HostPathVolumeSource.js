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
exports.V1HostPathVolumeSourceToJSON = exports.V1HostPathVolumeSourceFromJSONTyped = exports.V1HostPathVolumeSourceFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1HostPathVolumeSourceFromJSON(json) {
    return V1HostPathVolumeSourceFromJSONTyped(json, false);
}
exports.V1HostPathVolumeSourceFromJSON = V1HostPathVolumeSourceFromJSON;
function V1HostPathVolumeSourceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'path': json['path'],
        'type': !runtime_1.exists(json, 'type') ? undefined : json['type'],
    };
}
exports.V1HostPathVolumeSourceFromJSONTyped = V1HostPathVolumeSourceFromJSONTyped;
function V1HostPathVolumeSourceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'path': value.path,
        'type': value.type,
    };
}
exports.V1HostPathVolumeSourceToJSON = V1HostPathVolumeSourceToJSON;
