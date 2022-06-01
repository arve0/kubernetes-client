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
exports.V2beta2ContainerResourceMetricStatusToJSON = exports.V2beta2ContainerResourceMetricStatusFromJSONTyped = exports.V2beta2ContainerResourceMetricStatusFromJSON = void 0;
const _1 = require("./");
function V2beta2ContainerResourceMetricStatusFromJSON(json) {
    return V2beta2ContainerResourceMetricStatusFromJSONTyped(json, false);
}
exports.V2beta2ContainerResourceMetricStatusFromJSON = V2beta2ContainerResourceMetricStatusFromJSON;
function V2beta2ContainerResourceMetricStatusFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'container': json['container'],
        'current': _1.V2beta2MetricValueStatusFromJSON(json['current']),
        'name': json['name'],
    };
}
exports.V2beta2ContainerResourceMetricStatusFromJSONTyped = V2beta2ContainerResourceMetricStatusFromJSONTyped;
function V2beta2ContainerResourceMetricStatusToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'container': value.container,
        'current': _1.V2beta2MetricValueStatusToJSON(value.current),
        'name': value.name,
    };
}
exports.V2beta2ContainerResourceMetricStatusToJSON = V2beta2ContainerResourceMetricStatusToJSON;
