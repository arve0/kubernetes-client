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
exports.V1HTTPHeaderToJSON = exports.V1HTTPHeaderFromJSONTyped = exports.V1HTTPHeaderFromJSON = void 0;
function V1HTTPHeaderFromJSON(json) {
    return V1HTTPHeaderFromJSONTyped(json, false);
}
exports.V1HTTPHeaderFromJSON = V1HTTPHeaderFromJSON;
function V1HTTPHeaderFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'value': json['value'],
    };
}
exports.V1HTTPHeaderFromJSONTyped = V1HTTPHeaderFromJSONTyped;
function V1HTTPHeaderToJSON(value) {
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
exports.V1HTTPHeaderToJSON = V1HTTPHeaderToJSON;
