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
exports.V1CSINodeToJSON = exports.V1CSINodeFromJSONTyped = exports.V1CSINodeFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1CSINodeFromJSON(json) {
    return V1CSINodeFromJSONTyped(json, false);
}
exports.V1CSINodeFromJSON = V1CSINodeFromJSON;
function V1CSINodeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'apiVersion': !runtime_1.exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !runtime_1.exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !runtime_1.exists(json, 'metadata') ? undefined : _1.V1ObjectMetaFromJSON(json['metadata']),
        'spec': _1.V1CSINodeSpecFromJSON(json['spec']),
    };
}
exports.V1CSINodeFromJSONTyped = V1CSINodeFromJSONTyped;
function V1CSINodeToJSON(value) {
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
        'spec': _1.V1CSINodeSpecToJSON(value.spec),
    };
}
exports.V1CSINodeToJSON = V1CSINodeToJSON;
