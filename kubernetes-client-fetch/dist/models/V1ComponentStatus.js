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
exports.V1ComponentStatusToJSON = exports.V1ComponentStatusFromJSONTyped = exports.V1ComponentStatusFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1ComponentStatusFromJSON(json) {
    return V1ComponentStatusFromJSONTyped(json, false);
}
exports.V1ComponentStatusFromJSON = V1ComponentStatusFromJSON;
function V1ComponentStatusFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'apiVersion': !runtime_1.exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'conditions': !runtime_1.exists(json, 'conditions') ? undefined : (json['conditions'].map(_1.V1ComponentConditionFromJSON)),
        'kind': !runtime_1.exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !runtime_1.exists(json, 'metadata') ? undefined : _1.V1ObjectMetaFromJSON(json['metadata']),
    };
}
exports.V1ComponentStatusFromJSONTyped = V1ComponentStatusFromJSONTyped;
function V1ComponentStatusToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'apiVersion': value.apiVersion,
        'conditions': value.conditions === undefined ? undefined : (value.conditions.map(_1.V1ComponentConditionToJSON)),
        'kind': value.kind,
        'metadata': _1.V1ObjectMetaToJSON(value.metadata),
    };
}
exports.V1ComponentStatusToJSON = V1ComponentStatusToJSON;