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
exports.V1beta2LimitedPriorityLevelConfigurationToJSON = exports.V1beta2LimitedPriorityLevelConfigurationFromJSONTyped = exports.V1beta2LimitedPriorityLevelConfigurationFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1beta2LimitedPriorityLevelConfigurationFromJSON(json) {
    return V1beta2LimitedPriorityLevelConfigurationFromJSONTyped(json, false);
}
exports.V1beta2LimitedPriorityLevelConfigurationFromJSON = V1beta2LimitedPriorityLevelConfigurationFromJSON;
function V1beta2LimitedPriorityLevelConfigurationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'assuredConcurrencyShares': !runtime_1.exists(json, 'assuredConcurrencyShares') ? undefined : json['assuredConcurrencyShares'],
        'limitResponse': !runtime_1.exists(json, 'limitResponse') ? undefined : _1.V1beta2LimitResponseFromJSON(json['limitResponse']),
    };
}
exports.V1beta2LimitedPriorityLevelConfigurationFromJSONTyped = V1beta2LimitedPriorityLevelConfigurationFromJSONTyped;
function V1beta2LimitedPriorityLevelConfigurationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'assuredConcurrencyShares': value.assuredConcurrencyShares,
        'limitResponse': _1.V1beta2LimitResponseToJSON(value.limitResponse),
    };
}
exports.V1beta2LimitedPriorityLevelConfigurationToJSON = V1beta2LimitedPriorityLevelConfigurationToJSON;
