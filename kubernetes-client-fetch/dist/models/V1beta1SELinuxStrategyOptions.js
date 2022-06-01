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
exports.V1beta1SELinuxStrategyOptionsToJSON = exports.V1beta1SELinuxStrategyOptionsFromJSONTyped = exports.V1beta1SELinuxStrategyOptionsFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1beta1SELinuxStrategyOptionsFromJSON(json) {
    return V1beta1SELinuxStrategyOptionsFromJSONTyped(json, false);
}
exports.V1beta1SELinuxStrategyOptionsFromJSON = V1beta1SELinuxStrategyOptionsFromJSON;
function V1beta1SELinuxStrategyOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'rule': json['rule'],
        'seLinuxOptions': !runtime_1.exists(json, 'seLinuxOptions') ? undefined : _1.V1SELinuxOptionsFromJSON(json['seLinuxOptions']),
    };
}
exports.V1beta1SELinuxStrategyOptionsFromJSONTyped = V1beta1SELinuxStrategyOptionsFromJSONTyped;
function V1beta1SELinuxStrategyOptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'rule': value.rule,
        'seLinuxOptions': _1.V1SELinuxOptionsToJSON(value.seLinuxOptions),
    };
}
exports.V1beta1SELinuxStrategyOptionsToJSON = V1beta1SELinuxStrategyOptionsToJSON;
