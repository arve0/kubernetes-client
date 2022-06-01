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
exports.V1RollingUpdateStatefulSetStrategyToJSON = exports.V1RollingUpdateStatefulSetStrategyFromJSONTyped = exports.V1RollingUpdateStatefulSetStrategyFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1RollingUpdateStatefulSetStrategyFromJSON(json) {
    return V1RollingUpdateStatefulSetStrategyFromJSONTyped(json, false);
}
exports.V1RollingUpdateStatefulSetStrategyFromJSON = V1RollingUpdateStatefulSetStrategyFromJSON;
function V1RollingUpdateStatefulSetStrategyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'maxUnavailable': !runtime_1.exists(json, 'maxUnavailable') ? undefined : json['maxUnavailable'],
        'partition': !runtime_1.exists(json, 'partition') ? undefined : json['partition'],
    };
}
exports.V1RollingUpdateStatefulSetStrategyFromJSONTyped = V1RollingUpdateStatefulSetStrategyFromJSONTyped;
function V1RollingUpdateStatefulSetStrategyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'maxUnavailable': value.maxUnavailable,
        'partition': value.partition,
    };
}
exports.V1RollingUpdateStatefulSetStrategyToJSON = V1RollingUpdateStatefulSetStrategyToJSON;