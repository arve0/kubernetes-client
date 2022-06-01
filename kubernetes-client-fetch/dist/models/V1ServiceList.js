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
exports.V1ServiceListToJSON = exports.V1ServiceListFromJSONTyped = exports.V1ServiceListFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1ServiceListFromJSON(json) {
    return V1ServiceListFromJSONTyped(json, false);
}
exports.V1ServiceListFromJSON = V1ServiceListFromJSON;
function V1ServiceListFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'apiVersion': !runtime_1.exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': (json['items'].map(_1.V1ServiceFromJSON)),
        'kind': !runtime_1.exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !runtime_1.exists(json, 'metadata') ? undefined : _1.V1ListMetaFromJSON(json['metadata']),
    };
}
exports.V1ServiceListFromJSONTyped = V1ServiceListFromJSONTyped;
function V1ServiceListToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'apiVersion': value.apiVersion,
        'items': (value.items.map(_1.V1ServiceToJSON)),
        'kind': value.kind,
        'metadata': _1.V1ListMetaToJSON(value.metadata),
    };
}
exports.V1ServiceListToJSON = V1ServiceListToJSON;
