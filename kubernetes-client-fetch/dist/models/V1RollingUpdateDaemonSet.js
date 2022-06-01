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
exports.V1RollingUpdateDaemonSetToJSON = exports.V1RollingUpdateDaemonSetFromJSONTyped = exports.V1RollingUpdateDaemonSetFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1RollingUpdateDaemonSetFromJSON(json) {
    return V1RollingUpdateDaemonSetFromJSONTyped(json, false);
}
exports.V1RollingUpdateDaemonSetFromJSON = V1RollingUpdateDaemonSetFromJSON;
function V1RollingUpdateDaemonSetFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'maxSurge': !runtime_1.exists(json, 'maxSurge') ? undefined : json['maxSurge'],
        'maxUnavailable': !runtime_1.exists(json, 'maxUnavailable') ? undefined : json['maxUnavailable'],
    };
}
exports.V1RollingUpdateDaemonSetFromJSONTyped = V1RollingUpdateDaemonSetFromJSONTyped;
function V1RollingUpdateDaemonSetToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'maxSurge': value.maxSurge,
        'maxUnavailable': value.maxUnavailable,
    };
}
exports.V1RollingUpdateDaemonSetToJSON = V1RollingUpdateDaemonSetToJSON;
