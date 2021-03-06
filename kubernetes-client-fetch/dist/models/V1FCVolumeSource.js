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
exports.V1FCVolumeSourceToJSON = exports.V1FCVolumeSourceFromJSONTyped = exports.V1FCVolumeSourceFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1FCVolumeSourceFromJSON(json) {
    return V1FCVolumeSourceFromJSONTyped(json, false);
}
exports.V1FCVolumeSourceFromJSON = V1FCVolumeSourceFromJSON;
function V1FCVolumeSourceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'fsType': !runtime_1.exists(json, 'fsType') ? undefined : json['fsType'],
        'lun': !runtime_1.exists(json, 'lun') ? undefined : json['lun'],
        'readOnly': !runtime_1.exists(json, 'readOnly') ? undefined : json['readOnly'],
        'targetWWNs': !runtime_1.exists(json, 'targetWWNs') ? undefined : json['targetWWNs'],
        'wwids': !runtime_1.exists(json, 'wwids') ? undefined : json['wwids'],
    };
}
exports.V1FCVolumeSourceFromJSONTyped = V1FCVolumeSourceFromJSONTyped;
function V1FCVolumeSourceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'fsType': value.fsType,
        'lun': value.lun,
        'readOnly': value.readOnly,
        'targetWWNs': value.targetWWNs,
        'wwids': value.wwids,
    };
}
exports.V1FCVolumeSourceToJSON = V1FCVolumeSourceToJSON;
