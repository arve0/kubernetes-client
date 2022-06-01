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
exports.V1beta1PriorityLevelConfigurationToJSON = exports.V1beta1PriorityLevelConfigurationFromJSONTyped = exports.V1beta1PriorityLevelConfigurationFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1beta1PriorityLevelConfigurationFromJSON(json) {
    return V1beta1PriorityLevelConfigurationFromJSONTyped(json, false);
}
exports.V1beta1PriorityLevelConfigurationFromJSON = V1beta1PriorityLevelConfigurationFromJSON;
function V1beta1PriorityLevelConfigurationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'apiVersion': !runtime_1.exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !runtime_1.exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !runtime_1.exists(json, 'metadata') ? undefined : _1.V1ObjectMetaFromJSON(json['metadata']),
        'spec': !runtime_1.exists(json, 'spec') ? undefined : _1.V1beta1PriorityLevelConfigurationSpecFromJSON(json['spec']),
        'status': !runtime_1.exists(json, 'status') ? undefined : _1.V1beta1PriorityLevelConfigurationStatusFromJSON(json['status']),
    };
}
exports.V1beta1PriorityLevelConfigurationFromJSONTyped = V1beta1PriorityLevelConfigurationFromJSONTyped;
function V1beta1PriorityLevelConfigurationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': _1.V1ObjectMetaToJSON(value.metadata),
        'spec': _1.V1beta1PriorityLevelConfigurationSpecToJSON(value.spec),
        'status': _1.V1beta1PriorityLevelConfigurationStatusToJSON(value.status),
    };
}
exports.V1beta1PriorityLevelConfigurationToJSON = V1beta1PriorityLevelConfigurationToJSON;