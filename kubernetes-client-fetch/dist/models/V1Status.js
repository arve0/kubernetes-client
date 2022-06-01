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
exports.V1StatusToJSON = exports.V1StatusFromJSONTyped = exports.V1StatusFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1StatusFromJSON(json) {
    return V1StatusFromJSONTyped(json, false);
}
exports.V1StatusFromJSON = V1StatusFromJSON;
function V1StatusFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'apiVersion': !runtime_1.exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'code': !runtime_1.exists(json, 'code') ? undefined : json['code'],
        'details': !runtime_1.exists(json, 'details') ? undefined : _1.V1StatusDetailsFromJSON(json['details']),
        'kind': !runtime_1.exists(json, 'kind') ? undefined : json['kind'],
        'message': !runtime_1.exists(json, 'message') ? undefined : json['message'],
        'metadata': !runtime_1.exists(json, 'metadata') ? undefined : _1.V1ListMetaFromJSON(json['metadata']),
        'reason': !runtime_1.exists(json, 'reason') ? undefined : json['reason'],
        'status': !runtime_1.exists(json, 'status') ? undefined : json['status'],
    };
}
exports.V1StatusFromJSONTyped = V1StatusFromJSONTyped;
function V1StatusToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'apiVersion': value.apiVersion,
        'code': value.code,
        'details': _1.V1StatusDetailsToJSON(value.details),
        'kind': value.kind,
        'message': value.message,
        'metadata': _1.V1ListMetaToJSON(value.metadata),
        'reason': value.reason,
        'status': value.status,
    };
}
exports.V1StatusToJSON = V1StatusToJSON;
