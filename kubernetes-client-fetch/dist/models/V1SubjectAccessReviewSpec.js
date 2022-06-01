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
exports.V1SubjectAccessReviewSpecToJSON = exports.V1SubjectAccessReviewSpecFromJSONTyped = exports.V1SubjectAccessReviewSpecFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1SubjectAccessReviewSpecFromJSON(json) {
    return V1SubjectAccessReviewSpecFromJSONTyped(json, false);
}
exports.V1SubjectAccessReviewSpecFromJSON = V1SubjectAccessReviewSpecFromJSON;
function V1SubjectAccessReviewSpecFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'extra': !runtime_1.exists(json, 'extra') ? undefined : json['extra'],
        'groups': !runtime_1.exists(json, 'groups') ? undefined : json['groups'],
        'nonResourceAttributes': !runtime_1.exists(json, 'nonResourceAttributes') ? undefined : _1.V1NonResourceAttributesFromJSON(json['nonResourceAttributes']),
        'resourceAttributes': !runtime_1.exists(json, 'resourceAttributes') ? undefined : _1.V1ResourceAttributesFromJSON(json['resourceAttributes']),
        'uid': !runtime_1.exists(json, 'uid') ? undefined : json['uid'],
        'user': !runtime_1.exists(json, 'user') ? undefined : json['user'],
    };
}
exports.V1SubjectAccessReviewSpecFromJSONTyped = V1SubjectAccessReviewSpecFromJSONTyped;
function V1SubjectAccessReviewSpecToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'extra': value.extra,
        'groups': value.groups,
        'nonResourceAttributes': _1.V1NonResourceAttributesToJSON(value.nonResourceAttributes),
        'resourceAttributes': _1.V1ResourceAttributesToJSON(value.resourceAttributes),
        'uid': value.uid,
        'user': value.user,
    };
}
exports.V1SubjectAccessReviewSpecToJSON = V1SubjectAccessReviewSpecToJSON;
