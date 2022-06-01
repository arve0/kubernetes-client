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
exports.V1TokenRequestSpecToJSON = exports.V1TokenRequestSpecFromJSONTyped = exports.V1TokenRequestSpecFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1TokenRequestSpecFromJSON(json) {
    return V1TokenRequestSpecFromJSONTyped(json, false);
}
exports.V1TokenRequestSpecFromJSON = V1TokenRequestSpecFromJSON;
function V1TokenRequestSpecFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'audiences': json['audiences'],
        'boundObjectRef': !runtime_1.exists(json, 'boundObjectRef') ? undefined : _1.V1BoundObjectReferenceFromJSON(json['boundObjectRef']),
        'expirationSeconds': !runtime_1.exists(json, 'expirationSeconds') ? undefined : json['expirationSeconds'],
    };
}
exports.V1TokenRequestSpecFromJSONTyped = V1TokenRequestSpecFromJSONTyped;
function V1TokenRequestSpecToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'audiences': value.audiences,
        'boundObjectRef': _1.V1BoundObjectReferenceToJSON(value.boundObjectRef),
        'expirationSeconds': value.expirationSeconds,
    };
}
exports.V1TokenRequestSpecToJSON = V1TokenRequestSpecToJSON;