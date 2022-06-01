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
exports.V1SeccompProfileToJSON = exports.V1SeccompProfileFromJSONTyped = exports.V1SeccompProfileFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1SeccompProfileFromJSON(json) {
    return V1SeccompProfileFromJSONTyped(json, false);
}
exports.V1SeccompProfileFromJSON = V1SeccompProfileFromJSON;
function V1SeccompProfileFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'localhostProfile': !runtime_1.exists(json, 'localhostProfile') ? undefined : json['localhostProfile'],
        'type': json['type'],
    };
}
exports.V1SeccompProfileFromJSONTyped = V1SeccompProfileFromJSONTyped;
function V1SeccompProfileToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'localhostProfile': value.localhostProfile,
        'type': value.type,
    };
}
exports.V1SeccompProfileToJSON = V1SeccompProfileToJSON;