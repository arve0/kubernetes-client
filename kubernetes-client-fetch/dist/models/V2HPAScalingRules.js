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
exports.V2HPAScalingRulesToJSON = exports.V2HPAScalingRulesFromJSONTyped = exports.V2HPAScalingRulesFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V2HPAScalingRulesFromJSON(json) {
    return V2HPAScalingRulesFromJSONTyped(json, false);
}
exports.V2HPAScalingRulesFromJSON = V2HPAScalingRulesFromJSON;
function V2HPAScalingRulesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'policies': !runtime_1.exists(json, 'policies') ? undefined : (json['policies'].map(_1.V2HPAScalingPolicyFromJSON)),
        'selectPolicy': !runtime_1.exists(json, 'selectPolicy') ? undefined : json['selectPolicy'],
        'stabilizationWindowSeconds': !runtime_1.exists(json, 'stabilizationWindowSeconds') ? undefined : json['stabilizationWindowSeconds'],
    };
}
exports.V2HPAScalingRulesFromJSONTyped = V2HPAScalingRulesFromJSONTyped;
function V2HPAScalingRulesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'policies': value.policies === undefined ? undefined : (value.policies.map(_1.V2HPAScalingPolicyToJSON)),
        'selectPolicy': value.selectPolicy,
        'stabilizationWindowSeconds': value.stabilizationWindowSeconds,
    };
}
exports.V2HPAScalingRulesToJSON = V2HPAScalingRulesToJSON;