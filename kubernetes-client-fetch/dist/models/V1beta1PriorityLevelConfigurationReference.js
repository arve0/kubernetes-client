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
exports.V1beta1PriorityLevelConfigurationReferenceToJSON = exports.V1beta1PriorityLevelConfigurationReferenceFromJSONTyped = exports.V1beta1PriorityLevelConfigurationReferenceFromJSON = void 0;
function V1beta1PriorityLevelConfigurationReferenceFromJSON(json) {
    return V1beta1PriorityLevelConfigurationReferenceFromJSONTyped(json, false);
}
exports.V1beta1PriorityLevelConfigurationReferenceFromJSON = V1beta1PriorityLevelConfigurationReferenceFromJSON;
function V1beta1PriorityLevelConfigurationReferenceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
    };
}
exports.V1beta1PriorityLevelConfigurationReferenceFromJSONTyped = V1beta1PriorityLevelConfigurationReferenceFromJSONTyped;
function V1beta1PriorityLevelConfigurationReferenceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
    };
}
exports.V1beta1PriorityLevelConfigurationReferenceToJSON = V1beta1PriorityLevelConfigurationReferenceToJSON;
