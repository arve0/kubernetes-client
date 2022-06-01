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
exports.V2beta1ResourceMetricSourceToJSON = exports.V2beta1ResourceMetricSourceFromJSONTyped = exports.V2beta1ResourceMetricSourceFromJSON = void 0;
const runtime_1 = require("../runtime");
function V2beta1ResourceMetricSourceFromJSON(json) {
    return V2beta1ResourceMetricSourceFromJSONTyped(json, false);
}
exports.V2beta1ResourceMetricSourceFromJSON = V2beta1ResourceMetricSourceFromJSON;
function V2beta1ResourceMetricSourceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'targetAverageUtilization': !runtime_1.exists(json, 'targetAverageUtilization') ? undefined : json['targetAverageUtilization'],
        'targetAverageValue': !runtime_1.exists(json, 'targetAverageValue') ? undefined : json['targetAverageValue'],
    };
}
exports.V2beta1ResourceMetricSourceFromJSONTyped = V2beta1ResourceMetricSourceFromJSONTyped;
function V2beta1ResourceMetricSourceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'targetAverageUtilization': value.targetAverageUtilization,
        'targetAverageValue': value.targetAverageValue,
    };
}
exports.V2beta1ResourceMetricSourceToJSON = V2beta1ResourceMetricSourceToJSON;