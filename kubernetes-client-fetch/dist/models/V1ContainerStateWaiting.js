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
exports.V1ContainerStateWaitingToJSON = exports.V1ContainerStateWaitingFromJSONTyped = exports.V1ContainerStateWaitingFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1ContainerStateWaitingFromJSON(json) {
    return V1ContainerStateWaitingFromJSONTyped(json, false);
}
exports.V1ContainerStateWaitingFromJSON = V1ContainerStateWaitingFromJSON;
function V1ContainerStateWaitingFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'message': !runtime_1.exists(json, 'message') ? undefined : json['message'],
        'reason': !runtime_1.exists(json, 'reason') ? undefined : json['reason'],
    };
}
exports.V1ContainerStateWaitingFromJSONTyped = V1ContainerStateWaitingFromJSONTyped;
function V1ContainerStateWaitingToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'message': value.message,
        'reason': value.reason,
    };
}
exports.V1ContainerStateWaitingToJSON = V1ContainerStateWaitingToJSON;