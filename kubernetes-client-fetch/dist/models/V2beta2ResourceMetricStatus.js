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
exports.V2beta2ResourceMetricStatusToJSON = exports.V2beta2ResourceMetricStatusFromJSONTyped = exports.V2beta2ResourceMetricStatusFromJSON = void 0;
const _1 = require("./");
function V2beta2ResourceMetricStatusFromJSON(json) {
    return V2beta2ResourceMetricStatusFromJSONTyped(json, false);
}
exports.V2beta2ResourceMetricStatusFromJSON = V2beta2ResourceMetricStatusFromJSON;
function V2beta2ResourceMetricStatusFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'current': _1.V2beta2MetricValueStatusFromJSON(json['current']),
        'name': json['name'],
    };
}
exports.V2beta2ResourceMetricStatusFromJSONTyped = V2beta2ResourceMetricStatusFromJSONTyped;
function V2beta2ResourceMetricStatusToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'current': _1.V2beta2MetricValueStatusToJSON(value.current),
        'name': value.name,
    };
}
exports.V2beta2ResourceMetricStatusToJSON = V2beta2ResourceMetricStatusToJSON;
