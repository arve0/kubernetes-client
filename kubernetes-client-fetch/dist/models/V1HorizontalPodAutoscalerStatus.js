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
exports.V1HorizontalPodAutoscalerStatusToJSON = exports.V1HorizontalPodAutoscalerStatusFromJSONTyped = exports.V1HorizontalPodAutoscalerStatusFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1HorizontalPodAutoscalerStatusFromJSON(json) {
    return V1HorizontalPodAutoscalerStatusFromJSONTyped(json, false);
}
exports.V1HorizontalPodAutoscalerStatusFromJSON = V1HorizontalPodAutoscalerStatusFromJSON;
function V1HorizontalPodAutoscalerStatusFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'currentCPUUtilizationPercentage': !runtime_1.exists(json, 'currentCPUUtilizationPercentage') ? undefined : json['currentCPUUtilizationPercentage'],
        'currentReplicas': json['currentReplicas'],
        'desiredReplicas': json['desiredReplicas'],
        'lastScaleTime': !runtime_1.exists(json, 'lastScaleTime') ? undefined : (new Date(json['lastScaleTime'])),
        'observedGeneration': !runtime_1.exists(json, 'observedGeneration') ? undefined : json['observedGeneration'],
    };
}
exports.V1HorizontalPodAutoscalerStatusFromJSONTyped = V1HorizontalPodAutoscalerStatusFromJSONTyped;
function V1HorizontalPodAutoscalerStatusToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'currentCPUUtilizationPercentage': value.currentCPUUtilizationPercentage,
        'currentReplicas': value.currentReplicas,
        'desiredReplicas': value.desiredReplicas,
        'lastScaleTime': value.lastScaleTime === undefined ? undefined : (value.lastScaleTime.toISOString()),
        'observedGeneration': value.observedGeneration,
    };
}
exports.V1HorizontalPodAutoscalerStatusToJSON = V1HorizontalPodAutoscalerStatusToJSON;