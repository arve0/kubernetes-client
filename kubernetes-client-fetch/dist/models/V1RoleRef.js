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
exports.V1RoleRefToJSON = exports.V1RoleRefFromJSONTyped = exports.V1RoleRefFromJSON = void 0;
function V1RoleRefFromJSON(json) {
    return V1RoleRefFromJSONTyped(json, false);
}
exports.V1RoleRefFromJSON = V1RoleRefFromJSON;
function V1RoleRefFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'apiGroup': json['apiGroup'],
        'kind': json['kind'],
        'name': json['name'],
    };
}
exports.V1RoleRefFromJSONTyped = V1RoleRefFromJSONTyped;
function V1RoleRefToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'apiGroup': value.apiGroup,
        'kind': value.kind,
        'name': value.name,
    };
}
exports.V1RoleRefToJSON = V1RoleRefToJSON;