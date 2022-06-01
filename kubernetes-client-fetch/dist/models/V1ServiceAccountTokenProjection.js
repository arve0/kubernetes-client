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
exports.V1ServiceAccountTokenProjectionToJSON = exports.V1ServiceAccountTokenProjectionFromJSONTyped = exports.V1ServiceAccountTokenProjectionFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1ServiceAccountTokenProjectionFromJSON(json) {
    return V1ServiceAccountTokenProjectionFromJSONTyped(json, false);
}
exports.V1ServiceAccountTokenProjectionFromJSON = V1ServiceAccountTokenProjectionFromJSON;
function V1ServiceAccountTokenProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'audience': !runtime_1.exists(json, 'audience') ? undefined : json['audience'],
        'expirationSeconds': !runtime_1.exists(json, 'expirationSeconds') ? undefined : json['expirationSeconds'],
        'path': json['path'],
    };
}
exports.V1ServiceAccountTokenProjectionFromJSONTyped = V1ServiceAccountTokenProjectionFromJSONTyped;
function V1ServiceAccountTokenProjectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'audience': value.audience,
        'expirationSeconds': value.expirationSeconds,
        'path': value.path,
    };
}
exports.V1ServiceAccountTokenProjectionToJSON = V1ServiceAccountTokenProjectionToJSON;