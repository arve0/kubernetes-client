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
exports.V1NodeListToJSON = exports.V1NodeListFromJSONTyped = exports.V1NodeListFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1NodeListFromJSON(json) {
    return V1NodeListFromJSONTyped(json, false);
}
exports.V1NodeListFromJSON = V1NodeListFromJSON;
function V1NodeListFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'apiVersion': !runtime_1.exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': (json['items'].map(_1.V1NodeFromJSON)),
        'kind': !runtime_1.exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !runtime_1.exists(json, 'metadata') ? undefined : _1.V1ListMetaFromJSON(json['metadata']),
    };
}
exports.V1NodeListFromJSONTyped = V1NodeListFromJSONTyped;
function V1NodeListToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'apiVersion': value.apiVersion,
        'items': (value.items.map(_1.V1NodeToJSON)),
        'kind': value.kind,
        'metadata': _1.V1ListMetaToJSON(value.metadata),
    };
}
exports.V1NodeListToJSON = V1NodeListToJSON;
