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
exports.V1CustomResourceDefinitionSpecToJSON = exports.V1CustomResourceDefinitionSpecFromJSONTyped = exports.V1CustomResourceDefinitionSpecFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1CustomResourceDefinitionSpecFromJSON(json) {
    return V1CustomResourceDefinitionSpecFromJSONTyped(json, false);
}
exports.V1CustomResourceDefinitionSpecFromJSON = V1CustomResourceDefinitionSpecFromJSON;
function V1CustomResourceDefinitionSpecFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'conversion': !runtime_1.exists(json, 'conversion') ? undefined : _1.V1CustomResourceConversionFromJSON(json['conversion']),
        'group': json['group'],
        'names': _1.V1CustomResourceDefinitionNamesFromJSON(json['names']),
        'preserveUnknownFields': !runtime_1.exists(json, 'preserveUnknownFields') ? undefined : json['preserveUnknownFields'],
        'scope': json['scope'],
        'versions': (json['versions'].map(_1.V1CustomResourceDefinitionVersionFromJSON)),
    };
}
exports.V1CustomResourceDefinitionSpecFromJSONTyped = V1CustomResourceDefinitionSpecFromJSONTyped;
function V1CustomResourceDefinitionSpecToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'conversion': _1.V1CustomResourceConversionToJSON(value.conversion),
        'group': value.group,
        'names': _1.V1CustomResourceDefinitionNamesToJSON(value.names),
        'preserveUnknownFields': value.preserveUnknownFields,
        'scope': value.scope,
        'versions': (value.versions.map(_1.V1CustomResourceDefinitionVersionToJSON)),
    };
}
exports.V1CustomResourceDefinitionSpecToJSON = V1CustomResourceDefinitionSpecToJSON;