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
exports.V2beta2ExternalMetricStatusToJSON = exports.V2beta2ExternalMetricStatusFromJSONTyped = exports.V2beta2ExternalMetricStatusFromJSON = void 0;
const _1 = require("./");
function V2beta2ExternalMetricStatusFromJSON(json) {
    return V2beta2ExternalMetricStatusFromJSONTyped(json, false);
}
exports.V2beta2ExternalMetricStatusFromJSON = V2beta2ExternalMetricStatusFromJSON;
function V2beta2ExternalMetricStatusFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'current': _1.V2beta2MetricValueStatusFromJSON(json['current']),
        'metric': _1.V2beta2MetricIdentifierFromJSON(json['metric']),
    };
}
exports.V2beta2ExternalMetricStatusFromJSONTyped = V2beta2ExternalMetricStatusFromJSONTyped;
function V2beta2ExternalMetricStatusToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'current': _1.V2beta2MetricValueStatusToJSON(value.current),
        'metric': _1.V2beta2MetricIdentifierToJSON(value.metric),
    };
}
exports.V2beta2ExternalMetricStatusToJSON = V2beta2ExternalMetricStatusToJSON;
