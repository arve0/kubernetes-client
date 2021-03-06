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
exports.V2beta1ExternalMetricStatusToJSON = exports.V2beta1ExternalMetricStatusFromJSONTyped = exports.V2beta1ExternalMetricStatusFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V2beta1ExternalMetricStatusFromJSON(json) {
    return V2beta1ExternalMetricStatusFromJSONTyped(json, false);
}
exports.V2beta1ExternalMetricStatusFromJSON = V2beta1ExternalMetricStatusFromJSON;
function V2beta1ExternalMetricStatusFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'currentAverageValue': !runtime_1.exists(json, 'currentAverageValue') ? undefined : json['currentAverageValue'],
        'currentValue': json['currentValue'],
        'metricName': json['metricName'],
        'metricSelector': !runtime_1.exists(json, 'metricSelector') ? undefined : _1.V1LabelSelectorFromJSON(json['metricSelector']),
    };
}
exports.V2beta1ExternalMetricStatusFromJSONTyped = V2beta1ExternalMetricStatusFromJSONTyped;
function V2beta1ExternalMetricStatusToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'currentAverageValue': value.currentAverageValue,
        'currentValue': value.currentValue,
        'metricName': value.metricName,
        'metricSelector': _1.V1LabelSelectorToJSON(value.metricSelector),
    };
}
exports.V2beta1ExternalMetricStatusToJSON = V2beta1ExternalMetricStatusToJSON;
