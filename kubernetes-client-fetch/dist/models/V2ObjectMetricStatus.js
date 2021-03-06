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
exports.V2ObjectMetricStatusToJSON = exports.V2ObjectMetricStatusFromJSONTyped = exports.V2ObjectMetricStatusFromJSON = void 0;
const _1 = require("./");
function V2ObjectMetricStatusFromJSON(json) {
    return V2ObjectMetricStatusFromJSONTyped(json, false);
}
exports.V2ObjectMetricStatusFromJSON = V2ObjectMetricStatusFromJSON;
function V2ObjectMetricStatusFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'current': _1.V2MetricValueStatusFromJSON(json['current']),
        'describedObject': _1.V2CrossVersionObjectReferenceFromJSON(json['describedObject']),
        'metric': _1.V2MetricIdentifierFromJSON(json['metric']),
    };
}
exports.V2ObjectMetricStatusFromJSONTyped = V2ObjectMetricStatusFromJSONTyped;
function V2ObjectMetricStatusToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'current': _1.V2MetricValueStatusToJSON(value.current),
        'describedObject': _1.V2CrossVersionObjectReferenceToJSON(value.describedObject),
        'metric': _1.V2MetricIdentifierToJSON(value.metric),
    };
}
exports.V2ObjectMetricStatusToJSON = V2ObjectMetricStatusToJSON;
