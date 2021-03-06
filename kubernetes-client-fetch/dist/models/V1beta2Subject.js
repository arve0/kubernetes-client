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
exports.V1beta2SubjectToJSON = exports.V1beta2SubjectFromJSONTyped = exports.V1beta2SubjectFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1beta2SubjectFromJSON(json) {
    return V1beta2SubjectFromJSONTyped(json, false);
}
exports.V1beta2SubjectFromJSON = V1beta2SubjectFromJSON;
function V1beta2SubjectFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'group': !runtime_1.exists(json, 'group') ? undefined : _1.V1beta2GroupSubjectFromJSON(json['group']),
        'kind': json['kind'],
        'serviceAccount': !runtime_1.exists(json, 'serviceAccount') ? undefined : _1.V1beta2ServiceAccountSubjectFromJSON(json['serviceAccount']),
        'user': !runtime_1.exists(json, 'user') ? undefined : _1.V1beta2UserSubjectFromJSON(json['user']),
    };
}
exports.V1beta2SubjectFromJSONTyped = V1beta2SubjectFromJSONTyped;
function V1beta2SubjectToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'group': _1.V1beta2GroupSubjectToJSON(value.group),
        'kind': value.kind,
        'serviceAccount': _1.V1beta2ServiceAccountSubjectToJSON(value.serviceAccount),
        'user': _1.V1beta2UserSubjectToJSON(value.user),
    };
}
exports.V1beta2SubjectToJSON = V1beta2SubjectToJSON;
