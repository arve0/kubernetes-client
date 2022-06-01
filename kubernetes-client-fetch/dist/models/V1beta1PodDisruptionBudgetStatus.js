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
exports.V1beta1PodDisruptionBudgetStatusToJSON = exports.V1beta1PodDisruptionBudgetStatusFromJSONTyped = exports.V1beta1PodDisruptionBudgetStatusFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1beta1PodDisruptionBudgetStatusFromJSON(json) {
    return V1beta1PodDisruptionBudgetStatusFromJSONTyped(json, false);
}
exports.V1beta1PodDisruptionBudgetStatusFromJSON = V1beta1PodDisruptionBudgetStatusFromJSON;
function V1beta1PodDisruptionBudgetStatusFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'conditions': !runtime_1.exists(json, 'conditions') ? undefined : (json['conditions'].map(_1.V1ConditionFromJSON)),
        'currentHealthy': json['currentHealthy'],
        'desiredHealthy': json['desiredHealthy'],
        'disruptedPods': !runtime_1.exists(json, 'disruptedPods') ? undefined : json['disruptedPods'],
        'disruptionsAllowed': json['disruptionsAllowed'],
        'expectedPods': json['expectedPods'],
        'observedGeneration': !runtime_1.exists(json, 'observedGeneration') ? undefined : json['observedGeneration'],
    };
}
exports.V1beta1PodDisruptionBudgetStatusFromJSONTyped = V1beta1PodDisruptionBudgetStatusFromJSONTyped;
function V1beta1PodDisruptionBudgetStatusToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'conditions': value.conditions === undefined ? undefined : (value.conditions.map(_1.V1ConditionToJSON)),
        'currentHealthy': value.currentHealthy,
        'desiredHealthy': value.desiredHealthy,
        'disruptedPods': value.disruptedPods,
        'disruptionsAllowed': value.disruptionsAllowed,
        'expectedPods': value.expectedPods,
        'observedGeneration': value.observedGeneration,
    };
}
exports.V1beta1PodDisruptionBudgetStatusToJSON = V1beta1PodDisruptionBudgetStatusToJSON;
