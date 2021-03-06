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
exports.V1IngressRuleToJSON = exports.V1IngressRuleFromJSONTyped = exports.V1IngressRuleFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1IngressRuleFromJSON(json) {
    return V1IngressRuleFromJSONTyped(json, false);
}
exports.V1IngressRuleFromJSON = V1IngressRuleFromJSON;
function V1IngressRuleFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'host': !runtime_1.exists(json, 'host') ? undefined : json['host'],
        'http': !runtime_1.exists(json, 'http') ? undefined : _1.V1HTTPIngressRuleValueFromJSON(json['http']),
    };
}
exports.V1IngressRuleFromJSONTyped = V1IngressRuleFromJSONTyped;
function V1IngressRuleToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'host': value.host,
        'http': _1.V1HTTPIngressRuleValueToJSON(value.http),
    };
}
exports.V1IngressRuleToJSON = V1IngressRuleToJSON;
