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
exports.V1DaemonSetStatusToJSON = exports.V1DaemonSetStatusFromJSONTyped = exports.V1DaemonSetStatusFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1DaemonSetStatusFromJSON(json) {
    return V1DaemonSetStatusFromJSONTyped(json, false);
}
exports.V1DaemonSetStatusFromJSON = V1DaemonSetStatusFromJSON;
function V1DaemonSetStatusFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'collisionCount': !runtime_1.exists(json, 'collisionCount') ? undefined : json['collisionCount'],
        'conditions': !runtime_1.exists(json, 'conditions') ? undefined : (json['conditions'].map(_1.V1DaemonSetConditionFromJSON)),
        'currentNumberScheduled': json['currentNumberScheduled'],
        'desiredNumberScheduled': json['desiredNumberScheduled'],
        'numberAvailable': !runtime_1.exists(json, 'numberAvailable') ? undefined : json['numberAvailable'],
        'numberMisscheduled': json['numberMisscheduled'],
        'numberReady': json['numberReady'],
        'numberUnavailable': !runtime_1.exists(json, 'numberUnavailable') ? undefined : json['numberUnavailable'],
        'observedGeneration': !runtime_1.exists(json, 'observedGeneration') ? undefined : json['observedGeneration'],
        'updatedNumberScheduled': !runtime_1.exists(json, 'updatedNumberScheduled') ? undefined : json['updatedNumberScheduled'],
    };
}
exports.V1DaemonSetStatusFromJSONTyped = V1DaemonSetStatusFromJSONTyped;
function V1DaemonSetStatusToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'collisionCount': value.collisionCount,
        'conditions': value.conditions === undefined ? undefined : (value.conditions.map(_1.V1DaemonSetConditionToJSON)),
        'currentNumberScheduled': value.currentNumberScheduled,
        'desiredNumberScheduled': value.desiredNumberScheduled,
        'numberAvailable': value.numberAvailable,
        'numberMisscheduled': value.numberMisscheduled,
        'numberReady': value.numberReady,
        'numberUnavailable': value.numberUnavailable,
        'observedGeneration': value.observedGeneration,
        'updatedNumberScheduled': value.updatedNumberScheduled,
    };
}
exports.V1DaemonSetStatusToJSON = V1DaemonSetStatusToJSON;
