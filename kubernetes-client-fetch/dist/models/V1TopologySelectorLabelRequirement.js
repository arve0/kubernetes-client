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
exports.V1TopologySelectorLabelRequirementToJSON = exports.V1TopologySelectorLabelRequirementFromJSONTyped = exports.V1TopologySelectorLabelRequirementFromJSON = void 0;
function V1TopologySelectorLabelRequirementFromJSON(json) {
    return V1TopologySelectorLabelRequirementFromJSONTyped(json, false);
}
exports.V1TopologySelectorLabelRequirementFromJSON = V1TopologySelectorLabelRequirementFromJSON;
function V1TopologySelectorLabelRequirementFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'key': json['key'],
        'values': json['values'],
    };
}
exports.V1TopologySelectorLabelRequirementFromJSONTyped = V1TopologySelectorLabelRequirementFromJSONTyped;
function V1TopologySelectorLabelRequirementToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'key': value.key,
        'values': value.values,
    };
}
exports.V1TopologySelectorLabelRequirementToJSON = V1TopologySelectorLabelRequirementToJSON;
