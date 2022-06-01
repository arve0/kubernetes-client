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
exports.V2beta1ContainerResourceMetricSourceToJSON = exports.V2beta1ContainerResourceMetricSourceFromJSONTyped = exports.V2beta1ContainerResourceMetricSourceFromJSON = void 0;
const runtime_1 = require("../runtime");
function V2beta1ContainerResourceMetricSourceFromJSON(json) {
    return V2beta1ContainerResourceMetricSourceFromJSONTyped(json, false);
}
exports.V2beta1ContainerResourceMetricSourceFromJSON = V2beta1ContainerResourceMetricSourceFromJSON;
function V2beta1ContainerResourceMetricSourceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'container': json['container'],
        'name': json['name'],
        'targetAverageUtilization': !runtime_1.exists(json, 'targetAverageUtilization') ? undefined : json['targetAverageUtilization'],
        'targetAverageValue': !runtime_1.exists(json, 'targetAverageValue') ? undefined : json['targetAverageValue'],
    };
}
exports.V2beta1ContainerResourceMetricSourceFromJSONTyped = V2beta1ContainerResourceMetricSourceFromJSONTyped;
function V2beta1ContainerResourceMetricSourceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'container': value.container,
        'name': value.name,
        'targetAverageUtilization': value.targetAverageUtilization,
        'targetAverageValue': value.targetAverageValue,
    };
}
exports.V2beta1ContainerResourceMetricSourceToJSON = V2beta1ContainerResourceMetricSourceToJSON;
