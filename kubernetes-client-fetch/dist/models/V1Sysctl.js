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
exports.V1SysctlToJSON = exports.V1SysctlFromJSONTyped = exports.V1SysctlFromJSON = void 0;
function V1SysctlFromJSON(json) {
    return V1SysctlFromJSONTyped(json, false);
}
exports.V1SysctlFromJSON = V1SysctlFromJSON;
function V1SysctlFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'value': json['value'],
    };
}
exports.V1SysctlFromJSONTyped = V1SysctlFromJSONTyped;
function V1SysctlToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'value': value.value,
    };
}
exports.V1SysctlToJSON = V1SysctlToJSON;