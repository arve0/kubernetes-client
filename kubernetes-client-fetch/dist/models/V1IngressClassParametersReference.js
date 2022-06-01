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
exports.V1IngressClassParametersReferenceToJSON = exports.V1IngressClassParametersReferenceFromJSONTyped = exports.V1IngressClassParametersReferenceFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1IngressClassParametersReferenceFromJSON(json) {
    return V1IngressClassParametersReferenceFromJSONTyped(json, false);
}
exports.V1IngressClassParametersReferenceFromJSON = V1IngressClassParametersReferenceFromJSON;
function V1IngressClassParametersReferenceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'apiGroup': !runtime_1.exists(json, 'apiGroup') ? undefined : json['apiGroup'],
        'kind': json['kind'],
        'name': json['name'],
        'namespace': !runtime_1.exists(json, 'namespace') ? undefined : json['namespace'],
        'scope': !runtime_1.exists(json, 'scope') ? undefined : json['scope'],
    };
}
exports.V1IngressClassParametersReferenceFromJSONTyped = V1IngressClassParametersReferenceFromJSONTyped;
function V1IngressClassParametersReferenceToJSON(value) {
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
        'scope': value.scope,
    };
}
exports.V1IngressClassParametersReferenceToJSON = V1IngressClassParametersReferenceToJSON;