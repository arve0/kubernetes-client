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
exports.V1StatusDetailsToJSON = exports.V1StatusDetailsFromJSONTyped = exports.V1StatusDetailsFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1StatusDetailsFromJSON(json) {
    return V1StatusDetailsFromJSONTyped(json, false);
}
exports.V1StatusDetailsFromJSON = V1StatusDetailsFromJSON;
function V1StatusDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'causes': !runtime_1.exists(json, 'causes') ? undefined : (json['causes'].map(_1.V1StatusCauseFromJSON)),
        'group': !runtime_1.exists(json, 'group') ? undefined : json['group'],
        'kind': !runtime_1.exists(json, 'kind') ? undefined : json['kind'],
        'name': !runtime_1.exists(json, 'name') ? undefined : json['name'],
        'retryAfterSeconds': !runtime_1.exists(json, 'retryAfterSeconds') ? undefined : json['retryAfterSeconds'],
        'uid': !runtime_1.exists(json, 'uid') ? undefined : json['uid'],
    };
}
exports.V1StatusDetailsFromJSONTyped = V1StatusDetailsFromJSONTyped;
function V1StatusDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'causes': value.causes === undefined ? undefined : (value.causes.map(_1.V1StatusCauseToJSON)),
        'group': value.group,
        'kind': value.kind,
        'name': value.name,
        'retryAfterSeconds': value.retryAfterSeconds,
        'uid': value.uid,
    };
}
exports.V1StatusDetailsToJSON = V1StatusDetailsToJSON;
