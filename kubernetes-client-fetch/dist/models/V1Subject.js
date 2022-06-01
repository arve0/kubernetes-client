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
exports.V1SubjectToJSON = exports.V1SubjectFromJSONTyped = exports.V1SubjectFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1SubjectFromJSON(json) {
    return V1SubjectFromJSONTyped(json, false);
}
exports.V1SubjectFromJSON = V1SubjectFromJSON;
function V1SubjectFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'apiGroup': !runtime_1.exists(json, 'apiGroup') ? undefined : json['apiGroup'],
        'kind': json['kind'],
        'name': json['name'],
        'namespace': !runtime_1.exists(json, 'namespace') ? undefined : json['namespace'],
    };
}
exports.V1SubjectFromJSONTyped = V1SubjectFromJSONTyped;
function V1SubjectToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'apiGroup': value.apiGroup,
        'kind': value.kind,
        'name': value.name,
        'namespace': value.namespace,
    };
}
exports.V1SubjectToJSON = V1SubjectToJSON;