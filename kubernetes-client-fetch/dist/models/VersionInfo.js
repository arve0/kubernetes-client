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
exports.VersionInfoToJSON = exports.VersionInfoFromJSONTyped = exports.VersionInfoFromJSON = void 0;
function VersionInfoFromJSON(json) {
    return VersionInfoFromJSONTyped(json, false);
}
exports.VersionInfoFromJSON = VersionInfoFromJSON;
function VersionInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'buildDate': json['buildDate'],
        'compiler': json['compiler'],
        'gitCommit': json['gitCommit'],
        'gitTreeState': json['gitTreeState'],
        'gitVersion': json['gitVersion'],
        'goVersion': json['goVersion'],
        'major': json['major'],
        'minor': json['minor'],
        'platform': json['platform'],
    };
}
exports.VersionInfoFromJSONTyped = VersionInfoFromJSONTyped;
function VersionInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'buildDate': value.buildDate,
        'compiler': value.compiler,
        'gitCommit': value.gitCommit,
        'gitTreeState': value.gitTreeState,
        'gitVersion': value.gitVersion,
        'goVersion': value.goVersion,
        'major': value.major,
        'minor': value.minor,
        'platform': value.platform,
    };
}
exports.VersionInfoToJSON = VersionInfoToJSON;
