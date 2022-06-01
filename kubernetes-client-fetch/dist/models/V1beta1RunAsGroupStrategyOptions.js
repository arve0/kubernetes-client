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
exports.V1beta1RunAsGroupStrategyOptionsToJSON = exports.V1beta1RunAsGroupStrategyOptionsFromJSONTyped = exports.V1beta1RunAsGroupStrategyOptionsFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1beta1RunAsGroupStrategyOptionsFromJSON(json) {
    return V1beta1RunAsGroupStrategyOptionsFromJSONTyped(json, false);
}
exports.V1beta1RunAsGroupStrategyOptionsFromJSON = V1beta1RunAsGroupStrategyOptionsFromJSON;
function V1beta1RunAsGroupStrategyOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'ranges': !runtime_1.exists(json, 'ranges') ? undefined : (json['ranges'].map(_1.V1beta1IDRangeFromJSON)),
        'rule': json['rule'],
    };
}
exports.V1beta1RunAsGroupStrategyOptionsFromJSONTyped = V1beta1RunAsGroupStrategyOptionsFromJSONTyped;
function V1beta1RunAsGroupStrategyOptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'ranges': value.ranges === undefined ? undefined : (value.ranges.map(_1.V1beta1IDRangeToJSON)),
        'rule': value.rule,
    };
}
exports.V1beta1RunAsGroupStrategyOptionsToJSON = V1beta1RunAsGroupStrategyOptionsToJSON;