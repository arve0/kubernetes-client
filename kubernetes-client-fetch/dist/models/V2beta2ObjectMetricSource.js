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
exports.V2beta2ObjectMetricSourceToJSON = exports.V2beta2ObjectMetricSourceFromJSONTyped = exports.V2beta2ObjectMetricSourceFromJSON = void 0;
const _1 = require("./");
function V2beta2ObjectMetricSourceFromJSON(json) {
    return V2beta2ObjectMetricSourceFromJSONTyped(json, false);
}
exports.V2beta2ObjectMetricSourceFromJSON = V2beta2ObjectMetricSourceFromJSON;
function V2beta2ObjectMetricSourceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'describedObject': _1.V2beta2CrossVersionObjectReferenceFromJSON(json['describedObject']),
        'metric': _1.V2beta2MetricIdentifierFromJSON(json['metric']),
        'target': _1.V2beta2MetricTargetFromJSON(json['target']),
    };
}
exports.V2beta2ObjectMetricSourceFromJSONTyped = V2beta2ObjectMetricSourceFromJSONTyped;
function V2beta2ObjectMetricSourceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'describedObject': _1.V2beta2CrossVersionObjectReferenceToJSON(value.describedObject),
        'metric': _1.V2beta2MetricIdentifierToJSON(value.metric),
        'target': _1.V2beta2MetricTargetToJSON(value.target),
    };
}
exports.V2beta2ObjectMetricSourceToJSON = V2beta2ObjectMetricSourceToJSON;
