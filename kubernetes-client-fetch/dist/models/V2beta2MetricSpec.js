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
exports.V2beta2MetricSpecToJSON = exports.V2beta2MetricSpecFromJSONTyped = exports.V2beta2MetricSpecFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V2beta2MetricSpecFromJSON(json) {
    return V2beta2MetricSpecFromJSONTyped(json, false);
}
exports.V2beta2MetricSpecFromJSON = V2beta2MetricSpecFromJSON;
function V2beta2MetricSpecFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'containerResource': !runtime_1.exists(json, 'containerResource') ? undefined : _1.V2beta2ContainerResourceMetricSourceFromJSON(json['containerResource']),
        'external': !runtime_1.exists(json, 'external') ? undefined : _1.V2beta2ExternalMetricSourceFromJSON(json['external']),
        'object': !runtime_1.exists(json, 'object') ? undefined : _1.V2beta2ObjectMetricSourceFromJSON(json['object']),
        'pods': !runtime_1.exists(json, 'pods') ? undefined : _1.V2beta2PodsMetricSourceFromJSON(json['pods']),
        'resource': !runtime_1.exists(json, 'resource') ? undefined : _1.V2beta2ResourceMetricSourceFromJSON(json['resource']),
        'type': json['type'],
    };
}
exports.V2beta2MetricSpecFromJSONTyped = V2beta2MetricSpecFromJSONTyped;
function V2beta2MetricSpecToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'containerResource': _1.V2beta2ContainerResourceMetricSourceToJSON(value.containerResource),
        'external': _1.V2beta2ExternalMetricSourceToJSON(value.external),
        'object': _1.V2beta2ObjectMetricSourceToJSON(value.object),
        'pods': _1.V2beta2PodsMetricSourceToJSON(value.pods),
        'resource': _1.V2beta2ResourceMetricSourceToJSON(value.resource),
        'type': value.type,
    };
}
exports.V2beta2MetricSpecToJSON = V2beta2MetricSpecToJSON;
