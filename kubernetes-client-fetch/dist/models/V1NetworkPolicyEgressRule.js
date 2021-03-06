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
exports.V1NetworkPolicyEgressRuleToJSON = exports.V1NetworkPolicyEgressRuleFromJSONTyped = exports.V1NetworkPolicyEgressRuleFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1NetworkPolicyEgressRuleFromJSON(json) {
    return V1NetworkPolicyEgressRuleFromJSONTyped(json, false);
}
exports.V1NetworkPolicyEgressRuleFromJSON = V1NetworkPolicyEgressRuleFromJSON;
function V1NetworkPolicyEgressRuleFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'ports': !runtime_1.exists(json, 'ports') ? undefined : (json['ports'].map(_1.V1NetworkPolicyPortFromJSON)),
        'to': !runtime_1.exists(json, 'to') ? undefined : (json['to'].map(_1.V1NetworkPolicyPeerFromJSON)),
    };
}
exports.V1NetworkPolicyEgressRuleFromJSONTyped = V1NetworkPolicyEgressRuleFromJSONTyped;
function V1NetworkPolicyEgressRuleToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'ports': value.ports === undefined ? undefined : (value.ports.map(_1.V1NetworkPolicyPortToJSON)),
        'to': value.to === undefined ? undefined : (value.to.map(_1.V1NetworkPolicyPeerToJSON)),
    };
}
exports.V1NetworkPolicyEgressRuleToJSON = V1NetworkPolicyEgressRuleToJSON;
