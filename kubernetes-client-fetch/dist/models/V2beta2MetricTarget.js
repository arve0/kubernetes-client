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
exports.V2beta2MetricTargetToJSON = exports.V2beta2MetricTargetFromJSONTyped = exports.V2beta2MetricTargetFromJSON = void 0;
const runtime_1 = require("../runtime");
function V2beta2MetricTargetFromJSON(json) {
    return V2beta2MetricTargetFromJSONTyped(json, false);
}
exports.V2beta2MetricTargetFromJSON = V2beta2MetricTargetFromJSON;
function V2beta2MetricTargetFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'averageUtilization': !runtime_1.exists(json, 'averageUtilization') ? undefined : json['averageUtilization'],
        'averageValue': !runtime_1.exists(json, 'averageValue') ? undefined : json['averageValue'],
        'type': json['type'],
        'value': !runtime_1.exists(json, 'value') ? undefined : json['value'],
    };
}
exports.V2beta2MetricTargetFromJSONTyped = V2beta2MetricTargetFromJSONTyped;
function V2beta2MetricTargetToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'averageUtilization': value.averageUtilization,
        'averageValue': value.averageValue,
        'type': value.type,
        'value': value.value,
    };
}
exports.V2beta2MetricTargetToJSON = V2beta2MetricTargetToJSON;
