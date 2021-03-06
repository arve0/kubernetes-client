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
exports.V2beta2HorizontalPodAutoscalerSpecToJSON = exports.V2beta2HorizontalPodAutoscalerSpecFromJSONTyped = exports.V2beta2HorizontalPodAutoscalerSpecFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V2beta2HorizontalPodAutoscalerSpecFromJSON(json) {
    return V2beta2HorizontalPodAutoscalerSpecFromJSONTyped(json, false);
}
exports.V2beta2HorizontalPodAutoscalerSpecFromJSON = V2beta2HorizontalPodAutoscalerSpecFromJSON;
function V2beta2HorizontalPodAutoscalerSpecFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'behavior': !runtime_1.exists(json, 'behavior') ? undefined : _1.V2beta2HorizontalPodAutoscalerBehaviorFromJSON(json['behavior']),
        'maxReplicas': json['maxReplicas'],
        'metrics': !runtime_1.exists(json, 'metrics') ? undefined : (json['metrics'].map(_1.V2beta2MetricSpecFromJSON)),
        'minReplicas': !runtime_1.exists(json, 'minReplicas') ? undefined : json['minReplicas'],
        'scaleTargetRef': _1.V2beta2CrossVersionObjectReferenceFromJSON(json['scaleTargetRef']),
    };
}
exports.V2beta2HorizontalPodAutoscalerSpecFromJSONTyped = V2beta2HorizontalPodAutoscalerSpecFromJSONTyped;
function V2beta2HorizontalPodAutoscalerSpecToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'behavior': _1.V2beta2HorizontalPodAutoscalerBehaviorToJSON(value.behavior),
        'maxReplicas': value.maxReplicas,
        'metrics': value.metrics === undefined ? undefined : (value.metrics.map(_1.V2beta2MetricSpecToJSON)),
        'minReplicas': value.minReplicas,
        'scaleTargetRef': _1.V2beta2CrossVersionObjectReferenceToJSON(value.scaleTargetRef),
    };
}
exports.V2beta2HorizontalPodAutoscalerSpecToJSON = V2beta2HorizontalPodAutoscalerSpecToJSON;
