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
exports.V1PodTemplateToJSON = exports.V1PodTemplateFromJSONTyped = exports.V1PodTemplateFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1PodTemplateFromJSON(json) {
    return V1PodTemplateFromJSONTyped(json, false);
}
exports.V1PodTemplateFromJSON = V1PodTemplateFromJSON;
function V1PodTemplateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'apiVersion': !runtime_1.exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !runtime_1.exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !runtime_1.exists(json, 'metadata') ? undefined : _1.V1ObjectMetaFromJSON(json['metadata']),
        'template': !runtime_1.exists(json, 'template') ? undefined : _1.V1PodTemplateSpecFromJSON(json['template']),
    };
}
exports.V1PodTemplateFromJSONTyped = V1PodTemplateFromJSONTyped;
function V1PodTemplateToJSON(value) {
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
        'template': _1.V1PodTemplateSpecToJSON(value.template),
    };
}
exports.V1PodTemplateToJSON = V1PodTemplateToJSON;