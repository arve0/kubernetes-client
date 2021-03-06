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
exports.V2HorizontalPodAutoscalerConditionToJSON = exports.V2HorizontalPodAutoscalerConditionFromJSONTyped = exports.V2HorizontalPodAutoscalerConditionFromJSON = void 0;
const runtime_1 = require("../runtime");
function V2HorizontalPodAutoscalerConditionFromJSON(json) {
    return V2HorizontalPodAutoscalerConditionFromJSONTyped(json, false);
}
exports.V2HorizontalPodAutoscalerConditionFromJSON = V2HorizontalPodAutoscalerConditionFromJSON;
function V2HorizontalPodAutoscalerConditionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'lastTransitionTime': !runtime_1.exists(json, 'lastTransitionTime') ? undefined : (new Date(json['lastTransitionTime'])),
        'message': !runtime_1.exists(json, 'message') ? undefined : json['message'],
        'reason': !runtime_1.exists(json, 'reason') ? undefined : json['reason'],
        'status': json['status'],
        'type': json['type'],
    };
}
exports.V2HorizontalPodAutoscalerConditionFromJSONTyped = V2HorizontalPodAutoscalerConditionFromJSONTyped;
function V2HorizontalPodAutoscalerConditionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'lastTransitionTime': value.lastTransitionTime === undefined ? undefined : (value.lastTransitionTime.toISOString()),
        'message': value.message,
        'reason': value.reason,
        'status': value.status,
        'type': value.type,
    };
}
exports.V2HorizontalPodAutoscalerConditionToJSON = V2HorizontalPodAutoscalerConditionToJSON;
