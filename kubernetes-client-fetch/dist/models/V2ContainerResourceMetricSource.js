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
exports.V2ContainerResourceMetricSourceToJSON = exports.V2ContainerResourceMetricSourceFromJSONTyped = exports.V2ContainerResourceMetricSourceFromJSON = void 0;
const _1 = require("./");
function V2ContainerResourceMetricSourceFromJSON(json) {
    return V2ContainerResourceMetricSourceFromJSONTyped(json, false);
}
exports.V2ContainerResourceMetricSourceFromJSON = V2ContainerResourceMetricSourceFromJSON;
function V2ContainerResourceMetricSourceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'container': json['container'],
        'name': json['name'],
        'target': _1.V2MetricTargetFromJSON(json['target']),
    };
}
exports.V2ContainerResourceMetricSourceFromJSONTyped = V2ContainerResourceMetricSourceFromJSONTyped;
function V2ContainerResourceMetricSourceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'container': value.container,
        'name': value.name,
        'target': _1.V2MetricTargetToJSON(value.target),
    };
}
exports.V2ContainerResourceMetricSourceToJSON = V2ContainerResourceMetricSourceToJSON;