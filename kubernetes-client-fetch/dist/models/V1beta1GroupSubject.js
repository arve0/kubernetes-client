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
exports.V1beta1GroupSubjectToJSON = exports.V1beta1GroupSubjectFromJSONTyped = exports.V1beta1GroupSubjectFromJSON = void 0;
function V1beta1GroupSubjectFromJSON(json) {
    return V1beta1GroupSubjectFromJSONTyped(json, false);
}
exports.V1beta1GroupSubjectFromJSON = V1beta1GroupSubjectFromJSON;
function V1beta1GroupSubjectFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
    };
}
exports.V1beta1GroupSubjectFromJSONTyped = V1beta1GroupSubjectFromJSONTyped;
function V1beta1GroupSubjectToJSON(value) {
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
exports.V1beta1GroupSubjectToJSON = V1beta1GroupSubjectToJSON;