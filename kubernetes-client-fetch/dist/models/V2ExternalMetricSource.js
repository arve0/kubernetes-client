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
exports.V2ExternalMetricSourceToJSON = exports.V2ExternalMetricSourceFromJSONTyped = exports.V2ExternalMetricSourceFromJSON = void 0;
const _1 = require("./");
function V2ExternalMetricSourceFromJSON(json) {
    return V2ExternalMetricSourceFromJSONTyped(json, false);
}
exports.V2ExternalMetricSourceFromJSON = V2ExternalMetricSourceFromJSON;
function V2ExternalMetricSourceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'metric': _1.V2MetricIdentifierFromJSON(json['metric']),
        'target': _1.V2MetricTargetFromJSON(json['target']),
    };
}
exports.V2ExternalMetricSourceFromJSONTyped = V2ExternalMetricSourceFromJSONTyped;
function V2ExternalMetricSourceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'metric': _1.V2MetricIdentifierToJSON(value.metric),
        'target': _1.V2MetricTargetToJSON(value.target),
    };
}
exports.V2ExternalMetricSourceToJSON = V2ExternalMetricSourceToJSON;