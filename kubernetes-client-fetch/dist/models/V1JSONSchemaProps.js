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
exports.V1JSONSchemaPropsToJSON = exports.V1JSONSchemaPropsFromJSONTyped = exports.V1JSONSchemaPropsFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1JSONSchemaPropsFromJSON(json) {
    return V1JSONSchemaPropsFromJSONTyped(json, false);
}
exports.V1JSONSchemaPropsFromJSON = V1JSONSchemaPropsFromJSON;
function V1JSONSchemaPropsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        '$ref': !runtime_1.exists(json, '$ref') ? undefined : json['$ref'],
        '$schema': !runtime_1.exists(json, '$schema') ? undefined : json['$schema'],
        'additionalItems': !runtime_1.exists(json, 'additionalItems') ? undefined : json['additionalItems'],
        'additionalProperties': !runtime_1.exists(json, 'additionalProperties') ? undefined : json['additionalProperties'],
        'allOf': !runtime_1.exists(json, 'allOf') ? undefined : (json['allOf'].map(V1JSONSchemaPropsFromJSON)),
        'anyOf': !runtime_1.exists(json, 'anyOf') ? undefined : (json['anyOf'].map(V1JSONSchemaPropsFromJSON)),
        '_default': !runtime_1.exists(json, 'default') ? undefined : json['default'],
        'definitions': !runtime_1.exists(json, 'definitions') ? undefined : (runtime_1.mapValues(json['definitions'], V1JSONSchemaPropsFromJSON)),
        'dependencies': !runtime_1.exists(json, 'dependencies') ? undefined : json['dependencies'],
        'description': !runtime_1.exists(json, 'description') ? undefined : json['description'],
        '_enum': !runtime_1.exists(json, 'enum') ? undefined : json['enum'],
        'example': !runtime_1.exists(json, 'example') ? undefined : json['example'],
        'exclusiveMaximum': !runtime_1.exists(json, 'exclusiveMaximum') ? undefined : json['exclusiveMaximum'],
        'exclusiveMinimum': !runtime_1.exists(json, 'exclusiveMinimum') ? undefined : json['exclusiveMinimum'],
        'externalDocs': !runtime_1.exists(json, 'externalDocs') ? undefined : _1.V1ExternalDocumentationFromJSON(json['externalDocs']),
        'format': !runtime_1.exists(json, 'format') ? undefined : json['format'],
        'id': !runtime_1.exists(json, 'id') ? undefined : json['id'],
        'items': !runtime_1.exists(json, 'items') ? undefined : json['items'],
        'maxItems': !runtime_1.exists(json, 'maxItems') ? undefined : json['maxItems'],
        'maxLength': !runtime_1.exists(json, 'maxLength') ? undefined : json['maxLength'],
        'maxProperties': !runtime_1.exists(json, 'maxProperties') ? undefined : json['maxProperties'],
        'maximum': !runtime_1.exists(json, 'maximum') ? undefined : json['maximum'],
        'minItems': !runtime_1.exists(json, 'minItems') ? undefined : json['minItems'],
        'minLength': !runtime_1.exists(json, 'minLength') ? undefined : json['minLength'],
        'minProperties': !runtime_1.exists(json, 'minProperties') ? undefined : json['minProperties'],
        'minimum': !runtime_1.exists(json, 'minimum') ? undefined : json['minimum'],
        'multipleOf': !runtime_1.exists(json, 'multipleOf') ? undefined : json['multipleOf'],
        'not': !runtime_1.exists(json, 'not') ? undefined : V1JSONSchemaPropsFromJSON(json['not']),
        'nullable': !runtime_1.exists(json, 'nullable') ? undefined : json['nullable'],
        'oneOf': !runtime_1.exists(json, 'oneOf') ? undefined : (json['oneOf'].map(V1JSONSchemaPropsFromJSON)),
        'pattern': !runtime_1.exists(json, 'pattern') ? undefined : json['pattern'],
        'patternProperties': !runtime_1.exists(json, 'patternProperties') ? undefined : (runtime_1.mapValues(json['patternProperties'], V1JSONSchemaPropsFromJSON)),
        'properties': !runtime_1.exists(json, 'properties') ? undefined : (runtime_1.mapValues(json['properties'], V1JSONSchemaPropsFromJSON)),
        'required': !runtime_1.exists(json, 'required') ? undefined : json['required'],
        'title': !runtime_1.exists(json, 'title') ? undefined : json['title'],
        'type': !runtime_1.exists(json, 'type') ? undefined : json['type'],
        'uniqueItems': !runtime_1.exists(json, 'uniqueItems') ? undefined : json['uniqueItems'],
        'x_kubernetes_embedded_resource': !runtime_1.exists(json, 'x-kubernetes-embedded-resource') ? undefined : json['x-kubernetes-embedded-resource'],
        'x_kubernetes_int_or_string': !runtime_1.exists(json, 'x-kubernetes-int-or-string') ? undefined : json['x-kubernetes-int-or-string'],
        'x_kubernetes_list_map_keys': !runtime_1.exists(json, 'x-kubernetes-list-map-keys') ? undefined : json['x-kubernetes-list-map-keys'],
        'x_kubernetes_list_type': !runtime_1.exists(json, 'x-kubernetes-list-type') ? undefined : json['x-kubernetes-list-type'],
        'x_kubernetes_map_type': !runtime_1.exists(json, 'x-kubernetes-map-type') ? undefined : json['x-kubernetes-map-type'],
        'x_kubernetes_preserve_unknown_fields': !runtime_1.exists(json, 'x-kubernetes-preserve-unknown-fields') ? undefined : json['x-kubernetes-preserve-unknown-fields'],
        'x_kubernetes_validations': !runtime_1.exists(json, 'x-kubernetes-validations') ? undefined : (json['x-kubernetes-validations'].map(_1.V1ValidationRuleFromJSON)),
    };
}
exports.V1JSONSchemaPropsFromJSONTyped = V1JSONSchemaPropsFromJSONTyped;
function V1JSONSchemaPropsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        '$ref': value.$ref,
        '$schema': value.$schema,
        'additionalItems': value.additionalItems,
        'additionalProperties': value.additionalProperties,
        'allOf': value.allOf === undefined ? undefined : (value.allOf.map(V1JSONSchemaPropsToJSON)),
        'anyOf': value.anyOf === undefined ? undefined : (value.anyOf.map(V1JSONSchemaPropsToJSON)),
        'default': value._default,
        'definitions': value.definitions === undefined ? undefined : (runtime_1.mapValues(value.definitions, V1JSONSchemaPropsToJSON)),
        'dependencies': value.dependencies,
        'description': value.description,
        'enum': value._enum,
        'example': value.example,
        'exclusiveMaximum': value.exclusiveMaximum,
        'exclusiveMinimum': value.exclusiveMinimum,
        'externalDocs': _1.V1ExternalDocumentationToJSON(value.externalDocs),
        'format': value.format,
        'id': value.id,
        'items': value.items,
        'maxItems': value.maxItems,
        'maxLength': value.maxLength,
        'maxProperties': value.maxProperties,
        'maximum': value.maximum,
        'minItems': value.minItems,
        'minLength': value.minLength,
        'minProperties': value.minProperties,
        'minimum': value.minimum,
        'multipleOf': value.multipleOf,
        'not': V1JSONSchemaPropsToJSON(value.not),
        'nullable': value.nullable,
        'oneOf': value.oneOf === undefined ? undefined : (value.oneOf.map(V1JSONSchemaPropsToJSON)),
        'pattern': value.pattern,
        'patternProperties': value.patternProperties === undefined ? undefined : (runtime_1.mapValues(value.patternProperties, V1JSONSchemaPropsToJSON)),
        'properties': value.properties === undefined ? undefined : (runtime_1.mapValues(value.properties, V1JSONSchemaPropsToJSON)),
        'required': value.required,
        'title': value.title,
        'type': value.type,
        'uniqueItems': value.uniqueItems,
        'x-kubernetes-embedded-resource': value.x_kubernetes_embedded_resource,
        'x-kubernetes-int-or-string': value.x_kubernetes_int_or_string,
        'x-kubernetes-list-map-keys': value.x_kubernetes_list_map_keys,
        'x-kubernetes-list-type': value.x_kubernetes_list_type,
        'x-kubernetes-map-type': value.x_kubernetes_map_type,
        'x-kubernetes-preserve-unknown-fields': value.x_kubernetes_preserve_unknown_fields,
        'x-kubernetes-validations': value.x_kubernetes_validations === undefined ? undefined : (value.x_kubernetes_validations.map(_1.V1ValidationRuleToJSON)),
    };
}
exports.V1JSONSchemaPropsToJSON = V1JSONSchemaPropsToJSON;
