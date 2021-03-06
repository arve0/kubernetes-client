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
exports.V1AggregationRuleToJSON = exports.V1AggregationRuleFromJSONTyped = exports.V1AggregationRuleFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1AggregationRuleFromJSON(json) {
    return V1AggregationRuleFromJSONTyped(json, false);
}
exports.V1AggregationRuleFromJSON = V1AggregationRuleFromJSON;
function V1AggregationRuleFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'clusterRoleSelectors': !runtime_1.exists(json, 'clusterRoleSelectors') ? undefined : (json['clusterRoleSelectors'].map(_1.V1LabelSelectorFromJSON)),
    };
}
exports.V1AggregationRuleFromJSONTyped = V1AggregationRuleFromJSONTyped;
function V1AggregationRuleToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'clusterRoleSelectors': value.clusterRoleSelectors === undefined ? undefined : (value.clusterRoleSelectors.map(_1.V1LabelSelectorToJSON)),
    };
}
exports.V1AggregationRuleToJSON = V1AggregationRuleToJSON;
