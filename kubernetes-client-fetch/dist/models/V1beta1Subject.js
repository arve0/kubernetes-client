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
exports.V1beta1SubjectToJSON = exports.V1beta1SubjectFromJSONTyped = exports.V1beta1SubjectFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1beta1SubjectFromJSON(json) {
    return V1beta1SubjectFromJSONTyped(json, false);
}
exports.V1beta1SubjectFromJSON = V1beta1SubjectFromJSON;
function V1beta1SubjectFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'group': !runtime_1.exists(json, 'group') ? undefined : _1.V1beta1GroupSubjectFromJSON(json['group']),
        'kind': json['kind'],
        'serviceAccount': !runtime_1.exists(json, 'serviceAccount') ? undefined : _1.V1beta1ServiceAccountSubjectFromJSON(json['serviceAccount']),
        'user': !runtime_1.exists(json, 'user') ? undefined : _1.V1beta1UserSubjectFromJSON(json['user']),
    };
}
exports.V1beta1SubjectFromJSONTyped = V1beta1SubjectFromJSONTyped;
function V1beta1SubjectToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'group': _1.V1beta1GroupSubjectToJSON(value.group),
        'kind': value.kind,
        'serviceAccount': _1.V1beta1ServiceAccountSubjectToJSON(value.serviceAccount),
        'user': _1.V1beta1UserSubjectToJSON(value.user),
    };
}
exports.V1beta1SubjectToJSON = V1beta1SubjectToJSON;