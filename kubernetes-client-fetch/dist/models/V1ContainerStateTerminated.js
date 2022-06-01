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
exports.V1ContainerStateTerminatedToJSON = exports.V1ContainerStateTerminatedFromJSONTyped = exports.V1ContainerStateTerminatedFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1ContainerStateTerminatedFromJSON(json) {
    return V1ContainerStateTerminatedFromJSONTyped(json, false);
}
exports.V1ContainerStateTerminatedFromJSON = V1ContainerStateTerminatedFromJSON;
function V1ContainerStateTerminatedFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'containerID': !runtime_1.exists(json, 'containerID') ? undefined : json['containerID'],
        'exitCode': json['exitCode'],
        'finishedAt': !runtime_1.exists(json, 'finishedAt') ? undefined : (new Date(json['finishedAt'])),
        'message': !runtime_1.exists(json, 'message') ? undefined : json['message'],
        'reason': !runtime_1.exists(json, 'reason') ? undefined : json['reason'],
        'signal': !runtime_1.exists(json, 'signal') ? undefined : json['signal'],
        'startedAt': !runtime_1.exists(json, 'startedAt') ? undefined : (new Date(json['startedAt'])),
    };
}
exports.V1ContainerStateTerminatedFromJSONTyped = V1ContainerStateTerminatedFromJSONTyped;
function V1ContainerStateTerminatedToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'containerID': value.containerID,
        'exitCode': value.exitCode,
        'finishedAt': value.finishedAt === undefined ? undefined : (value.finishedAt.toISOString()),
        'message': value.message,
        'reason': value.reason,
        'signal': value.signal,
        'startedAt': value.startedAt === undefined ? undefined : (value.startedAt.toISOString()),
    };
}
exports.V1ContainerStateTerminatedToJSON = V1ContainerStateTerminatedToJSON;