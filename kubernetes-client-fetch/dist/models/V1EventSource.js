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
exports.V1EventSourceToJSON = exports.V1EventSourceFromJSONTyped = exports.V1EventSourceFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1EventSourceFromJSON(json) {
    return V1EventSourceFromJSONTyped(json, false);
}
exports.V1EventSourceFromJSON = V1EventSourceFromJSON;
function V1EventSourceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'component': !runtime_1.exists(json, 'component') ? undefined : json['component'],
        'host': !runtime_1.exists(json, 'host') ? undefined : json['host'],
    };
}
exports.V1EventSourceFromJSONTyped = V1EventSourceFromJSONTyped;
function V1EventSourceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'component': value.component,
        'host': value.host,
    };
}
exports.V1EventSourceToJSON = V1EventSourceToJSON;
