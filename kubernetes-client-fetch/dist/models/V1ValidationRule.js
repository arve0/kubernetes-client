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
exports.V1ValidationRuleToJSON = exports.V1ValidationRuleFromJSONTyped = exports.V1ValidationRuleFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1ValidationRuleFromJSON(json) {
    return V1ValidationRuleFromJSONTyped(json, false);
}
exports.V1ValidationRuleFromJSON = V1ValidationRuleFromJSON;
function V1ValidationRuleFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'message': !runtime_1.exists(json, 'message') ? undefined : json['message'],
        'rule': json['rule'],
    };
}
exports.V1ValidationRuleFromJSONTyped = V1ValidationRuleFromJSONTyped;
function V1ValidationRuleToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'message': value.message,
        'rule': value.rule,
    };
}
exports.V1ValidationRuleToJSON = V1ValidationRuleToJSON;