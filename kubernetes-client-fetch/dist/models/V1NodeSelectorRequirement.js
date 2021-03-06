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
exports.V1NodeSelectorRequirementToJSON = exports.V1NodeSelectorRequirementFromJSONTyped = exports.V1NodeSelectorRequirementFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1NodeSelectorRequirementFromJSON(json) {
    return V1NodeSelectorRequirementFromJSONTyped(json, false);
}
exports.V1NodeSelectorRequirementFromJSON = V1NodeSelectorRequirementFromJSON;
function V1NodeSelectorRequirementFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'key': json['key'],
        'operator': json['operator'],
        'values': !runtime_1.exists(json, 'values') ? undefined : json['values'],
    };
}
exports.V1NodeSelectorRequirementFromJSONTyped = V1NodeSelectorRequirementFromJSONTyped;
function V1NodeSelectorRequirementToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'key': value.key,
        'operator': value.operator,
        'values': value.values,
    };
}
exports.V1NodeSelectorRequirementToJSON = V1NodeSelectorRequirementToJSON;
