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
exports.V1SELinuxOptionsToJSON = exports.V1SELinuxOptionsFromJSONTyped = exports.V1SELinuxOptionsFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1SELinuxOptionsFromJSON(json) {
    return V1SELinuxOptionsFromJSONTyped(json, false);
}
exports.V1SELinuxOptionsFromJSON = V1SELinuxOptionsFromJSON;
function V1SELinuxOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'level': !runtime_1.exists(json, 'level') ? undefined : json['level'],
        'role': !runtime_1.exists(json, 'role') ? undefined : json['role'],
        'type': !runtime_1.exists(json, 'type') ? undefined : json['type'],
        'user': !runtime_1.exists(json, 'user') ? undefined : json['user'],
    };
}
exports.V1SELinuxOptionsFromJSONTyped = V1SELinuxOptionsFromJSONTyped;
function V1SELinuxOptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'level': value.level,
        'role': value.role,
        'type': value.type,
        'user': value.user,
    };
}
exports.V1SELinuxOptionsToJSON = V1SELinuxOptionsToJSON;