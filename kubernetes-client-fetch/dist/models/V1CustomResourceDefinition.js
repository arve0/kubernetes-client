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
exports.V1CustomResourceDefinitionToJSON = exports.V1CustomResourceDefinitionFromJSONTyped = exports.V1CustomResourceDefinitionFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1CustomResourceDefinitionFromJSON(json) {
    return V1CustomResourceDefinitionFromJSONTyped(json, false);
}
exports.V1CustomResourceDefinitionFromJSON = V1CustomResourceDefinitionFromJSON;
function V1CustomResourceDefinitionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'apiVersion': !runtime_1.exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !runtime_1.exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !runtime_1.exists(json, 'metadata') ? undefined : _1.V1ObjectMetaFromJSON(json['metadata']),
        'spec': _1.V1CustomResourceDefinitionSpecFromJSON(json['spec']),
        'status': !runtime_1.exists(json, 'status') ? undefined : _1.V1CustomResourceDefinitionStatusFromJSON(json['status']),
    };
}
exports.V1CustomResourceDefinitionFromJSONTyped = V1CustomResourceDefinitionFromJSONTyped;
function V1CustomResourceDefinitionToJSON(value) {
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
        'spec': _1.V1CustomResourceDefinitionSpecToJSON(value.spec),
        'status': _1.V1CustomResourceDefinitionStatusToJSON(value.status),
    };
}
exports.V1CustomResourceDefinitionToJSON = V1CustomResourceDefinitionToJSON;
