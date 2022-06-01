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
exports.V1EndpointsToJSON = exports.V1EndpointsFromJSONTyped = exports.V1EndpointsFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1EndpointsFromJSON(json) {
    return V1EndpointsFromJSONTyped(json, false);
}
exports.V1EndpointsFromJSON = V1EndpointsFromJSON;
function V1EndpointsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'apiVersion': !runtime_1.exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !runtime_1.exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !runtime_1.exists(json, 'metadata') ? undefined : _1.V1ObjectMetaFromJSON(json['metadata']),
        'subsets': !runtime_1.exists(json, 'subsets') ? undefined : (json['subsets'].map(_1.V1EndpointSubsetFromJSON)),
    };
}
exports.V1EndpointsFromJSONTyped = V1EndpointsFromJSONTyped;
function V1EndpointsToJSON(value) {
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
        'subsets': value.subsets === undefined ? undefined : (value.subsets.map(_1.V1EndpointSubsetToJSON)),
    };
}
exports.V1EndpointsToJSON = V1EndpointsToJSON;
