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
exports.V1StatusCauseToJSON = exports.V1StatusCauseFromJSONTyped = exports.V1StatusCauseFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1StatusCauseFromJSON(json) {
    return V1StatusCauseFromJSONTyped(json, false);
}
exports.V1StatusCauseFromJSON = V1StatusCauseFromJSON;
function V1StatusCauseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'field': !runtime_1.exists(json, 'field') ? undefined : json['field'],
        'message': !runtime_1.exists(json, 'message') ? undefined : json['message'],
        'reason': !runtime_1.exists(json, 'reason') ? undefined : json['reason'],
    };
}
exports.V1StatusCauseFromJSONTyped = V1StatusCauseFromJSONTyped;
function V1StatusCauseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'field': value.field,
        'message': value.message,
        'reason': value.reason,
    };
}
exports.V1StatusCauseToJSON = V1StatusCauseToJSON;
