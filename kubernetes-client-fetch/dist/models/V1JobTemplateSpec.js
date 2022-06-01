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
exports.V1JobTemplateSpecToJSON = exports.V1JobTemplateSpecFromJSONTyped = exports.V1JobTemplateSpecFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1JobTemplateSpecFromJSON(json) {
    return V1JobTemplateSpecFromJSONTyped(json, false);
}
exports.V1JobTemplateSpecFromJSON = V1JobTemplateSpecFromJSON;
function V1JobTemplateSpecFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'metadata': !runtime_1.exists(json, 'metadata') ? undefined : _1.V1ObjectMetaFromJSON(json['metadata']),
        'spec': !runtime_1.exists(json, 'spec') ? undefined : _1.V1JobSpecFromJSON(json['spec']),
    };
}
exports.V1JobTemplateSpecFromJSONTyped = V1JobTemplateSpecFromJSONTyped;
function V1JobTemplateSpecToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'metadata': _1.V1ObjectMetaToJSON(value.metadata),
        'spec': _1.V1JobSpecToJSON(value.spec),
    };
}
exports.V1JobTemplateSpecToJSON = V1JobTemplateSpecToJSON;
