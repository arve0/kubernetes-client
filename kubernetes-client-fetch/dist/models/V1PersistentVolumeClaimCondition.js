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
exports.V1PersistentVolumeClaimConditionToJSON = exports.V1PersistentVolumeClaimConditionFromJSONTyped = exports.V1PersistentVolumeClaimConditionFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1PersistentVolumeClaimConditionFromJSON(json) {
    return V1PersistentVolumeClaimConditionFromJSONTyped(json, false);
}
exports.V1PersistentVolumeClaimConditionFromJSON = V1PersistentVolumeClaimConditionFromJSON;
function V1PersistentVolumeClaimConditionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'lastProbeTime': !runtime_1.exists(json, 'lastProbeTime') ? undefined : (new Date(json['lastProbeTime'])),
        'lastTransitionTime': !runtime_1.exists(json, 'lastTransitionTime') ? undefined : (new Date(json['lastTransitionTime'])),
        'message': !runtime_1.exists(json, 'message') ? undefined : json['message'],
        'reason': !runtime_1.exists(json, 'reason') ? undefined : json['reason'],
        'status': json['status'],
        'type': json['type'],
    };
}
exports.V1PersistentVolumeClaimConditionFromJSONTyped = V1PersistentVolumeClaimConditionFromJSONTyped;
function V1PersistentVolumeClaimConditionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'lastProbeTime': value.lastProbeTime === undefined ? undefined : (value.lastProbeTime.toISOString()),
        'lastTransitionTime': value.lastTransitionTime === undefined ? undefined : (value.lastTransitionTime.toISOString()),
        'message': value.message,
        'reason': value.reason,
        'status': value.status,
        'type': value.type,
    };
}
exports.V1PersistentVolumeClaimConditionToJSON = V1PersistentVolumeClaimConditionToJSON;
