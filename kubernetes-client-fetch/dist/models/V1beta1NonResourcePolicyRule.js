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
exports.V1beta1NonResourcePolicyRuleToJSON = exports.V1beta1NonResourcePolicyRuleFromJSONTyped = exports.V1beta1NonResourcePolicyRuleFromJSON = void 0;
function V1beta1NonResourcePolicyRuleFromJSON(json) {
    return V1beta1NonResourcePolicyRuleFromJSONTyped(json, false);
}
exports.V1beta1NonResourcePolicyRuleFromJSON = V1beta1NonResourcePolicyRuleFromJSON;
function V1beta1NonResourcePolicyRuleFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'nonResourceURLs': json['nonResourceURLs'],
        'verbs': json['verbs'],
    };
}
exports.V1beta1NonResourcePolicyRuleFromJSONTyped = V1beta1NonResourcePolicyRuleFromJSONTyped;
function V1beta1NonResourcePolicyRuleToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'nonResourceURLs': value.nonResourceURLs,
        'verbs': value.verbs,
    };
}
exports.V1beta1NonResourcePolicyRuleToJSON = V1beta1NonResourcePolicyRuleToJSON;