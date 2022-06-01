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
exports.V1ReplicaSetConditionToJSON = exports.V1ReplicaSetConditionFromJSONTyped = exports.V1ReplicaSetConditionFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1ReplicaSetConditionFromJSON(json) {
    return V1ReplicaSetConditionFromJSONTyped(json, false);
}
exports.V1ReplicaSetConditionFromJSON = V1ReplicaSetConditionFromJSON;
function V1ReplicaSetConditionFromJSONTyped(json, ignoreDiscriminator) {
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
exports.V1ReplicaSetConditionFromJSONTyped = V1ReplicaSetConditionFromJSONTyped;
function V1ReplicaSetConditionToJSON(value) {
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
exports.V1ReplicaSetConditionToJSON = V1ReplicaSetConditionToJSON;