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
exports.V2beta1PodsMetricSourceToJSON = exports.V2beta1PodsMetricSourceFromJSONTyped = exports.V2beta1PodsMetricSourceFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V2beta1PodsMetricSourceFromJSON(json) {
    return V2beta1PodsMetricSourceFromJSONTyped(json, false);
}
exports.V2beta1PodsMetricSourceFromJSON = V2beta1PodsMetricSourceFromJSON;
function V2beta1PodsMetricSourceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'metricName': json['metricName'],
        'selector': !runtime_1.exists(json, 'selector') ? undefined : _1.V1LabelSelectorFromJSON(json['selector']),
        'targetAverageValue': json['targetAverageValue'],
    };
}
exports.V2beta1PodsMetricSourceFromJSONTyped = V2beta1PodsMetricSourceFromJSONTyped;
function V2beta1PodsMetricSourceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'metricName': value.metricName,
        'selector': _1.V1LabelSelectorToJSON(value.selector),
        'targetAverageValue': value.targetAverageValue,
    };
}
exports.V2beta1PodsMetricSourceToJSON = V2beta1PodsMetricSourceToJSON;