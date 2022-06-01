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
exports.V1LimitRangeToJSON = exports.V1LimitRangeFromJSONTyped = exports.V1LimitRangeFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1LimitRangeFromJSON(json) {
    return V1LimitRangeFromJSONTyped(json, false);
}
exports.V1LimitRangeFromJSON = V1LimitRangeFromJSON;
function V1LimitRangeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'apiVersion': !runtime_1.exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !runtime_1.exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !runtime_1.exists(json, 'metadata') ? undefined : _1.V1ObjectMetaFromJSON(json['metadata']),
        'spec': !runtime_1.exists(json, 'spec') ? undefined : _1.V1LimitRangeSpecFromJSON(json['spec']),
    };
}
exports.V1LimitRangeFromJSONTyped = V1LimitRangeFromJSONTyped;
function V1LimitRangeToJSON(value) {
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
        'spec': _1.V1LimitRangeSpecToJSON(value.spec),
    };
}
exports.V1LimitRangeToJSON = V1LimitRangeToJSON;
