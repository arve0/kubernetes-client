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
exports.V1ResourceQuotaToJSON = exports.V1ResourceQuotaFromJSONTyped = exports.V1ResourceQuotaFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1ResourceQuotaFromJSON(json) {
    return V1ResourceQuotaFromJSONTyped(json, false);
}
exports.V1ResourceQuotaFromJSON = V1ResourceQuotaFromJSON;
function V1ResourceQuotaFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'apiVersion': !runtime_1.exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !runtime_1.exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !runtime_1.exists(json, 'metadata') ? undefined : _1.V1ObjectMetaFromJSON(json['metadata']),
        'spec': !runtime_1.exists(json, 'spec') ? undefined : _1.V1ResourceQuotaSpecFromJSON(json['spec']),
        'status': !runtime_1.exists(json, 'status') ? undefined : _1.V1ResourceQuotaStatusFromJSON(json['status']),
    };
}
exports.V1ResourceQuotaFromJSONTyped = V1ResourceQuotaFromJSONTyped;
function V1ResourceQuotaToJSON(value) {
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
        'spec': _1.V1ResourceQuotaSpecToJSON(value.spec),
        'status': _1.V1ResourceQuotaStatusToJSON(value.status),
    };
}
exports.V1ResourceQuotaToJSON = V1ResourceQuotaToJSON;
